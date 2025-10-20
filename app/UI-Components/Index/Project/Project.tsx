"use client"

import arrowBtn from "@/public/arrow-icon.svg"
import projects from "@/app/data/projects.json"
import Link from "next/link"
import Image from "next/image"

const Project = () => {
    return (
        <>
            <div className="px-[8%] lg:px-[12%] py-15">
                <div className="flex justify-center items-center">
                    <div className="title hero-title w-full mb-10">
                        <span className="bg-[var(--prim-color2)] text-black font-semibold  rounded-full py-2 px-4 Unbounded  shadow-lg shadow-white/20">Latest Project</span>
                        <h1 className="text-[2.5rem] Unbounded mt-5">
                            Healing Lives One Patient <br /> at Time Trusted <span style={{ fontWeight: "400" }}> Results. </span>
                        </h1>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
                    {projects.slice(0, 6).map((project, i) => (
                        <Link href={`/Ui-Components/Projets/ProjectDetails?id=${project.id}`}
                            key={i}>
                            <div className="project-card cursor-pointer flex flex-col mb-5">
                                <div className="project-image relative rounded-2xl overflow-hidden w-full">
                                    <Image src={project.image} alt={project.title} width={900} height={800} className="w-full h-full" />
                                    <Image src={arrowBtn} alt="arrowBtn" className="project-icon" />
                                </div>
                                <div className="flex flex-col mt-5"
                                >
                                    <div>
                                        <span className="text-xl px-3 py-2 rounded-full bg-gray-700/50 Merienda font-normal">
                                        {project.tag}
                                        </span>
                                        <h2 className="Unbounded text-2xl mt-3">{project.title}</h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Project