import Link from "next/link";
import React from "react";
import TourCard from "../card";
import NotFoundTour from "./NotFoundTour";

function TourList({toursData}) {
  if (!toursData || toursData.length === 0) return <NotFoundTour/>;
    console.log(toursData); 
  return (
  
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
