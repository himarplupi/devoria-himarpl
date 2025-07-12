import { Outlet, NavLink, useLocation, Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Lenis from "lenis";

export default function MainLayout() {
  const links = [
    { to: "/", path: "", name: "Beranda" },
    { to: "/dedication", path: "dedication", name: "Dedikasi" },
    { to: "/berita", path: "berita", name: "Berita" },
    { to: "/struktur", path: "struktur", name: "Struktur Organisasi" },
    { to: "/contact", path: "contact", name: "Contacts" },
  ];

  const aboutLinks = [
    { to: "/be", path: "be", name: "BE" },
    { to: "/dp", path: "dp", name: "DP" },
    { to: "/logo", path: "logo", name: "Logo" },
  ];

  const footerLinks = [
    [
      { to: "https://blog-himarpl.vercel.app/", label: "Blogs" },
      { to: "http://api-himarpl.vercel.app/api-docs", label: "API Documentation" },
      { to: "/be", label: "About Us" },
      { to: "/contact", label: "Contacts" },
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
  const [isOpen2, setIsOpen2] = useState(false);
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

  useEffect(() => {
    let lenis;
    let rafId;

    const initLenis = () => {
      // Pastikan cleanup sebelum init baru
      if (lenis) {
        lenis.destroy();
        cancelAnimationFrame(rafId);
      }

      // Hanya aktifkan untuk desktop
      if (window.innerWidth > 768) {
        lenis = new Lenis({ lerp: 0.1, smooth: true });

        const raf = (time) => {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      } else {
        // Force enable natural scrolling for mobile
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";
      }
    };

    initLenis();
    window.addEventListener("resize", initLenis);

    return () => {
      window.removeEventListener("resize", initLenis);
      if (lenis) lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll.current && currentScroll > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div
      id="scrollableDiv"
      className="min-h-screen relative"
      style={{
        overflowX: "hidden",
      }}
    >
      {/* mobile sidebar */}
      <div className={`md:hidden fixed top-0 left-0 w-full h-full z-[90] transition-all duration-600 ${openSidebar ? "translate-x-0 " : "-translate-x-full"}`} onClick={() => setOpenSidebar(false)}>
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
              {links.map((link, i) => (
                <div key={i} className="group transition-all relative">
                  <span className={`h-[2px] inline-block ${currentPath === link.path ? "bg-white w-full" : "bg-[#9C9C9C] w-0"} -bottom-0.5 absolute left-0  group-hover:w-full transition-[width] ease duration-300 `}>&nbsp;</span>
                  <NavLink to={link.to} className={`${currentPath === link.path ? "text-white font-semibold" : "text-[#9C9C9C]"} `}>
                    {link.name}
                  </NavLink>
                </div>
              ))}

              <div className="group transition-all relative">
                <span className={`h-[2px] inline-block ${["be", "dp", "logo"].includes(currentPath) ? "bg-white w-full" : "bg-[#9C9C9C] w-0"} absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 `}>
                  &nbsp;
                </span>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen2(!isOpen2);
                  }}
                  className={`flex items-center justify-between cursor-pointer  ${["be", "dp", "logo"].includes(currentPath) ? "text-white font-semibold" : "text-[#9C9C9C] "} transition-colors`}
                >
                  About Us
                  <Icon icon="mingcute:down-line" className={`w-6 h-6 transition-all duration-200 ${isOpen2 ? "rotate-180" : ""}`} />
                </div>
              </div>

              {isOpen2 && (
                <div className={` mt-2 ml-4 flex flex-col gap-1 border-l-2 border-gray-600/50 pl-4`}>
                  {aboutLinks.map((link, i) => (
                    <div className="group transition-all relative">
                      <span className={`h-[2px] inline-block ${isActive(link.path) ? "bg-white w-full" : "bg-[#9C9C9C] w-0"} absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 `}>&nbsp;</span>
                      <Link key={i} to={link.to} onClick={() => setOpenSidebar(false)} className={`block  py-2 rounded-md ${isActive(link.path) ? "text-white font-semibold " : "text-[#9C9C9C] "}`}>
                        {link.name}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </nav>
          </div>
        </div>
      </div>

      <div className={`flex flex-col justify-center items-center lg:mt-[50px] mt-10`}>
        <div className={`fixed top-8 z-50 transition-transform duration-500 w-full flex justify-center px-6 md:px-10 ${showNavbar ? "translate-y-0" : "-translate-y-[115px] "}`}>
          <div
            className={`  bg-white flex flex-row gap-32 justify-between items-center max-w-[1220px] w-full border border-[#A7A7A7] rounded-2xl lg:gap-auto  drop-shadow(0px_4px_12px_rgba(0,0,0,0.04)) lg:flex-row lg:px-0 px-4 min-w-[343px] h-[70px]`}
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
              {links.map((link, i) => (
                <div key={i} className="relative group transition-all">
                  <span className={`h-[2px] inline-block ${currentPath === link.path ? "bg-[#10316B] w-full" : "bg-[#9C9C9C] w-0"} -bottom-0.5 absolute left-0  group-hover:w-full transition-[width] ease duration-300 `}>&nbsp;</span>
                  <NavLink to={link.to} className={`${currentPath === link.path ? "text-[#10316B] font-semibold" : "text-[#9C9C9C]"} `}>
                    {link.name}
                  </NavLink>
                </div>
              ))}

              <div className="relative " ref={dropdownRef}>
                <div className="relative group transition-all">
                  <span className={`h-[2px] inline-block ${["be", "dp", "logo"].includes(currentPath) ? "bg-[#10316B] w-full" : "bg-[#9C9C9C] w-0"} absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 `}>
                    &nbsp;
                  </span>

                  <div onClick={() => setIsOpen(!isOpen)} className={`cursor-pointer ${["be", "dp", "logo"].includes(currentPath) ? "text-[#10316B] font-semibold" : "text-[#9C9C9C]"} flex items-center gap-1`}>
                    About Us
                    <Icon icon="mingcute:down-line" className={`w-6 h-6 transition-all duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                </div>
                {isOpen && (
                  <div className="absolute mt-2 bg-white shadow-md rounded-md p-2 z-50">
                    <NavLink to="/be" className={`block px-4 py-2 hover:bg-gray-100 ${isActive("be") ? "text-[#10316B] font-semibold" : "text-[#9C9C9C]"}`} onClick={() => setIsOpen(false)}>
                      BE
                    </NavLink>
                    <NavLink to="/dp" className={`block px-4 py-2 hover:bg-gray-100 ${isActive("dp") ? "text-[#10316B] font-semibold" : "text-[#9C9C9C]"}`} onClick={() => setIsOpen(false)}>
                      DP
                    </NavLink>
                    <NavLink to="/logo" className={`block px-4 py-2 hover:bg-gray-100 ${isActive("logo") ? "text-[#10316B] font-semibold" : "text-[#9C9C9C]"}`} onClick={() => setIsOpen(false)}>
                      Logo
                    </NavLink>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
        <Outlet />

        <footer className="w-full bg-[#232323] lg:pb-5 pb-4 lg:pt-14 pt-5 lg:px-[72px] px-4 flex flex-col">
          <div className="flex flex-row items-center justify-between border-b border-[#B2B2B2] pb-5">
            <div className="flex flex-col items-start justify-between md:h-[194px]">
              <img src="/himarpl/logo hima.png" alt="HIMARPL" className="max-w-[200px]" />
              <div className="lg:w-[416px] w-[343px]">
                <p className="text-white lg:text-base/[24px] text-[12px]/[24px]">Himpunan Mahasiswa Rekayasa Perangkat Lunak Universitas Pendidikan Indonesia </p>
              </div>

              <div className="md:hidden flex mt-9 flex-row gap-[64px]">
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

                      <div className="relative group transition-all ">
                        <span className="h-[2px] inline-block bg-white absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-300 w-0">&nbsp;</span>
                        <a href="mailto:himarpl@upi.edu" className="text-white text-base/[24px]">
                          himarpl@upi.edu
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-row gap-4">
                      <Icon icon="mingcute:phone-line" className="text-white w-6 h-6" />
                      <div className="relative group transition-all ">
                        <span className="h-[2px] inline-block bg-white absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-300 w-0">&nbsp;</span>
                        <a href="https://wa.me/6281312768360" className="text-white text-base/[24px]">
                          +62 813-1276-8360
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:flex hidden flex-col gap-2">
                <div className="flex flex-row gap-4">
                  <Icon icon="mdi:email-outline" className="text-white w-6 h-6" />
                  <div className="relative group transition-all ">
                    <span className="h-[2px] inline-block bg-white absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-300 w-0">&nbsp;</span>
                    <a href="mailto:himarpl@upi.edu" className="text-white text-base/[24px]">
                      himarpl@upi.edu
                    </a>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <Icon icon="mingcute:phone-line" className="text-white w-6 h-6" />
                  <div className="relative group transition-all ">
                    <span className="h-[2px] inline-block bg-white absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-300 w-0">&nbsp;</span>
                    <a href="https://wa.me/6281312768360" className="text-white text-base/[24px] ">
                      +62 813-1276-8360
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:flex hidden flex-row gap-16">
              {footerLinks.map((section, i) => (
                <div key={i} className="flex flex-col gap-4">
                  {section.map((link, j) => (
                    <div key={j} className="cursor-pointer relative group transition-all ">
                      <span className="h-[2px] inline-block bg-[#6C6C6C] absolute left-0 bottom-0.5 group-hover:w-full transition-[width] ease duration-300 w-0">&nbsp;</span>

                      <NavLink to={link.to} className="text-[#6C6C6C] font-medium" target="_blank">
                        {link.label}
                      </NavLink>
                    </div>
                  ))}
                </div>
              ))}

              <div className="flex flex-row gap-4">
                {sosmedLinks.map((link, i) => (
                  <NavLink to={link.to} key={i} className="flex items-center justify-center w-8 h-8 bg-white rounded-full p-2">
                    <Icon icon={link.icon} className="text-black w-4 h-4 hover:text-gray-500 transition-all duration-150" />
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between mt-5">
            <p className="text-[#747474] lg:text-base/[24px] text-[10px]">&copy; Copyright 2025 HIMARPL all rights reserved.</p>
            {/* <div className="lg:flex hidden flex-row gap-4">
              {sosmedLinks.map((link, i) => (
                <NavLink key={i} to={link.to} target="_blank">
                  <Icon icon={link.icon} className="text-[#747474] w-4 h-4 hover:text-white transition-all duration-150" />
                </NavLink>
              ))}
            </div> */}
          </div>
        </footer>
      </div>
    </div>
  );
}
