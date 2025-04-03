import React from "react";
import { FaCircle, FaDatabase, FaUnlockAlt, FaUserCheck } from "react-icons/fa";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <section className=" flex flex-col gap-5  max-w-[90rem]  mx-auto md:px-5 px-3">
        <div className="  relative">
          <section className="flex flex-col md:gap-7 gap-5">
            <section className="grid lg:grid-cols-3 gap-3">
              <div className="flex flex-col md:justify-evenly  lg:col-span-2 md:gap-0 gap-3 md:order-1 order-2 ">
                <p className="text-justify md:text-base text-sm">
                  <strong className="text-[#2F1A00] text-xl underline underline-offset-4 decoration-[#2F1A00]  ">
                    The International Journal of Smart Internet of Things and Applications
                  </strong>{" "}
                  is a scholarly journal dedicated to publishing high-quality research articles, reviews, and case studies in the field of the Internet of Things (IoT) and its applications. The journal aims to provide a platform for researchers, academics, and industry professionals to share innovative ideas, cutting-edge technologies, and advancements in smart IoT solutions.
                </p>
                {/* <a href="https://IJSIOT.com/IJSIOT/index.php/IJSIOT/about/submissions" target="_blank" rel="noopener noreferrer" className="w-fit" >
                  <button className="md:p-3 p-2 border   border-[#2F1A00] text-[#2F1A00] hover:bg-[#2F1A00] rounded-full hover:text-white duration-300 cursor-pointer w-[170px]">
                    Submit Your Paper
                  </button>
                </a> */}
              </div>
              <div className="relative w-full md:order-2 order-1">
                <img className="mx-auto w-full" src="/assets/Images/intrernet of things.jpg" alt="" />
                <div className="absolute inset-0 bg-[#2F1A00] opacity-10"></div>
              </div>

              <div className="order-3">


                <a href="https://ijsiot.com/Ijsiot/index.php/ijsiot/about/submissions" target="_blank">
                  <button className="md:p-3 p-2 md:hidden  w-fit mx-auto md:text-base  text-center    text-white bg-[#B49752] flex items-center justify-center gap-3  duration-300 cursor-pointer  ">
                    Submit Your Manuscript
                    <i className="fi fi-sr-play text-xs text-white  flex items-center"></i>
                  </button>
                </a>
              </div>
            </section>

            <section className="flex flex-col md:gap-4 gap-3">
              <div className='  '>
                <h1 className=" text-[#2F1A00]  underline underline-offset-4 decoration-[#2F1A00]     text-center merry  font-bold  lg:text-2xl   text-lg ">
                  About Our Publication
                </h1>
              </div>
              <p className="text-justify md:text-base text-sm">
                The International Journal of Smart Internet of Things and Applications is a peer-reviewed, open-access journal committed to advancing cutting-edge research, technological innovations, and real-world applications in the field of the Internet of Things (IoT). The journal serves as a global platform for researchers, academicians, industry professionals, and technology enthusiasts to exchange knowledge, novel ideas, and emerging trends in smart IoT systems.

                IJSIOT aims to bridge the gap between theory and practice, fostering interdisciplinary research that integrates IoT with Artificial Intelligence (AI), Machine Learning (ML), Big Data, Cloud Computing, Edge Computing, Blockchain, Cybersecurity, and 5G technologies.                </p>

              <Link to='/about' className="w-fit mx-auto">
                <button className="md:p-3 p-2 border w-[170px] text-white bg-[#B49752]  gap-2 flex justify-center items-center     hover:bg-[#2F1A00] hover:text-white duration-300 cursor-pointer">
                  Read More
                  <i className="fi fi-sr-play text-xs text-white  flex items-center"></i>
                </button>
              </Link>

            </section>
            <section className="flex flex-col md:gap-4 gap-3 ">

              <div className=''>
                <h1 className="underline underline-offset-4 decoration-[#2F1A00] text-[#2F1A00]   text-center merry    font-bold  lg:text-2xl   text-lg ">
                  Journal  overview
                </h1>
              </div>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 grid-cols-1  h-full  ">
                <div className="   flex flex-col  h-full  ">
                  <div className=" p-4 flex flex-col gap-2 bg-[#B49752]  h-full  ">
                    <div className="flex gap-3 items-center underline underline-offset-2 decoration-white">
                      <h2 className="text-white font-bold merry md:text-lg ">Open Access</h2>
                      <FaUnlockAlt className="text-white " />
                    </div>
                    <div className="flex gap-4  ">
                      <i className="fi fi-sr-play text-xs text-white mt-1"></i>
                      <p className=" md:text-base text-sm text-white text-justify">All publications are fully open access, ensuring that readers have unrestricted and free access to all published articles. This allows for greater knowledge sharing and global collaboration, enhancing the impact of research across various fields.</p>
                    </div>
                  </div>
                </div>
                <div className="     flex flex-col justify-between  h-full   ">
                  <div className=" p-4 flex flex-col gap-2 bg-[#B49752] h-full ">
                    <div className="flex gap-3 items-center underline underline-offset-2 decoration-white">
                      <h2 className="text-white font-bold merry md:text-lg underline underline-offset-2">Peer-Review</h2>
                      <FaUserCheck className="text-white" />
                    </div>
                    <div className="flex gap-4  ">
                      <i className="fi fi-sr-play text-xs text-white  mt-1 "></i>
                      <p className=" md:text-base text-sm text-white text-justify">IJSIOT maintains the highest academic integrity through a rigorous blind peer-review process, ensuring each manuscript meets standards of originality, scientific quality, and relevance in the field of IoT and smart applications.</p>
                    </div>
                  </div>

                </div>

                <div className="   flex flex-col justify-between h-full ">
                  <div className=" p-4 flex flex-col gap-2 bg-[#B49752] h-full">
                    <div className="flex gap-3 items-center underline underline-offset-2 decoration-white">
                      <h2 className="  font-bold merry md:text-lg underline underline-offset-2 text-white">Indexing</h2>
                      <FaDatabase className="text-white" />
                    </div>
                    <div className="flex gap-4  ">
                      <i className="fi fi-sr-play text-xs text-white  mt-1 "></i>
                      <p className=" md:text-base text-sm text-white text-justify">IJSIOT optimizes all articles for SEO and discoverability, enhancing their visibility and impact. The journal actively pursues indexing in leading academic databases and repositories.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-col md:gap-4 gap-3  ">
              <div className=' '>
                <h1 className="underline underline-offset-4 decoration-[#2F1A00] text-[#2F1A00]    text-center merry  font-bold  lg:text-2xl   text-lg ">
                  The Journal covers following areas
                </h1>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3  md:grid-cols-3">
                {[
                  "Smart IoT Systems", "Edge Computing", "IoT Security", "Wireless Sensor Networks", "AI in IoT", "Industrial IoT", "IoT in Healthcare", "Smart Homes", "IoT Protocols", "Blockchain for IoT", "IoT Data Analytics", "Cloud Computing for IoT", "IoT-based Automation", "5G and IoT", "Smart Cities", "IoT Energy Management", "IoT for Agriculture", "Cyber-Physical Systems", "IoT Privacy", "Machine Learning for IoT", "IoT Device Management", "IoT-enabled Smart Grid", "IoT in Supply Chain", "IoT in Transportation", "IoT in Retail", "IoT for Environmental Monitoring", "IoT-based Predictive Maintenance", "IoT for Disaster Management", "IoT and Digital Twins", "IoT in Smart Manufacturing", "IoT for Water Management", "IoT in Smart Wearables", "IoT in Home Automation", "IoT in Autonomous Vehicles", "IoT for Smart Healthcare Devices", "IoT and Big Data", "IoT-based Remote Sensing", "IoT in E-Governance", "IoT for Asset Tracking", "IoT for Precision Agriculture", "IoT-based Smart Lighting", "IoT-based Smart Surveillance", "IoT-enabled Smart Parking", "IoT for Waste Management", "IoT in Smart Education", "IoT for Fire Detection", "IoT and Robotics", "IoT in Hospitality", "IoT-based Smart Contracts", "IoT in Military Applications", "IoT for Personalized Healthcare", "IoT and Quantum Computing", "IoT for Smart Logistics", "IoT in Construction", "IoT in Oil and Gas Industry", "IoT-based Traffic Management", "IoT for Smart Airports", "IoT in Maritime Industry", "IoT and Human-Computer Interaction", "IoT in Renewable Energy Systems", "IoT for Fleet Management", "IoT in Sports Analytics", "IoT for Smart Hospitals", "IoT in Connected Vehicles", "IoT for Smart Farming", "IoT in Supply Chain Optimization", "IoT in Digital Health Records", "IoT-based Smart Metering", "IoT for Remote Patient Monitoring", "IoT for Smart Offices", "IoT and Fog Computing", "IoT in Wildlife Conservation"
                ].map((topics, index) => (
                  <div key={index} className="flex items-center gap-2 mb-1">
                    <i className="fi fi-sr-play text-xs  text-[#B49752] flex items-center "></i>
                    <h1 className="md:text-base text-sm">{topics}</h1>
                  </div>
                ))}
              </div>
            </section>
          </section>
        </div>
        <section className=" ">
          <h1 className="bg-[#B49752] h-[1px] w-full  "></h1>
        </section>
        <section className="text-center flex flex-col gap-2   mx-auto  ">
          <p className="  md:text-base text-sm text-center">
            We publish original research articles, review articles and technical notes. The journal reviews papers within two weeks of submission and publishes accepted articles on the internet immediately upon receiving the final versions.
            <span className="text-[#2F1A00] font-bold">   Our fast reviewing process is our strength. </span>
          </p>
          <div className="flex items-center gap-4">
            <i className="fi fi-tr-calendar text-white "></i>
            <h1 className="bg-[#B49752] text-white py-2 font-semibold md:text-base text-sm  w-full  text-center mx-auto p-3">
              Launch of Next Issue: 28
              <sup>th</sup> Oct 2025
            </h1>
          </div>
          <h1 className="  ">With Warm Regards,</h1>
          <h1 className="  font-semibold  md:text-base text-sm">
            Editor-in-chief
          </h1>
          <h1 className="  font-semibold md:text-base text-sm">IJSIOT</h1>
        </section>
      </section>
    </>
  );
}
export default Home;
