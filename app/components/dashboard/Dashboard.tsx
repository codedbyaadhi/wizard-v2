"use client";
import React, { useState } from "react";
import { useTextScramble } from "@/app/hooks/useTextScramble";
import { AnimatePresence, motion } from "motion/react";

const Dashboard: React.FC = () => {
  const [titleHovered, setTitleHovered] = useState(false);
  const [currentHovered, setCurrentHovered] = useState(false);
  const [upcomingHovered, setUpcomingHovered] = useState(false);
  const [updatesHovered, setUpdatesHovered] = useState(false);
  const [isIOpen, setIsIOpen] = useState(false);

  // Fixed: Pass the original text and hover state correctly to useTextScramble
  const title = useTextScramble("36,849", titleHovered);
  const current = useTextScramble("17", currentHovered);
  const upcoming = useTextScramble("21", upcomingHovered);
  const updates = useTextScramble("12", updatesHovered);
  const information = useTextScramble(
    `THE TOTAL NUMBER OF LINES OF CODE PROGRAMMED TO
     CONSTRUCT THIS ENTIRE WEB-BASED SOFTWARE-AS-A-SERVICE
     (SAAS) PLATFORM IS REVEALED AS THE COMPLETE THREAD OF
     CODE.`,
    isIOpen
  );

  return (
    <div className="flex flex-col items-center w-full h-auto">
      <div className="flex flex-col w-[905px] h-[195px] relative top-[100px] justify-between items-center">
        <div className="flex flex-col items-center justify-between w-full h-[35px]">
          <div className="flex items-center justify-between w-full h-[5px]">
            <div className="w-[5px] h-[5px] bg-white"></div>
            <div className="w-[5px] h-[5px] bg-white"></div>
          </div>
          <div className="flex items-start justify-start w-[900px] h-[25px] border-t border-t-[#373744] bg-gradient-to-b from-[#23222F] to-[#1A1926] shadow-md">
            <div className="pl-3 flex items-center justify-center w-auto h-full gap-2">
              <div className="w-[5px] h-[15px] bg-white"></div>
              <div className="flex items-center justify-center">
                <h5 className="text-[15px] font-victorMono opacity-50">01</h5>
              </div>
              <div className="flex items-center justify-center">
                <p>•</p>
              </div>
              <div className="flex items-center justify-center">
                <h5 className="text-[15px] font-victorMono">COMPONENTS</h5>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between w-full h-[5px]">
            <div className="w-[5px] h-[5px] bg-white"></div>
            <div className="w-[5px] h-[5px] bg-white"></div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full h-full justify-evenly">
          <div className="flex items-center justify-between w-full h-[25px] px-3">
            <div className="flex items-center justify-center p-3 gap-3">
              <h5 className="text-[17px] font-victorMono text-[#A2A1AE]">
                THREADS OF CODE
              </h5>
              <div
                className="flex items-center justify-center w-[20px] h-[20px] border-t border-t-[#373744] bg-gradient-to-b from-[#23222F] to-[#1A1926] shadow-md cursor-pointer"
                onMouseOver={() => setIsIOpen(true)}
                onMouseLeave={() => setIsIOpen(false)}
              >
                <p className="text-[10px] font-victorMono opacity-50">i</p>
                {isIOpen && (
                  <AnimatePresence>
                    <motion.div
                      className="flex flex-col items-center justify-between absolute w-[250px] h-[150px] z-10 left-25 top-25 border border-[#373744]/40 bg-gradient-to-b from-[#23222F]/50 to-[#1A1926]/50 backdrop-blur shadow-2xl"
                      style={{ textShadow: "0 0 5px #FFFF, 0 0 150px #FFFF" }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="flex items-center justify-between w-full h-[5px] relative bottom-[5px]">
                        <div className="flex w-[5px] h-[5px] bg-white"></div>
                        <div className="flex w-[5px] h-[5px] bg-white"></div>
                      </div>
                      <div className="flex w-full items-center justify-center text-left h-auto font-victorMono p-4">
                        <p className="text-[12px]">{information}</p>{" "}
                        {/* Fixed: Use scrambled text */}
                      </div>
                      <div className="flex items-center justify-between w-full h-[5px] relative top-[5px]">
                        <div className="flex w-[5px] h-[5px] bg-white"></div>
                        <div className="flex w-[5px] h-[5px] bg-white"></div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between w-[400px] p-3">
              <div className="flex items-center justify-center">
                <h5 className="text-[17px] font-victorMono text-[#A2A1AE]">
                  CURRENT
                </h5>
              </div>
              <div className="flex items-center justify-center">
                <h5 className="text-[17px] font-victorMono text-[#A2A1AE]">
                  UPCOMING
                </h5>
              </div>
              <div className="flex items-center justify-center">
                <h5 className="text-[17px] font-victorMono text-[#A2A1AE]">
                  UPDATES
                </h5>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between w-full h-[50px] px-3">
            <div
              className="flex items-center justify-center font-victorMono text-[35px] font-bold cursor-default pl-3"
              onMouseOver={() => setTitleHovered(true)}
              onMouseLeave={() => setTitleHovered(false)}
            >
              → {title}
            </div>
            <div className="flex items-center justify-between w-[400px] p-8">
              <div className="flex items-center justify-center">
                <h5
                  className="text-[25px] font-victorMono text-[#44FFD9] cursor-default"
                  style={{ textShadow: "0 0 5px #44FFD9, 0 0 20px #44FFD9" }}
                  onMouseOver={() => setCurrentHovered(true)}
                  onMouseLeave={() => setCurrentHovered(false)}
                >
                  {current}
                </h5>
              </div>
              <div className="flex items-center justify-center">
                <h5
                  className="text-[25px] font-victorMono text-[#DA547C] cursor-default"
                  style={{ textShadow: "0 0 5px #DA547C, 0 0 20px #DA547C" }}
                  onMouseOver={() => setUpcomingHovered(true)}
                  onMouseLeave={() => setUpcomingHovered(false)}
                >
                  {upcoming}
                </h5>
              </div>
              <div className="flex items-center justify-center">
                <h5
                  className="text-[25px] font-victorMono text-[#7D37D5] cursor-default"
                  style={{ textShadow: "0 0 5px #7D37D5, 0 0 20px #7D37D5" }}
                  onMouseOver={() => setUpdatesHovered(true)}
                  onMouseLeave={() => setUpdatesHovered(false)}
                >
                  {updates}
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between w-full h-[5px]">
          <div className="flex items-center justify-between w-[300px] h-full">
            <div className="flex w-[5px] h-[5px] bg-white"></div>
            <div className="flex w-[298px] h-[1.5px] bg-[#12111F]"></div>
            <div className="flex w-[5px] h-[5px] bg-white"></div>
          </div>
          <div className="flex items-center justify-between w-[525px] h-full">
            <div className="flex w-[5px] h-[5px] bg-white"></div>
            <div className="flex w-[515px] h-[1.5px] bg-[#12111F]"></div>
            <div className="flex w-[5px] h-[5px] bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
