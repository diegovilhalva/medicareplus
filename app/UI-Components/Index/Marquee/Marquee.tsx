import startImage from "@/public/star-text.png"
import Image from "next/image"
import  Marque from "react-fast-marquee"
const Marquee = () => {

  return (
    <Marque speed={60} gradient={false} className="py-6 border-t border-b border-gray-500">
        <div className="flex items-center gap-3 mr-3">
                <Image src={startImage} alt='Starimg' className="invert"  />
                <h1 className="Unbounded text-3xl">
                    Quality Care Service
                </h1>
        </div>
       
         <div className="flex items-center gap-3 mr-3">
                <Image src={startImage} alt='Starimg' className="invert"  />
                <h1 className="Unbounded text-3xl">
                    Your Wellness Priority
                </h1>
        </div>
        <div className="flex items-center gap-3 mr-3">
                <Image src={startImage} alt='Starimg' className="invert"  />
                <h1 className="Unbounded text-3xl">
                     Caring for You Always
                </h1>
        </div>
    </Marque>
  )
}

export default Marquee