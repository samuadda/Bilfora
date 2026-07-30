"use server";

import { createClient } from "@/utils/supabase/server";
import { upsertInvoiceSettings } from "@/features/settings/data/settings.repo";
import { InvoiceSettingsInput } from "@/features/settings/schemas/invoiceSettings.schema";
import { revalidatePath } from "next/cache";

export async function updateSettingsAction(payload: InvoiceSettingsInput) {
	try {
		const supabase = await createClient();
		const {
			data: { user },
		} = await supabase.auth.getUser();

		if (!user) {
			return { success: false, error: "Unauthorized" };
		}

		await upsertInvoiceSettings(supabase, user.id, payload);
		revalidatePath("/dashboard/invoices-settings");
        // Also revalidate invoices since they use these settings
        revalidatePath("/dashboard/invoices"); 
		return { success: true };
	} catch (err: unknown) {
		// Sentry picks this up from the server console; writing a log file here
		// would fail on a read-only serverless filesystem anyway.
		console.error("Error updating settings:", err);
		let errorMessage = "Unknown error occurred";
		if (err instanceof Error && err.name === "ZodError" && "issues" in err && Array.isArray((err as Record<string, unknown>).issues)) {
			// Extract just the message from the first Zod issue
			const issues = (err as Record<string, unknown>).issues as Array<{ message: string }>;
			errorMessage = issues.map((i) => i.message).join(', ');
		} else if (err instanceof Error && err.message) {
			try {
				const parsed = JSON.parse(err.message);
				if (Array.isArray(parsed) && parsed[0]?.message) {
					errorMessage = parsed.map((i: unknown) => (i as { message: string }).message).join(', ');
				} else {
					errorMessage = err.message;
				}
			} catch {
				errorMessage = err.message;
			}
		} else {
			errorMessage = (err && typeof err === 'object' && 'details' in err ? (err as { details: string }).details : null) || JSON.stringify(err);
		}
		
		return { success: false, error: errorMessage };
	}
}
