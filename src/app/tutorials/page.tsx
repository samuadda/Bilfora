import Navbar from "@/components/landing-page/Navbar";
import { TextAnimate } from "@/components/landing-page/text-animate";
import { PlayCircle } from "lucide-react";

export default function TutorialsPage() {
    const tutorials = [
        {
            title: "شرح إنشاء فاتورة جديدة",
            duration: "2:30",
            thumbnailColor: "bg-brand-soft-2"
        },
        {
            title: "إضافة عميل جديد وتعديل بياناته",
            duration: "1:45",
            thumbnailColor: "bg-blue-100"
        },
        {
            title: "تخصيص شعار وألوان الفاتورة",
            duration: "3:15",
            thumbnailColor: "bg-orange-100"
        },
        {
            title: "تصدير التقارير الشهرية",
            duration: "2:10",
            thumbnailColor: "bg-green-100"
        }
    ];

	return (
		<div className="min-h-screen bg-surface">
			<Navbar />
			<main className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<TextAnimate
						as="h1"
						animation="blurIn"
						once={true}
						className="text-4xl font-bold md:text-5xl text-foreground mb-6"
					>
						الدروس التعليمية
					</TextAnimate>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						تعلم كيف تستفيد من كل ميزات بلفورا خطوة بخطوة
					</p>
				</div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tutorials.map((tutorial, index) => (
                        <div key={index} className="group cursor-pointer">
                            <div className={`relative aspect-video ${tutorial.thumbnailColor} rounded-2xl mb-4 overflow-hidden shadow-sm group-hover:shadow-md transition-all`}>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <PlayCircle className="w-16 h-16 text-foreground opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                                </div>
                                <div className="absolute bottom-3 right-3 bg-overlay text-white text-xs px-2 py-1 rounded-md">
                                    {tutorial.duration}
                                </div>
                            </div>
                            <h3 className="font-bold text-lg text-foreground group-hover:text-brand transition-colors">
                                {tutorial.title}
                            </h3>
                        </div>
                    ))}
                </div>
			</main>
		</div>
	);
}

