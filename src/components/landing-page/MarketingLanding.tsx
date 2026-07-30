import Link from "next/link";
import {
  FileText,
  Wallet,
  BarChart3,
  Users,
  ShieldCheck,
  Download,
  ArrowLeft,
  Play,
  Check,
  Clock,
  Repeat,
  FileWarning,
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import Navbar from "@/components/landing-page/Navbar";
import { Button } from "@/components/ui/Button";
import { Badge, type BadgeVariant } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Price } from "@/components/ui/Price";
import "./marketing.css";

/* Each pain mirrors how the customer describes it, not how we'd label it. */
const PROBLEMS = [
  { Icon: Clock, title: "ساعة على كل فاتورة", body: "تفتح الإكسل، تعدّل قالب قديم، تعيد كتابة بيانات العميل، وتتأكد مرتين قبل ما ترسل." },
  { Icon: Repeat, title: "تسأل عن فلوسك بنفسك", body: "ما تدري مين دفع ومين تأخر، فتفتح المحادثات القديمة وتذكّر العميل بنفسك." },
  { Icon: FileWarning, title: "وكل فاتورة بشكل مختلف", body: "ترقيم يدوي، قالب تعدّله كل مرة، وملفات متفرقة على جهازك. فاتورتك تعكس شغلك." },
];

/* Titles say what it is, bodies say what it means for the customer.
   Every line here maps to something that ships today. */
const FEATURES = [
  { Icon: FileText, title: "فاتورة مرتبة في دقيقة", body: "اختر العميل، اكتب البنود، والإجمالي ينحسب وحده. بقالب عربي نظيف بدل قوالب الإكسل." },
  { Icon: Wallet, title: "تعرف مين دفع ومين لأ", body: "كل فاتورة لها حالة واضحة: مدفوعة، مرسلة، أو متأخرة. سجّل الدفعة وتتحدث الحالة وحدها.", accent: true },
  { Icon: BarChart3, title: "دخلك أمامك بالأرقام", body: "كم دخّلت هذا الشهر، وكم باقي لك عند العملاء. لوحة واحدة بدل ما تجمع الأرقام بنفسك." },
  { Icon: Users, title: "عملاؤك محفوظون", body: "بيانات العميل تنحفظ أول مرة فقط. الفاتورة الجاية تجهز باختيار اسمه، وسجله كامل قدامك." },
  { Icon: ShieldCheck, title: "ترقيم وحفظ تلقائي", body: "كل فاتورة تاخذ رقمها بالتسلسل وتنحفظ في حسابك، بدل ملفات متفرقة على جهازك." },
  { Icon: Download, title: "PDF يشبه فاتورتك", body: "صدّر بضغطة، والملف يطلع بنفس التصميم الذي تشوفه على الشاشة. جاهز للإرسال أو الطباعة." },
];

const STEPS = [
  { n: "1", t: "سجّل بياناتك مرة", p: "اسم منشأتك وبيانات التواصل. دقيقة واحدة، وما تعيدها مرة ثانية." },
  { n: "2", t: "أصدر الفاتورة", p: "اختر العميل واكتب البنود. الترقيم والإجمالي يجهزون تلقائياً." },
  { n: "3", t: "استلم مستحقاتك", p: "نزّل الفاتورة PDF وأرسلها لعميلك، وتابع حالتها من اللوحة بدل ما تسأله." },
];

/* Answers are drawn from the full FAQ page so the two never contradict,
   and every one of them describes behaviour that exists today. */
const OBJECTIONS = [
  { q: "كيف أرسل الفاتورة لعميلي؟", a: "تنزّلها PDF بضغطة وترسلها بالطريقة اللي تناسبك: واتساب، بريد، أو طباعة. الإرسال المباشر من داخل بلفورا قيد العمل." },
  { q: "أقدر أستخدمه من الجوال؟", a: "نعم. بلفورا يشتغل من المتصفح على الجوال والتابلت والحاسب، وتقدر تصدر فاتورة وأنت خارج المكتب." },
  { q: "بياناتي وبيانات عملائي آمنة؟", a: "بياناتك مشفّرة في النقل والتخزين، وكل حساب يشوف فواتيره هو فقط. ما نشاركها مع أحد." },
  { q: "كم يكلفني؟", a: "بلفورا مجاني بالكامل حالياً بدون بطاقة ائتمانية. لو صار فيه خطط مدفوعة لاحقاً، ننبّهك قبلها." },
];

const MOCK_BARS = [52, 64, 58, 78, 72, 90, 84, 100];
const MOCK_ROWS: Array<[string, BadgeVariant]> = [
  ["INV-1042", "success"],
  ["INV-1041", "danger"],
  ["INV-1040", "info"],
  ["INV-1039", "success"],
];

