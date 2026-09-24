"use client";
import { useState } from "react";

const MOCK_STUDENTS = [
  { id: "PS-2024-001", name: "Namukasa Faith", class: "S.4 Blue", stream: "Blue", gender: "F", status: "Active", balance: 0 },
  { id: "PS-2024-002", name: "Mugisha John", class: "S.3 Red", stream: "Red", gender: "M", status: "Active", balance: 50000 },
  { id: "PS-2024-003", name: "Atuheire Grace", class: "S.2 Green", stream: "Green", gender: "F", status: "Active", balance: 0 },
  { id: "PS-2024-004", name: "Okello Peter", class: "S.4 Blue", stream: "Blue", gender: "M", status: "Suspended", balance: 120000 },
];

export default function StudentPage() {
  const [search, setSearch] = useState("");
  const filtered = MOCK_STUDENTS.filter(s => 
    s.name.toLowerCase().includes(search.toLowerCase()) || 
    s.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Students Module</h1>
            <p className="text-gray-500">Core (1/8) - Manage all student records</p>
          </div>
          <button className="bg-[#1e3a8a] text-white px-5 py-2.5 rounded-full font-bold hover:bg-blue-800">
            + Add Student
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow-sm border"><p className="text-sm text-gray-500">Total Students</p><p className="text-2xl font-bold">1,248</p></div>
          <div className="bg-white p-4 rounded-xl shadow-sm border"><p className="text-sm text-gray-500">Active</p><p className="text-2xl font-bold text-green-600">1,201</p></div>
          <div className="bg-white p-4 rounded-xl shadow-sm border"><p className="text-sm text-gray-500">Fees Defaulters</p><p className="text-2xl font-bold text-red-600">47</p></div>
          <div className="bg-white p-4 rounded-xl shadow-sm border"><p className="text-sm text-gray-500">New Admissions</p><p className="text-2xl font-bold">32</p></div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="p-4 border-b flex justify-between">
            <input 
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by name or ID..." 
              className="border rounded-full px-4 py-2 w-80 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-2">
              <select className="border rounded-full px-3 py-2 text-sm"><option>All Classes</option><option>S.4</option><option>S.3</option></select>
              <select className="border rounded-full px-3 py-2 text-sm"><option>All Status</option><option>Active</option><option>Suspended</option></select>
            </div>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500 text-left">
              <tr><th className="p-3">ID</th><th className="p-3">Name</th><th className="p-3">Class</th><th className="p-3">Status</th><th className="p-3">Balance</th><th className="p-3">Action</th></tr>
            </thead>
            <tbody>
              {filtered.map(s => (
                <tr key={s.id} className="border-t hover:bg-gray-50">
                  <td className="p-3 font-mono">{s.id}</td>
                  <td className="p-3 font-semibold">{s.name}</td>
                  <td className="p-3">{s.class}</td>
                  <td className="p-3"><span className={`px-2 py-1 rounded-full text-xs ${s.status==='Active'?'bg-green-100 text-green-700':'bg-red-100 text-red-700'}`}>{s.status}</span></td>
                  <td className="p-3">{s.balance === 0 ? <span className="text-green-600">Cleared</span> : `UGX ${s.balance.toLocaleString()}`}</td>
                  <td className="p-3"><button className="text-blue-700 font-bold">View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}