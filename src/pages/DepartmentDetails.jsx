import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AnimatedLongText from "../components/AnimatedLongText";
import { CardKepengurusan } from "../components/CardKepengurusan";
import { Icon } from "@iconify/react";
import useSmoothScroll from "../hooks/useSmoothScroll";
import { useCallback, useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import { fetchDepartmentDetails, fetchDepartmentStaff } from "../services/apiService";
import { motion as Motion } from "motion/react";

const duration = 0.6;
const delay = 0;
const threshold = 0.1;
const animations = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const DepartmentDetails = () => {
  const { slug } = useParams(); // Get department name from URL
  const navigate = useNavigate();
  const lastScroll = useRef(0);

  // State management
  const [departmentStaffs, setDepartmentStaffs] = useState([]);
  const [departmentDetails, setDepartmentDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Determine type from current path
  const currentPath = window.location.pathname;
  const type = currentPath.startsWith("/be/") ? "be" : "dp";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        // Fetch both department details and staff data
        const detailsResponse = await fetchDepartmentDetails(type, slug);
        const departmentId = detailsResponse.data[0].id;
        const staffResponse = await fetchDepartmentStaff(departmentId);

        // Ensure data is properly formatted
        const departmentData = detailsResponse.data[0];

        // Extract all program contents from all programs
        const allProgramContents = [];
        if (departmentData.programs && Array.isArray(departmentData.programs)) {
          departmentData.programs.forEach((program) => {
            if (program.content && Array.isArray(program.content)) {
              allProgramContents.push(...program.content);
            } else if (program.content) {
              allProgramContents.push(program.content);
            }
          });
        }

        setDepartmentDetails({
          ...departmentData,
          acronym: String(departmentData.acronym || slug).toUpperCase(),
          description: String(departmentData.description || "Department description not available."),
          programs: allProgramContents.length > 0 ? allProgramContents : ["Program information not available."],
        });

        // Ensure staff data is properly formatted
        const formattedStaffs = staffResponse.data.map((staff) => ({
          ...staff,
          image: String(staff.image || `/kepengurusan/${type}/default.jpg`),
          title: staff.positions && staff.positions.length > 1 ? String(staff.positions[0].name || "STAFF").toUpperCase() : String((staff.positions && staff.positions[0] && staff.positions[0].name) || "STAFF").toUpperCase(),
          nama: String(staff.name || "Name not available").toUpperCase(),
        }));
        setDepartmentStaffs(formattedStaffs);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchData();
    }
  }, [type, slug]);

  const handleScroll = useCallback((scrollY) => {
    lastScroll.current = scrollY;
  }, []);

  const scrollRef = useSmoothScroll(handleScroll);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl">Loading department details...</div>
      </div>
    );
  }

  // Error state with fallback
  if (error && !departmentDetails) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-red-500">Error: {String(error)}</div>
      </div>
    );
  }

  return (
    <div id="departmentdetails" className="bg-[url(/bg/Bg-Low.png)] min-h-screen w-full overflow-y-auto pt-[68px] flex flex-col items-center pb-[50px]" ref={scrollRef} style={{ height: "100vh" }}>
      <div className="flex flex-col items-center lg:w-[1210px] md:w-[660px] w-[343px] gap-8 relative">
        <div className="w-full">
          <div className="flex gap-4 items-center justify-start cursor-pointer hover:bg-gray-100 rounded-2xl py-1 w-fit" onClick={() => navigate(`/${type}`)}>
            <Icon icon="mingcute:left-line" className="w-10 h-10" />
            <p className="font-medium lg:text-2xl text-base pr-4">Kembali</p>
          </div>
        </div>

        {departmentDetails && (
          <>
            <div className="w-full">
              <div className="bg-black w-fit p-3">
                <AnimatedText className="lg:text-7xl text-3xl text-white font-bold underline decoration-[#FFE867] decoration-2 underline-offset-8" text={String(departmentDetails.acronym)} />
              </div>
            </div>

            <div className="max-w-fit flex flex-col justify-center items-center rounded-2xl overflow-hidden">
              <img
                src={String(departmentDetails.image)}
                alt={String(departmentDetails.acronym)}
                className={`w-full  rounded-t-2xl md:h-[600px] h-[200px] object-cover object-[center_-0%] ${!departmentDetails.image ? "bg-[#6C6C6C] " : ""}`}
              />
              <div className="flex flex-col justify-center items-center w-full rounded-b-2xl bg-[#000000] z-10 opacity-80">
                <h2 className="rounded-b-2xl p-5 text-white text-normal font-light">{String(departmentDetails.description)}</h2>
              </div>
            </div>

            <Motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -130px 0px", amount: threshold }}
              transition={{ duration, delay }}
              variants={animations}
              className="flex flex-col rounded-3xl pb-4 w-full max-w-[1220px] gap-4 h-fit border-8 bg-[#ffffff] border-[#000000]"
            >
              <div className="flex flex-row items-center justify-between bg-[#000000] rounded-t-[4px] max-w-full lg:px-6 lg:py-4 px-4 py-2">
                <h4 className="text-white lg:text-[40px] text-base">Program Kerja</h4>
                <div className="flex flex-row items-center justify-between lg:gap-4 gap-[4.5px]">
                  <div className="lg:w-6 lg:h-6 w-[6.75px] h-[6.75px] bg-white rounded-full"></div>
                  <div className="lg:w-6 lg:h-6 w-[6.75px] h-[6.75px] bg-white rounded-full"></div>
                  <div className="lg:w-6 lg:h-6 w-[6.75px] h-[6.75px] bg-white rounded-full"></div>
                </div>
              </div>
              <div className="lg:mx-6 mx-4">
                {departmentDetails.programs && Array.isArray(departmentDetails.programs) && departmentDetails.programs.length > 0 ? (
                  departmentDetails.programs.map((program, index) => (
                    <p key={`program-${index}`} className="text-black lg:text-[24px]/[40px] text-base/[24px] mb-4">
                      {String(program)}
                    </p>
                  ))
                ) : (
                  <p className="text-black lg:text-[24px]/[40px] text-base/[24px]">No programs available.</p>
                )}
              </div>
            </Motion.div>
          </>
        )}
      </div>

      {error && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 my-4" role="alert">
          <p>Note: Using fallback data. API error: {String(error)}</p>
        </div>
      )}

      <div className="flex items-center justify-center w-full pt-20">
        <div className="flex flex-row flex-wrap lg:gap-x-48 lg:gap-y-56 justify-center my-10 lg:w-[1000px] w-[343px] gap-[55px]">
          {departmentStaffs &&
            Array.isArray(departmentStaffs) &&
            departmentStaffs.map((item, index) => (
              <div key={`staff-${index}-${item.nama || index}`} className="">
                <CardKepengurusan img={String(item.image || "")} department={String(item.title || "").toUpperCase()} nama={String(item.nama || "").toUpperCase()} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
