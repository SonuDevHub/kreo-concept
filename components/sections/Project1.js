import dynamic from 'next/dynamic'
const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})

const stats = [
    { count: 14, suffix: "+", label: "Years of experience" },
    { count: 25, suffix: "K+", label: "Projects delivered" },
    { count: 25, suffix: "+", label: "Brands served" },
    { count: 120, suffix: "+", label: "Specialists on board" },
]

export default function Project1() {
    return (
        <>

            <section className="project-count pt-20 pb-20">
                <div className="container">
                    <div className="row g-xxl-7 g-5 justify-content-center">
                        {stats.map((s, i) => (
                            <div className="col-lg-3 col-md-6 col-sm-6" key={i}>
                                <div className="project-count-item d-center">
                                    <div className="box">
                                        <h2>
                                            <CounterUp count={s.count} time={3} />
                                            <span>{s.suffix}</span>
                                        </h2>
                                        <span className="pra-clr">
                                            {s.label}
                                        </span>
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
