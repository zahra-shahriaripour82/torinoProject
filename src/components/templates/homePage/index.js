
import ModalContainer from "@/components/partials/container/ModalContainer"
import SearchForm from "../searchForm"
import TourList from "../TourList"
import Banner from "../banner"
import TourDetailPage from "../TourdDetailsPage"
import SecondBanner from "./secondBanner"




function HomePage({data}) {
  return (
    <>
    <Banner/>
    <SearchForm />
    <TourList toursData={data}/>
    <ModalContainer/>
 <SecondBanner/>
    </>
  )
}

export default HomePage