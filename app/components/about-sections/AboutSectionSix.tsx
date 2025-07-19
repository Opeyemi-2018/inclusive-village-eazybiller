import Image from "next/image";
const securityAndCompliance = [
    {
        title: "Security & Compliance",
        description: "AfriPay+ is built with enterprise-grade protection in mind:",
        features: [
            "PCI-DSS Compliant",
            "Data Encryption at Rest and in Transit",
            "Two-Factor Authentication (2FA)",
            "Fraud Detection & Prevention Tools"
        ]
    }
];
const AboutSectionSix = () => {
    return (
        <section className="mx-auto max-w-[60rem] py-32  px-3 md:px-5">
                <h1 className="md:text-5xl text-3xl mb-20 text-center text-[40px] md:text-[50px] font-bold leading-tight">
                    Security & Compliance
                </h1>
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
                <div className="w-full lg:w-1/2">
                    <Image
                        src="/security.jpg"
                        alt="Security"
                        width={600}
                        height={600}
                        className="rounded-xl w-full h-72 object-cover "
                    />
                </div>
                <div className="w-full lg:w-1/2">
                    {securityAndCompliance.map((item, index) => (
                        <div key={index}>
                            <p className="text-gray-700 mb-6 text-lg">{item.description}</p>
                            <ul className="space-y-4">
                                {item.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="text-orange-600 mt-1">•</span>
                                        <span className="text-base text-gray-800">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>


    )
}

export default AboutSectionSix