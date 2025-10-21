import About from "./About/About"
import Appointment from "./Appointment/Appointment"
import Feature from "./Feature/Feature"
import Header from "./Header/Header"
import Hero from "./Hero/Hero"
import Marquee from "./Marquee/Marquee"
import Project from "./Project/Project"
import SpecialCare from "./Special-Care/Special-Care"
import Testimonial from "./Testimonial/Testimonial"
import WhyChooseUs from "./Why-Choose-Us/Why-Choose-Us"


const Index = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Appointment />
            <Feature />
            <Marquee />
            <WhyChooseUs />
            <Project />
            <SpecialCare />
            <Testimonial />
        </>
    )
}

export default Index