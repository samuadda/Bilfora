"use client";

import { Palette, Code, TrendingUp, Calculator } from "lucide-react";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";

import { TextAnimate } from "@/components/landing-page/text-animate";

export function Logos() {
  const audiences = [
    { icon: Palette, title: "مصممين", subtitle: "جرافيك • UI/UX", color: "from-amber-50 to-amber-100", textColor: "text-amber-600", badgeColor: "bg-amber-100 text-amber-700" },
    { icon: Code, title: "مطورين", subtitle: "ويب • تطبيقات", color: "from-cyan-50 to-cyan-100", textColor: "text-cyan-600", badgeColor: "bg-cyan-100 text-cyan-700" },
    { icon: TrendingUp, title: "مستشارين", subtitle: "إدارة • تسويق", color: "from-teal-50 to-teal-100", textColor: "text-teal-600", badgeColor: "bg-teal-100 text-teal-700" },
    { icon: Calculator, title: "محاسبين", subtitle: "مستقلين", color: "from-red-50 to-orange-50", textColor: "text-red-500", badgeColor: "bg-red-100 text-red-600" },
  ];

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center text-center gap-4">
            <TextAnimate
                as="h2"
                animation="blurIn"
                once={true}
                className="max-w-2xl text-4xl font-bold md:text-5xl lg:text-6xl text-brand-hover leading-tight"
            >
                صُمّم خصيصاً <span className="text-brand">للمستقلين وأصحاب المشاريع الصغيرة</span>
            </TextAnimate>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {audiences.map((item, index) => (
            <m.div
              key={index}
              whileHover={{ scale: 0.98 }}
              className={cn(
                "group relative min-h-[250px] cursor-pointer overflow-hidden rounded-3xl p-8 shadow-sm hover:shadow-md transition-all border-none bg-gradient-to-br",
                item.color
              )}
            >
              <div className="flex flex-col items-center justify-center text-center relative z-10 h-full pt-4">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <item.icon className={cn("h-6 w-6", item.textColor)} />
                    <span className={cn("text-xs font-semibold px-2 py-1 rounded-full", item.badgeColor)}>
                      {item.subtitle}
                    </span>
                </div>
                <h3 className="text-2xl font-bold text-ink-900">
                  {item.title}
                </h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-center translate-y-12 transition-transform duration-500 group-hover:translate-y-4">
                  <div className="relative">
                      <item.icon className={cn("w-32 h-32 opacity-10", item.textColor)} strokeWidth={1.5} />
                  </div>
              </div>
            </m.div>
          ))}
        </div>
        <p className="text-center text-sm text-disabled mt-8">
          سواء كنت في الرياض أو جدة أو أي مكان في العالم العربي
        </p>
      </div>
    </section>
  );
}
