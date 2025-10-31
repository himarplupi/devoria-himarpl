import { useState, useEffect } from "react";
import AnimatedLongText from "../components/AnimatedLongText";
import AnimatedLongText2 from "../components/AnimatedLongText2";
import { Link } from "react-router-dom";
import { Card } from "../components/CardNews";
// import { CarouselNews } from "../components/CarouselNews";
import axios from "axios";
import Loading from "@/components/LoadingSpinner";
import Transition from "@/components/Transition";
import { CarouselNewsLatest, CarouselNewsx } from "@/components/CarouselNews";

const PageNews = () => {
  const [news, setNews] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/news?page=1&limit=100&order=desc`)
      // .get("https://api.himarpl.org/api/v1/news?page=1&limit=100&order=desc")
      .then((response) => {
        const allNews = response.data.data || [];
        setNews(allNews);
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
    // .finally(() => {
    //   setIsLoading(false);
    // });
  }, []);

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <Loading />
  //     </div>
  //   );
  // }
  const latestNews = news.slice(0, 2);
  const otherNews = news.slice(2);

  return (
    <>
      <Transition />
      {/* <Transition /> */}
      {news.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center min-h-screen">
          <img src="/himarpl/Maskot4.1.png" alt="Belum ada berita" className="w-50 h-50  opacity-70" />
          <AnimatedLongText text={"There is no news yet"} className=" md:text-xl text-md text-center mb-5" />
          <div className="border bg-black h-14 flex justify-center items-center py-4 px-6 cursor-pointer rounded-xl hover:scale-110 hover:shadow-lg transition duration-300">
            <Link to="/" className=" text-[16px]/[24px] ">
              <p className="h-14 py-4 px-6 rounded-[64px] text-white">Kembali ke beranda</p>
            </Link>
          </div>
        </div>
      ) : (
        <div className={`bg-white flex flex-col items-center pb-[50px] pt-40 lg:pt-[120px] min-h-screen `}>
          <CarouselNewsLatest data={latestNews} />

          <AnimatedLongText text="Semua Berita" className="text-2xl font-bold mt-10 mb-4" />
          <p className="text-base text-center mb-6">Telusuri seluruh berita seputar HIMARPL dan aktivitas kampus. Jangan lewatkan informasi terbaru, agenda penting, dan kisah inspiratif dari mahasiswa RPL.</p>
          <CarouselNewsx data={otherNews} />
        </div>
      )}
    </>
  );
};

export default PageNews;
