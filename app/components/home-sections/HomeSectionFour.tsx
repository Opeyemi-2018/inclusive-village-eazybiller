import Image from 'next/image'

const HomeSectionFour = () => {
    return (
        <section className='py-32 px-3 md:px-5'>
            <div className='max-w-[47rem] mx-auto space-y-5 flex lg:items-center flex-col lg:text-center'>
                <span className='text-black bg-orange-600 rounded-full px-3 py-2 rotate-[-6deg] inline-block w-fit'>
                    Feature
                </span>
                <h1 className='text-[40px] md:text-[50px] font-bold leading-tight'>Core Feature Suite</h1>
                <p className='text-[18px] md:text-[20px] text-gray-500'>Invoicing & Billing</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-12 mx-auto max-w-[80rem]">

                <div className="relative bg-[#faf7f2] space-y-6 overflow-hidden  pt-[40px] px-[40px] rounded-2xl ">
                    <div className='space-y-2'>
                        <h2 className="text-3xl font-semibold ">
                            Custom Invoice Builder
                        </h2>
                        <p className='text-[18px] text-[#414d48]'>Branded invoices with taxes, discounts, and custom notes</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <Image src={'/dash-2.svg'} alt='ring' width={504} height={339} className="w-[90%] h-[90%] " />
                    </div>
                </div>

                <div className="relative bg-[#faf7f2] space-y-6 pt-[40px] px-[40px] rounded-2xl ">
                    <div className='space-y-2'>
                        <h2 className="text-3xl font-semibold ">
                            Recurring Invoicing
                        </h2>
                        <p className='text-[18px] text-[#414d48]'>Auto-generate periodic invoices for subscriptions or retainers</p>
                    </div>
                    <div className='flex items-center justify-center pb-20'>
                        <Image src={'/connection.svg'} alt='ring' width={504} height={339} className="w-[90%] h-[60%] " />
                    </div>
                </div>

                <div className="relative bg-[#faf7f2] space-y-6  pt-[40px] px-[40px] rounded-2xl ">
                    <div className='space-y-2'>
                        <h2 className="text-3xl font-semibold ">
                            PDF & Email Delivery
                        </h2>
                        <p className='text-[18px] text-[#414d48]'>Send invoices via email or as downloadable PDFs</p>
                    </div>
                    <div className='flex items-center justify-center pb-20'>
                        <Image src={'/connection.svg'} alt='ring' width={504} height={339} className="w-[90%] h-[60%] " />
                    </div>
                </div>

                <div className="relative bg-[#faf7f2] space-y-6  pt-[40px] px-[40px]  rounded-2xl ">
                    <div className='space-y-2'>
                        <h2 className="text-3xl font-semibold ">
                            Automated Reminders
                        </h2>
                        <p className='text-[18px] text-[#414d48]'>Follow-up on unpaid invoices effortlessly</p>
                    </div>
                    <div className='flex items-center justify-center pb-20'>
                        <Image src={'/connection.svg'} alt='ring' width={504} height={339} className="w-[90%] h-[60%] " />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HomeSectionFour