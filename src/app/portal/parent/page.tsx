export default function ParentPortal() {
  return (
    <div className="bg-[#F7F9FF] min-h-[80vh]">
      {/* PARENT TOP - HEADER STAYS SAME */}
      <section className="px-6 lg:px-16 py-6 bg-white border-b">
        <div className="max-w-[1500px] mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-[#0B3D91] text-white grid place-items-center font-black">PO</div>
            <div>
              <p className="font-black text-[15px]">Parent: Okello John • Child: Nakato Sarah S3A TRI/2024/042</p>
              <p className="text-[11px] text-gray-600">Phone: 0700 123456 • 2 Children in school • Bwaise Route • House Blue</p>
            </div>
          </div>
          <div className="flex gap-2 text-[10px] font-black">
            <span className="bg-[#0B3D91] text-white px-3 py-1.5 rounded-full">PAYING USER ★</span>
            <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-full">Child Avg 95%</span>
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1.5 rounded-full">Fees Due: 50k</span>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-16 py-8 max-w-[1500px] mx-auto">
        <div className="grid lg:grid-cols-3 gap-6">

          {/* LEFT 2 COLS */}
          <div className="lg:col-span-2 space-y-6">

            {/* CHILD TRACKING - MOST IMPORTANT FOR SALE */}
            <div className="bg-white border rounded-[20px] p-6 shadow-sm relative">
              <span className="absolute -top-2.5 -left-2.5 bg-yellow-400 text-black text-[9px] font-black px-3 py-1 rounded-full">CLOSES SALE - PARENT SEES THIS</span>
              <div className="flex justify-between mt-2"><p className="font-black text-[14px]">Child Live Tracking - Nakato Sarah S3A</p><span className="text-[10px] bg-green-100 text-green-700 px-3 py-1 rounded-full font-black">Live Now</span></div>

              <div className="grid md:grid-cols-3 gap-3 mt-5 text-[12px]">
                <div className="bg-[#F7F9FF] border p-4 rounded-xl"><p className="text-[10px] font-black text-[#0B3D91]">RESULTS TODAY</p><p className="font-black text-[15px] mt-1">Maths 82% A • +5%</p><p className="text-[10px] text-gray-600">Mr. Okello entered 10 min ago • SMS sent to you</p></div>
                <div className="bg-[#F7F9FF] border p-4 rounded-xl"><p className="text-[10px] font-black text-[#0B3D91]">ATTENDANCE</p><p className="font-black text-[15px] mt-1">IN 7:30am ✅</p><p className="text-[10px] text-gray-600">QR Card tapped at gate • OUT not yet</p></div>
                <div className="bg-[#F7F9FF] border p-4 rounded-xl"><p className="text-[10px] font-black text-[#0B3D91]">DISCIPLINE</p><p className="font-black text-[15px] mt-1">No issues ✅</p><p className="text-[10px] text-gray-600">Last 30 days clean • Good conduct</p></div>
              </div>

              <div className="mt-4 bg-slate-900 text-white rounded-xl p-3 flex justify-between text-[10px] font-black"><span>Prisma: student + result + attendance • ParentId: parent_001 • API: /api/parent/child/TRI/2024/042</span><span className="text-yellow-300">SMS Alert Sent → 0700 123456</span></div>
            </div>

            {/* FEES MOMO - THE PAYMENT BUTTON */}
            <div className="bg-[#0B3D91] text-white rounded-[20px] p-6 shadow-lg border-2 border-yellow-400 relative">
              <span className="absolute -top-3 left-6 bg-yellow-400 text-black text-[10px] font-black px-4 py-1 rounded-full">★ MONEY FEATURE - MoMo API LIVE</span>
              <div className="flex justify-between mt-2"><p className="font-black text-[16px]">Fees Payment - Pay in 1 Click</p><span className="bg-white/20 px-3 py-1 rounded-full text-[10px] font-black">MTN • Airtel</span></div>

              <div className="grid md:grid-cols-2 gap-4 mt-5">
                <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                  <p className="text-[11px] text-blue-200">Term 2 2025</p>
                  <div className="mt-2 space-y-2 text-[12px]">
                    <div className="flex justify-between"><span>Total Fees</span><span className="font-black">UGX 650,000</span></div>
                    <div className="flex justify-between"><span>Paid (MoMo)</span><span className="font-black text-green-300">600,000 ✅</span></div>
                    <div className="flex justify-between border-t border-white/10 pt-2"><span>Balance Due</span><span className="font-black text-yellow-300">50,000</span></div>
                    <div className="w-full bg-black/30 h-2 rounded-full mt-2"><div className="bg-yellow-400 h-2 rounded-full w-[92%]"></div></div>
                  </div>
                </div>
                <div className="bg-white text-slate-900 p-4 rounded-xl">
                  <p className="font-black text-[12px]">Pay Now via Mobile Money</p>
                  <p className="text-[10px] text-gray-600 mt-1">MTN MoMo API • Airtel Money API • Auto receipt • Auto SMS</p>
                  <div className="mt-3 flex gap-2">
                    <button className="flex-1 bg-yellow-400 text-black py-3 rounded-xl font-black text-[12px]">MTN MoMo 50k</button>
                    <button className="flex-1 bg-red-600 text-white py-3 rounded-xl font-black text-[12px]">Airtel 50k</button>
                  </div>
                  <p className="text-[9px] text-gray-500 mt-2 font-mono">API: POST /api/fees/momo • transactionId: MOMO-123 • feesBalance auto update</p>
                  <p className="text-[10px] text-green-600 font-bold mt-2">✓ Last payment: UGX 200k via MTN • 0700 123456 • 2 days ago • Receipt #R-042</p>
                </div>
              </div>
            </div>

            {/* RESULTS + CHAT */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border rounded-[20px] p-6 shadow-sm">
                <p className="font-black text-[13px]">Results History +5% Improvement</p>
                <div className="mt-3 space-y-2 text-[11px]">
                  <div className="flex justify-between bg-[#F7F9FF] border p-2.5 rounded-lg"><span>Term 2 2025 - Avg 95% Pos 1</span><span className="text-green-600 font-black">+5% ▲</span></div>
                  <div className="flex justify-between bg-[#F7F9FF] border p-2.5 rounded-lg"><span>Term 1 2025 - Avg 90% Pos 3</span><span className="text-gray-600">Stable</span></div>
                  <div className="flex justify-between bg-[#F7F9FF] border p-2.5 rounded-lg"><span>Term 3 2024 - Avg 88% Pos 5</span><span className="text-gray-600">Old</span></div>
                </div>
                <button className="mt-4 w-full border py-2 rounded-xl text-[11px] font-black">Download Full Report PDF</button>
              </div>

              <div className="bg-white border rounded-[20px] p-6 shadow-sm">
                <p className="font-black text-[13px]">Live Chat - Teacher</p>
                <div className="mt-3 bg-[#F7F9FF] border rounded-xl p-3 h-[140px] overflow-y-auto text-[11px] space-y-2">
                  <div className="bg-white border p-2 rounded-lg"><span className="font-black text-[#0B3D91]">Mr. Okello (Maths):</span> Sarah improved +5% this term, keep it up!</div>
                  <div className="bg-[#0B3D91] text-white p-2 rounded-lg ml-6"><span className="font-black">You:</span> Thank you teacher, will support at home</div>
                  <div className="bg-white border p-2 rounded-lg"><span className="font-black text-[#0B3D91]">Mr. Okello:</span> Fees balance 50k, please clear before exams</div>
                </div>
                <div className="mt-3 flex gap-2"><input className="flex-1 border rounded-xl px-3 py-2 text-[11px]" placeholder="Type message to teacher..." /><button className="bg-[#0B3D91] text-white px-4 py-2 rounded-xl text-[11px] font-black">Send</button></div>
                <p className="text-[9px] text-gray-500 mt-2 font-mono">Prisma: chat table • sender parent_001 • receiver teacher_001 • API: /api/chat</p>
              </div>
            </div>
          </div>

          {/* RIGHT 1/3 */}
          <div className="space-y-6">

            <div className="bg-white border rounded-[20px] p-6 shadow-sm">
              <p className="font-black text-[13px]">Bus GPS Live Tracking</p>
              <div className="mt-3 bg-slate-900 text-white rounded-xl p-4">
                <div className="flex justify-between text-[11px]"><span>Bus UAH 123X</span><span className="bg-green-400 text-black px-2 py-0.5 rounded text-[9px] font-black">LIVE GPS</span></div>
                <div className="mt-3 bg-white/10 h-[100px] rounded-lg grid place-items-center text-[10px]">🗺️ MAP - Bus 2.5km away • Bwaise roundabout • ETA 12 min</div>
                <div className="mt-3 flex justify-between text-[10px]"><span>Driver: Moses 0700 999</span><span>Route: Bwaise</span></div>
                <div className="mt-2 bg-white/10 p-2 rounded-lg text-[10px]">Tap Card: Sarah tapped IN 6:45am Bus • OUT not yet</div>
              </div>
              <p className="text-[9px] text-gray-500 mt-2 font-mono">Prisma: transport • busRouteId • GPS lat/long • API: /api/transport/live/UAH123X</p>
            </div>

            <div className="bg-white border rounded-[20px] p-6 shadow-sm">
              <p className="font-black text-[13px]">My Children (2)</p>
              <div className="mt-3 space-y-2 text-[11px]">
                <div className="bg-[#0B3D91] text-white p-3 rounded-xl flex justify-between"><span>Nakato Sarah S3A • 95% • Pos 1</span><span className="bg-yellow-400 text-black px-2 rounded text-[9px] font-black">Active</span></div>
                <div className="bg-[#F7F9FF] border p-3 rounded-xl flex justify-between"><span>Okello James S1B • 82% • Pos 8</span><span className="bg-white border px-2 rounded text-[9px]">View</span></div>
              </div>
              <p className="text-[10px] text-gray-600 mt-3">Switch child to view different results, fees, bus.</p>
            </div>

            <div className="bg-white border rounded-[20px] p-6 shadow-sm">
              <p className="font-black text-[13px]">Notifications - SMS/WhatsApp</p>
              <div className="mt-3 space-y-2 text-[11px]">
                <div className="bg-green-50 border border-green-200 p-2.5 rounded-lg"><p className="font-bold">✅ SMS Sent Today 9:30am</p><p className="text-[10px]">Maths 82% entered for Sarah - 0700 123456</p></div>
                <div className="bg-blue-50 border border-blue-200 p-2.5 rounded-lg"><p className="font-bold">📱 WhatsApp Yesterday</p><p className="text-[10px]">Fees receipt UGX 200k - Download</p></div>
                <div className="bg-yellow-50 border border-yellow-200 p-2.5 rounded-lg"><p className="font-bold">🚌 Bus Alert 6:45am</p><p className="text-[10px]">Sarah tapped IN Bus UAH 123X</p></div>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-[20px] p-6">
              <p className="font-black text-[11px] tracking-widest">PARENT SYSTEM - PAYING USER</p>
              <p className="text-[10px] text-gray-400 mt-3 font-mono">Path: E:/Projects/sschool-premium/src/app/portal/parent/page.tsx<br/>Prisma: parent (parentId) links to student via parentId field • 2 children max<br/>Login: phone + password • Role: parent • Can only view where parentId = own<br/>APIs: /api/parent/child/* • /api/fees/momo • /api/transport/live • /api/chat • /api/sms/log<br/>MoMo: MTN MoMo + Airtel API • Auto feesBalance update • Receipt auto</p>
              <div className="mt-4 flex gap-1.5"><span className="text-[9px] bg-yellow-400 text-black px-2 py-1 rounded font-bold">PAYING ★</span><span className="text-[9px] bg-[#0B3D91] text-white px-2 py-1 rounded font-bold">MoMo API</span><span className="text-[9px] bg-white text-black px-2 py-1 rounded font-bold">GPS Live</span></div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
