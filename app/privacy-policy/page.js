import Layout from "@/components/layout/Layout"
import LegalContent from "@/components/sections/LegalContent"

export const metadata = {
    title: "Privacy Policy | creoKoncepts",
    description: "How creoKoncepts collects, uses, stores and protects your personal information.",
}

const sections = [
    {
        title: "Who We Are",
        body: [
            "creoKoncepts is a digital marketing agency based in Noida, Uttar Pradesh, India. This Privacy Policy explains what personal information we collect when you visit our website or work with us, why we collect it, how we look after it, and what rights you have over it.",
            "This policy applies to this website and to the services we provide. It does not cover third-party websites we may link to, each of which has its own privacy practices.",
        ],
    },
    {
        title: "Information We Collect",
        body: [
            "We only collect what we actually need. Depending on how you interact with us, that may include the following.",
        ],
        list: [
            "Information you give us: your name, email address, phone number, company name and anything else you include in an enquiry form, email or call.",
            "Client and project information: billing details, contact details of your team, and materials you share with us to deliver a project.",
            "Technical information: IP address, browser type and version, device type, operating system and screen size.",
            "Usage information: pages visited, time spent on the site, links clicked and the referring website or campaign that brought you here.",
            "Recruitment information: your CV, portfolio and contact details if you apply for a role with us.",
        ],
    },
    {
        title: "How We Use Your Information",
        body: [
            "We use the information we collect for clearly defined purposes, and nothing beyond them.",
        ],
        list: [
            "To respond to your enquiries and prepare proposals or quotations.",
            "To deliver, manage and support the services you have engaged us for.",
            "To issue invoices and process payments.",
            "To understand how our website is used so we can improve its content and performance.",
            "To send you updates, offers or newsletters where you have asked to receive them.",
            "To meet our legal, tax and accounting obligations.",
        ],
    },
    {
        title: "Legal Basis for Processing",
        body: [
            "We process personal information where we have your consent, where it is necessary to perform a contract with you, where we have a legitimate business interest that does not override your rights, or where we are required to do so by law.",
            "Where our processing relies on consent, you can withdraw that consent at any time by contacting us.",
        ],
    },
    {
        title: "Cookies and Tracking",
        body: [
            "Our website uses cookies and similar technologies. Essential cookies keep the site working correctly. Analytics cookies, such as those set by Google Analytics, help us understand which pages are useful and where visitors drop off. Marketing cookies, such as those set by Google or Meta advertising pixels, may be used to measure campaign performance and show relevant ads.",
            "You can control or delete cookies through your browser settings. Blocking some cookies may affect how parts of the site behave.",
        ],
    },
    {
        title: "Sharing Your Information",
        body: [
            "We do not sell your personal information. We share it only where it is necessary, and only with parties that are bound to protect it.",
        ],
        list: [
            "Service providers who support our operations, such as hosting, email, analytics, CRM and payment processing.",
            "Advertising and analytics platforms, where you have consented to marketing cookies.",
            "Professional advisers such as accountants and lawyers, where required.",
            "Authorities or regulators, where we are legally obliged to disclose information.",
        ],
    },
    {
        title: "International Transfers",
        body: [
            "Some of the tools we use store data on servers outside India. Where personal information is transferred internationally, we take reasonable steps to ensure it receives a level of protection consistent with this policy and with applicable law.",
        ],
    },
    {
        title: "Data Retention",
        body: [
            "We keep personal information only for as long as we need it for the purpose it was collected, or for as long as the law requires. Enquiry data is typically retained for up to twenty-four months if no engagement follows. Client and financial records are retained for the period required by tax and accounting rules.",
            "When information is no longer needed, we delete it or anonymise it securely.",
        ],
    },
    {
        title: "Data Security",
        body: [
            "We use appropriate technical and organisational measures to protect personal information, including encrypted connections, access controls, and limiting access to staff who need it to do their work.",
            "No method of transmission or storage is completely secure, so while we work hard to protect your information, we cannot guarantee absolute security. If a breach occurs that affects your rights, we will notify you and the relevant authority as required by law.",
        ],
    },
    {
        title: "Your Rights",
        body: [
            "You have rights over the personal information we hold about you. To exercise any of them, contact us using the details below and we will respond within a reasonable period.",
        ],
        list: [
            "Access: request a copy of the personal information we hold about you.",
            "Correction: ask us to correct information that is inaccurate or incomplete.",
            "Deletion: ask us to delete your information where there is no ongoing reason for us to keep it.",
            "Objection and restriction: object to certain processing, or ask us to limit how we use your information.",
            "Withdraw consent: opt out of marketing at any time, using the unsubscribe link in any email or by contacting us.",
            "Complaint: raise a concern with the relevant data protection authority if you are not satisfied with our response.",
        ],
    },
    {
        title: "Marketing Communications",
        body: [
            "We only send marketing emails to people who have asked for them or who have an existing relationship with us. Every email includes an unsubscribe link, and opting out takes effect immediately.",
            "Unsubscribing from marketing does not stop essential service messages relating to an active project, such as invoices or delivery notifications.",
        ],
    },
    {
        title: "Third-Party Links",
        body: [
            "Our website and our content may link to other websites. We are not responsible for the privacy practices or content of those sites, and we encourage you to read their privacy policies before sharing information with them.",
        ],
    },
    {
        title: "Children's Privacy",
        body: [
            "Our services are intended for businesses and are not directed at children. We do not knowingly collect personal information from anyone under the age of eighteen. If you believe a child has provided us with personal information, please contact us and we will delete it.",
        ],
    },
    {
        title: "Changes to This Policy",
        body: [
            "We may update this Privacy Policy as our services, tools or legal obligations change. The date at the top of this page shows when it was last revised, and the updated version applies from the moment it is published here.",
            "Where changes are significant, we will make a reasonable effort to notify you directly.",
        ],
    },
]

export default function PrivacyPolicy() {
    return (
        <Layout headerStyle={2} footerStyle={3} breadcrumbTitle="Privacy Policy">
            <LegalContent
                lastUpdated="6 September 2026"
                intro="Your privacy matters to us. This policy explains, in plain language, what information creoKoncepts collects, why we collect it, who we share it with, and the control you have over it. We collect only what we need to run our business and serve our clients well."
                sections={sections}
            />
        </Layout>
    )
}
