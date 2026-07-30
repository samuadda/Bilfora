import { z } from "zod";
import { IS_ZATCA_ENABLED } from "@/config/features";

// ── ZATCA Tax Number Validation ─────────────────────────────────────────────
export const ZATCA_TAX_NUMBER_REGEX = /^3\d{13}3$/;

// ── Shared Client Schemas ───────────────────────────────────────────────────

export const addressSchema = z.object({
    country: z.string().optional().or(z.literal("")),
    city: z.string().optional().or(z.literal("")),
    district: z.string().optional().or(z.literal("")),
    street: z.string().optional().or(z.literal("")),
    building_no: z.string().optional().or(z.literal("")),
    postal_code: z.string().optional().or(z.literal("")),
});

const SA_PHONE_REGEX = /^05\d{8}$/; // Starts with 05, followed by 8 digits (Total 10)

const phoneSchema = z.string().refine((val) => {
    if (!val) return true; // Optional
    return SA_PHONE_REGEX.test(val);
}, "رقم الجوال لازم يبدأ بـ 05 ويكون 10 أرقام");

// Base schema for common fields
const baseClientSchema = z.object({
    name: z.string().min(2, "الاسم قصير شوي، كمّله 😄"),
    phone: phoneSchema.optional().or(z.literal("")),
    landline: z.string().optional().or(z.literal("")),
    email: z.string().email("تأكد من صيغة الإيميل 📧").optional().or(z.literal("")),
});

// Individual Client Schema
export const individualClientSchema = baseClientSchema.extend({
    client_type: z.literal("individual"),
    tax_number: z.string().optional().or(z.literal("")),
    address: z.string().optional().or(z.literal("")),
});

// Organization Client Schema
export const organizationClientSchema = baseClientSchema.extend({
    client_type: z.literal("organization"),
    tax_number: z
        .string()
        .optional()
        .or(z.literal(""))
        .refine(
            (val) => !val || ZATCA_TAX_NUMBER_REGEX.test(val),
            "الرقم الضريبي لازم يكون 15 رقم ويبدأ وينتهي بـ 3"
        ),
    address: z.string().min(5, "العنوان الوطني مطلوب للمنشآت، اكتب عنوان مختصر"),
});

// ── Simple Beta Schema (no ZATCA) ───────────────────────────────────────────
const simpleClientSchema = z.object({
    client_type: z.literal("individual").default("individual"),
    name: z.string().min(2, "الاسم قصير شوي، كمّله 😄"),
    phone: phoneSchema.optional().or(z.literal("")),
    landline: z.string().optional().or(z.literal("")),
    email: z.string().email("تأكد من صيغة الإيميل 📧").optional().or(z.literal("")),
    tax_number: z.string().optional().or(z.literal("")),
    address: z.string().optional().or(z.literal("")),
});

// ── Exported Schema (flag-gated) ────────────────────────────────────────────
const zatcaClientSchema = z.discriminatedUnion("client_type", [
    individualClientSchema,
    organizationClientSchema,
]);

export const clientSchema = IS_ZATCA_ENABLED ? zatcaClientSchema : simpleClientSchema;

// Concrete type covering all possible client form fields
export type ClientFormValues = {
    client_type: "individual" | "organization";
    name: string;
    phone?: string;
    landline?: string;
    email?: string;
    tax_number?: string;
    address?: string;
};
