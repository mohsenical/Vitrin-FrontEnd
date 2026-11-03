"use client"
import React, { useState } from 'react'

import OtpCode from '@/components/templates/register/OtpCode'
import Signup from '@/components/templates/register/Signup'

export const metadata = {
    title: "ثبت نام",
}


function index() {

    const [sendOtp, setSendOtp] = useState(false)

    const registerHandeler = (event) => {
        event.preventDefault()
        setSendOtp(true)
    }

    const backRegister = () => {
        setSendOtp(false)
    }

    return (
        <div className='flex justify-center items-center w-full h-screen'>
            {
                sendOtp ? (<OtpCode backRegister={backRegister} phone="09141493036" />) : (<Signup registerHandeler={registerHandeler} />)
            }
        </div>
    )
}

export default index
