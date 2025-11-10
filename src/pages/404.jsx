import AnimatedLongText from "../components/AnimatedLongText";
import { Link } from "react-router-dom";
export default function PageNotFound() {
  return (
    <div className="w-full h-screen flex items-center ">
      <div className="flex flex-col items-center justify-center mx-auto gap-5 pl-5 pr-5">
        <AnimatedLongText text={"Looking for something?"} className="font-bold md:text-3xl text-center text-xl" />
        <AnimatedLongText text={"The page you are looking for does not exist, or maybe it's still under development :D."} className=" md:text-xl text-center text-md" />

        <div className="border bg-black h-14 flex justify-center items-center py-4 px-6 cursor-pointer rounded-xl hover:scale-110 hover:shadow-lg transition duration-300">
          <Link to="/" className=" text-[16px]/[24px] ">
            <p className="h-14 py-4 px-6 rounded-[64px] text-white">Kembali ke beranda</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
