import React from "react";
import lock from "../assets/lock.png";
import shield from "../assets/shield.png";

const Summary = () => {
  return (
    <div className="w-[422px] h-[615px] rounded-lg p-6 bg-white shadow-custom">
      <p className="text-[#1A181E] font-semibold text-[20px] leading-[20px]">
        Summary
      </p>
      <hr className="w-[374px] border mt-4 border-[#D9D9D9]" />
      <p className="text-[#1A181E] font-medium text-[16px] leading-[20px] mt-4 ">
        Premium
      </p>
      <div className="flex justify-between mt-1">
        <p className="font-normal text-[#1A181E] text-[14px] leading-[20px] ">
          180 INR / employee / month
        </p>
        <p className="font-normal text-[#1A181E] text-[14px] leading-[20px]">
          ₹189
        </p>
      </div>

      <p className="font-medium text-[#146EB4] text-[14px] leading-[20px] mt-1">
        Change plan{" "}
      </p>

      <div>
        <p className="font-medium text-[#1A181E] text-[14px] leading-[20px] mt-1">
          Enter promo code
        </p>
        <hr className="w-[120px] border-[#1A181E]" />
      </div>
      <hr className="w-[374px] border mt-4 border-[#D9D9D9]" />

      <div className="flex justify-between mt-4">
        <p className="font-normal text-[#1A181E] text-[14px] leading-[20px] ">
          Subtotal
        </p>
        <p className="font-normal text-[#1A181E] text-[14px] leading-[20px]">
          ₹189
        </p>
      </div>
      <div className="flex justify-between mt-1">
        <p className="font-normal text-[#1A181E] text-[14px] leading-[20px] ">
          GST (18%)
        </p>
        <p className="font-normal text-[#1A181E] text-[14px] leading-[20px]">
          ₹189
        </p>
      </div>
      <hr className="w-[374px] border mt-4 border-[#D9D9D9]" />

      <div className="flex justify-between mt-2">
        <p className="font-semibold text-[#1A181E] text-[16px] leading-[20px] ">
          Total
        </p>
        <p className="font-semibold text-[#1A181E] text-[16px] leading-[20px]">
          ₹18912
        </p>
      </div>

      <button className="w-[375px] h-[48px] bg-[#146EB4] rounded-md pt-[12px] pr-[20px] pb-[12px] pl-[20px] mt-7">
        <div className="flex justify-center items-center gap-2">
          <img src={lock} className="w-6 h-6" />
          <p className="text-white font-medium text-base">Submit Purchase</p>
        </div>
      </button>

      <div className="flex justify-center items-center gap-2 mt-6">
        <img src={shield} className="w-6 h-6" />
        <p className="font-normal text-[#1A181E] text-[16px] leading-[20px] ">
          Safe & Secure Payment
        </p>
      </div>

      <div className="w-[375px] h-[140px] mt-6">
        <p className="font-normal text-[#808080] text-[12px] leading-[20px]">
          By purchasing, you accept the{" "}
          <span className="text-[12px] leading-[20px] font-normal text-[#146EB4]">
            Terms of Use
          </span>{" "}
          and acknowledge reading the{" "}
          <span className="text-[12px] leading-[20px] font-normal text-[#146EB4]">
            Privacy Policy
          </span>
          . You also agree to auto renewal of your yearly subscription for
          US$136.99, which can be disabled at any time through your account. Any
          eligible tax exemptions will be applied when you're charged for your
          next renewal payment. Your card details will be saved for future
          purchases and subscription renewals.
        </p>
      </div>
    </div>
  );
};

export default Summary;
