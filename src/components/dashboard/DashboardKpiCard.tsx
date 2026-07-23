"use client";

import { m } from "framer-motion";
import { LucideIcon, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardKpiCardProps {
	title: string;
	value: string | number;
	icon: LucideIcon;
	color: "purple" | "blue" | "green" | "orange" | "red" | "indigo";
	trend?: {
		value: number; // percentage change
		label?: string;
	};
	delay?: number;
}

export default function DashboardKpiCard({
	title,
	value,
	icon: Icon,
	color,
	trend,
	delay = 0,
}: DashboardKpiCardProps) {
	const colors = {
		purple: "bg-brand-soft text-brand",
		blue: "bg-blue-50 text-blue-600",
		green: "bg-green-50 text-green-600",
		orange: "bg-orange-50 text-orange-600",
		red: "bg-red-50 text-red-600",
		indigo: "bg-indigo-50 text-indigo-600",
	};

	const isPositive = trend ? trend.value >= 0 : null;

	return (
		<m.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay, duration: 0.5 }}
			className="bg-surface p-6 rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-border transition-all duration-300 relative overflow-hidden group h-full flex flex-col"
		>
			{/* Subtle gradient background */}
			<div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-surface-2 to-transparent rounded-bl-full -mr-12 -mt-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

			<div className="flex justify-between items-start mb-5 relative z-10 gap-3 w-full">
				<div
					className={cn(
						"p-3.5 rounded-xl transition-all group-hover:scale-105 duration-300 flex-shrink-0 shadow-sm",
						colors[color]
					)}
				>
					<Icon size={22} strokeWidth={2.5} />
				</div>
				{trend && (
					<span
						className={cn(
							"flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg flex-shrink-0",
							isPositive
								? "text-green-700 bg-green-50/80 border border-green-100"
								: "text-red-700 bg-red-50/80 border border-red-100"
						)}
					>
						{isPositive ? (
							<ArrowUpRight size={12} className="flex-shrink-0" />
						) : (
							<ArrowDownRight size={12} className="flex-shrink-0" />
						)}
						<span className="flex-shrink-0 whitespace-nowrap">
							{Math.abs(trend.value).toLocaleString("en-US", {
								minimumFractionDigits: 1,
								maximumFractionDigits: 1,
							})}%
						</span>
						{trend.label && (
							<span className="text-muted-foreground font-normal text-[10px] hidden sm:inline">
								{trend.label}
							</span>
						)}
					</span>
				)}
			</div>
			<div className="relative z-10 flex-1 flex flex-col w-full">
				<p className="text-muted-foreground text-sm font-medium mb-2 text-right">
					{title}
				</p>
				<h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight text-right">
					{value}
				</h3>
			</div>
		</m.div>
	);
}

