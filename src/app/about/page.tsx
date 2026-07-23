"use client";
import Navbar from "@/components/landing-page/Navbar";
import { TextAnimate } from "@/components/landing-page/text-animate";
import { Ripple } from "@/components/landing-page/ripple";
import { m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, ArrowLeft, Zap, HeartHandshake, Sparkles } from "lucide-react";

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-surface">
			<Navbar />
			<main className="pt-32 pb-24 px-4 max-w-4xl mx-auto">
				{/* Hero - Curiosity-driven headline */}
				<section className="text-center mb-20">
					<m.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="inline-flex items-center gap-2 rounded-full bg-brand-soft border border-brand-soft-2 px-4 py-1.5 text-sm font-medium text-brand mb-6"
					>
						<Sparkles className="h-4 w-4" />
						<span>منتج مستقل • صُنع بحب</span>
					</m.div>
					<TextAnimate
						as="h1"
						animation="blurIn"
						once={true}
						className="text-4xl font-bold md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight"
					>
						قصة بلفورا
					</TextAnimate>
					<m.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
					>
						من إحباط مستقل يضيع ساعات في الإكسل...
						<br />
						<span className="text-brand font-semibold">
							إلى أداة عربية بسيطة تختصر كل شي في ثوانٍ.
						</span>
					</m.p>
				</section>

				{/* The Problem Story */}
				<section className="mb-20">
					<m.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand via-indigo-600 to-slate-900 p-8 md:p-10 text-right text-white shadow-2xl"
					>
						<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_white,transparent_60%),radial-gradient(circle_at_bottom,_black,transparent_60%)]" />
						<div className="relative space-y-6">
							<div className="inline-flex items-center gap-3 rounded-full bg-surface/10 px-4 py-1 text-xs font-medium backdrop-blur">
								<span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
								<span>رأيت المشكلة بنفسي</span>
							</div>
							
							<h2 className="text-2xl md:text-3xl font-bold leading-snug">
								&ldquo;كل ما أخلص شغلي، أقعد ساعة أحاول أطلع فاتورة&rdquo;
							</h2>
							
							<div className="space-y-4 text-teal-100 leading-relaxed">
								<p>
									هذي كانت شكوى صديقي المصمم. وكانت شكوتي أنا كمطور.
									وشكوى كل مستقل عربي شفته.
								</p>
								<p>
									الإكسل معقد. البرامج الأجنبية ما تدعم العربي صح.
									والحلول المحلية إما غالية أو مليانة خطوات.
								</p>
								<p className="text-white font-medium border-r-2 border-white/50 pr-4">
									فقررت أبني الأداة اللي كنت أتمناها: عربية، بسيطة، وتخلّص
									الفاتورة في ثوانٍ مو ساعات.
								</p>
							</div>

							<div className="pt-4 flex items-center gap-4">
								<Image
									src="/saddiqMusaProfile.jpg"
									alt="صدّيق"
									width={48}
									height={48}
									className="h-12 w-12 rounded-full object-cover border-2 border-white/30"
								/>
								<div>
									<p className="font-semibold">صدّيق</p>
									<p className="text-sm text-teal-100">المطوّر الوحيد لبلفورا</p>
								</div>
							</div>
						</div>
					</m.div>
				</section>

				{/* Value Props - Benefit focused */}
				<section className="mb-20">
					<m.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="text-center mb-10"
					>
						<h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
							ليش المستقلين يختارون بلفورا؟
						</h3>
						<p className="text-muted-foreground">
							مو بس لأنه مجاني، لأنه فعلاً يوفر وقتهم
						</p>
					</m.div>

					<div className="grid md:grid-cols-3 gap-6">
						<m.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="rounded-2xl border border-border bg-gradient-to-b from-white to-surface-2 p-6 hover:shadow-lg hover:border-brand-soft-2 transition-all"
						>
							<div className="h-12 w-12 rounded-xl bg-brand-soft-2 flex items-center justify-center mb-4">
								<Zap className="h-6 w-6 text-brand" />
							</div>
							<h4 className="mb-2 text-lg font-bold text-foreground">
								90 ثانية للفاتورة الأولى
							</h4>
							<p className="text-muted-foreground text-sm leading-relaxed">
								سجّل، أضف بياناتك مرة واحدة، وابدأ تصدر فواتير احترافية.
								بدون دورات تدريبية أو شروحات معقدة.
							</p>
						</m.div>

						<m.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.6 }}
							className="rounded-2xl border border-border bg-gradient-to-b from-white to-surface-2 p-6 hover:shadow-lg hover:border-brand-soft-2 transition-all"
						>
							<div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
								<HeartHandshake className="h-6 w-6 text-emerald-600" />
							</div>
							<h4 className="mb-2 text-lg font-bold text-foreground">
								دعم حقيقي من شخص حقيقي
							</h4>
							<p className="text-muted-foreground text-sm leading-relaxed">
								لما ترسلي رسالة، أنا اللي أرد عليك، مو بوت.
								وملاحظاتك تتحول لتحديثات في أيام مو شهور.
							</p>
						</m.div>

						<m.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.7 }}
							className="rounded-2xl border border-border bg-gradient-to-b from-white to-surface-2 p-6 hover:shadow-lg hover:border-brand-soft-2 transition-all"
						>
							<div className="h-12 w-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
								<Sparkles className="h-6 w-6 text-amber-600" />
							</div>
							<h4 className="mb-2 text-lg font-bold text-foreground">
								مُصمّم للعربي من البداية
							</h4>
							<p className="text-muted-foreground text-sm leading-relaxed">
								مو ترجمة لمنتج أجنبي. كل زر، كل نص، كل تفصيلة
								صُممت للمستخدم العربي واتجاه الكتابة الصحيح.
							</p>
						</m.div>
					</div>
				</section>

				{/* CTA Section - Ripple Card */}
				<section className="mb-16">
					<m.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.8 }}
						className="relative flex flex-col justify-center items-center gap-8 text-center py-16 rounded-3xl bg-brand overflow-hidden shadow-2xl"
					>
						<Ripple
							mainCircleSize={400}
							mainCircleOpacity={0.3}
							numCircles={10}
							className="absolute inset-0 z-0 text-white"
						/>
						<h3 className="relative z-10 text-2xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
							جرّب بنفسك، مجاناً
							<span className="text-teal-100 text-lg md:text-xl mt-4 block font-medium">
								بدون بطاقة ائتمان. بدون التزام. لو ما عجبك، ما تخسر شي.
							</span>
						</h3>
						<Link
							href="/register"
							className="relative z-10 inline-flex items-center gap-2 bg-surface text-brand font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
						>
							<span>ابدأ مجاناً الآن</span>
							<ArrowLeft className="h-5 w-5" />
						</Link>
					</m.div>
				</section>

				{/* Social links */}
				<section>
					<m.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.9 }}
						className="pt-8 border-t border-border"
					>
						<div className="flex flex-col items-center gap-4 text-center">
							<p className="text-sm text-subtle">
								تابع رحلة بناء بلفورا كمشروع مستقل
							</p>
							<div className="flex items-center gap-4">
								<Link
									href="https://github.com/SAMUADDA"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground hover:border-brand hover:text-brand hover:bg-brand-soft transition-all"
								>
									<Github className="h-4 w-4" />
									<span>GitHub</span>
								</Link>
								<Link
									href="https://twitter.com/SAMUADDA"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-muted-foreground hover:border-sky-500 hover:text-sky-500 hover:bg-sky-50 transition-all"
								>
									<Twitter className="h-4 w-4" />
									<span>X / Twitter</span>
								</Link>
							</div>
						</div>
					</m.div>
				</section>
			</main>
		</div>
	);
}
