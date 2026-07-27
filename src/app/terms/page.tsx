"use client";
import Navbar from "@/components/landing-page/Navbar";
import { m } from "framer-motion";
import { FileText, Handshake, AlertCircle, Scale, MessageCircle, CheckCircle2, XCircle } from "lucide-react";

export default function TermsPage() {
	return (
		<div className="min-h-screen bg-surface">
			<Navbar />
			<main className="pt-32 pb-20 px-4 max-w-3xl mx-auto">
				{/* Header */}
				<m.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center mb-12"
				>
					<div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-2 mb-4">
						<FileText className="h-4 w-4 text-blue-600" />
						<span className="text-sm font-medium text-blue-600">الشروط</span>
					</div>
					<h1 className="text-4xl font-bold mb-4 text-foreground">
						شروط الاستخدام
					</h1>
					<p className="text-subtle">
						آخر تحديث: فبراير 2026
					</p>
				</m.div>

				{/* Intro - Friendly */}
				<m.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
					className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-2xl p-6 mb-10 border border-cyan-100"
				>
					<div className="flex items-start gap-4">
						<Handshake className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
						<div>
							<p className="text-muted-foreground leading-relaxed">
								<strong className="text-foreground">الفكرة بسيطة:</strong> بلفورا أداة مجانية لإصدار الفواتير.
								استخدمها بأمانة، احترم الآخرين، وما راح يصير شي يقلقك.
								هذي الصفحة تشرح القواعد، بس بدون لغة محامين معقدة.
							</p>
						</div>
					</div>
				</m.div>

				{/* Sections */}
				<div className="space-y-8">
					<m.section
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="bg-surface rounded-2xl border border-border p-6"
					>
						<div className="flex items-center gap-3 mb-4">
							<div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
								<CheckCircle2 className="h-5 w-5 text-emerald-600" />
							</div>
							<h2 className="text-xl font-bold text-foreground">ايش تقدر تسوي</h2>
						</div>
						<ul className="space-y-3 text-muted-foreground">
							<li className="flex items-start gap-2">
								<span className="text-emerald-500">✓</span>
								<span>تصدر فواتير لعملائك بشكل طبيعي</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-emerald-500">✓</span>
								<span>تخصص الفواتير بشعارك وبيانات منشأتك</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-emerald-500">✓</span>
								<span>تصدر الفواتير PDF وترسلها لعملائك</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-emerald-500">✓</span>
								<span>تستخدم الأداة لعملك الشخصي أو منشأتك</span>
							</li>
						</ul>
					</m.section>

					<m.section
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className="bg-surface rounded-2xl border border-border p-6"
					>
						<div className="flex items-center gap-3 mb-4">
							<div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
								<XCircle className="h-5 w-5 text-red-600" />
							</div>
							<h2 className="text-xl font-bold text-foreground">ايش ما تقدر تسوي</h2>
						</div>
						<ul className="space-y-3 text-muted-foreground">
							<li className="flex items-start gap-2">
								<span className="text-red-500">✗</span>
								<span>تستخدم المنصة لأي شي غير قانوني أو احتيالي</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-red-500">✗</span>
								<span>تحاول تخترق أو تضر بالمنصة أو المستخدمين الآخرين</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-red-500">✗</span>
								<span>تبيع أو تشارك حسابك مع آخرين</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-red-500">✗</span>
								<span>تستخدم روبوتات أو سكربتات لاستغلال المنصة</span>
							</li>
						</ul>
					</m.section>

					<m.section
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className="bg-surface rounded-2xl border border-border p-6"
					>
						<div className="flex items-center gap-3 mb-4">
							<div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
								<AlertCircle className="h-5 w-5 text-amber-600" />
							</div>
							<h2 className="text-xl font-bold text-foreground">تنبيه مهم</h2>
						</div>
						<p className="text-muted-foreground leading-relaxed">
							بلفورا أداة لإصدار الفواتير، <strong>مو برنامج محاسبة معتمد</strong>.
							أنا أبذل جهدي إن كل شي يشتغل تمام، بس أنت مسؤول عن التأكد إن فواتيرك صح وتتوافق مع أنظمة بلدك.
							<br /><br />
							المنصة مقدمة &ldquo;كما هي&rdquo;، يعني ما أقدر أضمن إنها تشتغل 100% طول الوقت، بس راح أسوي كل اللي بقدرتي!
						</p>
					</m.section>

					<m.section
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className="bg-surface rounded-2xl border border-border p-6"
					>
						<div className="flex items-center gap-3 mb-4">
							<div className="h-10 w-10 rounded-full bg-brand-soft-2 flex items-center justify-center">
								<Scale className="h-5 w-5 text-brand" />
							</div>
							<h2 className="text-xl font-bold text-foreground">حقوقك وحقوقي</h2>
						</div>
						<ul className="space-y-3 text-muted-foreground">
							<li className="flex items-start gap-2">
								<span className="text-brand font-bold">•</span>
								<span><strong>بياناتك ملكك:</strong> كل الفواتير والعملاء والمنتجات اللي تضيفها، ملكك أنت</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-brand font-bold">•</span>
								<span><strong>المنصة ملكي:</strong> الكود والتصميم والاسم التجاري، ملكي أنا</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="text-brand font-bold">•</span>
								<span><strong>تقدر توقف:</strong> في أي وقت تبي توقف، احذف حسابك وانتهى الموضوع</span>
							</li>
						</ul>
					</m.section>

					<m.section
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
						className="bg-surface rounded-2xl border border-border p-6"
					>
						<div className="flex items-center gap-3 mb-4">
							<div className="h-10 w-10 rounded-full bg-cyan-100 flex items-center justify-center">
								<MessageCircle className="h-5 w-5 text-cyan-600" />
							</div>
							<h2 className="text-xl font-bold text-foreground">عندك سؤال؟</h2>
						</div>
						<p className="text-muted-foreground leading-relaxed">
							أي شي مو واضح؟ راسلني مباشرة:
							<br />
							<a href="mailto:support@bilfora.com" className="text-brand font-medium hover:underline">support@bilfora.com</a>
						</p>
					</m.section>
				</div>
			</main>
		</div>
	);
}
