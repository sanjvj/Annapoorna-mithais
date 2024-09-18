import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#332D21] text-white py-8 px-8">
      <div className="container mx-auto flex flex-col md:items-center md:flex-row justify-between gap-8">
        <div className="flex items-center gap-8">
        
          <img
            onClick={()=>{navigate('/')}}
            src="Logo2.svg"
            alt="Logo"
            className="w-16 h-16 cursor-pointer"
          />
          <div className="border-l border-white opacity-20 h-16"></div>
          <div className="flex flex-col">
            <a href="fssai.pdf" target="__blank">
              <img
                src="fssai.png"
                alt="FSSAI Logo"
                className="w-12 md:w-20 mb-2 cursor-pointer"
              />
            </a>
            <p className="opacity-80 text-[12px] md:text-[16px] font-Nunito font-semibold">
              12418012002076 (Annapoorna Mithai)
            </p>
          </div>
        </div>

        <div className="flex items-start md:items-center gap-4">
          <span className="font-semibold font-Nunito text-[12px] md:text-[16px]">
            Follow us
          </span>
          <a href="https://www.facebook.com/annapoornamithai" target="_blank">
            <FaFacebook className="text-white" />
          </a>
          <a href="https://www.instagram.com/annapoornamithai/" target="_blank">
            <FaInstagram className="text-white" />
          </a>
        </div>
      </div>

      <div className="container mx-auto lg:flex flex-col md:flex-row justify-between items-end gap-8 my-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-[12px] md:text-[24px] font-extrabold font-Nunito uppercase">
            Annapoorna Mithai
          </h3>
          <a
            href="https://www.google.com/maps/place/Annapoorna+Mithai/@9.918965,78.0917162,17z/data=!3m1!4b1!4m6!3m5!1s0x3b00cf7166e1925b:0x95a169e6749dd039!8m2!3d9.9189597!4d78.0942911!16s%2Fg%2F11c1q9r_8m?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
            target="__blank"
          >
            {" "}
            <p className="opacity-80 mb-6 md:mb-0 text-[10px] md:text-[16px] font-semibold">
              12/2, Ram Nagar, Bypass Road, Near Aparna Tower, Madurai, Tamil
              Nadu 625010
            </p>
          </a>
        </div>
        <div className="flex flex-col gap-4 mb-6 md:mb-0">
          <div className="flex items-center gap-2" >
            <p onClick={()=>navigate('/terms')}
            
              className="text-[12px] md:text-[16px] font-Nunito font-bold cursor-pointer"
            >
              Terms and conditions
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p
              onClick={()=>{navigate('/privacy')}}
              className="text-[12px] md:text-[16px] font-Nunito font-bold cursor-pointer"
            >
              Privacy Policies
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p
              onClick={()=>{navigate('/refund')}}
              className="text-[12px] md:text-[16px] font-Nunito font-bold cursor-pointer"
            >
              Refund Policies
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img
              src="Landline.svg"
              className="w-[30px] md:w-[40px]"
              alt="Landline"
            />
            <div>
              <span className="text-[12px] font-bold font-Nunito">
                Contact
                <br />
              </span>
              <span className="text-[14px] font-extrabold font-Nunito">
                9600200484
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[30px] h-[40px] md:w-[40px] md:h-[40px] rounded-full bg-[#E9DEC6] items-center flex justify-center">
            <IoMdMail color="#806F4F"></IoMdMail>
            </div>
            <div>
              
              <span className="text-[12px] font-bold font-Nunito ">
                Mail Id
                <br />
              </span>
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtsnXPCLDBmllQPTjJxHSdcdcGVDMqfPNtgdWhXsZLgzcKDxGJjbXKcLmTXqDwCDvSqkBl"
                target="__blank"
              >
              <span className="text-[14px] font-extrabold font-Nunito cursor-pointer">
                support@annapoornamithai.com
              </span></a>
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
