import React, { useState, useEffect } from "react";
import VerificationSuccess from '../components/VerificationSuccess'

const OTPVerification = ({ setShowOTPVerification, onVerificationSuccess }) => {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setCanResend(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleOTPChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      setError(""); // Clear error when user types

      // Move focus to the next input
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleVerify = async () => {
    const otpString = otp.join("");
    if (otpString.length !== 6) {
      setError("Please enter all 6 digits of the OTP.");
      return;
    }

    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsVerified(true);
      
      onVerificationSuccess();
      console.log(otpString);
    } catch (error) {
      console.error("Verification failed:", error);
      setError("Verification failed. Please try again.");
    }
  };

  const handleResendOTP = () => {
    console.log("Resending OTP");
    setTimer(60);
    setCanResend(false);
    setError(""); // Clear error when resending OTP
  };

  if (isVerified) {
    return <VerificationSuccess  onClose={() => setIsVerified(false)} />;
  }

  return (
    <div className="relative w-[400px] h-auto bg-white rounded-xl p-10 shadow-lg">
      <img
        src="closeoverlay.svg"
        alt="Close"
        onClick={() => setShowOTPVerification(false)}
        className="absolute top-[-17px] right-4 cursor-pointer"
      />
      <h1 className="font-Nunito text-[16px] font-bold text-[#1E1E1E] mb-1">
        Verify OTP
      </h1>
      <p className="font-Nunito text-[12px] text-[#909090] mb-4">
        Please enter the OTP sent to the mobile number you have entered.
      </p>
      <div className="flex justify-between mb-4 w-[40px] h-[48px] gap-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            value={digit}
            onChange={(e) => handleOTPChange(index, e.target.value)}
            className="w-10 h-12 text-center border-2 border-[#FAAF40] rounded-md font-bold text-lg"
            maxLength="1"
          />
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <p className="font-Nunito text-[12px] text-[#909090] mb-4">
        Didn't receive OTP?{" "}
        {canResend ? (
          <button
            onClick={handleResendOTP}
            className="text-[#FAAF40] cursor-pointer font-semibold"
          >
            Resend OTP
          </button>
        ) : (
          <span className="text-[#FAAF40]">
            Resend OTP in {timer}s
          </span>
        )}
      </p>
      <button
        className="bg-[#332D21] text-white font-bold py-3 px-4 rounded-lg mt-4 w-full"
        onClick={handleVerify}
      >
        Proceed to verify
      </button>
    </div>
  );
};

export default OTPVerification;