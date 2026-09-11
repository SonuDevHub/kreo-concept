import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import CaseStudy1 from "@/components/sections/CaseStudy1"
import Hero1 from "@/components/sections/Hero1"
import OurClients from "@/components/sections/OurClients"
import Product1 from "@/components/sections/Product1"
import Project1 from "@/components/sections/Project1"
import Service1 from "@/components/sections/Service1"
import StepWorking1 from "@/components/sections/StepWorking1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import TextSLider1 from "@/components/sections/TextSLider1"
import TextSLider2 from "@/components/sections/TextSLider2"
import VisionMission from "@/components/sections/VisionMission"
import Watch1 from "@/components/sections/Watch1"
import WhyKreo from "@/components/sections/WhyKreo"
export default function Home() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={3}>
                <div className="position-relative overflow-hidden">
                    <div className="line-shape cus-z-1 first w-100 h-100 d-flex flex-wrap" />
                    <Hero1 />
                    <VisionMission />
                    <Product1 />
                    <WhyKreo />
                    <Watch1 />
                    <Project1 />
                    <StepWorking1 />
                    <Service1 />
                    <TextSLider1 />
                    <CaseStudy1 />
                    <OurClients />
                    <Team1 />
                    <TextSLider2 />
                    <Testimonial1 />
                    <Blog1 />
                </div>
            </Layout>
        </>
    )
}
