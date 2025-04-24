import {  useGetUserData } from "@/core/services/queries"
import Image from "next/image"
import Link from "next/link";



function Peyment({params:status}) {
    
  const {data}=useGetUserData();
    console.log(data);
    
    
    
if (status === "==success"){
    return (
        <div className="  flex  items-center justify-center mt-8 rounded-lg">

{/* w-full max-w-[1440px]  */}
    <div className="bg-gray-50  rounded-lg px-4 py-4 md:flex items-center justify-center grid  ">
       
 <Image  src={"/images/peyment.jpg"} alt="پرداخت موفق" width={300} height={300}/>
     
        <div className="grid gap-3 ">
     
        <p className="text-sm md:text-lg font-normal text-primary  ">{data?.data?.firstName || ""} عزیز پرداخت شما با موفقیت انجام شد.</p>

            <p>تور شما با موفقیت روز شد میتوانید جزئیات تور رو در پروفایل خود مشاهد ه کنید </p>
            <Link href={"/profile/my-tours"}>
            <p className="bg-primary text-center rounded-md p-3 text-white">مشاهده تور</p>
            </Link>
            <Link href={"/"}>
            <p className="bg-gray-200 text-center rounded-md p-3 text-black"> برگشت به صفحه اصلی</p>
            </Link>
        </div>
    </div>
    </div>
      )
}
 return(
    <div>zajra</div>
 )
}

export default Peyment