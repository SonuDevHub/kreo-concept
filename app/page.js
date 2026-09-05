
import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"
import Blog3 from "@/components/sections/Blog3"
import CaseStudy1 from "@/components/sections/CaseStudy1"
import Hero4 from "@/components/sections/Hero4"
import OurClients from "@/components/sections/OurClients"
import Project1 from "@/components/sections/Project1"
import Service1 from "@/components/sections/Service1"
import StepWorking1 from "@/components/sections/StepWorking1"
import Team1 from "@/components/sections/Team1"
import Testimonial3 from "@/components/sections/Testimonial3"
import TextSLider1 from "@/components/sections/TextSLider1"
import VisionMission from "@/components/sections/VisionMission"
import WhyKreo from "@/components/sections/WhyKreo"
export default function Home() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={3}>
                <div className="position-relative overflow-hidden">
                    <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" />
                    <Hero4 />
                    <VisionMission />
                    <About2 />
                    <WhyKreo />
                    <Project1 />
                    <StepWorking1 />
                    <Service1 />
                    <TextSLider1 />
                    <CaseStudy1 />
                    <OurClients />
                    <Team1 />
                    <Testimonial3 />
                    <Blog3 />
                </div>
            </Layout>
        </>
    )
}