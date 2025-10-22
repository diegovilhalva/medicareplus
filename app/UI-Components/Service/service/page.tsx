import Link from "next/link"
import services from "@/app/data/services.json"
import Image from "next/image"
import arrowBtn from "@/public/arrow-icon.svg"
import AppointmentIMG from "@/public/sub-contact.jpg"

const Service = () => {
    return (
        <>
            <div className="section-title px-[8%] lg:px-[12%] border-t text-black border-gray-300 bg-white py-30 mb-10 flex justify-between items-center">
                <h2 className="text-3xl md:mt-6xl Merienda">Service</h2>
                <div className="flex gap-2 text-2xl">
                    <Link href="/" className="">
                        Home
                    </Link>
                    <span>
                        / Service
                    </span>
                </div>
            </div>
            <div className="px-[8%] lg:px-[12%] pb-10">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service) => (
                        <div className="service-card shadow-md rounded-3xl p-6 text-center hover:shadow-lg transition-all duration-300" key={service.id}>
                            <Link href={`/UI-Components/Service/seviceDetails?id=${service.id}`}>
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="service-icon rounded-full w-18 h-18 flex items-center justify-center ">
                                        <Image src={service.titleImage} alt={service.title}
                                            width={100} height={100} className="w-8 h-8 object-cover invert" />
                                    </div>
                                    <h3 className="text-xl Unbounded font-bold mb-3">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="text-gray-400 mb-5 text-start text-lg  leading-relaxed">
                                    {service.desc}
                                </p>
                                <div className="relative  rounded-2xl overflow-hidden mb-5">
                                    <Image src={service.image} alt={service.image} width={400} height={100} className="object-cover rounded-2xl" />
                                    <button className="absolute  service-btn btns mt-2 md:mt-0 font-semibold Unbounded bg-[var(--prim-color2)] text-black flex items-center  gap-2 px-5 py-5 rounded-full hover:text-white transition-all">
                                        Read More
                                        <Image src={arrowBtn} alt="arrowBtn" />
                                    </button>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="w-full mt-10 relative flex flex-col-reverse lg:flex-row justify-between items-center gap-2 ">
                    <div className="w-full lg:w-1/1">
                        <Image src={AppointmentIMG} alt='appointment' className='rounded-2xl' />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col lg:absolute bg-white p-10 top-22 right-0 rounded-2xl ">
                        <div className="title hero-title">
                            <span className="bg-[var(--prim-color2)] text-black font-semibold  rounded-full py-2 px-4 Unbounded  shadow-lg shadow-white/20">Appointments</span>
                            <h1 className="text-[2.5rem] Unbounded text-black mt-5">
                                Get an <span style={{ color: '#000000', fontWeight: '400' }}> Appointment </span>
                            </h1>
                        </div>
                        <div className="flex flex-col mt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <input type="text" name='' placeholder='Your name' className='w-full text-black bg-gray-200/60 border-gray-200 p-3 rounded-xl focus:outline-none focus:border-[var(--prim-color2)]' required />
                                <input type="email" name='' placeholder='Your email' className='w-full text-black bg-gray-200/60 border-gray-200 p-3 rounded-xl focus:outline-none focus:border-[var(--prim-color2)]' required />
                                <input type="text" name='' placeholder='Phone number' className='w-full text-black bg-gray-200/60 border-gray-200 p-3 rounded-xl focus:outline-none focus:border-[var(--prim-color2)]' required />
                                <input type="text" name='' placeholder='Subject' className='w-full text-black bg-gray-200/60 border-gray-200 p-3 rounded-xl focus:outline-none focus:border-[var(--prim-color2)]' required />
                            </div>
                            <textarea rows={6} placeholder='Message' className='mt-4 w-full text-black bg-gray-200/60 border-gray-200 p-3 rounded-xl focus:outline-none focus:border-[var(--prim-color2)]'>

                            </textarea>
                            <button className="btns text-white text-xl mt-5 Ubounded w-full bg-[var(--prim-light)] rounded-2xl flex items-center justify-center gap-2 p-2">
                                Book an appointment
                                <Image src={arrowBtn} alt="arrowBtn" className="invert" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service