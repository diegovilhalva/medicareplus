import Ficon1 from "@/public/f-icon1.png"
import Ficon2 from "@/public/f-icon2.png"
import Ficon3 from "@/public/f-icon3.png"
import Feature1 from "@/public/feature1.jpg"
import Feature2 from "@/public/feature2.jpg"
import Feature3 from "@/public/feature3.jpg"
import arrowBtn from "@/public/arrow-icon.svg"
import Image from "next/image"

const Feature = () => {
    return (
        <>
            <div className="px-[8%] lg:px-[12%] py-15">
                <div className="features rounded-2xl p-8">
                    <div className="w-full lg:w-1/2">
                        <div className="title hero-title">
                            <span className="bg-[var(--prim-color2)] text-black font-semibold  rounded-full py-2 px-4 Unbounded  shadow-lg shadow-white/20">Our Features</span>
                            <h1 className="text-[2.5rem] Unbounded mt-5">
                                Compassionate Care Health <span style={{ fontWeight: "400" }}> Exceptional </span> Results
                            </h1>
                        </div>
                    </div>
                    <div className="feature-card border-t border-b border-gray-500 cursor-pointer py-4 flex flex-col md:flex-row justify-beetween items-start md:items-center gap-5 mt-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="flex items-center gap-5">
                                <div className="bg-[var(--prim-color)] p-3 rounded-full">
                                    <Image src={Ficon1} alt="ficon1" className="w-10" />
                                </div>
                                <h2 className="Unbounded text-3xl">
                                    Quality Care <br /> Exceptional Service
                                </h2>
                            </div>
                            <div className="flex flex-col">
                                <p className="flex items-center text-gray-400">
                                    <span className="text-3xl text-gray-400 mr-2">•</span>Your Health, Our Priority
                                </p>
                                <p className="flex items-center text-gray-400">
                                    <span className="text-3xl text-gray-400 mr-2">•</span>Harmony Health
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10">
                            <div className="hidden md:flex items-center gap-5">
                                <Image src={Feature1} alt="feature 1" className="feature-image rounded-2xl " />
                            </div>
                            <div className="flex flex-col">
                                <button className="btns mt-2 md:mt-0 font-semibold Unbounded bg-white text-black  hover:text-white transition-all duration-500 cursor-pointer rounded-full px-5 py-3 w-full flex items-center justify-center gap-2">
                                    Read More
                                    <Image src={arrowBtn} alt="arrowBtn"  />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="feature-card border-t border-b border-gray-500 cursor-pointer py-4 flex flex-col md:flex-row justify-beetween items-start md:items-center  ">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="flex items-center gap-5">
                                <div className="bg-[var(--prim-color)] p-3 rounded-full">
                                    <Image src={Ficon2} alt="ficon3" className="w-10" />
                                </div>
                                <h2 className="Unbounded text-3xl">
                                    Quality Care <br /> Exceptional Service
                                </h2>
                            </div>
                            <div className="flex flex-col">
                                <p className="flex items-center text-gray-400">
                                    <span className="text-3xl text-gray-400 mr-2">•</span>Your Health, Our Priority
                                </p>
                                <p className="flex items-center text-gray-400">
                                    <span className="text-3xl text-gray-400 mr-2">•</span>Harmony Health
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10">
                            <div className="hidden md:flex items-center gap-5">
                                <Image src={Feature2} alt="feature 1" className="feature-image rounded-2xl " />
                            </div>
                            <div className="flex flex-col">
                                <button className="btns  mt-2 md:mt-0 font-semibold Unbounded bg-white text-black  hover:text-white transition-all duration-500 cursor-pointer rounded-full px-5 py-3 w-full flex items-center justify-center gap-2">
                                    Read More
                                    <Image src={arrowBtn} alt="arrowBtn"  />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="feature-card border-t border-b border-gray-500 cursor-pointer py-4 flex flex-col md:flex-row justify-beetween items-start md:items-center  ">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="flex items-center gap-5">
                                <div className="bg-[var(--prim-color)] p-3 rounded-full">
                                    <Image src={Ficon3} alt="ficon3" className="w-10" />
                                </div>
                                <h2 className="Unbounded text-3xl">
                                   Caring for You <br /> Care for Tomorrow
                                </h2>
                            </div>
                            <div className="flex flex-col">
                                <p className="flex items-center text-gray-400">
                                    <span className="text-3xl text-gray-400 mr-2">•</span>Your Health, Our Priority
                                </p>
                                <p className="flex items-center text-gray-400">
                                    <span className="text-3xl text-gray-400 mr-2">•</span>Harmony Health
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10">
                            <div className="hidden md:flex items-center gap-5">
                                <Image src={Feature3} alt="feature 1" className="feature-image rounded-2xl " />
                            </div>
                            <div className="flex flex-col">
                                <button className="btns  mt-2 md:mt-0 font-semibold Unbounded bg-white text-black  hover:text-white transition-all duration-500 cursor-pointer rounded-full px-5 py-3 w-full flex items-center justify-center gap-2">
                                    Read More
                                    <Image src={arrowBtn} alt="arrowBtn"  />
                                </button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Feature