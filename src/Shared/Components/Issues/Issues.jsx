import { CheckCircle } from 'lucide-react'
import React from 'react'

function Issues() {
    return (
        <>
            <section className=' h-screen flex items-center gap-3 justify-center'>
                <CheckCircle  className='text-[#B49752] '/>
                <p className=" md:text-xl text-[#B49752] ">There are no issues at present.</p>
            </section>
        </>
    )
}

export default Issues
