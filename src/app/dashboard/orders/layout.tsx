import Link from "next/link";
import { Plus, Search } from "lucide-react";

export default function OrdersLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="space-y-6">
			{/* Page header */}
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
				<div>
					<h1 className="text-2xl font-bold text-foreground">
						الطلبات
					</h1>
					<p className="text-subtle mt-1">
						إدارة طلباتك وإنشاء طلبات جديدة وتتبع الحالة والمدفوعات
					</p>
				</div>

				<div className="flex items-center gap-3">
					<div className="relative">
						<Search
							className="absolute right-3 top-1/2 -translate-y-1/2 text-disabled"
							size={16}
						/>
						<input
							type="search"
							placeholder="ابحث في الطلبات..."
							className="w-56 rounded-xl border border-border pl-3 pr-9 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand"
						/>
					</div>
					<Link
						href="/dashboard/orders/new"
						className="inline-flex items-center gap-2 rounded-xl bg-brand text-white px-4 py-2 text-sm font-medium hover:bg-brand active:translate-y-[1px]"
					>
						<Plus size={16} />
						<span>طلب جديد</span>
					</Link>
				</div>
			</div>

			{/* Content */}
			<section className="rounded-2xl bg-surface border border-border p-4 md:p-6 shadow-sm">
				{children}
			</section>
		</div>
	);
}
