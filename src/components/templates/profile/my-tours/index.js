"use client"
import { useGetUserTours } from "@/core/services/queries"
import SunFog from "../../../../../public/icons/SunFog";
import Image from "next/image";
import { DateToPersianWeek ,ToPersianNum} from "@/core/utils/helper";


function MyToursPage() {
    const {data,isPending}=useGetUserTours();
   console.log(data);
   
    
  return (
   <div className="border border-border rounded-xl">
   {data?.data?.map((tour)=>(
    <div key={tour.id} className="  p-4" >
      <div className="border border-border rounded-lg p-4">

      
<div className="flex  pb-4 justify-between md:mx-6">
  <div className="flex ">
  <SunFog/>
  <p className="text-sm md:text-lg">{tour.title}</p>
  </div>
  <div className="flex" >
  <Image src={"/icons/airplane.svg"} width={20} height={20} alt="حمل و نقل"/>
  <p className="text-sm md:text-lg">{tour.fleetVehicle  
  }</p>
</div>
</div>
<div className="grid col-span-2 gap-2">
  <div className="flex  gap-6 justify-between  md:mx-6">

    <p className="font-medium text-sm md:text-lg">
      {tour?.origin?.name} به {tour?.destination?.name}
    </p>
  <p className="text-sm text-black/60">
    {DateToPersianWeek(tour?.startDate)}
  </p>
  </div>
  <div className="flex   justify-between md:mx-6">
  <p className="font-medium text-sm md:text-lg"> تاریخ برگشت </p>
  <p className="text-sm text-black/60 ">{DateToPersianWeek(tour?.endDate)}</p>
  </div>
</div>
<div className="flex   pt-2 justify-start  md:mx-6 gap-4">
<p className="text-sm text-black/60 font-normal md:text-lg"> مبلغ پرداخت شده</p>
 <p className="font-normal " > {ToPersianNum(tour?.price)} تومان</p>
<div>
</div>
</div>
</div>
    </div>
   ))}
       

      
    </div>
  
  )
}

export default MyToursPage