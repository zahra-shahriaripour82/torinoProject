import Image from "next/image"


function TourDetailPage({tourData}) {
  // caculate duration day
  const start = new Date(tourData.startDate);
  const end = new Date(tourData.endDate);
  const day = Math.ceil((end - start) / (1000 * 60 * 60 * 24))
  const night=day-1;
  console.log(tourData);
  
  return (
    <div>
    <Image src={tourData.image} alt={tourData.title} width={330} height={220}/>
     <div>
      <h1>{tourData.title}</h1>
<p>{day}روز و {night} شب</p>
     </div>
    </div>
  )
}

export default TourDetailPage