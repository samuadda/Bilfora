import { BarChart3 } from "lucide-react";

interface EmptyChartProps {
    message?: string;
}

export function EmptyChart({ message = "لا توجد بيانات" }: EmptyChartProps) {
    return (
        <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-disabled bg-surface-2 rounded-2xl border border-dashed border-border">
            <div className="p-4 bg-surface rounded-full shadow-sm mb-3">
                <BarChart3 className="w-8 h-8 text-disabled" />
            </div>
            <span className="text-sm font-bold text-subtle">{message}</span>
        </div>
    );
}

