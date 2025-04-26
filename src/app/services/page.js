import Image from "next/image"
import Link from "next/link"


function ServicesPage() {
  return (
    <>
   
    <div className="flex items-center  flex-col p-4 gap-3 bg-green-100   rounded-lg">
      <h3 className="md:text-lg text-base font-semibold">خدمات گردشگری تورینو</h3>
        <h5 className="md:text-lg font-semibold text-base text-primary" >رزرو آسان تورهای داخلی و خارجی با بهترین قیمت و خدمات اختصاصی</h5>
        <p className="md:text-lg text-sm font-normal ">ما در تورینو با سالها تجربه در زمینه گردشگری، انواع تورهای مسافرتی را با گارانتی بهترین قیمت و کیفیت به شما ارائه میدهیم.</p>
        </div>
    
        <div className="flex flex-wrap gap-3 mt-14 justify-center"> 
    <div className="bg-whitep-2 rounded-lg grid gap-3 p-4 border  shadow-md">
      {/* <div className="flex justify-between"> */}
   
      <Image src={"/icons/airplane.svg"} width={40} height={40} alt="airplan-icon" />
      <p className="font-medium  text-base text-primary">تورهای خارجی</p>  
      {/* </div> */}
<p className="text-text">تور اروپا، تور آسیای، تور ترکیه، تور دبی و...</p>
<Link href={"/"}>
<p className="text-primary ">مشاهده بیشتر </p>
</Link>
    </div>
    <div className="bg-white  rounded-lg grid gap-3 p-4 border  shadow-md">
      {/* <div className="flex justify-between"> */}
   
      <Image src={"/icons/bus.svg"} width={30} height={30} alt="airplan-icon" />
      <p className="font-medium  text-base text-primary ">تورهای داخلی</p>  
      {/* </div> */}
<p className="text-text"> تورهای طبیعتگردی، فرهنگی، تاریخی،  ...    </p>
<Link href={"/"}>
<p className="text-primary ">مشاهده بیشتر </p>
</Link>
    </div>
   

   
    <div className="bg-white rounded-lg grid gap-3 p-4 border  shadow-md">
      {/* <div className="flex justify-between"> */}
   
      <Image src={"/icons/routing-2.svg"} width={30} height={30} alt="airplan-icon" />
      <p className="font-medium text-primary text-base">تورهای ماجراجویی</p>  
      {/* </div> */}
<p className="text-text">اقیانوس ،کوهنوردی، غواصی، سافاری و..</p>
<Link href={"/"}>
<p className="text-primary ">مشاهده بیشتر </p>
</Link>
    </div>
    <div className="bg-white  rounded-lg grid gap-3 p-4 border  shadow-md">
      {/* <div className="flex justify-between"> */}
   
      <Image src={"/icons/map.svg"} width={20} height={20} alt="airplan-icon" />
      <p className="font-medium  text-base text-primary">تورهای VIP</p>  
      {/* </div> */}
<p className="text-text "> تورهای خصوصی با برنامه ریزی شخصی  ...</p>
<Link href={"/"}>
<p className="text-primary ">مشاهده بیشتر </p>
</Link>
    </div>
    </div>
    
<div>


</div>
      <div className="grid md:grid-cols-2 md:justify-start justify-center items-center ">
        <Image src={"/icons/animate.svg"} width={500} height={500} alt="animate"/>
        <div className="*:bg-gray-100 *:w-fit *:p-2 *:rounded-md *:font-medium *:mt-3 flex flex-col justify-center items-center md:justify-start ">
          <p > پشتیبانی ۲۴ ساعته قبل و بعد از سفر✅</p>
          <p>امکان پرداخت اقساطی برای برخی تورها✅</p>
          <p>مشاوره رایگان برای انتخاب بهترین مقصد✅</p>
          <p>تضمین بهترین قیمت با امکان مقایسه تورها✅</p>
          <p> برنامهریزی اختصاصی سفر برای گروهها و شرکتها✅</p>
        </div>
        </div>  
</>
  )
}

export default ServicesPage


