
const clients = [
    "ACE", "TATA Motors", "Titan Eyeplus", "Greko India", "Simplycare",
    "Samridhi", "SKA", "JCB", "CL Energy", "metadome",
    "Studioplus", "Daimler", "Shivik", "Outdoor Keeda", "Hybon",
    "QuickShip", "ZYPP", "Wags & Tails", "Gulshan", "Mobec",
    "JR Arabians", "Mahagun", "Godrej Properties", "Veda by Aurka", "Nirala World",
]

export default function OurClients() {
    return (
        <>

            <section className="pt-20 pb-20">
                <div className="container">
                    <div className="text-center mx-auto mb-xxl-15 mb-xl-12 mb-lg-10 mb-9" style={{ maxWidth: 720 }}>
                        <div className="radius-btn text-uppercase cmn-border d-inline-flex radius100 py-xxl-2 py-2 px-xxl-4 px-4 theme-clr gap-xxl-4 gap-3 mb-xxl-8 mb-xl-6 mb-5">
                            OUR CLIENTS
                        </div>
                        <h2 className="stitle">
                            Brands <span className="fw-400">We&apos;ve</span> Worked With
                        </h2>
                    </div>
                </div>
                <div className="mycustom-marque client-logo-marquee">
                    <div className="scrolling-wrap">
                        <div className="comm">
                            {clients.map((name, i) => (
                                <div key={`a-${i}`}>
                                    <img src="/assets/img/stock/clients.png" alt={name} />
                                </div>
                            ))}
                        </div>
                        <div className="comm">
                            {clients.map((name, i) => (
                                <div key={`b-${i}`}>
                                    <img src="/assets/img/stock/clients.png" alt={name} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
