export default function PricingPage() {
  const features = [
    { name: "Student Information System", basic: true, standard: true, premium: true, cat: "Core (8)" },
    { name: "Results & Transcripts + PDF", basic: true, standard: true, premium: true, cat: "Core (8)" },
    { name: "Attendance QR / Biometric", basic: true, standard: true, premium: true, cat: "Core (8)" },
    { name: "Timetable Engine Auto", basic: true, standard: true, premium: true, cat: "Core (8)" },
    { name: "E-Library 2000+ Books", basic: true, standard: true, premium: true, cat: "Core (8)" },
    { name: "Admissions Online Form", basic: true, standard: true, premium: true, cat: "Core (8)" },
    { name: "E-Learning LMS Video", basic: true, standard: true, premium: true, cat: "Core (8)" },
    { name: "News & Events Calendar", basic: true, standard: true, premium: true, cat: "Core (8)" },
    { name: "Parent Tracking Portal", basic: false, standard: true, premium: true, cat: "Core (8)" },
    { name: "Dormitory / Boarding", basic: false, standard: true, premium: true, cat: "Core (8)" },
    { name: "Fees & Mobile Money MoMo API", basic: false, standard: true, premium: true, cat: "Finance (5)" },
    { name: "Staff & Payroll Base", basic: false, standard: true, premium: true, cat: "Finance (5)" },
    { name: "Inventory & Store", basic: false, standard: true, premium: true, cat: "Finance (5)" },
    { name: "Payroll PAYE/NSSF Payslip PDF", basic: false, standard: false, premium: true, cat: "Finance (5)" },
    { name: "Procurement LPO/GRN Approval", basic: false, standard: false, premium: true, cat: "Finance (5)" },
    { name: "Discipline & Counseling e-Sign", basic: false, standard: true, premium: true, cat: "Welfare (5)" },
    { name: "Health / Sickbay Clinic Log", basic: false, standard: true, premium: true, cat: "Welfare (5)" },
    { name: "Sports & Clubs Trophy", basic: false, standard: true, premium: true, cat: "Welfare (5)" },
    { name: "Class & Stream S1A-S6", basic: true, standard: true, premium: true, cat: "Welfare (5)" },
    { name: "Subjects S1-S6 Management", basic: true, standard: true, premium: true, cat: "Welfare (5)" },
    { name: "Transport GPS Live + Bus Card", basic: false, standard: false, premium: true, cat: "Premium (12)" },
    { name: "ID Card Generator QR Code", basic: false, standard: true, premium: true, cat: "Premium (12)" },
    { name: "Online Exams CBT Auto Mark", basic: false, standard: false, premium: true, cat: "Premium (12)" },
    { name: "UNEB Analytics AI Prediction", basic: false, standard: false, premium: true, cat: "Premium (12)" },
    { name: "Bulk SMS/WhatsApp 500/month", basic: false, standard: true, premium: true, cat: "Premium (12)" },
    { name: "Bulk SMS Unlimited", basic: false, standard: false, premium: true, cat: "Premium (12)" },
    { name: "Live Chat Parent-Teacher", basic: false, standard: false, premium: true, cat: "Premium (12)" },
    { name: "Alumni Network Donations", basic: false, standard: false, premium: true, cat: "Premium (12)" },
    { name: "Multi-Campus Branches", basic: false, standard: false, premium: true, cat: "Premium (12)" },
    { name: "Reports & Audit Log Who Edited", basic: false, standard: false, premium: true, cat: "Premium (12)" },
    { name: "Document Vault e-Sign NIN", basic: false, standard: false, premium: true, cat: "Premium (12)" },
    { name: "PWA Mobile App Offline + Push", basic: false, standard: false, premium: true, cat: "Premium (12)" },
    { name: "Settings & Roles Permissions", basic: false, standard: true, premium: true, cat: "Premium (12)" },
  ];

  return (
    <div className="bg-white">
      <section className="px-6 lg:px-16 py-12 bg-[#F7F9FF] border-b">
        <div className="max-w-[1500px] mx-auto text-center">
          <span className="bg-yellow-400 text-black text-[10px] font-black px-4 py-1.5 rounded-full">PRICING STRATEGY - PUSH TO STANDARD</span>
          <h1 className="font-black text-[38px] lg:text-[52px] leading-[0.9] mt-4">Choose Plan - Same ERP<br/><span className="text-[#0B3D91]">Different Modules Unlocked</span></h1>
          <p className="text-[13px] text-gray-600 mt-3 max-w-2xl mx-auto">BASIC for trial. STANDARD closes 90% deals at UGX 2.5M. PREMIUM for big schools. Same header/footer, same database - only feature lock.</p>
        </div>
      </section>

      {/* 3 PRICING CARDS - SAME CARD DISPLAY */}
      <section className="px-6 lg:px-16 py-12 max-w-[1500px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">

          {/* BASIC */}
          <div className="bg-white border border-slate-200 rounded-[22px] p-7 flex flex-col">
            <p className="text-[10px] font-black tracking-widest text-gray-500">BASIC • STARTER</p>
            <h3 className="font-black text-[22px] mt-1">Basic ERP</h3>
            <p className="text-[12px] text-gray-600 mt-1">For small schools testing system</p>
            <div className="mt-6"><span className="text-[11px] font-bold">UGX</span><span className="font-black text-[36px]"> 1.2M</span><span className="text-[11px] text-gray-600"> /year</span></div>
            <p className="text-[11px] text-gray-500 mt-1">10 Modules • 1 Portal • No MoMo</p>
            <div className="mt-5 bg-[#F7F9FF] rounded-xl p-3 border text-[11px]">
              <p className="font-black text-[10px]">INCLUDES:</p>
              <p className="mt-1">✓ 8 Core: Student, Results, Attendance, Timetable, Library, Admissions, LMS, News</p>
              <p className="mt-1">✓ Class & Subject</p>
              <p className="mt-1 text-gray-500">✗ No Fees MoMo, No Parent Tracking, No SMS, No Payroll, No Transport</p>
            </div>
            <div className="mt-6 flex gap-1.5"><span className="text-[10px] bg-slate-900 text-white px-2.5 py-1 rounded font-bold">10 Modules</span><span className="text-[10px] border px-2.5 py-1 rounded font-bold">1 Campus</span></div>
            <a href="/contact" className="mt-auto block text-center border-2 border-slate-200 py-3 rounded-xl text-[12px] font-black">Start with Basic</a>
          </div>

          {/* STANDARD - HIGHLIGHTED */}
          <div className="bg-[#0B3D91] text-white rounded-[22px] p-7 flex flex-col shadow-[0_20px_60px_rgba(11,61,145,0.4)] border-2 border-yellow-400 relative scale-[1.03]">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-[10px] font-black px-4 py-1 rounded-full">⭐ MOST POPULAR - 90% SCHOOLS CHOOSE THIS</span>
            <p className="text-[10px] font-black tracking-widest text-blue-200">STANDARD • BEST SELLER</p>
            <h3 className="font-black text-[22px] mt-1">Standard ERP</h3>
            <p className="text-[12px] text-blue-100 mt-1">80% value at 50% cost - Our sales trick</p>
            <div className="mt-6"><span className="text-[11px] font-bold">UGX</span><span className="font-black text-[36px]"> 2.5M</span><span className="text-[11px] text-blue-200"> /year</span></div>
            <p className="text-[11px] text-yellow-300 mt-1 font-black">20 Modules • 4 Portals • MoMo + 500 SMS</p>
            <div className="mt-5 bg-white/10 rounded-xl p-3 border border-white/10 text-[11px]">
              <p className="font-black text-[10px] text-yellow-300">INCLUDES EVERYTHING SCHOOL NEEDS:</p>
              <p className="mt-1">✓ All 8 Core + Parent + Dormitory</p>
              <p className="mt-1">✓ Finance: Fees MoMo + Staff + Inventory</p>
              <p className="mt-1">✓ Welfare: Discipline + Health + Sports</p>
              <p className="mt-1">✓ Premium: ID Cards + 500 SMS/month + Roles</p>
              <p className="mt-2 text-yellow-200 font-bold">Perfect for schools with 200-800 students. Director sees ROI in 1 term.</p>
            </div>
            <div className="mt-6 flex gap-1.5"><span className="text-[10px] bg-white text-[#0B3D91] px-2.5 py-1 rounded font-bold">20 Modules</span><span className="text-[10px] bg-yellow-400 text-black px-2.5 py-1 rounded font-bold">4 Portals</span><span className="text-[10px] bg-white/20 px-2.5 py-1 rounded font-bold">MoMo API</span></div>
            <a href="/contact" className="mt-6 block text-center bg-white text-[#0B3D91] py-3 rounded-xl text-[12px] font-black shadow">Choose Standard - UGX 2.5M →</a>
            <p className="text-[10px] text-center text-blue-200 mt-2">One-time setup + 1 year support + PWA install</p>
          </div>

          {/* PREMIUM */}
          <div className="bg-white border border-slate-200 rounded-[22px] p-7 flex flex-col relative">
            <span className="absolute -top-2.5 -right-2.5 bg-yellow-400 text-black text-[9px] font-black px-3 py-1 rounded-full">👑 ALL 30 MODULES</span>
            <p className="text-[10px] font-black tracking-widest text-gray-500">PREMIUM • ENTERPRISE</p>
            <h3 className="font-black text-[22px] mt-1">Premium ERP</h3>
            <p className="text-[12px] text-gray-600 mt-1">For big schools & groups</p>
            <div className="mt-6"><span className="text-[11px] font-bold">UGX</span><span className="font-black text-[36px]"> 4.8M</span><span className="text-[11px] text-gray-600"> /year</span></div>
            <p className="text-[11px] text-gray-500 mt-1">30 Modules • Unlimited SMS • GPS • AI</p>
            <div className="mt-5 bg-[#F7F9FF] rounded-xl p-3 border text-[11px]">
              <p className="font-black text-[10px]">EVERYTHING + EXTRAS:</p>
              <p className="mt-1">✓ All Standard 20 modules</p>
              <p className="mt-1">✓ + GPS Bus live, CBT auto-mark, UNEB AI, Unlimited SMS, Live Chat, Payroll PAYE/NSSF, Procurement, Alumni, Multi-Campus, Audit Log, Document Vault, PWA Offline</p>
            </div>
            <div className="mt-6 flex gap-1.5"><span className="text-[10px] bg-slate-900 text-white px-2.5 py-1 rounded font-bold">30 Modules</span><span className="text-[10px] bg-[#0B3D91] text-white px-2.5 py-1 rounded font-bold">GPS + AI</span></div>
            <a href="/contact" className="mt-auto block text-center bg-slate-900 text-white py-3 rounded-xl text-[12px] font-black">Go Premium - UGX 4.8M</a>
          </div>

        </div>

        {/* COMPARISON TABLE - SAME DISPLAY */}
        <div className="mt-16 bg-white border rounded-[20px] overflow-hidden">
          <div className="px-6 py-5 bg-[#F7F9FF] border-b flex justify-between items-center">
            <h3 className="font-black text-[16px]">Full Feature Comparison - 30 Modules</h3>
            <span className="text-[10px] font-black bg-white border px-3 py-1 rounded-full">E:/Projects/sschool-premium/prisma/schema.prisma</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-[12px]">
              <thead className="bg-slate-900 text-white text-[10px] font-black tracking-widest">
                <tr><th className="text-left p-3">MODULE NAME</th><th className="p-3">CATEGORY</th><th className="p-3">BASIC 800k</th><th className="p-3 bg-[#0B3D91]">STANDARD 2.5M ⭐</th><th className="p-3">PREMIUM 4.8M</th></tr>
              </thead>
              <tbody>
                {features.map((f,i)=>(
                  <tr key={i} className="border-b hover:bg-[#F7F9FF]">
                    <td className="p-3 font-bold">{f.name}</td>
                    <td className="p-3"><span className="text-[9px] font-black bg-[#EEF3FF] text-[#0B3D91] px-2 py-1 rounded-full">{f.cat}</span></td>
                    <td className="p-3 text-center">{f.basic? "✅" : "❌"}</td>
                    <td className="p-3 text-center bg-blue-50/50 font-black">{f.standard? "✅" : "❌"}</td>
                    <td className="p-3 text-center">{f.premium? "✅" : "❌"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 bg-[#020B1A] text-white rounded-[24px] p-8">
          <h3 className="font-black text-[18px]">How to Sell - Your Trick to Push STANDARD</h3>
          <div className="grid lg:grid-cols-3 gap-6 mt-5 text-[12px]">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10"><p className="font-black text-gray-400">1. Show BASIC First</p><p className="text-gray-400 mt-2">Director: "UGX 800k only 10 modules, no MoMo, no parent portal." He feels limited. Basic has NO MoMo - so he cannot collect fees. This creates pain.</p></div>
            <div className="bg-[#0B3D91] p-4 rounded-xl border-2 border-yellow-400"><p className="font-black text-yellow-300">2. Then Show STANDARD - CLOSE</p><p className="text-blue-100 mt-2">"For just 2.5M, you get MoMo API, Parent Portal, 500 SMS, ID Cards, Inventory, Discipline, Health - 80% of premium at 50% cost. 90% schools like yours take Standard." - Director says YES.</p></div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10"><p className="font-black">3. PREMIUM as Anchor</p><p className="text-gray-400 mt-2">Show PREMIUM 4.8M last. Director sees 4.8M expensive, so 2.5M looks cheap. Premium is anchor. You say: "Premium has GPS bus, AI UNEB, unlimited SMS for big schools."</p></div>
          </div>
        </div>
      </section>
    </div>
  )
}
