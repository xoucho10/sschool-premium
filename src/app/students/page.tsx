"use client";
import { useState } from "react";

const DATA = [
  { id: "PS-2024-001", name: "Namukasa Faith", class: "S.4 Blue", gender: "F", status: "Active", fees: 0, photo: "NF" },
  { id: "PS-2024-002", name: "Mugisha John", class: "S.3 Red", gender: "M", status: "Active", fees: 50000, photo: "MJ" },
  { id: "PS-2024-003", name: "Atuheire Grace", class: "S.2 Green", gender: "F", status: "Active", fees: 0, photo: "AG" },
  { id: "PS-2024-004", name: "Okello Peter", class: "S.4 Blue", gender: "M", status: "Suspended", fees: 120000, photo: "OP" },
  { id: "PS-2024-005", name: "Nakato Sarah", class: "S.1 Yellow", gender: "F", status: "Active", fees: 0, photo: "NS" },
];

export default function StudentPage() {
  const [q, setQ] = useState("");
  const list = DATA.filter(s => s.name.toLowerCase().includes(q.toLowerCase()) || s.id.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className="bg-[#f8f9fc] min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-black">Student Module - Core (1/8)</h1>
            <p className="text-gray-500 text-sm">Premium School • 1,248 total students • 30 Modules ERP</p>
          </div>
          <button className="bg-[#1e3a8a] text-white px-6 py-2.5 rounded-full font-black text-sm">+ Add New Student</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-5 rounded-2xl border"><p className="text-[11px] text-gray-400 font-bold">TOTAL STUDENTS</p><p className="text-2xl font-black">1,248</p></div>
          <div className="bg-white p-5 rounded-2xl border"><p className="text-[11px] text-gray-400 font-bold">ACTIVE TODAY</p><p className="text-2xl font-black text-green-600">1,201</p></div>
          <div className="bg-white p-5 rounded-2xl border"><p className="text-[11px] text-gray-400 font-bold">FEES DEFAULTERS</p><p className="text-2xl font-black text-red-600">47</p></div>
          <div className="bg-white p-5 rounded-2xl border"><p className="text-[11px] text-gray-400 font-bold">NEW ADMISSION</p><p className="text-2xl font-black">32</p></div>
        </div>

        <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
          <div className="p-4 border-b flex gap-3">
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search by name, ID, class..." className="flex-1 border rounded-full px-5 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"/>
            <select className="border rounded-full px-4 py-2.5 text-sm"><option>All Classes</option><option>S.4</option><option>S.3</option><option>S.2</option></select>
          </div>
          <table className="w-full text-[13px]">
            <thead className="bg-gray-50 text-gray-400 font-bold text-left"><tr><th className="p-4">STUDENT</th><th className="p-4">ID</th><th className="p-4">CLASS</th><th className="p-4">FEES</th><th className="p-4">STATUS</th><th className="p-4">ACTION</th></tr></thead>
            <tbody>
              {list.map(s=>(
                <tr key={s.id} className="border-t hover:bg-gray-50">
                  <td className="p-4 flex items-center gap-3"><div className="w-9 h-9 bg-[#1e3a8a] text-white rounded-full flex items-center justify-center font-black text-xs">{s.photo}</div><span className="font-bold">{s.name}</span></td>
                  <td className="p-4 font-mono text-xs">{s.id}</td>
                  <td className="p-4">{s.class}</td>
                  <td className="p-4">{s.fees===0?<span className="text-green-600 font-bold">Cleared</span>:`UGX ${s.fees.toLocaleString()}`}</td>
                  <td className="p-4"><span className={`px-3 py-1 rounded-full text-[11px] font-bold ${s.status==='Active'?'bg-green-100 text-green-700':'bg-red-100 text-red-700'}`}>{s.status}</span></td>
                  <td className="p-4"><button className="text-[#1e3a8a] font-black">View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}