import React from 'react'

function PeerReview() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem] py-5  mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col gap-5">
                        <section className="flex flex-col gap-4">
                            <div className='p-0.5 border border-[#3e8000]'>
                                <h1 className="bg-primary text-white text-center merry shadow md:p-3 p-2 font-semibold  lg:text-2xl   text-lg ">
                                    Peer Review Process
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                The International Journal of Advanced Trends in Robotics and Automation (IJATRA) follows a rigorous peer review process to maintain the highest standards of academic excellence and research integrity.                            </p>

                        </section>

                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#719465]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Initial Screening
                            </h1>

                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className=""> Upon submission, the editorial team conducts a preliminary review to ensure the manuscript aligns with the journal’s scope and formatting guidelines.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className="">Submissions that do not meet the basic requirements may be returned to the authors for modifications.</p>
                                </div>



                            </div>
                        </section>
                        <section className="flex flex-col gap-2 ">
                            <h1 className="    merry   font-semibold text-[#719465]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Double-Blind Peer Review
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className="">Manuscripts passing the initial screening are sent to at least two independent reviewers for evaluation.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className="">The identities of both the authors and reviewers remain anonymous to ensure unbiased assessments.</p>
                                </div>



                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#719465]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Author Revisions
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className="">Based on reviewer feedback, authors may be requested to revise their manuscript.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className="">A revised version must be submitted within the specified deadline, with a detailed response addressing the reviewers' comments.</p>
                                </div>



                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#719465]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Editorial Decision
                            </h1>
                            <p className="text-justify md:text-base text-sm">
                                After revisions, the editorial board makes the final decision:
                            </p>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className="">Accepted: The manuscript is approved for publication.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className="">Minor/Major Revisions: The author must make necessary changes before acceptance.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className="">Rejected: The manuscript does not meet the journal's standards.</p>
                                </div>


                            </div>
                            <p className="text-justify md:text-base text-sm">
                                The decision is communicated to the author via email.
                            </p>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#719465]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Final Proof & Publication
                            </h1>

                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className="">Once accepted, authors receive a final proof for approval before publication.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-rr-angle-double-small-right   flex items-center"></i>
                                    <p className="">The article is published in the upcoming issue and indexed accordingly.</p>
                                </div>



                            </div>
                        </section>


                    </section>
                </div>
            </section>
        </>
    )
}

export default PeerReview

