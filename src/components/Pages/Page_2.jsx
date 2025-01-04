import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useLogoContext } from "../../context/LogoContext";
import logo from "../../assets/logo.png";
import VerticalLinesPattern from "../../ui/Grid";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const { isAnimating } = useLogoContext();
  const [isPatternVisible, setIsPatternVisible] = useState(false);
  const navigate = useNavigate();
  // Trigger when the pattern is ready to show the rest of the content
  useEffect(() => {
    setIsPatternVisible(true);
  }, []);

  return (
    <>
      {/* Vertical lines pattern */}
      {/* <motion.div
        initial={{ opacity: 0 }}  // Start with invisible
        animate={{ opacity: 1 }}   // Fade in the entire SVG pattern
        transition={{ duration: 1 }} // Animation duration for pattern
      > */}
      <VerticalLinesPattern />
      {/* </motion.div> */}

      {/* Main content, show after pattern animation */}
      <motion.div
        className="flex items-center justify-center min-h-[100dvh] bg-[#F5F5DC]"
        initial={{ translateX: -100 }}
        animate={{ translateX: isPatternVisible ? 0 : -100 }} // Delay content animation until pattern is visible
        exit={{ translateX: 200 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          layoutId="logo"
          className="absolute top-4 right-[1/2]"
          style={{
            width: "148px",
            height: "105px",
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              filter: "drop-shadow(-7px 10px 3px rgb(194, 193, 193))",
            }}
          />
        </motion.div>

        {/* Login Form */}
        <div className=" p-8 rounded-lg w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
          <div className="text-2xl text-start mb-6 font-serif flex">
            <span
              style={{
                color: "#AC905F",
                fontFamily: "'DM Serif Display', serif",
                position: "relative",
              }}
            >
              Sign Up
              <span
                style={{
                  position: "absolute",
                  content: '""',
                  bottom: "-5px",
                  left: "8px",
                  width: "100%",
                  height: "2px",
                  background: "#AC905F",
                }}
              ></span>
            </span>
          </div>

          <form>
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              required
            />

            <Button
              fullWidth
              style={{
                textTransform: "none",
                background: "#132144",
                fontFamily: "font-dmSerif",
                color: "#AC905F",
                fontSize: "medium",
                marginTop: "10px",
              }}
              className="mt-4"
              onClick={() => {
                navigate("/verify");
              }}
            >
              Sign Up
            </Button>
          </form>
        </div>
        <button
          onClick={() => {
            navigate("/auth");
          }}
          className="absolute bottom-4"
          style={{
            color: "goldenrod",
          }}
        >
          <FaArrowLeft />
        </button>
      </motion.div>
    </>
  );
}

export default SignUp;