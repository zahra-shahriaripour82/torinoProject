import Calender from "../../../../public/icons/Calender";
import Global from "../../../../public/icons/Global";
import Location from "../../../../public/icons/Location";

function SearchForm() {
  return (
    <div className="w-full  md:w-fit mt-6 mx-auto p-4 ">
      <h2 className="text-center text-3xl font-medium text-[#595959]">
        <span className="text-primary">تورینو</span> برگزار کننده بهترین تور های
        داخلی و خارجی
      </h2>

      <form className="relative bg-white border p-4 mt-5 rounded-3xl  ">
        <div className="grid  grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative">
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Location className="w-5 h-5 text-gray-500" />
            </div>
            <select className="w-full  border rounded-xl p-2 "></select>
          </div>
          <div className="relative">
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Global className="w-5 h-5 text-gray-400" />
            </div>
            <select className="w-full py-2 px-10 border rounded-xl p-2 "></select>
          </div>
          <div className="relative col-span-2 md:col-span-1 border px-3 py-6 rounded-lg md:w-fit">
            <div className="absolute right-3 top-1/2 -translate-y-1/2 mx-auto">
              <Calender className="h-5 w-5 text-rose-800 bg-primary" />
            </div>
          </div>

          <button className=" w-full h-full col-span-2 md:col-span-1 bg-primary text-white px-4 py-2 rounded-2xl  hover:bg-primary/90 md:mr-2 ">
            جستجو
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
