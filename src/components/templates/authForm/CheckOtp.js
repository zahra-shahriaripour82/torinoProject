"use client";
import OtpInput from "react-otp-input";

import ArrowLeft from "../../../../public/icons/Arrow-left";
import { useState } from "react";
import ModalContainer from "@/components/partials/container/ModalContainer";

function CheckOtp() {
  const[otp, setOtp]=useState()
  return (
 
    <form className=" relative bg-background w-[358px] h-[361px] md:w-[561px] md:h-[362px] rounded-[20px] flex flex-col items-center justify-center shadow-xl mt-10">
      <div className="absolute top-3 left-4 ">
        <ArrowLeft />
      </div>
      <h3 className="font-medium text-[28px]"> کد تایید را وارد کنید. </h3>
      <div className=" mt-8 mb-2 flex flex-col gap-2 ">
        <p className="font-medium   text-center mb-2 ">کد  تایید به شماره موبایل 09140457458 ارسال شد </p>
        <div style={{ direction: "ltr" }}>
        <OtpInput
        value={otp}
        onChange={setOtp}
          numInputs={6}
          containerStyle={{
            gap: "12px",
          }}
          inputStyle={{
            border: "1px solid silver",
            borderRadius: "6px",
            width: "47px",
            height: "47px",
            textAlign: "center",
            color: "black",
          
          }
        }
          renderInput={(props) => <input {...props}  />}
          shouldAutoFocus
        //  className="p-2 rounded-md border border-border w-[278px] h-[54px] md:w-[491px] md:h-[54px] ml-2"

        />
        </div>
      </div>
      <button type="submit" className="w-[278px] h-[54px]  md:w-[491px] md:h-[54px] bg-primary p-2  rounded-md border-x border-border mt-20 text-background shadow-md font-medium text-lg"> ورود به تورینو</button>
    </form>
   
  );
}

export default CheckOtp;
