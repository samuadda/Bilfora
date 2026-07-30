import Link from "next/link";
import Navbar from "@/components/landing-page/Navbar";
import { TextAnimate } from "@/components/landing-page/text-animate";
import { Code2, Terminal, Zap } from "lucide-react";

export default function ApiPage() {
	return (
		<div className="min-h-screen bg-surface">
			<Navbar />
			<main className="pt-32 pb-20 px-4 max-w-5xl mx-auto">
				<div className="text-center mb-16">
					<TextAnimate
						as="h1"
						animation="blurIn"
						once={true}
						className="text-4xl font-bold md:text-5xl text-foreground mb-6"
					>
						Bilfora API للمطورين
					</TextAnimate>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						نخطط لواجهة برمجية تتيح لك أتمتة إصدار الفواتير من أنظمتك. العمل عليها لم يبدأ بعد، وهذي الصفحة لتسجيل اهتمامك.
					</p>
				</div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="p-6 rounded-2xl bg-surface-2 border border-slate-100 text-center">
                        <div className="w-12 h-12 bg-brand-soft-2 rounded-full flex items-center justify-center mx-auto mb-4 text-brand">
                            <Zap size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-foreground">سريع وموثوق</h3>
                        <p className="text-subtle text-sm">إصدار فاتورة وجلب حالتها من نظامك مباشرة، بدون فتح اللوحة.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-surface-2 border border-slate-100 text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                            <Code2 size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-foreground">سهل التكامل</h3>
                        <p className="text-subtle text-sm">واجهة REST بمفاتيح خاصة بحسابك، مع توثيق عربي واضح.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-surface-2 border border-slate-100 text-center">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                            <Terminal size={24} />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-foreground">بيئة تجريبية</h3>
                        <p className="text-subtle text-sm">بيئة تجريبية تختبر فيها قبل ما تشغّلها على فواتيرك الحقيقية.</p>
                    </div>
                </div>

                <div className="bg-[#0f172a] rounded-2xl p-8 md:p-12 overflow-hidden relative">
                    <div className="relative z-10 text-center">
                         <h2 className="text-2xl font-bold text-white mb-4">
                            على خارطة الطريق
                        </h2>
                        <p className="text-disabled mb-8 max-w-lg mx-auto">
                            لو الـ API يهمك، راسلنا وقل لنا وش تحتاج تربطه. نبني حسب ما نسمع منكم.
                        </p>
                        {/* Was an email capture form with no submit handler, so it
                            silently discarded every address. Points at the contact
                            page, which actually delivers. */}
                        <Link
                            href="/contact"
                            className="inline-block px-6 py-3 bg-brand text-white font-bold rounded-lg hover:bg-brand-hover transition-colors"
                        >
                            سجّل اهتمامك
                        </Link>
                    </div>
                    
                    {/* Abstract Code decoration */}
                    <div className="absolute top-0 right-0 p-8 opacity-10 text-xs font-mono text-green-400 pointer-events-none select-none hidden md:block text-left" dir="ltr">
                        {`POST /v1/invoices HTTP/1.1
Host: api.bilfora.com
Authorization: Bearer sk_test_...
Content-Type: application/json

{
  "customer": "cus_123456",
  "items": [
    {
      "price": "price_123",
      "quantity": 1
    }
  ]
}`}
                    </div>
                </div>
			</main>
		</div>
	);
}

