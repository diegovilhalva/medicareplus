
import arrowBtn from "@/public/arrow-icon.svg"
import heroShepo1 from "@/public/hero-shape-1.png"
import Image from "next/image"
import Link from "next/link"


const Header = () => {
    return (
        <>
            <div className="px-[8%] lg:px-[12%] py-15 relative">
                <Image src={heroShepo1} alt="heroshape1" className="absolute top-0 right-0" />
                <Image src={heroShepo1} alt="heroshape1" className="absolute top-0 right-0" />
                <Image src={heroShepo1} alt="heroshape1" className="absolute top-0 right-0" />
                <Image src={heroShepo1} alt="heroshape1" className="absolute top-3 left-0 -rotate-[90deg]" />
                <Image src={heroShepo1} alt="heroshape1" className="absolute top-3 left-0 -rotate-[90deg]" />
                <Image src={heroShepo1} alt="heroshape1" className="absolute top-3 left-0 -rotate-[90deg]" />
                <span className="bg-[var(--prim-color)] Unbounded shadow-lg shadow-white/20 px-4 py-2 rounded-full">
                    Medical Care
                </span>
                <div className="hero-title w-[70%] my-5">
                    <h1 className="text-7xl leading-25 Unbounded">

                        Trusted <span> Medical </span> care near you, supporting <span> health </span> each day
                    </h1>
                    <div className="flex items-center gap-5 lg:mt-10">
                        <button className="btns bg-white text-black gap-2 px-5 py-3 rounded-full hover:text-white transition-all duration-500 cursor-pointer">
                            <Link className="flex Unbounded items-center" href="/UI-Components/Pages/Contact">
                                Make Appointment
                                <Image src={arrowBtn} alt="ArrowBtn" className="ms-3" />
                            </Link>
                        </button>
                        <span className="cursor-pointer play-btn">
                            <i className="bi bi-play-fill mr-2 text-2xl bg-[var(--prim-color)] px-3 py-2 rounded-full"></i>
                            Play Now
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header