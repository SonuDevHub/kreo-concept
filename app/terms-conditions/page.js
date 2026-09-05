import Layout from "@/components/layout/Layout"
import LegalContent from "@/components/sections/LegalContent"

export const metadata = {
    title: "Terms & Conditions | creoKoncepts",
    description: "The terms that govern your use of the creoKoncepts website and the services we provide.",
}

const sections = [
    {
        title: "Acceptance of These Terms",
        body: [
            "These Terms and Conditions govern your access to and use of the creoKoncepts website, and any services, proposals or deliverables we provide to you. By browsing this website, submitting an enquiry, or engaging us for work, you confirm that you have read, understood and agreed to these terms.",
            "If you do not agree with any part of these terms, please discontinue use of this website and do not engage our services.",
        ],
    },
    {
        title: "Definitions",
        body: [
            "Throughout this document, the following words carry the meanings set out below.",
        ],
        list: [
            "\"We\", \"us\", \"our\" and \"creoKoncepts\" refer to the agency operating this website from Noida, Uttar Pradesh, India.",
            "\"You\", \"your\" and \"Client\" refer to the individual or organisation using this website or engaging our services.",
            "\"Services\" means any work we perform for you, including branding, web design and development, social media, SEO, paid advertising, content and film production.",
            "\"Deliverables\" means the final files, assets, reports or materials we hand over as part of the Services.",
        ],
    },
    {
        title: "Our Services",
        body: [
            "The scope, timeline and cost of any engagement are defined in a written proposal, quotation or statement of work agreed between us. That document, together with these terms, forms the agreement between you and creoKoncepts. Where the two conflict, the signed proposal takes precedence.",
            "Anything not expressly included in the agreed scope is considered additional work and will be quoted separately before it begins.",
        ],
    },
    {
        title: "Client Responsibilities",
        body: [
            "Delivering good work on time depends on both sides. You agree to provide what we need to do the job properly.",
        ],
        list: [
            "Supply accurate, complete content, brand assets, credentials and access in a timely manner.",
            "Nominate a single point of contact with authority to give feedback and sign off on work.",
            "Respond to requests for approval or information within the timeframes set out in the proposal.",
            "Ensure that any material you supply to us does not infringe the rights of any third party.",
        ],
    },
    {
        title: "Quotations, Fees and Payment",
        body: [
            "All quotations are valid for thirty days from the date of issue unless stated otherwise. Unless the proposal says differently, projects require an advance payment before work begins, with the balance payable against the milestones set out in the proposal.",
            "Invoices are payable within the period stated on the invoice. We reserve the right to pause work on overdue accounts and to withhold delivery of final files until payment is received in full. All fees are exclusive of applicable taxes, which will be charged as required by law.",
            "Third-party costs such as advertising spend, hosting, domains, stock media, plugins and licences are billed at cost and are your responsibility unless the proposal expressly includes them.",
        ],
    },
    {
        title: "Project Timelines",
        body: [
            "Timelines given in a proposal are estimates based on the assumption that content, feedback and approvals arrive when scheduled. Delays in receiving materials or sign-off from you will shift the delivery schedule accordingly.",
            "We are not liable for delays caused by circumstances outside our reasonable control, including platform outages, third-party vendor delays, or events of force majeure.",
        ],
    },
    {
        title: "Revisions and Approvals",
        body: [
            "Each proposal specifies the number of revision rounds included. Revisions beyond that allowance, or changes that alter the agreed direction or scope after sign-off, will be quoted and billed separately.",
            "Once you approve a deliverable in writing, that stage is considered complete. Changes requested after approval are treated as new work.",
        ],
    },
    {
        title: "Intellectual Property",
        body: [
            "You retain ownership of all content, trademarks and materials you supply to us. On receipt of full payment, ownership of the final approved Deliverables created specifically for you transfers to you.",
            "We retain ownership of our pre-existing tools, frameworks, source files, working files and any concepts or designs that were not selected and paid for. Third-party assets such as fonts, stock imagery, plugins and software remain subject to their own licences, which you are responsible for maintaining.",
            "Unless you ask us in writing not to, we may display completed work in our portfolio, case studies and marketing materials.",
        ],
    },
    {
        title: "Confidentiality",
        body: [
            "Both parties agree to keep confidential any non-public business, technical or commercial information disclosed during the engagement, and to use it only for the purpose of delivering or receiving the Services. This obligation continues after the engagement ends.",
            "This does not apply to information that is already public, was known before disclosure, or is required to be disclosed by law.",
        ],
    },
    {
        title: "Third-Party Platforms",
        body: [
            "Our Services often involve third-party platforms such as Google, Meta, LinkedIn, hosting providers, payment gateways and content management systems. We do not control these platforms and are not responsible for their availability, policy changes, algorithm updates, account suspensions or pricing decisions.",
            "Where we manage advertising spend on your behalf, you remain responsible for the spend itself and for compliance with each platform's advertising policies.",
        ],
    },
    {
        title: "Warranties and Disclaimers",
        body: [
            "We will perform the Services with reasonable skill and care, in line with professional standards. We do not, however, guarantee specific outcomes such as search rankings, traffic volumes, follower counts, conversion rates or revenue, as these depend on factors outside our control.",
            "This website and its content are provided on an \"as is\" basis. While we work to keep information accurate and current, we make no warranty that the site will be uninterrupted, error-free or free of harmful components.",
        ],
    },
    {
        title: "Limitation of Liability",
        body: [
            "To the fullest extent permitted by law, creoKoncepts will not be liable for any indirect, incidental, special or consequential loss, including loss of profits, revenue, data, goodwill or business opportunity, arising out of or in connection with the Services or this website.",
            "Our total aggregate liability in connection with any engagement will not exceed the total fees actually paid by you to us for that engagement in the three months preceding the event giving rise to the claim.",
        ],
    },
    {
        title: "Termination",
        body: [
            "Either party may terminate an engagement by giving written notice as set out in the proposal. On termination, you agree to pay for all work completed and all costs committed up to the termination date.",
            "We may suspend or terminate an engagement immediately if payment is significantly overdue, or if you breach these terms in a way that is not remedied within a reasonable period after we notify you.",
        ],
    },
    {
        title: "Indemnity",
        body: [
            "You agree to indemnify creoKoncepts against any claim, loss or expense arising from material you supply to us, from your use of the Deliverables outside the agreed scope, or from your breach of these terms or of any applicable law.",
        ],
    },
    {
        title: "Governing Law and Jurisdiction",
        body: [
            "These terms are governed by the laws of India. Any dispute arising out of or in connection with these terms or the Services will be subject to the exclusive jurisdiction of the courts of Noida, Uttar Pradesh.",
            "Before commencing formal proceedings, both parties agree to attempt in good faith to resolve the dispute through discussion.",
        ],
    },
    {
        title: "Changes to These Terms",
        body: [
            "We may update these Terms and Conditions from time to time to reflect changes in our services or in the law. The revised version takes effect from the date it is published on this page, so please review it periodically.",
            "Material changes affecting an active engagement will be communicated to you directly.",
        ],
    },
]

export default function TermsConditions() {
    return (
        <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Terms & Conditions">
            <LegalContent
                lastUpdated="6 September 2026"
                intro="These terms set out how we work, what you can expect from creoKoncepts, and what we need from you in return. They apply to everyone who uses this website and to every project we take on. We have kept the language as plain as we can."
                sections={sections}
            />
        </Layout>
    )
}
