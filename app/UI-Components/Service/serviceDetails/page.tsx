"use client"
import Link from 'next/link'
import React from 'react'

const ServiceDetails = () => {
    return (
        <>
            <div className="section-title px-[8%] lg:px-[12%] border-t text-black border-gray-300 bg-white py-30 mb-10 flex justify-between items-center">
                <h2 className="text-3xl md:mt-6xl Merienda">Service</h2>
                <div className="flex gap-2 text-2xl">
                    <Link    href="/" className="">
                        Home
                    </Link>
                    <span>
                        / Service
                    </span>
                </div>
            </div>
        </>
    )
}

export default ServiceDetails