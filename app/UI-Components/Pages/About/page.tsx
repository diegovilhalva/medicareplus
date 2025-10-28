"use client"
import Link from "next/link"
import About from "../../Index/About/About"
import Feature from "../../Index/Feature/Feature"
import WhyChooseUs from "../../Index/Why-Choose-Us/Why-Choose-Us"
import SpecialCare from "../../Index/Special-Care/Special-Care"
import Testimonial from "../../Index/Testimonial/Testimonial"


const page = () => {
    return (
        <>
            <div className="section-title px-[8%] lg:px-[12%] border-t text-black border-gray-300 bg-white py-30 mb-10 flex justify-between items-center">
                <h2 className="text-3xl md:mt-6xl Merienda">About </h2>
                <div className="flex gap-2 text-2xl">
                    <Link
                        href="/" className="">
                        Home
                    </Link>
                    <span>
                        / About
                    </span>
                </div>
            </div>
            <About />
            <Feature />
            <WhyChooseUs />
            <SpecialCare />
            <Testimonial />
        </>
    )
}

export default page