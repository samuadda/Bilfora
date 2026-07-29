"use client";

import {
	useState,
	useEffect,
} from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabasePersistent, supabaseSession } from "@/lib/supabase-clients";
import {
	LayoutDashboard,
	FileText,
	Users,
	Settings,
	LogOut,
	ShoppingCart,
	BarChart3,
	ChevronRight,
	ChevronLeft,
	Menu,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { m, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import { Logo } from "@/components/brand/Logo";
import { useSidebar } from "./sidebar/SidebarContext";
import { SidebarLogoutModal } from "./sidebar/SidebarLogoutModal";
import { SidebarNavItem } from "./sidebar/SidebarNavItem";
import { SidebarTooltip } from "./sidebar/SidebarTooltip";



export default function Sidebar() {
	const { toast } = useToast();
	const { isCollapsed, setIsCollapsed } = useSidebar();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isLogoutOpen, setIsLogoutOpen] = useState(false);
	const [isLoggingOut, setIsLoggingOut] = useState(false);
	const [hoveredItem, setHoveredItem] = useState<{ label: string; top: number } | null>(null);
	const [mounted, setMounted] = useState(false);
	const pathname = usePathname();
	const router = useRouter();

	// 🧱 Persist collapse state
	useEffect(() => {
		const saved = localStorage.getItem("sidebar-collapsed");
		if (saved) setIsCollapsed(saved === "true");
		setMounted(true);
	}, [setIsCollapsed]);

	useEffect(() => {
		localStorage.setItem("sidebar-collapsed", String(isCollapsed));
		if (!isCollapsed) setHoveredItem(null);
	}, [isCollapsed]);

	// 🔒 Logout
	// Clear session from both persistent and session clients to ensure complete logout
	const confirmLogout = async () => {
		setIsLoggingOut(true);
		try {
			// Sign out from both clients to ensure session is cleared regardless of which was used
			await Promise.all([
				supabasePersistent.auth.signOut(),
				supabaseSession.auth.signOut(),
			]);
		} catch (error) {
			console.error("Error during logout:", error);
		} finally {
			setIsLoggingOut(false);
			setIsLogoutOpen(false);
			toast({
				title: "تم تسجيل الخروج",
				description: "نراك قريبًا 👋",
			});
			router.replace("/login");
		}
	};

	const toggleSidebar = () => setIsCollapsed(!isCollapsed);
	const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

	const handleHover = (e: React.MouseEvent<HTMLElement>, label: string) => {
		if (isCollapsed) {
			const rect = e.currentTarget.getBoundingClientRect();
			setHoveredItem({ label, top: rect.top + rect.height / 2 });
		}
	};

	const handleLeave = () => {
		setHoveredItem(null);
	};

	const DASHBOARD_NAV_ITEMS = [
		{ href: "/dashboard", label: "لوحة التحكم", icon: LayoutDashboard },
		{
			href: "/dashboard/products",
			label: "المنتجات / الخدمات",
			icon: ShoppingCart,
		},
		{ href: "/dashboard/invoices", label: "الفواتير", icon: FileText },
		{ href: "/dashboard/clients", label: "العملاء", icon: Users },
		{ href: "/dashboard/analytics", label: "التحليلات", icon: BarChart3 },
	];

	const bottomNavItems = [
		{ href: "/dashboard/settings", label: "الإعدادات", icon: Settings },
	];

	return (
		<>
			{/* Mobile Toggle Button */}
			<button
				onClick={toggleMobileMenu}
				className="fixed top-4 right-4 z-50 md:hidden bg-surface/80 backdrop-blur-md p-2.5 rounded-xl shadow-lg border border-border text-muted-foreground hover:bg-surface-2 transition-colors"
			>
				<Menu size={24} />
			</button>

			<m.aside
				initial={{ x: 0 }}
				animate={{
					width: isCollapsed ? 80 : 264,
					transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
				}}
				className={cn(
					"fixed top-0 right-0 h-screen bg-surface/90 backdrop-blur-xl border-l border-border shadow-2xl flex flex-col z-40 dashboard-sidebar",
					isMobileMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0",
					"transition-transform duration-300 ease-in-out"
				)}
			>
				{/* Logo & Collapse */}
				<div className={cn("p-6 border-b border-border flex items-center", isCollapsed ? "justify-center" : "justify-between")}>
					<div className={cn("transition-all duration-300 flex justify-center", isCollapsed ? "w-full" : "w-auto")}>
					{isCollapsed ? (
						<button
							onClick={toggleSidebar}
							className="flex flex-col items-center gap-1 group w-full"
							title="توسيع القائمة"
						>
							<Logo variant="symbol" size={26} />
							<ChevronLeft size={14} className="text-disabled group-hover:text-brand transition-colors animate-pulse" />
						</button>
					) : (
						<Link href="/dashboard" className="hover:opacity-80 transition-opacity">
							<Logo size={26} />
						</Link>
					)}
					</div>
					{!isCollapsed && (
						<button
							onClick={toggleSidebar}
							className="p-2 rounded-xl hover:bg-surface-inset text-subtle hover:text-brand transition-all duration-200 hidden md:block"
							title="تصغير القائمة"
						>
							<ChevronRight size={20} />
						</button>
					)}
				</div>

				{/* Main Navigation */}
				<nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto scrollbar-hide">
					{!isCollapsed && (
						<div className="px-4 mb-2 mt-2">
							<p className="text-xs font-semibold text-disabled uppercase tracking-wider">القائمة الرئيسية</p>
						</div>
					)}

					{DASHBOARD_NAV_ITEMS.map(({ href, label, icon: Icon }) => {
						const active =
							pathname === href ||
							(href !== "/dashboard" &&
								pathname.startsWith(href + "/"));
						return (
							<SidebarNavItem
								key={href}
								href={href}
								label={label}
								icon={Icon}
								active={active}
								isCollapsed={isCollapsed}
								onClick={() => setIsMobileMenuOpen(false)}
								onMouseEnter={(e) => handleHover(e, label)}
								onMouseLeave={handleLeave}
							/>
						);
					})}

					<div className={cn("my-4 border-t border-border", isCollapsed ? "mx-2" : "mx-4")} />

					{!isCollapsed && (
						<div className="px-4 mb-2">
							<p className="text-xs font-semibold text-disabled uppercase tracking-wider">الإعدادات والدعم</p>
						</div>
					)}

					{bottomNavItems.map(({ href, label, icon: Icon }) => {
						const active =
							pathname === href ||
							pathname.startsWith(href + "/");
						return (
							<SidebarNavItem
								key={href}
								href={href}
								label={label}
								icon={Icon}
								active={active}
								isCollapsed={isCollapsed}
								onClick={() => setIsMobileMenuOpen(false)}
								onMouseEnter={(e) => handleHover(e, label)}
								onMouseLeave={handleLeave}
							/>
						);
					})}
				</nav>

				{/* Footer Actions */}
				<div className="border-t border-border px-4 py-4 bg-surface-2 mt-auto space-y-1">
					{/* Logout */}
					<button
						onClick={() => setIsLogoutOpen(true)}
						onMouseEnter={(e) => handleHover(e, "تسجيل الخروج")}
						onMouseLeave={handleLeave}
						className="w-full flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-danger hover:bg-danger-soft transition-all duration-200"
					>
						<div className="relative z-10 group-hover:scale-110 transition-transform duration-200">
							<LogOut size={isCollapsed ? 22 : 18} />
						</div>
						{!isCollapsed && <span>تسجيل الخروج</span>}
					</button>
				</div>
			</m.aside>

			{/* Mobile Overlay */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<m.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 backdrop-blur-sm bg-overlay z-30 md:hidden"
						onClick={toggleMobileMenu}
					/>
				)}
			</AnimatePresence>

			{/* Floating Tooltip Portal */}
			<SidebarTooltip
				isCollapsed={isCollapsed}
				hoveredItem={hoveredItem}
				mounted={mounted}
			/>

			{/* Logout Modal */}
			<SidebarLogoutModal
				isOpen={isLogoutOpen}
				isLoggingOut={isLoggingOut}
				onClose={() => setIsLogoutOpen(false)}
				onConfirm={confirmLogout}
			/>
		</>
	);
}
