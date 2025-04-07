import React from 'react';
import i1 from "./i1.png"
import i2 from "./i2.png"
import i3 from "./i3.png"
import i4 from "./i4.png"


const ContactSection = () => {
  return (
    <div className="bg-white px-4 py-8 text-center">
      <h2 className="text-xl font-bold text-gray-900 mb-4">:لا تتردد بالاتصال بنا</h2>
      <p className="text-lg text-gray-800 mb-4">
        Mobile/WhatsApp: <span dir="ltr">+995555367327</span>
      </p>
      <p className="text-lg font-bold text-gray-900 mb-4">من المملكة العربية السعودية</p>
      <p className="text-lg text-gray-800 mb-6">
        Mobile/WhatsApp: <span dir="ltr">+966569199158</span>
      </p>

      {/* Images row */}
      <div className="flex flex-col sm:flex-row justify-center items-center  mb-8">
  <img
    src={i4}
    alt="MSCs"
    className="w-[200px] h-[150px] object-contain rounded  bg-white"
  />
  <img
    src={i3}
    alt="Doctor"
    className="w-[200px] h-[150px] object-contain rounded  bg-white"
  />
  <img
    src={i2}
    alt="Stem Cells"
    className="w-[200px] h-[150px] object-contain rounded  bg-white"
  />
</div>


      {/* Footer info */}
      <div className=" border-3 border-black border text-sm text-black max-w-3xl mx-auto">
        <p>
          Nodar Bokhua, Tbilisi, Georgia. <span className="font-semibold">Website:</span>{' '}
          <a href="https://stemplus-clinic.com" className="text-blue-600 underline">stemplus-clinic.com</a>.{' '}
          <span className="font-semibold">E-Mail:</span>{' '}
          <a href="mailto:info@stemplus-clinic.com" className="text-blue-600 underline">info@stemplus-clinic.com</a>.{' '}
          <span className="font-semibold">Mobile/WhatsApp:</span><br /> +995555367327. from Saudi Arabia, Tel/WhatsApp: +966569199158
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
