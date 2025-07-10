import { FaStripeS } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

const integrations = [
    { color: "blue" },
    { color: "orange" },
    { color: "pink" },
    { color: "red" },
    { color: "green" },
    { color: "yellow" },
    { color: "brown" },
    { color: "gray" },
    { color: "pink" },
    { color: "green" },
    { color: "red" },
    { color: "blue" },
    { color: "orange" },

];

const HomeSectionSix = () => {
    return (
        <section className='py-32 px-3 md:px-5'>
            <div className='max-w-[47rem] mx-auto space-y-5 flex lg:items-center flex-col lg:text-center'>
                <span className='text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block w-fit'>
                    Integration
                </span>
                <h1 className='text-[40px] md:text-[50px] font-bold leading-tight'>
                    Connecting your favorite tool effortlessly
                </h1>
            </div>

            <div className="bg-[#faf7f2] p-6 mt-12 grid lg:grid-cols-8 md:grid-cols-6 grid-cols-3 gap-6 rounded-xl max-w-[70rem] mx-auto">
                {integrations.map((item, index) => (
                    <div key={index} className="p-8 rounded-xl bg-white flex justify-center items-center">
                        <FaStripeS size={40} color={item.color || undefined} />
                    </div>
                ))}
            </div>

            <div className="pt-16 flex items-center justify-center">
                <button className="rounded-full pl-5 pr-2 py-2 bg-orange-600 text-[#0b0b0b] text-[18px] flex items-center gap-3">
                    Try for free
                    <span className="bg-white p-2 rounded-full">
                        <IoIosArrowRoundForward size={25} className="text-black" />
                    </span>
                </button>
            </div>
        </section>
    );
};

export default HomeSectionSix;
