import { CardKepengurusan } from "../components/CardKepengurusan";
import Transition from "@/components/Transition";
import PageLoader from "@/components/PageLoader";
import ScrollSection from "@/components/ScrollSection";
import ScrollNarration from "@/components/ScrollNarration";
import HorizontalScrollSection, {
  HorizontalScrollItem,
} from "@/components/HorizontalScrollSection";
import ScrollZoomMedia, {
  ScrollRevealCard,
  ParallaxText,
} from "@/components/ScrollZoomMedia";
import MysteryCard from "@/components/MysteryCard";
import Particles from "@/components/magicui/particles";
import { motion as Motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Awarding() {
  // Assets to preload - only critical above-the-fold assets
  // Other images will lazy-load as user scrolls
  const assetsToPreload = [
    "/awarding/kominfo-motion.mp4",
    "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/department-2025/be/kominfo.jpg",
    "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/be/kominfo-5.jpg",
    "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/be/ppm-5.jpg",
    "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/be/ekraf-4.jpg",
    "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/dp/burt-3.jpg",
    "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/dp/baleg-2.jpg",
    "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/dp/komisi-8.jpg",
    "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/dp/komisi-1.jpg",
  ];

  const awardingData = [
    {
      name: "Rifdah",
      award: "Best Adkes",
      img: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/be/adkes-4.jpg",
    },
    {
      name: "Hilmi",
      award: "Best Keuangan",
      img: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/be/keuangan-5.jpg",
    },
    {
      name: "Kinta",
      award: "Best Kominfo",
      img: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/be/kominfo-8.jpg",
    },
    {
      name: "Juan",
      award: "Best Advo",
      img: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/be/advo-2.jpg",
    },
    {
      name: "Firdi",
      award: "Best PD",
      img: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/be/pd-2.jpg",
    },
    {
      name: "Mirachel",
      award: "Best Ekraf",
      img: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/be/ekraf-3.jpg",
    },
    {
      name: "Karina",
      award: "Best PPM",
      img: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/be/ppm-5.jpg",
    },
    {
      name: "Kautsar",
      award: "Best PSDO",
      img: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/be/psdo-2.jpg",
    },
  ];

  const bestExecTri = [
    {
      name: "Dzakoy",
      award: "Triwulan 1",
      img: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/be/kominfo-5.jpg",
    },
    {
      name: "Karina",
      award: "Triwulan 2",
      img: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/be/ppm-5.jpg",
    },
    {
      name: "Ica",
      award: "Triwulan 3",
      img: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/be/ekraf-4.jpg",
    },
  ];

  const dewanAward = [
    {
      name: "Harits",
      award: "Staff of Composure",
      img: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/dp/burt-3.jpg",
    },
    {
      name: "Regina",
      award: "Staff of Precision",
      img: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/dp/baleg-2.jpg",
    },
    {
      name: "Silva",
      award: "Staff of Silent Dedication",
      img: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/dp/komisi-8.jpg",
    },
    {
      name: "Firdan",
      award: "Head of Excellence",
      img: "https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/dp/komisi-1.jpg",
    },
  ];

  return (
    <PageLoader assets={assetsToPreload}>
      <Transition />
      <div
        id="departments"
        className="bg-[url(/bg/Bg-Low.png)] bg-cover bg-fixed flex flex-col items-center w-full"
      >
        {/* ==================== HERO SECTION ==================== */}
        <HeroSection />

        {/* ==================== INTRO NARRATION ==================== */}
        <ScrollSection
          animation="fadeUp"
          className="max-w-4xl px-6 mb-32 mt-64"
        >
          <ScrollNarration
            text="Executive Award adalah penghargaan yang diberikan kepada eksekutif terbaik berdasarkan pada kontribusi yang diberikan selama satu periode kepengurusan."
            className="text-center text-black font-light lg:text-5xl text-3xl leading-relaxed"
            revealType="word"
          />
        </ScrollSection>

        {/* ==================== BEST TRIWULAN ==================== */}
        <ScrollSection animation="fadeUp" className="mb-6 mt-64">
          <h2 className="lg:text-8xl text-4xl text-center text-[#4B4B4B] font-bold tracking-tight">
            BEST TRIWULAN
          </h2>
        </ScrollSection>

        <ScrollSection animation="fade" className="mb-12 px-6 max-w-2xl">
          <p className="text-center text-[#6B6B6B] lg:text-xl text-lg">
            Eksekutif terpilih setiap periode triwulan
          </p>
        </ScrollSection>

        <div className="flex flex-row flex-wrap lg:gap-x-8 lg:gap-y-12 justify-center mb-32 lg:w-[1240px] w-[343px] gap-[55px]">
          {bestExecTri.map((item, index) => (
            <ScrollRevealCard
              key={index}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <MysteryCard department={item.award?.toUpperCase()}>
                <CardKepengurusan
                  loading="eager"
                  img={item.img}
                  department={item.award?.toUpperCase()}
                  nama={item.name?.toUpperCase()}
                />
              </MysteryCard>
            </ScrollRevealCard>
          ))}
        </div>

        {/* ==================== BEST DEPARTEMEN ==================== */}
        <ScrollSection animation="fadeUp" className="mb-6 mt-64">
          <ParallaxText speed={0.3}>
            <h2 className="lg:text-8xl text-4xl text-center text-[#4B4B4B] font-bold tracking-tight">
              BEST DEPARTEMEN
            </h2>
          </ParallaxText>
        </ScrollSection>

        <ScrollSection animation="fade" className="mb-8 px-6 max-w-3xl">
          <p className="text-center text-[#6B6B6B] lg:text-xl text-lg italic">
            Departemen dengan dedikasi luar biasa dalam menjalankan program
            kerja
          </p>
        </ScrollSection>

        {/* Video/Image that zooms in on scroll */}
        <div className="w-full flex justify-center mb-8">
          <ScrollZoomMedia
            videoSrc="/awarding/kominfo-motion.mp4"
            src="https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/department-2025/be/kominfo.jpg"
            alt="Kominfo Department"
            startScale={0.5}
            endScale={1}
            className="lg:w-[900px] w-[90vw] aspect-video"
          />
        </div>

        <ScrollSection animation="scale" className="mb-32">
          <div className="bg-black px-8 py-4 rounded-2xl">
            <h3 className="text-white text-3xl lg:text-5xl font-bold text-center">
              KOMINFO
            </h3>
          </div>
        </ScrollSection>

        {/* ==================== BEST KADEPT ==================== */}
        <ScrollSection animation="fadeLeft" className="mb-6 mt-64">
          <h2 className="lg:text-8xl text-4xl text-center text-[#4B4B4B] font-bold tracking-tight">
            BEST KADEPT
          </h2>
        </ScrollSection>

        <ScrollSection animation="fade" className="mb-8 px-6 max-w-3xl">
          <p className="text-center text-[#6B6B6B] lg:text-xl text-lg italic">
            Pemimpin inspiratif yang menggerakkan tim dengan penuh semangat
          </p>
        </ScrollSection>

        <ScrollRevealCard direction="up" className="mb-32 flex justify-center">
          <MysteryCard department="BEST KADEPT">
            <CardKepengurusan
              loading="eager"
              img="https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/be/psdo-1.jpg"
              department={"Best Kadept"}
              nama={"Dadung"}
            />
          </MysteryCard>
        </ScrollRevealCard>

        {/* ==================== BEST EXECUTIVE ==================== */}
        <ScrollSection animation="fadeRight" className="mb-6 mt-64">
          <h2 className="lg:text-8xl text-4xl text-center text-[#4B4B4B] font-bold tracking-tight">
            BEST EXECUTIVE
          </h2>
        </ScrollSection>

        <ScrollSection animation="fade" className="mb-8 px-6 max-w-3xl">
          <p className="text-center text-[#6B6B6B] lg:text-xl text-lg italic">
            Eksekutif terbaik dengan kontribusi maksimal sepanjang kepengurusan
          </p>
        </ScrollSection>

        <ScrollRevealCard direction="up" className="mb-32 flex justify-center">
          <MysteryCard department="BEST EXECUTIVE">
            <CardKepengurusan
              loading="eager"
              img="https://cdn.jsdelivr.net/gh/himarplupi/assets-himarpl@main/images/users-2025/be/ppm-5.jpg"
              department={"Best Executive"}
              nama={"Karina"}
            />
          </MysteryCard>
        </ScrollRevealCard>
      </div>

      {/* Horizontal scroll needs to be OUTSIDE the main container for sticky to work */}
      <HorizontalScrollSection className="bg-transparent">
        {awardingData.map((item, index) => (
          <HorizontalScrollItem key={index} className="bg-transparent">
            <MysteryCard department={item.award?.toUpperCase()}>
              <CardKepengurusan
                loading="eager"
                img={item.img}
                department={item.award?.toUpperCase()}
                nama={item.name?.toUpperCase()}
              />
            </MysteryCard>
          </HorizontalScrollItem>
        ))}
      </HorizontalScrollSection>

      <div className="bg-[url(/bg/Bg-Low.png)] bg-cover bg-fixed flex flex-col items-center w-full">
        {/* ==================== DEWAN AWARD HERO ==================== */}
        <DewanHeroSection />

        {/* ==================== DEWAN INTRO NARRATION ==================== */}
        <ScrollSection
          animation="fadeUp"
          className="max-w-4xl px-6 mb-32 mt-16"
        >
          <ScrollNarration
            text="Dewan Award merupakan penghargaan yang diberikan pada anggota dewan perwakilan HIMARPL terbaik berdasarkan pada performa dari masing-masing kategorinya selama satu periode kepengurusan."
            className="text-center text-black font-light lg:text-5xl text-3xl leading-relaxed"
            revealType="word"
          />
        </ScrollSection>

        {/* ==================== STAFF OF COMPOSURE ==================== */}
        <ScrollSection animation="fadeLeft" className="mb-6 mt-64">
          <ParallaxText speed={0.2}>
            <h2 className="lg:text-8xl text-4xl text-center text-[#4B4B4B] font-bold tracking-tight">
              STAFF OF COMPOSURE
            </h2>
          </ParallaxText>
        </ScrollSection>

        <ScrollSection animation="fade" className="mb-8 px-6 max-w-3xl">
          <p className="text-center text-[#6B6B6B] lg:text-xl text-lg italic">
            Ketenangan dalam menghadapi tantangan, kebijaksanaan dalam bertindak
          </p>
        </ScrollSection>

        <ScrollRevealCard direction="up" className="mb-32 flex justify-center">
          <MysteryCard department="STAFF OF COMPOSURE">
            <CardKepengurusan
              loading="eager"
              img={dewanAward[0].img}
              department={dewanAward[0].award?.toUpperCase()}
              nama={dewanAward[0].name?.toUpperCase()}
            />
          </MysteryCard>
        </ScrollRevealCard>

        {/* ==================== STAFF OF PRECISION ==================== */}
        <ScrollSection animation="fadeRight" className="mb-6 mt-64">
          <ParallaxText speed={0.25}>
            <h2 className="lg:text-8xl text-4xl text-center text-[#4B4B4B] font-bold tracking-tight">
              STAFF OF PRECISION
            </h2>
          </ParallaxText>
        </ScrollSection>

        <ScrollSection animation="fade" className="mb-8 px-6 max-w-3xl">
          <p className="text-center text-[#6B6B6B] lg:text-xl text-lg italic">
            Ketelitian tanpa cela, kesempurnaan dalam setiap detail
          </p>
        </ScrollSection>

        <ScrollRevealCard
          direction="left"
          className="mb-32 flex justify-center"
        >
          <MysteryCard department="STAFF OF PRECISION">
            <CardKepengurusan
              loading="eager"
              img={dewanAward[1].img}
              department={dewanAward[1].award?.toUpperCase()}
              nama={dewanAward[1].name?.toUpperCase()}
            />
          </MysteryCard>
        </ScrollRevealCard>

        {/* ==================== STAFF OF SILENT DEDICATION ==================== */}
        <ScrollSection animation="fadeUp" className="mb-6 mt-64">
          <ParallaxText speed={0.3}>
            <h2 className="lg:text-7xl text-3xl text-center text-[#4B4B4B] font-bold tracking-tight">
              STAFF OF SILENT DEDICATION
            </h2>
          </ParallaxText>
        </ScrollSection>

        <ScrollSection animation="fade" className="mb-8 px-6 max-w-3xl">
          <p className="text-center text-[#6B6B6B] lg:text-xl text-lg italic">
            Dedikasi tanpa gembar-gembor, kontribusi yang berbicara lebih keras
          </p>
        </ScrollSection>

        <ScrollRevealCard
          direction="right"
          className="mb-32 flex justify-center"
        >
          <MysteryCard department="STAFF OF SILENT DEDICATION">
            <CardKepengurusan
              loading="eager"
              img={dewanAward[2].img}
              department={dewanAward[2].award?.toUpperCase()}
              nama={dewanAward[2].name?.toUpperCase()}
            />
          </MysteryCard>
        </ScrollRevealCard>

        {/* ==================== HEAD OF EXCELLENCE ==================== */}
        <ScrollSection animation="fadeUp" className="mb-6 mt-64">
          <ParallaxText speed={0.35}>
            <h2 className="lg:text-8xl text-4xl text-center text-[#4B4B4B] font-bold tracking-tight">
              HEAD OF EXCELLENCE
            </h2>
          </ParallaxText>
        </ScrollSection>

        <ScrollSection animation="fade" className="mb-8 px-6 max-w-3xl">
          <p className="text-center text-[#6B6B6B] lg:text-xl text-lg italic">
            Kepemimpinan yang menginspirasi, standar tinggi yang tak tertandingi
          </p>
        </ScrollSection>

        <ScrollRevealCard direction="up" className="mb-32 flex justify-center">
          <MysteryCard department="HEAD OF EXCELLENCE">
            <CardKepengurusan
              loading="eager"
              img={dewanAward[3].img}
              department={dewanAward[3].award?.toUpperCase()}
              nama={dewanAward[3].name?.toUpperCase()}
            />
          </MysteryCard>
        </ScrollRevealCard>

        {/* ==================== CLOSING ==================== */}
        <div className="py-96 px-6">
          <ScrollSection animation="fadeUp" className="max-w-3xl mx-auto">
            <ScrollNarration
              text="Terima kasih atas dedikasi dan kerja keras seluruh anggota Kabinet Devoria. Semoga prestasi ini menjadi motivasi untuk terus berkarya dan memberikan yang terbaik!"
              className="text-center text-[#4B4B4B] lg:text-5xl text-3xl font-semibold leading-relaxed"
              revealType="word"
            />
          </ScrollSection>
        </div>
      </div>
    </PageLoader>
  );
}

/**
 * HeroSection - Animated hero with entrance effects
 */
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const letterVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -45 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.5 + i * 0.05,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const titleWords = ["EXECUTIVE", "AWARD"];
  const subtitleWords = ["KABINET", "DEVORIA"];

  return (
    <Motion.div
      ref={ref}
      style={{ scale, opacity, y }}
      className="min-h-screen flex flex-col items-center justify-center pt-[100px] will-change-transform relative"
    >
      {/* Particles background */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={80}
        staticity={30}
        ease={80}
        size={0.6}
        color="#4B4B4B"
      />

      {/* Main Title */}
      <div className="relative z-10 flex flex-wrap justify-center gap-4 lg:gap-8 mb-4">
        {titleWords.map((word, wordIndex) => (
          <div key={wordIndex} className="flex overflow-hidden">
            {word.split("").map((char, charIndex) => (
              <Motion.span
                key={charIndex}
                custom={wordIndex * 10 + charIndex}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="text-[#4B4B4B] text-5xl lg:text-9xl font-black tracking-tight"
                style={{ display: "inline-block" }}
              >
                {char}
              </Motion.span>
            ))}
          </div>
        ))}
      </div>

      {/* Subtitle in black box */}
      <Motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="bg-black px-6 lg:px-12 py-3 lg:py-4 origin-center"
      >
        <div className="flex gap-4 lg:gap-8">
          {subtitleWords.map((word, wordIndex) => (
            <div key={wordIndex} className="flex overflow-hidden">
              {word.split("").map((char, charIndex) => (
                <Motion.span
                  key={charIndex}
                  custom={20 + wordIndex * 10 + charIndex}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-white text-2xl lg:text-6xl font-bold tracking-wide"
                  style={{ display: "inline-block" }}
                >
                  {char}
                </Motion.span>
              ))}
            </div>
          ))}
        </div>
      </Motion.div>

      {/* HIMARPL UPI */}
      <Motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="text-[#4B4B4B] text-lg lg:text-3xl font-semibold tracking-[0.2em] mt-8"
      >
        HIMARPL UPI
      </Motion.p>

      {/* Year */}
      <Motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 0.6, ease: "backOut" }}
        className="text-[#4B4B4B] text-4xl lg:text-7xl font-bold mt-4"
      >
        2025
      </Motion.p>

      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 3 },
          y: { delay: 3, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-12 flex flex-col items-center"
      >
        <p className="text-[#9B9B9B] text-sm tracking-widest mb-2">SCROLL</p>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#9B9B9B] to-transparent" />
      </Motion.div>
    </Motion.div>
  );
}

