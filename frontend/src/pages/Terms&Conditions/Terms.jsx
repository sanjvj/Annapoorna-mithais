import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";
import FooterBar from "../../components/FooterBar";

const Terms = () => {

  const [cartItemCount, setCartItemCount] = useState(0);

  const updateCartItemCount = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = storedCart.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(count);
  };

  useEffect(() => {
    updateCartItemCount();
    window.addEventListener("storage", updateCartItemCount);

    return () => {
      window.removeEventListener("storage", updateCartItemCount);
    };
  }, []);
  return (
    <div>
      <Navbar cartItemCount={cartItemCount} />
      <Slider></Slider>
      <div className="m-8 lg:mx-auto lg:max-w-screen-xl items-center">
        <h1 className="mb-1 font-Nunito text-[24px] font-bold text-[#606060] text-center">
          Terms & Conditions
        </h1>
        <p className="mb-6 font-[400px] text-[14px] font-Nunito text-[#606060]">
          Welcome to the Annapoorna Mithai website. By accessing or using our
          website, you agree to comply with and be bound by the following Terms
          of Service. If you do not agree with these terms, please do not use
          our website.
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito">
            {" "}
            1. Changes to the Terms
          </span>
          <br></br> Annapoorna Mithai reserves the right to modify or replace
          these Terms of Service at any time. We will post the updated terms on
          our website, and the changes will be effective immediately. It is your
          responsibility to review these terms periodically for any changes.
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito">2. Use of the Website</span>
          <br></br> You agree to use our website for lawful purposes only. You
          must not use our website in any way that causes, or may cause, damage
          to the website or impairment of the availability or accessibility of
          the website. You must not use our website to copy, store, host,
          transmit, send, use, publish, or distribute any material which
          consists of (or is linked to) any spyware, computer virus, or other
          malicious software.
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito">3. Orders and Payment</span>
          <br></br> All orders placed through the Annapoorna Mithai website are
          subject to acceptance and availability. We reserve the right to cancel
          or refuse any order for any reason at any time. Prices for our
          products are subject to change without notice. Payment for orders must
          be made at the time of placing the order.
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito">
            4. Shipping and Delivery
          </span>
          <br></br> We strive to deliver products in a timely manner. However,
          delivery times are estimates and are not guaranteed. We are not
          responsible for any delays in delivery due to circumstances beyond our
          control, such as natural disasters, strikes, or transportation issues.
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito"> 5. Returns and Refunds</span>
          <br></br> Due to the perishable nature of our products, we do not
          accept returns. If you are not satisfied with your purchase, please
          contact our customer service team within 24 hours of receiving your
          order. We may offer a refund or replacement at our discretion.
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito">
            {" "}
            6. Intellectual Property
          </span>
          <br></br> All content on this website, including but not limited to
          text, graphics, logos, images, and software, is the property of
          Annapoorna Mithai or its content suppliers and is protected by
          applicable copyright laws. You may not reproduce, duplicate, copy,
          sell, resell, or exploit any portion of the website without express
          written permission from us.
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito">
            {" "}
            7. Limitation of Liability
          </span>
          <br></br> To the fullest extent permitted by law, Annapoorna Mithai
          shall not be liable for any direct, indirect, incidental, special, or
          consequential damages resulting from your use of, or inability to use,
          our website or products.
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito">8. Indemnification</span>
          <br></br> You agree to indemnify and hold Annapoorna Mithai, its
          affiliates, employees, and agents harmless from any claim, demand, or
          damage, including reasonable attorneys' fees, arising out of your
          breach of these Terms of Service or your violation of any law or the
          rights of a third party.
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito">9. Governing Law</span>
          <br></br> These Terms of Service shall be governed by and construed in
          accordance with the laws of [Your Country/State]. Any disputes arising
          under or in connection with these terms shall be subject to the
          exclusive jurisdiction of the courts of [Your Country/State].
        </p>
        <p className="mb-8 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito">
            10. Contact Information{" "}
          </span>
          <br></br>If you have any questions or concerns about these Terms of
          Service, please contact us at:
        </p>
        <p className="mb-2 text-[18px] font-Nunito text-[#606060] font-bold">
          Annapoorna Mithai
        </p>
        <p className="mb-2 font-bold text-[14px] font-Nunito text-[#606060]">
          Email :{" "}
          <span className="font-normal cursor-pointer">
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRtsnXPCLDBmllQPTjJxHSdcdcGVDMqfPNtgdWhXsZLgzcKDxGJjbXKcLmTXqDwCDvSqkBl"
              target="__blank"
            >
              support@annapoornamithai.com
            </a>
          </span>{" "}
        </p>
        <p className="mb-2 font-bold text-[14px] font-Nunito text-[#606060]">
          Mobile : <span className="font-normal">+919600200484</span>{" "}
        </p>
      </div>
      <Footer></Footer>
      <FooterBar cartItemCount={cartItemCount}></FooterBar>
    </div>
  );
};

export default Terms;
