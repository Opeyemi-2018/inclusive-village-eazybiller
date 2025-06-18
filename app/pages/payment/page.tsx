"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
    FaSyncAlt,
    FaCalendarAlt,
    FaUsers,
    FaDollarSign
} from "react-icons/fa";
import { FiArrowUpRight } from 'react-icons/fi';
import { MdOutlinePayments } from "react-icons/md";
import { FcAcceptDatabase } from "react-icons/fc";
import { GrGateway } from "react-icons/gr";
import { CgInsights } from "react-icons/cg";

const paymentGaps = [
    {
        id: 1,
        icon: <FaSyncAlt className="text-white text-xl" />,
        bgColor: "bg-blue-700",
        title: "Prevent lost revenue",
        description:
            "Reduce revenue leakage by automating chargeback management, reconciling payments in real time, and consolidating transactions across gateways and currencies so nothing gets lost between payment, billing, and accounting systems."
    },
    {
        id: 2,
        icon: <FaCalendarAlt className="text-white text-xl" />,
        bgColor: "bg-blue-700",
        title: "Reclaim wasted time",
        description:
            "Stop reconciling deposits manually. Automate processes across borders, banks, and billing systems."
    },
    {
        id: 3,
        icon: <FaUsers className="text-white text-xl" />,
        bgColor: "bg-blue-700",
        title: "Reduce team frustration",
        description:
            "Keep systems in sync by integrating Maxio Payments into your billing workflows. Automate multi-currency management and reconciliation to reduce manual cross-currency fixes for your finance and customer teams."
    },
];

const SaasPayment = [
    {
        id: 1,
        icon: <MdOutlinePayments className="text-white text-xl" />,
        bgColor: "bg-blue-700",
        title: "Create recurring payment plans",
        description:
            "Let customers pay on their schedule with recurring payment plans that automate invoicing, collections, and renewals."
    },
    {
        id: 2,
        icon: <FaDollarSign className="text-white text-xl" />,
        bgColor: "bg-blue-700",
        title: "Automate invoicing & billing",
        description:
            "Reduce manual billing effort with templates, tax rules, and recurring invoice automation."
    },
    {
        id: 3,
        icon: <FcAcceptDatabase className="text-white text-xl" />,
        bgColor: "bg-blue-700",
        title: "Accept multiple payment options",
        description:
            "Accept ACH, credit cards, multi-currency transactions, and international payment methods through built-in, PCI-compliant payment gateways."
    },
    {
        id: 4,
        icon: <GrGateway className="text-white text-xl" />,
        bgColor: "bg-blue-700",
        title: "Use built-in payment gateways",
        description:
            "Skip third-party processors and consolidate payment operations with integrated global gateways."
    },
    {
        id: 5,
        icon: <FaDollarSign className="text-white text-xl" />,
        bgColor: "bg-blue-700",
        title: "Keep up with upgrades and downgrades",
        description:
            "Automatically adjust billing, payments, and revenue schedules when customers change plans."
    },
    {
        id: 6,
        icon: <CgInsights className="text-white text-xl" />,
        bgColor: "bg-blue-700",
        title: "Gain real-time payment insights",
        description:
            "Monitor payments, reconciliations, and chargebacks with built-in reporting for real-time financial visibility and control."
    },
];

