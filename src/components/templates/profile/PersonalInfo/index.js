import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function PersonalInfo({ data }) {
    const [isEdit,setIsEdit]=useState(true)
     
    const{register,
        handleSubmit,
    
        formState: { errors },
    
        reset,}=useForm()
        const infoHanldler=(formData)=>{
    console.log(formData);
    
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
            <p>sam</p>
        </div>
        <div >
            <input {...register("lastName")} placeholder='  نام خانوادگی' className={`border-2 p-2 my-2 md:mx-1 rounded-md border-border w-full ${errors.lastName ? 'border-red-500' : ''} focus:outline-none focus:border-green-700`}/>
            <p>sam</p>
        </div>
        <div>
            <input {...register("nationalCode")} placeholder='کد ملی' className={`border-2 p-2 my-2 md:mx-1 rounded-md border-border w-full ${errors.firstName ? 'border-red-500' : ''}  focus:border-green-700 focus:outline-none `}/>
            <p>sam</p>
        </div>
       
       
        <div>
            <input {...register("birthDate")} type='date' className={`border-2 p-2 my-2 md:mx-1 rounded-md border-border w-full ${errors.birthDate ? 'border-red-500' : ''}  focus:border-green-700 focus:outline-none`}/>
            <p>sam</p>
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
        <p >نام ونام خانوادگی</p>
        <p className="font-medium">{data?.data.firstName || "زهرا شهریاری پور"}</p>
        </div>
        <div className='flex justify-between md:justify-start gap-3'>
        <p >  کدملی</p>
        <p className="font-medium" >{data?.data.nationalCode || "3060645914"}</p>
        </div>
    
   
        <div className='flex justify-between md:justify-start gap-3'>
        <p > جنسیت </p>
        <p className="font-medium">{data?.data.gender || "زن"}</p>
        </div>
        <div className='flex justify-between md:justify-start gap-3'>
        <p >تاریخ تولد  </p>
        <p className="font-medium">{data?.data.birthDate || "1382/01/31"}</p>
        </div>
    </div>
    </div>
)}
    </form>
  )
}

export default PersonalInfo