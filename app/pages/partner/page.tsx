
import Image from "next/image"
import { FiArrowUpRight } from "react-icons/fi"
import { FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";
const partners = [
    {
        id: 1,
        icon: <FaBuilding className="text-white text-xl" />,
        bgColor: "bg-green-700",
        title: "Business Partners",
        description:
            "Strategic enterprises and financial institutions that collaborate with Inclusive Village to expand market reach, launch joint products, and deliver inclusive financial services tailored to emerging markets. Together, we design and deploy scalable business models that drive long-term growth.",
    },
    {
        id: 2,
        icon: <FaMapMarkerAlt className="text-white text-xl" />,
        bgColor: "bg-purple-700",
        title: "Service Partners",
        description:
            "Operational partners including KYC/AML providers, customer support platforms, logistics, and payment processors who help us enhance customer experience, ensure regulatory compliance, and enable seamless service delivery across our fintech ecosystem.",
    },
    {
        id: 3,
        icon: <BiNetworkChart className="text-white text-xl" />,
        bgColor: "bg-blue-700",
        title: "Technology Partners",
        description:
            "Leading software vendors, API providers, and SaaS platforms who integrate their technology with ours to power digital banking, smart wallets, real-time analytics, and embedded finance capabilities—accelerating innovation across Africa and beyond.",
    },
];

const Partner = () => {
    return (
        <div className='md:pt-40 pt-28 min-h-screen'>
            <div className='max-w-6xl mx-auto flex items-center px-3 pb-10'>
                <div className="space-y-6">
                    <h1 className="font-semibold">Helping innovators unlock growth together</h1>
                    <h2 className="md:text-4xl text-2xl font-bold">Partner with Inclusive Village</h2>
                    <p className="text-1xl">Elevate your business with the Inclusive Village Partner Program, a collaborative ecosystem designed to help you access new customers, avoid operational errors, and accelerate growth.</p>

                    <button className="flex items-center gap-3 bg-black text-white dark:bg-white dark:text-black p-4 text-[18px] font-semibold  hover:bg-gray-800  transition">
                        Become a Partner <FiArrowUpRight />
                    </button>

                </div>

                <div className="md:inline hidden">
                    <Image src="/images/iv-logo-no-bg.png" alt="about hero" width={600} height={600} />
                </div>

            </div>

            <div className="bg-gray-100 py-20 px-3">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                    {partners.map(({ id, icon, bgColor, title, description }) => (
                        <div
                            key={id}
                            className="bg-white p-6  shadow-sm hover:shadow-md transition duration-200"
                        >
                            <div className={`w-12 h-12 flex items-center justify-center rounded-sm mb-4 ${bgColor}`}>
                                {icon}
                            </div>
                            <h3 className="font-semibold text-black text-lg mb-2">{title}</h3>
                            <p className="text-gray-600 mb-4">{description}</p>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Partner