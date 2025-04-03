import React from 'react';
import { FaEnvelope, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-[#2F1A00] text-white">
      <div className=" mx-auto px-5 max-w-[92rem]  lg:py-10 py-5">
        <div className="grid grid-cols-1  md:grid-cols-4 sm:grid-cols-2 md:gap-8 gap-4">
          <div className='text-center md:text-left flex flex-col gap-4 justify-between'>
            <Link to='/'>
              {/* <p className=" font-bold md:text-2xl ">IJSIOT</p> */}
              <img className=' p-2 w-40 md:mx-0   mx-auto' src="/assets/Images/IJSIOT.png" alt="" />
            </Link>
            <div className='flex flex-col justify-center md:items-start items-center md:text-left lg:text-base text-sm'>
              <div className='flex gap-3 items-center'>
                <FaEnvelope />
                <p>  <a href=" " className=" "> editor@ijsiot.com</a></p>
              </div>
              <div className='flex gap-3 items-center'>
                <FaGlobe />
                <p>  <a href=" " className=" ">www.ijsiot.com</a></p>
              </div>
              <div className=' p-3 '>
                <img className='md:ml-auto md:mx-0 mx-auto w-24   block' src="/assets/Images/ojs_brand.png" alt="ojs" />
              </div>
            </div>
          </div>
          <div className='lg:mx-auto md:text-left text-center '>
            <h4 className="lg:text-xl font-bold mb-2 merry">Resources</h4>
            <ul className=' lg:text-base text-sm'>
              <li><div href="/" className="hover:underline">Home</div></li>
              <li><div className="hover:underline"> <Link to='/about'>About Us</Link></div></li>
              <li><div className="hover:underline"><Link to='/contact'>Contact </Link> </div></li>
              <li><div className="hover:underline"><Link to='/editorial-board'>Editorial Board </Link></div></li>
              <li><div className="hover:underline"><Link to='/issues'>  Issues </Link> </div></li>
            </ul>
          </div>
          <div className='lg:ml-auto  md:text-left text-center  '>
            <div className='flex gap-4 flex-wrap justify-center items-end '>
              <div className=''>
                <h4 className="lg:text-xl font-bold mb-2 merry">Journal Overview</h4>
                <ul className="lg:text-base text-sm ">
                  <li><div className="hover:underline"><Link to='/Peer-Review-Process'> Peer Review Process </Link> </div></li>
                  <li><div className="hover:underline"><Link to='/Publication-ethics'> Publication Ethics </Link></div></li>
                  <li><div className="hover:underline"><Link to='/abstracting-and-indexing'>Abstracting and Indexing </Link></div></li>
                  <li><div className="hover:underline"><Link to='/article-processing'>Article Processing Charges </Link>  </div></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='lg:ml-auto  md:text-left text-center  '>
            <div className='flex gap-4 flex-wrap justify-center items-end '>
              <div className=''>
                <h4 className="lg:text-xl font-bold mb-2 merry">Journal Policy</h4>
                <ul className="lg:text-base text-sm ">
                  <li><div href="/editorial-board" className="hover:underline"><Link to='plagiarism'>Plagiarism </Link></div></li>
                  <li><div href="/peerreview" className="hover:underline"><Link to='/malpractice'>Malpractice </Link></div></li>
                  <li><div href="/publicationethic" className="hover:underline"><Link to='/correction'>Correction </Link></div></li>
                  <li><div href="/abstracting" className="hover:underline"><Link to='/publication-policy'>Publication Rights</Link></div></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="bg-white h-[1px] max-w-[92rem] mx-auto  "></h1>
      <div className='grid lg:grid-cols-3 grid-cols-1  items-center  gap-2  pb-2 md:py-3 py-0'>
        <div>
        </div>
        <div className="text-center   md:text-base text-xs  ">
          <p>© 2025 <span className='hover:underline' > <Link to="/" target='_blank'>IJSIOT</Link> </span> . All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
