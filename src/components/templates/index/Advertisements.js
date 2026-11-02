import Advertisement from '@/components/modules/Advertisement'
import React from 'react'

function Advertisements() {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-1'>
            <Advertisement href="/" image="Advertisement-1.jpg" />
            <Advertisement href="/" image="Advertisement-2.jpg" />
            <Advertisement href="/" image="Advertisement-3.jpg" />
            <Advertisement href="/" image="Advertisement-4.jpg" />
        </div>
    )
}

export default Advertisements
