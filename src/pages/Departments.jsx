import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import AnimatedLongText from "../components/AnimatedLongText";
import AnimatedLongText2 from "../components/AnimatedLongText2";
import { CardKepengurusan } from "../components/CardKepengurusan";

export const Departments = () => {
  const location = useLocation();
  const [type, setType] = useState("be");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [kepengurusanData, setKepengurusanData] = useState([]);
  
  useEffect(() => {
    // Set type based on the current path
    if (location.pathname === "/be") {
      setType("be");
    } else if (location.pathname === "/dp") {
      setType("dp");
    }
  }, [location.pathname]);

  useEffect(() => {
    const fetchKepengurusanData = async () => {
      try {
        // Use the proxy path instead of the full URL
        const endpoint = type === "be" 
          ? "/api/api/v1/departments?type=be&year=2024" 
          : "/api/api/v1/departments?type=dp&year=2024";
        const response = await axios.get(endpoint);
        const data = response.data;
        setKepengurusanData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message || "An error occurred while fetching data");
        setLoading(false);
        
        // Fallback data in case of API error
        const fallbackData = type === "be" 
          ? [
              {
                image: "/kepengurusan/be/ketua.jpg",
                acronym: "KETUA",
                nama: "FADLI MAHESA"
              },
              {
                image: "/kepengurusan/be/wakil.jpg",
                acronym: "WAKIL KETUA",
                nama: "NUR FITRIANI"
              },
              {
                image: "/kepengurusan/be/sekretaris.jpg",
                acronym: "SEKRETARIS",
                nama: "MUHAMMAD FADHEL RAIHAN"
              },
              {
                image: "/kepengurusan/be/bendahara.jpg",
                acronym: "BENDAHARA",
                nama: "RIFIANI TASRIFIN"
              }
            ]
          : [
              {
                image: "/kepengurusan/dp/ketua.jpg",
                acronym: "KETUA",
                nama: "ASEP NADHIRIN"
              },
              {
                image: "/kepengurusan/dp/wakil.jpg",
                acronym: "WAKIL KETUA",
                nama: "ACHMAD SOEWARDI"
              },
              {
                image: "/kepengurusan/dp/sekretaris.jpg",
                acronym: "SEKRETARIS",
                nama: ""
              },
              {
                image: "/kepengurusan/dp/bendahara.jpg",
                acronym: "BENDAHARA",
                nama: ""
              }
            ];
        
        setKepengurusanData(fallbackData);
      }
    };

    fetchKepengurusanData();
  }, [type]); // Re-fetch when type changes

  // Descriptions
  const beDescription = "Badan Eksekutif bertanggung jawab untuk melaksanakan berbagai kegiatan dan program yang terkait dengan pengembangan dan peningkatan kualitas mahasiswa jurusan rekayasa perangkat lunak. Tugas utama badan eksekutif adalah mengelola dan menjalankan rencana kerja serta keputusan yang telah disepakati bersama oleh anggota himpunan. Dengan demikian, badan eksekutif memiliki peran penting dalam memastikan berjalannya kegiatan dan mencapai visi misi HIMARPL.";
  const dpDescription = "Dewan Perwakilan bertanggung jawab dalam memastikan bahwa kebijakan dan keputusan yang diambil oleh Badan Eksekutif sesuai dengan visi dan misi Himpunan Mahasiswa Rekayasa Perangkat Lunak. Dimana dewan perwakilan melakukan pengawasan yang mencakup evaluasi terhadap pelaksanaan program, keuangan, dan kegiatan lainnya yang dilaksanakan oleh Badan Eksekutif. Dengan demikian, dewan perwakilan berperan sebagai mekanisme kontrol internal yang membantu menjaga akuntabilitas dan transparansi dalam pengelolaan organisasi.";

  // Determine which description to use based on type
  const description = type === "be" ? beDescription : dpDescription;
  const title = type === "be" ? "BADAN EKSEKUTIF" : "DEWAN PERWAKILAN";

  // Show loading or error states
  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error && kepengurusanData.length === 0) return <div className="flex justify-center items-center h-screen">Error: {error}</div>;

  return (
    <div id="departments" className="bg-[url(/bg/Bg-Low.png)] pt-[68px] flex flex-col items-center pb-[50px]">
      <div className="flex flex-col items-center lg:w-[1210px] w-[343px] gap-8">
        <div>
          <AnimatedLongText className="text-7xl text-center text-[#4B4B4B] font-semibold" text={"STRUKTUR KEPENGURUSAN"}/>
        </div>
        <div className="bg-black">
          <AnimatedLongText className="text-8xl text-center text-white font-bold" text={title}/>
        </div>
        <div className="">
          <AnimatedLongText className="text-4xl text-center text-[#4B4B4B] font-semibold tracking-widest" text={"HIMARPL UNIVERSITAS PENDIDIKAN INDONESIA"}/>
        </div>
        <div className="">
          <AnimatedLongText2 className="text-5xl text-center text-[#4B4B4B] font-medium tracking-wider" text={"2025"}/>
        </div>
        <div className="pt-5">
          <AnimatedLongText className="text-md text-center text-black font-light" text={description}/>
        </div>
      </div>
      {error && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 my-4" role="alert">
          <p>Note: Using fallback data. API error: {error}</p>
        </div>
      )}
      <div className="flex items-center justify-center w-full pt-5">
        <div className="flex flex-row flex-wrap gap-x-48 gap-y-28 justify-center my-10">
          {kepengurusanData.map((item, index) => (
            <div key={index} className="">
              <CardKepengurusan img={item.image} department={item.acronym} nama={item.nama} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;