"use client"
import Image from 'next/image'
import Link from 'next/link'
import arrowBtn from "@/public/arrow-icon.svg"
import data from "@/app/data/doctors.json"
import AppointmentIMG from "@/public/sub-contact.jpg"

const page = () => {
  return (
    <>
      <div className="section-title px-[8%] lg:px-[12%] border-t text-black border-gray-300 bg-white py-30 mb-10 flex justify-between items-center">
        <h2 className="text-3xl md:mt-6xl Merienda">Doctors </h2>
        <div className="flex gap-2 text-2xl">
          <Link
            href="/" className="">
            Home
          </Link>
          <span>
            / Doctors
          </span>
        </div>
      </div>
      <div className="px-[8%] lg:px-[12%]">
        {data.map((doctor) => (
          <Link key={doctor.id} href={`/UI-Components/Pages/doctorDetails?id=${doctor.id}`}>
            <div className="feature-card border-t border-gray-500 cursor-pointer py-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex flex-col gap-2">
                  <h2 className="Unbounded text-3xl ">{doctor.name}</h2>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="flex items-center text-gray-400">
                  {doctor.desc}
                </p>
                <p className="flex items-center text-gray-400">
                  {doctor.desc2}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10">
                <div className="w-full h-full flex items-center gap-5">
                  <Image src={doctor.image} height={200} width={200} alt={doctor.name} className="feature-image rounded-2xl " />
                </div>
                <div className="flex flex-col">
                  <button className="btns mt-2 md:mt-0 font-semibold Unbounded bg-white text-black  hover:text-white transition-all duration-500 cursor-pointer rounded-full px-5 py-3 w-full flex items-center justify-center gap-2">
                    Read More
                    <Image src={arrowBtn} alt="arrowBtn" />
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
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

export default page