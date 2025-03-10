"use client"
import { citiesList } from "@/core/constants/constants";

import { DatePicker } from 'zaman';
// import DatePicker from "react-multi-date-picker";
// import persian_fa from "react-date-object/locales/persian_fa";
// import persian from "react-date-object/calendars/persian";
// import InputIcon from "react-multi-date-picker/components/input_icon";
// import "react-multi-date-picker/styles/colors/green.css";

import Calender from "../../../../public/icons/Calender";
import Global from "../../../../public/icons/Global";
import Location from "../../../../public/icons/Location";
function SearchForm() {
  return (
    <div className="w-full md:w-fit  mx-auto p-4 mt-10 ">
      <h2 className="text-center md:text-[28px] font-medium text-[#595959] mb-8">
        <span className="text-primary">تورینو</span> برگزار کننده بهترین تور های
        داخلی و خارجی
      </h2>

      <form className="relative bg-white border   p-4  rounded-3xl  ">
        <div className="grid  grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative">
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Location className="w-5 h-5 text-gray-400" />
            </div>
            <select className="w-full  border rounded-xl py-2 px-10 md:border-none focus:ring-2 focus:ring-primary outline-none text-right appearance-none ">
            <option value="default">مبداء</option>
              {citiesList.map((city) => (
                <option key={city.id} value={city.id} >{city.name}</option>
              ))}
            </select>
          </div>
          <div className="relative">
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Global className="w-5 h-5 text-gray-400" />
            </div>
            <select className="w-full  border rounded-xl py-2 px-10 md:border-none focus:ring-2 focus:ring-primary outline-none text-right appearance-none ">
            <option value="default">مقصد</option>
              {citiesList.map((city) => (
                <option key={city.id} value={city.id} >{city.name}</option>
              ))}
            </select>
          </div>

          <div className="relative col-span-2 md:col-span-1 border px-3 py-2 rounded-lg  md:w-fit ">
            <div className="absolute right-3 top-1/2 -translate-y-1/2 mx-auto">
              <Calender className="h-5 w-5 text-gray-400" />
            </div>
            <DatePicker
                  round="x2"
                  accentColor="#28A745"
                  // onChange={(e) => onChange({ 
                  //   startDate: e.from ? DateToIso(e.from) : null, 
                  //   endDate: e.to ? DateToIso(e.to) : null 
                  // })}
                  range
                  className="w-full"
                />
          </div>

          <button className=" w-full h-full col-span-2 md:col-span-1 bg-primary text-white px-4 py-2 rounded-xl   hover:bg-primary/90 md:mr-2 ">
            جستجو
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
