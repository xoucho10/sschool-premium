import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#020B1A] text-white px-6 lg:px-16 py-12 border-t border-white/10">
      <div className="max-w-[1500px] mx-auto grid lg:grid-cols-4 gap-10">
        <div><div className="flex items-center gap-3"><div className="w-10 h-10 bg-white text-[#0B3D91] grid place-items-center rounded-lg font-black">PS</div><p className="font-black text-[12px]">PREMIUM SCHOOL<br/>MANAGEMENT</p></div><p className="text-[11px] text-gray-400 mt-4 leading-relaxed">Complete ERP - 30 Modules - Next.js 14 + Prisma MySQL + MoMo API. White Shirt Blue Tie Tony Blue Down.</p><p className="text-[10px] text-gray-500 mt-3">E:/Projects/sschool-premium</p></div>
        <div><p className="font-black text-[12px] tracking-widest">NAVIGATOR</p><div className="mt-4 space-y-2 text-[12px] text-gray-400"><Link href="/" className="block hover:text-white">Home - Hero + Stats</Link><Link href="/modules" className="block hover:text-white">All 30 Modules Grid</Link><Link href="/portals" className="block hover:text-white">Live Portals Preview</Link><Link href="/pricing" className="block hover:text-white">Pricing: Basic / Standard / Premium</Link></div></div>
        <div><p className="font-black text-[12px] tracking-widest">PORTALS</p><div className="mt-4 space-y-2 text-[12px] text-gray-400"><Link href="/portal/admin" className="block hover:text-white">Admin ERP - /portal/admin</Link><Link href="/portal/student" className="block hover:text-white">Student Portal - /portal/student</Link><Link href="/portal/parent" className="block hover:text-white">Parent Portal - /portal/parent</Link><Link href="/portal/teacher" className="block hover:text-white">Teacher Portal - /portal/teacher</Link></div></div>
        <div><p className="font-black text-[12px] tracking-widest">SYSTEM</p><p className="text-[11px] text-gray-500 mt-4">28 Pages Premium • Next.js 14 • Tailwind • Prisma • MySQL • MoMo • PWA</p><p className="text-[11px] text-gray-600 mt-2">© 2026 Premium School ERP - 30 Modules Live - Same Header/Footer on All Pages</p></div>
      </div>
    </footer>
  )
}
