"use client";
import { useState } from "react";

export default function AdminPortal() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return (
      <div className="bg-[#F7F9FF] min-h-[80vh] px-6 lg:px-16 py-12">
        <div className="max-w-[1500px] mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="bg-[#0B3D91] text-white text-[10px] font-black px-4 py-1.5 rounded-full">ADMIN ERP • 30 MODULES</span>
            <h1 className="font-black text-[40px] leading-[0.9] mt-4">Admin Login<br/><span className="text-[#0B3D91]">Full ERP Control</span></h1>
            <p className="text-[13px] text-gray-600 mt-4">Director / Bursar login. One login, 30 modules. Role-based.</p>
            <div className="mt-6 bg-white border rounded-[20px] p-6">
              <p className="font-black text-[12px]">Demo Logins:</p>
              <div className="mt-3 space-y-2 text-[11px] font-mono">
                <div className="flex justify-between bg-[#F7F9FF] p-2 rounded"><span>Super Admin</span><span className="font-black">admin@premium.ug / admin123</span></div>
                <div className="flex justify-between bg-[#F7F9FF] p-2 rounded"><span>Bursar</span><span>bursar@premium.ug / bursar123</span></div>
              </div>
            </div>
          </div>
          <div className="bg-white border rounded-[24px] p-8 shadow-xl">
            <p className="font-black text-[16px]">Login to Admin ERP</p>
            <div className="mt-6 space-y-4">
              <div><label className="text-[11px] font-black">Email</label><input defaultValue="admin@premium.ug" className="mt-1 w-full border rounded-xl px-4 py-3 text-[13px]" /></div>
              <div><label className="text-[11px] font-black">Password</label><input type="password" defaultValue="admin123" className="mt-1 w-full border rounded-xl px-4 py-3 text-[13px]" /></div>
              <button onClick={()=>setLoggedIn(true)} className="w-full bg-[#0B3D91] text-white py-3.5 rounded-xl font-black text-[13px]">Login → Open ERP</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#F7F9FF] min-h-[80vh]">
      <section className="px-6 lg:px-16 py-4 bg-slate-900 text-white">
        <div className="max-w-[1500px] mx-auto flex justify-between items-center">
          <p className="font-black text-[13px]">Admin ERP - Super Admin • 30 Modules Live</p>
          <button onClick={()=>setLoggedIn(false)} className="bg-white text-slate-900 px-4 py-1.5 rounded-full text-[10px] font-black">Logout</button>
        </div>
      </section>

      <section className="px-6 lg:px-16 py-6 max-w-[1500px] mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border p-5 rounded-[18px]"><p className="text-[10px] font-black text-[#0B3D91]">TOTAL STUDENTS</p><p className="font-black text-[28px]">1,247</p><p className="text-[11px] text-gray-600">+12 new</p></div>
          <div className="bg-white border p-5 rounded-[18px]"><p className="text-[10px] font-black text-[#0B3D91]">FEES COLLECTED</p><p className="font-black text-[28px]">UGX 450M</p><p className="text-[11px] text-gray-600">92% collected</p></div>
          <div className="bg-[#0B3D91] text-white p-5 rounded-[18px]"><p className="text-[10px] font-black text-blue-200">PENDING TASKS</p><p className="font-black text-[28px]">18</p><p className="text-[11px] text-blue-200">Admissions 8 • Fees 5</p></div>
          <div className="bg-white border p-5 rounded-[18px]"><p className="text-[10px] font-black text-[#0B3D91]">SYSTEM</p><p className="font-black text-[28px]">30 Modules</p><p className="text-[11px] text-gray-600">99.9% uptime</p></div>
        </div>

        <div className="mt-6 bg-white border rounded-[20px] p-6">
          <p className="font-black text-[14px]">30 Modules - Click to Manage</p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
            <div className="bg-blue-50 border p-3 rounded-xl"><p className="font-black text-[11px]">Students 500</p><p className="text-[10px]">Add/Edit/View</p></div>
            <div className="bg-green-50 border p-3 rounded-xl"><p className="font-black text-[11px]">Fees MoMo UGX 450M</p><p className="text-[10px]">MTN API Live</p></div>
            <div className="bg-yellow-50 border p-3 rounded-xl"><p className="font-black text-[11px]">Results Enter Marks</p><p className="text-[10px]">95% pass</p></div>
            <div className="bg-blue-50 border p-3 rounded-xl"><p className="font-black text-[11px]">Attendance QR</p><p className="text-[10px]">98.2%</p></div>
            <div className="bg-purple-50 border p-3 rounded-xl"><p className="font-black text-[11px]">Timetable Auto</p><p className="text-[10px]">S1A-S6</p></div>
            <div className="bg-green-50 border p-3 rounded-xl"><p className="font-black text-[11px]">Library 2k Books</p><p className="text-[10px]">Borrow/Return</p></div>
            <div className="bg-yellow-50 border p-3 rounded-xl"><p className="font-black text-[11px]">Dormitory 120</p><p className="text-[10px]">Bed Allot</p></div>
            <div className="bg-blue-50 border p-3 rounded-xl"><p className="font-black text-[11px]">Staff 30</p><p className="text-[10px]">Payroll</p></div>
            <div className="bg-green-50 border p-3 rounded-xl"><p className="font-black text-[11px]">Admissions 150</p><p className="text-[10px]">Approve</p></div>
            <div className="bg-purple-50 border p-3 rounded-xl"><p className="font-black text-[11px]">E-Learning 48</p><p className="text-[10px]">Upload Video</p></div>
            <div className="bg-yellow-50 border p-3 rounded-xl"><p className="font-black text-[11px]">Transport GPS 4 Buses</p><p className="text-[10px]">Live GPS</p></div>
            <div className="bg-blue-50 border p-3 rounded-xl"><p className="font-black text-[11px]">SMS 500 Bulk</p><p className="text-[10px]">Africa's Talking</p></div>
          </div>
          <div className="mt-6 bg-slate-900 text-white p-4 rounded-xl text-[11px]"><p className="font-black">Premium 12: GPS, ID Cards QR, CBT, UNEB AI, Payroll PAYE/NSSF, LPO, Alumni, Multi-Campus, Audit Log, Document Vault, PWA, Live Chat</p></div>
        </div>
      </section>
    </div>
  )
}