import React from "react";

const Header = () => {
  return (
    <div className="w-screen h-[225px] bg-gradient-to-r from-[#86BAE3]/50 to-[#3180BD]/50 mt-[98px]">
      <p className="text-[#124974] font-semibold text-[24px] leading-[20px] pt-[18px] text-center">
        Complete Your Purchase
      </p>
      <div className="flex gap-8 mt-6 justify-center">
        <div >
        <p className="text-[#124974]">Your plan includes:</p>
        </div>
        <div className="flex gap-4 ">
        <div className="flex gap-1 items-center justify-center ">
          <div className="bg-[#146EB4] w-6 h-6 rounded-full flex items-center justify-center"> <p className="text-white text-center">✓</p> </div>
          <p className="text-[#1A181E] font-normal text-[16px] leading-[20px]  text-center pb-1">24/7 customer care</p>
        </div>
        <div className="flex gap-2 items-center justify-center ">
          <div className="bg-[#146EB4] w-6 h-6 rounded-full flex items-center justify-center"> <p className="text-white text-center">✓</p> </div>
          <p className="text-[#1A181E] font-normal text-[16px] leading-[20px]  text-center pb-1">24/7 customer care</p>
        </div>
        <div className="flex gap-2 items-center justify-center ">
          <div className="bg-[#146EB4] w-6 h-6 rounded-full flex items-center justify-center"> <p className="text-white text-center">✓</p> </div>
          <p className="text-[#1A181E] font-normal text-[16px] leading-[20px]  text-center pb-1">24/7 customer care</p>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Header;

