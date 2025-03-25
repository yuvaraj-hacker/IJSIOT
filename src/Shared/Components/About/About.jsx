import React from 'react'

function About() {
  return (
    <>
      <section className="flex flex-col gap-5 max-w-[90rem]  mx-auto md:px-5 px-3">
        <div className="  relative">
          <section className="flex flex-col md:gap-7 gap-5">
            <section className="flex justify-between flex-wrap md:flex-nowrap gap-5">
              <div className="flex flex-col justify-evenly md:gap-4 gap-3">
                <div className='  '>
                  <h1 className="   text-center merry underline underline-offset-4 decoration-[#2F1A00] text-[#2F1A00]    font-bold  lg:text-2xl   text-lg ">
                    About Us
                  </h1>
                </div>
                <p className="text-justify md:text-base text-sm">
                  The International Journal of Smart Internet of Things and Applications (IJSIOT) is a peer-reviewed, open-access journal dedicated to publishing high-quality research and advancements in IoT technologies, smart systems, connected devices, and their practical applications. It serves as a platform for researchers, academicians, and industry professionals to share innovative ideas, methodologies, and cutting-edge developments that drive IoT implementation across various domains, including manufacturing, healthcare, transportation, agriculture, smart homes, and smart cities. Committed to fostering interdisciplinary research, IJSIOT welcomes original research articles, review papers, case studies, and technical reports that contribute to the continuous evolution of smart IoT technologies and their real-world applications.                </p>
              </div>
            </section>
            <section>
              <h1 className="bg-[#B49752] h-[1px] w-full  "></h1>
            </section>
            <section className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1    gap-3'>
              <div className='flex flex-col gap-2 p-4 bg-[#B49752]'>
                <h2 className='text-white font-bold merry md:text-lg underline underline-offset-2'>Editorial Excellence</h2>
                <div className='flex   gap-3'>
                  <i className="fi fi-sr-play   text-xs    text-white  mt-1  "></i>
                  <p className="text-justify text-white  md:text-base text-sm">        Our editorial board consists of renowned experts in Smart IoT and emerging technologies. They ensure a rigorous peer review process, maintaining the highest standards of research quality and scientific integrity in every published article.
                  </p>
                </div>
              </div>
              <div className='flex flex-col gap-2 p-4 bg-[#B49752]'>
                <h2 className='text-white font-bold merry md:text-lg  underline underline-offset-2'>Global Reach and Impact</h2>
                <div className='flex   gap-3 '>
                  <i className="fi fi-sr-play   text-xs    text-white   mt-1 "></i>
                  <p className="text-justify  md:text-base text-sm text-white">        IJSIOT connects researchers and professionals across continents, fostering knowledge exchange in Smart IoT applications. Our journal is indexed in major academic databases, ensuring broad visibility and impactful contributions to the field.
                  </p>
                </div>
              </div>
              <div className='flex flex-col gap-2 p-4 bg-[#B49752]'>
                <h2 className='text-white font-bold merry md:text-lg  underline underline-offset-2' >Publication Ethics</h2>
                <div className='flex   gap-3'>
                  <i className="fi fi-sr-play   text-xs    text-white   mt-1 "></i>
                  <p className="text-justify  md:text-base text-sm text-white">        We uphold strict ethical standards in publishing Smart IoT research. IJSIOT ensures transparency in peer review, rigorous plagiarism checks, and fair treatment of all submissions, fostering trust and credibility in scientific publishing.
                  </p>
                </div>
              </div>
            </section>
            <section className="flex flex-col md:gap-4 gap-3">
              <div className='  '>
                <h1 className="   text-center merry   font-bold  lg:text-2xl   underline underline-offset-4 decoration-[#2F1A00] text-[#2F1A00]  text-lg ">
                  Scope of the International Journal of Smart Internet of Things and Applications (IJSIOT)
                </h1>
              </div>
              <p className="text-justify md:text-base bg-[#B49752] text-white p-4  text-sm">
                The International Journal of Smart Internet of Things and Applications (IJSIOT) aims to provide a comprehensive platform for researchers, academicians, and industry professionals to share and discuss advancements in IoT technologies, applications, and innovations. The journal covers a broad spectrum of topics, including but not limited to:              </p>
              <div className='flex flex-col gap-2 md:text-base text-sm'>
                {/* <div className='flex items-center gap-2'>
                  <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                  <p className=""><span className='text-[#3e8000] font-semibold'>Autonomous & Industrial Robotics</span> – Advanced robotic systems, humanoid robots, and collaborative robotics</p>
                </div>
                <div className='flex items-center gap-2 '>
                  <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                  <p className=""><span className='text-[#3e8000] font-semibold'>AI in Automation</span> – Machine learning, deep learning, and AI-driven automation</p>
                </div>
                <div className='flex items-center gap-2'>
                  <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                  <p className=""><span className='text-[#3e8000] font-semibold'>Human-Robot Interaction</span> – Assistive robotics, ethical AI, and cognitive robotics</p>
                </div>
                <div className='flex items-center gap-2'>
                  <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                  <p className=""><span className='text-[#3e8000] font-semibold'>Smart Manufacturing & Industry 4.0</span> – Cyber-physical systems, intelligent automation, and digital twins</p>
                </div>
                <div className='flex items-center gap-2'>
                  <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                  <p className=""><span className='text-[#3e8000] font-semibold'>IoT & Embedded Systems </span> – Smart sensors, real-time automation, and edge computing</p>
                </div> */}
                {[
                  "Smart IoT systems and architectures", "Edge and cloud computing for IoT", "IoT security, privacy, and blockchain integration", "Wireless sensor networks and IoT protocols", "Artificial intelligence and machine learning for IoT", "Industrial IoT and automation", "IoT applications in healthcare, smart cities, agriculture, and transportation", "Big data analytics and IoT-driven decision-making", "5G and IoT communication networks", "IoT-enabled energy management and sustainability", "Digital twins and cyber-physical systems", "IoT for smart homes, wearables, and autonomous vehicles"].map((topics, index) => (
                    <div key={index} className="flex items-center gap-2 mb-1">
                      <i className="fi fi-sr-play text-xs  text-[#B49752] flex items-center "></i>
                      <h1 className="md:text-base text-sm">{topics}</h1>
                    </div>
                  ))}

              </div>
            </section>
            <section className="flex flex-col md:gap-4 gap-3">
              <div className='   '>
                <h1 className="  underline underline-offset-4 decoration-[#2F1A00] text-[#2F1A00] text-center merry  font-bold  lg:text-2xl   text-lg ">
                  Mission of the International Journal of Smart Internet of Things and Applications (IJSIOT)
                </h1>
              </div>
              <p className="text-justify md:text-base bg-[#B49752] text-white p-2 text-sm">
                The mission of IJSIOT is to promote high-quality research in the field of Smart Internet of Things and its applications by:
              </p>
              <div className='flex flex-col gap-2  md:text-base text-sm'>
                <div className='flex items-center gap-2'>
                  <i className="fi fi-sr-play text-xs  text-[#B49752]   flex items-center"></i>
                  <p className=""><span className='text-[#2F1A00]  font-semibold'>Publishing cutting-edge research</span>  that advances IoT technologies and their real-world implementations.</p>
                </div>
                <div className='flex items-center gap-2'>
                  <i className="fi fi-sr-play text-xs  text-[#B49752]   flex items-center"></i>
                  <p className=""><span className='text-[#2F1A00]  font-semibold'>Encouraging innovation</span> by providing a global platform for researchers, academicians, and industry professionals to collaborate.</p>
                </div>
                <div className='flex items-center gap-2'>
                  <i className="fi fi-sr-play text-xs  text-[#B49752]   flex items-center"></i>
                  <p className=""><span className='text-[#2F1A00]  font-semibold'>Bridging academia and industry</span>  by featuring studies that have direct applications in sectors like healthcare, smart cities, agriculture, and automation.</p>
                </div>
                <div className='flex items-center gap-2'>
                  <i className="fi fi-sr-play text-xs  text-[#B49752]   flex items-center"></i>
                  <p className=""><span className='text-[#2F1A00]  font-semibold'>Ensuring knowledge dissemination</span>  through open-access, peer-reviewed publications that contribute to the academic and industrial IoT ecosystem.</p>
                </div>
                <div className='flex items-center gap-2'>
                  <i className="fi fi-sr-play text-xs  text-[#B49752]   flex items-center"></i>
                  <p className=""><span className='text-[#2F1A00] font-semibold'>Fostering interdisciplinary research</span>  by integrating IoT with AI, blockchain, cybersecurity, and emerging technologies to address modern challenges.</p>
                </div>
              </div>
            </section>
          </section>
        </div>
      </section>
    </>
  )
}

export default About
