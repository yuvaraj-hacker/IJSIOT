import React, { useEffect, useRef, useState } from "react";
import Header from "../Core/Header";
import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "../Core/Footer";
import { IoIosArrowUp } from "react-icons/io";

const Main = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null); // Ref for the Header
  const mainRef = useRef(null); // Ref for the main content
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    // Set the initial header height when the component mounts
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight); // Get the height of the header
      }
    };

    // Run the update when the component mounts and on window resize
    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const [hoveredCategory, setHoveredCategory] = useState("About Journal");
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
      <div ref={headerRef} className="   text-white fixed top-0  w-full  z-50">
        <Header />
      </div>
      <main ref={mainRef} className="grid grid-cols-10  mx-auto max-w-[100rem]  relative min-h-screen  " style={{ marginTop: `${headerHeight}px` }} >
        {/* <aside className="col-span-2 py-5 ">
          <nav>
            <ul>
              <li className="p-2 hover:bg-gray-700 cursor-pointer">About</li>
              <li className="p-2 hover:bg-gray-700 cursor-pointer">Overview</li>
              <li className="p-2 hover:bg-gray-700 cursor-pointer">Policy</li>
             </ul>
          </nav>
        </aside> */}
        <section className={`md:bg-white   lg:block hidden w-full  sticky top-14 border-r border-r-[#B49752]  col-span-2 py-5 md:px-5 px-3 self-start min-h-screen overflow-y-auto  `}>
          <header className="  bg-white ">
            <div className="   ">
              <nav ref={dropdownRef}>
                <div className="flex flex-col gap-2" >
                  {navLinks.map((link) => (
                    <div
                      key={link.to}
                      className="   "
                    // onMouseEnter={() => handleMouseEnter(link.label)}
                    // onMouseLeave={handleMouseLeave}
                    // onMouseEnter={() => window.innerWidth >= 768 && handleMouseEnter(link.label)}
                    // onMouseLeave={() => window.innerWidth >= 768 && handleMouseLeave()}
                    >
                      <Link to={link.to}
                        className={`    p-2 flex    gap-3  transition-all duration-300 ease-in-out    lg:text-base md:text-sm  bg-[#2F1A00] border border-[#2F1A00]    ${isActive(link.to) || hoveredCategory === link.label ? 'md:bg-[#2F1A00] text-[#3E8000] text-white' : 'text-white'} `}
                        onClick={(e) => {
                          if (link.dropdown) {
                            e.preventDefault();
                            setHoveredCategory((prev) => (prev === link.label ? null : link.label));
                          }
                        }}
                      >
                        {link.dropdown && (
                          <i className={`fi fi-sr-play flex items-center text-sm  transition-all duration-300 ease-in-out  text-white ${isActive(link.to) || hoveredCategory === link.label ? '  text-white rotate-90 duration-100' : ' '} `}></i>
                        )}
                        {link.label}
                      </Link>
                      {hoveredCategory === link.label && link.dropdown && (
                        <div className="  left-0 top-full   w-full md:bg-white    transition-all duration-300 ease-in-out opacity-100 scale-y-100 origin-top    p-3 z-10">
                          {link.dropdown.map((dropdownlink) => (
                            <Link
                              key={dropdownlink.to}
                              to={dropdownlink.to}
                              className="block px-4 py-2 md:text-[#2F1A00]  md:text-start text-center    underline underline-offset-2 text-[#2F1A00]"


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
        <div className="lg:col-span-8 col-span-10">
          <Outlet />
        </div>
      </main >
      <div>
        <Footer />
      </div>

      {
        showScroll && (
          <button onClick={scrollToTop} className="fixed bottom-5 right-5 bg-white  text-[#2F1A00] cursor-pointer border font-bold border-[#2F1A00] p-3 rounded-full shadow-lg transition-opacity hover:bg-opacity-80"
          >
            <IoIosArrowUp className="md:text-xl" />
          </button>
        )
      }
    </>
  );
};
export default Main;
