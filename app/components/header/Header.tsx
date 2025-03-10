import React from "react";

/**
 * Header Component
 *
 * This component renders a centered, bordered header container with small corner decorations.
 * The layout is absolute and ensures alignment in the center of the viewport.
 *
 * @returns {JSX.Element} The rendered Header component.
 */

const Header = () => {
  return (
    // Main container: Positioned absolutely, flex-centered, and takes full width with a height of 85px
    <div className="absolute flex items-center justify-center w-full h-[85px]">
      {/* Inner box: A bordered container with a width of 550px and height of 50px */}
      <div className="flex items-center justify-between w-[550px] h-[50px] border border-[#1A1736]">
        {/* Left-side corner decorations */}
        <div className="flex flex-col items-center justify-between h-full">
          {/* Top-left corner element: Small 6px square with top and left borders */}
          <div className="w-[6px] h-[6px] border-t-2 border-l-2 border-t-[#5E5B7F] border-l-[#5E5B7F]"></div>
          {/* Bottom-left corner element: Small 6px square with bottom and left borders */}
          <div className="w-[6px] h-[6px] border-b-2 border-l-2 border-b-[#5E5B7F] border-l-[#5E5B7F]"></div>
        </div>

        {/* Empty flexible space: Takes the remaining width */}
        <div className="flex w-full h-full"></div>

        {/* Right-side corner decorations */}
        <div className="flex flex-col items-center justify-between h-full">
          {/* Top-right corner element: Small 6px square with top and right borders */}
          <div className="w-[6px] h-[6px] border-t-2 border-r-2 border-t-[#5E5B7F] border-r-[#5E5B7F]"></div>
          {/* Bottom-right corner element: Small 6px square with bottom and right borders */}
          <div className="w-[6px] h-[6px] border-b-2 border-r-2 border-b-[#5E5B7F] border-r-[#5E5B7F]"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
