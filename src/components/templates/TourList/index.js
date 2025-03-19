import Link from "next/link";
import React from "react";
import TourCard from "../card";

function TourList({toursData}) {
    console.log(toursData);
   
  return (
    // <div className="min-h-[700px] max-w-[1440px] bg-slate-500  mx-auto mt-16 px-6 md:px-0">
    //   <Link href={"/"} ><h3 className="font-normal text-xl text-color ">همه تور  ها</h3></Link>
    //   <div className="mt-4 gird grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
    //     {toursData?.map((tour)=>(
    //         <TourCard key={tour.id} {...tour}/>
    //     ))}
        
    //   </div>
    // </div>
    <div className="min-h-[700px] max-w-[1440px] mx-auto mt-16 px-6 md:px-0">
    <Link className="text-2xl md:text-[32px]" href={"/"}>همه تورها</Link>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {toursData?.map((tour) => (
                <TourCard key={tour.id} {...tour} />
            ))}
        </div>
</div>
  );
}

export default TourList;
