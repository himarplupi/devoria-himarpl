import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useState, useRef, useEffect, useCallback } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import useSmoothScroll from "../hooks/useSmoothScroll";

export default function MainLayout() {
  const links = [
    { to: "/dedication", path: "dedication", name: "Dedikasi" },
    { to: "/berita", path: "berita", name: "Berita" },
    { to: "/struktur", path: "struktur", name: "Struktur Organisasi" },
    { to: "/contact", path: "contact", name: "Contacts" },
  ];

  const footerLinks = [
    [
      { to: "/blogs", label: "Other blogs" },
      { to: "/download", label: "Download" },
      { to: "/api", label: "API" },
      { to: "/integration", label: "Integrations" },
    ],
    [
      { to: "/partner", label: "Partner" },
      { to: "/writer", label: "Writer" },
      { to: "/review", label: "Customer Review" },
    ],
    [
      { to: "/be", label: "About Us" },
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms & Conditions" },
    ],
    [
      { to: "/help", label: "Help" },
      { to: "/resources", label: "Resources" },
      { to: "/contacts", label: "Contacts" },
    ],
  ];

  const sosmedLinks = [
    { to: "https://www.instagram.com/himarpl", icon: "mdi:instagram" },
    { to: "https://www.tiktok.com/@himarpl", icon: "ic:baseline-tiktok" },
    { to: "https://open.spotify.com/show/3U3iuQcBYyzC5c13UieYFQ?si=ac651a8e3cff407e", icon: "mdi:spotify" },
    { to: "https://www.youtube.com/@himarpl", icon: "mdi:youtube" },
  ];

  const location = useLocation(),
    currentPath = location.pathname.split("/")[1];

  const [isOpen, setIsOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  const dropdownRef = useRef(null);
  const sideBarRef = useRef(null);

  useEffect(() => {
    setOpenSidebar(false);
  }, [location]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const isActive = (path) => currentPath === path;

  const [showNavbar, setShowNavbar] = useState(true);
  const lastScroll = useRef(0);

  const handleScroll = useCallback((scrollY) => {
    if (scrollY > lastScroll.current && scrollY > 50) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    lastScroll.current = scrollY;
  }, []);
  const scrollRef = useSmoothScroll(handleScroll);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sideBarRef.current && !sideBarRef.current.contains(e.target)) {
        setOpenSidebar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div id="scrollableDiv" className="min-h-screen overflow-x-hidden relative" ref={scrollRef} style={{ height: "100vh" }}>
      <div className={`fixed top-0 left-0 w-full h-full z-[60] transform-all duration-600 ${openSidebar ? "translate-x-0" : "-translate-x-full"}`} onClick={() => setOpenSidebar(false)}>
        <div
          ref={sideBarRef}
          className={`fixed top-0 left-0 h-full w-[65%] bg-[#222222] pt-10 flex flex-col items-center transform transition-all duration-300 ${openSidebar ? "translate-x-0" : "-translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col justify-between items-start gap-16">
            <NavLink
              to={"/"}
              onClick={() => {
                if (currentPath === "") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              <img src="/himarpl/logo hima.png" alt="HIMARPL" className="w-[200px] h-auto" />
            </NavLink>

            <nav className="flex flex-col gap-4">
              <NavLink
                to={"/"}
                onClick={() => {
                  if (currentPath === "") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={`${currentPath === "" ? "text-white font-semibold" : "text-[#9C9C9C]"} `}
              >
                Beranda
              </NavLink>
              {links.map((link, i) => (
                <NavLink key={i} to={link.to} className={`${currentPath === link.path ? "text-white font-semibold" : "text-[#9C9C9C]"} `}>
                  {link.name}
                </NavLink>
              ))}
              <div className="relative " ref={dropdownRef}>
                <div onClick={() => setIsOpen(!isOpen)} className={`cursor-pointer ${["be", "dp", "logo"].includes(currentPath) ? "text-[#10316B] font-semibold" : "text-[#9C9C9C]"} flex items-center gap-1`}>
                  About Us
                  <Icon icon="mingcute:down-line" className={`w-6 h-6 transition-all duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </div>
                {isOpen && (
                  <div className="absolute mt-2  rounded-md p-2 z-50">
                    <NavLink to="/be" className={`block px-4 py-2 hover:bg-[#222222]/60 ${isActive("be") ? "text-[#10316B] font-semibold" : "text-[#9C9C9C]"}`}>
                      BE
                    </NavLink>
                    <NavLink to="/dp" className={`block px-4 py-2 hover:bg-[#222222]/60 ${isActive("dp") ? "text-[#10316B] font-semibold" : "text-[#9C9C9C]"}`}>
                      DP
                    </NavLink>
                    <NavLink to="/logo" className={`block px-4 py-2 hover:bg-[#222222]/60 ${isActive("logo") ? "text-[#10316B] font-semibold" : "text-[#9C9C9C]"}`}>
                      Logo
                    </NavLink>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className={`flex flex-col justify-center items-center lg:mt-[68px] mt-10`}>
        <div
          className={`sticky top-8 z-50 transition-transform duration-500 ${
            showNavbar ? "translate-y-0" : "-translate-y-[115px] "
          } bg-white flex flex-row gap-32 justify-between items-center lg:w-[1220px] mx-[110px] border border-[#A7A7A7] rounded-2xl lg:gap-auto  drop-shadow(0px_4px_12px_rgba(0,0,0,0.04)) lg:flex-row lg:px-0 px-4 min-w-[343px] h-[70px]`}
        >
          <div className="lg:hidden">
            <Icon icon="mdi:hamburger-menu" className="cursor-pointer w-8 h-8 " onClick={() => setOpenSidebar(!openSidebar)} />
          </div>
          <NavLink
            to={"/"}
            onClick={() => {
              if (currentPath === "") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <img src="/himarpl/logo hima.png" alt="HIMARPL" className="lg:w-[240px] w-[140px] max-h-[70px]" />
          </NavLink>

          <nav className="lg:flex hidden  flex-row px-6 py-4 gap-6 items-center justify-between">
            <NavLink
              to={"/"}
              onClick={() => {
                if (currentPath === "") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className={`${currentPath === "" ? "text-[#10316B] font-semibold" : "text-[#9C9C9C]"} `}
            >
              Beranda
            </NavLink>
            {links.map((link, i) => (
              <NavLink key={i} to={link.to} className={`${currentPath === link.path ? "text-[#10316B] font-semibold" : "text-[#9C9C9C]"} `}>
                {link.name}
              </NavLink>
            ))}

            <div className="relative " ref={dropdownRef}>
              <div onClick={() => setIsOpen(!isOpen)} className={`cursor-pointer ${["be", "dp", "logo"].includes(currentPath) ? "text-[#10316B] font-semibold" : "text-[#9C9C9C]"} flex items-center gap-1`}>
                About Us
                <Icon icon="mingcute:down-line" className={`w-6 h-6 transition-all duration-200 ${isOpen ? "rotate-180" : ""}`} />
              </div>
              {isOpen && (
                <div className="absolute mt-2 bg-white shadow-md rounded-md p-2 z-50">
                  <NavLink to="/be" className={`block px-4 py-2 hover:bg-gray-100 ${isActive("be") ? "text-[#10316B] font-semibold" : "text-[#9C9C9C]"}`}>
                    BE
                  </NavLink>
                  <NavLink to="/dp" className={`block px-4 py-2 hover:bg-gray-100 ${isActive("dp") ? "text-[#10316B] font-semibold" : "text-[#9C9C9C]"}`}>
                    DP
                  </NavLink>
                  <NavLink to="/logo" className={`block px-4 py-2 hover:bg-gray-100 ${isActive("logo") ? "text-[#10316B] font-semibold" : "text-[#9C9C9C]"}`}>
                    Logo
                  </NavLink>
                </div>
              )}
            </div>
          </nav>
        </div>
        <Outlet />

        <footer className="w-full bg-[#232323] lg:pb-5 pb-4 lg:pt-14 pt-5 lg:px-[72px] px-4 flex flex-col">
          <div className="flex flex-row items-center justify-between border-b border-[#B2B2B2] pb-5">
            <div className="flex flex-col items-start justify-between lg:h-[194px]">
              <img src="/himarpl/logo hima.png" alt="HIMARPL" className="max-w-[200px]" />
              <div className="lg:w-[416px] w-[343px]">
                <p className="text-white lg:text-base/[24px] text-[12px]/[24px]">Empowering you with knowledge to make informed health decisions. (Dummy) </p>
              </div>

              <div className="lg:hidden flex mt-9 flex-row gap-[64px]">
                <div className="flex flex-col gap-4">
                  <p className="text-white font-bold text-[12px]">Lorem</p>
                  <p className="text-white  text-[12px]">apa</p>
                  <p className="text-white  text-[12px]">apa</p>
                  <p className="text-white  text-[12px]">apa</p>
                </div>

                <div className="flex flex-col gap-6">
                  <div className="flex flex-row gap-4">
                    {sosmedLinks.map((link, i) => (
                      <NavLink to={link.to} key={i} className="flex items-center justify-center w-8 h-8 bg-white rounded-full p-2">
                        <Icon icon={link.icon} className="text-black w-4 h-4 hover:text-gray-500 transition-all duration-150" />
                      </NavLink>
                    ))}
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-4">
                      <Icon icon="mdi:email-outline" className="text-white w-6 h-6" />
                      <a href="mailto:himarpl@upi.edu" className="text-white text-base/[24px]">
                        himarpl@upi.edu
                      </a>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Icon icon="mingcute:phone-line" className="text-white w-6 h-6" />
                      <p className="text-white text-base/[24px]">+192 666 777</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:flex hidden flex-col gap-2">
                <div className="flex flex-row gap-4">
                  <Icon icon="mdi:email-outline" className="text-white w-6 h-6" />
                  <a href="mailto:himarpl@upi.edu" className="text-white text-base/[24px]">
                    himarpl@upi.edu
                  </a>
                </div>
                <div className="flex flex-row gap-4">
                  <Icon icon="mingcute:phone-line" className="text-white w-6 h-6" />
                  <p className="text-white text-base/[24px]">+192 666 777</p>
                </div>
              </div>
            </div>

            <div className="lg:flex hidden flex-row gap-16">
              {footerLinks.map((section, i) => (
                <div key={i} className="flex flex-col gap-4">
                  {section.map((link, j) => (
                    <NavLink key={j} to={link.to} className="text-[#6C6C6C] font-medium">
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-row items-center justify-between mt-5">
            <p className="text-[#747474] lg:text-base/[24px] text-[10px]">&copy; Copyright 2025 HIMARPL all rights reserved.</p>
            <div className="lg:flex hidden flex-row gap-4">
              {sosmedLinks.map((link, i) => (
                <NavLink key={i} to={link.to} target="_blank">
                  <Icon icon={link.icon} className="text-[#747474] w-4 h-4 hover:text-white transition-all duration-150" />
                </NavLink>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
