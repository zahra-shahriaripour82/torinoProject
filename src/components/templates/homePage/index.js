
import ModalContainer from "@/components/partials/container/ModalContainer"
import SecondBanner from "./secondBanner"
import SearchForm from "../searchForm"

import TourList from "../TourList"
import Banner from "../banner"
import Whytorino from "../why torino"





function HomePage({data}) {
  return (
    <>
    <Banner/>
    <SearchForm />
    <TourList toursData={data}/>
    <ModalContainer/>
 <SecondBanner/>
 <Whytorino/>
    </>
  )
}

export default HomePage