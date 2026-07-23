"use client";

import { formatCurrency, formatDate } from "@/lib/formatters";

interface Payment {
    id: string;
    amount: number;
    payment_date: string;
    payment_method: string;
    reference_number?: string | null;
    notes?: string | null;
}

interface InvoicePaymentsListProps {
    payments: Payment[];
}

const methodLabels: Record<string, string> = {
    cash: "نقداً",
    transfer: "تحويل بنكي",
    card: "بطاقة",
    check: "شيك",
    other: "أخرى",
};

export function InvoicePaymentsList({ payments }: InvoicePaymentsListProps) {
    if (payments.length === 0) {
        return <div className="text-sm text-subtle text-center py-4">لا توجد دفعات مسجلة</div>;
    }

    return (
        <div className="border border-border rounded-lg overflow-hidden bg-surface">
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-right">
                    <thead className="bg-surface-2 text-muted-foreground font-medium border-b border-border">
                        <tr>
                            <th className="px-4 py-3 text-right">التاريخ</th>
                            <th className="px-4 py-3 text-right">المبلغ</th>
                            <th className="px-4 py-3 text-right">الطريقة</th>
                            <th className="px-4 py-3 text-right">المرجع</th>
                            <th className="px-4 py-3 text-right">ملاحظات</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {payments.map((payment) => (
                            <tr key={payment.id} className="hover:bg-surface-2">
                                <td className="px-4 py-3 whitespace-nowrap">{formatDate(payment.payment_date)}</td>
                                <td className="px-4 py-3 font-bold text-foreground">{formatCurrency(payment.amount)}</td>
                                <td className="px-4 py-3">
                                    <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-surface-inset text-muted-foreground">
                                        {methodLabels[payment.payment_method] || payment.payment_method}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-subtle text-xs">
                                    {payment.reference_number || "—"}
                                </td>
                                <td className="px-4 py-3 text-subtle text-xs max-w-[200px] truncate" title={payment.notes || ""}>
                                    {payment.notes || "—"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
