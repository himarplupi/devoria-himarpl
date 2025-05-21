import AnimatedLongText from "../components/AnimatedLongText";
import { CardKepengurusan } from "../components/CardKepengurusan";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import useSmoothScroll from "../hooks/useSmoothScroll";
import { useCallback, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText";
  
const duration = 0.6;
const delay = 0;
const threshold = 0.1;
const animations = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

// Placeholder data
const departementStaffs = [
  {
    img: "/public/kepengurusan/be/ketua.jpg",
    title: "KETUA",
    nama: "FADLI MAHESA",
  },
  {
    img: "/public/kepengurusan/be/wakil.jpg",
    title: "WAKIL KETUA",
    nama: "NUR FITRIANI",  
  },
  {
    img: "/public/kepengurusan/be/sekretaris.jpg",
    title: "SEKRETARIS",
    nama: "MUHAMMAD FADHEL RAIHAN",
  },
  {
    img: "/public/kepengurusan/be/bendahara.jpg",
    title: "BENDAHARA",
    nama: "RIFIANI TASRIFIN",
  },
];

// Placeholder data
const departmentDetails = [
  {
    title: "KOMINFO",
    img: "/public/kepengurusan/be/kominfo.jpg",
    description: "Departmen Kominfo merupakan salah satu departemen yang tugas pokok dan fungsinya berada dalam ruang lingkup Komunikasi & Publikasi, yaitu membangun dan mengembangkan media publikasi dan informasi baik secara internal maupun eksternal. Lingkup kerja Departemen Kominfo ini mencakup ke dalam social media content creation and strategy, public relation, graphic design, video editing, dan web development.",
    proker: "Menyelenggarakan program kerja yang mendukung pengembangan kompetensi teknis dan soft skills mahasiswa. Membangun budaya organisasi yang profesional, adaptif, dan berintegritas. Menjadi wadah aspirasi dan advokasi bagi mahasiswa Rekayasa Perangkat Lunak. Meningkatkan kolaborasi dengan berbagai pihak, termasuk institusi pendidikan, industri, dan masyarakat. Melaksanakan kegiatan sosial dan pengabdian kepada masyarakat yang relevan dengan bidang keilmuan."
  }
];

export const DepartmentDetails = () => {
  const navigate = useNavigate();
  const lastScroll = useRef(0);

  const handleScroll = useCallback((scrollY) => {
    lastScroll.current = scrollY;
  }, []);

  const scrollRef = useSmoothScroll(handleScroll);

  return (
    <div 
      id="departmentdetails" 
      className="bg-[url(/public/bg/Bg-Low.png)] min-h-screen w-full overflow-y-auto pt-[68px] flex flex-col items-center pb-[50px]"
      ref={scrollRef}
      style={{ height: "100vh" }}
    >
      <div className="flex flex-col items-center lg:w-[1210px] w-[343px] gap-8 relative">
        <div className="w-full">
          <div className="flex gap-4 items-center justify-start cursor-pointer hover:bg-gray-100 rounded-2xl py-1 w-fit" onClick={() => navigate("/be")}>
            <Icon icon="mingcute:left-line" className="w-10 h-10" />
            <p className="font-medium lg:text-2xl text-base pr-4">Kembali</p>
          </div>
        </div>
        <div className="w-full">
          <div className="bg-black w-fit p-3">
            <AnimatedText className="text-7xl text-white font-bold underline decoration-[#FFE867] decoration-2 underline-offset-8" text={departmentDetails[0].title}/>
          </div>
        </div>
        <div className="max-w-fit flex flex-col justify-center items-center rounded-2xl overflow-hidden">
        <img src={departmentDetails[0].img} alt="kepengurusan" className="w-full rounded-t-2xl h-[600px] object-cover scale-150 object-[center_-90%]" />
            <div className="flex flex-col justify-center items-center w-full rounded-b-2xl bg-[#000000] z-10 opacity-60">
              <h2 className="rounded-b-xl p-5 text-white text-normal font-light">{departmentDetails[0].description}</h2>
            </div>
        </div>
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -130px 0px", amount: threshold }}
        transition={{ duration, delay }}
        variants={animations}
        className="flex flex-col rounded-3xl pb-4 w-[1220px] gap-4 h-fit border-8 bg-[#ffffff] border-[#000000]"
      >
        <div className="flex flex-row items-center justify-between bg-[#000000] lg:gap-96 rounded-t-[4px] max-w-full lg:px-6 lg:py-4 px-4 py-2">
          <h4 className="text-white lg:text-[40px] text-base">Program Kerja</h4>
          <div className="flex flex-row items-center justify-between lg:gap-4 gap-[4.5px]">
            <div className="lg:w-6 lg:h-6 w-[6.75px] h-[6.75px] bg-white rounded-full"></div>
            <div className="lg:w-6 lg:h-6 w-[6.75px] h-[6.75px] bg-white rounded-full"></div>
            <div className="lg:w-6 lg:h-6 w-[6.75px] h-[6.75px] bg-white rounded-full"></div>
          </div>
        </div>
        <p className="text-black lg:text-[24px]/[40px] lg:mx-6 mx-4 text-base/[24px]">{departmentDetails[0].proker}</p>
      </motion.div>
      </div>
      <div className="flex items-center justify-center w-full pt-20">
        <div className="flex flex-row flex-wrap gap-x-48 gap-y-28 justify-center my-10">
          {departementStaffs.map((item, index) => (
            <div key={index} className="">
              <CardKepengurusan img={item.img} title={item.title} nama={item.nama} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};