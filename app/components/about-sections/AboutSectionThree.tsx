import Image from 'next/image'

const AboutSectionThree = () => {
    return (
        <section className='py-32 bg-[#faf7f2] px-3 md:px-5'>
            <div className='max-w-[35rem] mx-auto space-y-5 flex  lg:items-center flex-col lg:text-center'>
                <span className='text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block w-fit'>
                    Revenue
                </span>
                <h1 className='text-[40px] md:text-[50px] font-bold leading-tight'>Revenue Enablers</h1>
            </div>

            <div className="flex flex-col max-w-[60rem] mx-auto lg:flex-row gap-6 pt-12">
                <div className="relative bg-white    p-6 rounded-2xl ">
                    <Image src={'/ring.svg'} alt='ring' width={700} height={700} />
                    <div className='space-y-2'>
                        <h2 className="text-2xl font-semibold ">
                            Passive Income
                        </h2>
                        <p> from recurring subscriptions or affiliate systems.</p>
                    </div>
                </div>

                <div className="relative bg-white    p-6 rounded-2xl ">
                    <Image src={'/ring.svg'} alt='ring' width={700} height={700} />
                    <div className='space-y-2'>
                        <h2 className="text-2xl font-semibold ">
                            Multi-Tier Pricing
                        </h2>
                        <p>for account-based feature restriction.</p>
                    </div>
                </div>

                <div className="relative bg-white    p-6 rounded-2xl ">
                    <Image src={'/ring.svg'} alt='ring' width={700} height={700} />
                    <div className='space-y-2'>
                        <h2 className="text-2xl font-semibold ">
                            Comprehensive Audit Logs
                        </h2>
                        <p>for regulatory and compliance reviews.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSectionThree