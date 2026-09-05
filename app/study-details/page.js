'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 0,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".cmn-prev",
        prevEl: ".cmn-next",
    },

    breakpoints: {
        1199: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 1,
        },
        575: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    },
}
export default function StudyDetails() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Portfolio Details">
                <section className="case-study pt-space pb-space">
                    <div className="container">
                        <div className="row g-xxl-7 g-xl-6 g-5 mb-xxl-13 mb-10">
                            <div className="col-lg-8">
                                <div className="case-thumb1 w-100" data-aos="zoom-in" data-aos-duration={1500}>
                                    <img src="/assets/img/stock/projects.png" alt="img" className="w-100" />
                                </div>
                            </div>
                            <div className="col-lg-4" data-aos="zoom-in-left" data-aos-duration={1600}>
                                <div className="case-content-box bg1-clr py-xxl-10 py-xl-9 py-lg-8 py-6 px-xxl-10 px-xl-8 px-lg-6 px-5">
                                    <ul className="case-infobox mb-xxl-12 mb-xl-10 mb-lg-8 mb-7">
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                Category:
                                            </span>
                                            <span className="white-clr">
                                                Development
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                Software:
                                            </span>
                                            <span className="white-clr">
                                                Figma, WordPress
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                Client:
                                            </span>
                                            <span className="white-clr">
                                                AGRIM
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                Location:
                                            </span>
                                            <span className="white-clr">
                                                Noida, Uttar Pradesh
                                            </span>
                                        </li>
                                        <li className="d-flex align-items-center justify-content-between gap-2">
                                            <span className="white-clr">
                                                Date:
                                            </span>
                                            <span className="white-clr">
                                                23/03/2024
                                            </span>
                                        </li>
                                    </ul>
                                    <Link href="#" className="d-flex align-items-center justify-content-center w-100 fw-semibold py-xxl-4 py-xl-3 py-2 px-3 gap-2 themebg text-whitess">
                                        <i className="fas fa-file-alt" />
                                        <span className="text-whitess">
                                            Download Docs
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="case-study-detials-inner">
                            <div className="interesting-fact">
                                <h3 className="white-clr pb-xx-10 pb-xl-7 pb-6 mb-xx-10 mb-xl-7 mb-6">
                                    Interesting facts in development
                                </h3>
                            </div>
                            <h4 className="mb-xxl-7 mb-4 white-clr">
                                01 The Challenge
                            </h4>
                            <div className="d-flex flex-md-nowrap flex-wrap justify-content-between gap-xxl-15 gap-xl-10 gap-lg-7 gap-sm-5 gap-3 ">
                                <p className="pra-clr challenge-pra1">
                                    AGRIM needed a complete website overhaul that could keep up with their growing
                                    catalogue while staying fast and easy to navigate. Their existing site was slow,
                                    hard to update, and wasn't converting visitors into leads. They came to us
                                    looking for a modern design paired with a backend their team could manage
                                    without depending on a developer for every small change.
                                </p>
                                <p className="pra-clr">
                                    We started with a full audit of the existing site and user journey, then rebuilt
                                    the design from the ground up in Figma before development. The goal was simple,
                                    a site that looked premium, loaded quickly, and made it effortless for
                                    customers to find what they needed and get in touch.
                                </p>
                            </div>
                            <div className="row g-xxl-7 g-4 py-xxl-15 py-9">
                                <div className="col-sm-6">
                                    <div className="challenge-thumb w-100">
                                        <img src="/assets/img/stock/projects.png" alt="img" className="w-100" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="challenge-thumb w-100">
                                        <img src="/assets/img/stock/projects.png" alt="img" className="w-100" />
                                    </div>
                                </div>
                            </div>
                            <div className="finul-result">
                                <h4 className="mb-xxl-7 mb-4 white-clr">
                                    Final Results Of the Project
                                </h4>
                                <div className="d-md-flex flex-grid align-items-center gap-xxl-20 gap-xl-10 gap-lg-7 gap-md-6 gap-10">
                                    <div className="fiial-result-list mb-md-0 mb-4">
                                        <ul>
                                            <li>
                                                40% faster page load times
                                            </li>
                                            <li>
                                                Fully manageable CMS for the client's team
                                            </li>
                                            <li>
                                                Mobile-first responsive design
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                60% increase in enquiry form submissions
                                            </li>
                                            <li>
                                                Consistent branding across every page
                                            </li>
                                            <li>
                                                Improved search engine visibility
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="result-progress-wrap">
                                        <div className="progres-item mb-xxl-8 mb-xl-7 mb-6">
                                            <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                                <span className="conssub">
                                                    Problem Solving
                                                </span>
                                                <span className="cons">98%</span>
                                            </div>
                                            <div className="progress-solving">
                                                <div className="progress-bar" />
                                            </div>
                                        </div>
                                        <div className="progres-item">
                                            <div className="d-flex align-items-center justify-content-between mb-xxl-5 mb-3">
                                                <span className="conssub">
                                                    Development
                                                </span>
                                                <span className="cons">100%</span>
                                            </div>
                                            <div className="progress-solving">
                                                <div className="progress-bar" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper study-slidewrap py-xxl-15 py-xl-10 py-9">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="study-thumb-slide w-100">
                                            <img src="/assets/img/blog/project-slide1.png" alt="img" className="w-100" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="study-thumb-slide w-100">
                                            <img src="/assets/img/blog/project-slide2.jpg" alt="img" className="w-100" />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="slider-button d-flex align-items-center justify-content-between py-xxl-6 py-xl-5 py-4">
                                <div className="d-flex align-items-center gap-xxl-5 gap-3 gap-2">
                                    <button className="cmn-prev cmn-border d-center">
                                        <i className="fas fa-chevron-left" />
                                    </button>
                                    <span className="fw-bold white-clr previus-text text-capitalize">
                                        previous
                                    </span>
                                </div>
                                <h3 className="project-storke">
                                    Projects
                                </h3>
                                <div className="d-flex align-items-center gap-xxl-5 gap-3 gap-2">
                                    <span className="fw-bold white-clr previus-text text-capitalize">
                                        Next
                                    </span>
                                    <button className="cmn-next cmn-border d-center">
                                        <i className="fas fa-chevron-right" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}