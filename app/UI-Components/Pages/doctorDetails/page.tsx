"use client"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import doctors from "@/app/data/doctors.json"
import arrowBtn from "@/public/arrow-icon.svg"
import Image from "next/image"

const page = () => {
  const params = useSearchParams()
  const idParams = params.get('id')
  const id = idParams ? String(idParams) : null
  const doctor = doctors.find((d) => d.id === id)
  if (!doctor) {
    return (
      <div className="p-10 text-center  text-gray-500">
        Doctor not found
      </div>
    )
  }
  return (
    <>
      <div className="section-title px-[8%] lg:px-[12%] border-t text-black border-gray-300 bg-white py-30 mb-10 flex justify-between items-center">
        <h2 className="text-3xl md:mt-6xl Merienda">Doctor Details </h2>
        <div className="flex gap-2 text-2xl">
          <Link
            href="/" className="">
            Home
          </Link>
          <span>
            / Doctor Details
          </span>
        </div>
      </div>
      <div className="px-[8%] lg:px-[12%] py-15">
        <div className="flex flex-col lg:flex-row jusify-between gap-10">
          <div className="w-full lg:w-1/1 flex  flex-col ">
            <div className="p-5 rounded-2xl ">
              <h2 className="Unbounded text-4xl font-semibold ">{doctor.name}</h2>
              <h4 className="text-lg Unbounded text-[var(--prim-color)] mb-3">{doctor.type}</h4>
              <p className="text-gray-400 mb-3 leading-relaxed ">{doctor.desc}</p>
              <p className="text-gray-400 mb-3 leading-relaxed ">{doctor.desc2}</p>
              <p className="text-gray-400 mb-3 leading-relaxed ">Medical services are an essential part of our lives, offering
                care and treatment for various health conditions. Th services
                encompass a wide range of specialties, including primary care,
                pediatrics, cardiology, dermatology, and more. Whether it's a
                routine check-up or a complex surgical procedure, medical professionals
                work tirelessly to ensure the well-being of their patients Medical
                services are an essential part of our lives, offering care and treatment
                for various
              </p>
              <div className="flex flex-col shadow-light gap-3 my-8 p-5 rounded-2xl">
                <p className="text-gray-400">
                  <strong className="text-gray-300">Expertise: {doctor.type}</strong>
                </p>
                <p className="text-gray-400">
                  <strong className="text-gray-300">Education: Dhaka Madical College,2018</strong>
                </p>
                <p className="text-gray-400">
                  <strong className="text-gray-300">Experience : 5 Years Of Experience In Madicine</strong>
                </p>
                <p className="text-gray-400">
                  <strong className="text-gray-300">Profession : Doctor At Dhaka Madical College,Head OF Bailogy Department</strong>
                </p>
                <p className="text-gray-400">
                  <strong className="text-gray-300">Address : Mirpur 10 Road 14 House 2 ,Dhaka</strong>
                </p>
                <p className="text-gray-400">
                  <strong className="text-gray-300">Phone : (+91) 123 456 789</strong>
                </p>
                <p className="text-gray-400">
                  <strong className="text-gray-300">Email : Example@site.com</strong>
                </p>
                <p className="text-gray-400">
                  <strong className="text-gray-300">Website : www.Examplesite.com</strong>
                </p>
              </div>
              <div className="shadow-light p-5 rounded-2xl">
                <h2 className="Unbounded text-2xl font-semibold">Write Your Message</h2>
                <div className="flex flex-col mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input type="text" name='' placeholder='Your name' className='w-full text-white bg-transparent shadow-light border-gray-200 placeholder:text-gray-200 p-3 rounded-xl focus:outline-none focus:border-[var(--prim-color2)]' required />
                    <input type="email" name='' placeholder='Your email' className='w-full text-white bg-transparent shadow-light border-gray-200 placeholder:text-gray-200 p-3 rounded-xl focus:outline-none focus:border-[var(--prim-color2)]' required />
                    <input type="text" name='' placeholder='Phone number' className='w-full text-white bg-transparent shadow-light border-gray-200 placeholder:text-gray-200 p-3 rounded-xl focus:outline-none focus:border-[var(--prim-color2)]' required />
                    <input type="text" name='' placeholder='Subject' className='w-full text-white bg-transparent shadow-light border-gray-200 placeholder:text-gray-200 p-3 rounded-xl focus:outline-none  focus:border-[var(--prim-color2)]' required />
                  </div>
                  <textarea rows={6} placeholder='Message' className='mt-4 w-full text-white bg-transparent shadow-light border-gray-200 placeholder:text-gray-200 p-3 rounded-xl focus:outline-none focus:border-[var(--prim-color2)]'>

                  </textarea>
                  <button className="btns text-white text-xl mt-5 Ubounded w-full bg-transparent  shadow-light rounded-2xl flex items-center justify-center gap-2 p-2">
                    Book an appointment
                    <Image src={arrowBtn} alt="arrowBtn" className="invert" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 grid grid-cols-1  md:grid-cols-2 lg:gap-2 gap-5 lg:flex flex-col sticky top-25 left-0 h-[100%]">
            <div className="shadow-light flex flex-col justify-center items-center p-5 rounded-xl">
              <Image src={doctor.image || ""} alt={doctor.name || "Doctor Image"} width={300} height={300} className="rounded-xl object-contain" />
              <h2 className="Unbounded text-xl mt-3">{doctor.name}</h2>
              <h4 className="Unbounded text-lg  text-[var(--prim-color)] mb-3 ">{doctor.type}</h4>
              <div className="flex gap-3">
                <i className="bi bi-instagram bg-gray-200/50 px-4 py-3 rounded-full hover:bg-[var(--prim-color)] hover:text-white transition-all duration-300 cursor-pointer"></i>
                <i className="bi bi-github bg-gray-200/50 px-4 py-3 rounded-full hover:bg-[var(--prim-color)] hover:text-white transition-all duration-300 cursor-pointer"></i>
                <i className="bi bi-threads bg-gray-200/50 px-4 py-3 rounded-full hover:bg-[var(--prim-color)] hover:text-white transition-all duration-300 cursor-pointer"></i>
                <i className="bi bi-behance bg-gray-200/50 px-4 py-3 rounded-full hover:bg-[var(--prim-color)] hover:text-white transition-all duration-300 cursor-pointer"></i>
              </div>
            </div>
            <div className="shadow-light rounded-xl p-5">
              <h2 className="Unbounded text-2xl">Schedule </h2>
              <p className="text-gray-300">
                Health care is a vital aspect of maintain overall well-being, encompassing a range
              </p>
              <div className="flex justify-between border px-4 py-2 hover:bg-[var(--prim-color)] rounded-full hover:text-white transition-all duration-300 cursor-pointer mt-5 text-xs">
                <span>
                  Saturday-Sunday
                </span>
                <span>
                  9 Am To 5 Pm
                </span>
              </div>
              <div className="flex justify-between border px-4 py-2 hover:bg-[var(--prim-color)] rounded-full hover:text-white transition-all duration-300 cursor-pointer mt-5 text-xs">
                <span>
                  Monday-Tuesday
                </span>
                <span>
                  1 Pm To 7 Pm
                </span>
              </div>
              <div className="flex justify-between border px-4 py-2 hover:bg-[var(--prim-color)] rounded-full hover:text-white transition-all duration-300 cursor-pointer mt-5 text-xs">
                <span>
                  Wednesday-Thusday
                </span>
                <span>
                  2 Am To 6 Pm
                </span>
              </div>
              <div className="flex justify-between border px-4 py-2 hover:bg-[var(--prim-color)] rounded-full hover:text-white transition-all duration-300 cursor-pointer mt-5 text-xs">
                <span>
                  Friday
                </span>
                <span>
                  Off Day
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page