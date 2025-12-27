"use client";
import { motion as Motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { useLenis } from "lenis/dist/lenis-react";
import { useLocation, NavLink, Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Header() {
  const links = [
    { to: "/", path: "", name: "Beranda" },
    // { to: "/dedication", path: "dedication", name: "Dedikasi" },
    { to: "/berita", path: "berita", name: "Berita" },
    { to: "/struktur", path: "struktur", name: "Struktur Organisasi" },
    { to: "/contact", path: "contact", name: "Contacts" },
    { to: "/awarding", path: "awarding", name: "Awards" },
  ];

  const aboutLinks = [
    { to: "/be", path: "be", name: "BE" },
    { to: "/dp", path: "dp", name: "DP" },
    { to: "/logo", path: "logo", name: "Logo" },
  ];

  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const dropdownRef = useRef(null);
  const sideBarRef = useRef(null);
  const [isOpen2, setIsOpen2] = useState(false);
  const isActive = (path) => currentPath === path;

  const location = useLocation(),
    currentPath = location.pathname.split("/")[1];
  useEffect(() => {
    setOpenSidebar(false);
  }, [location]);

  const lenis = useLenis();
  useEffect(() => {
    if (!lenis) return;

    function onScroll({ scroll }) {
      if (scroll > lastScroll && scroll > 120) {
        setShowHeader(false);
      } else if (scroll < lastScroll - 10) {
        setShowHeader(true);
      }
      setLastScroll(scroll);
    }

    lenis.on("scroll", onScroll);

    return () => lenis.off("scroll", onScroll);
  }, [lenis, lastScroll]);

  return (
    <>
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full z-[91] transition-all duration-600 ${
          openSidebar ? "translate-x-0 " : "-translate-x-full"
        }`}
        onClick={() => setOpenSidebar(false)}
      >
        <div
          ref={sideBarRef}
          className={`fixed top-0 left-0 h-full w-[65%] bg-[#222222] pt-10 flex flex-col items-center transform transition-all duration-300 ${
            openSidebar ? "translate-x-0" : "-translate-x-full"
          }`}
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
              <img
                src="/himarpl/logo hima.png"
                alt="HIMARPL"
                className="w-[200px] h-auto"
              />
            </NavLink>

            <nav className="flex flex-col gap-4">
              {links.map((link, i) => (
                <div key={i} className="group transition-all relative">
                  <span
                    className={`h-[2px] inline-block ${
                      currentPath === link.path
                        ? "bg-white w-full"
                        : "bg-[#9C9C9C] w-0"
                    } -bottom-0.5 absolute left-0  group-hover:w-full transition-[width] ease duration-300 `}
                  >
                    &nbsp;
                  </span>
                  <NavLink
                    to={link.to}
                    className={`${
                      currentPath === link.path
                        ? "text-white font-semibold"
                        : "text-[#9C9C9C]"
                    } `}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    {link.name}
                  </NavLink>
                </div>
              ))}

              <div className="group transition-all relative">
                <span
                  className={`h-[2px] inline-block ${
                    ["be", "dp", "logo"].includes(currentPath)
                      ? "bg-white w-full"
                      : "bg-[#9C9C9C] w-0"
                  } absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 `}
                >
                  &nbsp;
                </span>
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen2(!isOpen2);
                  }}
                  className={`flex items-center justify-between cursor-pointer  ${
                    ["be", "dp", "logo"].includes(currentPath)
                      ? "text-white font-semibold"
                      : "text-[#9C9C9C] "
                  } transition-colors`}
                >
                  About Us
                  <Icon
                    icon="mingcute:down-line"
                    className={`w-6 h-6 transition-all duration-200 ${
                      isOpen2 ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>

              {isOpen2 && (
                <div
                  className={` mt-2 ml-4 flex flex-col gap-1 border-l-2 border-gray-600/50 pl-4`}
                >
                  {aboutLinks.map((link, i) => (
                    <div className="group transition-all relative">
                      <span
                        className={`h-[2px] inline-block ${
                          isActive(link.path)
                            ? "bg-white w-full"
                            : "bg-[#9C9C9C] w-0"
                        } absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 `}
                      >
                        &nbsp;
                      </span>
                      <Link
                        key={i}
                        to={link.to}
                        onClick={() => setOpenSidebar(false)}
                        className={`block  py-2 rounded-md ${
                          isActive(link.path)
                            ? "text-white font-semibold "
                            : "text-[#9C9C9C] "
                        }`}
                      >
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

      <Motion.header
        ref={ref}
        initial={{ y: -120 }}
        animate={{ y: showHeader ? 0 : -120 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 10,
          mass: 1,
        }}
        className="fixed top-8 flex justify-between gap-32  px-10 z-[90] max-w-[1220px] w-[95%] bg-white border border-[#A7A7A7] rounded-2xl lg:gap-auto items-center  drop-shadow(0px_4px_12px_rgba(0,0,0,0.04)) lg:flex-row lg:px-0  min-w-[343px] h-[70px] left-1/2 transform -translate-x-1/2"
      >
        <div className="lg:hidden">
          <Icon
            icon="mdi:hamburger-menu"
            className="cursor-pointer w-8 h-8 "
            onClick={() => setOpenSidebar(!openSidebar)}
          />
        </div>

        <NavLink
          to={"/"}
          onClick={() => {
            if (currentPath === "") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <img
            src="/himarpl/logo hima.png"
            alt="HIMARPL"
            className="lg:w-[240px] w-[140px] max-h-[70px]"
          />
        </NavLink>

        <nav className="lg:flex hidden  flex-row px-6 py-4 gap-6 items-center justify-between">
          {links.map((link, i) => (
            <div key={i} className="relative group transition-all">
              <span
                className={`h-[2px] inline-block ${
                  currentPath === link.path
                    ? "bg-[#10316B] w-full"
                    : "bg-[#9C9C9C] w-0"
                } -bottom-0.5 absolute left-0  group-hover:w-full transition-[width] ease duration-300 `}
              >
                &nbsp;
              </span>
              <NavLink
                to={link.to}
                className={`${
                  currentPath === link.path
                    ? "text-[#10316B] font-semibold"
                    : "text-[#9C9C9C]"
                } `}
                onClick={() => {
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 850);
                }}
              >
                {link.name}
              </NavLink>
            </div>
          ))}

          <div className="relative " ref={dropdownRef}>
            <div className="relative group transition-all">
              <span
                className={`h-[2px] inline-block ${
                  ["be", "dp", "logo"].includes(currentPath)
                    ? "bg-[#10316B] w-full"
                    : "bg-[#9C9C9C] w-0"
                } absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 `}
              >
                &nbsp;
              </span>

              <div
                onClick={() => setIsOpen(!isOpen)}
                className={`cursor-pointer ${
                  ["be", "dp", "logo"].includes(currentPath)
                    ? "text-[#10316B] font-semibold"
                    : "text-[#9C9C9C]"
                } flex items-center gap-1`}
              >
                About Us
                <Icon
                  icon="mingcute:down-line"
                  className={`w-6 h-6 transition-all duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
            {isOpen && (
              <div className="absolute mt-2 bg-white shadow-md rounded-md p-2 z-50">
                <NavLink
                  to="/be"
                  className={`block px-4 py-2 hover:bg-gray-100 ${
                    isActive("be")
                      ? "text-[#10316B] font-semibold"
                      : "text-[#9C9C9C]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  BE
                </NavLink>
                <NavLink
                  to="/dp"
                  className={`block px-4 py-2 hover:bg-gray-100 ${
                    isActive("dp")
                      ? "text-[#10316B] font-semibold"
                      : "text-[#9C9C9C]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  DP
                </NavLink>
                <NavLink
                  to="/logo"
                  className={`block px-4 py-2 hover:bg-gray-100 ${
                    isActive("logo")
                      ? "text-[#10316B] font-semibold"
                      : "text-[#9C9C9C]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Logo
                </NavLink>
              </div>
            )}
          </div>
        </nav>
      </Motion.header>
    </>
  );
}
