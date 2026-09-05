'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import services, { serviceMainImage, serviceSliderImages } from "@/data/services"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 0,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".cmn-prev",
        prevEl: ".cmn-next",
    },
    breakpoints: {
        1199: { slidesPerView: 1 },
        991: { slidesPerView: 1 },
        767: { slidesPerView: 1 },
        575: { slidesPerView: 1 },
        0: { slidesPerView: 1 },
    },
}

export default function ServiceDetails({ service }) {
    const index = services.findIndex((s) => s.slug === service.slug)
    const prev = services[(index - 1 + services.length) % services.length]
    const next = services[(index + 1) % services.length]
    const others = services.filter((s) => s.slug !== service.slug).slice(0, 3)

    return (
        <>
            <section className="case-study pt-space pb-space">
                <div className="container">
                    {/* Main image + info box */}
                    <div className="row g-xxl-7 g-xl-6 g-5 mb-xxl-13 mb-10">
                        <div className="col-lg-8">
                            <div className="case-thumb1 w-100" data-aos="zoom-in" data-aos-duration={1500}>
                                <img src={serviceMainImage} alt={service.title} className="w-100" />
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="zoom-in-left" data-aos-duration={1600}>
                            <div className="case-content-box bg1-clr py-xxl-10 py-xl-9 py-lg-8 py-6 px-xxl-10 px-xl-8 px-lg-6 px-5">
                                <ul className="case-infobox mb-xxl-12 mb-xl-10 mb-lg-8 mb-7">
                                    {service.info.map((item, i) => (
                                        <li className="d-flex align-items-center justify-content-between gap-2" key={i}>
                                            <span className="white-clr">
                                                {item.label}:
                                            </span>
                                            <span className="white-clr">
                                                {item.value}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact" className="d-flex align-items-center justify-content-center w-100 fw-semibold py-xxl-4 py-xl-3 py-2 px-3 gap-2 themebg text-whitess">
                                    <i className="fas fa-paper-plane" />
                                    <span className="text-whitess">
                                        Get A Free Quote
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="case-study-detials-inner">
                        {/* Overview */}
                        <div className="interesting-fact">
                            <h3 className="white-clr pb-xx-10 pb-xl-7 pb-6 mb-xx-10 mb-xl-7 mb-6">
                                {service.intro}
                            </h3>
                        </div>
                        <p className="pra-clr mb-xxl-13 mb-xl-10 mb-8">
                            {service.overview}
                        </p>

                        {/* Challenge */}
                        <h4 className="mb-xxl-7 mb-4 white-clr">
                            01 The Challenge
                        </h4>
                        <div className="d-flex flex-md-nowrap flex-wrap justify-content-between gap-xxl-15 gap-xl-10 gap-lg-7 gap-sm-5 gap-3">
                            <p className="pra-clr challenge-pra1">
                                {service.challenge[0]}
                            </p>
                            <p className="pra-clr">
                                {service.challenge[1]}
                            </p>
                        </div>

                        {/* Two supporting visuals */}
                        <div className="row g-xxl-7 g-4 py-xxl-15 py-9">
                            {serviceSliderImages.map((img, i) => (
                                <div className="col-sm-6" key={i}>
                                    <div className="challenge-thumb w-100">
                                        <img src={img} alt={`${service.title} ${i + 1}`} className="w-100" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* What you get */}
                        <h4 className="mb-xxl-7 mb-4 white-clr">
                            02 What You Get
                        </h4>
                        <div className="fiial-result-list d-md-flex gap-xxl-20 gap-xl-10 gap-lg-7 gap-md-6 mb-xxl-15 mb-xl-10 mb-9">
                            <ul>
                                {service.deliverables.slice(0, 3).map((d, i) => (
                                    <li key={i}>{d}</li>
                                ))}
                            </ul>
                            <ul>
                                {service.deliverables.slice(3).map((d, i) => (
                                    <li key={i}>{d}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Results */}
                        <div className="finul-result">
                            <h4 className="mb-xxl-7 mb-4 white-clr">
                                03 The Results You Can Expect
                            </h4>
                            <div className="d-md-flex flex-grid align-items-center gap-xxl-20 gap-xl-10 gap-lg-7 gap-md-6 gap-10">
                                <div className="fiial-result-list mb-md-0 mb-4">
                                    <ul>
                                        {service.results.slice(0, 2).map((r, i) => (
                                            <li key={i}>{r}</li>
                                        ))}
                                    </ul>
                                    <ul>
                                        {service.results.slice(2).map((r, i) => (
                                            <li key={i}>{r}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="result-progress-wrap">
                                    {service.progress.map((p, i) => (
                                        <div className={`progres-item ${i === 0 ? "mb-xxl-8 mb-xl-7 mb-6" : ""}`} key={i}>
                                            <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                                <span className="conssub">
                                                    {p.label}
                                                </span>
                                                <span className="cons">{p.value}%</span>
                                            </div>
                                            <div className="progress-solving">
                                                <div className="progress-bar" style={{ width: `${p.value}%` }} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Slider */}
                        <div className="swiper study-slidewrap py-xxl-15 py-xl-10 py-9">
                            <Swiper {...swiperOptions} className="swiper-wrapper">
                                {serviceSliderImages.map((img, i) => (
                                    <SwiperSlide key={i}>
                                        <div className="study-thumb-slide w-100">
                                            <img src={img} alt={`${service.title} slide ${i + 1}`} className="w-100" />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Prev / Next service */}
                        <div className="slider-button d-flex align-items-center justify-content-between py-xxl-6 py-xl-5 py-4">
                            <Link href={`/service/${prev.slug}`} className="d-flex align-items-center gap-xxl-5 gap-3 gap-2">
                                <span className="cmn-prev cmn-border d-center">
                                    <i className="fas fa-chevron-left" />
                                </span>
                                <span className="fw-bold white-clr previus-text text-capitalize">
                                    previous
                                </span>
                            </Link>
                            <h3 className="project-storke">
                                Services
                            </h3>
                            <Link href={`/service/${next.slug}`} className="d-flex align-items-center gap-xxl-5 gap-3 gap-2">
                                <span className="fw-bold white-clr previus-text text-capitalize">
                                    Next
                                </span>
                                <span className="cmn-next cmn-border d-center">
                                    <i className="fas fa-chevron-right" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other services */}
            <section className="service-section pb-space">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-5 mb-xxl-12 mb-xl-10 mb-8">
                        <div className="pricing-title">
                            <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                MORE FROM US
                            </div>
                            <h2 className="stitle">
                                Explore <span className="fw-400">Other</span> Services
                            </h2>
                        </div>
                        <Link href="/service" className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5 style-2">
                            View All Service
                            <span className="rot60 d-inline-block">
                                <i className="fas fa-arrow-up theme-clr" />
                            </span>
                        </Link>
                    </div>
                    <div className="row g-xxl-7 g-4">
                        {others.map((s, i) => (
                            <div className="col-lg-4 col-md-6" key={s.slug} data-aos="zoom-in-up" data-aos-duration={1400 + i * 200}>
                                <Link href={`/service/${s.slug}`} className="service-mini-card bg1-clr d-block h-100 py-xxl-9 py-xl-8 py-7 px-xxl-8 px-xl-7 px-5">
                                    <span className="d-inline-flex serial-badge align-items-center cmn-border radius100 white-clr">
                                        {String(services.findIndex((x) => x.slug === s.slug) + 1).padStart(2, "0")}
                                        <span className="rot60 d-inline-block theme-clr">
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </span>
                                    <span className="mtitle d-block mt-6 white-clr">
                                        {s.shortTitle}
                                    </span>
                                    <span className="pras mt-xxl-5 mt-4 d-block pra-clr">
                                        {s.desc}
                                    </span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
