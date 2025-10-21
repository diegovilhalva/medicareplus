import Image from 'next/image'
import React from 'react'
import arrowBtn from "@/public/arrow-icon.svg"
import chatIcon from "@/public/chat-icon.png"
import behain from "@/public/behain.png"

const SpecialCare = () => {
    return (
        <>
            <div className="px-[8%] lg:px-[12%] py-15">
                <div className="flex flex-col lg:flex-row gap-10 justify-between items-center ">
                    <div className="flex flex-col w-full lg:w-1/2">
                        <div className="title hero-title w-full mb-10">
                            <span className="bg-[var(--prim-color2)] text-black font-semibold  rounded-full py-2 px-4 Unbounded  shadow-lg shadow-white/20">Especial Care</span>
                            <h1 className="text-[2.5rem] Unbounded mt-5">
                                Your health, our priority <br /> <span style={{ fontWeight: "400" }}> The Healing </span> with heart
                            </h1>
                        </div>
                        <p className="text-gray-400">
                            Health care is a vital aspect of maintaining overall well-being, encompassing a range of services
                            from preventive care to treatment of cuses on promoting Health care is a vital aspect of
                            maintaining overall well-being,
                        </p>
                        <div className="flex items-center gap-5 mt-5">
                            <button className="btns bg-white text-black flex items-center
                             rounded-full px-5 py-3  hover:text-white transition-all duration-500 cursor-pointer gap-2">
                                Read more
                                <Image src={arrowBtn} alt='arrowBtn' />
                            </button>
                            <span className='cursor-pointer flex  items-center gap-3'>
                                <Image src={chatIcon} alt='chat icon' />
                                <div>
                                    <h2>Need  Help?</h2>
                                    <h2>(603) 555-1234</h2>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col gap-5">
                            <div className="bg-white hover:bg-[var(--prim-color2)] flex  items-center gap-3 text-black transition-all p-3 duration-300 cursor-pointer rounded-lg">
                                <Image src={arrowBtn} alt='arrowBtn' />
                                <h2 className="Unbounded text-xl">
                                    Caring for you every step of the way
                                </h2>
                            </div>
                            <div className="bg-white hover:bg-[var(--prim-color2)] flex  items-center gap-3 text-black transition-all p-3 duration-300 cursor-pointer rounded-lg">
                                <Image src={arrowBtn} alt='arrowBtn' />
                                <h2 className="Unbounded text-xl">
                                    Building healthier communities
                                </h2>
                            </div>
                        </div>
                        <div className="behain mt-5 rounded-2xl overflow-hidden py-5 px-4 flex flex-col justify-center items-center gap-5 text-center">
                            <div className="behain-img">
                                <Image src={behain} alt='behain' />
                            </div>
                            <h2 className="Unbounded text-2xl">
                                Building healthier communities
                            </h2>
                            <p className="w-[90%]">
                                Health care is a vital aspect of maintaining overall well-being, encompassing a range of services
                                from preventive care to treatment of cuses on promoting Health care is a vital aspect
                            </p>
                            <button className="btns bg-white text-black flex items-center
                             rounded-full px-5 py-3  hover:text-white transition-all duration-500 cursor-pointer gap-2">
                                Read more
                                <Image src={arrowBtn} alt='arrowBtn' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SpecialCare