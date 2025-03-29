import TourDetailPage from '@/components/templates/TourdDetailsPage/TourDetailPage'
import { serverFetch } from '@/core/services/http'


 async function TourList({ params }) {
    const tourData = await serverFetch(`tour/${params.id}`, null, {
        cache: "no-store",
      })
   
    
  return (
    <TourDetailPage tourData={tourData}/>
  )
}

export default TourList