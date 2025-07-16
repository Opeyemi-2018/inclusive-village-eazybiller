import React from 'react'
import HomeSectionSeven from '../components/home-sections/HomeSectionSeven'

const Pricing = () => {
    const plans = ['Free Plan', 'Pro Plan', 'Business Plan']
    const features = [
        {
            name: 'Basic Expense Tracking',
            values: [true, true, true],
        },
        {
            name: 'Budget Planning',
            values: [true, true, true],
        },
        {
            name: 'AI-Driven Expense Categorization',
            values: [false, true, true],
        },
        {
            name: 'Custom Budget & Saving Goals',
            values: [false, true, true],
        },
        {
            name: 'Connect Bank Accounts',
            values: ['Up to 2', 'Unlimited', 'Unlimited'],
        },
        {
            name: 'Real-Time Alerts & Insights',
            values: [false, true, true],
        },
        {
            name: 'Support Level',
            values: ['Email Support', 'Priority Support', 'Dedicated Account Management'],
        },
    ]

    const renderCheck = (val: boolean | string) =>
        typeof val === 'boolean' ? (
            val ? (
                <span className="text-green-600 text-lg">✓</span>
            ) : (
                <span className="text-gray-400 text-lg">—</span>
            )
        ) : (
            <span className="text-gray-700">{val}</span>
        )

    return (
        <section className="pt-20">
            <HomeSectionSeven />

            <div className="py-32 px-3 md:px-5 mx-auto max-w-[80rem]">
                <div className="max-w-[40rem] mx-auto space-y-5 flex lg:items-center flex-col lg:text-center">
                    <span className="text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block w-fit">
                        Our Pricing
                    </span>
                    <h1 className="text-[40px] md:text-[50px] font-bold leading-tight">
                        Compare our plans
                    </h1>
                    <p className="text-[18px] md:text-[20px] text-gray-500">
                        Choose a plan that perfectly fits your unique goals and budget. Get powerful financial tools without any hidden fees or surprises.                    </p>
                </div>

                {/* DESKTOP FULL TABLE */}
                <div className="overflow-x-auto pt-12 hidden md:block">
                    <table className="min-w-full text-left border-separate border-spacing-y-3">
                        <thead>
                            <tr className="bg-gray-50 rounded-xl">
                                <th className="text-[22px] font-medium p-5 bg-gray-50 rounded-l-xl">Features</th>
                                {plans.map((plan, idx) => (
                                    <th
                                        key={idx}
                                        className={`text-[22px] font-medium p-5 bg-gray-50 ${idx === plans.length - 1 ? 'rounded-r-xl' : ''
                                            }`}
                                    >
                                        {plan}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((feature, idx) => (
                                <tr
                                    key={idx}
                                    className={`bg-gray-50 even:bg-white rounded-xl overflow-hidden ${idx === 0 ? 'pt-6' : ''
                                        }`}
                                >
                                    <td className="p-5 text-gray-700 rounded-l-xl">{feature.name}</td>
                                    {feature.values.map((val, i) => (
                                        <td
                                            key={i}
                                            className={`py-3 px-4 ${i === feature.values.length - 1 ? 'rounded-r-xl' : ''
                                                }`}
                                        >
                                            {renderCheck(val)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* MOBILE VIEW: 3 SMALL TABLES */}
                <div className="space-y-12 pt-12 md:hidden">
                    {plans.map((plan, planIndex) => (
                        <div key={planIndex} className="border rounded-xl overflow-hidden">
                            <table className="w-full border-separate border-spacing-y-2">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="p-4 text-left font-semibold bg-gray-100">Features</th>
                                        <th className="p-4 text-left font-semibold bg-gray-100">{plan}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {features.map((feature, i) => (
                                        <tr
                                            key={i}
                                            className="bg-gray-50 even:bg-white rounded-xl overflow-hidden"
                                        >
                                            <td className="p-4 text-gray-700">{feature.name}</td>
                                            <td className="p-4">{renderCheck(feature.values[planIndex])}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing
