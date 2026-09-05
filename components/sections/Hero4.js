
import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"

export default function Hero4() {
    return (
        <>

            <section className="hero-section-version4 position-relative">
                <div className="container">
                    <div className="row g-5">
                        <div className="hero-v4-content position-relative pe-10">
                            <div className="d-flex align-items-sm-center align-items-end justify-content-between mb-xxl-7 mb-xl-5 mb-lg-4 mb-2">
                                <h1 className="white-clr text-capitalize">
                                    <span className="d-block" data-aos="zoom-in-left" data-aos-duration={1800}>
                                        <span className="italic">Design</span> Studio
                                    </span>
                                    <span className="d-block" data-aos="zoom-in-left" data-aos-duration={1800}>
                                        With <span className="italic">Experience</span>
                                    </span>
                                </h1>
                                <VideoPopup style={1} />
                            </div>
                            <div className="ringle-content" data-aos="zoom-in-up" data-aos-duration={1800} data-aos-delay={7}>
                                <p className="white-clr mb-xxl-5 mb-xl-3 mb-lg-3 mb-md-2 mb-1">
                                    A Noida-based digital marketing agency with 14+ years of experience turning
                                    brand visions into digital masterpieces through branding, web design,
                                    social media, SEO, and ad films.
                                </p>
                                <Link href="/service" className="explore-more d-inline-flex align-items-center gap-1">
                                    Explore More
                                    <span className="rot60">
                                        <i className="fas fa-arrow-up" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Social */}
                <div className="spilit-socail d-flex align-items-center gap-xxl-16 gap-xl-10 gap-5">
                    <Link href="/#">
                        FaceBook
                    </Link>
                    <Link href="/#">
                        Twitter
                    </Link>
                    <Link href="/#">
                        Instagram
                    </Link>
                </div>
            </section>
        </>
    )
}
