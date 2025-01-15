"use client";

import DashNav from "../Components/DashNav";
import Image from "next/image";
import heart_img from "@public/heart2_.png";
import { RiSpeakFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
export default function Testing() {
  const router = useRouter();
  function back_to_selection() {
    router.push("/");
  }
  return (
    <>
      <div className="flex h-screen w-full bg-mainBg">
        <DashNav />
        <div className="flex flex-wrap h-screen w-3/4 bg-green-500">
          <div className="flex justify-start h-16 w-full bg-blue-900 p-2 relative ">
            This is the testing area
            <div
              onClick={back_to_selection}
              className="flex justify-center items-center h-12 w-16  absolute top-1.5
       right-3 border-solid border-4 border-bordBG cursor-pointer"
            >
              <label
                onClick={back_to_selection}
                className="flex  cursor-pointer  text-4xl text-purpBG font-medium"
              >
                G
              </label>
            </div>
          </div>
          <div className="flex flex-row h-72 w-full bg-blue-700">
            <div className="flex flex-row h-full w-1/2 bg-red-400 gap-x-4 p-3">
              <div className="flex flex-col h-full w-1/2 gap-y-4">
                <div className="flex flex-col h-1/2 w-full  border border-[1px] border-purpBG rounded-lg ">
                  <label className="flex justify-center items-center pt-4 h-2/4 w-full  text-4xl text-white font-abc font-bold">
                    20+
                  </label>
                  <label className="flex justify-center items-center h-1/4 w-full text-sm text-bordBG font-abc font-light">
                    Completed Projects
                  </label>
                  <label className="flex p-1 pl-11 h-1/4 w-full  text-sm text-bordBG font-abc font-light">
                    View All {">>>"}
                  </label>
                </div>
                <div className="flex flex-col h-1/2 w-full  border border-[1px] border-purpBG rounded-lg">
                  <label className="flex justify-center items-center pt-4 h-2/4 w-full  text-4xl text-white font-abc font-bold">
                    5+
                  </label>
                  <label className="flex justify-center items-center h-1/4 w-full text-sm text-bordBG font-abc font-light">
                    Year's Programming
                  </label>
                </div>
              </div>
              <div className="flex flex-col h-full w-1/2  gap-y-4">
                <div className="flex flex-col h-1/2 w-full  border border-[1px] border-purpBG rounded-lg">
                  <label className="flex justify-center items-center pt-4 h-2/4 w-full  text-4xl text-white font-abc font-bold">
                    10+
                  </label>
                  <label className="flex justify-center items-center h-1/4 w-full text-sm text-bordBG font-abc font-light">
                    Completed Certifications
                  </label>
                  <label className="flex p-1 pl-6 h-1/4 w-full  text-sm text-bordBG font-abc font-light">
                    View All {">>>"}
                  </label>
                </div>
                <div className="flex flex-col h-1/2 w-full  border border-[1px] border-purpBG rounded-lg">
                  <label className="flex justify-center items-center pt-4 h-2/4 w-full  text-4xl text-white font-abc font-bold">
                    30+
                  </label>
                  <label className="flex justify-center items-center h-1/4 w-full text-sm text-bordBG font-abc font-light">
                    Acquired Skills
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col  h-full w-1/2   p-3">
              <div className="h-16 w-full mb-2  border border-[1px] border-purpBG rounded-lg">
                <label className="flex justify-center items-center  h-full w-full  text-3xl text-bordBG font-abc font-medium">
                  My Resume
                </label>
              </div>

              <div className="flex flex-col h-ex w-full   border border-[1px] border-purpBG rounded-lg">
                <label className="flex p-4 pt-3 text-justify h-3/4  w-full  text-sm text-white font-abc font-light">
                  My expertise spans both creative web development and
                  data-driven solutions, combining technical skills with
                  analytical thinking to deliver impactful results. <br />
                  <br />
                  My expertise spans both creative web development and
                  data-driven solutions, combining technical skills with
                  analytical thinking to deliver impactful results.
                </label>

                <label className="flex p-4 pt-1 text-justify h-1/4 w-full  text-sm text-bordBG font-abc font-light">
                  Get In Touch {">>>"}
                </label>
              </div>
            </div>
          </div>
          <div className="flex h-72 w-full bg-stone-700">
            {/* `````````````````````Section 2``````````````````````````````````````` */}
            <div className="flex flex-row h-full w-full   gap-x-4 p-3 ">
              <div className="flex flex-col h-full w-1/2  border border-[1px] border-purpBG rounded-lg p-3">
                <div className=" flex justify-center items-center  text-2xl text-bordBG font-abc font-medium h-12 w-full mb-2  ">
                  Featured Project
                </div>

                <div className="flex h-ex w-full bg-black opacity-85 z-[1] rounded-xl">
                  <Image
                    src={heart_img}
                    alt="heart_img"
                    className=" object-cover h-full  rounded-xl"
                  />
                </div>
              </div>
              <div className="flex flex-col h-full w-1/2  border border-[1px] border-purpBG rounded-lg p-3">
                <div className="flex justify-center items-center  text-2xl text-bordBG font-abc font-medium h-12 w-full mb-2  ">
                  Endorsements
                </div>

                <div className="flex flex-col h-ex w-full  rounded-xl gap-y-1">
                  <div className="flex h-16 w-full    ">
                    <div className="flex justify-start h-full w-10  pt-5">
                      <RiSpeakFill className="ml-4 h-5 w-5 text-purpBG" />
                    </div>
                    <label className="h-full w-full  p-3 text-sm text-white font-abc font-light">
                      Geofrey is a talented and dedicated designer with a keen
                      eye for detail. He ...
                    </label>
                  </div>
                  <div className="flex h-16 w-full   ">
                    <div className="flex justify-start h-full w-10  pt-5">
                      <RiSpeakFill className="ml-4 h-5 w-5 text-purpBG" />
                    </div>
                    <label className="h-full w-full  p-3 text-sm text-white font-abc font-light">
                      Geofrey is a skilled data scientist with a sharp
                      analytical mind. We worked.
                    </label>
                  </div>
                  <div className="flex h-16 w-full   ">
                    <div className="flex justify-start h-full w-10  pt-5">
                      <RiSpeakFill className="ml-4 h-5 w-5 text-purpBG" />
                    </div>
                    <label className="h-full w-full  p-3 text-sm text-white font-abc font-light">
                      Geofrey is a skilled data scientist with a sharp
                      analytical mind. We worked.
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
