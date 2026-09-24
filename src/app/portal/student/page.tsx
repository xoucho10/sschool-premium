export default function StudentPortal() {
  return (
    <div className="bg-[#F7F9FF] min-h-[80vh]">
      {/* STUDENT TOP BAR - INSIDE PAGE, HEADER STAYS SAME */}
      <section className="px-6 lg:px-16 py-6 bg-white border-b">
        <div className="max-w-[1500px] mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-slate-900 text-white grid place-items-center font-black">NS</div>
            <div>
              <p className="font-black text-[15px]">Nakato Sarah • S3A • TRI/2024/042</p>
              <p className="text-[11px] text-gray-600">White Shirt • Blue Tie • Tony Blue Down • House: Blue • Boarding</p>
            </div>
          </div>
          <div className="flex gap-2 text-[10px] font-black">
            <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-full">Avg 95% • Pos 1</span>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-full">Fees Bal: 50k</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full">98.2% Attendance</span>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-16 py-8 max-w-[1500px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-6">

          {/* LEFT 2/3 - SAME CARD DISPLAY AS MODULES */}
          <div className="lg:col-span-2 space-y-6">

            {/* RESULTS CARD */}
            <div className="bg-white border rounded-[20px] p-6 shadow-sm">
              <div className="flex justify-between"><p className="font-black text-[14px]">My Results - Term 2 2025</p><span className="text-[10px] bg-[#0B3D91] text-white px-3 py-1 rounded-full font-black">UNEB Grading</span></div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5 text-[12px]">
                <div className="bg-[#F7F9FF] border p-3 rounded-xl"><p className="font-black">Maths 82% A</p><p className="text-[10px] text-gray-600">Mr. Okello • +5%</p></div>
                <div className="bg-[#F7F9FF] border p-3 rounded-xl"><p className="font-black">Eng 78% B</p><p className="text-[10px] text-gray-600">Ms. Namatovu</p></div>
                <div className="bg-[#F7F9FF] border p-3 rounded-xl"><p className="font-black">Bio 90% A</p><p className="text-[10px] text-gray-600">Best</p></div>
                <div className="bg-[#0B3D91] text-white p-3 rounded-xl"><p className="font-black">Avg 95% Pos 1/45</p><p className="text-[10px] text-blue-200">Term 2</p></div>
              </div>
              <div className="mt-4 bg-slate-900 text-white rounded-xl p-3 flex justify-between text-[10px] font-black"><span>DATABASE: result table • studentId: TRI/2024/042 • API: /api/student/results</span><span className="text-yellow-300">Download PDF Report →</span></div>
            </div>

            {/* FEES + TIMETABLE */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border rounded-[20px] p-6 shadow-sm">
                <p className="font-black text-[13px]">My Fees - MoMo</p>
                <p className="text-[11px] text-gray-600 mt-1">Total: 650k • Paid: 600k • Bal: 50k</p>
                <div className="mt-4 bg-[#F7F9FF] p-3 rounded-xl border text-[11px]">
                  <div className="flex justify-between"><span>Term 2 Fees</span><span className="font-black">600k Paid ✅</span></div>
                  <div className="flex justify-between mt-2"><span>Balance</span><span className="font-black text-red-600">50k Due</span></div>
                  <div className="w-full bg-slate-200 h-2 rounded-full mt-3"><div className="bg-[#0B3D91] h-2 rounded-full w-[92%]"></div></div>
                </div>
                <button className="mt-4 w-full bg-[#0B3D91] text-white py-2.5 rounded-xl text-[11px] font-black">Parent Pays via MTN MoMo • 50k</button>
                <p className="text-[9px] text-gray-500 mt-2 font-mono">Prisma: feesBalance field • API: /api/fees/momo • transactionId</p>
              </div>

              <div className="bg-white border rounded-[20px] p-6 shadow-sm">
                <p className="font-black text-[13px]">Timetable Today - S3A</p>
                <div className="mt-3 space-y-2 text-[11px]">
                  <div className="flex justify-between bg-[#F7F9FF] border p-2 rounded-lg"><span>8:00 Maths (Mr. Okello)</span><span className="bg-green-100 text-green-700 px-2 rounded text-[9px] font-black">R12</span></div>
                  <div className="flex justify-between bg-[#F7F9FF] border p-2 rounded-lg"><span>9:00 Eng (Ms. Namatovu)</span><span className="bg-white border px-2 rounded text-[9px] font-bold">R12</span></div>
                  <div className="flex justify-between bg-[#F7F9FF] border p-2 rounded-lg"><span>10:30 Bio Lab</span><span className="bg-yellow-100 px-2 rounded text-[9px] font-bold">Lab1</span></div>
                  <div className="flex justify-between bg-[#F7F9FF] border p-2 rounded-lg"><span>2:00 Sports</span><span className="px-2 rounded text-[9px]">Field</span></div>
                </div>
                <p className="text-[9px] text-gray-500 mt-3 font-mono">Prisma: timetable • class: S3A • API: /api/timetable?class=S3A</p>
              </div>
            </div>

            {/* ATTENDANCE + LIBRARY */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border rounded-[20px] p-6 shadow-sm">
                <p className="font-black text-[13px]">Attendance 98.2%</p>
                <div className="mt-3 grid grid-cols-7 gap-1 text-[10px] text-center">
                  <span className="bg-green-500 text-white p-2 rounded">M ✅</span><span className="bg-green-500 text-white p-2 rounded">T ✅</span><span className="bg-yellow-400 text-black p-2 rounded">W L</span><span className="bg-green-500 text-white p-2 rounded">T ✅</span><span className="bg-green-500 text-white p-2 rounded">F ✅</span><span className="bg-slate-200 p-2 rounded">S -</span><span className="bg-slate-200 p-2 rounded">S -</span>
                </div>
                <p className="text-[10px] text-gray-600 mt-3">QR Scan: IN 7:30am OUT 4:45pm • Method: QR Card</p>
                <p className="text-[9px] text-gray-500 mt-2 font-mono">Prisma: attendance • studentId • API: /api/attendance</p>
              </div>
              <div className="bg-white border rounded-[20px] p-6 shadow-sm">
                <p className="font-black text-[13px]">E-Library 2000+ Books</p>
                <div className="mt-3 text-[11px] space-y-2">
                  <div className="flex justify-between bg-[#F7F9FF] border p-2 rounded-lg"><span>Biology S3 - Kintu</span><span className="bg-green-100 text-green-700 px-2 rounded text-[9px] font-black">Borrowed</span></div>
                  <div className="flex justify-between bg-[#F7F9FF] border p-2 rounded-lg"><span>UNEB Maths 2023 Past Paper</span><span className="bg-blue-100 text-blue-700 px-2 rounded text-[9px] font-black">PDF Ready</span></div>
                  <div className="flex justify-between bg-[#F7F9FF] border p-2 rounded-lg"><span>English Grammar</span><span className="bg-slate-200 px-2 rounded text-[9px]">Return 12/10</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 1/3 */}
          <div className="space-y-6">
            <div className="bg-[#0B3D91] text-white rounded-[20px] p-6 shadow">
              <p className="font-black text-[13px]">ID Card + QR</p>
              <div className="mt-4 bg-white text-slate-900 p-4 rounded-xl flex gap-4 items-center">
                <div className="w-16 h-20 bg-slate-200 rounded"></div>
                <div className="text-[10px]"><p className="font-black">NAKATO SARAH</p><p>S3A • TRI/2024/042</p><p>House: Blue • 2024</p><div className="w-12 h-12 bg-slate-900 mt-2 grid place-items-center text-white text-[8px]">QR CODE</div></div>
              </div>
              <p className="text-[9px] text-blue-200 mt-3 font-mono">Prisma: qrCode field • API: /api/idcards/TRI/2024/042 • Print PDF</p>
              <button className="mt-4 w-full bg-white text-[#0B3D91] py-2.5 rounded-xl text-[11px] font-black">Download ID PDF</button>
            </div>

            <div className="bg-white border rounded-[20px] p-6 shadow-sm">
              <p className="font-black text-[13px]">E-Learning LMS</p>
              <div className="mt-3 text-[11px] space-y-2">
                <div className="bg-[#F7F9FF] border p-3 rounded-xl"><p className="font-bold">Maths: Quadratic Equations</p><p className="text-[10px] text-gray-600">Video 12min • Mr. Okello • Due tomorrow</p><span className="mt-2 inline-block bg-red-500 text-white text-[9px] px-2 py-1 rounded-full font-black">WATCH NOW</span></div>
                <div className="bg-[#F7F9FF] border p-3 rounded-xl"><p className="font-bold">Bio: Cell Structure Quiz</p><p className="text-[10px] text-gray-600">5 questions • Auto-mark</p></div>
              </div>
            </div>

            <div className="bg-white border rounded-[20px] p-6 shadow-sm">
              <p className="font-black text-[13px]">My Dormitory + Bus</p>
              <div className="text-[11px] mt-3 space-y-2">
                <div className="flex justify-between bg-[#F7F9FF] border p-2 rounded-lg"><span>Hostel: Block B • Bed 12</span><span className="bg-green-100 px-2 rounded text-[9px] font-black">Allocated</span></div>
                <div className="flex justify-between bg-[#F7F9FF] border p-2 rounded-lg"><span>Bus: UAH 123X • Route: Bwaise</span><span className="bg-blue-100 px-2 rounded text-[9px] font-black">GPS Live</span></div>
                <div className="flex justify-between bg-[#F7F9FF] border p-2 rounded-lg"><span>Parent: 0700123456</span><span className="bg-white border px-2 rounded text-[9px] font-bold">Chat</span></div>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-[20px] p-6">
              <p className="font-black text-[11px] tracking-widest">SYSTEM INFO</p>
              <p className="text-[10px] text-gray-400 mt-3 font-mono">Path: E:/Projects/sschool-premium/src/app/portal/student/page.tsx<br/>Prisma Models: student, result, fees, attendance, timetable, library, dormitory, transport, idcard, lms<br/>API: /api/student/* • Role: student • Can only view own studentId = TRI/2024/042 • PWA: Installable</p>
              <div className="mt-4 flex gap-1.5"><span className="text-[9px] bg-white text-black px-2 py-1 rounded font-bold">Prisma</span><span className="text-[9px] bg-[#0B3D91] text-white px-2 py-1 rounded font-bold">Student Only</span></div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
