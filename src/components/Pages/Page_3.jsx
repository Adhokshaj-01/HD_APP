import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "@mui/material/Button";
import logo from "../../assets/logo.png";
import VerticalLinesPattern from "../../ui/Grid";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";

function OTP() {
  const [isPatternVisible, setIsPatternVisible] = useState(false);
  const navigate = useNavigate();

  // Trigger when the pattern is ready to show the rest of the content
  useEffect(() => {
    setIsPatternVisible(true);
  }, []);

  const [otp, setOtp] = useState("");

  const handleChange = (otp) => {
    setOtp(otp);
  };

  return (
    <>
      {/* Vertical lines pattern */}
      <motion.div
        initial={{ opacity: 0 }} // Start with invisible
        animate={{ opacity: 1 }} // Fade in the entire SVG pattern
        transition={{ duration: 1 }} // Animation duration for pattern
      >
        <VerticalLinesPattern />
      </motion.div>

      {/* Main content, show after pattern animation */}
      <motion.div
        className="flex items-center justify-center min-h-[100dvh] bg-white"
        initial={{ translateX: -100 }}
        animate={{ translateX: isPatternVisible ? 0 : 100 }} // Delay content animation until pattern is visible
        exit={{ translateX: -100 }}
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

        {/* OTP Form */}
        <div className="p-8 rounded-lg w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
          <div
            className="text-3xl mb-6 font-serif flex justify-center"
            style={{
              color: "#AC905F",
              fontFamily: "'DM Serif Display', serif",
              position: "relative",
              textAlign: "center",
            }}
          >
            <span>
              Please enter OTP
              {/* <span
                style={{
                  position: "absolute",
                  content: '""',
                  bottom: "-5px",
                  left: "8px",
                  width: "100%",
                  height: "2px",
                  background: "#AC905F",
                }}
              ></span> */}
            </span>
          </div>

          <form className="flex justify-center items-center flex-col">
            <OtpInput
              value={otp}
              onChange={handleChange}
              numInputs={4}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                width: "3rem",
                height: "3rem",
                margin: "0 0.5rem",
                fontSize: "2rem",
                textAlign: "center",
                fontFamily: "monospace",
                // borderRadius: "8px",
                border: "1px solid #132144",
                color:"#AC905F"
              }}
            />

            <Button
              fullWidth
              style={{
                textTransform: "none",
                background: "#132144",
                fontFamily: "font-dmSerif",
                color: "#AC905F",
                fontSize: "medium",
                marginTop: "17px",
              }}
              className="mt-4"
              onClick={() => {
                navigate("/addition");
              }}
            >
              Submit
            </Button>
          </form>
        </div>
        <button
          onClick={() => {
            navigate("/register");
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

export default OTP;
