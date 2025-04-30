"use client";
import { UsData, Visions } from "@/core/constants/constants";
import Image from "next/image";
import { useState } from "react";

function AboutUsPage() {
  const [extendedBox, setExtendedBox] = useState(null);
  const toggleExpand = (index) => {
    setExtendedBox(extendedBox === index ? null : index);
  };
  return (
    <>
      <div className="p-4">
        <h1 className="text-4xl text-center mb-10">تیم ما</h1>
        <div className="flex flex-wrap gap-3 justify-center  ">
          {UsData.map((data) => (
            <div
              key={data.id}
              className=" flex  justify-start border rounded-xl items-center p-2"
            >
              <div className="p-4 ">
                <h1 className="font-medium md:text-xl text-base">
                  {data.name}
                </h1>
                <span className="text-primary font-semibold text-base ">
                  {data.job}
                </span>
                <p className="text-gray-500 "> {data.title} </p>
              </div>
              <div className=" ">
                <Image src={data.src} width={200} height={200} alt="about-us" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* section visions */}
      <div className="my-16 border p-6 rounded-lg bg-gray-50">
        <h1 className="text-3xl font-semibold mb-8 text-center">چشم اندازها</h1>
        <div className="space-y-6">
          {Visions.map((vision, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div
                onClick={()=>toggleExpand(i)}
                className="flex items-center justify-between p-4 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={vision.icon}
                    width={36}
                    height={36}
                    alt={vision.title}
                    className="text-primary"
                  />
                  <p className="text-lg font-semibold text-primary">{vision.title}</p>
                  <Image src={"/icons/arrow-down.svg"} height={26} width={26} alt={vision.title}/>
                </div>
              
              </div>
              {extendedBox === i && (
                  <div className="p-4 bg-gray-100">
                    <p className="text-gray-700">{vision.description}</p>
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AboutUsPage;
