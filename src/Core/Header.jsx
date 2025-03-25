import Hamburger from "hamburger-react";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropDownOpen, setAboutDropDownOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const isActive = (path) => {
    // First check for direct path match
    if (location.pathname === path) {
      return true;
    }
    // Then find the nav item with this path
    const navItem = navLinks.find(link => link.to === path);
    // If nav item has dropdown, check if current path is in the dropdown
    if (navItem && navItem.dropdown) {
      return navItem.dropdown.some(item => location.pathname === item.to);
    }
    return false;
  };
  const navLinks = [
    { to: "/", label: "Home" },
    {
      to: "/about",
      label: "About Journal",
      dropdown: [
        {
          to: "/about",
          label: "About ",
        },
        {
          to: "/aim-and-scope",
          label: "Aim and Scope",
        },
        {
          to: "/editorial-board",
          label: "Editorial Board",
        },
        {
          to: "/issues",
          label: "Issues",
        },
        {
          to: "/author-guidelines",
          label: "Author Guidelines",
        },
        {
          to: "/copyrights",
          label: "Copyrights",
        },
      ],
    },
    {
      to: " ",
      label: "Overview",
      dropdown: [
        {
          to: "/Peer-Review-Process",
          label: "Peer Review process",

        },
        {
          to: "/Publication-ethics",
          label: "Publication Ethics",

        },
        {
          to: "/abstracting-and-indexing",
          label: "Abstracting and Indexing",

        },
        {
          to: "/article-processing",
          label: "Article Processing",

        },

      ],
    },
    {
      to: "",
      label: "Policy",
      dropdown: [
        {
          to: "/plagiarism",
          label: "Plagiarism",

        },
        {
          to: "/malpractice",
          label: "Malpractice",

        },
        {
          to: "/correction",
          label: "Corretion",

        },
        {
          to: "/publication-policy",
          label: "Publication Rights",

        },

      ],
    },
    { to: "/contact", label: "Contact" },
  ];
  const toggleDropdown = (label) => {
    setAboutDropDownOpen(aboutDropDownOpen === label ? null : label);
  };
  useEffect;

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <>
      <section className="bg-[#2F1A00] md:py-5 py-2">
        <div className="max-w-[100rem] mx-auto md:px-5 px-3 bg-[#2F1A00] ">
          <div className="flex items-center justify-between   lg:gap-0  gap-5  ">
            <Link to="/">
              <div className="  w-[200px]     ">
                <div className="    text-center   ">
                  {/* <p className="    font-bold text-white" >IJSIOT</p> */}
                  <img className="   font-bold mx-auto  w-40 " src="/assets/Images/IJSIOT.png" alt="" />
                </div>
              </div>
            </Link>
            <div className="lg:block hidden xl:text-2xl  text-xl    merry">
              International Journal of Smart Internet of Things and Applications
            </div>
            <div className="lg:block hidden">
              <button className="md:p-3 p-2    text-white   flex gap-2   xl:text-base text-xs    bg-[#B49752]   duration-300 cursor-pointer  ">
                Submit Your Manuscript
                <i className="fi fi-sr-play text-xs text-white  flex items-center"></i>
              </button>
            </div>
            <div className="lg:hidden block">
              <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
            </div>
          </div>
        </div>
      </section>
      {/* <div className={` ${menuOpen ? "" : ""}`}>
        {menuOpen && (
          <div className=" flex flex-col items-center space-y-4 w-full text-center bg-white py-2 shadow-lg">
            {navLinks.map(
              (link) =>
                !link.desktopOnly && (
                  <div key={link.to} to={link.to} className="relative   ">
                    <Link onClick={() =>  link.dropdown && toggleDropdown(link.label) }
                      className="text-black " >
                      {link.label}
                    </Link>
                    {link.dropdown && aboutDropDownOpen === link.label && (
                      <div className="     mt-3   bg-white   text-black border-gray-200 z-10 ">
                        {link.dropdown.map((dropdownlink) => (
                          <Link
                            key={dropdownlink.to}
                            to={dropdownlink.to}
                            className="block px-4 py-2 text-black hover:bg-gray-100"
                          >
                            {dropdownlink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
            )}
          </div>
        )}
      </div> */}
      <div className="lg:hidden block border border-[#2F1A00] bg-white  mx-auto text-center ">
        <button className="md:p-3 p-2  text-center text-[#2F1A00] hover:bg-white bg-white   duration-300 cursor-pointer  ">
          Submit Your Manuscript
        </button>
      </div>
      <section className={`md:bg-white bg-white border-[#2F1A00] border fixed top-0  right-0 h-full w-64  transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="text-black text-left p-4 cursor-pointer">
          {/* <p onClick={() => setMenuOpen(false)} className=" text-black">close</p> */}
          <i onClick={() => setMenuOpen(false)} class="fi fi-rs-circle-xmark text-xl"></i>
        </div>
        <header className="max-w-[90rem] mx-auto px-5 bg-white ">
          <div className="flex justify-center lg:justify-between  items-center py-1">
            <nav ref={dropdownRef}>

              <div className={`space-x-1   max-w-[65rem] mx-auto relative  ${menuOpen ? "flex flex-col space-y-4" : " "}`}>

                {navLinks.map((link) => (
                  <div
                    key={link.to}
                    className="  inline-block group"
                  // onMouseEnter={() => handleMouseEnter(link.label)}
                  // onMouseLeave={handleMouseLeave}
                  // onMouseEnter={() => window.innerWidth >= 768 && handleMouseEnter(link.label)}
                  // onMouseLeave={() => window.innerWidth >= 768 && handleMouseLeave()}
                  >
                    <Link to={link.to}
                      className={` lg:border border-[#2F1A00] text-[#2F1A00]   p-2 flex lg:w-[144px]  transition-all duration-300 ease-in-out     lg:text-base md:text-sm justify-center items-center    gap-2 ${isActive(link.to) || hoveredCategory === link.label ? 'lg:bg-[#3E8000] text-[#2F1A00] lg:text-white' : 'bg-white'} `}
                      onClick={(e) => {
                        if (link.dropdown) {
                          e.preventDefault();
                          setHoveredCategory((prev) => (prev === link.label ? null : link.label));
                        } else {
                          setMenuOpen(false);
                        }
                      }}
                    >
                      {link.label}
                      {link.dropdown && (
                        <i className={`fi fi-rr-caret-down flex items-center  transition-all duration-300 ease-in-out  text-[#2F1A00] ${isActive(link.to) || hoveredCategory === link.label ? '    rotate-180 duration-100' : ' '} `}></i>
                      )}
                    </Link>
                    {hoveredCategory === link.label && link.dropdown && (
                      <div className="lg:absolute left-0 top-full   w-full md:bg-white  border-[#2F1A00]  transition-all duration-300 ease-in-out opacity-100 scale-y-100 origin-top  grid lg:grid-cols-2 border p-3 z-10">
                        {link.dropdown.map((dropdownlink) => (
                          <Link
                            key={dropdownlink.to}
                            to={dropdownlink.to}
                            className="block px-4 py-2 lg:text-[#3e8000]  md:text-start text-center    underline underline-offset-2 text-[#2F1A00]"
                            onClick={() => {
                              setHoveredCategory(null);
                              setMenuOpen(false);
                            }}
                          >
                            {dropdownlink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
