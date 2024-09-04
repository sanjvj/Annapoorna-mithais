import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaTimes } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#332D21] text-white py-8 px-8">
      <div className="container mx-auto flex flex-col md:items-center md:flex-row justify-between gap-8">
        <div className="flex items-center gap-8">
          <img src="Logo2.svg" alt="Logo" className="w-16 h-16" />
          <div className="border-l border-white opacity-20 h-16"></div>
          <div className="flex flex-col">
            <img src="fssai.png" alt="FSSAI Logo" className="w-12 md:w-20 mb-2" />
            <p className="opacity-80 text-[12px] md:text-[16px] font-Nunito font-semibold">12418012002076 (Annapoorna enterprises)</p>
          </div>
        </div>

        <div className="flex items-start md:items-center gap-4">
          <span className="font-semibold font-Nunito text-[12px] md:text-[16px]">Follow us</span>         
          <a href='https://www.facebook.com/annapoornamithai' target='_blank'><FaFacebook className="text-white" /></a>
          <a href='https://www.instagram.com/annapoornamithai/' target='_blank'><FaInstagram className="text-white"  /></a>
        </div>
      </div>

      <div className="container mx-auto lg:flex flex-col md:flex-row justify-between items-end gap-8 my-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-[12px] md:text-[24px] font-extrabold font-Nunito uppercase">Inventive Retail Traders PVT LTD</h3>
          <p className="opacity-80 mb-6 md:mb-0 text-[10px] md:text-[16px] font-semibold">11/113-1, Medical College East Gate, Asaripallam, Nagercoil-629201</p>
        </div>
        <div className="flex flex-col gap-4 mb-6 md:mb-0">
          <div className="flex items-center gap-2">
            <a href='' className="text-[12px] md:text-[16px] font-Nunito font-bold">Terms and conditions</a>
          </div>
          <div className="flex items-center gap-2">
          <a href='' className="text-[12px] md:text-[16px] font-Nunito font-bold">Privacy Policies</a>
          </div>
          <div className="flex items-center gap-2">
          <a href='' className="text-[12px] md:text-[16px] font-Nunito font-bold">Refund Policies</a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src='Landline.svg' className='w-[30px] md:w-[40px]' alt="Landline" />
            <div>
              <span className="text-[12px] font-bold font-Nunito">Contact<br /></span>
              <span className="text-[14px] font-extrabold font-Nunito">9600200484</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
          <img src='Landline.svg' className='w-[30px] md:w-[40px]' alt="Landline" />
            <div>
              <span className="text-[12px] font-bold font-Nunito">Mail Id<br /></span>
              <span className="text-[14px] font-extrabold font-Nunito">support@annapoornamithai.com</span>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-600 opacity-50 my-4" />

      <div className="text-center mt-8 text-sm opacity-80 font-Nunito text-[#E9DEC6]">
        © 2024 All rights reserved by Annapoorna Mithai
      </div>
    </footer>
  );
};

export default Footer;