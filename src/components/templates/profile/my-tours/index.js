"use client"
import { useGetUserTours } from "@/core/services/queries"
import SunFog from "../../../../../public/icons/SunFog";
import Image from "next/image";
import { DateToPersian } from "@/core/utils/helper";


function MyToursPage() {
    const {data,isPending}=useGetUserTours();
   console.log(data);
   
    
  return (
   <div className="border border-border">
   {data?.data?.map((tour)=>(
    <div key={tour.id} className="border border-border p-4" >
<div className="flex justify-center md:justify-start gap-24 ">
  <div className="flex">
  <SunFog/>
  <p className="text-sm md:text-lg">{tour.title}</p>
  </div>
  <div className="flex" >
  <Image src={"/icons/airplane.svg"} width={20} height={20} alt="حمل و نقل"/>
  <p className="text-sm md:text-lg">{tour.fleetVehicle  
  }</p>
</div>
</div>
<div className="grid col-span-2 ">
  <div className="flex justify-between md:justify-start">

    <p >
      {tour?.origin?.name} به {tour?.destination?.name}
    </p>
  <p>
    {DateToPersian(tour?.startDate)}
  </p>
  </div>
  <p>{DateToPersian(tour?.endDate)}تاریخ برگشت</p>
</div>
<div className="divide-red-950">
<p>{tour?.price} مبلغ پرداخت شده</p>

 
<div>

</div>
</div>
    </div>
   ))}
       

      
    </div>
  
  )
}

export default MyToursPage