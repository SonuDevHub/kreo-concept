
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function BlogDetails() {

    return (
        <>

            <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Blog Details">
                <section className="blog-details pt-space pb-space">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-12 col-lg-8">
                                <div className="blog-post-details mb-xxl-10 mb-xl-8 mb-lg-7 mb-6">
                                    <div className="single-blog-post">
                                        <div className="post-featured-thumb w-100 mb-xxl-30 mb-xl-6 mb-5" data-aos="zoom-in" data-aos-duration={1400}>
                                            <img src="/assets/img/stock/blog.png" alt="Branding mistakes that cost customers" className="w-100" />
                                        </div>
                                        <div className="post-content">
                                            <div className="post-marry d-flex align-items-center gap-xxl-8 gap-xl-6 gap-4 gap-3 mb-xxl-5 mb-xl-4 mb-lg-3 mb-3" data-aos="fade-left" data-aos-duration={1500}>
                                                <span>
                                                    Written by: Creokoncepts Team
                                                </span>
                                                <i className="fas fa-circle white" />
                                                <span>
                                                    24/03/2024
                                                </span>
                                            </div>
                                            <div className="mb-xxl-13 mb-xl-10 mb-lg-8 mb-7">
                                                <h5 className="white mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1600}>
                                                    5 Branding Mistakes That Are Costing You Customers</h5>
                                                <p className="pra-clr mb-xxl-5 mb-3" data-aos="fade-left" data-aos-duration={1550}>
                                                    Your brand is often the first impression a customer forms of your business,
                                                    and small missteps can quietly push people away before they ever
                                                    read your pitch. From inconsistent visuals across platforms to a tone of
                                                    voice that changes from post to post, these mistakes chip away at
                                                    trust. Over 14+ years of working with businesses across industries, we've
                                                    seen the same few branding errors show up again and again, and
                                                    fixing them is often the fastest way to make a brand feel credible.
                                                </p>
                                                <p className="pra-clr" data-aos="fade-left" data-aos-duration={1700}>
                                                    The good news is that none of these mistakes require a full rebrand to
                                                    fix. A clear brand guideline, a consistent visual identity, and a
                                                    voice that matches your audience's expectations can turn things around
                                                    within weeks. Below, we break down the five most common issues
                                                    we encounter and how our team approaches solving them for clients.
                                                </p>
                                            </div>
                                            <h5 className="white mb-xxl-10 mb-xl-7 mb-lg-6 mb-4" data-aos="zoom-in-left" data-aos-duration={1400}>
                                                Where does this hurt brands the most?
                                            </h5>
                                            <div className="row g-xl-4 g-3 mb-xxl-10 mb-xl-7 mb-lg-6 mb-4">
                                                <div className="col-lg-6 col-md-6 col-sm-6" data-aos="zoom-in" data-aos-duration={1500}>
                                                    <div className="details-thumb-b1 w-100">
                                                        <img src="/assets/img/stock/service-slide1.png" alt="Brand design work in progress" className="w-100" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-6" data-aos="zoom-in" data-aos-duration={1600}>
                                                    <div className="details-thumb-b1 w-100">
                                                        <img src="/assets/img/stock/service-slide2.png" alt="Design thinking reference book" className="w-100" />
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="pra-clr mb-xxl-8 mb-xl-6 mb-lg-5 mb-4" data-aos="zoom-in-left" data-aos-duration={1400}>
                                                Most of these mistakes aren't about bad design, they're about a lack
                                                of consistency and clarity. A logo that looks different on Instagram
                                                than it does on your website, a tagline that doesn't match what you
                                                actually offer, or messaging that speaks to everyone and therefore
                                                resonates with no one, all quietly cost you customers before you even
                                                get a chance to pitch them.
                                            </p>
                                            <ul className="blod-dlist d-grid gap-xl-2 gap-2 mb-xxl-8 mb-xl-6 mb-lg-5 mb-4">
                                                <li>
                                                    Inconsistent visuals across your website, social media, and print.
                                                </li>
                                                <li>
                                                    A tone of voice that shifts from formal to casual without reason.
                                                </li>
                                                <li>
                                                    Ignoring your target audience while chasing a broader appeal.
                                                </li>
                                                <li>
                                                    Copying competitors instead of defining your own identity.
                                                </li>
                                                <li>
                                                    Treating branding as a one-time project instead of an ongoing effort.
                                                </li>
                                            </ul>
                                            <div className="hilight-text py-xxl-12 py-xl-9 py-lg-7 py-sm-6 py-4 px-xxl-20 px-xl-15 px-lg-10 px-sm-8 px-4 mb-xxl-8 mb-xl-6 mb-lg-5 mb-4" data-aos="fade-left" data-aos-duration={1400}>
                                                <p>
                                                    "A strong brand isn't built overnight, it's built through every
                                                    consistent touchpoint a customer has with you."
                                                </p>
                                            </div>
                                            <p className="pra-clr" data-aos="zoom-in-left" data-aos-duration={1400}>
                                                At Creokoncepts, we start every branding engagement with an audit of
                                                these exact touchpoints. Fixing them early means every rupee you spend
                                                on marketing afterward works harder, because the brand behind it is
                                                already consistent, credible, and easy to recognise.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="tag-share d-sm-flex d-grid align-items-center justify-content-sm-between justify-content-center mb-xxl-8 mb-xl-7 mb-5 gap-3" data-aos="zoom-in" data-aos-duration={1400}>
                                    <div className="tag d-flex justify-content-sm-start justify-content-center align-items-center gap-xxl-4 gap-3">
                                        Tags:
                                        <ul className="taglist d-flex align-items-center gap-xxl-3 gap-xl-2 gap-1">
                                            <li>
                                                <div className="tag-clr">
                                                    Creative
                                                </div>
                                            </li>
                                            <li>
                                                <div className="tag-clr">
                                                    Agency
                                                </div>
                                            </li>
                                            <li>
                                                <div className="tag-clr">
                                                    Business
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-sm-start justify-content-center gap-xxl-4 gap-3">
                                        Share:
                                        <ul className="common-social d-flex align-items-center gap-2">
                                            <li data-aos="zoom-in-right" data-aos-duration={1400}>
                                                <Link href="/#" className="d-center">
                                                    <svg width={10} height={16} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g opacity="0.8" clipPath="url(#clip0_6308_2802)">
                                                            <path d="M8.72266 9L9.16703 6.10437H6.38859V4.22531C6.38859 3.43313 6.77672 2.66094 8.02109 2.66094H9.28422V0.195625C9.28422 0.195625 8.13797 0 7.04203 0C4.75391 0 3.25828 1.38688 3.25828 3.8975V6.10437H0.714844V9H3.25828V16H6.38859V9H8.72266Z" fill="white" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_6308_2802">
                                                                <rect width={10} height={16} fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li data-aos="zoom-in-right" data-aos-duration={1600}>
                                                <Link href="/#" className="d-center">
                                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.3553 4.74149C14.3655 4.88362 14.3655 5.02577 14.3655 5.1679C14.3655 9.5029 11.066 14.4978 5.03553 14.4978C3.17766 14.4978 1.45178 13.9597 0 13.0258C0.263969 13.0562 0.51775 13.0664 0.791875 13.0664C2.32484 13.0664 3.73603 12.5486 4.86294 11.6654C3.42131 11.6349 2.21319 10.6907 1.79694 9.39124C2 9.42168 2.20303 9.44199 2.41625 9.44199C2.71066 9.44199 3.00509 9.40137 3.27919 9.33034C1.77666 9.02574 0.649719 7.70596 0.649719 6.11205V6.07146C1.08625 6.31512 1.59391 6.4674 2.13194 6.48768C1.24869 5.89884 0.670031 4.89377 0.670031 3.75671C0.670031 3.14759 0.832437 2.58921 1.11672 2.1019C2.73094 4.09174 5.15734 5.39121 7.87812 5.53337C7.82737 5.28971 7.79691 5.03593 7.79691 4.78212C7.79691 2.97499 9.25884 1.50293 11.0761 1.50293C12.0202 1.50293 12.873 1.89887 13.472 2.53846C14.2131 2.39634 14.9238 2.12221 15.5532 1.74659C15.3096 2.50802 14.7918 3.14762 14.1116 3.55368C14.7715 3.48265 15.4111 3.29987 15.9999 3.04609C15.5533 3.6958 14.9949 4.27446 14.3553 4.74149V4.74149Z" fill="white" />
                                                    </svg>
                                                </Link>
                                            </li>
                                            <li data-aos="zoom-in-right" data-aos-duration={1900}>
                                                <Link href="/#" className="d-center">
                                                    <svg width={18} height={12} viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17.1769 1.87759C16.9806 1.13853 16.4023 0.556469 15.668 0.358938C14.337 0 9.00014 0 9.00014 0C9.00014 0 3.66327 0 2.3323 0.358938C1.59802 0.5565 1.0197 1.13853 0.823422 1.87759C0.466797 3.21719 0.466797 6.01213 0.466797 6.01213C0.466797 6.01213 0.466797 8.80706 0.823422 10.1467C1.0197 10.8857 1.59802 11.4435 2.3323 11.6411C3.66327 12 9.00014 12 9.00014 12C9.00014 12 14.337 12 15.668 11.6411C16.4023 11.4435 16.9806 10.8857 17.1769 10.1467C17.5335 8.80706 17.5335 6.01213 17.5335 6.01213C17.5335 6.01213 17.5335 3.21719 17.1769 1.87759V1.87759ZM7.25467 8.54972V3.47453L11.7153 6.01219L7.25467 8.54972V8.54972Z" fill="white" />
                                                    </svg>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nextprevius-text d-flex align-items-center justify-content-between mb-xxl-6 mb-xl-5 mb-4">
                                    <div className="d-flex align-items-center gap-3" data-aos="zoom-in-left" data-aos-duration={1500}>
                                        <i className="fas fa-arrow-left" />
                                        <span className="dd-clr">
                                            Previous blog
                                        </span>
                                    </div>
                                    <div className="dd-clr" data-aos="zoom-in-left" data-aos-duration={1500}>
                                        Next blog
                                    </div>
                                </div>
                                <div className="row g-xl-7 g-4 mb-xxl-15 mb-xl-10 mb-8">
                                    <div className="col-lg-6" data-aos="zoom-in" data-aos-duration={1400}>
                                        <div className="recent-items bg1-clr d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2 py-xxl-6 py-xl-4 py-3 px-xxl-7 px-xl-5 px-lg-4 px-3">
                                            <Link href="#" className="recent-thumb">
                                                <img src="/assets/img/stock/home-page-services.png" alt="Local SEO guide" />
                                            </Link>
                                            <div className="recent-content">
                                                <span className="pra-clr d-block mb-1 fs14">
                                                    24/03/2024
                                                </span>
                                                <Link href="#" className="htheme">
                                                    The Ultimate Guide to Local SEO for Noida Businesses
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6" data-aos="zoom-in" data-aos-duration={1400}>
                                        <div className="recent-items bg1-clr d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2 py-xxl-6 py-xl-4 py-3 px-xxl-7 px-xl-5 px-lg-4 px-3">
                                            <Link href="#" className="recent-thumb">
                                                <img src="/assets/img/stock/our-process-main-image.png" alt="Social media strategy" />
                                            </Link>
                                            <div className="recent-content">
                                                <span className="pra-clr d-block mb-1 fs14">
                                                    24/03/2024
                                                </span>
                                                <Link href="#" className="htheme">
                                                    Why Every Brand Needs a Social Media Strategy in 2026
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-form-wrap" data-aos="zoom-in-left" data-aos-duration={1400}>
                                    <h3 className="white mb-xxl-7 mb-5">Leave a comments</h3>
                                    <form action="#" id="contact-form" method="POST">
                                        <div className="row g-xl-7 g-4">
                                            <div className="col-lg-6">
                                                <div className="form-clt">
                                                    <input type="text" name="name" id="name" placeholder="Your Name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-clt">
                                                    <input type="text" name="email" id="email2" placeholder="Your Email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-clt">
                                                    <textarea name="message" id="message" placeholder="Write Message" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <button type="submit" className="base-btn">
                                                    post comment
                                                    <span className="rotcu">
                                                        <i className="fa-solid fa-arrow-right-long" />
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="blog-right-bar mt-lg-0 mt-4">
                                    <div className="box mb-xxl-10 mb-xl-8 mb-7">
                                        <div className="wid-title" data-aos="fade-left" data-aos-duration={1600}>
                                            <h6>Search</h6>
                                        </div>
                                        <div className="search-widget" data-aos="zoom-in" data-aos-duration={1400}>
                                            <form action="#">
                                                <input type="text" placeholder="Search here..." />
                                                <button type="submit"><i className="fas fa-search" /></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="box mb-xxl-10 mb-xl-8 mb-7">
                                        <div className="wid-title" data-aos="fade-left" data-aos-duration={1600}>
                                            <h6>Cagegories</h6>
                                        </div>
                                        <div className="category" data-aos="fade-down" data-aos-duration={1600}>
                                            <ul className="d-grid gap-xxl-3 gap-3">
                                                <li>
                                                    <div>
                                                        Branding <span>(2)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        SEO <span>(4)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        Social Media <span>(3)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        Web Design <span>(5)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        Ad Films <span>(7)</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        Content <span>(8)</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="box mb-xxl-10 mb-xl-8 mb-7">
                                        <div className="wid-title" data-aos="fade-left" data-aos-duration={1600}>
                                            <h6>Recent Posts</h6>
                                        </div>
                                        <div className="recent-postwrap">
                                            <div className="recent-items d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2" data-aos="fade-down" data-aos-duration={1200}>
                                                <Link href="#" className="recent-thumb">
                                                    <img src="/assets/img/stock/blog-hover.png" alt="Ad films that drive sales" />
                                                </Link>
                                                <div className="recent-content">
                                                    <span className="pra-clr d-block mb-1">
                                                        24/03/2024
                                                    </span>
                                                    <Link href="#">
                                                        From Concept to Conversion: How Ad Films Drive Sales
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="recent-items d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2" data-aos="fade-down" data-aos-duration={1400}>
                                                <Link href="#" className="recent-thumb">
                                                    <img src="/assets/img/stock/projects.png" alt="Copywriting that converts" />
                                                </Link>
                                                <div className="recent-content">
                                                    <span className="pra-clr d-block mb-1">
                                                        24/03/2024
                                                    </span>
                                                    <Link href="#">
                                                        Content That Converts: Writing Copy That Sells
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="recent-items d-flex align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2" data-aos="fade-down" data-aos-duration={1600}>
                                                <Link href="#" className="recent-thumb">
                                                    <img src="/assets/img/stock/home-page-services.png" alt="Design trends in digital marketing" />
                                                </Link>
                                                <div className="recent-content">
                                                    <span className="pra-clr d-block mb-1">
                                                        24/03/2024
                                                    </span>
                                                    <Link href="#">
                                                        Design Trends Shaping Digital Marketing This Year
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box">
                                        <div className="wid-title" data-aos="fade-left" data-aos-duration={1600}>
                                            <h6>Tag</h6>
                                        </div>
                                        <div className="tagwrap d-flex flex-wrap gap-xl-6 gap-lg-4 gap-md-3 gap-2">
                                            <div>branding</div>
                                            <div>seo</div>
                                            <div>social media</div>
                                            <div>content</div>
                                            <div>design</div>
                                            <div>strategy</div>
                                            <div>growth</div>
                                            <div>business</div>
                                            <div>marketing</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}