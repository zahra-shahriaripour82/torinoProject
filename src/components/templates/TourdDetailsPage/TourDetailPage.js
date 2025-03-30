import Image from "next/image"
import userTick from "../../../../public/icons/user-tick.svg"
import map from "../../../../public/icons/map.svg"
import medal from "../../../../public/icons/medal-star.svg"


import routing from "../../../../public/icons/routing-2.svg"
import Calender from "../../../../public/icons/Calender"
import Profile from "../../../../public/icons/Profile"
import security from "../../../../public/icons/security.svg"

function TourDetailPage({tourData}) {

  
  // caculate duration day
  const start = new Date(tourData.startDate);
  const end = new Date(tourData.endDate);
  const day = Math.ceil((end - start) / (1000 * 60 * 60 * 24))
  const night=day-1;
  console.log(tourData);
  
const tourFeaturs=[{title:"مبدا",icon:"../../../public/icons/routing-2.svg",value:tourData.origin.name},
  {title:"تاریخ رفت",icon:"../../../public/icons/Calender",value:tourData.origin.name}
]

  return (
    <div>
    <Image src={tourData.image} alt={tourData.title} width={330} height={220}/>
     <div>
      <h1>{tourData.title}</h1>
<p>{day}روز و {night} شب</p>
     </div>
     <div>
      <div>
        <Image src={userTick} alt="user-tick" width={14} height={14}/>
        <p>تور از مبداء</p>

      </div>
      <div>
        <Image src={map} alt="map" width={14} height={14}/>
        <p> برنامه سفر </p>

      </div>
      <div>
        <Image src={medal} alt="medal" width={14} height={14}/>
        <p>  تضمین کیفیت  </p>

      </div>
     </div>
    </div>
  )
}

export default TourDetailPage