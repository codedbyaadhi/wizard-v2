"use client";
import { useTextScramble } from "@/app/hooks/useTextScramble";
import { motion } from "motion/react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navigation = [
    { navigate: "DOCS", key: "docs" },
    { navigate: "PRODUCTS", key: "products" },
    { navigate: "PRICING", key: "pricing" },
    { navigate: "RESOURCES", key: "resources" },
    { navigate: "ABOUT", key: "about" },
  ];

  return (
    <div className="absolute flex items-center justify-center w-full h-[85px]">
      <div className="flex items-center justify-between w-[450px] h-[50px] border border-[#151424] z-10">
        <div className="flex flex-col items-center justify-between h-full">
          <div className="w-[6px] h-[6px] border-t-2 border-l-2 border-t-[#5E5B7F] border-l-[#5E5B7F]"></div>
          <div className="w-[6px] h-[6px] border-b-2 border-l-2 border-b-[#5E5B7F] border-l-[#5E5B7F]"></div>
        </div>

        <div className="flex items-center justify-center w-full h-full">
          <ul className="flex items-center justify-center gap-5">
            {navigation.map((item) => {
              const isHovered = hoveredItem === item.key;
              const scrambledText = useTextScramble(item.navigate, isHovered);

              return (
                <motion.li
                  key={item.key}
                  className="flex items-center justify-center"
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: 0.4 }}
                  whileHover={{
                    opacity: [0.4, 1, 0.4, 1],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  onMouseOver={() => setHoveredItem(item.key)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    href={"/"}
                    className="text-[13px] text-[#CFCEED] font-victorMono"
                  >
                    {scrambledText}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col items-center justify-between h-full">
          <div className="w-[6px] h-[6px] border-t-2 border-r-2 border-t-[#5E5B7F] border-r-[#5E5B7F]"></div>
          <div className="w-[6px] h-[6px] border-b-2 border-r-2 border-b-[#5E5B7F] border-r-[#5E5B7F]"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
