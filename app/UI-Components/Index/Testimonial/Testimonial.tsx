"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import arrowBtn from "@/public/arrow-icon.svg"
import { useRef } from "react"
import Image from "next/image"

const Testimonial = () => {
    const prevRef = useRef(null)
    const nextRef = useRef(null)

    return (
        <>
            <div className="px-[8%] lg:px-[12%] py-15">
                <div className="testimonial relative bg-[var(--prim-color2)] rounded-2xl text-black">
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 1500
                        }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current
                        }}
                        modules={[Autoplay, Navigation]}
                    >
                        <SwiperSlide>
                            <div className="flex flex-col gap-3 px-10 lg:px-50 py-15">
                                <span className="text-xl">
                                    Clients Testimonial
                                </span>
                                <h2 className="Unbounded text-3xl lg:text-6xl">
                                    What Our Users <br /> Are Saying
                                </h2>
                                <p className="w-[100%] lg:w-[90%] text-xl my-2">
                                    Health is wealth, and in the realm of medical health, every life matters. It is a
                                    encompasses a wide range of
                                    specialties aimed at diagnosing, treating, and preventing diseases and maintaining
                                    overall well-being. Medical health
                                    for a professionals dedicate their lives to providing care
                                </p>
                                <h5 className="text-xl font-bold">——— Mukesh Kumer</h5>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col gap-3 px-10 lg:px-50 py-15">
                                <span className="text-xl">
                                    Clients Testimonial
                                </span>
                                <h2 className="Unbounded text-3xl lg:text-6xl">
                                    What Our Users <br /> Are Saying
                                </h2>
                                <p className="w-[100%] lg:w-[90%] text-xl my-2">
                                    Health is wealth, and in the realm of medical health, every life matters. It is a
                                    encompasses a wide range of
                                    specialties aimed at diagnosing, treating, and preventing diseases and maintaining
                                    overall well-being. Medical health
                                    for a professionals dedicate their lives to providing care
                                </p>
                                <h5 className="text-xl font-bold">——— Mukesh Kumer</h5>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div
                        ref={prevRef}
                        className="swiper-btn arrow-left border border-black z-50 absolute top-[80%] lg:top-[50%] left-10 px-3 py-4 rounded-full" 
                    >
                        <Image src={arrowBtn} alt="arrowBtn" className="rotate-180" />
                    </div>
                    <div
                        ref={nextRef}
                        className="swiper-btn arrow-right border border-black z-50 absolute top-[80%] lg:top-[50%] right-10 px-3 py-4 rounded-full" 
                    >
                        <Image src={arrowBtn} alt="arrowBtn"  />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial