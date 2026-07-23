"use client";

import { AreaChart, BarChart, LineChart } from "lucide-react";
import { cn } from "@/lib/utils";

export type ChartType = "area" | "bar" | "line";

interface ChartSwitcherProps {
	chartType: ChartType;
	onChartTypeChange: (type: ChartType) => void;
}

export default function ChartSwitcher({
	chartType,
	onChartTypeChange,
}: ChartSwitcherProps) {
	const options: { type: ChartType; icon: typeof AreaChart; label: string }[] = [
		{ type: "area", icon: AreaChart, label: "منطقة" },
		{ type: "bar", icon: BarChart, label: "أعمدة" },
		{ type: "line", icon: LineChart, label: "خط" },
	];

	return (
		<div className="flex items-center gap-1 bg-surface-inset rounded-xl p-1">
			{options.map((option) => {
				const Icon = option.icon;
				return (
					<button
						key={option.type}
						onClick={() => onChartTypeChange(option.type)}
						className={cn(
							"flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all",
							chartType === option.type
								? "bg-surface text-brand shadow-sm"
								: "text-muted-foreground hover:text-foreground"
						)}
						title={option.label}
					>
						<Icon size={16} />
						<span className="hidden sm:inline">{option.label}</span>
					</button>
				);
			})}
		</div>
	);
}

