import React from 'react'

function Publication() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem] py-5  mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col gap-5">
                        <section className="flex flex-col gap-4">
                            <div className=' '>
                                <h1 className="  text-[#2F1A00] text-center merry   font-semibold  lg:text-2xl   text-lg ">
                                    Publication Ethics
                                    </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                            International Journal of smart Internet of Things and applications (IJSIOT) is committed to upholding the highest ethical standards in scholarly publishing. Authors, reviewers, and editors are expected to adhere to the following principles:
                            </p>
                        </section>

                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#2F1A00]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Author Responsibilities
                            </h1>

                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className=""> Ensure that their work is original and properly cites all sources.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className="">Avoid plagiarism, data fabrication, and redundant publication</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className="">Disclose any potential conflicts of interest.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className="">Obtain necessary permissions for copyrighted material.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className="">Adhere to ethical research practices involving human or animal subjects.</p>
                                </div>



                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#2F1A00]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Reviewer Responsibilities
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className="">Provide an objective and unbiased evaluation of the manuscript.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className="">Maintain confidentiality and not disclose manuscript details.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className="">Avoid conflicts of interest and decline reviews when necessary.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className="">Provide constructive feedback to help improve the manuscript.</p>
                                </div>



                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#2F1A00]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Editorial Responsibilities
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className="">Ensure a fair and unbiased peer-review process.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className="">Maintain the confidentiality of submitted manuscripts.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className="">Make publication decisions based on the manuscript’s quality and relevance.</p>
                                </div>

                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className="">Address any ethical concerns, including plagiarism or research misconduct.</p>
                                </div>



                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#2F1A00]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Handling Misconduct
                            </h1>

                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className="">Allegations of plagiarism, data falsification, or other ethical breaches will be investigated thoroughly.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className="">If misconduct is confirmed, appropriate actions, including retractions or corrections, will be taken.</p>
                                </div>
                            </div>
                        </section>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Publication

