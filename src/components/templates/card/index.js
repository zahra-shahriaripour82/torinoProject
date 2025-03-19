import Image from "next/image";
import Link from "next/link";

function TourCard({ id, startDate, endDate, fleetVehicle, title, price, options, image }) {
  

  // caculate duration day
  const start = new Date(startDate);
  const end = new Date(endDate);
  const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  return (
    <div className="  group  overflow-hidden border rounded-xl flex flex-col hover:shadow-xl transition-shadow duration-300 cursor-pointer group  ">
      <Link href={"/"} >
        <Image src={image} alt={title}  width={400} height={250}/>
      </Link>
      <div className="flex flex-col gap-3 p-3 ">
        <Link href={`/tour/${id}`} className="border-b-2">
          <h3 className=" text-xl text-color font-normal ">{title}</h3>
          <div className=" text-[15px]  text-gray-700 pt-3 pb-3">
          مدت {duration} روز - {fleetVehicle === "Airplane" ? "هواپیما" : fleetVehicle === "Bus" ? "اتوبوس" : fleetVehicle === "SUV" ? "ماشین" : "ون"} - {options[1]}
          </div>
        </Link>
        <div className="flex items-center justify-between  ">
          <button className=" w-[99px] h-[29px]  rounded bg-primary text-background ">رزرو</button>
          <p> <span className="text-complementary">{price.toLocaleString('fa-ir')}</span> تومان</p>
        </div>
      </div>
    </div>

//     <div className="group flex flex-col overflow-hidden rounded-[10px] bg-white border hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
//     <Link href={`/tour/${id}`}  className="image-container">
//         <Image 
//             src={image} 
//             alt={title} 
//             width={400} 
//             height={250} 
//             quality={90} 
//             objectFit="cover"
//             className="rounded-md"
//         />
//     </Link>
//     <div className="flex flex-col gap-2 divide-y">
//         <Link href={`/tour/${id}`} className="flex flex-col gap-2 p-3">
//             <h3 className="text-[22px] font-medium">{title}</h3>
//             <div className="text-[15px] text-black/60">
//                 مدت {duration} روز - {fleetVehicle === "Airplane" ? "هواپیما" : fleetVehicle === "Bus" ? "اتوبوس" : fleetVehicle === "SUV" ? "ماشین" : "ون"} - {options[1]}
//             </div>
//         </Link>
//         <div className="flex items-center justify-between p-3">
//             {/* <ReserveButton id={id}/> */}
//             <button>vvvvv</button>
//             <span className="flex items-baseline gap-1 font-medium text-complementary text-lg">{price.toLocaleString('fa-IR')} <span className="text-text text-sm">تومان</span></span>
//         </div>
//     </div>
// </div>
  );
}

export default TourCard;
