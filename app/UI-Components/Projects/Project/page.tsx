import Link from 'next/link'
import projects from "@/app/data/projects.json"
import arrowBtn from "@/public/arrow-icon.svg"
import Image from 'next/image'
import SpecialCare from '../../Index/Special-Care/Special-Care'
const Project = () => {
    return (
        <>
            <div className="section-title px-[8%] lg:px-[12%] border-t text-black border-gray-300 bg-white py-30 mb-10 flex justify-between items-center">
                <h2 className="text-3xl md:mt-6xl Merienda">Projects</h2>
                <div className="flex gap-2 text-2xl">
                    <Link href="/" className="">
                        Home
                    </Link>
                    <span>
                        / Projects
                    </span>
                </div>
            </div>
            <div className="px-[8%] lg:px-[12%]">

                <div className="grid grid-cols-1  lg:grid-cols-2 gap-5 mt-20">
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
            <div className="mt-10">
                <SpecialCare />
            </div>
        </>
    )
}

export default Project