
import { FaCheck } from "react-icons/fa6";

const pricingPlans = [
    {
        title: "Free plan",
        price: "FREE",
        monthly: null,
        description: "Great for starting with essential finance tools and maximizing your potential.",
        button: "Get started",
        features: [
            "Basic expense tracking",
            "Budget planning",
            "Connect up to 2 bank",
            "Email support",
        ],
        isPopular: false,
        bgColor: "bg-white",
        // textColor: "text-orange-600",
        buttonColor: "bg-orange-600 text-black",
    },
    {
        title: "Pro plan",
        price: "$200",
        monthly: "/month",
        description: "For individuals who want smarter insights and innovative automation solutions.",
        button: "Choose Plan",
        features: [
            "AI expense categorization",
            "Budget & savings goals",
            "Connect unlimited bank",
            "Real-time spending insights",
        ],
        isPopular: true,
        bgColor: "bg-orange-600",
        textColor: "text-black",
        buttonColor: "bg-white text-orange-600",
    },
    {
        title: "Business plan",
        price: "$400",
        monthly: "/month",
        description: "Designed for businesses to streamline financial management.",
        button: "Choose Plan",
        features: [
            "All Pro features Business Dashboard",
            "Invoice & billing automation",
            "Role-based multi-user access",
            "Dedicated account manager",
        ],
        isPopular: false,
        bgColor: "bg-white",
        // textColor: "text-orange-600",
        buttonColor: "bg-orange-600 text-black",
    },
];

const HomeSectionSeven = () => {
    return (
        <section className='py-32 px-3 md:px-5 bg-[#faf7f2]'>
            <div className='max-w-[47rem] space-y-5 flex flex-col'>
                <span className='text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block w-fit'>
                    Key Features
                </span>
                <h1 className='text-[40px] md:text-[50px] font-bold leading-tight'>Flexible pricing plans tailored to your needs</h1>
                <p className='text-[18px] md:text-[20px] text-gray-500'>Choose a plan that perfectly fits your unique goals and budget.</p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:gap-6 gap-8 pt-12">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className={`${plan.bgColor}  rounded-3xl shadow-md p-6  flex flex-col relative`}
                    >
                        {plan.isPopular && (
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-xs p-3 rounded-lg font-semibold">
                                Most Popular
                            </span>
                        )}

                        <div className="space-y-3">
                            <h3 className={`text-[24px] font-semibold ${plan.textColor}`}>{plan.title}</h3>
                            <p className={`mt-2 text-[18px] ${plan.isPopular ? "text-black" : "text-gray-700"}`}>
                                {plan.description}
                            </p>
                        </div>

                        <p className={`text-3xl font-bold my-7 ${plan.textColor}`}>
                            {plan.price}
                            {plan.monthly && (
                                <span className="text-base font-normal"> {plan.monthly}</span>
                            )}
                        </p>

                        <button className={`${plan.buttonColor} text-[20px] my-5 rounded-full py-3 font-semibold`}>
                            {plan.button}
                        </button>

                        <ul className={`text-left mt-6 space-y-3 text-sm ${plan.isPopular ? "text-black" : "text-gray-800"}`}>
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <FaCheck size={25} className="" />
                                    <span className="text-[18px]">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default HomeSectionSeven