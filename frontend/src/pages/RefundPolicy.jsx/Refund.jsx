import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer";
import { useState,useEffect } from "react";
import FooterBar from "../../components/FooterBar";

const Refund = () => {
    const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItemCount, setCartItemCount] = useState(0);

  const updateCartItemCount = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = storedCart.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(count);
  };

  useEffect(() => {
    updateCartItemCount();
    window.addEventListener('storage', updateCartItemCount);

    return () => {
      window.removeEventListener('storage', updateCartItemCount);
    };
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <div className="m-8 lg:mx-auto lg:max-w-screen-xl items-center">
        <h1 className="mb-1 font-Nunito text-[24px] font-bold text-[#606060] text-center">
          Refund Policy
        </h1>

        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito">
            1. Eligibility for Refunds
          </span>
          <br></br> Refunds may be considered in the following situations:{" "}
          <br></br> - Damaged or Spoiled Products: If you receive a product that
          is damaged, spoiled, or otherwise inedible due to our fault, you may
          be eligible for a refund or replacement.<br></br> - Incorrect Order:
          If the items you received do not match the items listed in your order
          confirmation (wrong product, missing items, etc.), we will provide a
          replacement or issue a refund.<br></br> - Product Quality Issues: If
          the product does not meet the quality standards promised (stale, bad
          taste, etc.), and it is reported within the stipulated time frame, we
          will investigate and may offer a replacement or refund.
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito">2. Reporting an Issue</span>
          <br></br> To report an issue and request a refund or replacement,
          please contact our customer service team within 24 hours of receiving
          your order. Include the following information:<br></br> - Order number
          <br></br> - Photos of the product(s) showing the issue <br></br>-
          Description of the issue (e.g., damaged packaging, incorrect item,
          spoiled product, etc.)
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito">3. Refund Process</span>
          <br></br> Once we receive your request, our team will review it and
          notify you of the approval or rejection of your refund within 3-5
          business days. If your request is approved, we will initiate a refund
          to your original method of payment. The refund may take 5-10 business
          days to reflect in your account, depending on your payment provider.
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito">
            4. Non-Refundable Situations
          </span>
          <br></br> We do not offer refunds or replacements in the following
          cases:<br></br> - Change of Mind: We do not provide refunds for orders
          where the customer has simply changed their mind.<br></br> - Incorrect
          Address or Failure to Collect: If the order was not delivered due to
          an incorrect address provided by the customer or was not collected by
          the customer, we will not provide a refund.<br></br> - Late
          Complaints: Complaints made beyond *24 hours* after delivery will not
          be eligible for a refund or replacement.
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito"> 5. Exchange Policy</span>
          <br></br> In certain cases where a refund is not possible, we may
          offer an exchange of the product. The exchange will be subject to
          product availability and shipping considerations. Any additional
          shipping costs for exchanges will be borne by the customer unless it
          is due to our error.
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito"> 6. Cancellations</span>
          <br></br> Orders can only be canceled within *1 hour* of placing the
          order, provided the order has not been dispatched. To cancel an order,
          please contact our customer service team immediately. After this time,
          we cannot guarantee cancellation, and the order may be subject to our
          regular refund policy.
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito"> 7. Contact Us</span>
          <br></br>  If you have any questions about our Refund Policy, please contact us at:

        </p>
       
        <p className="mb-2 text-[14px] font-Nunito text-[#606060] font-bold">
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

export default Refund;
