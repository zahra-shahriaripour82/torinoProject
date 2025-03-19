
import ModalContainer from "@/components/partials/container/ModalContainer"
import SearchForm from "../searchForm"
import TourList from "../TourList"
import Banner from "../banner"




function HomePage({data}) {
  return (
    <>
    <Banner/>
    <SearchForm />
    <TourList toursData={data}/>
    <ModalContainer/>
 
    </>
  )
}

export default HomePage