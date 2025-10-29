"use client"
import Link from 'next/link'
import arrowBtn from "@/public/arrow-icon.svg"
import pricingBanner from "@/public/Pricing-banner.png"
import CountUp from 'react-countup'
import Image from 'next/image'

const page = () => {
  return (
    <>
      <div className="section-title px-[8%] lg:px-[12%] border-t text-black border-gray-300 bg-white py-30 mb-10 flex justify-between items-center">
        <h2 className="text-3xl md:mt-6xl Merienda">Pricing </h2>
        <div className="flex gap-2 text-2xl">
          <Link
            href="/" className="">
            Home
          </Link>
          <span>
            /  Pricing
          </span>
        </div>
      </div>
      <div className="px-[8%] lg:px-[12%] py-15 pb-0 lg:pb-15">
        <div className="pricing-plan w-full justify-center items-center">
          <div className="title text-center hero-title w-full mb-10">
            <span className="bg-[var(--prim-color2)] text-black font-semibold  rounded-full py-2 px-4 Unbounded  shadow-lg shadow-white/20">Pricing Plan</span>
            <h1 className="text-[2.5rem] Unbounded mt-5">
              Compassionate Care <br /> Always There <span> Health </span> First
            </h1>
          </div>
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="pricing-card border border-gray-300 hover:border-[var(--prim-color2)]hover:shadow-lg hover:translate-y-2 cursor-pointer transition-all duration-300 shadow-white/20 rounded-2xl p-8">
              <h3 className="Unbounded text-2xl font-semibold mb-2">
                Perfect
              </h3>
              <div className="flex items-baseline-last border-b border-gray-500">
                <span className="text-5xl font-bold">$29</span>
                <span className="text-lg mb-8 ml-1 text-white">/month</span>
              </div>
              <ul className="py-8">
                <li className="font-semibold Unbounded pb-4">
                  <i className="bi bi-chevron-double-right mr-2"></i>
                  Mistakes To Avoid
                </li>
                <li className="font-semibold Unbounded pb-4">
                  <i className="bi bi-chevron-double-right mr-2"></i>
                  Knew About Fonts
                </li>
                <li className="font-semibold Unbounded pb-4">
                  <i className="bi bi-chevron-double-right mr-2"></i>
                  Winning Metric for Your Startup
                </li>
              </ul>
              <button className='btns  w-full Unbounded bg-white text-black gap-3 flex items-center justify-center py-2 px-3 hover:text-white transition-all duration-500 cursor-pointer rounded-full'>
                Get Now
                <Image src={arrowBtn} alt='arrowBtn' className='ms-3' />
              </button>
            </div>
            <div className="pricing-card border border-gray-300 hover:border-[var(--prim-color2)]hover:shadow-lg hover:translate-y-2 cursor-pointer transition-all duration-300 shadow-white/20 rounded-2xl p-8">
              <h3 className="Unbounded text-2xl font-semibold mb-2">
                Easy
              </h3>
              <div className="flex items-baseline-last border-b border-gray-500">
                <span className="text-5xl font-bold">$20</span>
                <span className="text-lg mb-8 ml-1 text-white">/month</span>
              </div>
              <ul className="py-8">
                <li className="font-semibold Unbounded pb-4">
                  <i className="bi bi-chevron-double-right mr-2"></i>
                  Mistakes To Avoid
                </li>
                <li className="font-semibold Unbounded pb-4">
                  <i className="bi bi-chevron-double-right mr-2"></i>
                  Knew About Fonts
                </li>
                <li className="font-semibold Unbounded pb-4">
                  <i className="bi bi-chevron-double-right mr-2"></i>
                  Winning Metric for Your Startup
                </li>
              </ul>
              <button className='btns  w-full Unbounded bg-white text-black gap-3 flex items-center justify-center py-2 px-3 hover:text-white transition-all duration-500 cursor-pointer rounded-full'>
                Get Now
                <Image src={arrowBtn} alt='arrowBtn' className='ms-3' />
              </button>
            </div>
            <div className="pricing-card border border-gray-300 hover:border-[var(--prim-color2)]hover:shadow-lg hover:translate-y-2 cursor-pointer transition-all duration-300 shadow-white/20 rounded-2xl p-8">
              <h3 className="Unbounded text-2xl font-semibold mb-2">
                Start
              </h3>
              <div className="flex items-baseline-last border-b border-gray-500">
                <span className="text-5xl font-bold">$15</span>
                <span className="text-lg mb-8 ml-1 text-white">/month</span>
              </div>
              <ul className="py-8">
                <li className="font-semibold Unbounded pb-4">
                  <i className="bi bi-chevron-double-right mr-2"></i>
                  Mistakes To Avoid
                </li>
                <li className="font-semibold Unbounded pb-4">
                  <i className="bi bi-chevron-double-right mr-2"></i>
                  Knew About Fonts
                </li>
                <li className="font-semibold Unbounded pb-4">
                  <i className="bi bi-chevron-double-right mr-2"></i>
                  Winning Metric for Your Startup
                </li>
              </ul>
              <button className='btns  w-full Unbounded bg-white text-black gap-3 flex items-center justify-center py-2 px-3 hover:text-white transition-all duration-500 cursor-pointer rounded-full'>
                Get Now
                <Image src={arrowBtn} alt='arrowBtn' className='ms-3' />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[8%] lg:px-[12%] py-15 pb-0 lg:pb-15">
        <div className="pricing-banner relative">
          <Image src={pricingBanner} alt='pricingBanner' className='rounded-3xl w-full' />
          <span className="cursor-pointer absolute top-1/2 left-1/2 -translate-y-1/2 play-btn">
            <i className="bi bi-play-fill mr-2 text-2xl bg-[var(--prim-color)] px-3 py-2 rounded-full"></i>
          </span>
        </div>
      </div>
      <div className="px-[8%] lg:px-[12%] py-15">
        <div className="flex flex-col justify-center lg:justify-between items-center gap-10">
          <div className="title text-center hero-title w-full mb-10">
            <span className="bg-[var(--prim-color2)] text-black font-semibold  rounded-full py-2 px-4 Unbounded  shadow-lg shadow-white/20">Pricing</span>
            <h1 className="text-[2.5rem] Unbounded mt-5">
              Compassionate Care <br /> Always There <span> Health </span> First
            </h1>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col bg-[var(--prim-color2)] text-black rounded-3xl py-15 text-center hover:-translate-y-3 transition-all">
                <span className="Unbounded text-5xl">
                  <CountUp duration={5} end={1500} />+
                </span>
                <p className="Unbounded text-xl mt-2">
                  Team member
                </p>
            </div>
            <div className="flex flex-col bg-[var(--prim-color2)] text-black rounded-3xl py-15 text-center hover:-translate-y-3 transition-all">
                <span className="Unbounded text-5xl">
                  <CountUp duration={5} end={1500} />+
                </span>
                <p className="Unbounded text-xl mt-2">
                  Winning award
                </p>
            </div>
            <div className="flex flex-col bg-[var(--prim-color2)] text-black rounded-3xl py-15 text-center hover:-translate-y-3 transition-all">
                <span className="Unbounded text-5xl">
                  <CountUp duration={5} end={245} />K
                </span>
                <p className="Unbounded text-xl mt-2">
                 Client review
                </p>
            </div>
             <div className="flex flex-col bg-[var(--prim-color2)] text-black rounded-3xl py-15 text-center hover:-translate-y-3 transition-all">
                <span className="Unbounded text-5xl">
                  <CountUp duration={5} end={350} />K
                </span>
                <p className="Unbounded text-xl mt-2">
                 Complete project
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page