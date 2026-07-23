"use client";

import { useState, useEffect } from "react";
import { Filter, ChevronDown } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";
import { InvoiceStatus } from "@/types/database";
import { supabase } from "@/lib/supabase";
import { cn } from "@/lib/utils";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui";

export interface AnalyticsFilters {
	customerId: string | "all";
	status: InvoiceStatus | "all";
	minAmount: number | null;
	maxAmount: number | null;
	productId: string | "all";
}

interface AnalyticsFiltersProps {
	filters: AnalyticsFilters;
	onFiltersChange: (filters: AnalyticsFilters) => void;
}

export default function AnalyticsFiltersComponent({
	filters,
	onFiltersChange,
}: AnalyticsFiltersProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [clients, setClients] = useState<{ id: string; name: string }[]>([]);
	const [products, setProducts] = useState<{ id: string; name: string }[]>([]);

	useEffect(() => {
		loadClients();
		loadProducts();
	}, []);

	const loadClients = async () => {
		try {
			const {
				data: { user },
			} = await supabase.auth.getUser();
			if (!user) return;

			const { data, error } = await supabase
				.from("clients")
				.select("id, name")
				.eq("user_id", user.id)
				.is("deleted_at", null)
				.order("name");

			if (error) throw error;
			setClients(data || []);
		} catch (err) {
			console.error("Error loading clients:", err);
		}
	};

	const loadProducts = async () => {
		try {
			const {
				data: { user },
			} = await supabase.auth.getUser();
			if (!user) return;

			const { data, error } = await supabase
				.from("products")
				.select("id, name")
				.eq("user_id", user.id)
				.eq("active", true)
				.order("name");

			if (error) throw error;
			setProducts(data || []);
		} catch (err) {
			console.error("Error loading products:", err);
		}
	};

	const updateFilter = (key: keyof AnalyticsFilters, value: string | number | null) => {
		onFiltersChange({ ...filters, [key]: value });
	};

	const clearFilters = () => {
		onFiltersChange({
			customerId: "all",
			status: "all",
			minAmount: null,
			maxAmount: null,
			productId: "all",
		});
	};

	const hasActiveFilters =
		filters.customerId !== "all" ||
		filters.status !== "all" ||
		filters.minAmount !== null ||
		filters.maxAmount !== null ||
		filters.productId !== "all";

	return (
		<div className="relative">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={cn(
					"inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors",
					hasActiveFilters
						? "bg-brand-soft-2 text-brand border border-brand"
						: "bg-surface-2 text-muted-foreground border border-border hover:bg-surface-inset"
				)}
			>
				<Filter size={16} />
				<span>فلاتر متقدمة</span>
				{hasActiveFilters && (
					<span className="w-5 h-5 rounded-full bg-brand text-white text-xs flex items-center justify-center">
						{[
							filters.customerId !== "all",
							filters.status !== "all",
							filters.minAmount !== null || filters.maxAmount !== null,
							filters.productId !== "all",
						].filter(Boolean).length}
					</span>
				)}
				<ChevronDown
					size={16}
					className={cn("transition-transform", isOpen && "rotate-180")}
				/>
			</button>

			<AnimatePresence>
				{isOpen && (
					<>
						<div
							className="fixed inset-0 z-40"
							onClick={() => setIsOpen(false)}
						/>
						<m.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							className="absolute top-full left-0 mt-2 bg-surface rounded-2xl border border-border shadow-xl p-6 z-50 min-w-[400px] max-w-md"
						>
							<div className="flex items-center justify-between mb-6">
								<h3 className="text-lg font-bold text-foreground">فلاتر متقدمة</h3>
								{hasActiveFilters && (
									<button
										onClick={clearFilters}
										className="text-sm text-brand hover:text-brand font-medium"
									>
										مسح الكل
									</button>
								)}
							</div>

							<div className="space-y-4">
								{/* Customer Filter */}
								<div>
									<label className="block text-sm font-medium text-muted-foreground mb-2">
										العميل
									</label>
									<Select
										value={filters.customerId}
										onValueChange={(val) => updateFilter("customerId", val)}
									>
										<SelectTrigger className="w-full">
											<SelectValue placeholder="جميع العملاء" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="all">جميع العملاء</SelectItem>
											{clients.map((client) => (
												<SelectItem key={client.id} value={client.id}>
													{client.name}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>

								{/* Status Filter */}
								<div>
									<label className="block text-sm font-medium text-muted-foreground mb-2">
										حالة الفاتورة
									</label>
									<Select
										value={filters.status}
										onValueChange={(val) => updateFilter("status", val)}
									>
										<SelectTrigger className="w-full">
											<SelectValue placeholder="جميع الحالات" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="all">جميع الحالات</SelectItem>
											<SelectItem value="paid">مدفوعة</SelectItem>
											<SelectItem value="overdue">متأخرة</SelectItem>
											<SelectItem value="sent">مرسلة</SelectItem>
											<SelectItem value="draft">مسودة</SelectItem>
											<SelectItem value="cancelled">ملغية</SelectItem>
										</SelectContent>
									</Select>
								</div>

								{/* Amount Range */}
								<div>
									<label className="block text-sm font-medium text-muted-foreground mb-2">
										نطاق المبلغ (ريال)
									</label>
									<div className="grid grid-cols-2 gap-3">
										<div>
											<input
												type="number"
												placeholder="الحد الأدنى"
												value={filters.minAmount || ""}
												onChange={(e) =>
													updateFilter(
														"minAmount",
														e.target.value ? Number(e.target.value) : null
													)
												}
												className="w-full px-4 py-2 rounded-xl border border-border focus:border-brand focus:ring-2 focus:ring-brand/20 text-sm"
											/>
										</div>
										<div>
											<input
												type="number"
												placeholder="الحد الأقصى"
												value={filters.maxAmount || ""}
												onChange={(e) =>
													updateFilter(
														"maxAmount",
														e.target.value ? Number(e.target.value) : null
													)
												}
												className="w-full px-4 py-2 rounded-xl border border-border focus:border-brand focus:ring-2 focus:ring-brand/20 text-sm"
											/>
										</div>
									</div>
								</div>

								{/* Product Filter */}
								<div>
									<label className="block text-sm font-medium text-muted-foreground mb-2">
										المنتج / الخدمة
									</label>
									<Select
										value={filters.productId}
										onValueChange={(val) => updateFilter("productId", val)}
									>
										<SelectTrigger className="w-full">
											<SelectValue placeholder="جميع المنتجات" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="all">جميع المنتجات</SelectItem>
											{products.map((product) => (
												<SelectItem key={product.id} value={product.id}>
													{product.name}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>
							</div>

							<button
								onClick={() => setIsOpen(false)}
								className="mt-6 w-full px-4 py-2 bg-brand text-white rounded-xl hover:bg-brand font-medium text-sm transition-colors"
							>
								تطبيق الفلاتر
							</button>
						</m.div>
					</>
				)}
			</AnimatePresence>
		</div>
	);
}

