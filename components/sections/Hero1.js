
import VideoPopup from "../elements/VideoPopup"

export default function Hero1() {
    return (
        <>

            <section className="hero-section-version1 position-relative">
                <div className="container">
                    <div className="row g-5">
                        <div className="hero-v1-content position-relative">
                            <div className="d-flex align-items-sm-center align-items-end justify-content-between">
                                <h1 className="white-clr text-uppercase">
                                    <span className="d-block" data-aos="zoom-in-left" data-aos-duration={1800}>
                                        Full Service Digital
                                    </span>
                                    <span>
                                        <span className="text-italic me-3" data-aos="zoom-in-right" data-aos-duration={2100}>
                                            Marketing
                                        </span>
                                        <span className="designers" data-text="Agency" data-aos="zoom-in" data-aos-duration={2000}>Agency</span>
                                    </span>
                                </h1>
                                <VideoPopup style={1} />
                            </div>
                            <div className="hero-sponsor">
                                <p className="white-clr hero-v1-pra mb-xxl-9 mb-xl-7 mb-lg-6 mb-5" data-aos="fade-up" data-aos-duration={1800}>
                                    A Noida-based digital marketing agency with 14+ years of experience turning
                                    brand visions into digital masterpieces through branding, web design,
                                    social media, SEO, and ad films.
                                </p>
                                <div className="brandin-wrap d-block">
                                    <h4 className="white-clr brading-text">
                                        25+ Brands Trust Us
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Hero Exprience box */}
                <div className="hero-expriencebox d-flex align-items-center">
                    <div className="expri-content d-flex align-items-center gap-xxl-11 gap-xl-9 gap-lg-7 gap-6">
                        <div className="expri-cont-item">
                            <h6 className="white-clr mb-2">
                                14+
                            </h6>
                            <span className="yer spantext-clr">
                                years of experience
                            </span>
                        </div>
                        <div className="expri-cont-item">
                            <h6 className="white-clr mb-2">
                                25K+
                            </h6>
                            <span className="yer spantext-clr">
                                completed projects
                            </span>
                        </div>
                        <div className="expri-cont-item">
                            <h6 className="white-clr mb-2">
                                120+
                            </h6>
                            <span className="yer spantext-clr">
                                team members
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
