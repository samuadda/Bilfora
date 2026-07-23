"use client";

import { Plus, UserPlus, Package } from "lucide-react";
import { m } from "framer-motion";

interface DashboardQuickActionsProps {
	onCreateInvoice: () => void;
	onCreateClient: () => void;
	onCreateProduct: () => void;
}

export default function DashboardQuickActions({
	onCreateInvoice,
	onCreateClient,
	onCreateProduct,
}: DashboardQuickActionsProps) {
	return (
		<div className="flex flex-wrap gap-3">
			<m.button
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
				onClick={onCreateInvoice}
				className="inline-flex items-center gap-2 rounded-xl bg-brand text-white px-5 py-2.5 text-sm font-bold shadow-lg shadow-brand hover:shadow-xl hover:bg-brand-primaryHover transition-all"
			>
				<Plus size={18} strokeWidth={2.5} />
				<span>إنشاء فاتورة جديدة</span>
			</m.button>
			<m.button
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
				onClick={onCreateClient}
				className="inline-flex items-center gap-2 rounded-xl bg-surface text-muted-foreground px-5 py-2.5 text-sm font-medium border border-border hover:bg-surface-2 transition-all"
			>
				<UserPlus size={18} strokeWidth={2.5} />
				<span>إضافة عميل</span>
			</m.button>
			<m.button
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
				onClick={onCreateProduct}
				className="inline-flex items-center gap-2 rounded-xl bg-surface text-muted-foreground px-5 py-2.5 text-sm font-medium border border-border hover:bg-surface-2 transition-all"
			>
				<Package size={18} strokeWidth={2.5} />
				<span>إضافة منتج</span>
			</m.button>
		</div>
	);
}

