import { PulseLoader } from "react-spinners";

function PeymentModal() {
   
    
    return (
      <div className="fixed top-0 right-0 w-svw h-svh bg-black/10 z-10 backdrop-blur-sm">
      <div className="w-full h-full flex items-center justify-center">
        <div className="min-w-10 min-h-10 ">
          <div className=" felx w-[358px] h-[162px] md:w-[461px] md:h-[162px] bg-background shadow-lg rounded-lg">
          {/* <ClipLoader color="#36d7b7" size={30} /> */}
          <PulseLoader color="#28a745" size={15} className="text-center pt-8"/>
            <p className="pt-8 pb-9 text-sm md:text-lg text-center "> درحال انتفال به صفحه پرداخت</p>
            
          
              {/* <button  onClick={onCansel} className=" md:ml-9 ml-7 bg-slate-400 w-16 h-8  rounded-lg">خیر</button>
              <button onClick={onConfirm}  className="bg-rose-600 md:mr-9  mr-7 w-16 h-8 rounded-lg  " >تایید</button>
           */}
          </div>
        </div>
      </div>
    </div>
    )
  }
  
  export default PeymentModal