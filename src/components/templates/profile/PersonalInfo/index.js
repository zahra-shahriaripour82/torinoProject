"use client"
import  { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { useUpdateAccountInfo } from '@/core/services/mutations';
import toast from 'react-hot-toast';
import { personalDataSchema } from '@/core/schema';
import { DateToPersian } from '@/core/utils/helper';
function PersonalInfo({ data }) {
    const [isEdit,setIsEdit]=useState(false)
     const {isPending,mutate}=useUpdateAccountInfo()
    const{register,
        handleSubmit,
    
        formState: { errors },
    
        reset,}=useForm({resolver: yupResolver(personalDataSchema),defaultValues:{
            firstName:"",
            lastName:"",
            nationalId:"",
            birthDate:"",
            gender:"",
        } 
})


 const infoHanldler=(formData)=>{
console.log("zahra");

    if (isPending) return 
    mutate(formData,{onSuccess:(data)=>{
        toast.success("اطلاعات شخصی شما با موفقیت ثبت شد")
    },onError:(error)=>{toast.error(error?.response?.data?.message || "خطا در ثبت اطلاعات شخصی")}})
    setIsEdit(false)
        }
        
  return (
    <form onSubmit={handleSubmit(infoHanldler)} className="border border-border rounded-[10px] text-sm md:text-xl mt-6">
        <div className="p-4 flex  items-baseline justify-between">
            <h4 className="font-medium">{isEdit?"ویرایش اطلاعات شخصی":"اطلاعات شخصی"}</h4>
            {!isEdit && <button className="text-complementary" onClick={()=>setIsEdit(true)}>ویرایش اطلاعات</button>}
        </div>
{isEdit?(
   <div className='p-4'>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
   
        <div >
            <input {...register("firstName")} placeholder='نام   ' className={`border-2 p-2 my-2 md:mx-1 rounded-md border-border w-full ${errors.firstName ? 'border-red-500' : ''} focus:outline-none focus:border-green-700`}/>
            {errors?.firstName && <p className='text-red-500 text-sm'>{errors?.firstName.message}</p>}
        </div>
        <div >
            <input {...register("lastName")} placeholder='  نام خانوادگی' className={`border-2 p-2 my-2 md:mx-1 rounded-md border-border w-full ${errors.lastName ? 'border-red-500' : ''} focus:outline-none focus:border-green-700`}/>
            {errors?.lastName && <p className='text-red-500 text-sm'>{errors?.lastName.message}</p>}
        </div>
        <div>
            <input {...register("nationalCode")} placeholder='کد ملی' className={`border-2 p-2 my-2 md:mx-1 rounded-md border-border w-full ${errors.firstName ? 'border-red-500' : ''}  focus:border-green-700 focus:outline-none `}/>
            {errors?.nationalCode && <p className='text-red-500 text-sm'>{errors?.nationalCode.message}</p>}
        </div>
       
       
        <div>
            <input {...register("birthDate")} type='date' className={`border-2 p-2 my-2 md:mx-1 rounded-md border-border w-full ${errors.birthDate ? 'border-red-500' : ''}  focus:border-green-700 focus:outline-none`}/>
            {errors?.birthDate && <p className='text-red-500 text-sm'>{errors?.birthDate.message}</p>}
        </div>
        <div>
            <select  {...register("gender")} className={`border-2 p-2 my-2 md:mx-1 rounded-md border-border w-full ${errors.gender ? 'border-red-500' : ''} focus:border-green-700`} >
                <option value={""}>جنیست خود را انتخاب کنید</option>
                <option value={"male"}>مرد</option>
                <option value={"female"}>زن</option>
            </select>
        </div>
        
    </div>
    <div className='flex flex-row-reverse gap-8 mt-4 border-t-2 border-border pt-4'>
        <button
              type="onSubmit"
              className="text-white bg-primary rounded-md p-2 w-36 "
            >
              تایید
            </button>
            <button
              onClick={() => setIsEdit(false)}
              className="text-primary rounded-md border-primary border-2 p-2 w-36 "
            >
              انصراف
            </button>
        </div>
    </div>
):(<div className="p-4">
<div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
<div className="flex justify-between md:justify-start gap-3">
        <p className="font-medium">نام </p>
        <p >{data?.data?.firstName || "-"}</p>
        </div>
    <div className="flex justify-between md:justify-start gap-3">
        <p className="font-medium">نام خانوادگی</p>
        <p >{data?.data?.lastName || "-"}</p>
        </div>
        <div className='flex justify-between md:justify-start gap-3'>
        <p className="font-medium">  کدملی</p>
        <p  >{data?.data?.nationalCode || "-"}</p>
        </div>
    
   
        <div className='flex justify-between md:justify-start gap-3'>
        <p className="font-medium"> جنسیت </p>
        <p >{data?.data?.gender === 'male' ? 'مرد' : data?.data?.gender === 'female' ? 'زن' : "-"}</p>
        </div>
        <div className='flex justify-between md:justify-start gap-3'>
        <p className="font-medium">تاریخ تولد  </p>
        <p >{data?.data?.birthDate ?DateToPersian(data?.data?.birthDate) : "-"}</p>
        </div>
    </div>
    </div>
)}
    </form>
  )
}

export default PersonalInfo