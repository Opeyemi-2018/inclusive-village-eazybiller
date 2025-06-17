"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const SectionTwo = () => {
    // const [count, setCount] = useState(0);
    // const sectionRef = useRef<HTMLDivElement>(null);
    // const targetCount = 250;
    // const duration = 2000;
    // const isCounting = useRef(false);

    // useEffect(() => {
    //     const currentSection = sectionRef.current;  

    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             const [entry] = entries;
    //             if (entry.isIntersecting && !isCounting.current) {
    //                 isCounting.current = true;
    //                 setCount(0);
    //                 startCounting();
    //             } else if (!entry.isIntersecting) {
    //                 isCounting.current = false;
    //             }
    //         },
    //         { threshold: 0.5 }
    //     );

    //     if (currentSection) {
    //         observer.observe(currentSection);
    //     }

    //     return () => {
    //         if (currentSection) {
    //             observer.unobserve(currentSection);
    //         }
    //     };
    // }, []);


    // const startCounting = () => {
    //     const startTime = Date.now();

    //     const updateCount = () => {
    //         const elapsed = Date.now() - startTime;
    //         const progress = Math.min(elapsed / duration, 1);
    //         const currentCount = Math.floor(progress * targetCount);
    //         setCount(currentCount);

    //         if (progress < 1) {
    //             requestAnimationFrame(updateCount);
    //         } else {
    //             setCount(targetCount);
    //             isCounting.current = false;
    //         }
    //     };

    //     requestAnimationFrame(updateCount);
    // };

    return (
        <>
            <div className='bg-[#1c1a1e] py-14 md:px-6 px-3  text-white'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className='flex flex-col justify-center gap-5 max-w-2xl mx-auto items-center'>
                    <h1 className='text-white md:text-5xl text-3xl font-bold'>Circle of Creative Professionals.</h1>
                    <p className='text-gray-500 text-1xl md:ml-16 font-semibold'>We are committed to providing excellent customer service and will work closely with you throughout the development process to ensure that your Software Application meets your exact requirements.</p>
                </motion.div>
                <div className='flex items-center justify-center py-10'>
                    <Image src={"/images/about-image.jpg"} alt='about' width={500} height={500} />
                </div>

                <div className='max-w-4xl mx-auto space-y-3 text-gray-500 text-1xl'>
                    <p>
                        For industries aiming to integrate secure and scalable payment gateways, we offer end-to-end solutions — from API integration and fraud prevention to compliance and user-friendly interfaces.
                    </p>

                    <p>
                        We collaborate with banks to build innovative financial products that align with digital transformation goals. Whether it&apos;s mobile banking apps, loan automation systems, or AI-driven customer insights.
                    </p>
                </div>
            </div>
            {/* <motion.div
                    ref={sectionRef}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="shadow-md flex items-center bg-[#E1EACD] dark:bg-[#222222] dark:text-white capitalize space-x-6 hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                    <div>
                        <Image
                            src="/images/award-2.jpg"
                            width={600}
                            height={400}
                            alt="award"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="space-y-2 p-6">
                        <h1 className="md:text-3xl text-2xl">
                            {new Intl.NumberFormat().format(count)}K+
                        </h1>
                        <p>Projects Have Been Done!</p>
                    </div>
                </motion.div>

                <div
                    className="p-6 shadow-md dark:bg-[#222222] bg-[#F5F5F5] dark:text-white capitalize space-y-4 hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                    <div className="flex justify-end">
                        <HiOutlineLightBulb className="text-5xl p-3 rounded-full bg-blue-700 text-white" />
                    </div>
                    <h1 className="md:text-3xl text-2xl">cost efficiency</h1>
                    <p>
                        Flexible engagement models reduce overhead costs of
                        maintaining a full-time IT staff.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="p-6 shadow-md dark:bg-[#222222] bg-[#F1E7E7] dark:text-white capitalize space-y-4 hover:scale-105 transition-transform duration-300 ease-in-out">
                    <div className="flex justify-end">
                        <HiOutlineLightBulb className="text-5xl p-3 rounded-full bg-purple-700 text-white" />
                    </div>
                    <h1 className="md:text-3xl text-2xl">cost efficiency</h1>
                    <p>
                        Flexible engagement models reduce overhead costs of
                        maintaining a full-time IT staff.
                    </p>
                </motion.div>
            </div>
            <div className="lg:max-w-3xl  mx-auto px-3">
                <div className=" my-10 flex md:flex-row flex-col items-center justify-between md:gap-0 gap-3 capitalize bg-gray-200  dark:text-white dark:bg-[#222222] md:rounded-full rounded-md px-6 py-3">
                    <p className="">To Make Sure to Best Service Provide Our Clients.</p>
                    <Link href="/pages/about#team" scroll={true}>
                        <button className="rounded-full dark:bg-white dark:text-black text-white  bg-[#222222]  py-2 px-3 flex items-center gap-3">meet our expert <FiArrowUpRight /></button>
                    </Link>
                </div> */}

        </>
    );
};

export default SectionTwo;
