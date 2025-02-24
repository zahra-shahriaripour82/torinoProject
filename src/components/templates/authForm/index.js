"use client";

import Image from "next/image";
import { useState } from "react";

import SendOtp from "./SendOtp";
import frame from "../../../../public/Images/frame.png";
import CheckOtp from "./CheckOtp";
import ModalContainer from "@/components/partials/container/ModalContainer";

function AuthForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  return (
    <>
      <div>
        <button
          onClick={() => setIsOpen(true)}
          className=" hidden md:flex items-center gap-2 border-2 border-primary py-2 px-5 rounded-lg text-primary font-normal text-lg"
        >
          <Image src={frame} alt="user-icon" /> ورود <span>|</span> ثبت نام
        </button>
      </div>
      {step === 1 && (
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
          <SendOtp setStep={setStep} setIsOpen={setIsOpen} />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
          <CheckOtp setStep={setStep} setIsOpen={setIsOpen} />
        </ModalContainer>
      )}
    </>
  );
}

export default AuthForm;
