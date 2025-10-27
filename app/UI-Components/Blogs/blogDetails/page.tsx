"use client"
import Link from "next/link"
import blogs from "@/app/data/blogs.json"
import defaultImg from "@/public/blogs-1.jpg"
import quote from "@/public/blog-quote.png"
import { useSearchParams } from "next/navigation"
import Image from "next/image"



const BlogDetails = () => {
  const params = useSearchParams()
  const idParams = params.get("id")

  const id = idParams ? String(idParams) : null
  const blog = blogs.find((b) => b.id === id)

  if (!blog) {
    <div className="p-10 text-center text-gray-500">
      Blog not found
    </div>
  }
  return (
    <>
      <div className="section-title px-[8%] lg:px-[12%] border-t text-black border-gray-300 bg-white py-30 mb-10 flex justify-between items-center">
        <h2 className="text-3xl md:mt-6xl Merienda">Blogs </h2>
        <div className="flex gap-2 text-2xl">
          <Link
            href="/" className="">
            Home
          </Link>
          <span>
            / Blog Details
          </span>
        </div>
      </div>
      <div className="px-[8%] lg:px-[12%] py-15">
        <div className="flex  flex-col lg:flex-row justify-between gap-2 ">
          <div className="w-full lg:w-1/1">
            <div className="flex flex-col gap-5">
              <h2 className="Unbounded text-2xl lg:text-4xl leading-relaxed">
                {blog?.title}
              </h2>
              <div className="flex items-center gap-4">
                <span className="text-gray-300">
                  <i className="bi  bi-person-fill text-[var(--prim-color)] pe-1"></i>
                  Admin
                </span>
                <span className="text-gray-300">
                  <i className="bi  bi-symlink-fill text-[var(--prim-color)] pe-1"></i>
                  Category
                </span>
              </div>
              <p className="text-gray-300">{blog?.pere}</p>
              <p className="text-gray-300">
                Medical services are an essential part of our lives, offering care and treatment for various
                health conditions. These services encompass a wide range of specialties, including primary care,
                pediatrics, cardiology
              </p>
              <Image src={blog?.image || defaultImg} alt={blog?.title || "Blog image"} width={900} height={600} className="w-full object-contain rounded-2xl" />
              <h2 className="Unbounded text-3xl mt-5 text-white">
                Serenity Heath
              </h2>
              <p className="text-gray-400 mb-5">
                Medical services are an essential part of our lives, offering care and treatment for various
                health conditions. These are a services encompass a wide range of specialties, including primary
                care, pediatrics, cardiology Medical services are an essential part of our lives, offering care and
                treatment for various health conditions These services
              </p>
              <div className="flex justify-between items-start shadow-light rounded-2xl p-8 gap-5">
                <Image src={quote} alt="qoute" width={80} height={80} />
                <div className="flex flex-col">
                  <p className="text-gray-400">
                    Medical care encompasses a range of services aimed at promoting health, preventing disease,
                    and treating illnesses. From routine check-ups to life-saving surgeries
                  </p>
                </div>
              </div>
              <p className="text-grey-400 mb-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, necessitatibus reiciendis id
                sapiente velit ipsa cupiditate, deserunt fugiat, quaerat commodi dolorum at iusto ex. Doloremque
                dolore ipsum tenetur praesentium! Sequi?
              </p>
              <h2 className="Unbounded text-3xl my-5 text-white">
                Senior Care Coordination
              </h2>
              <div className="flex flex-col gap-2">

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
              </div>
              <h2 className="Unbounded text-3xl my-5 text-white">
                Holistic Health Consulations
              </h2>
              <p className="text-gray-400 mb-5">
                Medical care encompasses a range of services aimed at promoting health, preventing disease,
                and treating illnesses. From routine check-ups to life-saving surgeries, medical care plays a crucial
              </p>
              <p className="text-gray-400 mb-5">
                Medical services are an essential part of our lives, offering care and treatment for various
                health conditions. These are a services encompass a wide range of specialties, including primary
                care, pediatrics, cardiology Medical services are an essential part of our lives, offering care and
                treatment for various health conditions These services
              </p>
            </div>

          </div>
          <div className="w-full lg:w-1/3 sticky top-25 left-0 h-[100%] p-2">
            <div className="shadow-light rounded-xl p-5">
              <h2 className="Unbounded text-2xl ">Category</h2>
              <div className="flex items-center justify-between gap-3 hover:text-[var(prim-color)] cursor-pointer transition-all duration-300 border-b border-gray-500 mt-5 pb-2 ">
                <h2 className="Unbounded textr-md">Serenity Med</h2>
                <i className="bi bi-plus text-3xl px-1 bg-green-100 text-[var(--prim-color)] rounded-full"></i>
              </div>
              <div className="flex items-center justify-between gap-3 hover:text-[var(prim-color)] cursor-pointer transition-all duration-300 border-b border-gray-500 mt-5 pb-2 ">
                <h2 className="Unbounded textr-md">Serenity Health Center</h2>
                <i className="bi bi-plus text-3xl px-1 bg-green-100 text-[var(--prim-color)] rounded-full"></i>
              </div>
              <div className="flex items-center justify-between gap-3 hover:text-[var(prim-color)] cursor-pointer transition-all duration-300 border-b border-gray-500 mt-5 pb-2 ">
                <h2 className="Unbounded textr-md">Unity Health Services</h2>
                <i className="bi bi-plus text-3xl px-1 bg-green-100 text-[var(--prim-color)] rounded-full"></i>
              </div>
              <div className="flex items-center justify-between gap-3 hover:text-[var(prim-color)] cursor-pointer transition-all duration-300 border-b border-gray-500 mt-5 pb-2 ">
                <h2 className="Unbounded textr-md">Revival Merdical Care</h2>
                <i className="bi bi-plus text-3xl px-1 bg-green-100 text-[var(--prim-color)] rounded-full"></i>
              </div>
            </div>
            <div className="shadow-light rounded-xl p-5 mt-5">
              <h2 className="Unbounded text-2xl ">Recent Post</h2>
              <div className="mt-5 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-1 gap-3">
                {blogs.map((blog, i) => (
                  <Link href={`/UI-Components/Blogs/blogDetails=${blog.id}`} key={i}>
                    <div className="flex flex-col border border-gray-500 rounded-md p-2 py-4">
                      <Image src={blog.image} alt={blog.title} width={150} height={150} className="w-full rounded-md  object-contain" />
                      <div className="flex items-center gap-4 mt-3 mb-2">
                        <span className="text-gray-300">
                          <i className="bi bi-person-fill text-[var(--prim-color)] pe-1"></i>
                          Admin
                        </span>
                      </div>
                      <h2 className="Unbounded text-sm">{blog.title}</h2>
                    </div>
                  </Link>
                ))}
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

export default BlogDetails