import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function EmailForm() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_4m5tap6", "template_0neykyf", form.current, "wGQqOPYlmdmNFzPvV").then(
      // eslint-disable-next-line no-unused-vars
      (result) => {
        setSuccess(true);
        form.current.reset();
      },
      (error) => {
        alert("Gagal mengirim pesan!");
        console.error(error.text);
      }
    );
  };

  return (
    <>
      {success && (
        <div className="min-h-screen  z-100 fixed inset-0  overflow-y-auto">
          <div className="  bg-white w-full h-screen">
            <img src="/ornaments/Vector.svg" alt="vector" className="absolute lg:-top-36 top-24 w-full -z-10" />
            <p className="font-semibold lg:text-2xl text-[#AFAFAF] text-center lg:mt-[96px] mt-[80px]">KEEP STRUGGLE, STAY TOGETHER</p>

            <div className="flex items-center rounded-full w-fit bg-[#EAF6EB] lg:p-10 p-[14px] mx-auto mt-[50px] z-50">
              <div className="flex items-center rounded-full bg-[#CCEDC9] w-fit lg:p-[30px] p-[10px]">
                <Icon icon="icon-park-solid:check-one" className="lg:w-[150px] w-[70px] h-[70px] lg:h-[150px] text-[#28BA2D]" />
              </div>
            </div>

            <div className="mx-auto flex flex-col mt-10 lg:gap-[30px] gap-4 lg:w-auto w-[343px]">
              <p className="font-semibold lg:text-5xl text-2xl text-black text-center">Pesanmu telah berhasil dikirim</p>
              <p className="lg:text-2xl text-black text-center">Mohon tunggu balasan dari kami yaa!</p>
            </div>

            <div className="hover:cursor-pointer px-6 py-4 border border-black rounded-2xl lg:w-fit mx-auto mt-[18px]  w-[343px]" onClick={() => (window.location.href = "/")}>
              <p className="font-semibold text-2xl text-center">Kembali ke Beranda</p>
            </div>
          </div>
        </div>
      )}

      {!success && (
        <div className="h-screen overflow-y-scroll relative">
          <form ref={form} onSubmit={sendEmail} className="lg:mx-[110px] lg:my-[68px] my-6 mx-4 h-fit relative">
            <img src="/cabinetsLogo/devoria.png" alt="Devoria" className="absolute top-1/3 left-1/4 lg:left-auto lg:right-0 lg:w-[362px] w-[200px] opacity-[12%] -z-10" />
            <div className="flex flex-col lg:gap-10 gap-[85px]">
              <div className="flex gap-4 items-center cursor-pointer hover:bg-gray-100 px-4 py-2 rounded-2xl w-fit" onClick={() => (window.location.href = "/contact")}>
                <Icon icon="mingcute:left-line" className="lg:w-10 lg:h-10 w-6 h-6" />
                <p className="font-medium lg:text-2xl text-base">Kembali</p>
              </div>

              <div className="max-w-[1000px]">
                <p className="font-semibold lg:text-8xl text-[40px] lg:text-start text-center ">Sampaikan Aspirasi dan Pesan Anda</p>
              </div>
            </div>

            <div className="mt-16 flex flex-col lg:gap-10 gap-4">
              <div className="flex flex-col gap-4">
                <label>
                  <p className="font-bold text-2xl">Masukkan Email Anda</p>
                </label>
                <input type="email" name="from_email" className="border-1 border-[#979797] rounded-2xl px-6 py-4 lg:w-[800px]" placeholder="example@gmail.com" required />
              </div>

              <div className="flex flex-col gap-4">
                <label>
                  <p className="font-bold text-2xl">Masukkan Nama Anda</p>
                </label>
                <input type="text" name="from_name" className="border-1 border-[#979797] rounded-2xl px-6 py-4 lg:w-[800px]" placeholder="Ucup Surucup" required />
              </div>

              <div className="lg:flex flex-row items-end lg:justify-between w-full">
                <div className="flex flex-col gap-4">
                  <label>
                    <p className="font-bold text-2xl">Ketik Pesan Anda</p>
                  </label>
                  <textarea name="message" rows="4" className="border-1 border-[#979797] rounded-2xl px-6 py-4 lg:w-[800px] w-full lg:max-h-[250px]" placeholder="Ketik aspirasimu disini" required />
                </div>

                <div className="flex flex-col mx-auto gap-4">
                  <button type="submit" className="hover:cursor-pointer lg:block hidden ms-[128px] px-16 py-2 rounded-2xl bg-black text-white text-[20px]">
                    Kirim
                  </button>
                </div>
              </div>

              <button type="submit" className="lg:hidden block hover:cursor-pointer mt-6  px-6 py-2 rounded-2xl bg-black text-white">
                Kirim
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
