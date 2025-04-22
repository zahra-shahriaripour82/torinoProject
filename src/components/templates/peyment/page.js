import {  useGetUserData } from "@/core/services/queries"
import Image from "next/image"
import Link from "next/link";



function Peyment({params:status}) {
    
  const {data}=useGetUserData();
    console.log(data);
    
    
    
if (status === "==success"){
    return (
        <div className=" flex items-center justify-center mt-12 rounded-lg">

       
    <div className="bg-gray-50  rounded-lg w-full max-w-[1440px] flex items-center justify-center">
       
 <Image  src={"/images/peyment.jpg"} alt="پرداخت موفق" width={400} height={400}/>
     <div>
        <p className="text-sm md:text-lg font-normal text-primary ">{data?.data?.firstName || ""} عزیز پرداخت شما با موفقیت انجام شد.</p>

     </div>
        <div className="grid">
            <p>تور شما با موفقیت روز شد میتوانید جزئیات تور رو در پروفایل خود مشاهد ه کنید </p>
            <Link href={"/profile/my-tours"}>
            <p>مشاهده تور</p>
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