/**
 * DewanHeroSection - Animated hero for Dewan Award section
 * Animations trigger when scrolling into view
 */
function DewanHeroSection() {
  const letterVariants = {
    hidden: { opacity: 0, y: 100, rotateX: -45 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: 0.3 + i * 0.05,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const titleWords = ["DEWAN", "AWARD"];
  const subtitleWords = ["KABINET", "DEVORIA"];

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-16 relative">
      {/* Particles background */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={60}
        staticity={40}
        ease={70}
        size={0.5}
        color="#6B6B6B"
      />

      {/* Main Title - DEWAN AWARD */}
      <div className="relative z-10 flex flex-wrap justify-center gap-4 lg:gap-8 mb-4">
        {titleWords.map((word, wordIndex) => (
          <Motion.div
            key={wordIndex}
            className="flex overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            {word.split("").map((char, charIndex) => (
              <Motion.span
                key={charIndex}
                custom={wordIndex * 10 + charIndex}
                variants={letterVariants}
                className="text-[#4B4B4B] text-5xl lg:text-9xl font-black tracking-tight"
                style={{ display: "inline-block" }}
              >
                {char}
              </Motion.span>
            ))}
          </Motion.div>
        ))}
      </div>

      {/* Subtitle in black box - KABINET DEVORIA only */}
      <Motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.8, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="bg-black px-6 lg:px-12 py-3 lg:py-4 origin-center relative z-10"
      >
        <div className="flex gap-4 lg:gap-8">
          {subtitleWords.map((word, wordIndex) => (
            <Motion.div
              key={wordIndex}
              className="flex overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
            >
              {word.split("").map((char, charIndex) => (
                <Motion.span
                  key={charIndex}
                  custom={20 + wordIndex * 10 + charIndex}
                  variants={letterVariants}
                  className="text-white text-2xl lg:text-6xl font-bold tracking-wide"
                  style={{ display: "inline-block" }}
                >
                  {char}
                </Motion.span>
              ))}
            </Motion.div>
          ))}
        </div>
      </Motion.div>

      {/* HIMARPL UPI */}
      <Motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="text-[#4B4B4B] text-lg lg:text-3xl font-semibold tracking-[0.2em] mt-8 relative z-10"
      >
        HIMARPL UPI
      </Motion.p>

      {/* Year */}
      <Motion.p
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 1.6, duration: 0.6, ease: "backOut" }}
        className="text-[#4B4B4B] text-4xl lg:text-7xl font-bold mt-4 relative z-10"
      >
        2025
      </Motion.p>
    </div>
  );
}
