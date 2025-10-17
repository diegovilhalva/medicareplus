import Image from 'next/image'
import AppointmentIMG from "@/public/apoentment.jpg"
import arrowBtn from "@/public/arrow-icon.svg"

const Appointment = () => {
    return (
        <>
            <div className="px-[8%] lg:px-[12%] lg:py-15">
                <div className="w-full relative flex flex-col-reverse lg:flex-row justify-between items-center gap-2 ">
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

export default Appointment