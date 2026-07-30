"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import {
	ChevronDown,
	ChevronUp,
	HelpCircle,
	FileText,
	CreditCard,
	Shield,
	Smartphone,
	Users,
} from "lucide-react";
import Link from "next/link";
import MainButton from "@/components/MainButton";
import { DotPattern } from "@/components/landing-page/dot-pattern";
import Navbar from "@/components/landing-page/Navbar";

interface FAQItem {
	id: number;
	question: string;
	answer: string;
	category: string;
	icon: React.ReactNode;
}

/**
 * Every answer here describes behaviour that ships today. Anything still
 * being built is stated as such rather than promised in the present tense.
 * If you add an entry, verify it against the code first.
 */
const faqData: FAQItem[] = [
	{
		id: 1,
		question: "كيف يمكنني إنشاء فاتورة جديدة؟",
		answer: "من لوحة التحكم اضغط 'إنشاء فاتورة'، اختر العميل، وأضف البنود. الإجمالي والترقيم المتسلسل يجهزون تلقائياً.",
		category: "الاستخدام الأساسي",
		icon: <FileText className="w-5 h-5" />,
	},
	{
		id: 2,
		question: "كيف أرسل الفاتورة لعميلي؟",
		answer: "تنزّل الفاتورة كملف PDF بضغطة واحدة، وترسلها بالطريقة التي تناسبك: واتساب، بريد إلكتروني، أو طباعة. الإرسال المباشر من داخل بلفورا قيد العمل حالياً.",
		category: "الاستخدام الأساسي",
		icon: <FileText className="w-5 h-5" />,
	},
	{
		id: 3,
		question: "كيف يمكنني تتبع حالة الفواتير؟",
		answer: "كل فاتورة لها حالة واضحة في اللوحة: مدفوعة، مرسلة، أو متأخرة. تسجّل الدفعة وتتحدث الحالة، وتقدر تسجل أكثر من دفعة على نفس الفاتورة.",
		category: "التتبع",
		icon: <FileText className="w-5 h-5" />,
	},
	{
		id: 4,
		question: "هل بلفورا يستقبل المدفوعات عن العميل؟",
		answer: "لا. بلفورا يسجّل الدفعات ويتابع حالتها فقط، والتحصيل يصير بينك وبين عميلك بالطريقة المعتادة. ربط بوابات الدفع غير متوفر حالياً.",
		category: "المدفوعات",
		icon: <CreditCard className="w-5 h-5" />,
	},
	{
		id: 5,
		question: "هل يمكنني تخصيص شكل الفاتورة؟",
		answer: "تضيف اسم منشأتك وبيانات التواصل وتظهر في كل فاتورة. تعدد القوالب ورفع الشعار قيد العمل حالياً.",
		category: "التخصيص",
		icon: <FileText className="w-5 h-5" />,
	},
	{
		id: 6,
		question: "هل بياناتي آمنة في النظام؟",
		answer: "بياناتك مشفّرة في النقل والتخزين، وكل حساب يوصل لفواتيره وعملائه هو فقط. لا نشارك بياناتك مع أي طرف ثالث.",
		category: "الأمان",
		icon: <Shield className="w-5 h-5" />,
	},
	{
		id: 7,
		question: "هل يمكنني استخدام النظام من الهاتف المحمول؟",
		answer: "نعم. بلفورا يشتغل من المتصفح على الجوال والتابلت والحاسب، وتقدر تصدر فاتورة وأنت خارج المكتب.",
		category: "الوصول",
		icon: <Smartphone className="w-5 h-5" />,
	},
	{
		id: 8,
		question: "كيف يمكنني تصدير تقاريري؟",
		answer: "من صفحة التحليلات تصدّر تقرير فواتيرك كملف Excel، وكل فاتورة تنزّل كملف PDF بشكل منفصل.",
		category: "التقارير",
		icon: <FileText className="w-5 h-5" />,
	},
	{
		id: 9,
		question: "هل النظام يدعم الإنجليزية؟",
		answer: "واجهة بلفورا بالعربية حالياً. دعم الإنجليزية غير متوفر بعد.",
		category: "اللغة",
		icon: <FileText className="w-5 h-5" />,
	},
	{
		id: 10,
		question: "أقدر أضيف فريق عمل لحسابي؟",
		answer: "لا حالياً. كل حساب لمستخدم واحد، والمستخدمون المتعددون بصلاحيات مخططون لمرحلة قادمة.",
		category: "الفريق",
		icon: <Users className="w-5 h-5" />,
	},
	{
		id: 11,
		question: "كم يكلفني بلفورا؟",
		answer: "بلفورا مجاني بالكامل حالياً بدون بطاقة ائتمانية، وبدون حد على عدد الفواتير أو العملاء. لو صارت فيه خطط مدفوعة لاحقاً، ننبّهك قبل أي تغيير.",
		category: "المدفوعات",
		icon: <CreditCard className="w-5 h-5" />,
	},
	{
		id: 12,
		question: "كيف يمكنني الحصول على الدعم؟",
		answer: "راسلنا من صفحة 'تواصل معنا' أو على support@bilfora.com. بلفورا منتج مستقل، فنرد عليك بأسرع ما نقدر خلال أيام العمل.",
		category: "الدعم",
		icon: <HelpCircle className="w-5 h-5" />,
	},
];

