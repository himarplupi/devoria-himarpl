import Transition from "@/components/Transition";
import AnimatedImage from "../components/AnimatedImage";
import AnimatedLongText from "../components/AnimatedLongText";
import AnimatedText from "../components/AnimatedText";
export default function Logo() {
  const logoPhilosophy = [
    {
      img: "/himarpl/logo.svg",
      desc: "Kombinasi ketiga warna ini memiliki makna kehangatan, kecerdasan, optimisme, dan semangat serta perjuangan yang dilakukan dengan kesungguhan dengan penuh rasa tanggung jawab dalam suatu tindakan.",
    },
    {
      img: "/himarpl/logo(2).svg",
      desc: "Bentuk hexagon terinspirasi dari bentuk sarang lebah yang diciptakan oleh Tuhan dengan teknologi yang sangat tinggi, seperti sarang lebah dengan bentuk hexagonalnya yang memberikan efektifitas dengan hasil yang maksimal.",
    },
    {
      img: "/himarpl/Logo (3).svg",
      desc: "Bentuk Jaringan (Connection) melambangkan hubungan dan relasi yang kuat, cepat, kompetitif, dan semangat juara. Tingkatan tersebut juga berarti selalu ada pencapaian dan perkembangan yang didapat.",
    },
    {
      img: "/himarpl/Logo (4).svg",
      desc: "Bentuk Alat ini melambangkan keteknikan yang mengacu pada 3 bentuk landasan, yaitu hubungan, kerja sama, dan keterkaitan. Dimana ketiga landasan tersebut menjadi pondasi awal dalam meraih keberhasilan.",
    },
  ];

  const cabinetLogoPhilosophy = [
    {
      img: "/cabinetsLogo/Devoria.svg",
      desc: "Logo Kabinet Devoria mengusung kombinasi warna biru tua, biru muda, dan kuning emas. Perpaduan warna dalam logo Devoria menggambarkan kabinet yang teguh dan profesional dalam menjalankan visi dan tanggung jawab. Inovatif dan adaptif dalam menciptakan karya dan program kerja. Berorientasi pada kemuliaan dan dampak positif, dengan energi terang yang menginspirasi.",
    },
    {
      img: "/cabinetsLogo/Frame 108.svg",
      desc: "Simbol bintang di puncak logo mencerminkan cahaya, kemuliaan, dan arah tujuan. Bintang menjadi simbol bahwa setiap langkah kabinet dilandasi dengan harapan besar, semangat kejayaan, dan kontribusi positif yang menerangi organisasi dan lingkungan sekitar.",
    },
    {
      img: "/cabinetsLogo/Frame 109.svg",
      desc: 'Bentuk infinity yang membentuk inisial D dan G, merupakan singkatan dari "Developer Gloria" yang menjadi kepanjangan nama dari kabinet Devoria. Simbol infinity (∞) melambangkan semangat tanpa batas, inovasi yang terus berkembang, serta dedikasi tanpa henti. Bentuk ini juga menegaskan identitas kabinet sebagai pencipta kemuliaan yang konsisten dan progresif.',
    },
    {
      img: "/cabinetsLogo/Frame 110.svg",
      desc: "Siluet buku terbuka menjadi simbol ilmu, edukasi, dan pondasi intelektual. Hal ini menunjukkan setiap kreativitas dalam program kerja Kabinet Devoria Hima RPL UPI selalu berlandaskan pada pengetahuan dan pembelajaran yang berkelanjutan.",
    },
    {
      img: "/cabinetsLogo/Frame 111.svg",
      desc: "Ujung huruf membentuk kepakan sayap, simbol dari kebebasan, semangat tinggi, dan cita-cita mulia. Sayap mencerminkan bahwa Devoria siap terbang tinggi, membawa visi besar, serta mendorong anggota-anggotanya untuk tumbuh dan berkembang menjadi pembawa perubahan.",
    },
    {
      img: "/cabinetsLogo/Frame 113.svg",
      desc: "Elemen roda pada tulisan DEVORIA melambangkan gerak dinamis, kolaborasi, dan kerja keras berkesinambungan. Roda menggambarkan Kabinet Devoria senantiasa bergerak maju dengan ritme yang selaras, mendukung visi besar Devoria sebagai pembawa kemuliaan melalui tindakan nyata.",
    },
  ];

  return (
    <>
      <Transition />
      <div className="flex flex-col items-center mx-auto lg:w-[1206px] pt-[80px]">
        <AnimatedLongText className="font-bold lg:text-8xl text-[40px] lg:pt-16 pt-10" text="FILOSOFI LOGO" />

        <div className="flex flex-col items-center lg:gap-[100px] gap-[64px] lg:mt-[155px] mt-[64px] w-full">
          {logoPhilosophy.map((item, index) => (
            <div className="flex lg:flex-row flex-col items-center w-full lg:gap-auto gap-6 lg:justify-between justify-center" key={index}>
              <AnimatedImage src={item.img} alt="logo" className="lg:w-[262px] w-[120px]" animationType="slideRight" />

              <AnimatedLongText className="lg:text-base/[31px] text-base/[24px] text-[#404040] lg:w-[784px] w-[343px] lg:text-start text-center" text={item.desc} />
            </div>
          ))}
        </div>

        <AnimatedLongText className="font-bold lg:text-8xl text-[40px] mt-[100px] text-center" text="FILOSOFI LOGO KABINET" />

        <div className="flex  flex-col items-center lg:gap-[140px] gap-[64px] lg:mt-[155px] my-[64px] w-full">
          {cabinetLogoPhilosophy.map((item, index) => (
            <div className="flex lg:flex-row flex-col items-center w-full lg:gap-auto gap-6 justify-between" key={index}>
              <AnimatedImage src={item.img} alt="logo" className="lg:w-[300px] w-[120px]" animationType="slideRight" />

              <AnimatedLongText className="lg:text-base/[31px] text-base/[24px] text-[#404040] lg:w-[784px] w-[343px] lg:text-start text-center" text={item.desc} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
