import Navbar from "@/components/landing-page/Navbar";
import { TextAnimate } from "@/components/landing-page/text-animate";
import MainButton from "@/components/MainButton";

export default function CareersPage() {
	return (
		<div className="min-h-screen bg-surface">
			<Navbar />
			<main className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
				<div className="text-center mb-16">
					<TextAnimate
						as="h1"
						animation="blurIn"
						once={true}
						className="text-4xl font-bold md:text-5xl text-foreground mb-6"
					>
						انضم لفريق بلفورا
					</TextAnimate>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						نحن نبحث دائماً عن الموهوبين والشغوفين لبناء مستقبل الفواتير الرقمية معنا.
					</p>
				</div>

                <div className="bg-surface-2 rounded-2xl p-8 md:p-12 text-center border border-border">
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                        لا توجد شواغر حالياً
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                        للأسف، لا توجد وظائف شاغرة في الوقت الحالي. ولكننا نكبر بسرعة! تابعنا على لينكد إن لتبقى على اطلاع بأحدث الفرص.
                    </p>
                    <a 
                        href="https://linkedin.com/in/saddiq-daut/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <MainButton 
                            text="تابعنا على LinkedIn" 
                            bgColor="bg-[#0077b5]" 
                            textColor="text-white"
                        />
                    </a>
                </div>
			</main>
		</div>
	);
}

