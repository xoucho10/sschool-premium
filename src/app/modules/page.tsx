export default function ModulesPage() {
  const modules = [
    // CORE (8)
    { id: "core", t: "Student Information System", b: "S1-S6, 500+ records", d: "AdmissionNo, Class, Parent linkage, Photo, Bio, Status, NIN, House, Scholarship - Complete student master", fields: "admissionNo, firstName, lastName, class, photo, dob, nin, house, parentId, qrCode, bloodGroup", api: "/api/students", portals: "Admin, Teacher, Parent, Student", c: "Core Academics" },
    { id: "core", t: "Results & Transcripts", b: "95% pass, Term 2", d: "Term, Year, Score, Grade, Position, Comment, Subject, Teacher link - UNEB grading, Report PDF, Position per class", fields: "studentId, subject, score, grade, term, year, position, comment", api: "/api/results", portals: "Admin, Teacher, Student, Parent", c: "Core Academics" },
    { id: "core", t: "Attendance System", b: "98.2% attendance", d: "Daily IN/OUT, Late, Absent, QR/Fingerprint, SMS to parent, Monthly reports - Linked to Student + Class", fields: "studentId, date, status, checkIn, checkOut, method", api: "/api/attendance", portals: "Admin, Teacher", c: "Core Academics" },
    { id: "core", t: "Timetable Engine", b: "S1A - S6 Science", d: "Period, Room, Teacher, Subject, Conflict check, Teacher load, Auto generation for 12 classes", fields: "class, day, period, subjectId, teacherId, room", api: "/api/timetable", portals: "Admin, Teacher, Student", c: "Core Academics" },
    { id: "core", t: "E-Library 2000+ Books", b: "2000 books online", d: "Digital books, UNEB past papers S1-S6, Borrow/Return logs, Category, Author", fields: "title, author, category, fileUrl, copies, borrowedBy", api: "/api/library", portals: "Admin, Student, Teacher", c: "Core Academics" },
    { id: "core", t: "Admissions Online", b: "150 applications", d: "Online form, Docs upload, Status pending/approved, Auto Adm No, Email alert", fields: "name, dob, prevSchool, docs, status, admissionNo", api: "/api/admissions", portals: "Public, Admin", c: "Core Academics" },
    { id: "core", t: "E-Learning LMS", b: "48 lessons uploaded", d: "Video lessons, Assignments, Quizzes, Zoom link, Submission, Grading", fields: "title, videoUrl, assignment, quiz, classId", api: "/api/lms", portals: "Teacher, Student, Parent", c: "Core Academics" },
    { id: "core", t: "News & Events", b: "12 news active", d: "Announcements, Calendar, Events, Gallery, Push notification", fields: "title, content, image, eventDate, type", api: "/api/news", portals: "Admin, All Portals", c: "Core Academics" },

    // FINANCE (5)
    { id: "finance", t: "Fees & Mobile Money", b: "UGX 450M paid", d: "MTN MoMo/Airtel Money API, Receipt, Balance, Bursary, Arrears, Auto SMS - FeesBalance live update", fields: "studentId, amount, paid, balance, method, transactionId, status", api: "/api/fees/momo", portals: "Admin, Bursar, Parent", c: "Finance" },
    { id: "finance", t: "Staff & Payroll Base", b: "30+ teachers", d: "Teacher profile, Subject, Class Teacher, Salary base, Leave, Performance", fields: "staffId, name, subject, classId, salary, phone", api: "/api/staff", portals: "Admin, Teacher", c: "Finance" },
    { id: "finance", t: "Inventory & Store", b: "Low stock alert", d: "Lab chemicals, Books, Uniforms, Stock qty, Supplier, Low stock email", fields: "itemName, category, stockQty, supplierId, minLevel", api: "/api/inventory", portals: "Admin, Store", c: "Finance" },
    { id: "finance", t: "Payroll & HRM", b: "PAYE, NSSF", d: "Payslip PDF, PAYE calc, NSSF 10%, Allowances, Bank transfer, Salary history", fields: "staffId, basic, paye, nssf, allowances, netPay, month", api: "/api/payroll", portals: "Admin, HR", c: "Finance" },
    { id: "finance", t: "Procurement / LPO", b: "LPO, GRN", d: "Suppliers, LPO create, GRN, Stock IN/OUT, Approval workflow, Reports", fields: "supplierId, items, amount, status, lpoNo", api: "/api/procurement", portals: "Admin, Procurement", c: "Finance" },

    // WELFARE (5)
    { id: "welfare", t: "Dormitory / Boarding", b: "120 boarders", d: "Hostel block, Bed No, Allocation, Visitor log, Discipline, Fee per bed", fields: "hostel, bedNo, studentId, status, visitorLog", api: "/api/dormitory", portals: "Admin, Warden", c: "Welfare" },
    { id: "welfare", t: "Parent Tracking", b: "Parent Portal Live", d: "Real-time child results, fees, attendance, Direct chat to teacher, 2 parents link", fields: "parentId, studentId, phone, whatsapp, occupation", api: "/api/parents", portals: "Parent, Admin", c: "Welfare" },
    { id: "welfare", t: "Discipline & Counseling", b: "Parent signed", d: "Incidents, Warning letter PDF, Counseling sessions, Suspension, Parent signature e-sign", fields: "studentId, incident, action, date, parentSign", api: "/api/discipline", portals: "Admin, Teacher, Parent", c: "Welfare" },
    { id: "welfare", t: "Health / Sickbay", b: "Clinic log", d: "Clinic visits, Drugs issued, Blood group, Allergies, Medical notes, Parent alert", fields: "studentId, bloodGroup, allergies, visitDate, drugs", api: "/api/health", portals: "Admin, Nurse, Parent", c: "Welfare" },
    { id: "welfare", t: "Sports & Clubs", b: "Houses, Trophies", d: "Athletics, Football, Clubs, Inter-school, House points, Trophy cabinet", fields: "name, type, house, points, trophy", api: "/api/sports", portals: "Admin, Teacher, Student", c: "Welfare" },

    // PREMIUM (12)
    { id: "premium", t: "Transport GPS + Bus Card", b: "4 buses live", d: "BusNo, Route, Driver, GPS live tracking, Tap card IN/OUT, Fuel, Capacity", fields: "busNo, route, driver, gpsLat, gpsLong, capacity", api: "/api/transport", portals: "Admin, Parent", c: "Premium" },
    { id: "premium", t: "ID Card Generator", b: "QR Code", d: "Auto Student/Staff ID with QR, Photo, House, Print-ready PDF, Bulk print", fields: "studentId, qrCode, template, printStatus", api: "/api/idcards", portals: "Admin", c: "Premium" },
    { id: "premium", t: "Online Exams CBT", b: "Auto marking", d: "S1-S4 Computer Based Tests, Timer, Question bank, Auto marking, Instant results", fields: "title, questions, duration, classId, autoMark", api: "/api/cbt", portals: "Teacher, Student", c: "Premium" },
    { id: "premium", t: "UNEB Analytics AI", b: "AI Prediction", d: "Predict Division, At-risk students, Subject weakness heatmap, Pass rate, Charts", fields: "studentId, predictedDiv, riskLevel, subjectWeak", api: "/api/uneb", portals: "Admin, Teacher", c: "Premium" },
    { id: "premium", t: "Bulk SMS/WhatsApp/Email", b: "500 in 1-click", d: "Africas Talking API, 500 SMS 1-click, Fees alerts, Results alerts, Discipline alerts", fields: "to, message, channel, status, smsLog", api: "/api/sms", portals: "Admin", c: "Premium" },
    { id: "premium", t: "Live Chat Parent-Teacher", b: "Real-time", d: "Direct chat in portal, Read receipts, File share, Parent-teacher meeting schedule", fields: "senderId, receiverId, message, read", api: "/api/chat", portals: "Parent, Teacher", c: "Premium" },
    { id: "premium", t: "Alumni Network", b: "Fundraising", d: "Past students, Year, Donations, Mentorship, Jobs, Events, Contributions", fields: "name, year, phone, donation, mentor", api: "/api/alumni", portals: "Admin, Alumni", c: "Premium" },
    { id: "premium", t: "Multi-Campus", b: "Branches", d: "Manage 2-3 branches from 1 admin, Campus-wise reports, Student transfer", fields: "campusName, location, students, adminId", api: "/api/campus", portals: "Super Admin", c: "Premium" },
    { id: "premium", t: "Reports & Audit Log", b: "Who edited what", d: "Full audit - who edited student, when, what field, IP, Backup, Export", fields: "userId, action, table, recordId, timestamp", api: "/api/audit", portals: "Super Admin", c: "Premium" },
    { id: "premium", t: "Document Vault", b: "e-Sign", d: "Birth cert, UCE results, NIN, Medical form storage, e-signature parent, Expiry alert", fields: "studentId, docType, fileUrl, expiry, signed", api: "/api/documents", portals: "Admin, Parent", c: "Premium" },
    { id: "premium", t: "PWA Mobile App + Offline", b: "Installable", d: "Install on phone, Works offline, Auto-sync when online, Push notifications", fields: "deviceId, offlineData, lastSync, pushToken", api: "/api/pwa", portals: "All Portals", c: "Premium" },
    { id: "premium", t: "Settings & Roles", b: "Permissions", d: "Roles: Bursar sees fees only, Teacher only their class, Permissions, Backup, Logs", fields: "role, permissions, userId, backup", api: "/api/settings", portals: "Super Admin", c: "Premium" },
  ];

  return (
    <div className="bg-white">
      {/* PAGE HERO - KEEP SAME DISPLAY STYLE */}
      <section className="px-6 lg:px-16 py-12 bg-[#F7F9FF] border-b">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-[#0B3D91] text-white text-[10px] font-black px-4 py-1.5 rounded-full">30 MODULES SYSTEM</span>
            <span className="bg-yellow-400 text-black text-[10px] font-black px-4 py-1.5 rounded-full">PRISMA • MYSQL • DATABASE READY</span>
            <span className="bg-white border text-[10px] font-black px-4 py-1.5 rounded-full">E:/Projects/sschool-premium</span>
          </div>
          <h1 className="font-black text-[38px] lg:text-[48px] leading-[0.9]">All 30 Modules - Complete ERP<br/><span className="text-[#0B3D91]">Database + API Ready</span></h1>
          <p className="text-[14px] text-gray-600 mt-4 max-w-4xl">Every module below is linked to Prisma MySQL model, has API endpoint, and portal access. Same card display as homepage - nothing changed - only more information added as requested.</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="bg-white border p-4 rounded-2xl"><p className="text-[10px] font-black text-[#0B3D91] tracking-widest">CORE ACADEMICS</p><p className="font-black text-2xl mt-1">8 Modules</p><p className="text-[11px] text-gray-600">Student, Results, Attendance, Timetable, Library, Admissions, LMS, News</p></div>
            <div className="bg-white border p-4 rounded-2xl"><p className="text-[10px] font-black text-[#0B3D91] tracking-widest">FINANCE</p><p className="font-black text-2xl mt-1">5 Modules</p><p className="text-[11px] text-gray-600">Fees MoMo, Staff, Inventory, Payroll PAYE/NSSF, Procurement</p></div>
            <div className="bg-white border p-4 rounded-2xl"><p className="text-[10px] font-black text-[#0B3D91] tracking-widest">WELFARE</p><p className="font-black text-2xl mt-1">5 Modules</p><p className="text-[11px] text-gray-600">Dormitory, Parent, Discipline, Health, Sports</p></div>
            <div className="bg-[#0B3D91] text-white p-4 rounded-2xl"><p className="text-[10px] font-black tracking-widest text-blue-200">PREMIUM ADDONS</p><p className="font-black text-2xl mt-1">12 Modules</p><p className="text-[11px] text-blue-200">GPS, ID Cards, CBT, AI, SMS, Alumni, Multi-Campus, PWA...</p></div>
          </div>
        </div>
      </section>

      {/* 30 MODULES GRID - SAME CARD DISPLAY - NO CHANGE IN LAYOUT */}
      <section className="px-6 lg:px-16 py-12 max-w-[1500px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m,i)=>(
            <div key={i} id={m.id} className="bg-white border border-slate-200 rounded-[18px] p-6 hover:border-[#0B3D91] hover:shadow-xl transition group relative">
              {m.id === 'premium' && <span className="absolute -top-2.5 -right-2.5 bg-yellow-400 text-black text-[9px] font-black px-2.5 py-1 rounded-full shadow">NEW • PREMIUM 👑</span>}
              <span className="absolute -top-2.5 -left-2.5 bg-[#0B3D91] text-white text-[9px] font-black px-2.5 py-1 rounded-full">{i+1}</span>

              <div className="flex justify-between items-start gap-3 mt-1">
                <p className="font-black text-[13px] leading-tight group-hover:text-[#0B3D91]">{m.t}</p>
                <span className="bg-[#EEF3FF] text-[#0B3D91] text-[9px] font-black px-2.5 py-1 rounded-full whitespace-nowrap">{m.b}</span>
              </div>

              <p className="text-[12px] text-gray-600 mt-3 leading-relaxed">{m.d}</p>

              <div className="mt-4 bg-[#F7F9FF] rounded-xl p-3 border border-slate-100">
                <p className="text-[9px] font-black tracking-widest text-[#0B3D91]">DATABASE FIELDS</p>
                <p className="text-[10px] text-gray-600 mt-1 font-mono leading-tight">{m.fields}</p>
              </div>

              <div className="mt-3 bg-slate-900 rounded-xl p-3">
                <div className="flex justify-between text-[9px] font-black">
                  <span className="text-gray-400">API</span><span className="text-white">{m.api}</span>
                </div>
                <div className="flex justify-between text-[9px] font-black mt-1">
                  <span className="text-gray-400">PORTALS</span><span className="text-[#A8C6FF] text-[9px]">{m.portals}</span>
                </div>
                <div className="flex justify-between text-[9px] font-black mt-1">
                  <span className="text-gray-400">CATEGORY</span><span className="text-yellow-400">{m.c}</span>
                </div>
              </div>

              <div className="mt-4 flex gap-1.5">
                <span className="text-[10px] bg-slate-900 text-white px-2.5 py-1 rounded font-bold">Prisma</span>
                <span className="text-[10px] bg-[#0B3D91] text-white px-2.5 py-1 rounded font-bold">MySQL</span>
                <span className="text-[10px] border px-2.5 py-1 rounded font-bold">API Ready</span>
              </div>
            </div>
          ))}
        </div>

        {/* COMPARISON STRIP */}
        <div className="mt-16 bg-[#020B1A] text-white rounded-[24px] p-8">
          <h3 className="font-black text-[20px]">How Directors See It - Pricing Logic</h3>
          <div className="grid lg:grid-cols-3 gap-6 mt-6 text-[12px]">
            <div className="bg-white/5 p-5 rounded-xl border border-white/10"><p className="font-black">BASIC - UGX 800k - 10 Modules</p><p className="text-gray-400 mt-2">Core only: Student, Results, Attendance, Timetable, Library, Admissions, LMS, News + 2. No MoMo, No SMS, No GPS. For small schools starting.</p></div>
            <div className="bg-[#0B3D91] p-5 rounded-xl border-2 border-yellow-400"><p className="font-black">STANDARD - UGX 2.5M - 20 Modules ⭐ BEST SELLER</p><p className="text-blue-100 mt-2">Core 8 + Finance 5 + Welfare 5 + 2 Premium (SMS 50 + ID Card). 80% value at 50% cost. Perfect for 90% schools. This is our sell.</p><p className="mt-3 bg-yellow-400 text-black text-[10px] font-black px-3 py-1 rounded-full w-fit">RECOMMENDED</p></div>
            <div className="bg-white/5 p-5 rounded-xl border border-white/10"><p className="font-black">PREMIUM - UGX 4.8M - 30 Modules 👑</p><p className="text-gray-400 mt-2">All 30: + GPS Bus, CBT, AI UNEB, Unlimited SMS, Payroll, Inventory, Alumni, Multi-Campus, PWA Offline, Audit Log, Document Vault.</p></div>
          </div>
        </div>
      </section>
    </div>
  )
}
