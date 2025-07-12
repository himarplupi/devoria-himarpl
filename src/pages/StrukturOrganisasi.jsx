import React from "react";
import { useState } from "react";
import AnimatedText from "../components/AnimatedText";
import AnimatedLongText from "../components/AnimatedLongText";
import AnimatedImage from "../components/AnimatedImage";
import Transition from "@/components/Transition";

export const StrukturOrganisasi = () => {
  const [activeSection, setActiveSection] = useState("be");

  return (
    <>
      {location.pathname === "/struktur" && <Transition />}

      <div id="strukturOrganisasi" className={`bg-white  flex flex-col items-center pb-[50px] ${location.pathname === "/struktur" ? "pt-20 lg:pt-[88px]" : "pt-10 lg:pt-[68px]"}`}>
        <div className="flex flex-col items-center lg:w-[1053px] md:w-[600px] w-[343px] gap-4">
          <AnimatedLongText className="lg:text-8xl text-center text-[40px] font-bold" text="Struktur Organisasi" />
          <div className="lg:w-[700px] md:w-[600px] w-[343px]">
            <AnimatedLongText
              className="text-base/[31px] text-center text-[#404040]"
              text="HIMARPL memiliki dua badan yang memiliki perannya masing-masing. <b>Badan Eksekutif (BE)</b> merupakan Lembaga Eksekutif HIMARPL yang berperan dalam pelaksanaan kegiatan kemahasiswaan. Sedangkan <b>Dewan Perwakilan (DP)</b> merupakan Lembaga Legislatif yang berperan sebagai Dewan Perwakilan Mahasiswa."
            />
          </div>
        </div>

        <div className="flex flex-row items-center justify-between lg:w-[1220px] lg:my-16 w-[343px] my-10">
          <div
            onClick={() => setActiveSection("be")}
            className={`cursor-pointer flex items-center justify-center lg:px-6 lg:py-4 p-2 lg:w-auto w-[80px] lg:rounded-2xl rounded-3xl transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-lg ${
              activeSection === "be" ? "bg-black" : "bg-white border-2"
            }`}
          >
            <p className={`lg:block hidden font-semibold text-base/[24px] ${activeSection === "be" ? "text-white" : "text-black"}`}>Badan Eksekutif</p>
            <p className={`lg:hidden font-semibold text-base/[24px] ${activeSection === "be" ? "text-white" : "text-black"}`}>BE</p>
          </div>
          <div
            onClick={() => setActiveSection("dp")}
            className={`cursor-pointer flex items-center justify-center lg:px-6 lg:py-4 lg:rounded-2xl rounded-3xl lg:w-auto w-[80px] p-2 transition-transform duration-200 hover:scale-105 active:scale-95 hover:shadow-lg ${
              activeSection === "dp" ? "bg-black" : "bg-white border-2"
            }`}
          >
            <p className={`lg:block hidden font-semibold text-base/[24px] ${activeSection === "dp" ? "text-white" : "text-black"}`}>Dewan Perwakilan</p>
            <p className={`lg:hidden font-semibold text-base/[24px] ${activeSection === "dp" ? "text-white" : "text-black"}`}>DP</p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          {activeSection === "be" && <AnimatedImage src="/structures/be.svg" alt="Badan Eksekutif" className="lg:w-[1075px] md:w-[600px] w-[343px]" animationType="slideUp" />}
          {activeSection === "dp" && <AnimatedImage src="/structures/dp.svg" alt="Dewan Perwakilan" className="lg:w-[440px] md:w-[600px] w-[343px]" animationType="slideUp" />}
        </div>

        <div className="bg-[#E8E8E8] lg:rounded-3xl rounded-[6.55px] lg:px-6 lg:py-4 lg:mt-14 mt-6 flex items-center justify-between p-1 lg:gap-4 gap-1">
          <div onClick={() => setActiveSection("be")} className={`cursor-pointer lg:w-3 lg:h-3 w-[3.27px] h-[3.27px] rounded-full ${activeSection === "be" ? "bg-[#4B4B4B]" : "bg-[#B1B1B1]"}`}></div>
          <div onClick={() => setActiveSection("dp")} className={`cursor-pointer lg:w-3 lg:h-3 w-[3.27px] h-[3.27px] rounded-full ${activeSection === "dp" ? "bg-[#4B4B4B]" : "bg-[#B1B1B1]"}`}></div>
        </div>
      </div>
    </>
  );
};
