import React from 'react'

function Copyrights() {
    return (
        <>
            <section className="flex flex-col gap-5 max-w-[90rem]    mx-auto md:px-5 px-3">
                <div className="  relative">

                    <section className="flex flex-col md:gap-7 gap-5">
                        <section className='grid   grid-cols-1   md:gap-4 gap-3'>
                            <div className='  '>
                                <h1 className="  underline underline-offset-4 decoration-[#2F1A00] text-[#2F1A00] text-center merry  font-semibold  lg:text-2xl   text-lg ">
                                    Copyrights
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                The International Journal of Smart Internet of Things and Applications (IJSIOT) is committed to upholding ethical publishing standards and protecting the rights of authors, reviewers, and the journal. This page outlines the copyright policies, licensing terms, and author responsibilities.            </p>
                        </section>

                        <section className='grid   grid-cols-1  md:gap-4 gap-3'>
                            <div className='flex flex-col gap-4'>
                                <h1 className="  text-center merry   font-semibold text-[#2F1A00]  underline underline-offset-4 decoration-[#2F1A00] lg:text-2xl   text-lg ">
                                    Copyright Ownership & Agreement
                                </h1>

                            </div>

                            <ol className="list-disc  pl-7  space-y-2  bg-[#B49752] p-2 text-white ">
                                <li className="  ">
                                    By submitting a manuscript, the author(s) agree to grant IJSIOT the right to publish, distribute, and archive the work in electronic and print formats.                                </li>
                                <li className="  ">
                                    The copyright remains with the author(s), but they must obtain consent from IJSIOT before republishing the work elsewhere.
                                </li>
                                <li className="  ">
                                    Proper attribution must be given to IJSIOT when reusing content published in the journal.                                </li>

                            </ol>

                        </section>

                        <section className='grid   grid-cols-1   gap-2'>
                            <div className='flex flex-col md:gap-4 gap-3'>
                                <h1 className="  text-center merry   font-semibold text-[#2F1A00]  underline underline-offset-4 decoration-[#2F1A00] lg:text-2xl   text-lg ">
                                    Copyright Transfer
                                </h1>
                                <div className='flex   gap-3'>
                                    <i className="fi fi-sr-play text-xs text-[#B49752] mt-1     "></i>
                                    <p className="text-justify  md:text-base text-sm">By signing this form, the author(s) transfer the copyright of the article to IJSIOT, effective if and when the article is accepted for publication. This copyright transfer grants IJSIOT the exclusive right to reproduce, distribute, and publish the article in various formats, including reprints, translations, digital copies, electronic archives, or any other forms of reproduction.</p>
                                </div>
                            </div>
                            <p className="">The author(s) retain:</p>
                            <ol className="list-disc  pl-5  space-y-2  ">
                                <li className="  ">
                                    I/We shall not publish the aforementioned contribution elsewhere without prior written consent from the publisher, unless it has undergone significant modifications.
                                </li>
                                <li className="  ">
                                    I/We confirm that the submission is original, except for any excerpts from copyrighted works included with proper permissions. It contains no libelous statements and does not infringe upon any copyright, trademark, patent, statutory right, or proprietary rights of others. The corresponding author accepts responsibility on behalf of all co-authors.                                        </li>
                                <li className="  ">
                                    I/We affirm that we have the authority to enter into this agreement. The article contains no unlawful or harmful content, does not violate any copyright or trademark laws, and does not infringe on the rights or privacy of others. Any factual statements presented are either true or based on reasonable research.
                                </li>
                                <li className="">
                                    I/We agree to indemnify the editors of IJSIOT against any claims or expenses arising from a breach of this declaration.
                                </li>
                            </ol>

                        </section>
                        <section className="flex flex-col md:gap-4 gap-3">
                            <div className='  '>
                                <h1 className="  text-center merry   font-semibold text-[#2F1A00]  underline underline-offset-4 decoration-[#2F1A00] lg:text-2xl   text-lg ">
                                    Declaration
                                </h1>
                            </div>
                            <p className="text-justify md:text-base text-sm">
                                I/We ____________________________, the author(s) of the research paper/article entitled ______________________, hereby grant permission for the publication of the above-mentioned paper/article in IJSIOT (International Journal of Smart Internet of Things and Applications).
                            </p>
                            <p className="text-justify md:text-base text-sm">
                                <p className=""> It is agreed that :</p>
                                <ol className="list-decimal list-inside space-y-2">
                                    <li className="  ">
                                        I/We shall not publish the aforementioned contribution elsewhere without prior written consent from the publisher, unless it has undergone significant modifications.
                                    </li>
                                    <li className="  ">
                                        I/We confirm that the submission is original, except for any excerpts from copyrighted works included with proper permissions. It contains no libelous statements and does not infringe upon any copyright, trademark, patent, statutory right, or proprietary rights of others. The corresponding author accepts responsibility on behalf of all co-authors.                                        </li>
                                    <li className="  ">
                                        I/We affirm that we have the authority to enter into this agreement. The article contains no unlawful or harmful content, does not violate any copyright or trademark laws, and does not infringe on the rights or privacy of others. Any factual statements presented are either true or based on reasonable research.
                                    </li>
                                    <li className="">
                                        I/We agree to indemnify the editors of IJSIOT against any claims or expenses arising from a breach of this declaration.
                                    </li>
                                </ol>
                            </p>

                            <div className='flex justify-between'>
                                <div>
                                    <p className="">Date : </p>
                                    <p className="">Mobile : </p>
                                </div>
                                <div className='text-center'>
                                    <p className="">Author's Signature : </p>
                                    <p className="">Author Name(s) : </p>
                                    <p className="">Address : </p>
                                </div>
                            </div>
                        </section>

                    </section>
                </div>
            </section>
        </>
    )
}

export default Copyrights
