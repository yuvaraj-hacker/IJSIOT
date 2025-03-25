import React from 'react'

function ArticleProcess() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem]    mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col gap-5">
                        <section className="flex flex-col gap-4">
                            <div className=' '>
                                <h1 className="  text-[#2F1A00] text-center merry   font-semibold  lg:text-2xl   text-lg ">
                                    Article Processing
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                International Journal of smart Internet of Things and applications (IJSIOT) follows a structured article processing workflow to ensure timely and high-quality publication of research articles.                            </p>
                        </section>

                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#2F1A00]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Submission
                            </h1>

                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className=""> Authors submit their manuscripts through the journal’s online submission system.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className="">A confirmation email is sent upon successful submission.</p>
                                </div>
                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#2F1A00]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Editorial Screening
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className="">The editorial team conducts a preliminary check for plagiarism, formatting compliance, and relevance to the journal’s scope.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className="">Manuscripts not meeting the criteria may be returned for modifications.</p>
                                </div>
                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#2F1A00]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Acceptance and Proofreading
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className="">Manuscripts undergo a double-blind peer review by at least two independent reviewers.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className="">Authors receive constructive feedback and are required to submit revisions if necessary.</p>
                                </div>
                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#2F1A00]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                DOI Assignment & Online Publication
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className="">Each article is assigned a Digital Object Identifier (DOI) for permanent accessibility.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className="">The article is published online and made available for indexing.</p>
                                </div>
                            </div>
                        </section>
                        <section className="flex flex-col gap-2">
                            <h1 className="    merry   font-semibold text-[#2F1A00]  underline underline-offset-2 lg:text-2xl   text-lg ">
                                Post-Publication
                            </h1>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className="">The article is indexed in relevant academic databases.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752]   flex items-center"></i>
                                    <p className="">Authors receive a notification regarding citation tracking and dissemination.</p>
                                </div>
                            </div>
                        </section>
                        <p className="text-justify md:text-base bg-[#B49752] text-white p-2 text-sm">
                            <span className='font-bold'>Note:</span> Guidelines subject to periodic review and update.</p>
                    </section>
                </div>
            </section>
        </>
    )
}

export default ArticleProcess

