import ModalContainer from "@/components/partials/container/ModalContainer";
import Close from "../../../../public/icons/Close";
import { isValidMobile } from "@/core/utils/validation";
import { useState } from "react";
import { useSendOtop } from "@/core/services/mutation";
import toast from "react-hot-toast";

function SendOtp({ setIsOpen, mobile, setMobile ,setStep}) {
  const [error, setError] = useState("");
  console.log(error);
  
  const {isPending,mutate}=useSendOtop();
  console.log(mobile);

  const submitHandler = (event) => {
    event.preventDefault();
    if(isPending) return ;
    if (!isValidMobile(mobile)) return setError("شماره معتبر وارد کنید!");
    setError("");
    mutate({mobile},
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          toast(data?.data?.code);
           setStep(2)
           console.log(data?.data?.code);
        },
        onError:(error)=>{
          console.log(error);
          
        }
      }
    )

  };
  return (
    <form
      onSubmit={submitHandler}
      className=" relative bg-background w-[358px] h-[361px] md:w-[561px] md:h-[362px] rounded-[20px] flex flex-col items-center justify-center shadow-xl"
    >
      <div
        onClick={() => setIsOpen(false)}
        className="absolute top-3 left-4 hover:text-red-800 "
      >
        <Close />
      </div>
      <h3 className=" font-semibold text-[22px] ">ورود به تورینو</h3>
      <div className="flex flex-col gap-2 mt-14">
        <label>شماره موبایل خود را وارد کنید </label>
        <input
          type="text"
          placeholder="0912***4253"
          dir="ltr"
          className={`p-2 rounded-md border border-border w-[278px] h-[54px] md:w-[491px] md:h-[54px] focus:outline-primary ${
            error && "focus:outline-red-500"
          }`}
          onChange={(e) => setMobile(e.target.value)}
          value={mobile}
        />
      </div>
      {!!error && <p className="text-rose-600 mt-2">{error}</p>}
      <button
        type="submit"
        className="w-[278px] h-[54px]  md:w-[491px] md:h-[54px] bg-primary p-2  rounded-md border-x border-border mt-12 text-background shadow-md font-medium text-lg"
      >
        ارسال کد تایید
      </button>
    </form>
  );
}

export default SendOtp;
