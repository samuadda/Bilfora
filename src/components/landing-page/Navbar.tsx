"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/brand/Logo";
import { ChevronLeft } from "lucide-react";
import { m } from "framer-motion";
import { NavigationMenu } from "@/components/landing-page/MobileMenu";

/* Hash targets match the section ids rendered by MarketingLanding. */
const NavItems = [
	{ name: "الرئيسية", href: "/" },
	{ name: "المميزات", href: "/#features" },
	{ name: "كيف يعمل", href: "/#how" },
	{ name: "الأسعار", href: "/#pricing" },
	{ name: "من نحن", href: "/about" },
	{ name: "الأسئلة الشائعة", href: "/faq" },
];

const Navbar = () => {
	// Note: usePathname won't detect hash changes, but we use it for other logic if needed.
	// For a landing page with hash links, active state is usually handled by scroll observers (not implemented here for simplicity, or we can add it later).

	return (
		<>
			<m.nav
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-surface/80 backdrop-blur-lg border-b border-border transition-all"
			>
				<div className="flex items-center">
					{/* logo */}
					<Link href="/" className="hover:opacity-80 transition-opacity">
						<Logo size={30} />
					</Link>
				</div>

				<div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
					<ul className="flex items-center gap-1 bg-surface-inset p-1 rounded-full border border-border">
						{NavItems.map((item) => (
							<li key={item.name}>
								<Link
									href={item.href}
									className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-surface hover:shadow-sm rounded-full transition-all duration-200"
								>
									{item.name}
								</Link>
							</li>
						))}
					</ul>
				</div>
				<div className="flex items-center gap-3">
					<Link
						href="/login"
						className="hidden items-center gap-1 text-sm font-medium text-muted-foreground hover:text-brand transition-colors lg:flex"
					>
						<span>تسجيل الدخول</span>
						<ChevronLeft size={16} />
					</Link>
					<Link href="/register">
						<Button variant="primary" size="sm" className="hidden md:inline-flex hover:-translate-y-0.5">
							جرب مجاناً
						</Button>
					</Link>
				</div>
			</m.nav>
			<NavigationMenu NavItems={NavItems} MainButtonText="جرب مجاناً" />
		</>
	);
};

export default Navbar;
