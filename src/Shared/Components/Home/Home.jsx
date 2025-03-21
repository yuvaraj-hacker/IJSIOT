import React from "react";
import { FaCircle, FaDatabase, FaUnlockAlt, FaUserCheck } from "react-icons/fa";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <section className=" flex flex-col gap-5  max-w-[90rem] py-5  mx-auto md:px-5 px-3">
        <div className="  relative">
          <section className="flex flex-col gap-5">
            <section className="flex justify-between flex-wrap md:flex-nowrap gap-5">
              <div className="flex flex-col justify-evenly md:gap-0 gap-3">
                <p className="text-justify md:text-base text-sm">
                  <strong className="text-[#3E8000]">
                    The International Journal of Advanced Trends in Robotics and
                    Automation (IJATRA)
                  </strong>{" "}
                  is a peer-reviewed, open-access journal dedicated to
                  publishing high-quality research and advancements in robotics,
                  automation, artificial intelligence, and intelligent systems.
                  It provides a platform for researchers, academicians, and
                  industry professionals to share innovative ideas,
                  methodologies, and cutting-edge developments that drive
                  automation across various industries, including manufacturing,
                  healthcare, transportation, agriculture, space exploration,
                  and smart cities. Committed to fostering interdisciplinary
                  research and technological advancements, IJATRA welcomes
                  original research articles, review papers, case studies, and
                  technical reports that contribute to the continuous evolution
                  of robotics and automation technologies.
                </p>
                <button className="md:p-3 p-2 border   border-[#3E8000] text-[#3E8000] hover:bg-[#3E8000] hover:text-white duration-300 cursor-pointer w-[170px]">
                  Submit Your Paper
                </button>
              </div>
              <img className="mx-auto  border p-0.5 border-[#3e8000] w-52 " src="/assets/Images/Image-hero.jpeg" alt="" />
            </section>
            <section className="flex flex-col gap-4">
            <div className='p-0.5 border border-[#3e8000]'>
                <h1 className="bg-primary text-white text-center merry shadow md:p-3 p-2 font-semibold  lg:text-2xl   text-lg ">
                  About
                </h1>
              </div>
              <p className="text-justify md:text-base text-sm">
                The International Journal of Advanced Trends in Robotics and
                Automation (IJATRA) is a peer-reviewed, open-access journal
                focused on cutting-edge research in robotics, automation, and
                intelligent systems. We publish innovative studies in AI-driven
                robotics, industrial automation, human-robot interaction, and
                more, fostering collaboration between academia and industry. IJATRA aims to foster collaboration between researchers, academicians, and industry professionals by providing a platform for sharing innovative ideas, groundbreaking research, and technological advancements. We welcome original research articles, review papers, and case studies that contribute to the evolving landscape of robotics and automation.
              </p>

              <Link to='/about' className="w-fit">
                <button className="md:p-3 p-2 border w-[170px]  border-[#3E8000] text-[#3E8000] hover:bg-[#3E8000] hover:text-white duration-300 cursor-pointer">
                  Read More
                </button>
              </Link>

            </section>
            <section className="flex flex-col gap-4  ">

              <div className='p-0.5 border border-[#3e8000]'>
                <h1 className="bg-primary text-white text-center merry shadow md:p-3 p-2 font-semibold  lg:text-2xl   text-lg ">
                 Journal  overview
                </h1>
              </div>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1  ">
                <div className=" border border-[#3E8000]   flex flex-col justify-between ">
                  <div className=" p-4 flex flex-col gap-2">
                    <h2 className="text-[#3E8000] font-bold merry md:text-lg underline underline-offset-2">Open Access</h2>
                    <div className="flex gap-4  ">
                      <i className="fi fi-rr-angle-double-small-right  "></i>
                      <p className=" md:text-base text-sm">All publications are fully open access, ensuring that readers have unrestricted and free access to all published articles.</p>
                    </div>
                  </div>
                  <div className="bg-[#719465] p-2 flex justify-between items-center">
                    <div className="md:p-4 p-3 rounded-full bg-white w-fit relative bottom-7 border border-[#3E8000] text-[#3E8000]">
                      <FaUnlockAlt  />
                    </div>
                    <div>
                      <Link to="/about">
                        <i className="fi fi-sr-arrow-circle-right hover:scale-105 duration-300 text-white flex items-center md:text-4xl text-xl"></i>
                      </Link>
                    </div>
                  </div>

                </div>
                <div className=" border border-[#3E8000]   flex flex-col justify-between  ">
                  <div className=" p-4 flex flex-col gap-2">
                    <h2 className="text-[#3E8000] font-bold merry md:text-lg underline underline-offset-2">Peer-Review</h2>
                    <div className="flex gap-4  ">
                      <i className="fi fi-rr-angle-double-small-right  "></i>
                      <p className=" md:text-base text-sm">IJATRA is a peer-reviewed journal. All submitted manuscripts undergo a rigorous blind peer-review process to ensure the highest standards of quality and academic integrity</p>
                    </div>
                  </div>
                  <div className="bg-[#719465] p-2 flex justify-between items-center">
                    <div className="md:p-4 p-3 rounded-full bg-white w-fit relative bottom-7 border border-[#3E8000] text-[#3E8000]">
                      <FaUserCheck />
                    </div>
                    <div>

                      <Link to="/Peer-Review-Process">
                        <i className="fi fi-sr-arrow-circle-right hover:scale-105 duration-300 text-white flex items-center md:text-4xl text-xl"></i>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className=" border border-[#3E8000]  flex flex-col justify-between ">
                  <div className=" p-4 flex flex-col gap-2">
                    <h2 className="text-[#3E8000] font-bold merry md:text-lg underline underline-offset-2">Indexing</h2>
                    <div className="flex gap-4  ">
                      <i className="fi fi-rr-angle-double-small-right  "></i>
                      <p className=" md:text-base text-sm">All published articles are designed for maximum visibility on search engines, adhering to advanced SEO standards to ensure widespread discoverability and accessibility.</p>
                    </div>
                  </div>
                  <div className="bg-[#719465] p-2 flex justify-between items-center">
                    <div className="md:p-4 p-3 rounded-full bg-white w-fit relative bottom-7 border border-[#3E8000] text-[#3E8000]">
                      <FaDatabase />
                    </div>
                    <div>
                      <Link to="/abstracting-and-indexing">
                        <i className="fi fi-sr-arrow-circle-right text-white hover:scale-105 duration-300 flex items-center md:text-4xl text-xl"></i>
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </section>
            <section className="flex flex-col gap-4">
            <div className='p-0.5 border border-[#3e8000]'>
                <h1 className="bg-primary text-white text-center merry shadow md:p-3 p-2 font-semibold  lg:text-2xl   text-lg ">
                The Journal covers following areas :
                </h1>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3  md:grid-cols-3">
                {[
                  "Humanoid Robots",
                  "Swarm Robotics",
                  "Soft Robotics",
                  "Autonomous Navigation",
                  "Cognitive Robotics",
                  "AI in Robotics",
                  "Human-Robot Collaboration",
                  "Multi-Robot Systems",
                  "Robot Perception & Vision",
                  "Brain-Machine Interfaces",
                  "Bio-Inspired Robotics",
                  "Self-Healing Robots",
                  "Exoskeletons",
                  "Telerobotics",
                  "Autonomous Drones",
                  "Medical & Surgical Robots",
                  "Agricultural Robotics",
                  "Underwater Robots",
                  "Smart Manufacturing",
                  "Industry 4.0 Technologies",
                  "Industrial Internet of Things (IIoT)",
                  "Automated Quality Control",
                  "Digital Twins in Automation",
                  "Collaborative Robotics in Manufacturing",
                  "AI in Predictive Maintenance",
                  "Real-Time Process Control",
                  "Autonomous Warehouse Systems",
                  "Cyber-Physical Systems",
                  "Space Robotics",
                  "Bipedal & Quadrupedal Locomotion",
                  "AI-Driven Robotics Simulation",
                  "Machine Learning in Robotics",
                  "Digital Human Modeling",
                  "Gesture & Voice Recognition",
                  "Multi-Sensor Data Fusion",
                  "Edge Computing for Robots",
                  "Advanced Control Algorithms",
                  "Sensor Fusion Technologies",
                  "Feedback Control in Robotics",
                  "PID & Adaptive Controllers",
                  "Real-Time Motion Planning",
                  "Embedded Systems for Robotics",
                  "Actuator and Motor Control",
                  "Wireless Sensor Networks",
                  "Mechatronic System Design",
                  "Signal Processing in Robotics",
                  "Neuromorphic Computing",
                  "Social & Emotional AI Robots",
                  "Disaster Response Robotics",
                  "Ethics & Security in Robotics",
                  "Wearable Robotics",
                  "Human-Centered AI",
                  "Reinforcement Learning in Robots",
                  "AI in Supply Chains"

                ].map((topics, index) => (
                  <div key={index} className="flex items-center gap-2 mb-1">
                    <i className="fi fi-rr-angle-double-small-right  flex items-center "></i>
                    <h1 className="md:text-base text-sm">{topics}</h1>
                  </div>
                ))}
              </div>
            </section>
          </section>
        </div>
        <section className=" ">
          <h1 className="bg-[#3E8000] h-[1px] w-full  "></h1>
        </section>
        <section className="text-center flex flex-col gap-2 xl:w-1/2 mx-auto">
          <p className="  md:text-base text-sm text-justify">
            We publish original research articles, review articles and technical notes. The journal reviews papers within two weeks of submission and publishes accepted articles on the internet immediately upon receiving the final versions.
            <span className="text-[#3E8000] font-bold">   Our fast reviewing process is our strength. </span>
          </p>
          <div className="flex items-center gap-4">
            <i className="fi fi-tr-calendar text-white "></i>
            <h1 className="bg-primary text-white py-2 font-semibold md:text-base text-sm   text-center mx-auto p-3">
              Launch of Next Issue: 28
              <sup>th</sup> Oct 2025
            </h1>
          </div>
          <h1 className="  ">With Warm Regards,</h1>
          <h1 className="  font-semibold  md:text-base text-sm">
            Editor-in-chief
          </h1>
          <h1 className="  font-semibold md:text-base text-sm">IJATRA</h1>
        </section>
      </section>
    </>
  );
}
export default Home;
