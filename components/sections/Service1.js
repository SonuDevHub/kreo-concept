'use client'
import { useState } from 'react'
import Link from "next/link"
import services from "@/data/services"

// Homepage preview: first four services, each linking to its detail page.
const featured = services.slice(0, 4)

export default function Service1() {
    const [isAccordion, setIsAccordion] = useState(1)
    const handleAccordion = (key) => {
        setIsAccordion(prevState => prevState === key ? null : key)
    }
    return (
        <>

            <section className="service-section pt-space pb-space">
                <div className="container position-relative">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-17 mb-xl-12 mb-lg-10 mb-md-10 mb-sm-10 mb-9">
                        <div className="pricing-title">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                WHAT WE OFFER
                            </div>
                            <h2 className="stitle">
                                What <span className="fw-400">We Do</span> Best
                            </h2>
                        </div>
                        <Link href="/service" className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                            View All Service
                            <span className="rot60 d-inline-block">
                                <i className="fas fa-arrow-up theme-clr" />
                            </span>
                        </Link>
                    </div>
                    {/*Service Tabing section*/}
                    <div className="row g-xxl-6 g-4">
                        <div className="service-tabing-wrap Faqs-section">
                            {featured.map((s, i) => (
                                <div key={s.slug} className={`accordion-single py-xxl-9 py-xl-7 py-lg-6 py-5 bt-border ${i === featured.length - 1 ? "bb-border" : ""} ${isAccordion === i + 1 ? "active" : ""}`}>
                                    <div className="header-area" onClick={() => handleAccordion(i + 1)}>
                                        <div className="accordion-btn justify-content-between d-flex align-items-center text-start d-flex position-relative w-100">
                                            <div className="mtitle-ara">
                                                <span className="d-inline-flex serial-badge align-items-center gap-4 cmn-border radius100 white-clr">
                                                    {String(i + 1).padStart(2, "0")}
                                                    <span className="rot60 d-inline-block theme-clr">
                                                        <i className="fa-solid fa-arrow-right" />
                                                    </span>
                                                </span>
                                                <Link href={`/service/${s.slug}`} className="mtitle d-block mt-6 white-clr">
                                                    {s.title}
                                                </Link>
                                                <span className="pras mt-xxl-7 mt-xl-5 mt-4 d-block">
                                                    {s.desc}
                                                </span>
                                                <Link href={`/service/${s.slug}`} className="explore-more d-inline-flex align-items-center gap-1 mt-xxl-6 mt-4 theme-clr">
                                                    Read More
                                                    <span className="rot60">
                                                        <i className="fas fa-arrow-up" />
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="images-remove-area d-lg-flex d-none align-items-center gap-xxl-8 gap-4">
                                                <ul className="modern-list d-grid gap-2">
                                                    {s.points.map((p, pi) => (
                                                        <li className="d-flex align-items-center gap-2" key={pi}>
                                                            <i className="fas fa-chevron-right" /> {p}
                                                        </li>
                                                    ))}
                                                </ul>
                                                <Link href={`/service/${s.slug}`} className="tab-remove-thumb">
                                                    <img src={`/assets/img/stock/${s.img}`} alt={s.title} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/*Service Tabing section*/}
                </div>
            </section>
        </>
    )
}
