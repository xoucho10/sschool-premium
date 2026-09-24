export default function Home() {
  const allModules = [
    { t: "Student Information System", b: "S1-S6, 500+ records", d: "AdmissionNo, Class, Parent linkage, Photo, Bio, Status - Prisma Student model", n: false },
    { t: "Fees & Mobile Money", b: "UGX 450,000 paid", d: "MTN MoMo + Airtel API, Balances, Receipts, Arrears, Auto SMS - FeesBalance field", n: false },
    { t: "Results & Transcripts", b: "95% pass, Term 2", d: "Term, Year, Score, Grade, Subject, Teacher link - UNEB analytics, Charts", n: false },
    { t: "Attendance System", b: "98.2% attendance", d: "Daily mark, Late, Absent, Reports - Linked to Student + Class", n: false },
    { t: "Timetable Engine", b: "S1A - S6 Science", d: "Period, Room, Teacher, Conflict check - Auto generation for 12 classes", n: false },
    { t: "E-Library 2000+ Books", b: "2000 books online", d: "Digital books, Past UNEB papers, Borrow/Return logs", n: false },
    { t: "Dormitory / Boarding", b: "120 boarders", d: "Hostel, BedNo, Allocation, Visitor, Discipline - For boarding students", n: false },
    { t: "Staff & Payroll", b: "30+ teachers", d: "Teacher model, Subject, Salary, Leave, Performance - Teacher portal", n: false },
    { t: "Admissions Online", b: "150 applications", d: "Online form, Document upload, Status pending/approved - Application model", n: false },
    { t: "Parent Tracking", b: "Parent Portal Live", d: "Real-time child results, fees, attendance, Direct chat to teacher", n: false },
    { t: "E-Learning LMS", b: "48 lessons uploaded", d: "Video lessons, Assignments, Quizzes, Zoom integration - For students", n: false },
    { t: "News & Events", b: "12 news active", d: "News model - Announcements, Events, Gallery - Admin controlled", n: false },
    { t: "Transport GPS + Bus Card", b: "4 buses live", d: "Bus, Route, Driver, GPS live, Tap card IN/OUT, Fuel tracking - busRouteId", n: true },
    { t: "Inventory & Store", b: "Low stock alert", d: "Lab chemicals, Books, Uniforms, Stock qty, Supplier - stockQty field", n: true },
    { t: "Payroll & HRM", b: "PAYE, NSSF", d: "Payslip, PAYE, NSSF, Allowances, Bank - Full Teacher salary system", n: true },
    { t: "Procurement / LPO", b: "LPO, GRN", d: "Suppliers, LPO, GRN, Stock IN/OUT, Approval workflow", n: true },
    { t: "ID Card Generator", b: "QR Code", d: "Auto Student/Staff ID with QR, Photo, Print-ready PDF - qrCode field", n: true },
    { t: "Online Exams CBT", b: "Auto marking", d: "S1-S4 Computer Based Tests, Instant grading, Timer, Question bank", n: true },
    { t: "UNEB Analytics AI", b: "AI Prediction", d: "Predict Division, At-risk students, Subject weakness heatmap, Charts", n: true },
    { t: "Discipline & Counseling", b: "Parent signed", d: "Incident reports, Warning letters, Counseling sessions, Suspension log", n: true },
    { t: "Health / Sickbay", b: "Clinic log", d: "Clinic visits, Drugs, Blood group, Allergies, Medical notes - medicalNotes", n: true },
    { t: "Sports & Clubs", b: "Houses, Trophies", d: "Athletics, Football, Clubs, Inter-school, Points, Trophy cabinet", n: true },
    { t: "Bulk SMS/WhatsApp/Email", b: "500 in 1-click", d: "Africas Talking API, Results SMS, Fees reminders, Discipline alerts - smsLog", n: true },
    { t: "Live Chat Parent-Teacher", b: "Real-time", d: "Direct chat in portal, Read receipts, File share, Parent-teacher meeting", n: true },
    { t: "Alumni Network", b: "Fundraising", d: "Past students, Donations, Mentorship, Jobs, Events - Alumni model", n: true },
    { t: "Multi-Campus", b: "Branches", d: "Manage 2-3 branches from 1 admin, Campus-wise reports, Transfer", n: true },
    { t: "Reports & Audit Log", b: "Who edited what", d: "Full audit - who edited student, when, what field - auditLog table", n: true },
    { t: "Document Vault", b: "e-Sign", d: "Birth cert, UCE results, NIN, Medical form storage, e-signature parent", n: true },
    { t: "PWA Mobile App + Offline", b: "Installable", d: "Install on phone, Works offline, Auto-sync, Push notifications - PWA", n: true },
    { t: "Settings & Roles", b: "Permissions", d: "Roles: Bursar sees fees only, Teacher only their class, Audit, Backup", n: true },
  ];

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      {/* HERO - NO HEADER HERE - Header comes from layout.tsx */}
      <section id="home" className="relative w-full min-h-[78vh] flex flex-col justify-center overflow-hidden bg-[#0B3D91]">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover"><source src="/hero.mp4" type="video/mp4" /></video>
        <div className="absolute inset-0 bg-[#0B3D91]/75"></div>
        <div className="relative z-10 px-6 lg:px-16 pt-[40px] pb-[180px] max-w-[1400px]">
          <span className="inline-block bg-[#00D1FF]/20 backdrop-blur border border-[#00D1FF]/30 text-[#A8E8FF] text-[11px] font-black px-5 py-2 rounded-full">PREMIUM ERP • 28 PAGES • DATABASE READY • MOBILE MONEY</span>
          <h1 className="font-black text-[44px] md:text-[60px] lg:text-[68px] leading-[0.85] mt-6 text-white">Premium Secondary<br/><span className="text-[#A8C6FF]">School Management</span><br/>System</h1>
          <p className="text-[16px] md:text-[18px] text-white/85 mt-5 max-w-3xl leading-relaxed">Not just a website. A complete ERP - Student Info, Fees via MTN/Airtel, Results, Timetable, Attendance, E-Library, Dormitory, Payroll. Built on Next.js 14 + Prisma MySQL.</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="/portal/admin" className="bg-white text-[#0B3D91] px-7 py-3.5 rounded-xl font-black text-[13px] shadow-2xl">View Admin Dashboard</a>
            <a href="/portal/student" className="bg-[#0B3D91] border-2 border-white text-white px-7 py-3.5 rounded-xl font-black text-[13px]">Student Live Portal</a>
            <a href="/portal/parent" className="border-2 border-white/50 text-white px-7 py-3.5 rounded-xl font-black text-[13px] backdrop-blur">Parent Live Tracking</a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-white via-white/90 to-transparent z-10"></div>
      </section>

      <section className="px-4 lg:px-16 relative z-20 -mt-[110px]">
        <div className="max-w-[1500px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 bg-white p-4 md:p-6 rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-slate-100">
          <div className="bg-[#F7F9FF] p-6 rounded-2xl border"><p className="text-[10px] font-black tracking-widest text-[#0B3D91]">TOTAL RECORDS</p><p className="font-black text-[32px] mt-1">1,247</p><p className="text-[11px] text-gray-600 mt-2">Students + Parents + Staff in MySQL</p></div>
          <div className="bg-[#F7F9FF] p-6 rounded-2xl border"><p className="text-[10px] font-black tracking-widest text-[#0B3D91]">TRANSACTIONS</p><p className="font-black text-[32px] mt-1">UGX 450M</p><p className="text-[11px] text-gray-600 mt-2">Fees processed via MoMo API</p></div>
          <div className="bg-[#0B3D91] p-6 rounded-2xl shadow-lg"><p className="text-[10px] font-black tracking-widest text-blue-200">UPTIME</p><p className="font-black text-[32px] mt-1 text-white">99.9%</p><p className="text-[11px] text-blue-200 mt-2">Next.js 14 + Prisma live</p></div>
          <div className="bg-[#F7F9FF] p-6 rounded-2xl border"><p className="text-[10px] font-black tracking-widest text-[#0B3D91]">MODULES</p><p className="font-black text-[32px] mt-1">30+4</p><p className="text-[11px] text-gray-600 mt-2">Modules + Portals active</p></div>
        </div>
      </section>

      <section id="modules" className="px-6 lg:px-16 py-16 max-w-[1500px] mx-auto">
        <div className="flex justify-between items-end"><div><h2 className="font-black text-[40px] leading-none">Complete School ERP - 30 Modules</h2><p className="text-[14px] text-gray-600 mt-3">Every module is database-connected - Prisma MySQL - CRUD ready</p></div><span className="hidden md:block bg-[#0B3D91] text-white px-4 py-2 rounded-full text-[11px] font-black">30 MODULES LIVE</span></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
          {allModules.map(m=>(
            <div key={m.t} className="bg-white border border-slate-200 p-6 rounded-[18px] hover:border-[#0B3D91] hover:shadow-xl transition group relative">
              {m.n && <span className="absolute -top-2.5 -right-2.5 bg-yellow-400 text-black text-[9px] font-black px-2.5 py-1 rounded-full shadow">NEW • PREMIUM</span>}
              <div className="flex justify-between items-start gap-3"><p className="font-black text-[13px] leading-tight group-hover:text-[#0B3D91]">{m.t}</p><span className="bg-[#EEF3FF] text-[#0B3D91] text-[9px] font-black px-2.5 py-1 rounded-full whitespace-nowrap">{m.b}</span></div>
              <p className="text-[12px] text-gray-600 mt-3 leading-relaxed min-h-[40px]">{m.d}</p>
              <div className="mt-4 flex gap-1.5"><span className="text-[10px] bg-slate-900 text-white px-2.5 py-1 rounded font-bold">Prisma</span><span className="text-[10px] bg-[#0B3D91] text-white px-2.5 py-1 rounded font-bold">MySQL</span><span className="text-[10px] border px-2.5 py-1 rounded font-bold">API Ready</span></div>
            </div>
          ))}
        </div>
      </section>

      <section id="portals" className="px-6 lg:px-16 py-16 bg-[#F7F9FF]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-black text-[28px] text-center">Live Portal Previews - Working System</h2>
          <div className="grid lg:grid-cols-3 gap-6 mt-10">
            <div className="bg-white p-6 rounded-[20px] shadow border"><div className="flex justify-between"><p className="font-black text-sm">Student Dashboard</p><span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold">LIVE /portal/student</span></div><div className="mt-4 bg-slate-50 p-4 rounded-xl"><p className="text-xs font-bold">Nakato Sarah - S3A - TRI/2024/042</p><div className="grid grid-cols-3 gap-2 mt-3 text-[11px]"><div className="bg-white p-2 rounded border"><p className="font-black">95%</p><p>Avg</p></div><div className="bg-white p-2 rounded border"><p className="font-black">50k</p><p>Bal</p></div><div className="bg-white p-2 rounded border"><p className="font-black">A</p><p>Pos</p></div></div></div><a href="/portal/student" className="mt-4 block text-center bg-slate-900 text-white py-2.5 rounded-xl text-xs font-black">Open Student Portal</a></div>
            <div className="bg-white p-6 rounded-[20px] shadow border"><div className="flex justify-between"><p className="font-black text-sm">Parent Tracking</p><span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-bold">LIVE /portal/parent</span></div><div className="mt-4 bg-slate-50 p-4 rounded-xl"><p className="text-xs font-bold">Parent: Okello - Child: James S2</p><div className="mt-3 space-y-2 text-[11px]"><div className="flex justify-between bg-white p-2 rounded border"><span>Maths: 82% A</span><span className="text-green-600 font-bold">+5%</span></div><div className="flex justify-between bg-white p-2 rounded border"><span>Fees: 450k Paid</span><button className="bg-[#0B3D91] text-white px-3 py-1 rounded text-[10px]">Pay MoMo</button></div></div></div><a href="/portal/parent" className="mt-4 block text-center bg-[#0B3D91] text-white py-2.5 rounded-xl text-xs font-black">Open Parent Portal</a></div>
            <div className="bg-[#0B3D91] p-6 rounded-[20px] shadow border text-white"><div className="flex justify-between"><p className="font-black text-sm">Admin Control</p><span className="text-[10px] bg-white/20 px-2 py-1 rounded-full font-bold">LIVE /portal/admin</span></div><div className="mt-4 bg-white/10 p-4 rounded-xl"><p className="text-xs font-bold">Full ERP Control Panel</p><div className="grid grid-cols-2 gap-2 mt-3 text-[11px]"><div className="bg-white/10 p-2 rounded"><p className="font-black">Students 500</p><p className="text-white/70">+12 new</p></div><div className="bg-white/10 p-2 rounded"><p className="font-black">Fees 12M</p><p className="text-white/70">Today</p></div></div></div><a href="/portal/admin" className="mt-4 block text-center bg-white text-[#0B3D91] py-2.5 rounded-xl text-xs font-black">Open Admin ERP</a></div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-16 py-12 bg-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-3 gap-8">
          <div><p className="font-black text-xl">System Architecture</p><p className="text-sm text-gray-400 mt-2">E:/Projects/sschool-premium • Next.js 14 • Tailwind • Prisma • MySQL • MoMo API</p><div className="mt-4 text-[11px] font-mono bg-white/5 p-4 rounded-xl"><p>DATABASE_URL=mysql://root:@localhost:3306/triangle_premium</p><p>30 Models: All modules linked</p></div></div>
          <div><p className="font-black text-xl">Workflow</p><ol className="text-sm text-gray-400 mt-3 space-y-2 list-decimal ml-5"><li>Student applies online → Application</li><li>Admin approves → Student + AdmNo</li><li>Parent linked → Portal auto</li><li>Teacher enters marks → Result live</li><li>Parent pays MoMo → FeesBalance update</li></ol></div>
          <div><p className="font-black text-xl">Uniform & Identity</p><p className="text-sm text-gray-400 mt-3">White Shirt + Blue Tie + Tony Blue Down. Premium navy #0B3D91 theme. 500+ students with compliance tracking.</p></div>
        </div>
      </section>
    </div>
  )
}
