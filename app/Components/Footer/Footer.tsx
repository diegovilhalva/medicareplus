import Image from 'next/image'
import React from 'react'
import arrowBtn from "@/public/arrow-icon.svg"
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <footer className='px-[8%] lg:px-[12%] pt-10 border-t border-gray-500'>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="footer-banner w-full">
            <div className="title hero-title">
              <h1 className="text-[2.5rem] Unbounded mt-5 text-center">
                Ready To Turn Dreams Into Reality <br /> Subscribe to Our <span>Newsletter</span>
              </h1>
            </div>
            <div className="input-details mt-10 ml-0 lg:ml-20 flex justify-center items-center relative">
              <input type="email" placeholder='Enter your email' className='w-[80%] lg:w-[50%] outline-none border border-gray-300 rounded-full py-5 px-4' />
              <button className="footer-btn hidden md:flex absolute right-48 btns mt-2 md:mt-0 font-semibold Unbounded bg-white text-black items-center gap-2 px-5 py-3 rounded-full hover:text-white transition-all duration-500 cursor-pointer">
                Read More <Image src={arrowBtn} alt='arrowBtn' />
              </button>
            </div>
          </div>
        </div>
        <div className="footer mt-15 pb-10 gap-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="footer-content">
            <Link href="/" className='text-4xl font-bold Merienda text-white'>
              Medi<span className='text-[var(--prim-color)]'>Care+</span>
            </Link>
            <p className="mt-5 text-gray-400">
              Medical services are an essential part of our lives, offering care and treatment for various
              health conditions
            </p>
            <div className="footer-social-icon mt-6 flex gap-3">
              <i className="bi bi-facebook rounded-full text-xl border border-gray-300 p-4 py-3">
              </i>
              <i className="bi bi-linkedin rounded-full text-xl border border-gray-300 p-4 py-3">
              </i>
              <i className="bi bi-instagram rounded-full text-xl border border-gray-300 p-4 py-3">
              </i>
              <i className="bi bi-twitter-x rounded-full text-xl border border-gray-300 p-4 py-3">
              </i>
            </div>
          </div>
          <div className="footer-content flex flex-col">
            <h2 className="mb-5 text-2xl">Page</h2>
            <Link href="#" className='mt-2 text-lg hover:text-[var(--prim-color2)] hover:ms-2 transition-all duration-300'>
              About Us
            </Link>
            <Link href="#" className='mt-2 text-lg hover:text-[var(--prim-color2)] hover:ms-2 transition-all duration-300'>
              Services
            </Link>
            <Link href="#" className='mt-2 text-lg hover:text-[var(--prim-color2)] hover:ms-2 transition-all duration-300'>
              Why Choose Us
            </Link>
            <Link href="#" className='mt-2 text-lg hover:text-[var(--prim-color2)] hover:ms-2 transition-all duration-300'>
              Doctors
            </Link>
            <Link href="#" className='mt-2 text-lg hover:text-[var(--prim-color2)] hover:ms-2 transition-all duration-300'>
              Blogs And News
            </Link>
          </div>
          <div className="footer-content flex flex-col">
            <h2 className="mb-5 text-2xl">Links</h2>
            <Link href="#" className='mt-2 text-lg hover:text-[var(--prim-color2)] hover:ms-2 transition-all duration-300'>
              Terms & Conditions
            </Link>
            <Link href="#" className='mt-2 text-lg hover:text-[var(--prim-color2)] hover:ms-2 transition-all duration-300'>
              Privicy Policy
            </Link>
            <Link href="#" className='mt-2 text-lg hover:text-[var(--prim-color2)] hover:ms-2 transition-all duration-300'>
              Contact Us
            </Link>
            <Link href="#" className='mt-2 text-lg hover:text-[var(--prim-color2)] hover:ms-2 transition-all duration-300'>
              Terms of Use
            </Link>

          </div>
          <div className="footer-content flex flex-col">
            <h2 className="mb-5 text-2xl">Contact</h2>
            <div className="footer-section flex items-center gap-4 mb-3">
              <div className="footer-icons">
                <i className="bi bi-geo-alt"></i>
              </div>
              <div className="footer-text">
                <span className="text-gray-400">Address</span>
                <p className="">66 Street, Uk</p>

              </div>
            </div>
            <div className="footer-section flex items-center gap-4 mb-3">
              <div className="footer-icons">
                <i className="bi bi-telephone-fill"></i>
              </div>
              <div className="footer-text">
                <span className="text-gray-400">Phone Number</span>
                <p className="">020 7946 0958 </p>

              </div>
            </div>
            <div className="footer-section flex items-center gap-4 mb-3">
              <div className="footer-icons">
                <i className="bi bi-envelope-fill"></i>
              </div>
              <div className="footer-text">
                <span className="text-gray-400">email</span>
                <p className=""> contact@medicareplius.com </p>

              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-500 py-5">
          <p className="text-center text-xl text-gray-400">
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </p>
          <p className=""></p>
        </div>
      </footer>
    </>
  )
}

export default Footer