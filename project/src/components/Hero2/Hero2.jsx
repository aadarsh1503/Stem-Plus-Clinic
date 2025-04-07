import { Contact2 } from 'lucide-react'
import React from 'react'
import ContactSection from './ContactSection2'
import i1 from "./i1.png"
import i11 from "./i11.png"
import i12 from "./i12.png"

const Hero2 = () => {
  return (
    <>
    <div className="text-center py-10 px-4 bg-white">
    {/* Logo */}
    <div className="flex justify-center items-center gap-12 mb-6">
  <img src={i11} alt="Mesenchymal" className="w-24 md:w-28 rounded-md" />

  <img src={i1} alt="STEM PLUS Logo" className="h-24 md:h-48" />

  <img src={i12} alt="Repair Restore Renew" className="w-24 md:w-28 rounded-md" />
</div>


    {/* English Text */}
    <p className="text-lg md:text-2xl text-blue-700 font-serif">
      Our website is <span className="text-red-600 font-semibold">under update</span> and soon it will be operational,
      <br />
      meantime you can explore the list of diseases we treat:
    </p>

    {/* Arabic Text */}
    <p className="text-lg md:text-xl text-blue-700 underline font-serif mt-6 leading-loose">
      <span className="text-red-600 font-semibold">موقعنا تحت التحديث</span> وسوف يكون جاهزاً قريباً، وفي هذه الأثناء يمكنك استكشاف<br />
      <span className="">قائمة الأمراض التي نعالجها:</span>
    </p>

    {/* Arabic List */}
    <ul className="text-right  mt-6 max-w-md mx-auto space-y-2 text-lg md:text-xl font-serif">
  <li>مرض السكري •</li>
  <li>التوحد •</li>
  <li>الضعف الجنسي •</li>
  <li>التصلب اللويحي •</li>
  <li>أمراض القلب •</li>
  <li>مكافحة الشيخوخة •</li>
  <li>متلازمة التعب المزمن •</li>
  <li>التصلب الجانبي الضموري •</li>
  <li>أمراض الكبد •</li>
  <li>السكتة الدماغية •</li>
  <li>فقر الدم المنجلي •</li>
  <li>إصابات النخاع الشوكي •</li>
  <li>مرض الباركنسون •</li>
  <li>مرض الزهايمر •</li>
  <li>أمراض المفاصل •</li>
</ul>

  </div>
  <ContactSection />
  </>
  )
}

export default Hero2