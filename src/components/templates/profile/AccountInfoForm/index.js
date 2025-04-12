"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

function AccountInformation({ data }) {
  const [isEdit, setIsEdit] = useState(false);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const emailHandler = (data) => {
    console.log(data);
  };
  const canselHandlre = () => {};
  return (
    <form onSubmit={handleSubmit(emailHandler)} className="border-2 rounded-[10px] text-sm md:text-xl">
      <div className="flex items-baseline justify-between p-4">
        <h4 className=" font-normal">{isEdit ? "ویرایش اطلاعات حساب کاربری" : "اطلاعات حساب کاربری"}</h4>
        {!isEdit && (
          <button className="text-complementary "
            onClick={() => {
              setIsEdit(true);
            }}
          >
            ویرایش ایمیل
          </button>
        )}
      </div>

      {isEdit ? (
        <>
          <div className="p-4">
            <div  className="flex flex-col gap-4">
              <div className="flex justify-between md:justify-start ">
                <p className="md:pl-6 font-medium ">شماره تلفن:</p>
                <p className="font-light">{data?.data.mobile || "-"}</p>
              </div>
              <div className="">
                <input type="email" placeholder="آدرس ایمیل" {...register("email")} className="w-full border border-border rounded-md p-2" />
                {errors.email && <p>{errors.email.message}</p>}
                <div className="flex gap-8 mt-4 ">
                  <button type="onSubmit" className="text-white bg-primary rounded-md p-2 w-36 ">تایید</button>
                  <button onClick={canselHandlre} className="text-primary rounded-md border-primary border-2 p-2 w-36 ">انصراف</button>
                </div > 
              </div> 
            </div>
          </div>
        </>
      ) : (
        <div className="p-4">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-sm md:text-xl">
              <p>شماره تلفن</p>
              <p>{data?.data.mobile || "-"}</p>
            </div>
            <div className="flex justify-between">
              <p>ایمیل</p>
              <p>{data?.email || "-"}</p>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}

export default AccountInformation;
