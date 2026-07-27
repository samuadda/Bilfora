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
} from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Badge, type BadgeVariant } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Price } from "@/components/ui/Price";
import "./marketing.css";

const FEATURES = [
  { Icon: FileText, title: "فواتير متعددة الأنواع", body: "فواتير ضريبية ومبسطة وإشعارات دائنة — بقوالب عربية أنيقة وجاهزة للطباعة." },
  { Icon: Wallet, title: "تتبع المدفوعات", body: "سجّل الدفعات يدوياً وتابع الحالة تلقائياً: مدفوعة، متأخرة، أو مُرسلة.", accent: true },
  { Icon: BarChart3, title: "تحليلات لحظية", body: "لوحة تحكم بمؤشرات الإيرادات والمستحقات وأبرز العملاء في نظرة واحدة." },
  { Icon: Users, title: "إدارة العملاء", body: "قاعدة عملاء منظمة مع سجل كامل للفواتير والمبالغ لكل عميل." },
  { Icon: ShieldCheck, title: "متوافقة مع الفوترة السعودية", body: "بنية جاهزة لهيئة الزكاة والضريبة مع رمز QR وترميز TLV." },
  { Icon: Download, title: "تصدير PDF فوري", body: "صدّر أي فاتورة بنفس تصميم الواجهة، بدقة بكسل كاملة." },
];

const STEPS = [
  { n: "١", t: "أنشئ حسابك", p: "سجّل بريدك، أضف بيانات منشأتك ورقمك الضريبي في دقيقة." },
  { n: "٢", t: "أصدر فاتورتك", p: "اختر العميل والبنود، وسنحسب الضريبة والإجمالي تلقائياً." },
  { n: "٣", t: "حصّل مستحقاتك", p: "أرسل الرابط، تابع الحالة، واستلم تنبيهاً عند السداد." },
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
      {/* Nav */}
      <nav className="lnav">
        <div className="wrap lnav__in">
          <Link href="/" aria-label="بلفورا">
            <Logo size={26} />
          </Link>
          <div className="lnav__links">
            <a href="#features">المزايا</a>
            <a href="#how">كيف يعمل</a>
            <a href="#pricing">الأسعار</a>
          </div>
          <div className="lnav__cta">
            <Link href="/login">
              <Button variant="ghost" size="sm">تسجيل الدخول</Button>
            </Link>
            <Link href="/register">
              <Button size="sm">ابدأ مجاناً</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero__glow" />
        <div className="wrap">
          <div className="hero__badge">
            <Badge variant="brand" dot>جديد · تصدير متوافق مع ZATCA</Badge>
          </div>
          <h1>
            فوترة عربية، <span className="accent">بلمسة احترافية</span>
          </h1>
          <p className="hero__sub">
            بلفورا منصّة الفوترة المصمّمة للمستقلين والمنشآت الصغيرة في السعودية. أنشئ فواتيرك، تابع مدفوعاتك، وحصّل مستحقاتك — كل ذلك بالعربية أولاً.
          </p>
          <div className="hero__actions">
            <Link href="/register">
              <Button size="lg">ابدأ مجاناً<ArrowLeft size={18} /></Button>
            </Link>
            <a href="#how">
              <Button size="lg" variant="secondary"><Play size={16} /> شاهد العرض</Button>
            </a>
          </div>
          <div className="hero__note">لا حاجة لبطاقة ائتمانية · ١٤ يوماً تجربة مجانية</div>

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

      {/* Features */}
      <section className="sec" id="features">
        <div className="wrap">
          <div className="sechead">
            <span className="eyebrow">كل ما تحتاجه</span>
            <h2>أدوات فوترة كاملة، بلا تعقيد</h2>
            <p>من إصدار الفاتورة حتى تحصيل المبلغ — بلفورا يغطّي دورة العمل كاملةً بواجهة عربية أصيلة.</p>
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
            <span className="eyebrow">بثلاث خطوات</span>
            <h2>من الفكرة إلى التحصيل</h2>
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
            <span className="eyebrow">أسعار بسيطة</span>
            <h2>اختر ما يناسب عملك</h2>
          </div>
          <div className="pricing">
            <Card padding="large" hover={false} className="plan">
              <div className="plan__name">مجاني</div>
              <div className="plan__price"><Price amount={0} decimals={0} /><small>/ شهرياً</small></div>
              <div className="plan__desc">للبداية والتجربة</div>
              <ul className="plan__feats">
                <li><Check className="text-brand" size={17} />حتى ٥ فواتير شهرياً</li>
                <li><Check className="text-brand" size={17} />عميل واحد</li>
                <li><Check className="text-brand" size={17} />تصدير PDF</li>
              </ul>
              <Link href="/register"><Button variant="secondary" block>ابدأ الآن</Button></Link>
            </Card>

            <Card padding="large" hover={false} variant="elevated" className="plan plan--featured">
              <div style={{ position: "absolute", top: 16, insetInlineStart: 16 }}>
                <Badge variant="solid">الأكثر شيوعاً</Badge>
              </div>
              <div className="plan__name">احترافي</div>
              <div className="plan__price" style={{ color: "var(--brand)" }}><Price amount={49} decimals={0} /><small>/ شهرياً</small></div>
              <div className="plan__desc">للمستقلين النشطين</div>
              <ul className="plan__feats">
                <li><Check className="text-brand" size={17} />فواتير غير محدودة</li>
                <li><Check className="text-brand" size={17} />عملاء غير محدودين</li>
                <li><Check className="text-brand" size={17} />تحليلات متقدمة</li>
                <li><Check className="text-brand" size={17} />رمز QR للسداد</li>
              </ul>
              <Link href="/register"><Button block>ابدأ التجربة</Button></Link>
            </Card>

            <Card padding="large" hover={false} className="plan">
              <div className="plan__name">أعمال</div>
              <div className="plan__price"><Price amount={149} decimals={0} /><small>/ شهرياً</small></div>
              <div className="plan__desc">للفرق والمنشآت</div>
              <ul className="plan__feats">
                <li><Check className="text-brand" size={17} />كل مزايا الاحترافي</li>
                <li><Check className="text-brand" size={17} />مستخدمون متعددون</li>
                <li><Check className="text-brand" size={17} />تكامل ZATCA كامل</li>
                <li><Check className="text-brand" size={17} />دعم أولوية</li>
              </ul>
              <Link href="/contact"><Button variant="secondary" block>تواصل معنا</Button></Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="sec">
        <div className="wrap">
          <div className="quote">
            <p>«اختصر بلفورا وقتي في الفوترة إلى النصف. أخيراً أداة عربية تفهم طريقة عملنا.»</p>
            <div className="quote__who">نورة الشمري</div>
            <div className="quote__role">مصممة مستقلة · الرياض</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="cta">
            <h2>ابدأ الفوترة باحتراف اليوم</h2>
            <p>انضم لمئات المستقلين والمنشآت الذين يديرون فواتيرهم بثقة عبر بلفورا.</p>
            <div className="cta__actions">
              <Link href="/register">
                <Button size="lg">أنشئ حسابك المجاني<ArrowLeft size={18} /></Button>
              </Link>
            </div>
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
            <span>© ٢٠٢٦ بلفورا. جميع الحقوق محفوظة.</span>
            <span className="nums-eng" style={{ direction: "ltr" }}>Bilfora</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
