import Link from "next/link"

const cases = [
    {
        category: "Branding",
        title: "Brand Identity Refresh for a Growing Startup",
    },
    {
        category: "SEO",
        title: "SEO Campaign That Tripled Organic Traffic",
    },
]

export default function CaseStudy1() {
    return (
        <>

            <section className="case-study-vsesion01 bg2-clr pb-space">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-15 mb-xl-12 mb-lg-10 mb-9">
                        <div className="pricing-title">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                SELECTED WORK
                            </div>
                            <h2 className="stitle">
                                Work That <span className="fw-400">Moves</span> Brands
                            </h2>
                        </div>
                        <Link href="/study-grid" className="radius-btn d-inline-flex text-capitalize radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                            View All Projects
                            <span className="rot60 d-inline-block">
                                <i className="fas fa-arrow-up theme-clr" />
                            </span>
                        </Link>
                    </div>
                    <div className="row g-xxl-7 g-xl-5 g-4">
                        {cases.map((c, i) => (
                            <div className="col-lg-6 col-md-6" key={i} data-aos="zoom-in-left" data-aos-duration={1400 + i * 200}>
                                <div className="blog-widget-item bb-border pb-xxl-7 pb-xl-6 pb-4">
                                    <div className="thumb w-100 overflow-hidden mb-xxl-7 mb-xl-6 mb-4">
                                        <img src="/assets/img/stock/projects.png" alt={c.title} className="w-100 overflow-hidden" />
                                    </div>
                                    <div className="blog-cont">
                                        <div className="d-flex align-items-center gap-xxl-5 gap-xl-4 gap-3 mb-xxl-5 mb-xl-4 mb-3">
                                            <Link href="/study-details" className="radius-btn cmn-border radius100 py-xxl-2 py-2 px-xxl-4 px-3 theme-clr style-2">
                                                {c.category}
                                                <span className="rot60 d-inline-block ml-10">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/study-details" className="white-clr d-flex align-items-center justify-content-between gap-3">
                                                {c.title}
                                                <span className="rot60">
                                                    <i className="fas fa-arrow-up theme-clr" />
                                                </span>
                                            </Link>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
