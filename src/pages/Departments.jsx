import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { api } from "../services/apiService";
import AnimatedLongText from "../components/AnimatedLongText";
import AnimatedLongText2 from "../components/AnimatedLongText2";
import { CardKepengurusan } from "../components/CardKepengurusan";
import Transition from "@/components/Transition";

export const Departments = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [kepengurusanData, setKepengurusanData] = useState([]);

  const path = location.pathname;
  const type = path === "/be" ? "be" : "dp";

  useEffect(() => {
    const fetchKepengurusanData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Use the configured API instance from apiService
        const response = await api.get(`/departments?type=${type}&year=2024`);
        console.log(response.data.data);

        const data = response.data;
        setKepengurusanData(data.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message || "An error occurred while fetching data");

        // Set empty array as fallback
        setKepengurusanData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchKepengurusanData();
  }, [type]); // Re-fetch when type changes

  // Descriptions
  const descriptions = {
    be: "Badan Eksekutif bertanggung jawab untuk melaksanakan berbagai kegiatan dan program yang terkait dengan pengembangan dan peningkatan kualitas mahasiswa jurusan rekayasa perangkat lunak. Tugas utama badan eksekutif adalah mengelola dan menjalankan rencana kerja serta keputusan yang telah disepakati bersama oleh anggota himpunan. Dengan demikian, badan eksekutif memiliki peran penting dalam memastikan berjalannya kegiatan dan mencapai visi misi HIMARPL.",
    dp: "Dewan Perwakilan bertanggung jawab dalam memastikan bahwa kebijakan dan keputusan yang diambil oleh Badan Eksekutif sesuai dengan visi dan misi Himpunan Mahasiswa Rekayasa Perangkat Lunak. Dimana dewan perwakilan melakukan pengawasan yang mencakup evaluasi terhadap pelaksanaan program, keuangan, dan kegiatan lainnya yang dilaksanakan oleh Badan Eksekutif. Dengan demikian, dewan perwakilan berperan sebagai mekanisme kontrol internal yang membantu menjaga akuntabilitas dan transparansi dalam pengelolaan organisasi.",
  };

  const titles = {
    be: "BADAN EKSEKUTIF",
    dp: "DEWAN PERWAKILAN",
  };

  // Determine which description and title to use based on type
  const description = descriptions[type];
  const title = titles[type];

  // Show loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[url(/bg/Bg-Low.png)] w-full">
        <h1 className="text-xl font-medium text-gray-700">Loading...</h1>
      </div>
    );
  }

  // Show error state when no data and error exists
  if (error && kepengurusanData.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[url(/bg/Bg-Low.png)]">
        <div className="text-center">
          <div className="text-xl text-red-500 mb-4">Error: {error}</div>
          <button onClick={() => window.location.reload()} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Transition />
      <div id="departments" className="bg-[url(/bg/Bg-Low.png)] pt-[68px] flex flex-col items-center pb-[50px] w-full">
        <div className="flex flex-col items-center lg:w-[1210px] w-[343px] lg:gap-8 gap-6">
          <AnimatedLongText className="lg:text-7xl text-[32px] text-center text-[#4B4B4B] font-semibold" text={"STRUKTUR KEPENGURUSAN"} />
          <div className="bg-black">
            <AnimatedLongText className="lg:text-8xl text-[32px] text-center text-white font-bold" text={title} />
          </div>
          <AnimatedLongText className="lg:text-4xl text-2xl text-center text-[#4B4B4B] font-semibold lg:tracking-widest" text={"HIMARPL UNIVERSITAS PENDIDIKAN INDONESIA"} />
          <AnimatedLongText2 className="lg:text-5xl text-2xl text-center text-[#4B4B4B] font-medium tracking-wider" text={"2025"} />
          <AnimatedLongText className=" text-center text-black font-light" text={description} />
        </div>
        {error && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 my-4" role="alert">
            <p>Note: Using fallback data. API error: {error}</p>
          </div>
        )}
        <div className="flex items-center justify-center w-full pt-5 mx-4">
          <div className="flex flex-row flex-wrap lg:gap-x-48 lg:gap-y-28 justify-center my-10 lg:w-[1000px] w-[343px] gap-[55px]">
            {kepengurusanData.map((item, index) => (
              <CardKepengurusan key={index} img={item.image} department={item.acronym?.toUpperCase()} nama={item.nama?.toUpperCase()} deptType={type} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Departments;
