import Link from "next/link"
import arrowBtn from "@/public/arrow-icon.svg"
import AppointmentIMG from "@/public/sub-contact.jpg"
import Image from "next/image"

const page = () => {
  return (
    <>
      <div className="section-title px-[8%] lg:px-[12%] border-t text-black border-gray-300 bg-white py-30 mb-10 flex justify-between items-center">
        <h2 className="text-3xl md:mt-6xl Merienda">Contact</h2>
        <div className="flex gap-2 text-2xl">
          <Link
            href="/" className="">
            Home
          </Link>
          <span>
            / Contact
          </span>
        </div>
      </div>
      <div className="px-[8%] lg:px-[12%] py-15 pb-15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div className="contact-card hover:border-[var(--prim-color2)] hover:-translate-y-2 transition-all duration-300 cursor-pointer border-gray-300 rounded-2xl p-10">
            <i className="bi bi-geo-alt-fill px-4 py-3 rounded-full bg-[var(--prim-color2)] text-black text-3xl"></i>
            <div className="contact-content pt-8">
              <h2 className="text-4xl pb-2 Unbounded ">
                Address
              </h2>
              <p className="text-xl text-gray-300">
                66 Street, Uk
              </p>

            </div>
          </div>
          <div className="contact-card hover:border-[var(--prim-color2)] hover:-translate-y-2 transition-all duration-300 cursor-pointer border-gray-300 rounded-2xl p-10">
            <i className="bi bi-envelope-fill px-4 py-3 rounded-full bg-[var(--prim-color2)] text-black text-3xl"></i>
            <div className="contact-content pt-8">
              <h2 className="text-4xl pb-2 Unbounded ">
                Email
              </h2>
              <p className="text-xl text-gray-300">
                contact@medicareplius.com
              </p>

            </div>
          </div>
          <div className="contact-card hover:border-[var(--prim-color2)] hover:-translate-y-2 transition-all duration-300 cursor-pointer border-gray-300 rounded-2xl p-10">
            <i className="bi bi-telephone px-4 py-3 rounded-full bg-[var(--prim-color2)] text-black text-3xl"></i>
            <div className="contact-content pt-8">
              <h2 className="text-4xl pb-2 Unbounded ">
                Phone
              </h2>
              <p className="text-xl text-gray-300">
                020 7946 0958
              </p>

            </div>
          </div>
        </div>
      </div>
      <div className="px-[8%] lg:px-[12%] pb-[8%]">
        <div className="w-full mt-10 relative flex flex-col-reverse lg:flex-row justify-between items-center gap-2 ">
          <div className="w-full lg:w-1/1">
            <Image src={AppointmentIMG} alt='appointment' className='rounded-2xl' />
          </div>
          <div className="contact-form w-full lg:w-1/2 flex flex-col lg:absolute  p-10 top-22 right-0 rounded-2xl ">
            <div className="title hero-title">
              <span className="bg-[var(--prim-color2)] text-black font-semibold  rounded-full py-2 px-4 Unbounded  shadow-lg shadow-white/20">Appointments</span>
              <h1 className="text-[2.5rem] Unbounded  mt-5">
                Get an <span style={{ color: 'var(--prim-color)', fontWeight: '400' }}> Appointment </span>
              </h1>
            </div>
            <div className="flex flex-col mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input type="text" name='' placeholder='Your name' className='w-full text-white  border border-gray-400 p-3 rounded-xl focus:outline-none focus:border-[var(--prim-color2)]' required />
                <input type="email" name='' placeholder='Your email' className='w-full text-white border  border-gray-400 p-3 rounded-xl focus:outline-none focus:border-[var(--prim-color2)]' required />
                <input type="text" name='' placeholder='Phone number' className='w-full text-white border border-gray-400 p-3 rounded-xl focus:outline-none focus:border-[var(--prim-color2)]' required />
                <input type="text" name='' placeholder='Subject' className='w-full text-white  border border-gray-400 p-3 rounded-xl focus:outline-none focus:border-[var(--prim-color2)]' required />
              </div>
              <textarea rows={6} placeholder='Message' className='mt-4 w-full text-white border  border-gray-400 p-3 rounded-xl focus:outline-none focus:border-[var(--prim-color2)]'>

              </textarea>
              <button className="btns text-white text-xl mt-5 Ubounded w-full bg-[var(--prim-light)] rounded-2xl flex items-center justify-center gap-2 p-2">
                Book an appointment
                <Image src={arrowBtn} alt="arrowBtn" className="invert" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[8%] lg:px-[12%] py-15">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d590.3127771907652!2d-2.0920132!3d53.7137889!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bbfe3e3507705%3A0x4c9442b563f3a4f7!2sTodmorden%20Group%20Practice!5e0!3m2!1spt-BR!2sbr!4v1761745125129!5m2!1spt-BR!2sbr" width="100%"  height="450" loading="lazy" className="rounded-2xl">

        </iframe>
      </div>
    </>
  )
}

export default page