import React, { useState } from 'react'

const faqs = [
    {
        title: "Peer-Review Process",
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>All submissions undergo a double-blind peer review by experts in the field.</li>
                <li>Reviewers evaluate manuscripts based on originality, relevance, technical quality, and clarity.</li>
                <li>Authors may need to revise and resubmit based on reviewer feedback.</li>
            </ul>
        )
    },
    {
        title: "Open-Access Policy",
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>IJSIOT is an open-access journal, ensuring that published articles are freely accessible to the global research community.</li>
            </ul>
        )
    },
    {
        title: "Copyright and Licensing",
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Authors retain copyright but must grant the journal a license to publish and distribute the work.</li>
                <li>Articles are published under a Creative Commons License (CC BY or CC BY-NC).</li>
            </ul>
        )
    },
    {
        title: "Ethical Considerations",
        content: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Authors must comply with ethical guidelines for human and animal research, data privacy, and conflict of interest disclosures.</li>
                <li>The journal follows COPE (Committee on Publication Ethics) guidelines for handling misconduct cases.</li>
            </ul>
        )
    }
];
function Guideline() {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem]    mx-auto md:px-5 px-3">
                <div className="  relative">
                    <section className="flex flex-col md:gap-7 gap-5">
                        <section className="flex flex-col md:gap-4 gap-3">
                            <div className='  '>
                                <h1 className="  underline underline-offset-4 decoration-[#2F1A00] text-[#2F1A00] text-center merry  font-semibold  lg:text-2xl   text-lg ">
                                    Author Guidelines
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                Authors submitting to the International Journal of Smart Internet of Things and Applications (IJSIOT) must ensure that their manuscripts align with the journal’s scope and adhere to the following guidelines:
                            </p>
                            <div className='flex flex-col gap-2  md:text-base text-sm'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play  text-xs  text-[#B49752] flex items-center"></i>
                                    <p className=""> Manuscripts should be original, unpublished, and not under consideration elsewhere.

                                    </p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play  text-xs text-[#B49752] flex items-center"></i>
                                    <p className=""> The paper must be written in clear, concise English and formatted according to the journal’s template.</p>
                                </div>
                                <div className='flex items-center gap-2'>

                                    <p className="">The manuscript should include:</p>
                                </div>
                                <div className='flex items-center gap-2 pl-3'>
                                    <i className="fi fi-sr-play  text-xs text-[#B49752]  flex items-center"></i>
                                    <p className="">Title, Author(s) Details (Name, Affiliation, Email)</p>
                                </div>
                                <div className='flex items-center gap-2 pl-3'>
                                    <i className="fi fi-sr-play  text-xs  text-[#B49752] flex items-center"></i>
                                    <p className=""> Abstract (150-250 words)</p>
                                </div>
                                <div className='flex items-center gap-2 pl-3'>
                                    <i className="fi fi-sr-play  text-xs text-[#B49752] flex items-center"></i>
                                    <p className="">Keywords (3-6 relevant terms)</p>
                                </div>
                                <div className='flex items-center gap-2 pl-3'>
                                    <i className="fi fi-sr-play  text-xs text-[#B49752] flex items-center"></i>
                                    <p className="">Introduction, Methodology, Results, Discussion, Conclusion, References</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play  text-xs text-[#B49752] flex items-center"></i>
                                    <p className="">Figures, tables, and equations should be properly labeled and numbered.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play  text-xs text-[#B49752] flex items-center"></i>
                                    <p className=""> References should follow a standard citation format (APA/IEEE) and be properly cited.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play  text-xs text-[#B49752] flex items-center"></i>
                                    <p className=""> Plagiarism must be below the acceptable threshold (typically greater than 15%), and authors must ensure proper citations for third-party content.

                                    </p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play  text-xs text-[#B49752]  flex items-center"></i>
                                    <p className=""> Ethical considerations, including conflict of interest statements and funding disclosures, should be included where applicable.</p>
                                </div>

                            </div>
                        </section>

                        <section className="flex flex-col md:gap-4 gap-3">
                            <div className='   '>
                                <h1 className="underline underline-offset-4 decoration-[#2F1A00] text-[#2F1A00]  text-center merry    font-semibold  lg:text-2xl   text-lg ">
                                    Publishing Requirements
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                To ensure a high standard of publication, IJSIOT follows a rigorous peer-review process and upholds the highest standards of ethical publishing:
                            </p>
                            <section className="">
                                <div className="   ">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className=" pb-3">
                                            <button className="w-full text-left font-semibold flex  bg-[#B49752] px-2 text-white  justify-between py-2" onClick={() => toggle(index)}  >
                                                {faq.title}
                                                <span>{activeIndex === index ? "−" : "+"}</span>
                                            </button>
                                            {activeIndex === index && <p className=" md:text-base text-sm  mt-2">{faq.content}</p>}
                                        </div>
                                    ))}
                                </div>
                            </section>

                        </section>
                        <section className="flex flex-col md:gap-4 gap-3  md:text-base text-sm">
                            <div className='  '>
                                <h1 className=" underline underline-offset-4 decoration-[#2F1A00] text-[#2F1A00] text-center merry    font-semibold  lg:text-2xl   text-lg ">
                                    Submission Process
                                </h1>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play  text-xs text-[#B49752]  flex items-center"></i>
                                    <p className="">Authors must prepare their manuscripts following the journal’s formatting guidelines.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play  text-xs text-[#B49752] flex items-center"></i>
                                    <p className="">Submissions should be made through the IJSIOT online submission system.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play  text-xs text-[#B49752] flex items-center"></i>
                                    <p className="">The manuscript will undergo an initial editorial check for compliance with journal standards.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play  text-xs text-[#B49752] flex items-center"></i>
                                    <p className="">If deemed suitable, the manuscript will be assigned for double-blind peer review.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play  text-xs text-[#B49752] flex items-center"></i>
                                    <p className="">Authors will receive reviewer feedback, and revisions may be required before final acceptance.</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <i className="fi fi-sr-play  text-xs text-[#B49752]  flex items-center"></i>
                                    <p className="">Once accepted, the article will be formatted, proofread, and published online.</p>
                                </div>

                            </div>
                        </section>

                    </section>
                </div>
            </section>
        </>
    )
}

export default Guideline
