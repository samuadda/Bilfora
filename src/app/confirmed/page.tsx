"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ConfirmedPage() {
	const router = useRouter();

	useEffect(() => {
		const timer = setTimeout(() => {
			router.push("/login");
		}, 5000);

		return () => clearTimeout(timer);
	}, [router]);

	return (
		<div className="h-screen flex flex-col items-center justify-center text-center px-4">
			<h1 className="text-2xl font-bold text-green-600">
				🎉 تم تفعيل الحساب بنجاح
			</h1>
			<p className="text-muted-foreground mt-2">
				جاري تحويلك لصفحة تسجيل الدخول خلال ثوانٍ...
			</p>
			<p className="text-sm text-disabled mt-1">
				إذا لم يتم التحويل تلقائيًا،{" "}
				<span
					className="underline cursor-pointer text-brand"
					onClick={() => router.push("/login")}
				>
					اضغط هنا
				</span>
			</p>
		</div>
	);
}
