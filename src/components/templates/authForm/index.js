"use client";

import Image from "next/image";
import { useState } from "react";

import ModalContainer from "@/components/partials/container/ModalContainer";

import { useGetUserData } from "@/core/services/queries";
import frame from "../../../../public/Images/frame.png";
// import login from "../../../../public/icons/login.svg"
import CheckOtp from "./CheckOtp";
import SendOtp from "./SendOtp";
import Login from "../../../../public/icons/Login";

function AuthForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobile,setMobile]=useState("")
  const [step, setStep] = useState(1);


const{data}=useGetUserData();
console.log(data);



  return (
    // className="w-auto h-auto"
    <>
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className=" hidden md:flex items-center gap-2 border-2 border-primary py-2 px-5 rounded-lg text-primary font-normal text-lg"
        >
          <Image src={frame} alt="پروفایل"  /> ورود <span>|</span> ثبت نام
        </button>
        <button onClick={() => setIsOpen(true)} className="md:hidden border border-primary p-2 rounded-lg">
            <Login className="w-auto h-auto"/>
            </button>
      
      {step === 1 && (
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
          <SendOtp setStep={setStep} setIsOpen={setIsOpen} mobile={mobile} setMobile={setMobile} />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
          <CheckOtp setStep={setStep} setIsOpen={setIsOpen} mobile={mobile}  />
        </ModalContainer>
      )}
      </div>
    </>
  );
}

export default AuthForm;
