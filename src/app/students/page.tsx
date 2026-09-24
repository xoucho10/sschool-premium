"use client";
import { useState } from "react";

export default function StudentPortal() {
  const [tab, setTab] = useState("overview");
  const student = {
    id: "PS-2024-001", name: "Namukasa Faith", class: "S.4 Blue", stream: "Blue", dob: "12 Mar 2009 (16 yrs)", gender: "Female",
    admission: "12 Jan 2024", house: "Victoria House", religion: "Christian", nationality: "Ugandan", district: "Wakiso",
    parent: "Mrs. Namukasa Jane - 0700123456", email: "faith.n@student.ps.ug", status: "Active", photo: "NF"
  };

  const tabs = ["overview","profile","academics","fees","attendance","results","discipline","medical","documents"];

  return (
    <div className="bg-[#f5f6fb] min-h-screen">
      <div className="max-w-7xl mx-auto p-4 md:p-6">

        {/* HEADER CARD */}
        <div className="bg-white rounded-[24px] border p-6 flex flex-col md:flex-row gap-6 shadow-sm">
          <div className="w-24 h-24 rounded-2xl bg-[#1e3a8a] text-white flex items-center justify-center text-3xl font-black">{student.photo}</div>
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 items-center">
              <h1 className="text-2xl font-black">{student.name}</h1>
              <span className="bg-green-100 text-green-700 text-[10px] font-black px-3 py-1 rounded-full">{student.status}</span>
              <span className="bg-blue-100 text-blue-700 text-[10px] font-black px-3 py-1 rounded-full">{student.id}</span>
              <span className="bg-gray-100 text-gray-700 text-[10px] font-black px-3 py-1 rounded-full">{student.class}</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 text-[12px]">
              <div><p className="text-gray-400 font-bold text-[10px]">ADMISSION NO</p><p className="font-bold">{student.id}</p></div>
              <div><p className="text-gray-400 font-bold text-[10px]">CLASS / STREAM</p><p className="font-bold">{student.class} • {student.stream}</p></div>
              <div><p className="text-gray-400 font-bold text-[10px]">HOUSE</p><p className="font-bold">{student.house}</p></div>
              <div><p className="text-gray-400 font-bold text-[10px]">DOB / GENDER</p><p className="font-bold">{student.dob} • {student.gender}</p></div>
              <div><p className="text-gray-400 font-bold text-[10px]">PARENT / GUARDIAN</p><p className="font-bold">{student.parent}</p></div>
              <div><p className="text-gray-400 font-bold text-[10px]">CONTACT</p><p className="font-bold">0700 123456 • {student.email}</p></div>
              <div><p className="text-gray-400 font-bold text-[10px]">DISTRICT / NATIONALITY</p><p className="font-bold">{student.district} • {student.nationality}</p></div>
              <div><p className="text-gray-400 font-bold text-[10px]">ADMISSION DATE</p><p className="font-bold">{student.admission} • {student.religion}</p></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-[#1e3a8a] text-white rounded-full px-6 py-2.5 text-xs font-black">Edit Profile</button>
            <button className="border rounded-full px-6 py-2.5 text-xs font-black">Print ID Card</button>
            <button className="border rounded-full px-6 py-2.5 text-xs font-black">Fee Statement</button>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-4">
          <div className="bg-white p-4 rounded-2xl border"><p className="text-[10px] text-gray-400 font-black">FEES BALANCE</p><p className="font-black text-green-600">UGX 0 • Cleared</p><p className="text-[10px] text-gray-400">2024 Term 2</p></div>
          <div className="bg-white p-4 rounded-2xl border"><p className="text-[10px] text-gray-400 font-black">ATTENDANCE</p><p className="font-black">94.2%</p><p className="text-[10px] text-green-600">12 days absent</p></div>
          <div className="bg-white p-4 rounded-2xl border"><p className="text-[10px] text-gray-400 font-black">AVERAGE SCORE</p><p className="font-black">78.5% • Div 2</p><p className="text-[10px] text-gray-400">Best: Math 89%</p></div>
          <div className="bg-white p-4 rounded-2xl border"><p className="text-[10px] text-gray-400 font-black">DISCIPLINE POINTS</p><p className="font-black">92/100</p><p className="text-[10px] text-green-600">Excellent</p></div>
          <div className="bg-white p-4 rounded-2xl border"><p className="text-[10px] text-gray-400 font-black">LIBRARY / HOSTEL</p><p className="font-black">2 Books • Dorm A</p><p className="text-[10px] text-gray-400">Bed 12</p></div>
        </div>

        {/* TABS */}
        <div className="flex gap-2 overflow-x-auto mt-6 pb-2">
          {tabs.map(t=>(
            <button key={t} onClick={()=>setTab(t)} className={`px-5 py-2.5 rounded-full text-xs font-black whitespace-nowrap capitalize border ${tab===t?'bg-[#1e3a8a] text-white border-[#1e3a8a]':'bg-white'}`}>{t}</button>
          ))}
        </div>

        {/* TAB CONTENT */}
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 bg-white rounded-2xl border p-6">
            {tab==="overview" && (
              <div className="space-y-6">
                <h3 className="font-black">Academic Progress (Last 3 Terms)</h3>
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="bg-gray-50 p-3 rounded-xl"><p className="font-bold">Term 1 2024</p><p>Pos 12/98 • 72% Div 2</p></div>
                  <div className="bg-blue-50 p-3 rounded-xl border border-blue-200"><p className="font-bold">Term 2 2024</p><p>Pos 8/98 • 78.5% Div 2 ↑</p></div>
                  <div className="bg-gray-50 p-3 rounded-xl"><p className="font-bold">Target Term 3</p><p>Pos 5 • 82% Div 1</p></div>
                </div>
                <h3 className="font-black mt-4">Recent Activities</h3>
                <ul className="text-xs space-y-2 list-disc ml-4 text-gray-600">
                  <li>Paid UGX 500,000 fees - 20 Sep 2024 - Receipt #R-9081</li>
                  <li>Scored 89% in Math End of Term - Best in class</li>
                  <li>Borrowed "Principles of Physics" from library - Due 30 Sep</li>
                  <li>Attendance: Present 42/45 days this term</li>
                </ul>
              </div>
            )}
            {tab==="profile" && (
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div><p className="text-gray-400 font-bold">FULL NAME</p><p className="font-bold">Namukasa Faith Nakato</p></div>
                <div><p className="text-gray-400 font-bold">NIN / LIN</p><p className="font-bold">CF123456789 • S-00921</p></div>
                <div><p className="text-gray-400 font-bold">PREVIOUS SCHOOL</p><p className="font-bold">Kampala Primary - PLE Agg 9</p></div>
                <div><p className="text-gray-400 font-bold">SPECIAL NEEDS</p><p className="font-bold">None</p></div>
                <div className="col-span-2"><p className="text-gray-400 font-bold">HOME ADDRESS</p><p className="font-bold">Plot 12, Bunga, Makindye, Kampala • Near Green Hill Academy</p></div>
                <div><p className="text-gray-400 font-bold">PARENT 1</p><p className="font-bold">Jane Namukasa (Mother) - 0700123456 - Businesswoman</p></div>
                <div><p className="text-gray-400 font-bold">PARENT 2</p><p className="font-bold">John Mukasa (Father) - 0756123456 - Engineer</p></div>
              </div>
            )}
            {tab==="fees" && (
              <table className="w-full text-xs text-left">
                <thead className="text-gray-400"><tr><th className="pb-2">DATE</th><th className="pb-2">ITEM</th><th className="pb-2">AMOUNT</th><th className="pb-2">BAL</th></tr></thead>
                <tbody className="font-bold">
                  <tr className="border-t"><td className="py-2">12 Jan 24</td><td>Tuition Term 2</td><td>UGX 1,200,000</td><td>1,200,000</td></tr>
                  <tr className="border-t"><td className="py-2">15 Jan 24</td><td>Payment Cash</td><td className="text-green-600">-700,000</td><td>500,000</td></tr>
                  <tr className="border-t"><td className="py-2">20 Sep 24</td><td>Payment Bank</td><td className="text-green-600">-500,000</td><td>0 Cleared</td></tr>
                </tbody>
              </table>
            )}
            {tab!=="overview" && tab!=="profile" && tab!=="fees" && (
              <div className="text-sm text-gray-500">Content for <b>{tab}</b> module: Detailed table for {tab} will load here with Prisma DB. This is Core Module 1/8 - Student 360 Profile. Connect to your API /api/students/{student.id}/{tab}</div>
            )}
          </div>

          <div className="space-y-4">
            <div className="bg-[#1e3a8a] text-white rounded-2xl p-5">
              <p className="text-[10px] font-black tracking-widest opacity-70">QUICK ACTIONS</p>
              <div className="grid grid-cols-2 gap-2 mt-3 text-[11px] font-bold">
                <button className="bg-white/10 rounded-full py-2">Promote</button>
                <button className="bg-white/10 rounded-full py-2">Suspend</button>
                <button className="bg-white/10 rounded-full py-2">Print Report</button>
                <button className="bg-white/10 rounded-full py-2">SMS Parent</button>
              </div>
            </div>
            <div className="bg-white rounded-2xl border p-5">
              <p className="font-black text-sm">Class Teacher Remark</p>
              <p className="text-xs text-gray-600 mt-2">"Faith is a disciplined and focused student. She has improved from position 12 to 8. Needs encouragement in Chemistry."</p>
              <p className="text-[10px] text-gray-400 mt-2">- Mr. Kato, S.4 Blue Class Teacher</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}