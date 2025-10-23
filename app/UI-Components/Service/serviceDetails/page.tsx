"use client"
import Link from 'next/link'
import services from "@/app/data/services.json"
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import flask from '@/public/flask.png'
import serum from '@/public/serum.png'

const ServiceDetails = () => {
    const params = useSearchParams()
    const idParams = params.get('id')
    const id = idParams ? String(idParams) : null
    const service = services.find((s) => s.id === id)

    if (!service) {
        return (
            <div className="p-10 text-center  text-gray-500">
                Service not found
            </div>
        )
    }
    return (
        <>
            <div className="section-title px-[8%] lg:px-[12%] border-t text-black border-gray-300 bg-white py-30 mb-10 flex justify-between items-center">
                <h2 className="text-3xl md:mt-6xl Merienda">Service Details</h2>
                <div className="flex gap-2 text-2xl">
                    <Link href="/" className="">
                        Home
                    </Link>
                    <span>
                        / Service
                    </span>
                </div>
            </div>
            <div className="px-[8%] lg:px-[12%] py-10">
                <div className="flex flex-col lg:flex-row  justify-between gap-5">
                    <div className="w-full lg:w-1/1">
                        <div className="flex  flex-col md:flex-row gap-10">
                            <div className="w-1/1">
                                <Image src={service.image} alt={service.title} width={800} height={800} className='rounded-lg  mb-6 object-contain ' />
                            </div>
                            <div className="w-1/1">
                                <div className="flex flex-col ">
                                    <h2 className="Unbounded text-4xl">{service.title}</h2>
                                    <p className="text-gray-400 text-xl my-2">
                                        {service.desc}
                                    </p>
                                    <p className="text-gray-300 mt-2">
                                        Medical services are an essential part of our lives, offering care and treatment for various
                                        health conditions. These services encompass a wide range of specialties, including primary care,
                                        pediatrics, cardiology
                                    </p>
                                    <p className="text-gray-300 hidden lg:block mt-2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero dolor nam molestiae
                                        dignissimos quis, adipisci temporibus ad consequuntur vitae.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col mt-5">
                            <h2 className="Unbounded text-3xl my-5 text-white">Senior Care Coordination</h2>
                            <p className="text-lg ">
                                <i className="bi bi-chevron-double-right pe-1"></i>
                                Dental operations involve various procedures performed by dentists
                            </p>
                            <p className="text-lg ">
                                <i className="bi bi-chevron-double-right pe-1"></i>
                                Medical services are an essential part of our lives, offering care
                            </p>
                            <p className="text-lg ">
                                <i className="bi bi-chevron-double-right pe-1"></i>
                                These services encompass a wide range of specialties, including primary care, pediatrics,
                                cardiology
                            </p>
                            <p className="text-lg ">
                                <i className="bi bi-chevron-double-right pe-1"></i>
                                Empowering Health, Empowering Lives Expert Care, Trusted Results
                            </p>
                            <h2 className="Unbounded text-3xl mt-10 mb-5 text-white ">
                                Holistic Health Consulations
                            </h2>
                            <p className="text-gray-400 text-lg mb-5">
                                Medical services are an essential part of our lives, offering care and treatment for various
                                health conditions. These services encompass a wide range of specialties, including primary care,
                                pediatrics, cardiology
                            </p>
                            <p className="text-gray-400 text-lg mb-5">
                                Medical services are an essential part of our lives, offering care and treatment for various
                                health conditions. These are a services encompass a wide range of specialties, including primary
                                care, pediatrics, cardiology Medical services are an essential part of our lives, offering care and
                                treatment for various health conditions These services
                            </p>

                            <h2 className="Unbounded text-3xl mt-10 mb-5 text-white ">
                                Health Matters We Care
                            </h2>

                            <p className="text-gray-400 text-lg mb-5">
                                Medical services are an essential part of our lives, offering care and treatment for various
                                health conditions. These are a services encompass a wide range of specialties, including primary
                                care, pediatrics, cardiology Medical services are an essential part of our lives, offering care and
                                treatment for various health conditions These services
                            </p>
                            <div className="flex flex-col md:flex-row mt-5 gap-5">
                                <div className="flex flex-col">
                                    <Image src={flask} alt='flask' className='invert' />
                                    <h3 className="Unbounded my-3 ">
                                        Wellness Oasis CarePoint Health the Institute Thrive Wellness Hub
                                    </h3>
                                    <p className="text-gray-300 text-md">
                                        Health care is a vital aspect maintaining overall well-being, encompassing a range
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <Image src={serum} alt='serum' className='invert' />
                                    <h3 className="Unbounded my-3 ">
                                        Wellness Oasis CarePoint Health the Institute Thrive Wellness Hub
                                    </h3>
                                    <p className="text-gray-300 text-md">
                                        Health care is a vital aspect maintaining overall well-being, encompassing a range
                                    </p>
                                </div>
                            </div>
                            <h2 className="Unbounded text-3xl mt-10 mb-5 text-white ">
                                Partnering for Better health
                            </h2>

                            <p className="text-gray-400 text-lg mb-5">
                                Medical services are an essential part of our lives, offering care and treatment for various
                                health conditions. These are a services encompass a wide range of specialties, including primary
                                care, pediatrics, cardiology Medical services are an essential part of our lives, offering care and
                                treatment for various health conditions These services
                            </p>
                            <p className="text-gray-400 mb-5">
                                Medical services are an essential part of our lives, offering care and treatment for various
                                health conditions. These services encompass a wide range of specialties, including primary care,
                                pediatrics, cardiology
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 sticky top-25 left-0 h-[100%]">
                        <div className="shadow-light rounded-xl p-5">
                            <h2 className="Unbounded text-2xl">Services </h2>
                            <div className="flex justify-between border px-4 py-2 hover:bg-[var(--prim-color)] rounded-full hover:text-white transition-all duration-300 cursor-pointer mt-5">
                                <span>
                                    <i className="bi bi-chevron-double-right pe-2"></i>
                                    A Tradition of Healing
                                </span>
                                <span>
                                    (02)
                                </span>
                            </div>
                            <div className="flex justify-between border px-4 py-2 hover:bg-[var(--prim-color)] rounded-full hover:text-white transition-all duration-300 cursor-pointer mt-5">
                                <span>
                                    <i className="bi bi-chevron-double-right pe-2"></i>
                                    Harmony Holistic Health
                                </span>
                                <span>
                                    (02)
                                </span>
                            </div>
                            <div className="flex justify-between border px-4 py-2 hover:bg-[var(--prim-color)] rounded-full hover:text-white transition-all duration-300 cursor-pointer mt-5">
                                <span>
                                    <i className="bi bi-chevron-double-right pe-2"></i>
                                    Revive Medical Care
                                </span>
                                <span>
                                    (02)
                                </span>
                            </div>
                            <div className="flex justify-between border px-4 py-2 hover:bg-[var(--prim-color)] rounded-full hover:text-white transition-all duration-300 cursor-pointer mt-5">
                                <span>
                                    <i className="bi bi-chevron-double-right pe-2"></i>
                                    Unity Health Services
                                </span>
                                <span>
                                    (02)
                                </span>
                            </div>
                            <div className="flex justify-between border px-4 py-2 hover:bg-[var(--prim-color)] rounded-full hover:text-white transition-all duration-300 cursor-pointer mt-5">
                                <span>
                                    <i className="bi bi-chevron-double-right pe-2"></i>
                                    A Tradition of Healing
                                </span>
                                <span>
                                    (02)
                                </span>
                            </div>
                        </div>
                        <div className="shadow-light rounded-xl p-5 mt-5">
                            <div className="flex flex-col justify-center  items-center">
                                <h2 className="Unbounded  text-2xl">
                                    Need Help? Call us
                                </h2>
                                <div className="my-5 bg-[var(--prim-color)] px-8 py-7 rounded-full">
                                    <i className="bi  bi-telephone-fill text-4xl text-white"></i>
                                </div>
                                <p className="text-center">
                                    Health care is a vital aspect of maintaining overall well-being, encompassing a range of services
                                    from preventive care
                                </p>
                                <h2 className="Unbounded text-1xl my-5">
                                    020 7946 0958
                                </h2>
                                <div className="flex gap-3">
                                    <i className="bi bi-instagram bg-gray-200/50 px-4 py-3 rounded-full hover:bg-[var(--prim-color)] hover:text-white transition-all duration-300 cursor-pointer"></i>
                                    <i className="bi bi-github bg-gray-200/50 px-4 py-3 rounded-full hover:bg-[var(--prim-color)] hover:text-white transition-all duration-300 cursor-pointer"></i>
                                    <i className="bi bi-threads bg-gray-200/50 px-4 py-3 rounded-full hover:bg-[var(--prim-color)] hover:text-white transition-all duration-300 cursor-pointer"></i>
                                    <i className="bi bi-behance bg-gray-200/50 px-4 py-3 rounded-full hover:bg-[var(--prim-color)] hover:text-white transition-all duration-300 cursor-pointer"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceDetails