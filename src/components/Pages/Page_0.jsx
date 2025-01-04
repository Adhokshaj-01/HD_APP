import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/favicon.ico";
import { useLogoContext } from "../../context/LogoContext";
import { FaArrowRight } from "react-icons/fa";

export default function Screen0() {
  const navigate = useNavigate();
  const { setIsAnimating } = useLogoContext();

  const handleNavigate = () => {
    setIsAnimating(true);
    navigate("/auth");
  };

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        height: "100dvh",
        background: "#132144",
      }}
    >
      <motion.img
        src={logo}
        alt="Logo"
        className="w-[241px] h-[183px]"
        layoutId="logo"
      />
      <button
        onClick={handleNavigate}
        className="absolute bottom-4"
        style={{
          color:'goldenrod'
        }}
      >
     <FaArrowRight />
      </button>
    </div>
  );
}
