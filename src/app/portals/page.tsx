export default function PortalsPage() {
  return (
    <div className="bg-white">
      {/* TOP HERO - SAME STYLE AS MODULES */}
      <section className="px-6 lg:px-16 py-12 bg-[#F7F9FF] border-b">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-[#0B3D91] text-white text-[10px] font-black px-4 py-1.5 rounded-full">4 LIVE PORTALS</span>
            <span className="bg-yellow-400 text-black text-[10px] font-black px-4 py-1.5 rounded-full">NEXT.JS 14 • ROLE BASED • PRISMA</span>
            <span className="bg-white border text-[10px] font-black px-4 py-1.5 rounded-full">E:/Projects/sschool-premium/src/app/portals</span>
          </div>
          <h1 className="font-black text-[38px] lg:text-[48px] leading-[0.9]">4 Live Portals - Same Header<br/><span className="text-[#0B3D91]">Same System, Different Views</span></h1>
          <p className="text-[14px] text-gray-600 mt-4 max-w-4xl">One database, 4 different logins. Director sees all. Teacher sees class only. Student sees results only. Parent tracks child. Same header/footer as homepage - layout.tsx controlled.</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="bg-white border p-4 rounded-2xl"><p className="text-[10px] font-black text-[#0B3D91]">ADMIN ERP</p><p className="font-black text-2xl mt-1">30 Modules</p><p className="text-[11px] text-gray-600">Full CRUD, Finance, Audit, Settings</p></div>
            <div className="bg-white border p-4 rounded-2xl"><p className="text-[10px] font-black text-[#0B3D91]">TEACHER PORTAL</p><p className="font-black text-2xl mt-1">12 Modules</p><p className="text-[11px] text-gray-600">My classes, Marks entry, Timetable</p></div>
            <div className="bg-white border p-4 rounded-2xl"><p className="text-[10px] font-black text-[#0B3D91]">STUDENT PORTAL</p><p className="font-black text-2xl mt-1">8 Modules</p><p className="text-[11px] text-gray-600">Results, Fees, Timetable, Library</p></div>
            <div className="bg-[#0B3D91] text-white p-4 rounded-2xl"><p className="text-[10px] font-black text-blue-200">PARENT PORTAL</p><p className="font-black text-2xl mt-1">6 Modules</p><p className="text-[11px] text-blue-200">Child tracking + MoMo Pay + Chat</p></div>
          </div>
        </div>
      </section>

      {/* PORTALS GRID - SAME CARD DISPLAY AS MODULES */}
      <section className="px-6 lg:px-16 py-12 max-w-[1500px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-6">

          {/* ADMIN */}
          <div className="bg-white border border-slate-200 rounded-[20px] p-6 hover:border-[#0B3D91] hover:shadow-xl transition relative">
            <span className="absolute -top-2.5 -left-2.5 bg-[#0B3D91] text-white text-[9px] font-black px-3 py-1 rounded-full">1 • SUPER ADMIN</span>
            <span className="absolute -top-2.5 -right-2.5 bg-slate-900 text-white text-[9px] font-black px-3 py-1 rounded-full">/portal/admin</span>
            <div className="flex justify-between items-start mt-2">
              <p className="font-black text-[16px] leading-tight">Admin ERP Control Panel</p>
              <span className="bg-[#EEF3FF] text-[#0B3D91] text-[10px] font-black px-3 py-1 rounded-full">FULL ACCESS</span>
            </div>
            <p className="text-[12px] text-gray-600 mt-3">Sees all 30 modules, all students 1,247, UGX 450M transactions, audit logs, settings, roles. Director + Head Teacher login.</p>

            <div className="mt-4 bg-[#F7F9FF] rounded-xl p-3 border">
              <p className="text-[9px] font-black tracking-widest text-[#0B3D91]">MODULES INSIDE ADMIN</p>
              <p className="text-[10px] text-gray-700 mt-1 leading-relaxed">Student CRUD • Fees MoMo • Results • Attendance • Timetable • Library • Dormitory • Staff • Admissions • E-Learning • News • Transport GPS • Inventory • Payroll PAYE/NSSF • Procurement • ID Cards • CBT • UNEB AI • Discipline • Health • Sports • SMS 500 • Chat • Alumni • Multi-Campus • Audit • Documents • PWA • Settings</p>
            </div>

            <div className="mt-3 bg-slate-900 rounded-xl p-3">
              <div className="flex justify-between text-[10px] font-black"><span className="text-gray-400">DEMO LOGIN</span><span className="text-white">admin@premium.ug / admin123</span></div>
              <div className="flex justify-between text-[10px] font-black mt-1"><span className="text-gray-400">DATABASE</span><span className="text-[#A8C6FF]">Prisma: admin, auditLog, settings</span></div>
              <div className="flex justify-between text-[10px] font-black mt-1"><span className="text-gray-400">API</span><span className="text-yellow-400">/api/admin/* 30 endpoints</span></div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 text-[11px]">
              <div className="bg-[#F7F9FF] border p-2.5 rounded-xl"><p className="font-black">1,247</p><p className="text-[10px] text-gray-600">Students</p></div>
              <div className="bg-[#F7F9FF] border p-2.5 rounded-xl"><p className="font-black">UGX 450M</p><p className="text-[10px] text-gray-600">Fees</p></div>
              <div className="bg-[#F7F9FF] border p-2.5 rounded-xl"><p className="font-black">99.9%</p><p className="text-[10px] text-gray-600">Uptime</p></div>
            </div>
            <a href="/portal/admin" className="mt-4 block text-center bg-[#0B3D91] text-white py-3 rounded-xl text-[12px] font-black">Open Admin ERP →</a>
          </div>

          {/* TEACHER */}
          <div className="bg-white border border-slate-200 rounded-[20px] p-6 hover:border-[#0B3D91] hover:shadow-xl transition relative">
            <span className="absolute -top-2.5 -left-2.5 bg-blue-600 text-white text-[9px] font-black px-3 py-1 rounded-full">2 • TEACHER</span>
            <span className="absolute -top-2.5 -right-2.5 bg-white border text-[9px] font-black px-3 py-1 rounded-full">/portal/teacher</span>
            <div className="flex justify-between items-start mt-2">
              <p className="font-black text-[16px] leading-tight">Teacher Portal - Class Only</p>
              <span className="bg-blue-50 text-blue-700 text-[10px] font-black px-3 py-1 rounded-full">CLASS S3A ONLY</span>
            </div>
            <p className="text-[12px] text-gray-600 mt-3">Teacher logs in, sees only his classes S3A & S2B, enters marks, marks attendance QR, views timetable, uploads LMS video.</p>

            <div className="mt-4 bg-[#F7F9FF] rounded-xl p-3 border">
              <p className="text-[9px] font-black tracking-widest text-[#0B3D91]">WHAT TEACHER CAN DO</p>
              <p className="text-[10px] text-gray-700 mt-1">✓ My Classes: S3A 45 students • Enter Results: Maths 82% • Attendance: QR scan • Timetable: Mon-Fri • LMS: Upload video lesson • Chat: Parent chat • ID: Print class IDs • CBT: Create quiz</p>
            </div>

            <div className="mt-3 bg-slate-900 rounded-xl p-3">
              <div className="flex justify-between text-[10px] font-black"><span className="text-gray-400">DEMO LOGIN</span><span className="text-white">teacher@premium.ug / teacher123</span></div>
              <div className="flex justify-between text-[10px] font-black mt-1"><span className="text-gray-400">DATABASE</span><span className="text-[#A8C6FF]">Prisma: staff, subject, class</span></div>
              <div className="flex justify-between text-[10px] font-black mt-1"><span className="text-gray-400">API</span><span className="text-yellow-400">/api/teacher/* 12 endpoints</span></div>
            </div>

            <div className="mt-4 bg-slate-50 p-3 rounded-xl border text-[11px]"><p className="font-bold">Nakato Sarah - S3A - Maths 82% - Position 1</p><div className="mt-2 flex gap-2"><span className="bg-white border px-2 py-1 rounded text-[10px] font-bold">Enter Marks</span><span className="bg-white border px-2 py-1 rounded text-[10px] font-bold">Attendance QR</span><span className="bg-white border px-2 py-1 rounded text-[10px] font-bold">Chat Parent</span></div></div>
            <a href="/portal/teacher" className="mt-4 block text-center border-2 border-slate-900 text-slate-900 py-3 rounded-xl text-[12px] font-black">Open Teacher Portal →</a>
          </div>

          {/* STUDENT */}
          <div className="bg-white border border-slate-200 rounded-[20px] p-6 hover:border-[#0B3D91] hover:shadow-xl transition relative">
            <span className="absolute -top-2.5 -left-2.5 bg-green-600 text-white text-[9px] font-black px-3 py-1 rounded-full">3 • STUDENT</span>
            <span className="absolute -top-2.5 -right-2.5 bg-white border text-[9px] font-black px-3 py-1 rounded-full">/portal/student</span>
            <div className="flex justify-between items-start mt-2">
              <p className="font-black text-[16px] leading-tight">Student Dashboard</p>
              <span className="bg-green-50 text-green-700 text-[10px] font-black px-3 py-1 rounded-full">TRI/2024/042</span>
            </div>
            <p className="text-[12px] text-gray-600 mt-3">Student sees: My results Term 2 Avg 95% Position 1, My fees balance 50k, Timetable S3A, Library books borrowed, ID card QR.</p>

            <div className="mt-4 bg-[#F7F9FF] rounded-xl p-3 border">
              <p className="text-[9px] font-black tracking-widest text-[#0B3D91]">STUDENT VIEW</p>
              <p className="text-[10px] text-gray-700 mt-1">✓ Results: Maths 82% A English 78% B • Fees: UGX 50k balance + MoMo Pay • Attendance: 98.2% • Timetable: Today 8 periods • Library: 2 books borrowed • ID Card: QR code • E-Learning: 3 videos pending • CBT: 1 quiz due</p>
            </div>

            <div className="mt-3 bg-slate-900 rounded-xl p-3">
              <div className="flex justify-between text-[10px] font-black"><span className="text-gray-400">DEMO LOGIN</span><span className="text-white">TRI/2024/042 / student123</span></div>
              <div className="flex justify-between text-[10px] font-black mt-1"><span className="text-gray-400">DATABASE</span><span className="text-[#A8C6FF]">Prisma: student, result, fees (own only)</span></div>
              <div className="flex justify-between text-[10px] font-black mt-1"><span className="text-gray-400">API</span><span className="text-yellow-400">/api/student/* 8 endpoints</span></div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 text-[11px]">
              <div className="bg-green-50 border p-2.5 rounded-xl"><p className="font-black">95%</p><p className="text-[10px]">Avg</p></div>
              <div className="bg-yellow-50 border p-2.5 rounded-xl"><p className="font-black">50k</p><p className="text-[10px]">Bal</p></div>
              <div className="bg-blue-50 border p-2.5 rounded-xl"><p className="font-black">A</p><p className="text-[10px]">Pos</p></div>
            </div>
            <a href="/portal/student" className="mt-4 block text-center bg-slate-900 text-white py-3 rounded-xl text-[12px] font-black">Open Student Portal →</a>
          </div>

          {/* PARENT */}
          <div className="bg-[#0B3D91] text-white rounded-[20px] p-6 shadow-xl border border-blue-800 relative">
            <span className="absolute -top-2.5 -left-2.5 bg-yellow-400 text-black text-[9px] font-black px-3 py-1 rounded-full">4 • PARENT ★ MONEY</span>
            <span className="absolute -top-2.5 -right-2.5 bg-white text-[#0B3D91] text-[9px] font-black px-3 py-1 rounded-full">/portal/parent</span>
            <div className="flex justify-between items-start mt-2">
              <p className="font-black text-[16px] leading-tight">Parent Tracking + MoMo Pay</p>
              <span className="bg-white/20 text-white text-[10px] font-black px-3 py-1 rounded-full">PAYING USER</span>
            </div>
            <p className="text-[12px] text-blue-100 mt-3">Parent is PAYING customer. Sees child results live, fees balance, attendance alert, bus GPS, chat teacher, pays fees via MTN MoMo in 1-click.</p>

            <div className="mt-4 bg-white/10 rounded-xl p-3 border border-white/10">
              <p className="text-[9px] font-black tracking-widest text-blue-200">PARENT CAN DO - THIS CLOSES SALE</p>
              <p className="text-[10px] text-blue-100 mt-1">✓ Child: Nakato Sarah S3A • Results: 82% A +5% from last term • Fees: Pay 50k balance [MTN MoMo Button] • Attendance: Child checked in 7:30am • Bus: Bus UAH 123X GPS live 2.5km away • Chat: Chat teacher directly • SMS: Gets SMS for every result entered</p>
            </div>

            <div className="mt-3 bg-black/30 rounded-xl p-3 border border-white/10">
              <div className="flex justify-between text-[10px] font-black"><span className="text-blue-200">DEMO LOGIN</span><span className="text-white">parent@premium.ug / parent123</span></div>
              <div className="flex justify-between text-[10px] font-black mt-1"><span className="text-blue-200">DATABASE</span><span className="text-white">Prisma: parent, student, feesBalance</span></div>
              <div className="flex justify-between text-[10px] font-black mt-1"><span className="text-blue-200">API</span><span className="text-yellow-300">/api/parent/* MoMo + SMS + GPS</span></div>
            </div>

            <div className="mt-4 bg-white/10 p-3 rounded-xl border border-white/10 text-[11px]">
              <div className="flex justify-between"><span>Maths: 82% A</span><span className="text-green-300 font-bold">+5%</span></div>
              <div className="flex justify-between mt-2 bg-white p-2 rounded-lg text-slate-900"><span>Fees: 450k Paid</span><button className="bg-[#0B3D91] text-white px-3 py-1 rounded text-[10px] font-black">Pay MoMo 50k</button></div>
              <div className="flex justify-between mt-2"><span>Bus UAH 123X - 2.5km away - GPS live</span><span className="bg-green-400 text-black px-2 py-0.5 rounded text-[9px] font-black">LIVE</span></div>
            </div>
            <a href="/portal/parent" className="mt-4 block text-center bg-white text-[#0B3D91] py-3 rounded-xl text-[12px] font-black">Open Parent Portal →</a>
          </div>

        </div>

        {/* EXTRA ROLES TABLE */}
        <div className="mt-12 bg-slate-900 text-white rounded-[24px] p-8">
          <h3 className="font-black text-[18px]">Other Roles - Same Layout, Different Permissions</h3>
          <div className="grid md:grid-cols-3 gap-4 mt-6 text-[11px]">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10"><p className="font-black text-yellow-300">BURSAR / ACCOUNTANT</p><p className="text-gray-400 mt-2">Path: /portal/admin/fees • Access: Fees MoMo, Payroll, Inventory, Procurement, Reports. Cannot edit students or results. Role: bursar</p><p className="mt-2 font-mono text-[10px]">prisma.bursar → fees, payroll only</p></div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10"><p className="font-black text-yellow-300">Warden / Matron</p><p className="text-gray-400 mt-2">Path: /portal/admin/dormitory • Access: Dormitory, Health, Discipline, Visitor log. Role: warden</p><p className="mt-2 font-mono text-[10px]">prisma.warden → dorm, health</p></div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10"><p className="font-black text-yellow-300">Librarian / Store Keeper</p><p className="text-gray-400 mt-2">Path: /portal/admin/library, /inventory • Access: Library books, Borrow/Return, Inventory store. Role: librarian</p><p className="mt-2 font-mono text-[10px]">prisma.librarian → library, inventory</p></div>
          </div>
          <p className="text-[10px] text-gray-500 mt-6 font-mono">Settings & Roles table: role, permissions JSON - bursar can only view /api/fees, teacher can only /api/results?class=S3A, student can only where studentId = own id, parent can only where parentId = own id - Prisma Row Level Security</p>
        </div>
      </section>
    </div>
  )
}
