import React from 'react'
import ReviewOfExpertise from './ReviewOfExpertise'
import Specifications from './Specifications'
import Comments from './Comments'




function DetailsProduct() {



    return (
        <div className='flex flex-col w-full sm:w-[70%] md:w-[80%] py-4 py-2'>
            <ReviewOfExpertise />

            <div className='hidden md:inline-block w-full border border-gray-200 my-2'></div>

            <Specifications />

            <div className='hidden md:inline-block w-full border border-gray-200 my-2'></div>

            <Comments />

        </div>

    )
}

export default DetailsProduct
