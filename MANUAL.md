\# SSCHOOL PREMIUM ERP - FULL MANUAL

\# Triangle Premium Secondary School System

\# Location: E:\\Projects\\sschool-premium



1\. WHAT IS THIS PROJECT?



SSchool Premium is a 30-Modules School ERP for Ugandan Secondary Schools S1-S6.

It replaces paper with digital: Student records, Fees MoMo, Results UNEB, Attendance QR,

Timetable Auto, Library 2000+ books, Dormitory, Staff Payroll, Transport GPS, SMS bulk.



Built for schools 200-1500 students. White shirt, Blue tie uniform (Tony Blue theme #0B3D91).



Live Demo Path: http://localhost:3000

Tech: Next.js 14, Prisma, MySQL, Tailwind, PWA Offline



2\. SYSTEM HAS 4 PORTALS + PUBLIC PAGES





PUBLIC PAGES (Same Header - PS Logo + Quick Nav):

\- / : Homepage - Hero + 4 Portals + 30 Modules cards + Stats 1,247 students, 99.9% pass

\- /modules : All 30 modules with 2 filters Core/Premium

\- /pricing : 3 plans BASIC 800k, STANDARD 2.5M (90% close), PREMIUM 4.8M + Comparison table 30 rows

\- /about, /contact



PORTALS (Need Login in Production):



A. /portal/student - Nakato Sarah S3A TRI/2024/042

&#x20;     - Shows: Results Maths 82% A + Fees Bal 50k + Timetable S3A + Attendance 98.2% QR IN 7:30 OUT 4:45

&#x20;     - E-Library borrowed, ID Card QR, E-Learning video 12min, Dorm Block B Bed 12, Bus UAH 123X GPS Live

&#x20;     - Login: admissionNo + password (DOB default)

&#x20;     - Can only view own studentId - Prisma: where studentId = loggedInId



B. /portal/parent - Okello John 0700123456 - PAYING USER ★

&#x20;     - Child Live Tracking: Results entered 10min ago + SMS sent to parent

&#x20;     - Fees MoMo: UGX 650k total, 600k paid, 50k due + MTN MoMo + Airtel buttons + transactionId MOMO-123

&#x20;     - Results history +5%, Live Chat teacher Mr. Okello, Bus GPS 2.5km away ETA 12min Bwaise

&#x20;     - My Children switcher (2 kids), Notifications SMS/WhatsApp/Bus Alert

&#x20;     - Login: phone + password - Parent sees only where parentId = own

&#x20;     - This portal CLOSES SALE - Director sees MoMo payment working



C. /portal/admin - Super Admin - Full ERP Control

&#x20;  BEFORE LOGIN: Shows demo logins admin@premium.ug/admin123, bursar@...

&#x20;  AFTER LOGIN:

&#x20;     - Top black bar: 30 Modules Live, 1,247 records, UGX 450M

&#x20;     - Stats: Students 1,247 + Fees 450M + Pending 18 + System 30 Modules

&#x20;     - 30 Modules Grid: Students 500 Add/Edit, Fees MoMo 450M, Results Enter, Attendance QR, Timetable Auto, Library 2k, Dorm 120, Staff 30, Admissions 150, E-Learning 48, Transport GPS 4 Buses, SMS 500

&#x20;     - Premium 12: GPS, ID Cards QR, CBT Auto-mark, UNEB AI, Payroll PAYE/NSSF, LPO, Alumni, Multi-Campus, Audit Log, Document Vault, PWA, Live Chat

&#x20;     - Right: Recent Admissions pending/approved, Fees Alerts arrears 50k SMS sent, Audit Log who edited

&#x20;     - Sidebar: 240px left menu - Core 8, Finance 5, Premium 12

&#x20;     - Roles: Super Admin = all, Bursar = fees+payroll only, Warden = dorm+health



D. /portal/teacher (To build) - Teacher only sees own class S3A

&#x20;     - Enter results for S3A only, Mark attendance QR, View timetable, Chat parent



3\. 30 MODULES LIST - DATABASE READY





CORE (8) - All plans have these:

1\. Student Information - S1A-S6, House Blue/Green, Boarding/Day, White Shirt Blue Tie

2\. Results \& Transcripts - UNEB grading, PDF report card, Pos 1/45, Avg 95%

3\. Attendance QR/Biometric - IN 7:30 OUT 4:45, 98.2%, Late tracking

4\. Timetable Engine Auto - S1A-S6, Room R12, Lab1, Conflict check

5\. E-Library 2000+ Books - Borrow/Return, PDF Ready, Due date

6\. Admissions Online Form - 150 pending, Approve, admissionNo auto TRI/2024/042

7\. E-Learning LMS Video - 48 videos, Quiz auto-mark, Due tomorrow

8\. News \& Events Calendar



PLUS STANDARD 20 MODULES ADD (Best Seller UGX 2.5M):

9\. Parent Tracking Portal - Live results + SMS alert

10\. Dormitory/Boarding 120 beds - Block B Bed 12 allot

11\. Fees \& Mobile Money MoMo API - MTN + Airtel, feesBalance auto, Receipt R-042, transactionId

12\. Staff \& Payroll Base - 30 staff

13\. Inventory \& Store

14\. Discipline \& Counseling e-Sign

15\. Health/Sickbay Clinic Log

16\. Sports \& Clubs Trophy

17\. Class \& Stream S1A-S6

18\. Subjects S1-S6 Management

19\. ID Card Generator QR Code

20\. Bulk SMS/WhatsApp 500/month - Africa's Talking



PLUS PREMIUM 12 MODULES 👑 (UGX 4.8M):

21\. Transport GPS Live + Bus Card - UAH 123X, 2.5km away, Driver Moses 0700999, Tap IN 6:45

22\. Online Exams CBT Auto Mark

23\. UNEB Analytics AI Prediction - 99.9% pass prediction

24\. Bulk SMS Unlimited

25\. Live Chat Parent-Teacher - Mr. Okello: Sarah +5%

26\. Alumni Network Donations

27\. Multi-Campus Branches

28\. Reports \& Audit Log Who Edited - admin edited feesBalance 50k->0 at 10:30am

29\. Document Vault e-Sign NIN

30\. PWA Mobile App Offline + Push

31\. Payroll PAYE/NSSF Payslip PDF

32\. Procurement LPO/GRN Approval

33\. Settings \& Roles Permissions



4\. PRICING STRATEGY - HOW TO SELL





BASIC UGX 800k/year - 10 Modules, 1 Portal, No MoMo, No SMS, No Parent

&#x20;   - For trial small schools. Pain: No MoMo so cannot collect fees. Director feels limited.



STANDARD UGX 2.5M/year ⭐ MOST POPULAR - 90% CLOSE - 20 Modules, 4 Portals, MoMo + 500 SMS

&#x20;   - Includes: All 8 Core + Parent + Dorm + Fees MoMo + Staff + Inventory + Discipline + Health + Sports + ID Cards + Roles

&#x20;   - Sales Trick: Show BASIC first (no MoMo) -> Show STANDARD (80% value at 50% cost) -> Director says YES

&#x20;   - Perfect for 200-800 students, ROI 1 term



PREMIUM UGX 4.8M/year - 30 Modules, Unlimited SMS, GPS, AI

&#x20;   - Anchor: Show last, make 2.5M look cheap. For big schools groups.



Same card display rounded-\[20px] border. Standard highlighted yellow border + blue bg.



5\. TECH STACK \& FILE STRUCTURE





Tech: Next.js 14 App Router, Tailwind CSS #0B3D91 Tony Blue, Prisma ORM, MySQL triangle\_premium,

NextAuth JWT, PWA Offline, MTN MoMo API, Airtel Money API, Africa's Talking SMS, QR Code



Structure:

src/app/

&#x20; layout.tsx - Same header PS + HOME + MODULES 30 + PORTALS + PRICING + ABOUT + CONTACT + STUDENT PARENT ADMIN LOGIN + Quick Nav + Footer - Never changes

&#x20; page.tsx - Homepage

&#x20; modules/page.tsx - 30 modules cards

&#x20; pricing/page.tsx - 3 plans + comparison table

&#x20; portal/

&#x20;   student/page.tsx - Student dashboard

&#x20;   parent/page.tsx - Parent MoMo + GPS

&#x20;   admin/

&#x20;     page.tsx - Login + Dashboard

&#x20;     layout.tsx - Sidebar 240px

&#x20;     students/page.tsx - CRUD (to build)

&#x20;     fees/page.tsx

&#x20;     results/page.tsx



prisma/schema.prisma - 30 models: student, fees, result, attendance, timetable, library, dormitory, staff, admission, lms, news, transport, inventory, payroll, procurement, idcard, cbt, discipline, health, sports, sms, chat, alumni, campus, audit, documents, settings, parent, admin, class



.env:

DATABASE\_URL="mysql://..."

MTN\_MOMO\_KEY=

AIRTEL\_KEY=

SMS\_API=



6\. DATABASE - KEY FIELDS





Student: id, admissionNo @unique TRI/2024/042, firstName Nakato Sarah, class S3A, feesBalance 50000, qrCode, house Blue, boarding, parentId, avg 95, position 1



Fees: studentId, total 650000, paid 600000, balance 50000, transactionId MOMO-123, method MTN, receipt R-042



Result: studentId, subject Maths, score 82, grade A, term Term2 2025, teacher Mr. Okello, improvement +5%



Attendance: studentId, date, status Present/Late/Absent, inTime 7:30, outTime 4:45, method QR



Parent: parentId, phone 0700123456 @unique, password, children \[TRI/2024/042, TRI/2024/043]



Admin: email admin@premium.ug, password hashed, role superadmin/bursar/warden/librarian



7\. LOGIN \& SECURITY - MUST IN PRODUCTION





Yes all portals need login - currently open for demo to sell.



Student: admissionNo + DOB -> cookie studentId -> can only view where studentId = own



Parent: phone + password -> cookie parentId -> can only view where parentId = own -> 2 children



Admin: email + password -> JWT role -> middleware protects /portal/admin/\* -> role check superadmin sees all, bursar fees only



File: middleware.ts - checks cookie, redirects to /portal/admin/login if no cookie



In Demo: Keep open, add fake login button "Logged in as Nakato Sarah"



After Sale UGX 2.5M: Add real NextAuth



8\. HOW TO RUN \& SELL





Install:

npm install

npx prisma db push

npm run dev -> http://localhost:3000



Sell Flow:

1\. Open / - Show hero 30 modules + stats

2\. Open /pricing - Show BASIC limited no MoMo -> Show STANDARD 2.5M -> Director feels 2.5M cheap vs 4.8M anchor

3\. Open /portal/parent - Click MTN MoMo 50k -> feesBalance updates -> Director: "Parents will pay faster"

4\. Open /portal/admin - Login -> Show 1,247 students, UGX 450M collected, 18 pending -> Director says "This is what we need"

5\. Close: 2.5M STANDARD + 500k setup + 1 year support + PWA install + training



9\. WHAT EACH USER SEES SUMMARY





Director/Admin: Everything 30 modules, money UGX 450M, audit log, approves admissions, payroll PAYE/NSSF



Bursar: Fees MoMo, Payroll, Inventory only



Teacher: Own class S3A results entry, attendance QR, timetable, chat parent



Student: Own results, fees balance, timetable, attendance %, library books, ID QR, LMS video, dorm bed, bus GPS



Parent (Paying ★): Child live tracking, fees MoMo pay 1 click, results +5%, attendance IN time, discipline clean, bus GPS live 2.5km ETA, chat teacher, SMS alerts, 2 children switcher



10\. NEXT TO BUILD





\- /portal/teacher dashboard

\- /portal/admin/students CRUD table + Add/Edit

\- /portal/admin/fees MoMo transaction list

\- /portal/admin/results entry sheet S3A

\- Middleware auth protection

\- PWA offline manifest

\- MTN MoMo real API integration

\- SMS Africa's Talking integration

\- PDF report card generator



END OF MANUAL - Built for Kampala schools, Tony Blue #0B3D91, White Shirt Blue Tie

