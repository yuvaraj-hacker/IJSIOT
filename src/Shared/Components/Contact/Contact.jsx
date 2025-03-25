
import React from 'react'

function Contact() {
    return (
        <>
            <section className="max-w-screen-xl mx-auto w-full px-5 2xl:px-0     ">
                <div className="lg:flex md:flex  gap-8 ">
                    <div className="max-w-full w-full ">
                        <div className="lg:max-w-3xl max-w-xl w-full mx-auto  ">
                            <div className="  :bg-gray-900 lg:px-20    md:px-5  ">
                                <h1 className="  text-[#2F1A00] text-center merry  mb-3  font-semibold  lg:text-2xl   text-lg ">
                                    Contact Us
                                </h1>
                                <div className="    mx-auto max-w-screen-md    bg-[#B49752] text-white  md:p-6  p-3 ">
                                    <div className=' '>

                                    </div>
                                    <form className="w-full space-y-4" ngNativeValidate>
                                        <div>
                                            <label for="email" className="block mb-2 text-sm     mt-4 ">
                                                Name
                                            </label>
                                            <input type="text" name="name" id="name" ngModel className="shadow-sm  text-black   text-sm bg-white   focus:outline-none block w-full p-2.5   mt-4        "
                                                placeholder="Enter Your Name" required
                                            />
                                        </div>
                                        <div>
                                            <label for="email" className="block mb-2 text-sm     mt-4  ">
                                                Email
                                            </label>
                                            <input type="email" name="email" id="email" ngModel className="shadow-sm  text-black   text-sm bg-white   focus:outline-none block w-full p-2.5   mt-4 "
                                                placeholder="name@gmail.com" required />
                                        </div>
                                        <div>
                                            <label for="email" className="block mb-2 text-sm     mt-4 "  >
                                                Contact Number
                                            </label>
                                            <input type="text" name="number" id="number" ngModel className="shadow-sm  text-black   text-sm bg-white   focus:outline-none block w-full p-2.5   mt-4  "
                                                placeholder="Enter Your Mobile Number" required
                                            />
                                        </div>
                                        <div className="sm:col-span-2 mt-4">
                                            <label for="message" className="block mb-2 text-sm  ">
                                                Your Message
                                            </label>
                                            <textarea id="message" name="message" ngModel
                                                rows="4"
                                                className="block p-2.5 w-full   shadow-sm text-black   text-sm bg-white   focus:outline-none   mt-4 "
                                                placeholder="Leave a Message..."
                                            ></textarea>
                                        </div>
                                        <div className="text-center  w-fit mx-auto mt-4 ">
                                            <button type="submit" className="py-3 px-5 text-sm  bg-primary-blue-color    bg-[#2F1A00]    text-center    hover:text-primary-blue-color   text-white    cursor-pointer   " >
                                                Send message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <h3 className="mt-5 text-center text-sm md:text-lg">
                                    {" "}
                                    For any queries contact Email :{' '}
                                    <a href=" " className="text-blue-700 " >
                                        editor@ijsiot.com
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact

