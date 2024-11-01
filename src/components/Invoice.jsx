import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const Invoice = () => {
  return (
    <div className="w-[573px] h-[409px] rounded-lg shadow-custom p-6 bg-white">
      <div className="flex gap-2 items-center mb-[13px] ">
        <h3 className="text-[#1A181E] font-semibold text-[20px] leading-[20px]">
          Invoice Details
        </h3>
        <div className="w-[16.67px] h-[16.67px] rounded-full border border-[#146EB4] flex justify-center items-center mt-[2px] pb-[2px]">
          <p className="text-[#146EB4] text-sm">i</p>
        </div>
      </div>

      <div>
        <p className="font-normal text-[14px] leading-[22.4px] mb-1 ">
          Address Line 1
        </p>
        <input
          type="text"
          placeholder="Eg: HSR Layout"
          className="border-[1px] border-[#D9D9D9] rounded-md w-[416px] h-[40px] p-2 mb-4  text-[#989898]"
        />
      </div>
      <div>
        <p className="font-normal text-[14px] leading-[22.4px] mb-1 ">
          Address Line 2 (Landmark)
        </p>
        <input
          type="text"
          placeholder="Eg: near apollo"
          className="border-[1px] border-[#D9D9D9] rounded-md w-[416px] h-[40px] p-2 mb-4  text-[#989898]"
        />
      </div>
      <div>
        <p className="font-normal text-[14px] leading-[22.4px] mb-1 ">
          Pincode
        </p>
        <input
          type="number"
          placeholder="Eg: 5784"
          className="border-[1px] border-[#D9D9D9] rounded-md w-[416px] h-[40px] p-2 mb-4  text-[#989898]"
        />
      </div>

      <div>
        <p className="font-normal text-[14px] leading-[22.4px] mb-1 ">
          Office working location
        </p>
        <div className=" w-[320px] h-[44px] border-[1px] border-[#D0D5DD]  p-2 rounded flex justify-around items-center ">
          <p className="font-normal w-[264px] h-6 text-base text-[#989898]">
            Select state
          </p>
          <div className="w-5 h-5 pt-1">
            <FaChevronDown className="text-[#808080]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
