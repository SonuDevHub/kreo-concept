'use client'

import Link from 'next/link'

export default function Menu() {
    return (
        <ul className="custom-nav d-lg-flex d-grid gap-xxl-10 gap-xl-8 gap-lg-5 gap-md-2 gap-2 pt-lg-0 pt-5">
            <li className="menu-item position-relative">
                <Link href="/" className="fw_500 white-clr">
                    Home
                </Link>
            </li>
            <li className="menu-item position-relative">
                <Link href="/service" className="fw_500 white-clr">
                    Services
                </Link>
            </li>
            <li className="menu-item position-relative">
                <Link href="/study-grid" className="fw_500 white-clr">
                    Portfolio
                </Link>
            </li>
            <li className="menu-item position-relative">
                <Link href="/contact" className="fw_500">
                    Contact Us
                </Link>
            </li>
        </ul>
    )
}
