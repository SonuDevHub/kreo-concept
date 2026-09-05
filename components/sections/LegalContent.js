import Link from "next/link"

// Shared renderer for long-form legal pages (Terms & Conditions, Privacy Policy).
// Each section takes a title, optional paragraphs and an optional bullet list.
export default function LegalContent({ intro, lastUpdated, sections }) {
    return (
        <section className="legal-section pt-space pb-space">
            <div className="container">
                <div className="row g-5 justify-content-center">
                    <div className="col-xxl-9 col-xl-10">
                        <div className="legal-content">
                            {lastUpdated && (
                                <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                                    Last updated: {lastUpdated}
                                </div>
                            )}

                            {intro && (
                                <p className="legal-intro pra-clr mb-xxl-12 mb-xl-10 mb-8">
                                    {intro}
                                </p>
                            )}

                            {sections.map((section, i) => (
                                <div className="legal-block" key={i} data-aos="fade-up" data-aos-duration={1200}>
                                    <h4 className="white-clr mb-xxl-5 mb-4">
                                        <span className="theme-clr">{String(i + 1).padStart(2, "0")}.</span> {section.title}
                                    </h4>
                                    {section.body?.map((paragraph, pi) => (
                                        <p className="pra-clr mb-4" key={pi}>
                                            {paragraph}
                                        </p>
                                    ))}
                                    {section.list && (
                                        <ul className="legal-list">
                                            {section.list.map((item, li) => (
                                                <li className="pra-clr" key={li}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}

                            <div className="legal-contact-box bg1-clr mt-xxl-12 mt-xl-10 mt-8 py-xxl-10 py-xl-8 py-7 px-xxl-10 px-xl-8 px-5">
                                <h4 className="white-clr mb-xxl-5 mb-4">
                                    Questions about this page?
                                </h4>
                                <p className="pra-clr mb-xxl-7 mb-5">
                                    If anything here is unclear, or you want to exercise any of the rights
                                    described above, get in touch and we will respond as quickly as we can.
                                </p>
                                <ul className="legal-list mb-xxl-8 mb-6">
                                    <li className="pra-clr">
                                        Email: <Link href="mailto:info.company@gmail.com" className="pra-clr">info.company@gmail.com</Link>
                                    </li>
                                    <li className="pra-clr">
                                        Phone: <Link href="tel:+19790567800" className="pra-clr">+197-90-56-780</Link>
                                    </li>
                                    <li className="pra-clr">
                                        Address: Noida, Uttar Pradesh, India
                                    </li>
                                </ul>
                                <Link href="/contact" className="radius-btn d-inline-flex radius100 py-xxl-2 py-2 px-xxl-5 px-5 theme-border theme-clr gap-xxl-4 gap-3 style-2">
                                    Contact Us
                                    <span className="rot60 d-inline-block">
                                        <i className="fas fa-arrow-up theme-clr" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
