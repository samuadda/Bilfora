import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import MainButton from "@/components/MainButton";
import { ChevronLeft } from "lucide-react";
import { m } from "framer-motion";

const SimpleNavbar = () => {
	return (
		<>
			<m.nav
				initial={{ opacity: 0, y: -50 }}
				animate={{ opacity: 1, y: 0 }}
				className="fixed top-0 left-0 right-0 flex items-center justify-between h-16 bg-surface/10 backdrop-blur-md border-b border-border px-7 z-50"
			>
				<div className="flex items-center">
					{/* logo */}
					<Link href="/" className="hover:opacity-80 transition-opacity">
						<Logo size={26} />
					</Link>
				</div>

				<div className="flex items-center gap-2">
					<Link
						href="/dashboard"
						className="hidden items-center gap-0.5 group lg:flex"
					>
						<button className="text-brand font-bold cursor-pointer group-hover:text-brand-hover transition-all duration-100">
							الدخول
						</button>
						<ChevronLeft
							size={20}
							strokeWidth={1.75}
							className="text-brand transition-all duration-200 group-hover:-translate-x-1 group-hover:text-brand-hover"
						/>
					</Link>
					<Link href="/register">
						<MainButton
							text="جرب مجاناً"
							bgColor="bg-brand"
							textColor="text-white"
							className="hidden md:flex"
						/>
					</Link>
				</div>
			</m.nav>
		</>
	);
};

export default SimpleNavbar;
