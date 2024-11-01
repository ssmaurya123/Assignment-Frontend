import React from "react";
import logo from "../assets/logo.png";

const Product = () => {
  return (
    <div className="w-[573px] h-[392px] rounded-lg shadow-custom p-6 bg-white">
      <div className="flex items-center gap-2">
        <img src={logo} className="w-[36px] h-[30px]" />
        <p className="text-[#1A181E] font-semibold text-[20px] leading-[20px]">
          Your products
        </p>
        <div className="bg-[#146EB4] w-[14px] h-[14px] rounded-full flex items-center justify-center mt-[2px]">
          {" "}
          <p className="text-white text-xs text-center">✓</p>{" "}
        </div>
      </div>
      <hr className="w-[448px] border mt-4 border-[#D9D9D9]" />

      <div className="flex gap-2 items-center  mt-4 ">
        <p className="text-[#1A181E] font-medium text-[18px] leading-[20px]">
          Select the number of users
        </p>
        <div className="w-[16.67px] h-[16.67px] rounded-full border border-[#146EB4] flex justify-center items-center mt-[2px] pb-[2px]">
          <p className="text-[#146EB4] text-sm">i</p>
        </div>
      </div>

      <p className="text-[#808080] font-[400] text-[14px] leading-[20px] mt-1">
        The minimum amount is 1 user.
      </p>

      <div className="w-[257px] h-[36px] flex bg-white rounded-lg shadow-custom-sm items-center mt-3  border border-[#D0D5DD]">
        <div className="border-r w-[183px]">
          <p className="text-[#146EB4] p-2">1</p>
        </div>
        <div className="flex items-center justify-center  border-[#E5E7EB] w-[37px] h-[36px]">
          <button className=" text-[#9CA3AF]">-</button>
        </div>

        <div class="flex items-center justify-center border-l border-[#E5E7EB] w-[37px] h-[36px]">
          <button className=" text-[#9CA3AF]">+</button>
        </div>
      </div>

      <p className="text-[#1A181E] font-[500] text-[18px] leading-[20px] mt-3">
        Select a subscription cycle
      </p>

      <div className="flex mt-4 gap-2">
        <div className=" w-[253px] h-[136px] border  rounded-lg border-[#146EB4] p-6">
          <p className="text-[#1A181E] font-normal text-[16px] leading-[20px] pb-2">
            Monthly
          </p>
          <p className="text-[#1A181E] font-bold text-[32px] leading-[20px] pb-2">
            ₹1300
          </p>
          <p className="text-[#808080] font-normal text-[14px] leading-[20px]">
            /month/user, billed monthly
          </p>
        </div>
        <div className=" w-[253px] h-[136px] border  rounded-lg border-[#D9D9D9] p-6">
          <p className="text-[#1A181E] font-normal text-[16px] leading-[20px] pb-2">
            Yearly
          </p>
          <p className="text-[#1A181E] font-bold text-[32px] leading-[20px] pb-2">
            ₹1300
          </p>
          <p className="text-[#808080] font-normal text-[14px] leading-[20px]">
            /month/user, billed monthly
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;





