import { Clock, FileEdit } from 'lucide-react'
import React from 'react'

function EditorialBoard() {
    return (
        <>
            <section className='min-h-[50vh] flex items-center gap-3  justify-center'>
                <FileEdit   className="  text-[#B49752]" />
                <p className=" md:text-xl text-[#B49752] ">Will be Updated Soon...</p>

            </section>

        </>
    )
}

export default EditorialBoard