const categories = [
	{ name: "الكل", value: "all", icon: <FileText className="w-4 h-4" /> },
	{
		name: "الاستخدام الأساسي",
		value: "الاستخدام الأساسي",
		icon: <FileText className="w-4 h-4" />,
	},
	{
		name: "التتبع",
		value: "التتبع",
		icon: <FileText className="w-4 h-4" />,
	},
	{
		name: "التخصيص",
		value: "التخصيص",
		icon: <FileText className="w-4 h-4" />,
	},
	{
		name: "المدفوعات",
		value: "المدفوعات",
		icon: <CreditCard className="w-4 h-4" />,
	},
	{ name: "الأمان", value: "الأمان", icon: <Shield className="w-4 h-4" /> },
	{
		name: "الوصول",
		value: "الوصول",
		icon: <Smartphone className="w-4 h-4" />,
	},
	{
		name: "التقارير",
		value: "التقارير",
		icon: <FileText className="w-4 h-4" />,
	},
	{ name: "الفريق", value: "الفريق", icon: <Users className="w-4 h-4" /> },
	{ name: "الدعم", value: "الدعم", icon: <HelpCircle className="w-4 h-4" /> },
];

export default function FAQPage() {
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [openItems, setOpenItems] = useState<number[]>([]);
	const [searchTerm, setSearchTerm] = useState("");

	const filteredFAQs = faqData.filter(
		(faq) =>
			(selectedCategory === "all" || faq.category === selectedCategory) &&
			(faq.question.includes(searchTerm) ||
				faq.answer.includes(searchTerm))
	);

	const toggleItem = (id: number) => {
		setOpenItems((prev) =>
			prev.includes(id)
				? prev.filter((item) => item !== id)
				: [...prev, id]
		);
	};

	return (
		<div className="min-h-screen bg-surface relative overflow-hidden">
			{/* subtle shiny gradient from bottom right */}
			<div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-brand/30 via-[#ff6b9d]/20 to-transparent blur-3xl rounded-full opacity-70 pointer-events-none" />
			<DotPattern className="absolute inset-0 opacity-[0.04]" />
			<Navbar />

			{/* Header */}
			<div className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center">
				<m.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto"
				>
					<div className="inline-flex items-center justify-center w-16 h-16 bg-brand/10 rounded-full mb-6">
						<HelpCircle className="w-8 h-8 text-brand" />
					</div>
					<h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
						الأسئلة الشائعة
					</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
						إجابات على أكثر الأسئلة شيوعاً حول نظام إدارة الفواتير
					</p>
				</m.div>
			</div>

			{/* Category Filter */}
			<div className="relative z-10 px-4 sm:px-6 lg:px-8 mb-12">
				<m.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="max-w-6xl mx-auto flex flex-col items-center"
				>
					<input
						type="text"
						placeholder="ابحث عن سؤالك..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full max-w-md mb-6 rounded-full px-4 py-2 bg-surface-2 border border-border text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/40 text-center"
					/>

					<div className="flex flex-wrap justify-center gap-3">
						{categories.map((category) => (
							<button
								key={category.value}
								onClick={() =>
									setSelectedCategory(category.value)
								}
								className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
									selectedCategory === category.value
										? "bg-brand text-white shadow-lg"
										: "bg-surface-inset text-muted-foreground hover:bg-surface-inset"
								}`}
							>
								{category.icon}
								{category.name}
							</button>
						))}
					</div>
				</m.div>
			</div>

			{/* FAQ List */}
			<div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
				<AnimatePresence mode="wait">
					<m.div
						key={selectedCategory + searchTerm}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
						className="max-w-4xl mx-auto"
					>
						{filteredFAQs.length === 0 && (
							<div className="text-center text-subtle py-10">
								<p>لا توجد أسئلة مطابقة حالياً.</p>
							</div>
						)}

						{filteredFAQs.map((faq, index) => (
							<m.div
								key={faq.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.4,
									delay: index * 0.05,
								}}
								className="mb-4"
							>
								<div className="bg-surface border border-border rounded-2xl shadow-sm overflow-hidden">
									<button
										onClick={() => toggleItem(faq.id)}
										aria-expanded={openItems.includes(
											faq.id
										)}
										aria-controls={`faq-answer-${faq.id}`}
										id={`faq-question-${faq.id}`}
										className="w-full px-6 py-4 text-right flex items-center justify-between hover:bg-surface-2 transition-all duration-200"
									>
										<div className="flex items-center gap-3">
											<div className="text-brand">
												{faq.icon}
											</div>
											<span className="text-foreground font-semibold text-lg">
												{faq.question}
											</span>
										</div>
										<div className="text-muted-foreground">
											{openItems.includes(faq.id) ? (
												<ChevronUp className="w-5 h-5" />
											) : (
												<ChevronDown className="w-5 h-5" />
											)}
										</div>
									</button>

									<AnimatePresence>
										{openItems.includes(faq.id) && (
											<m.div
												id={`faq-answer-${faq.id}`}
												role="region"
												aria-labelledby={`faq-question-${faq.id}`}
												initial={{
													height: 0,
													opacity: 0,
												}}
												animate={{
													height: "auto",
													opacity: 1,
												}}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.3 }}
												className="overflow-hidden"
											>
												<div className="px-6 pb-4">
													<p className="text-muted-foreground leading-relaxed">
														{faq.answer}
													</p>
												</div>
											</m.div>
										)}
									</AnimatePresence>
								</div>
							</m.div>
						))}
					</m.div>
				</AnimatePresence>
			</div>

			{/* CTA */}
			<div className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
				<m.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="max-w-4xl mx-auto text-center"
				>
					<div className="bg-gradient-to-r from-brand/10 to-[#ff6b9d]/10 border border-border rounded-3xl p-8 md:p-12 shadow-sm">
						<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
							لم تجد إجابة لسؤالك؟
						</h2>
						<p className="text-xl text-muted-foreground mb-8">
							راسلنا وبنرد عليك بأسرع ما نقدر خلال أيام العمل
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/contact">
								<MainButton
									text="تواصل معنا"
									bgColor="bg-brand"
									textColor="text-white"
									hoverBgColor="hover:bg-brand-hover"
									className="text-lg px-8 py-3"
								/>
							</Link>
							<Link href="/dashboard">
								<MainButton
									text="جرب النظام"
									bgColor="bg-surface-inset"
									textColor="text-foreground"
									hoverBgColor="hover:bg-surface-inset"
									className="text-lg px-8 py-3"
								/>
							</Link>
						</div>
					</div>
				</m.div>
			</div>
		</div>
	);
}
