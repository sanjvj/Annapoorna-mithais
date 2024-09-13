import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer";
import { useState,useEffect } from "react";
import FooterBar from "../../components/FooterBar";

const Privacy = () => {

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
      <Navbar cartItemCount={cartItemCount} />
      <Slider></Slider>
      <div className="m-8 lg:mx-auto lg:max-w-screen-xl items-center">
        <h1 className="mb-1 font-Nunito text-[24px] font-bold text-[#606060] text-center">
          Privacy Policy
        </h1>
        <p className="mb-2 font-bold text-[14px] font-Nunito text-[#606060]">
          Effective Date : <span className="font-normal">07-09-2024</span>{" "}
        </p>
        <p className="mb-6 font-[400px] text-[14px] font-Nunito text-[#606060]">
          Annapoorna Mithai is committed to protecting and respecting your
          privacy. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your information when you visit our website , place an
          order, or interact with us in any other way. Please read this policy
          carefully.
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito">
            {" "}
            1. Information We Collect
          </span>
          <br></br> We may collect and process the following types of
          information:
          <br></br>
          <span className="font-semibold">Personal Information:</span> Name,
          contact details (email address, phone number), payment information,
          and delivery address.
          <br></br>
          <span className="font-semibold">Order Information:</span> Details of
          the products you order, your order history, and any special requests
          or preferences.
          <br></br>
          <span className="font-semibold">Usage Data:</span> Information about
          how you use our website and services, including IP addresses, browser
          types, and browsing behavior.
          <br></br>
          <span className="font-semibold">Communication Data:</span> Records of
          your communications with us, including customer service interactions
          and feedback.
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito">
            2. How We Use Your Information
          </span>
          <br></br> We use your information for the following purposes:
          <br></br>
          <span className="font-semibold">To Process Orders:</span> To fulfill
          and manage your orders, including processing payments and arranging
          delivery.
          <br></br>
          <span className="font-semibold">To Improve Our Services:</span> To
          understand how you use our website and services and to enhance your
          experience.
          <br></br>
          <span className="font-semibold">To Communicate With You:</span> To
          send order confirmations, updates, promotional offers, and respond to
          your inquiries.
          <br></br>
          <span className="font-semibold">
            To Comply With Legal Obligations:
          </span>{" "}
          To meet any legal, regulatory, or contractual obligations.
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito">
            3. How We Share Your Information
          </span>
          <br></br> We may share your information in the following
          circumstances:
          <br></br>
          <span className="font-semibold">With Service Providers:</span>{" "}
          Third-party vendors who assist us in operating our website, processing
          payments, or delivering products. These parties are contractually
          obligated to protect your information and use it only for the purposes
          for which it was shared.
          <br></br>
          <span className="font-semibold">For Legal Reasons:</span> If required
          by law or to protect our rights, property, or safety, or that of our
          customers or others.
          <br></br>
          <span className="font-semibold">In Business Transfers:</span> In
          connection with any merger, acquisition, or sale of all or a portion
          of our business, where your information may be transferred as part of
          the transaction.
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito">4. Data Security</span>
          <br></br> We implement reasonable technical and organizational
          measures to protect your personal information from unauthorized
          access, disclosure, alteration, or destruction. However, no method of
          transmission over the internet or electronic storage is 100% secure,
          so we cannot guarantee absolute security.
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito"> 5. Your Rights</span>
          <br></br> Depending on your location, you may have certain rights
          regarding your personal information, including:
          <br></br>
          <span className="font-semibold">Access:</span> You can request access
          to the personal information we hold about you.
          <br></br>
          <span className="font-semibold">Correction:</span> You can request
          correction of any inaccurate or incomplete information.
          <br></br>
          <span className="font-semibold">Deletion: </span>You can request
          deletion of your personal information, subject to legal and
          contractual obligations.
          <br></br>
          <span className="font-semibold">Objection:</span> You can object to
          our processing of your information for certain purposes.
          <br></br>
          <span className="font-semibold">Withdrawal of Consent:</span> If we
          rely on your consent for processing, you can withdraw it at any time.
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito">
            {" "}
            6. Cookies and Tracking Technologies
          </span>
          <br></br> We use cookies and similar tracking technologies to enhance
          your experience on our website. Cookies help us remember your
          preferences and understand how you interact with our site. You can
          manage your cookie preferences through your browser settings.
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito"> 7. Third-Party Links</span>
          <br></br> Our website may contain links to third-party sites. We are
          not responsible for the privacy practices or content of such sites.
          Please review the privacy policies of any third-party sites you visit.
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito">
            8. Changes to This Privacy Policy
          </span>
          <br></br> We may update this Privacy Policy from time to time to
          reflect changes in our practices or legal requirements. Any changes
          will be posted on this page, and the revised policy will be effective
          as of the date it is posted.
        </p>
        <p className="mb-2 font-[400px] text-[14px] font-Nunito text-[#606060]">
          <span className="font-bold font-Nunito">9. Contact Us</span>
          <br></br> If you have any questions or concerns about this Privacy
          Policy or our data practices, please contact us at:
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

export default Privacy;
