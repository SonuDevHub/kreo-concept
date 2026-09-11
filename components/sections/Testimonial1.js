
'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    speed: 1500,
    loop: true,
    autoplay: {
        delay: 4000,
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
    },
}

const testimonials = [
    {
        quote: "Creokoncepts rebuilt our brand identity from the ground up and the difference was visible within a quarter. The team understood our market, asked the right questions, and delivered design work we are genuinely proud to put in front of customers.",
        name: "Rohit Malhotra",
        role: "Marketing Head, Real Estate",
    },
    {
        quote: "Their SEO and social media work brought us consistent, qualified leads instead of vanity numbers. Reporting is transparent, deadlines are respected, and every campaign is backed by a clear reason rather than guesswork.",
        name: "Ananya Verma",
        role: "Founder, D2C Brand",
    },
    {
        quote: "From the first storyboard to the final cut, our ad film was handled with real craft. Creokoncepts kept the production tight, the message sharp, and the results speak for themselves across every channel we ran it on.",
        name: "Karan Batra",
        role: "Business Head, Automotive",
    },
]

export default function Testimonial1() {
    return (
        <>

            <section className="testimonial-version01-section pt-20 pb-space position-relative">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-11">
                            <div className="swiper testimonial-version01 position-relative">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    {testimonials.map((t, i) => (
                                        <SwiperSlide key={i}>
                                            <div className="testimonial-zero-oneitem d-md-flex d-grid align-items-center justify-content-md-start justify-content-center text-md-start text-center gap-xxl-7 gap-xl-5 gap-4">
                                                <div className="content">
                                                    <div className="icon mb-xxl-6 mb-xl-5 mb-4">
                                                        <i className="fas fa-quote-right theme-clr" />
                                                    </div>
                                                    <p className="white-clr mb-xxl-7 mb-xl-6 mb-lg-5 mb-4">
                                                        {t.quote}
                                                    </p>
                                                    <div className="desig">
                                                        <h6 className="white-clr mb-2">
                                                            {t.name}
                                                        </h6>
                                                        <span className="theme-clr">
                                                            {t.role}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slider-button gap-xxl-3 gap-2 align-items-center justify-content-between slider-button-60">
                    <button className="cmn-prev cmn-border d-center" tabIndex={0} aria-label="Next slide">
                        <i className="fas fa-chevron-up" />
                    </button>
                    <button className="cmn-next cmn-border d-center" tabIndex={0} aria-label="Previous slide">
                        <i className="fas fa-chevron-down" />
                    </button>
                </div>
            </section>
        </>
    )
}
