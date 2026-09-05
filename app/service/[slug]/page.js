import { notFound } from "next/navigation"
import Layout from "@/components/layout/Layout"
import ServiceDetails from "@/components/sections/ServiceDetails"
import services, { getServiceBySlug } from "@/data/services"

export function generateStaticParams() {
    return services.map((service) => ({ slug: service.slug }))
}

export function generateMetadata({ params }) {
    const service = getServiceBySlug(params.slug)
    if (!service) return {}
    return {
        title: `${service.title} | creoKoncepts`,
        description: service.desc,
    }
}

export default function ServiceDetailsPage({ params }) {
    const service = getServiceBySlug(params.slug)
    if (!service) notFound()

    return (
        <Layout headerStyle={2} footerStyle={3} breadcrumbTitle={service.title}>
            <ServiceDetails service={service} />
        </Layout>
    )
}
