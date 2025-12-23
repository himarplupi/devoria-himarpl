import { Link, useLocation } from "react-router-dom";
import ShineBorder from "@/components/magicui/shine-border";

export const CardKepengurusan = ({
  img,
  department,
  nama,
  deptType,
  username,
  loading = "lazy",
  landscape = false,
  showShineBorder = false,
}) => {
  const location = useLocation();
  const linkRoute = `/${deptType}/${department.toLowerCase()}`;
  const shouldShowButton =
    location.pathname === "/dp" || location.pathname === "/be";

  const cardContent = (
    <div
      className={`flex flex-col gap-6 ${
        landscape ? "lg:w-[700px]" : "lg:max-h-[676px] lg:w-[400px]"
      }`}
    >
      <div className="flex flex-col w-full h-fit bg-[#141414] rounded-3xl items-center px-8 py-6 gap-6">
        <img
          src="/himarpl/Group 247.svg"
          alt="himarpl"
          className="w-[196px] "
        />
        <div className="w-full flex flex-col justify-center items-center rounded-2xl bg-white">
          <img
            src={img}
            alt={`${
              location.pathname === "/be" || location.pathname === "/dp"
                ? department
                : nama
            }`}
            className={`rounded-t-2xl object-cover w-full ${
              landscape ? "aspect-video" : "h-96"
            } ${!img ? "bg-[#6C6C6C]" : ""}`}
            loading={loading}
            decoding="async"
          />
          <div className="bg-[url(/bg/Bg-Fit-Low.png)] bg-cover flex flex-col justify-center items-center w-full h-[60px] rounded-b-2xl">
            <h4 className="text-black text-4xl font-extrabold">{department}</h4>
          </div>
        </div>
        <div
          className={`flex flex-row gap-5 bg-[#141414]  ${
            location.pathname === "/be" ||
            location.pathname === "/dp" ||
            location.pathname === "/awarding"
              ? "justify-center"
              : "justify-between"
          } items-center w-full h-fit`}
        >
          {nama && (
            <div
              className={` ${
                location.pathname === "/be" ||
                location.pathname === "/dp" ||
                location.pathname === "/awarding"
                  ? ""
                  : "w-[170px] items-start min-h-[50px]"
              }`}
            >
              <h2 className="text-white text-xl font-medium">{nama}</h2>
            </div>
          )}
          <div
            className={`${
              location.pathname === "/be" ||
              location.pathname === "/dp" ||
              location.pathname === "/awarding"
                ? "hidden"
                : "flex"
            } flex flex-row gap-3 `}
          >
            <Link to={`https://www.instagram.com/${username}`} target="_blank">
              <img src="/icons/instagram.svg" alt="instagram" />
            </Link>
          </div>
        </div>
      </div>
      {shouldShowButton && (
        <div className="flex flex-col justify-center items-center w-full hover:scale-105 transition-all duration-300">
          <Link
            to={linkRoute}
            className="bg-transparent w-full h-[60px] rounded-2xl border-2 border-black"
          >
            <p className="flex font-medium justify-center items-center w-full h-full">
              Lihat Program Kerja
            </p>
          </Link>
        </div>
      )}
    </div>
  );

  if (showShineBorder) {
    return (
      <ShineBorder
        borderRadius={24}
        borderWidth={2}
        duration={10}
        shineColor={["#FFD700", "#FFA500", "#FF6347"]}
      >
        {cardContent}
      </ShineBorder>
    );
  }

  return cardContent;
};
