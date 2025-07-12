import AnimatedLongText from "../components/AnimatedLongText";
import AnimatedLongText2 from "../components/AnimatedLongText2";
import { Link } from "react-router-dom";
import { CardDedication } from "../components/CardDedication";
import { useEffect, useState, useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Transition from "@/components/Transition";

export default function Dedication() {
  const allDedikasiItems = useMemo(
    () => [
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
    ],
    []
  );

  const [displayedItems, setDisplayedItems] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(0);
  const itemsPerLoad = 3;
  useEffect(() => {
    setItemsToShow(3);
  }, []);

  useEffect(() => {
    setDisplayedItems(allDedikasiItems.slice(0, itemsToShow));
  }, [allDedikasiItems, itemsToShow]);
  const fetchMoreData = () => {
    if (itemsToShow >= allDedikasiItems.length) {
      return;
    }

    setTimeout(() => {
      setItemsToShow((prev) => Math.min(prev + itemsPerLoad, allDedikasiItems.length));
    }, 100);
  };

  return (
    <>
      {location.pathname === "/dedication" && <Transition />}

      <div
        className={`bg-[#10316B] w-full min-h-screen overflow-y-clip z-10 relative flex flex-col justify-center items-center lg:pb-[96px] pb-[84px] ${
          location.pathname === "/dedication" ? "-mt-[140px] lg:pt-[240px] pt-[228px]" : "mt-0 lg:pt-[123px] pt-[68px]"
        }`}
        id="scrollableDiv"
      >
        <img src="/ornaments/Vector 67.svg" alt="vector" className="lg:w-[237px] w-[190px] absolute -top-[90px] right-0 -z-10" />
        <img src="/ornaments/Group 245.svg" alt="pixel" className="lg:w-[672px] w-[300px] absolute top-[280px] -z-10" />
        <img src="/ornaments/Vector 50.svg" alt="vector" className="lg:w-[306px] w-[250px] absolute bottom-0 left-0 -z-10" />
        <div className="flex flex-col justify-center items-center lg:gap-8 gap-6 lg:w-[619px] w-[343px]">
          <AnimatedLongText2 text="Dedikasi Kami" className="lg:text-8xl/[54px] text-white text-center text-[64px]/[72px] z-10" />

          <AnimatedLongText
            className="text-base/[24px] text-white text-center"
            text="Di bawah naungan Kabinet Devoria, HIMARPL UPI berkomitmen untuk menjadi wadah terbaik dalam mengembangkan potensi akademik, profesional, dan sosial seluruh anggota."
          />
        </div>

        <InfiniteScroll
          dataLength={displayedItems.length}
          next={fetchMoreData}
          hasMore={itemsToShow < allDedikasiItems.length}
          loader={<h4 className="text-white">Loading...</h4>}
          className="flex flex-wrap items-center lg:gap-9 xl:gap-2 gap-4 justify-center lg:w-[1280px] xl:w-[1220px] lg:mt-[103px] mt-8 z-10 overflow-y-scroll"
          scrollableTarget="scrollableDiv"
        >
          {displayedItems.map((item, index) => (
            <CardDedication key={index} index={index} img={item.img} bgColor={item.bgColor} title={item.title} />
          ))}
        </InfiniteScroll>

        {itemsToShow >= allDedikasiItems.length && (
          <div className="w-full text-center mt-4">
            <h4 className="text-white">You have seen it all</h4>
          </div>
        )}
      </div>
    </>
  );
}
