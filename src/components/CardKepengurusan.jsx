import { Link } from "react-router-dom";

export const CardKepengurusan = ({ img, department, nama }) => {
    return (
      <div>
        <div className="flex flex-col w-full min-h-[600px] bg-[#141414] rounded-3xl items-center px-8">
          <img src="/himarpl/Group 247.svg" alt="himarpl" className="w-[240px] p-5" />
          <div className="w-full flex flex-col justify-center items-center rounded-2xl bg-white">
            <img src={img} alt="kepengurusan" className="w-[343px] h-[380px] rounded-t-2xl object-cover" />
            <div className="bg-[url(/bg/Bg-Fit-Low.png)] object-fill flex flex-col justify-center items-center w-full h-[60px] rounded-b-2xl">
              <h4 className="text-black text-4xl font-extrabold">{department}</h4>
            </div>
          </div>
          <div className="flex flex-row gap-5 bg-[#141414] pt-5 justify-between items-center w-full pb-5">
            <div className="w-[170px] items-start min-h-[50px]">
              <h2 className="text-white text-xl font-medium">{nama}</h2>
            </div>
            <div className="flex flex-row gap-3 ">
              <img src="/icons/instagram.svg" alt="instagram" />
              <img src="/icons/github-logo.svg" alt="github" />
              <img src="/icons/profile.svg" alt="profile" />
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-6 justify-center items-center w-full">
          <Link to={`/${department.toLowerCase().includes('ketua') || department.toLowerCase().includes('wakil') || department.toLowerCase().includes('sekretaris') || department.toLowerCase().includes('bendahara') ? '' : department.toLowerCase()}`} className="bg-transparent w-full h-[60px] rounded-2xl border-2 border-black">
            <p className="flex font-medium justify-center items-center w-full h-full">Lihat Program Kerja</p>
          </Link>
        </div>
      </div>
    );
};