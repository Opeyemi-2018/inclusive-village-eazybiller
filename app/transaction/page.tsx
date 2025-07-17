'use client';
import { BiMoneyWithdraw } from "react-icons/bi";
import { AiFillPayCircle } from "react-icons/ai";
import { FaWatchmanMonitoring } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";


const items = [
    {
        title: 'Live Monitoring',
        description: 'Live Monitoring of payment statuses, failures, and chargebacks',
        icon: <FaWatchmanMonitoring size={30} />,
    },
    {
        title: 'Withdrawal Module',
        description: 'Withdrawal Module for direct transfer to bank, wallet, or crypto',
        icon: <BiMoneyWithdraw size={30} />,
    },
    {
        title: 'Automated Payout Scheduling',
        description: 'Automated Payout Scheduling (daily, weekly, monthly)',
        icon: <AiFillPayCircle size={30} />,
    },
    {
        title: 'Downloadable Statements',
        description: 'Downloadable Statements for accounting and audits',
        icon: <IoMdDownload size={30} />,
    },
];

const Integration = () => {
    return (
        <section className="p-32 px-3 md:px-5">
            <div className="max-w-[60rem] mx-auto pt-16  flex lg:items-center flex-col lg:text-center">
              
                <h1 className="text-[40px] md:text-[50px] font-bold leading-tight">
                    Transaction & Fund Management
                </h1>
                <p className="text-[18px] md:text-[20px] text-gray-500">
                    Get full control of your funds, monitor transactions live, and manage payouts seamlessly.
                </p>
            </div>

            <div className="pt-12 mx-auto max-w-[80rem]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((item, index) => (
                        <div key={index} className="bg-orange-200 space-y-8 p-6 rounded-2xl">
                            <span className="bg-white p-4 rounded-md inline-block">
                                {item.icon}
                            </span>
                            <div>
                                <h2 className="text-[22px] font-semibold">{item.title}</h2>
                                <p className="text-[18px] text-gray-700">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Integration;
