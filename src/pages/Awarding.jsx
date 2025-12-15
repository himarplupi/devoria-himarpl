// import { api } from "../services/apiService";
import AnimatedLongText from "../components/AnimatedLongText";
import AnimatedLongText2 from "../components/AnimatedLongText2";
import { CardKepengurusan } from "../components/CardKepengurusan";
import Transition from "@/components/Transition";
import nate from "/nate.png";

export default function Awarding() {
  const awardingData = [
    {
      name: "Cassius Thunder",
      award: "0 arrest",
      img: nate,
    },
    {
      name: "Cassius Thunder",
      award: "0 arrest",
      img: nate,
    },
    {
      name: "Cassius Thunder",
      award: "0 arrest",
      img: nate,
    },
    {
      name: "Cassius Thunder",
      award: "0 arrest",
      img: nate,
    },
    {
      name: "Cassius Thunder",
      award: "0 arrest",
      img: nate,
    },
  ];

  const bestExecTri = [
    {
      name: "Cassius Thunder",
      award: "Triwulan 1",
      img: nate,
    },
    {
      name: "Cassius Thunder",
      award: "Triwulan 2",
      img: nate,
    },
    {
      name: "Cassius Thunder",
      award: "Triwulan 3",
      img: nate,
    },
  ];
  return (
    <>
      {<Transition />}
      <div id="departments" className="bg-[url(/bg/Bg-Low.png)] pt-[108px] flex flex-col items-center pb-[150px] w-full ">
        <div className="flex flex-col items-center lg:w-[1210px] w-[343px] lg:gap-8 gap-6">
          <AnimatedLongText className="lg:text-7xl text-[32px] text-center text-[#4B4B4B] font-semibold" text={"EXECUTIVE AWARD"} />
          <div className="bg-black">
            <AnimatedLongText className="lg:text-8xl text-[32px] text-center text-white font-bold" text="KABINET DEVORIA" />
          </div>
          <AnimatedLongText className="lg:text-4xl text-2xl text-center text-[#4B4B4B] font-semibold lg:tracking-widest" text={"HIMARPL UNIVERSITAS PENDIDIKAN INDONESIA"} />
          <AnimatedLongText2 className="lg:text-5xl text-2xl text-center text-[#4B4B4B] font-medium tracking-wider" text={"2025"} />
          <AnimatedLongText
            className=" text-center text-black font-light"
            text="Badan Eksekutif bertanggung jawab untuk melaksanakan berbagai kegiatan dan program yang terkait dengan pengembangan dan peningkatan kualitas mahasiswa jurusan rekayasa perangkat lunak. Tugas utama badan eksekutif adalah mengelola dan menjalankan rencana kerja serta keputusan yang telah disepakati bersama oleh anggota himpunan. Dengan demikian, badan eksekutif memiliki peran penting dalam memastikan berjalannya kegiatan dan mencapai visi misi HIMARPL."
          />
        </div>

        <div className="flex items-center justify-center w-full pt-5">
          <div className="flex flex-row flex-wrap lg:gap-x-4 lg:gap-y-12 justify-center my-10 lg:w-[1240px] w-[343px] gap-[55px]">
            <CardKepengurusan img={nate} department={"Exec 1 Kabinet"} nama={"Cassius Thunder"} />
          </div>
        </div>

        <div className="flex items-center justify-center w-full pt-5">
          <div className="flex flex-row flex-wrap lg:gap-x-4 lg:gap-y-12 justify-center my-10 lg:w-[1240px] w-[343px] gap-[55px]">
            {bestExecTri.map((item, index) => (
              <CardKepengurusan key={index} img={item.img} department={item.award?.toUpperCase()} nama={item.name?.toUpperCase()} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center w-full pt-5 mx-4">
          <div className="flex flex-row flex-wrap lg:gap-x-48 lg:gap-y-28 justify-center my-10 lg:w-[1000px] w-[343px] gap-[55px]">
            {awardingData.map((item, index) => (
              <CardKepengurusan key={index} img={item.img} department={item.award?.toUpperCase()} nama={item.name?.toUpperCase()} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
