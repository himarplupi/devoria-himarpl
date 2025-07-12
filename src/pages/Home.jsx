import { Link } from "react-router-dom";
import "./home.css";
import { CardDedication } from "../components/CardDedication";
import { StrukturOrganisasi } from "./StrukturOrganisasi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Marquee from "react-fast-marquee";
import { Contacts } from "./Contacts";
import AnimatedText from "../components/AnimatedText";
import AnimatedText2 from "../components/AnimatedText2";
import AnimatedLongText from "../components/AnimatedLongText";
import AnimatedLongText2 from "../components/AnimatedLongText2";
import AnimatedImage from "../components/AnimatedImage";
import NewsMarquee from "../components/NewsMarquee";
import { motion as Motion } from "motion/react";
import { HyperText } from "@/components/magicui/hyper-text";
import SEO from "@/lib/seo";
import Transition from "@/components/Transition";

const duration = 0.6;
const delay = 0;
const threshold = 0.1;
const animations = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export default function Home() {
  const textScrollDown = {
    writingMode: "vertical-rl",
    textOrientation: "upright",
  };

  // eslint-disable-next-line no-unused-vars
  const textStyle1 = {
    WebkitTextStroke: "2px white",
    color: "transparent",
  };

  const textStyle2 = {
    WebkitTextStroke: "2px #887300",
    color: "transparent",
    fontWeight: "700",
  };

  return (
    <>
      <SEO />
      <Transition />
      <div id="home" className="pt-[80px] bg-white ">
        <div className="relative">
          <div className="flex md:flex-row flex-col lg:gap-32 gap-4 md:items-center justify-between items-start  lg:w-[1220px] lg:mx-[110px] mx-4">
            <div className="lg:max-w-[555px] flex flex-col gap-2">
              {/* <AnimatedText text="HIMARPL" className="font-bold text-[40px]/[64px] lg:text-[56px]/[64px]" /> */}
              <h1 className="sr-only">HIMARPL</h1>
              <HyperText startOnView={true} duration={1500} className="font-bold text-[40px]/[64px] lg:text-[56px]/[64px]">
                HIMARPL
              </HyperText>
              <div className="bg-black p-2">
                <AnimatedText text="Kabinet Devoria" className="font-bold text-[32px] lg:text-[56px]/[64px] text-white underline decoration-[#FFE867] decoration-2 underline-offset-8" />
              </div>
            </div>

            <div className="lg:w-[580px] md:w-[380px] w-[343px]">
              <AnimatedLongText
                text="<b>Kabinet Devoria</b> adalah struktur kepengurusan Himpunan Mahasiswa Rekayasa Perangkat Lunak (HIMARPL) Universitas Pendidikan Indonesia (UPI) Kampus Cibiru untuk periode tahun 2025."
                className="text-base/[24px]"
              />
            </div>
          </div>

          <div className="lg:mt-8 mt-6 relative lg:mb-[75px] mb-[48px]">
            <AnimatedImage src="/himarpl/fullteam.jpeg" alt="Kabinet Devoria" loading="lazy" className="lg:w-[1220px] md:w-[680px] lg:mx-[110px] mx-4 w-[343px] rounded-3xl z-10" />

            <img src="/himarpl/HIMARPL.svg" alt="HIMARPL" className="lg:w-[1210px] md:w-[660px] w-[313px] absolute lg:top-[550px] md:top-[305px] lg:left-[130px] xl:left-[120px] top-[157px] left-[33px] z-20" />
            <AnimatedText style={textScrollDown} className="absolute md:text-[16px] text-[8px] lg:tracking-[28px] md:tracking-[18px] tracking-[8px] top-0 xl:left-[84px] lg:left-11 md:-left-2 left-0 font-bold" text="scrolldown" />

            <AnimatedText
              style={textScrollDown}
              className="absolute md:text-[16px] text-[8px] lg:tracking-[28px] md:tracking-[18px] lg:-bottom-[28px] xl:right-[84px] tracking-[8px] bottom-0 lg:right-11 md:-right-2 right-0 font-bold"
              text="scrolldown"
            />
          </div>
        </div>
      </div>

      <Sponsor />
      <Dedication />

      {/* <Marquee className="bg-black w-full py-4 ">
        {[0, 1, 2, 3].map((i) => (
          <img src={i % 2 === 1 ? "/ornaments/NEWS.svg" : "/ornaments/NEWS (1).svg"} alt="news" className="lg:w-[540px] w-[270px] lg:mr-4 mr-2" key={i} />
        ))}
      </Marquee> */}

      <NewsMarquee />

      <Berita />

      <div className="bg-[#ffe867] w-full flex justify-center md:flex-row flex-col items-center lg:px-[58px] py-[45px] xl:gap-3 lg:gap-[42px] gap-[28px] z-10 ">
        <Marquee className="md:!hidden w-full flex flex-row justify-between  items-center !overflow-visible">
          {[0, 1, 2, 3].map((i) => (
            <div className="relative " key={i}>
              <div className="bg-[#ffe867]  lg:h-[110px] py-1 px-[10px] lg:w-auto w-[100px] flex items-center z-10">
                <p className="text-[#886D00] lg:text-[128px]/[180px] text-[40px]/[28px] font-bold">VISI</p>
              </div>
              <div className="bg-[#ffe867] absolute z-10 w-2 lg:block hidden h-5 top-10 -left-1"></div>
              <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-[69px] -top-[28px] left-2.5 -z-10">
                VISI
              </p>
              <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-[60px] -top-[21px] left-2.5 -z-10">
                VISI
              </p>
              <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-1 -top-0 left-2.5 -z-10">
                VISI
              </p>
              <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:top-1 top-1.5 left-2.5 -z-10">
                VISI
              </p>
            </div>
          ))}
        </Marquee>

        <div className="relative md:block hidden">
          <div className="bg-[#ffe867]  lg:h-[110px] py-1 px-[10px] lg:w-auto w-[100px] flex items-center z-10">
            <p className="text-[#886D00] lg:text-[128px]/[180px] text-[40px]/[28px] font-bold">VISI</p>
          </div>
          <div className="bg-[#ffe867] absolute z-10 w-2 lg:block hidden h-5 top-10 -left-1"></div>
          <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-[69px] -top-[28px] left-2.5 -z-10">
            VISI
          </p>
          <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-[60px] -top-[21px] left-2.5 -z-10">
            VISI
          </p>
          <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-1 -top-0 left-2.5 -z-10">
            VISI
          </p>
          <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:top-1 top-1.5 left-2.5 -z-10">
            VISI
          </p>
        </div>

        <img src="/himarpl/Group 247.svg" alt="HIMARPL" className="xl:w-[618px] lg:w-[718px] md:w-[418px] w-[164px]" />

        <Marquee className="md:!hidden w-full flex flex-row justify-between  items-center !overflow-visible" direction="right">
          {[0, 1, 2, 3].map((i) => (
            <div className="relative " key={i}>
              <div className="bg-[#ffe867]  lg:h-[110px] py-1 px-[10px] lg:w-auto w-[100px] flex items-center z-10">
                <p className="text-[#886D00] lg:text-[128px]/[180px] text-[40px]/[28px] font-bold">MISI</p>
              </div>
              <div className="bg-[#ffe867] absolute z-10 w-2 lg:block hidden h-5 top-10 -left-1"></div>
              <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-[69px] -top-[28px] left-2.5 -z-10">
                MISI
              </p>
              <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-[60px] -top-[21px] left-2.5 -z-10">
                MISI
              </p>
              <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-1 -top-0 left-2.5 -z-10">
                MISI
              </p>
              <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:top-1 top-1.5 left-2.5 -z-10">
                MISI
              </p>
            </div>
          ))}
        </Marquee>
        <div className="relative md:block hidden">
          <div className="bg-[#ffe867]  lg:h-[110px] py-1 px-[10px] lg:w-auto w-[100px] flex items-center z-10">
            <p className="text-[#886D00] lg:text-[128px]/[180px] text-[40px]/[28px] font-bold">MISI</p>
          </div>
          <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-[69px] -top-[28px] left-2.5 -z-10">
            MISI
          </p>
          <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-[60px] -top-[21px] left-2.5 -z-10">
            MISI
          </p>
          <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:-top-1 -top-0 left-2.5 -z-10">
            MISI
          </p>
          <p style={textStyle2} className="lg:text-[128px]/[180px] text-[40px] absolute lg:top-1 top-1.5 left-2.5 -z-10">
            MISI
          </p>
        </div>
      </div>

      <VisiMisi />

      <StrukturOrganisasi />

      <Sejarah />

      <Contacts />
    </>
  );
}

