"use client";

import { useState } from "react";
import Image from "next/image";
import {
	Hash,
	CalendarClock,
	Percent,
	CreditCard,
	Send,
	FileText,
	Building2,
	MapPin,
	LayoutTemplate,
	Palette,
	QrCode,
	Receipt,
	Globe,
	Loader2
} from "lucide-react";
import { m } from "framer-motion";
import { InvoiceSettings } from "@/features/settings/schemas/invoiceSettings.schema";
import { updateSettingsAction } from "@/actions/settings";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui";
import { IS_ZATCA_ENABLED } from "@/config/features";

interface SettingsClientProps {
	initialSettings: InvoiceSettings | null;
}

export default function SettingsClient({ initialSettings }: SettingsClientProps) {
	const { toast } = useToast();
	const [isLoading, setIsLoading] = useState(false);

	// Initialize state with props or defaults
	const [prefix, setPrefix] = useState(initialSettings?.numbering_prefix ?? "INV-");
	const [nextNumber] = useState(101); // Not in schema currently? We'll ignore for now or add to schema if needed. Schema has 'numbering_prefix' only.
	// Note: 'next_invoice_number' might be in a sequence table, not settings. We'll disable this field or just keep it UI only for now if not in schema.

	const [dueDays, setDueDays] = useState(30); // Not in schema?
	// Schema has: vat_rate, currency, timezone, etc.

	// Map schema fields to state
	const [vatNumber, setVatNumber] = useState(initialSettings?.tax_number ?? "");
	const [businessLogo, setBusinessLogo] = useState<string | null>(initialSettings?.logo_url ?? null);
	const [addressLine, setAddressLine] = useState(initialSettings?.address_line1 ?? "");
	const [city, setCity] = useState(initialSettings?.city ?? "");
	const [sellerName, setSellerName] = useState(initialSettings?.name ?? "");

	const [iban, setIban] = useState(initialSettings?.iban ?? "");
	const [footerNote, setFooterNote] = useState(initialSettings?.invoice_footer ?? "شكراً لتعاملكم معنا");

	// Format tax rate: 0.15 -> 15
	const [taxRate, setTaxRate] = useState(
		initialSettings?.default_vat_rate ? initialSettings.default_vat_rate * 100 : 15
	);

	// UI only states (not in schema yet, or handled differently)
	const [autoSend, setAutoSend] = useState(false);
	const [allowPartials, setAllowPartials] = useState(true);
	const [template, setTemplate] = useState<"classic" | "compact" | "modern">("classic");
	const [primaryColor, setPrimaryColor] = useState("var(--brand)");
	const [qrValue, setQrValue] = useState(""); // This is typically generated, not saved as value?

	const handleSave = async () => {
		setIsLoading(true);
		try {
			const payload = {
				name: sellerName || "My Business", // Fallback validation
				tax_number: vatNumber || "300000000000003",
				address_line1: addressLine || null,
				city: city || null,
				logo_url: businessLogo, // Note: this might be blob: url which won't work across sessions. Needs upload.
				iban: iban || null,
				invoice_footer: footerNote || null,
				default_vat_rate: IS_ZATCA_ENABLED ? taxRate / 100 : 0, // Force 0 in Simple Mode
				numbering_prefix: prefix,
				currency: "SAR" as const,
				timezone: "Asia/Riyadh",
				brand_color: primaryColor,
				bank_name: null,
				payment_notes: null,
				default_terms: "Net 30", 
			};

			const result = await updateSettingsAction(payload);
			if (result.success) {
				toast({
					title: "تم الحفظ بنجاح",
					description: "تم تحديث إعدادات الفواتير",
				});
			} else {
				toast({
					variant: "destructive",
					title: "خطأ في الحفظ",
					description: result.error || "تأكد من إدخال جميع البيانات المطلوبة",
				});
			}
		} catch {
			toast({
				variant: "destructive",
				title: "خطأ",
				description: "حدث خطأ غير متوقع",
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="space-y-8 pb-10">
			{/* Header */}
			<m.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				className="flex flex-col gap-2"
			>
				<h1 className="text-3xl font-bold text-foreground">إعدادات الفواتير</h1>
				<p className="text-subtle">تخصيص مظهر الفواتير، الضرائب، وخيارات الدفع</p>
			</m.div>

			{/* Business info */}
			<m.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
				className="bg-surface rounded-3xl border border-border p-6 md:p-8 shadow-sm"
			>
				<h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
					<Building2 className="text-brand" size={24} />
					بيانات النشاط التجاري
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
					<div className="space-y-2">
						<label className="text-sm font-medium text-muted-foreground">
							اسم المنشأة
						</label>
						<input
							value={sellerName}
							onChange={(e) => setSellerName(e.target.value)}
							className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:border-brand focus:ring-brand transition-all"
							placeholder="اسم متجرك أو شركتك"
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{IS_ZATCA_ENABLED && (
					<div className="space-y-2">
						<label className="text-sm font-medium text-muted-foreground">
							الرقم الضريبي (VAT)
						</label>
						<div className="relative">
							<Receipt
								className="absolute right-3 top-1/2 -translate-y-1/2 text-disabled"
								size={18}
							/>
							<input
								value={vatNumber}
								onChange={(e) => setVatNumber(e.target.value)}
								className="w-full rounded-xl border border-border pr-10 pl-4 py-3 text-sm focus:border-brand focus:ring-brand transition-all"
								placeholder="3xxxxxxxxxxxxx3"
							/>
						</div>
					</div>
					)}
					<div className="space-y-2">
						<label className="text-sm font-medium text-muted-foreground">
							شعار الفواتير
						</label>
						<div className="flex items-center gap-4">
							<div className="relative w-14 h-14 rounded-xl overflow-hidden border border-border bg-surface-2 flex items-center justify-center">
								{businessLogo ? (
									<Image
										src={businessLogo}
										alt="Logo"
										fill
										className="object-contain"
									/>
								) : (
									<Building2 className="text-disabled" size={24} />
								)}
							</div>
							{/* Upload needs a storage bucket and a logo_url column that do not
							    exist yet. Shown as unavailable rather than accepting a file
							    and silently dropping it after the session ends. */}
							<div className="flex flex-col gap-1">
								<span className="px-4 py-2 rounded-xl bg-surface-inset text-disabled text-sm font-bold cursor-not-allowed select-none w-fit">
									رفع شعار
								</span>
								<span className="text-xs text-subtle">قريباً</span>
							</div>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
					<div className="md:col-span-2 space-y-2">
						<label className="text-sm font-medium text-muted-foreground">
							العنوان
						</label>
						<div className="relative">
							<MapPin
								className="absolute right-3 top-1/2 -translate-y-1/2 text-disabled"
								size={18}
							/>
							<input
								value={addressLine}
								onChange={(e) => setAddressLine(e.target.value)}
								className="w-full rounded-xl border border-border pr-10 pl-4 py-3 text-sm focus:border-brand focus:ring-brand transition-all"
								placeholder="الشارع، الحي، رقم المبنى"
							/>
						</div>
					</div>
					<div className="space-y-2">
						<label className="text-sm font-medium text-muted-foreground">
							المدينة
						</label>
						<input
							value={city}
							onChange={(e) => setCity(e.target.value)}
							className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:border-brand focus:ring-brand transition-all"
							placeholder="الرياض"
						/>
					</div>
				</div>
			</m.div>

			{/* Numbering & due */}
			<m.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
				className="bg-surface rounded-3xl border border-border p-6 md:p-8 shadow-sm"
			>
				<h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
					<Hash className="text-brand" size={24} />
					إعدادات الترقيم
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="space-y-2">
						<label className="text-sm font-medium text-muted-foreground">
							بداية الفاتورة
						</label>
						<div className="relative">
							<Hash
								className="absolute right-3 top-1/2 -translate-y-1/2 text-disabled"
								size={18}
							/>
							<input
								value={prefix}
								onChange={(e) => setPrefix(e.target.value)}
								className="w-full rounded-xl border border-border pr-10 pl-4 py-3 text-sm focus:border-brand focus:ring-brand transition-all"
								placeholder="INV-"
							/>
						</div>
					</div>
					<div className="space-y-2">
						<label className="text-sm font-medium text-muted-foreground">
							الرقم التالي (تجريبي)
						</label>
						<input
							type="number"
							value={nextNumber}
							disabled
							className="w-full rounded-xl border border-border px-4 py-3 text-sm bg-surface-2 text-subtle cursor-not-allowed"
						/>
					</div>
					<div className="space-y-2">
						<label className="text-sm font-medium text-muted-foreground">
							فترة الاستحقاق (أيام - تجريبي)
						</label>
						<div className="relative">
							<CalendarClock
								className="absolute right-3 top-1/2 -translate-y-1/2 text-disabled"
								size={18}
							/>
							<input
								type="number"
								value={dueDays}
								onChange={(e) => setDueDays(parseInt(e.target.value || "0", 10))}
								disabled
								className="w-full rounded-xl border border-border pr-10 pl-4 py-3 text-sm bg-surface-2 text-subtle cursor-not-allowed"
							/>
						</div>
					</div>
				</div>
			</m.div>

			{/* Taxes, sending, footer */}
			<m.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
				className="bg-surface rounded-3xl border border-border p-6 md:p-8 shadow-sm"
			>
				<h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
					{IS_ZATCA_ENABLED ? (
						<><Percent className="text-brand" size={24} />الضرائب والشروط</>
					) : (
						<><FileText className="text-brand" size={24} />إعدادات الفاتورة</>
					)}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{IS_ZATCA_ENABLED && (
					<div className="space-y-2">
						<label className="text-sm font-medium text-muted-foreground">
							نسبة الضريبة (%)
						</label>
						<div className="relative">
							<Percent
								className="absolute right-3 top-1/2 -translate-y-1/2 text-disabled"
								size={18}
							/>
							<input
								type="number"
								value={taxRate}
								onChange={(e) => setTaxRate(parseFloat(e.target.value || "0"))}
								className="w-full rounded-xl border border-border pr-10 pl-4 py-3 text-sm focus:border-brand focus:ring-brand transition-all"
							/>
						</div>
					</div>
					)}
					<label className="flex items-center justify-between p-4 rounded-xl border border-border hover:bg-surface-2 transition-all cursor-pointer bg-surface">
						<span className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
							<Send size={18} className="text-brand" /> إرسال تلقائي
						</span>
						<div className="relative inline-flex items-center cursor-pointer">
							<input type="checkbox" checked={autoSend} onChange={(e) => setAutoSend(e.target.checked)} className="sr-only peer" />
							<div className="w-11 h-6 bg-surface-inset peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface after:border-border-strong after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
						</div>
					</label>
					<label className="flex items-center justify-between p-4 rounded-xl border border-border hover:bg-surface-2 transition-all cursor-pointer bg-surface">
						<span className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
							<FileText size={18} className="text-brand" /> دفع جزئي
						</span>
						<div className="relative inline-flex items-center cursor-pointer">
							<input type="checkbox" checked={allowPartials} onChange={(e) => setAllowPartials(e.target.checked)} className="sr-only peer" />
							<div className="w-11 h-6 bg-surface-inset peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface after:border-border-strong after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
						</div>
					</label>
				</div>
				<div className="mt-6 space-y-2">
					<label className="text-sm font-medium text-muted-foreground">
						ملاحظة تذييل الفاتورة
					</label>
					<textarea
						rows={3}
						value={footerNote}
						onChange={(e) => setFooterNote(e.target.value)}
						className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:border-brand focus:ring-brand transition-all resize-none"
						placeholder="مثال: شكراً لتعاملكم معنا، يرجى التحويل خلال 30 يوم"
					/>
				</div>
			</m.div>

			{/* Branding & template - UI Only for now */}
			<m.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.4 }}
				className="bg-surface rounded-3xl border border-border p-6 md:p-8 shadow-sm"
			>
				<h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
					<Palette className="text-brand" size={24} />
					التصميم (قريباً)
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 opacity-50 pointer-events-none">
					{/* ... preserved existing UI code ... */}
					<div className="space-y-2">
						<label className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground">
							<LayoutTemplate size={15} className="text-disabled" />
							القالب
						</label>
						<Select
							value={template}
							onValueChange={(val) => setTemplate(val as "classic" | "compact" | "modern")}
						>
							<SelectTrigger className="w-full h-11 bg-surface border-border">
								<SelectValue placeholder="اختر القالب" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="classic">كلاسيكي</SelectItem>
								<SelectItem value="compact">مضغوط</SelectItem>
								<SelectItem value="modern">عصري</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="space-y-2">
						<label className="text-sm font-medium text-muted-foreground">
							اللون الأساسي
						</label>
						<div className="relative flex items-center">
							<input
								type="color"
								value={primaryColor}
								onChange={(e) => setPrimaryColor(e.target.value)}
								className="w-full h-12 rounded-xl border border-border p-1 cursor-pointer"
							/>
						</div>
					</div>
				</div>
			</m.div>

			{/* Default payment info */}
			<m.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5 }}
				className="bg-surface rounded-3xl border border-border p-6 md:p-8 shadow-sm"
			>
				<h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
					<CreditCard className="text-brand" size={24} />
					بيانات الدفع
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="space-y-2">
						<label className="text-sm font-medium text-muted-foreground">
							رقم الآيبان (IBAN)
						</label>
						<div className="relative">
							<Globe className="absolute right-3 top-1/2 -translate-y-1/2 text-disabled" size={18} />
							<input
								value={iban}
								onChange={(e) => setIban(e.target.value)}
								className="w-full rounded-xl border border-border pr-10 pl-4 py-3 text-sm focus:border-brand focus:ring-brand transition-all"
								placeholder="SAxx xxxx xxxx xxxx xxxx xx"
							/>
						</div>
					</div>
					<div className="space-y-2">
						<label className="text-sm font-medium text-muted-foreground">
							رابط QR أو نص للدفع (غير مفعل)
						</label>
						<div className="relative">
							<QrCode
								className="absolute right-3 top-1/2 -translate-y-1/2 text-disabled"
								size={18}
							/>
							<input
								value={qrValue}
								onChange={(e) => setQrValue(e.target.value)}
								className="w-full rounded-xl border border-border pr-10 pl-4 py-3 text-sm focus:border-brand focus:ring-brand transition-all"
								placeholder="رابط بوابة الدفع أو تعليمات"
								disabled
							/>
						</div>
					</div>
				</div>
				<div className="flex justify-end mt-8">
					<button
						onClick={handleSave}
						disabled={isLoading}
						className="px-8 py-3 rounded-xl bg-brand text-white text-base font-bold hover:bg-brand-hover shadow-lg shadow-brand transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
					>
						{isLoading && <Loader2 className="animate-spin w-4 h-4" />}
						حفظ الإعدادات
					</button>
				</div>
			</m.div>
		</div>
	);
}
