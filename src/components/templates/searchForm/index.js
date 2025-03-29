"use client";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DatePicker } from "zaman";
import QueryString from "qs";

import { DateToIso, flattenObject } from "@/core/utils/helper";
import Location from "../../../../public/icons/Location";
import Calender from "../../../../public/icons/Calender";
import { citiesList } from "@/core/constants/constants";
import { useGetTours } from "@/core/services/queries";
import Global from "../../../../public/icons/Global";
import useQuery from "@/core/hook/queri";

function SearchForm() {
  const { getQuery } = useQuery();
  const [query, setQuery] = useState();
  const router = useRouter();

  const {
    register,
   

    handleSubmit,
    control,
    reset ,
  } = useForm();
 
  const { data, refetch } = useGetTours(query);
  
  useEffect(() => {
    const originId = getQuery("originId");
    const destinationId = getQuery("destinationId");
 
    if (originId && destinationId)
      reset({ originId, destinationId });
    

  
  }, []);
  const submitHandler = (form) => {
    console.log(data);
    // setQuery(flattenObject(form))
    const query = QueryString.stringify(flattenObject(form));
    console.log(query);

    router.push(`/?${query}`);
    // refetch()
  };

  return (
    <div className="w-full md:w-fit  mx-auto p-4 mt-10 ">
      <h2 className="text-center md:text-[28px] font-medium text-[#595959] mb-8">
        <span className="text-primary">تورینو</span> برگزار کننده بهترین تور های
        داخلی و خارجی
      </h2>

      <form
        onSubmit={handleSubmit(submitHandler)}
        className="relative bg-white border   p-4  rounded-3xl  "
      >
        <div className="grid  grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative">
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Location className="w-5 h-5 text-gray-400" />
            </div>
            <select
              {...register("originId")}
              className="w-full  border rounded-xl py-2 px-10 md:border-none focus:ring-2 focus:ring-primary outline-none text-right appearance-none "
            >
              <option value="default">مبداء</option>
              {citiesList.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
          <div className="relative">
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Global className="w-5 h-5 text-gray-400" />
            </div>
            <select
              {...register("destinationId")}
              className="w-full  border rounded-xl py-2 px-10 md:border-none focus:ring-2 focus:ring-primary outline-none text-right appearance-none "
            >
              <option value="default">مقصد</option>
              {citiesList.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          <div className="relative col-span-2 md:col-span-1 border px-3 py-2 rounded-lg  md:w-fit ">
            <div className="absolute right-3 top-1/2 -translate-y-1/2 mx-auto">
              <Calender className="h-5 w-5 text-gray-400" />
            </div>
            <Controller
              control={control}
              name="date"
              render={({ field: { onChange } }) => (
                <DatePicker
                  round="x2"
                  accentColor="#28A745"
                  onChange={(e) => onChange({
                    startDate: e.from ? DateToIso(e.from) : null,
                    endDate: e.to ? DateToIso(e.to) : null
                  })}
                  // onChange={(e) =>
                  //   onChange({
                  //     startDate: DateToIso(e.from),
                  //     endDate: DateToIso(e.to),
                  //   })
                  // }
                  range
                  className="w-full"
                />
              )}
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
