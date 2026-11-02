import Card from '@/components/modules/Card'
import SectionTitle from '@/components/modules/SectionTitle'
import React from 'react'

function Products() {
    return (
        <>
            <div className='w-full sm:rounded-md relative'>
                <div className=' w-full px-1'>

                    {/* SectionTitle */}
                    <SectionTitle sectiontitle="پیشنهادات ما" />

                    {/* Product */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 h-[80%] w-full *:flex *:justify-center *:items-center py-2'>
                        <Card image="product-1.webp" alt="product-1" />
                        <Card image="product-2.webp" alt="product-2" />
                        <Card image="product-3.webp" alt="product-3" />
                        <Card image="product-4.webp" alt="product-4" />
                        <Card image="product-5.webp" alt="product-5" />
                        <Card image="product-6.webp" alt="product-6" />
                        <Card image="product-7.webp" alt="product-7" />
                        <Card image="product-8.webp" alt="product-8" />
                        <Card image="product-9.webp" alt="product-9" />
                        <Card image="product-10.webp" alt="product-10" />
                        <Card image="product-11.webp" alt="product-11" />
                        <Card image="product-12.webp" alt="product-12" />
                        <Card image="product-13.webp" alt="product-13" />
                        <Card image="product-14.webp" alt="product-14" />
                        <Card image="product-15.webp" alt="product-15" />
                        <Card image="product-6.webp" alt="product-6" />
                    </div>
                </div>
            </div>

        </>


    )
}

export default Products
