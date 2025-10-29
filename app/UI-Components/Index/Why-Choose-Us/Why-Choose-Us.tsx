"use client"

import choose1 from "@/public/choose1.jpg"
import choose2 from "@/public/choose2.jpg"
import choose3 from "@/public/choose3.jpg"
import Image from "next/image"

import CountUp from "react-countup"

const WhyChooseUs = () => {
    return (
        <>
            <div className="px-[8%] lg:px-[12%] py-12">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="w-full lg:w-1/2">
                        <div className="title hero-title w-full mb-10">
                            <span className="bg-[var(--prim-color2)] text-black font-semibold  rounded-full py-2 px-4 Unbounded  shadow-lg shadow-white/20">Why Chose Us</span>
                            <h1 className="text-[2.5rem] Unbounded mt-5">
                                Empower Health Lives <span style={{ fontWeight: "400" }}> Expert </span> Care.
                            </h1>
                        </div>
                        <Image src={choose1} alt="choose1" className="rounded-2xl w-full" />
                    </div>
                    <div className="w-full lg:w-1/2 ">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="flex flex-col  w-full">
                                <Image src={choose2} alt="choose2" className="rounded-2xl w-full mb-6" />
                                <h2 className="Unbounded text-3xl mb-2">
                                    The Enhanc Lives care Through Care
                                </h2>
                                <p className="text-gray-400">
                                    Health care is a vital aspect of maintaining overall well-being, encompassing a range of services
                                    from preventive
                                </p>
                            </div>
                            <div className="relative hidden md:block">
                                <Image src={choose3} alt="choose3" className="rounded-2xl" />
                                <span className="absolute top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2 cursor-pointer play-btn">
                                    <i className="bi bi-play-fill mr-2 text-2xl bg-[var(--prim-color)] px-3 py-2 rounded-full"></i>

                                </span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bg-[var(--prim-color2)] rounded-md mt-20">
                    <div className="flex flex-col md:flex-row justify-between items-center px-5 lg:px-20 py-10 gap-5">
                        <h2 className="w-full Unbounded text-3xl text-black leading-10">
                            {"Tomorrow's Health"} <br /> {"Today's Care"}
                        </h2>
                        <div className="w-full grid  grid-cols-2 md:grid-cols-3  gap-x-8 gap-y-5">
                            <div className="flex flex-col text-black">
                                <span className="Unbounded text-4xl">
                                    <CountUp duration={5} end={600} />+
                                </span>
                                <p className="Unbounded">
                                    Complete Project
                                </p>
                            </div>
                             <div className="flex flex-col text-black">
                                <span className="Unbounded text-4xl">
                                    <CountUp duration={5} end={100} />+
                                </span>
                                <p className="Unbounded">
                                    Team Member
                                </p>
                            </div>
                            <div className="flex flex-col text-black">
                                <span className="Unbounded text-4xl">
                                    <CountUp duration={5} end={220} />+
                                </span>
                                <p className="Unbounded">
                                   Clients Reviews
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WhyChooseUs