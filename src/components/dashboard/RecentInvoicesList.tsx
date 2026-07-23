"use client";

import { m } from "framer-motion";
import { FileText, ArrowLeft } from "lucide-react";
import { InvoiceWithClient, InvoiceStatus } from "@/types/database";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { convertToHijri } from "@/lib/dateConvert";
import { formatDate } from "@/lib/formatters";
import { Price } from "@/components/ui";

interface RecentInvoicesListProps {
	invoices: InvoiceWithClient[];
}

const statusConfig: Record<InvoiceStatus, { label: string; color: string }> = {
	draft: { label: "مسودة", color: "bg-surface-inset text-muted-foreground" },
	sent: { label: "مرسلة", color: "bg-blue-50 text-blue-600" },
	paid: { label: "مدفوعة", color: "bg-green-50 text-green-600" },
	overdue: { label: "متأخرة", color: "bg-orange-50 text-orange-600" },
	cancelled: { label: "ملغية", color: "bg-red-50 text-red-600" },
};

export default function RecentInvoicesList({
	invoices,
}: RecentInvoicesListProps) {
	const router = useRouter();

	if (invoices.length === 0) {
		return (
			<div className="bg-surface rounded-2xl border border-border shadow-sm p-8 text-center">
				<FileText className="w-12 h-12 text-disabled mx-auto mb-3" />
				<p className="text-subtle text-sm">لا توجد فواتير في هذا الشهر</p>
			</div>
		);
	}

	return (
		<div className="bg-surface rounded-2xl border border-border shadow-sm overflow-hidden">
			<div className="p-5 border-b border-border">
				<h3 className="text-lg font-bold text-brand-hover">الفواتير الأخيرة</h3>
				<p className="text-xs text-subtle mt-1">آخر الفواتير في هذا الشهر</p>
			</div>
			<div className="divide-y divide-border max-h-[400px] overflow-y-auto">
				{invoices.map((invoice, index) => {
					const status = statusConfig[invoice.status] || statusConfig.draft;
					const { formattedHijri } = convertToHijri(invoice.issue_date);

					return (
						<m.div
							key={invoice.id}
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: index * 0.05 }}
							onClick={() => router.push(`/dashboard/invoices/${invoice.id}`)}
							className="p-4 hover:bg-surface-2 cursor-pointer transition-colors group"
						>
							<div className="flex items-center justify-between gap-4">
								<div className="flex-1 min-w-0">
									<div className="flex items-center gap-3 mb-2">
										<span className="text-sm font-bold text-foreground">
											#{invoice.invoice_number || invoice.id.slice(0, 8)}
										</span>
										<span
											className={cn(
												"px-2 py-0.5 rounded-lg text-xs font-medium",
												status.color
											)}
										>
											{status.label}
										</span>
									</div>
									<p className="text-sm text-muted-foreground mb-1">
										{invoice.client?.name || "عميل غير معروف"}
									</p>
									<div className="flex items-center gap-4 text-xs text-subtle">
										<span>{formatDate(invoice.issue_date)}</span>
										<span className="text-disabled">{formattedHijri}</span>
									</div>
								</div>
								<div className="flex items-center gap-3 flex-shrink-0">
									<Price amount={Number(invoice.total_amount || 0)} size="sm" className="text-foreground" />
									<ArrowLeft
										size={16}
										className="text-disabled group-hover:text-brand transition-colors"
									/>
								</div>
							</div>
						</m.div>
					);
				})}
			</div>
		</div>
	);
}

