import ModalContainer from "@/components/partials/container/ModalContainer";
import Close from "../../../../public/icons/Close";

function SendOtp() {
  return (
  
    <form className=" relative bg-background w-[358px] h-[361px] md:w-[561px] md:h-[362px] rounded-[20px] flex flex-col items-center justify-center shadow-xl">
      <div onClick={()=> setOpen}className="absolute top-3 left-4 hover:text-red-800 " >
        <Close />
      </div>
      <h3 className=" font-semibold text-[22px] ">ورود به تورینو</h3>
      <div className="flex flex-col gap-2 mt-14">
        <label >شماره موبایل خود را وارد کنید </label>
        <input
          type="text"
          placeholder="0912***4253"
          dir="ltr"
          className="p-2 rounded-md border border-border w-[278px] h-[54px] md:w-[491px] md:h-[54px]"
        />
      </div>
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
