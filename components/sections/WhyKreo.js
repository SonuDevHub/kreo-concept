const features = [
    {
        icon: "fa-lightbulb",
        title: "Creative Rebels",
        desc: "We think outside the box so your brand stands out.",
    },
    {
        icon: "fa-chart-line",
        title: "Data-Driven Magic",
        desc: "Every decision backed by analytics and insights.",
    },
    {
        icon: "fa-diagram-project",
        title: "End-to-End Execution",
        desc: "From strategy to launch, we handle every step under one roof.",
    },
]

export default function WhyKreo() {
    return (
        <>

            <section className="pt-20 pb-20">
                <div className="container">
                    <div className="text-center mx-auto mb-xxl-15 mb-xl-12 mb-lg-10 mb-9" style={{ maxWidth: 720 }}>
                        <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                            WHY CREOKONCEPTS
                        </div>
                        <h2 className="stitle">
                            Why Brands <span className="fw-400">Choose</span> Creokoncepts
                        </h2>
                    </div>
                    <div className="row g-xxl-7 g-xl-6 g-4">
                        {features.map((f, i) => (
                            <div className="col-lg-4 col-md-6" key={i} data-aos="fade-up" data-aos-duration={1000} data-aos-delay={i * 150}>
                                <div className="offer-item h-100 p-xxl-6 p-xl-5 p-4">
                                    <div className="icon d-center theme-border rounded-circle mb-xxl-6 mb-4" style={{ width: 56, height: 56 }}>
                                        <i className={`fas ${f.icon} theme-clr`} style={{ fontSize: 20 }} />
                                    </div>
                                    <h6 className="white-clr mb-xxl-4 mb-2">
                                        {f.title}
                                    </h6>
                                    <p className="pra-clr">
                                        {f.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
