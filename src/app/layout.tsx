import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Premium School Management - 30 Modules",
  description: "Next.js 14 + Prisma",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white">
        {/* TOP DARK BAR */}
        <div className="bg-[#0f1e3d] text-white text-[11px] tracking-widest py-2 px-6 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <span>📞 +256 700 123456 | Kampala</span>
            <span>📧 info@premiumschool.ug</span>
            <span className="hidden md:inline">White Shirt • Blue Tie • Tony Blue Down</span>
          </div>
          <div className="flex gap-3 font-bold">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <span className="text-blue-300">30 MODULES ERP</span>
          </div>
        </div>

        {/* MAIN NAV */}
        <div className="border-b bg-white px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-[#1e3a8a] rounded-xl flex items-center justify-center text-white font-black">PS</div>
            <div className="leading-tight">
              <h1 className="font-black text-[14px]">PREMIUM SCHOOL<br/><span className="text-[#1e3a8a]">MANAGEMENT</span></h1>
              <p className="text-[9px] tracking-[2px] text-gray-500 font-bold">30 MODULES • NEXT.JS 14 • PRISMA</p>
            </div>
          </div>

          <nav className="hidden lg:flex gap-6 font-black text-[13px]">
            <Link href="/" className="text-[#1e3a8a]">HOME</Link>
            <Link href="/#modules">MODULES (30)</Link>
            <Link href="/portal">PORTALS</Link>
            <Link href="/pricing">PRICING</Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/contact">CONTACT</Link>
          </nav>

          <div className="flex gap-2">
            <Link href="/students" className="border rounded-full px-5 py-2 text-[12px] font-black">STUDENT</Link>
            <Link href="/parents" className="border rounded-full px-5 py-2 text-[12px] font-black">PARENT</Link>
            <Link href="/admin" className="bg-[#1e3a8a] text-white rounded-full px-6 py-2 text-[12px] font-black">ADMIN LOGIN</Link>
          </div>
        </div>

        {/* QUICK NAV */}
        <div className="bg-[#f7f8fc] border-b px-6 py-2.5 flex gap-2 items-center overflow-x-auto">
          <span className="text-[10px] font-bold text-gray-400 mr-2">QUICK NAV:</span>
          <Link href="/#all" className="bg-[#1e3a8a] text-white rounded-full px-4 py-1.5 text-[11px] font-bold whitespace-nowrap">All 30 Modules</Link>
          <Link href="/#core" className="bg-white border rounded-full px-4 py-1.5 text-[11px] font-bold whitespace-nowrap">Core (8)</Link>
          <Link href="/#finance" className="bg-white border rounded-full px-4 py-1.5 text-[11px] font-bold whitespace-nowrap">Finance (5)</Link>
          <Link href="/#welfare" className="bg-white border rounded-full px-4 py-1.5 text-[11px] font-bold whitespace-nowrap">Welfare (5)</Link>
          <Link href="/#premium" className="bg-yellow-400 border rounded-full px-4 py-1.5 text-[11px] font-bold whitespace-nowrap">Premium (12) 👑</Link>
          <span className="ml-auto text-[10px] text-gray-400 hidden md:block">E:/Projects/sschool-premium</span>
        </div>

        {children}
      </body>
    </html>
  );
}