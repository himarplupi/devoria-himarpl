import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({ children, className, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      if (link.startsWith("http")) {
        window.open(link, "_blank");
      } else {
        navigate(link);
      }
    }
  };
  return (
    <div className={`bg-white shadow-sm border border-[#D4D4D4] rounded-xl overflow-hidden ${className} flex  cursor-pointer  transition-all duration-200`} onClick={handleClick}>
      {children}
    </div>
  );
};
