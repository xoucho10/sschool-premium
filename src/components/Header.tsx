"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      {/* TOP BAR */}
      <div className="w-full bg-[#051B3A] text-white/80 text-[11px] font-bold tracking-widest px-6 lg:px-16 h-[36px] flex justify-between items-center">
        <div className="flex gap-6"><span>📞 +256 700 123456 | Kampala</span><span className="hidden md:block">✉️ info@premiumschool.ug</span><span className="hidden lg:block">White Shirt • Blue Tie • Tony Blue Down</span></div>
        <div className="flex gap-4"><Link href="/about">About</Link><Link href="/contact">Contact</Link><span className="text-[#A8C6FF]">30 MODULES ERP</span></div>
      </div>

      {/* MAIN HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm">
        <div className="px-6 lg:px-16 h-[78px] flex justify-between items-center max-w-[1500px] mx-auto">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#0B3D91] text-white grid place-items-center rounded-xl font-black text-lg">PS</div>
            <div><p className="font-black leading-none text-[14px]">PREMIUM SCHOOL<br/><span className="text-[#0B3D91]">MANAGEMENT</span></p><p className="text-[8px] font-black tracking-[0.2em] text-slate-500">30 MODULES • NEXT.JS 14 • PRISMA</p></div>
          </Link>

          <nav className="hidden xl:flex items-center gap-7 text-[13px] font-black tracking-wide">
            <Link href="/" className="text-[#0B3D91]">HOME</Link>
            <Link href="/modules" className="hover:text-[#0B3D91]">MODULES (30)</Link>
            <Link href="/portals" className="hover:text-[#0B3D91]">PORTALS</Link>
            <Link href="/pricing" className="hover:text-[#0B3D91]">PRICING</Link>
            <Link href="/about" className="hover:text-[#0B3D91]">ABOUT</Link>
            <Link href="/contact" className="hover:text-[#0B3D91]">CONTACT</Link>
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link href="/portal/student" className="border border-slate-300 px-5 py-2.5 rounded-full font-black text-[12px]">STUDENT</Link>
            <Link href="/portal/parent" className="border border-slate-300 px-5 py-2.5 rounded-full font-black text-[12px]">PARENT</Link>
            <Link href="/portal/admin" className="bg-[#0B3D91] text-white px-6 py-2.5 rounded-full font-black text-[12px] shadow">ADMIN LOGIN</Link>
          </div>

          <button onClick={()=>setMobile(!mobile)} className="xl:hidden w-10 h-10 grid place-items-center border rounded-lg font-black">☰</button>
        </div>

        {mobile && (
          <div className="xl:hidden bg-white border-t px-6 py-5 space-y-4 text-[13px] font-black">
            <Link href="/" className="block">HOME</Link>
            <Link href="/modules" className="block">MODULES (30)</Link>
            <Link href="/portals" className="block">PORTALS</Link>
            <Link href="/pricing" className="block">PRICING - BASIC/STANDARD/PREMIUM</Link>
            <Link href="/portal/admin" className="block text-[#0B3D91]">ADMIN LOGIN</Link>
            <Link href="/portal/student" className="block">STUDENT PORTAL</Link>
            <Link href="/portal/parent" className="block">PARENT PORTAL</Link>
          </div>
        )}

        <div className="bg-[#F7F9FF] border-t border-slate-100 px-6 lg:px-16 h-[44px] hidden lg:flex items-center gap-2 text-[11px] font-bold overflow-x-auto">
          <span className="text-slate-400 mr-2">QUICK NAV:</span>
          <Link href="/modules" className="bg-[#0B3D91] text-white px-3 py-1 rounded-full">All 30 Modules</Link>
          <Link href="/modules#core" className="bg-white border px-3 py-1 rounded-full">Core (8)</Link>
          <Link href="/modules#finance" className="bg-white border px-3 py-1 rounded-full">Finance (5)</Link>
          <Link href="/modules#welfare" className="bg-white border px-3 py-1 rounded-full">Welfare (5)</Link>
          <Link href="/modules#premium" className="bg-yellow-400 text-black px-3 py-1 rounded-full">Premium (12) 👑</Link>
          <span className="ml-auto text-[10px] text-slate-500">E:/Projects/sschool-premium</span>
        </div>
      </header>
    </>
  )
}
