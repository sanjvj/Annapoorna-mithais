import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaTimes } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#332D21] text-white py-8">
      <div className="container mx-auto flex flex-col items-center md:flex-row justify-between gap-8">
        <div className="flex items-center gap-8">
          <img src="Logo2.svg" alt="Logo" className="w-16 h-16" />
          <div className="border-l border-white opacity-20 h-16"></div>
          <div className="flex flex-col">
            <img src="fssai.png" alt="FSSAI Logo" className="w-24" />
            <p className="opacity-80 text-[16px] font-Nunito font-semibold">12424009000073 (Annapoorna enterprises)</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-semibold">Follow us</span>
          <FaLinkedin className="text-white" />
          <FaFacebook className="text-white" />
          <FaInstagram className="text-white" />
          <FaTimes className="text-white" />
        </div>
      </div>

      <div className="container hidden mx-auto lg:flex flex-col md:flex-row justify-between items-end gap-8 my-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-[24px] font-extrabold font-Nunito uppercase">Inventive Retail Traders PVT LTD</h3>
          <p className="opacity-80 text-[16px] font-semibold">11/113-1, Medical College East Gate, Asaripallam, Nagercoil-629201</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="text-[16px] font-Nunito font-semibold">@ mimart.co.in</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[16px] font-Nunito font-semibold">ddmimart@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[16px] font-Nunito font-semibold">info@mimart.co.in</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src='Landline.svg' alt="Landline" />
            <div>
              <span className="text-[12px] font-bold font-Nunito">LANDLINE<br /></span>
              <span className="text-[16.09px] font-extrabold font-Nunito">04652-457060</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src='Landline.svg' alt="Landline" />
            <p className="text-[16px] font-extrabold font-Nunito">75500-86293<br />75500-86295</p>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-600 opacity-50 my-4" />

      <div className="text-center mt-8 text-sm opacity-80 font-Nunito">
        © 2024 All rights reserved by Annapoorna Mithai
      </div>
    </footer>
  );
};

export default Footer;