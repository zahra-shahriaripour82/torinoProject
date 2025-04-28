import Image from "next/image"


function AboutUsPage() {
  return (
   <div className="p-4">
    <h1 className="text-4xl text-center mb-10">تیم ما</h1>
    <div className="flex flex-wrap gap-3 justify-center  ">
    <div className=" flex  justify-start border rounded-xl items-center p-2">
      <div className="p-4  ">
<h1 className="font-medium md:text-xl text-base">سام رمضانی</h1>
<span className="text-primary font-semibold text-base ">مدیر</span>
<p className="text-gray-500 ">  مقاصد ناشناخته ، سفر ماجراجویانه، دنبال کشف فرهنگهای جدید .   </p>
      </div>
      <div className=" ">
        <Image src={"/images/p1.png"} width={200} height={200} alt="about-us"/>
      </div>
    </div>
    <div className=" flex justify-start border rounded-xl  items-center p-2">
      <div className="px-4 pb-10 ">
<h1 className="font-medium text-xl"> امیر فرشادی</h1>
<span className="text-primary font-semibold text-base">راهنما</span>
<p className="text-gray-500">  مقاصد ناشناخته ، سفر ماجراجویانه، دنبال کشف فرهنگهای جدید .   </p>
      </div>
      <div>
        <Image src={"/images/p4.png"} width={200} height={200} alt="about-us"/>
      </div>
    </div>
    <div className=" flex justify-start border rounded-xl  items-center p-2">
      <div className="px-4 pb-10 ">
<h1 className="font-medium text-xl"> امیر رضایی</h1>
<span className="text-primary font-semibold text-base">کارشناس</span>
<p className="text-gray-500">  مقاصد ناشناخته ، سفر ماجراجویانه، دنبال کشف فرهنگهای جدید .   </p>
      </div>
      <div>
        <Image src={"/images/p3.png"} width={200} height={200} alt="about-us"/>
      </div>
    </div>
    <div className=" flex justify-start border rounded-xl  items-center  p-2">
      <div className="px-4 pb-10 ">
<h1 className="font-medium text-xl"> سارا علوی</h1>
<span className="text-primary font-semibold text-base">راهنما</span>
<p className="text-gray-500">  مقاصد ناشناخته ، سفر ماجراجویانه، دنبال کشف فرهنگهای جدید .   </p>
      </div>
      <div>
        <Image src={"/images/p2.png"} width={200} height={200} alt="about-us"/>
      </div>
    </div>
    </div>
      
   </div>
  )
}

export default AboutUsPage