export default function MarketingLanding() {
  return (
    <div className="mktg">
      <Navbar />

      {/* Hero */}
      <section className="hero">
        <div className="hero__glow" />
        <div className="wrap">
          <div className="hero__badge">
            <Badge variant="brand" dot>مجاني بالكامل خلال فترة الإطلاق</Badge>
          </div>
          <h1>
            أصدر فاتورتك في دقيقة، <span className="accent">بدل ساعة في الإكسل</span>
          </h1>
          <p className="hero__sub">
            بلفورا يكتب فاتورتك بالعربية، يحفظ عملاءك وبنودك، ويطلّعها PDF مرتب جاهز للإرسال. وبعد ما ترسلها، تعرف من اللوحة مين دفع ومين تأخر.
          </p>
          <div className="hero__actions">
            <Link href="/register">
              <Button size="lg">أنشئ فاتورتك الأولى مجاناً<ArrowLeft size={18} /></Button>
            </Link>
            <a href="#how">
              <Button size="lg" variant="secondary"><Play size={16} /> شوف كيف يشتغل</Button>
            </a>
          </div>
          <div className="hero__note">بدون بطاقة ائتمانية · فواتير وعملاء بلا حد</div>

          {/* Product preview mock */}
          <div className="heromock">
            <div className="heromock__frame">
              <div className="heromock__bar">
                <span className="heromock__dot" />
                <span className="heromock__dot" />
                <span className="heromock__dot" />
              </div>
              <div className="heromock__body">
                <div>
                  <div className="mockkpis">
                    <div className="mockkpi">
                      <div className="mockkpi__l">الإيرادات</div>
                      <div className="mockkpi__v" style={{ color: "var(--brand)" }}><Price amount={128450} decimals={0} /></div>
                    </div>
                    <div className="mockkpi">
                      <div className="mockkpi__l">مستحقات</div>
                      <div className="mockkpi__v"><Price amount={23900} decimals={0} /></div>
                    </div>
                    <div className="mockkpi">
                      <div className="mockkpi__l">مدفوعة</div>
                      <div className="mockkpi__v nums-eng">42</div>
                    </div>
                  </div>
                  <div className="mockcard">
                    <div style={{ fontWeight: 700, fontSize: 14 }}>الإيرادات الشهرية</div>
                    <div className="mockbars">
                      {MOCK_BARS.map((h, i) => (
                        <span key={i} style={{ height: h + "%" }} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mockcard">
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>أحدث الفواتير</div>
                  {MOCK_ROWS.map(([id, v]) => (
                    <div className="mockrow" key={id}>
                      <span className="nums-eng" style={{ fontWeight: 700, color: "var(--brand)" }}>{id}</span>
                      <Badge variant={v} dot>{" "}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="sec sec--tight">
        <div className="wrap">
          <div className="sechead">
            <span className="eyebrow">تعرف هالإحساس</span>
            <h2>خلصت الشغل، وباقي عليك الفاتورة</h2>
            <p>الجزء الصعب مو الشغل نفسه. الجزء الصعب اللي بعده.</p>
          </div>
          <div className="problems">
            {PROBLEMS.map(({ Icon, title, body }) => (
              <div className="prob" key={title}>
                <span className="prob__icon"><Icon size={20} /></span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="sec" id="features">
        <div className="wrap">
          <div className="sechead">
            <span className="eyebrow">وش يسوي بلفورا</span>
            <h2>يشيل عنك الجزء الممل</h2>
            <p>من كتابة الفاتورة إلى وصول المبلغ، بواجهة عربية من الأساس مو مترجمة.</p>
          </div>
          <div className="features">
            {FEATURES.map(({ Icon, title, body, accent }) => (
              <Card key={title} padding="large" hover className={"feat" + (accent ? " feat--accent" : "")}>
                <span className="feat__icon"><Icon size={24} /></span>
                <h3>{title}</h3>
                <p>{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="sec" id="how" style={{ background: "var(--surface)" }}>
        <div className="wrap">
          <div className="sechead">
            <span className="eyebrow">3 خطوات</span>
            <h2>أول فاتورة لك اليوم</h2>
          </div>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.n}>
                <span className="step__num nums-eng">{s.n}</span>
                <h3>{s.t}</h3>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="sec" id="pricing">
        <div className="wrap">
          <div className="sechead">
            <span className="eyebrow">أسعار واضحة</span>
            <h2>مجاني بالكامل، بلا حدود</h2>
            <p>بلفورا في فترة الإطلاق، وكل ما تشوفه هنا مفتوح لك بدون بطاقة ائتمانية.</p>
          </div>
          <div className="pricing">
            <Card padding="large" hover={false} className="plan">
              <div className="plan__name">الفوترة</div>
              <div className="plan__price"><Price amount={0} decimals={0} /><small>/ شهرياً</small></div>
              <div className="plan__desc">كل ما تحتاجه لإصدار فواتيرك</div>
              <ul className="plan__feats">
                <li><Check className="text-brand" size={17} />فواتير بلا حد</li>
                <li><Check className="text-brand" size={17} />عملاء بلا حد</li>
                <li><Check className="text-brand" size={17} />ترقيم تلقائي متسلسل</li>
                <li><Check className="text-brand" size={17} />تصدير PDF</li>
              </ul>
              <Link href="/register"><Button variant="secondary" block>ابدأ الآن</Button></Link>
            </Card>

            <Card padding="large" hover={false} variant="elevated" className="plan plan--featured">
              {/* In flow rather than absolutely positioned, so it cannot collide
                  with a long plan name the way a corner badge did. */}
              <div className="plan__flag"><Badge variant="solid">مجاني الآن</Badge></div>
              <div className="plan__name">المتابعة والتحليلات</div>
              <div className="plan__price" style={{ color: "var(--brand)" }}><Price amount={0} decimals={0} /><small>/ شهرياً</small></div>
              <div className="plan__desc">تعرف وين فلوسك بدون جداول جانبية</div>
              <ul className="plan__feats">
                <li><Check className="text-brand" size={17} />حالة كل فاتورة وسجل الدفعات</li>
                <li><Check className="text-brand" size={17} />لوحة إيرادات ومستحقات</li>
                <li><Check className="text-brand" size={17} />أبرز العملاء والمنتجات</li>
                <li><Check className="text-brand" size={17} />تصدير التقارير Excel</li>
              </ul>
              <Link href="/register"><Button block>ابدأ الآن</Button></Link>
            </Card>

            <Card padding="large" hover={false} className="plan">
              <div className="plan__name">قيد العمل</div>
              <div className="plan__price"><Price amount={0} decimals={0} /><small>/ شهرياً</small></div>
              <div className="plan__desc">اللي نشتغل عليه بعدين</div>
              <ul className="plan__feats plan__feats--soon">
                <li><Check size={17} />إرسال الفاتورة بالبريد مباشرة</li>
                <li><Check size={17} />قوالب تصميم متعددة</li>
                <li><Check size={17} />مستخدمون متعددون بصلاحيات</li>
                <li><Check size={17} />ربط API</li>
              </ul>
              <Link href="/contact"><Button variant="secondary" block>اقترح ميزة</Button></Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="sec sec--tight">
        <div className="wrap">
          <div className="quote">
            <p>«اختصر بلفورا وقتي في الفوترة إلى النصف. أخيراً أداة عربية تفهم طريقة عملنا.»</p>
            <div className="quote__who">نورة الشمري</div>
            <div className="quote__role">مصممة مستقلة · الرياض</div>
          </div>
        </div>
      </section>

      {/* Objections */}
      <section className="sec">
        <div className="wrap">
          <div className="sechead">
            <span className="eyebrow">قبل ما تبدأ</span>
            <h2>الأسئلة اللي تجي في البال</h2>
          </div>
          <div className="faqs">
            {OBJECTIONS.map(({ q, a }) => (
              <div className="faqq" key={q}>
                <h3>{q}</h3>
                <p>{a}</p>
              </div>
            ))}
          </div>
          <div className="faqs__more">
            <Link href="/faq">بقية الأسئلة الشائعة<ArrowLeft size={16} /></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta">
            <h2>فاتورتك الجاية تاخذ دقيقة</h2>
            <p>سجّل بياناتك مرة، وخلّ بلفورا يتكفّل بالترقيم والتنسيق والمتابعة.</p>
            <div className="cta__actions">
              <Link href="/register">
                <Button size="lg">أنشئ فاتورتك الأولى مجاناً<ArrowLeft size={18} /></Button>
              </Link>
            </div>
            <div className="cta__note">بدون بطاقة ائتمانية · توقف في أي وقت</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="foot">
        <div className="wrap">
          <div className="foot__in">
            <div style={{ maxWidth: 280 }}>
              <Logo size={24} />
              <p style={{ color: "var(--text-muted)", fontSize: 14, marginTop: 12, lineHeight: 1.7 }}>
                منصّة الفوترة العربية للمستقلين والمنشآت الصغيرة في السعودية.
              </p>
            </div>
            <div className="foot__cols">
              <div className="foot__col">
                <h5>المنتج</h5>
                <a href="#features">المزايا</a>
                <a href="#pricing">الأسعار</a>
                <Link href="/tutorials">التحديثات</Link>
              </div>
              <div className="foot__col">
                <h5>الشركة</h5>
                <Link href="/about">من نحن</Link>
                <Link href="/blog">المدونة</Link>
                <Link href="/contact">تواصل معنا</Link>
              </div>
              <div className="foot__col">
                <h5>قانوني</h5>
                <Link href="/privacy">الخصوصية</Link>
                <Link href="/terms">الشروط</Link>
              </div>
            </div>
          </div>
          <div className="foot__bottom">
            <span>© <span className="nums-eng">2026</span> بلفورا. جميع الحقوق محفوظة.</span>
            <span className="nums-eng" style={{ direction: "ltr" }}>Bilfora</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