const Payment = () => {
    return (
        <div className='md:pt-40 pt-28 min-h-screen'>
            <div className='px-3 max-w-6xl mx-auto'>
                <div className='flex items-center md:flex-row flex-col justify-between gap-6'>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true, amount: 0.5 }}
                        className='md:space-y-7 space-y-5 flex-1'
                    >
                        <h1 className='md:text-2xl text-1xl font-semibold'>SaaS Payments</h1>
                        <h2 className='md:text-5xl text-2xl font-bold'>End-to-End Payments Lifecycle Management</h2>
                        <p className='text-1xl'>
                            Inclusive Village Payments automates disputes, reconciles deposits, and supports multi-currency transactions and international payment methods—so SaaS businesses can streamline global payment operations and close books faster.
                        </p>
                    </motion.div>

                    <div className='flex-1'>
                        <Image src="/images/subscription-hero-img.webp" alt="about hero" width={500} height={500} />
                    </div>
                </div>
            </div>

            <section className="py-28 px-3 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                        Inclusive Payments fills the gaps of your current payment process
                    </h2>
                    <p className="text-gray-700 text-base mb-12 max-w-3xl">
                        Managing payments isn’t as simple as sending an invoice and waiting for the funds. Maxio Payments fills critical gaps by automating reconciliation, reducing disputes, and simplifying global payment operations.
                    </p>

                    <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
                        {paymentGaps.map(({ id, icon, bgColor, title, description }) => (
                            <div key={id} className="bg-gray-100 p-6 shadow-sm hover:shadow-md transition duration-200">
                                <div className={`w-12 h-12 flex items-center justify-center rounded-sm mb-4 ${bgColor}`}>
                                    {icon}
                                </div>
                                <h3 className="font-semibold text-black text-lg mb-2">{title}</h3>
                                <p className="text-gray-700 text-1xl">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='pb-20 pt-16 px-3'>
                <div className='flex items-center md:flex-row md:gap-0 gap-8 flex-col max-w-6xl mx-auto'>
                    <div className='flex-1 space-y-8'>
                        <h1 className='font-bold md:text-5xl text-3xl'>Controller-approved payment platform insights</h1>
                        <p className='text-gray-700'>Inclusive Village Payments reduces manual effort and increases visibility with a unified, international-ready platform. Easily track payments, invoices, and contracts across currencies and geographies, all in real time, so your finance team spends less time in spreadsheets and more time driving strategy.</p>
                    </div>
                    <div className='flex-1'>
                        <Image src="/images/maxio_payments-img.webp" alt="about hero" className='md:inline hidden' width={500} height={500} />
                    </div>
                </div>
            </section>

            <section className="relative h-fit overflow-hidden">
                {/* Background Image */}
                <Image
                    src="/images/infra.jpg"
                    alt="Infra background"
                    fill
                    className="object-cover z-0"
                />

                {/* Yellow overlay */}
                <div className="absolute inset-0 bg-[#00304e]/90 z-10"></div>

                {/* Content */}
                <div className="relative z-20 md:p-20 px-3 py-16 flex justify-between items-center">
                    <div className="space-y-6 flex-1">
                        <h1 className="md:text-5xl text-3xl font-bold text-white">
                            Experience seamless payment operations with Inclusive Village
                        </h1>
                        <Link href="/pages/solution#contact" scroll={true}>
                            <button className="flex items-center gap-3 bg-black text-white p-4 text-[18px] font-semibold hover:bg-gray-800 transition">
                                Schedule a free consultation <FiArrowUpRight />
                            </button>
                        </Link>
                    </div>

                    <div className="md:inline hidden">
                        <Image
                            src="/images/iv-logo-no-bg.png"
                            alt="about hero"
                            width={350}
                            height={300}
                        />
                    </div>
                </div>
            </section>


            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:py-10 py-6 md:text-4xl text-black font-bold mb-4">
                        Integrated SaaS payments, billing automation, and reporting
                    </h2>

                    <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
                        {SaasPayment.map(({ id, icon, bgColor, title, description }) => (
                            <div key={id} className="bg-gray-100 p-6 rounded shadow-sm hover:shadow-md transition duration-200">
                                <div className={`w-12 h-12 flex items-center justify-center rounded-sm mb-4 ${bgColor}`}>
                                    {icon}
                                </div>
                                <h3 className="font-semibold text-black text-lg mb-2">{title}</h3>
                                <p className="text-gray-700 text-sm">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* New Section: Remittance, Gateway & 3rd Party Integration */}
            <section className="py-24 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                        Powerful Integrations and Global Remittance Support
                    </h2>
                    <p className="text-gray-700 max-w-3xl mb-12">
                        Inclusive Village Payments goes beyond standard processing to support international remittance, seamless third-party integration, and full gateway control—giving SaaS businesses the flexibility and reach they need to scale globally.
                    </p>

                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="bg-white p-6 shadow-md rounded-md hover:shadow-lg transition">
                            <div className="w-12 h-12 flex items-center justify-center bg-blue-700 rounded-sm mb-4">
                                <FaDollarSign className="text-white text-xl" />
                            </div>
                            <h3 className="text-lg font-semibold text-black mb-2">International Remittance</h3>
                            <p className="text-gray-700 text-sm">
                                Send and receive payments globally with real-time currency conversion and compliance-ready workflows. Ensure quick, transparent remittance experiences for your customers and partners worldwide.
                            </p>
                        </div>

                        <div className="bg-white p-6 shadow-md rounded-md hover:shadow-lg transition">
                            <div className="w-12 h-12 flex items-center justify-center bg-blue-700 rounded-sm mb-4">
                                <GrGateway className="text-white text-xl" />
                            </div>
                            <h3 className="text-lg font-semibold text-black mb-2">Custom Payment Gateway</h3>
                            <p className="text-gray-700 text-sm">
                                Route transactions through multiple gateways to reduce failure rates and optimize costs. Our built-in gateway system gives you total control and visibility over your payment flow.
                            </p>
                        </div>

                        <div className="bg-white p-6 shadow-md rounded-md hover:shadow-lg transition">
                            <div className="w-12 h-12 flex items-center justify-center bg-blue-700 rounded-sm mb-4">
                                <FaSyncAlt className="text-white text-xl" />
                            </div>
                            <h3 className="text-lg font-semibold text-black mb-2">3rd Party Integration</h3>
                            <p className="text-gray-700 text-sm">
                                Easily integrate with CRM, ERP, accounting tools, fraud detection services, and other business platforms. Our flexible API layer ensures you can connect with the tools you already trust.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Payment;