function Sponsor() {
  const sponsors = [
    { src: "/sponsors/dicoding.svg", alt: "Dicoding", maxWidth: "178px", minWidth: "56px" },
    { src: "/sponsors/kahf.svg", alt: "Kahf", maxWidth: "135px", minWidth: "56px" },
    { src: "/sponsors/allobank.svg", alt: "Allobank", maxWidth: "163px", minWidth: "56px" },
    { src: "/sponsors/menyala.svg", alt: "Me.nyala", maxWidth: "130px", minWidth: "56px" },
    { src: "/sponsors/ruru.svg", alt: "Ruru snack", maxWidth: "133px", minWidth: "56px" },
  ];
  return (
    <div id="sponsor" className="bg-[#FFE867] w-full z-20  py-[20px]">
      <div className=" flex flex-col justify-center items-center">
        <AnimatedText2 text="Sponsor dan Mitra Kami" className="text-[#806D00] text-2xl" />

        <div className="flex items-center flex-row lg:gap-[54px] gap-4 h-auto justify-between xl:w-[1220px] lg:w-[1255px] w-[327px] mt-4">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex items-center ">
              <img src={sponsor.src} alt={sponsor.alt} className={` h-auto hover:scale-110 transform duration-300 ease-out`} style={{ width: "100%", maxWidth: sponsor.maxWidth, minWidth: sponsor.minWidth }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Dedication() {
  const dedikasiItems = [
    {
      img: "/dedications/dedikasi1.jpg",
      title: "RPL Berbagi",
      bgColor: "#FF4B4B",
    },
    {
      img: "/dedications/dedikasi 3.png",
      title: "RPL Peduli",
      bgColor: "#FF7F11",
    },
  ];

  return (
    <div id="dedikasi" className="bg-[#10316B]  w-full lg:pt-[123px] pt-[68px] z-10 relative flex flex-col justify-center items-center dedikasi lg:pb-[96px] pb-[84px]">
      <img src="/ornaments/Vector 67.svg" alt="vector" className="lg:w-[237px] w-[190px] absolute -top-[90px] right-0 -z-10" />
      <img src="/ornaments/Group 245.svg" alt="pixel" className="lg:w-[672px] w-[300px] absolute top-[280px] -z-10" />
      <img src="/ornaments/Vector 50.svg" alt="vector" className="lg:w-[306px] w-[250px] absolute bottom-0 left-0 -z-10" />
      <div className="flex flex-col justify-center items-center lg:gap-8 gap-6 lg:w-[619px] md:w-[500px] w-[343px]">
        <AnimatedLongText2 text="Dedikasi Kami" className="lg:text-8xl/[54px] text-white text-center text-[64px]/[72px] z-10" />

        <AnimatedLongText
          className="text-base/[24px] text-white text-center"
          text="Di bawah naungan Kabinet Devoria, HIMARPL UPI berkomitmen untuk menjadi wadah terbaik dalam mengembangkan potensi akademik, profesional, dan sosial seluruh anggota."
        />
      </div>

      <div className="md:flex hidden flex-row items-center lg:gap-10 xl:gap-4 gap-2 justify-evenly lg:w-[1280px] xl:w-[1220px] lg:mt-[103px] mt-8 z-10 overflow-x-scroll">
        {dedikasiItems.map((item, index) => (
          <CardDedication key={index} index={index} img={item.img} bgColor={item.bgColor} title={item.title} />
        ))}
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView="auto"
        className="md:!hidden w-[343px] z-10 px-4 lg:mt-[103px] mt-8"
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        {dedikasiItems.map((item, index) => (
          <SwiperSlide
            key={index}
            className="!w-auto" // biar item menyesuaikan ukuran kontennya
          >
            <CardDedication index={index} img={item.img} bgColor={item.bgColor} title={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="bg-[#ffe867] lg:w-[160px] w-[343px] h-14 flex justify-center items-center py-4 px-6 rounded-[64px] lg:mt-20 mt-9 z-10 hover:scale-110 transition duration-300">
        <Link to="/dedication" className="text-[#806D00] text-[20px]/[24px] ">
          <h4 className="bg-transparent w-[160px] h-14 rounded-[64px] py-4 px-6">Lihat Semua</h4>
        </Link>
      </div>
    </div>
  );
}

function Berita() {
  return (
    <div id="berita" className="bg-white lg:py-20 py-10 flex flex-col items-center justify-between">
      <div className="relative flex md:flex-row flex-col-reverse items-center justify-between max-w-[1220px] lg:gap-20 gap-6">
        <div className="border w-[343px] cursor-pointer bg-white h-14 flex md:hidden justify-center items-center py-4 px-6 rounded-[64px] z-10 mb-10 hover:scale-110 transition border-black duration-300">
          <Link to="/berita" className=" text-[16px]/[24px] ">
            <p className=" w-[206px] h-14 py-4 px-6 rounded-[64px]">Lihat Semua Berita</p>
          </Link>
        </div>

        <AnimatedImage src="/news/berita.jpg" alt="Berita" className="lg:w-[576px] lg:h-[612px] md:w-[290px] w-[343px] md:h-[400px] h-[200px]  object-cover rounded-3xl" animationType="slideRight" />

        <div className="flex flex-col justify-center lg:w-[580px] w-[343px]">
          <img src="/ornaments/Group 241.svg" alt="pixel" className="absolute max-w-[72px] lg:top-0 top-40 right-0" />
          <img src="/ornaments/Group 252.svg" alt="pixel" className="absolute max-w-[303px] bottom-0 right-5 " />

          <AnimatedLongText className="lg:text-[64px]/[72px] text-[40px] !min-w-[343px] font-semibold" text="Akses Berita Aktual RPL di Sini." />

          <AnimatedLongText
            className="mt-6 lg:mb-10 md:mb-5 min-w-[343px]"
            text="<b>Kabinet Devoria</b> adalah struktur kepengurusan Himpunan Mahasiswa Rekayasa Perangkat Lunak (HIMARPL) Universitas Pendidikan Indonesia (UPI) Kampus Cibiru untuk periode tahun 2025."
          />

          <div className="border border-black w-[206px] h-14 md:flex hidden justify-center items-center py-4 px-6 cursor-pointer rounded-[64px] hover:scale-110 transition duration-300">
            <Link to="/berita" className=" text-[16px]/[24px] ">
              <p className="bg-transparent w-[206px] h-14 py-4 px-6 rounded-[64px]">Lihat Semua Berita</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisiMisi() {
  return (
    <div id="visiMisi" className="bg-[#10316B] w-full  lg:pt-[68px] pt-[42px] gap-[68px] flex flex-col justify-center items-center relative z-0">
      <img src="/ornaments/Group 251.svg" alt="pixel" className="lg:w-[181px] w-[64px] absolute lg:-top-7 top-0 right-0 -z-20" />
      <img src="/ornaments/Group 250.svg" alt="pixel" className="lg:w-[207px] w-[80px] absolute bottom-0 left-0 -z-20" />

      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -130px 0px", amount: threshold }}
        transition={{ duration, delay }}
        variants={animations}
        className="flex flex-col lg:rounded-3xl pb-4 rounded-lg lg:w-[1220px] md:w-[600px] w-[343px] gap-4 lg:h-[300px]  lg:border-8 border-4 border-[#FF4B4B]"
      >
        <div className="flex flex-row items-center justify-between bg-[#FF4B4B] lg:gap-96  rounded-t-[4px] max-w-full lg:px-6 lg:py-4 px-4 py-2">
          <h4 className="text-white lg:text-[40px] text-base">Visi</h4>

          <div className="flex flex-row items-center justify-between lg:gap-4 gap-[4.5px]">
            <div className="lg:w-6 lg:h-6 w-[6.75px] h-[6.75px] bg-white rounded-full"></div>
            <div className="lg:w-6 lg:h-6 w-[6.75px] h-[6.75px] bg-white rounded-full"></div>
            <div className="lg:w-6 lg:h-6 w-[6.75px] h-[6.75px] bg-white rounded-full"></div>
          </div>
        </div>

        <p className="text-white lg:text-[24px]/[40px] lg:mx-6 mx-4 text-base/[24px]">
          Menjadi himpunan mahasiswa yang aktif, inovatif, dan kolaboratif dalam mengembangkan potensi akademik, profesional, dan sosial mahasiswa Rekayasa Perangkat Lunak UPI, serta berkontribusi positif bagi masyarakat dan dunia industri.
        </p>
      </Motion.div>
      <Motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -130px 0px", amount: threshold }}
        transition={{ duration, delay }}
        variants={animations}
        className="flex flex-col lg:rounded-3xl rounded-lg lg:w-[1220px] md:w-[600px] w-[343px] gap-4 lg:h-[460px] lg:pb-5 pb-4 lg:border-8 border-4 border-[#5573FF] lg:mb-[96px] mb-10 bg-[#10316B]"
      >
        <div className="flex flex-row items-center justify-between bg-[#5573FF] lg:gap-96  rounded-t-[4px] max-w-full lg:px-6 lg:py-4 px-4 py-2">
          <h4 className="text-white lg:text-[40px] text-base">Misi</h4>

          <div className="flex flex-row items-center justify-between lg:gap-4 gap-[4.5px]">
            <div className="lg:w-6 lg:h-6 w-[6.75px] h-[6.75px] bg-white rounded-full"></div>
            <div className="lg:w-6 lg:h-6 w-[6.75px] h-[6.75px] bg-white rounded-full"></div>
            <div className="lg:w-6 lg:h-6 w-[6.75px] h-[6.75px] bg-white rounded-full"></div>
          </div>
        </div>

        <ul>
          {[
            "• Menyelenggarakan program kerja yang mendukung pengembangan kompetensi teknis dan soft skills mahasiswa.",
            "• Membangun budaya organisasi yang profesional, adaptif, dan berintegritas.",
            "• Menjadi wadah aspirasi dan advokasi bagi mahasiswa Rekayasa Perangkat Lunak.",
            "• Meningkatkan kolaborasi dengan berbagai pihak, termasuk institusi pendidikan, industri, dan masyarakat.",
            "• Melaksanakan kegiatan sosial dan pengabdian kepada masyarakat yang relevan dengan bidang keilmuan.",
          ].map((i, idx) => (
            <p key={idx} className="text-white lg:text-[24px]/[40px] text-base/[40px] mx-6">
              {i}
            </p>
          ))}
        </ul>
      </Motion.div>
    </div>
  );
}

function Sejarah() {
  const textStyle1 = {
    WebkitTextStroke: "2px #EBEBEB",
    color: "transparent",
  };
  const cabinets = [
    { src: "/cabinetsLogo/inisiator.png", alt: "Inisiator", name: "Inisiator", year: "2020" },
    { src: "/cabinetsLogo/inspira.png", alt: "Inspira", name: "Inspira", year: "2021" },
    { src: "/cabinetsLogo/explora.png", alt: "Explora", name: "Explora", year: "2022" },
    { src: "/cabinetsLogo/manifest.png", alt: "Manifest", name: "Manifest", year: "2023" },
    { src: "/cabinetsLogo/ascendia.png", alt: "Ascendia", name: "Ascendia", year: "2024" },
    { src: "/cabinetsLogo/Devoria.svg", alt: "Devoria", name: "Devoria", year: "2025" },
  ];
  return (
    <div id="journey" className="bg-[#10316B] w-full  items-center lg:gap-[135px] gap-[88px] flex flex-col justify-center lg:py-[68px] pt-[40px] pb-8">
      <AnimatedLongText2 className="text-white lg:text-8xl text-[64px]/[72px] text-center" text="Perjalanan HIMARPL" />

      <div className="w-full lg:h-[600px] h-fit flex flex-col items-center justify-center relative bg-[#0B409C] gap-14">
        <img src="/ornaments/Group 253.svg" alt="pixel" className="absolute lg:w-[128px] lg:-top-28 -top-11 w-[88px] left-0" />
        <img src="/ornaments/Group 253.svg" alt="pixel" className="absolute lg:w-[128px] w-[88px] lg:-top-28 -top-11  right-0 scale-x-[-1]" />

        <div className="bg-[#FFE867] h-2 w-[1084px]"></div>
        <div className="bg-[#F2F7FF] w-full lg:h-[400px] md:h-[600px] h-[400px]  flex items-center justify-center relative">
          <p className=" absolute lg:text-[300px] select-none text-[64px]" style={textStyle1}>
            KABINET
          </p>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            className="md:!hidden w-auto flex items-center justify-center "
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            slidesPerView={"auto"}
          >
            {cabinets.map((cabinet, index) => {
              return (
                <SwiperSlide key={index} className="">
                  <div className="flex flex-col items-center justify-center gap-[64px] z-10 hover:cursor-pointer hover:scale-105 transform duration-300 ease-out">
                    <img src={cabinet.src} alt={cabinet.alt} className="h-[128px] w-auto" />
                    <div className="flex flex-col items-center justify-center gap-2">
                      <p className="font-semibold text-2xl">{cabinet.name}</p>
                      <h1 className="text-[#4B4B4B] font-normal">{cabinet.year}</h1>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className=" xl:w-[1220px] lg:w-[1312px] md:flex md:w-[600px] hidden items-center justify-between lg:gap-0 gap-8 flex-wrap ">
            {cabinets.map((cabinet, index) => {
              return (
                // ntar animasiin elemennya aja
                <Motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "0px 0px -130px 0px", amount: threshold }}
                  transition={{ duration, delay }}
                  variants={animations}
                  key={index}
                  className="flex flex-col  items-center justify-center lg:gap-[64px] md:gap-10 z-10 hover:cursor-pointer hover:scale-110 transform duration-300 ease-out"
                >
                  <img src={cabinet.src} alt={cabinet.alt} className="max-h-[128px]  w-full" />

                  <div className="flex flex-col items-center justify-center gap-2">
                    <p className="font-semibold text-2xl">{cabinet.name}</p>
                    <h1 className="text-[#4B4B4B] font-normal">{cabinet.year}</h1>
                  </div>
                </Motion.div>
              );
            })}
          </div>
        </div>

        <div
          className="w-full h-2 "
          style={{
            borderTop: "4px dashed transparent",
            borderImage: "repeating-linear-gradient(to right, #FFE867 0 60px, transparent 60px 80px)",
            borderImageSlice: 1,
          }}
        />
      </div>
    </div>
  );
}
