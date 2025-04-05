import Link from "next/link"


function NotFoundTour() {
  return (

      <div className="mt-8  w-full h-full md:w-[600px] md:h-[300px]  mx-auto" >
        <div className=" bg-red-50  border border-red-700 rounded-xl py-4 px-12 mx-4">

        <p className=" text-center mt-1 text-red-600 text-base md:text-2xl"> تور مورد نظر یافت نشد!</p>
        <div className=" mx-auto mt-2 w-14 h-14 border-2 border-red-600 bg-white rounded-full items-center relative">

        <span className=" absolute text-[40px] text-red-600 right-4">x</span>
        </div>
        </div>
        <div className="py-2 md:px-2 px-1 bg-primary rounded-md w-fit mx-auto mt-4 text-white text-sm md:text-lg">

        <Link href={"/"}>بازگشت به صفحه اصلی</Link>
        </div>
      </div>
    
  )
}

export default NotFoundTour