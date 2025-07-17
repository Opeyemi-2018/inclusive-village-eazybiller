import Image from "next/image"


const Payment = () => {
    return (
        <section className="px-3 md:px-5 pt-32 lg:pt-56 pb-20 space-y-20 bg-[#faf7f2]">
            <div className='max-w-[47rem] mx-auto'>
                <h1 className='text-[40px] md:text-[50px] font-bold leading-tight text-center'>Payments & Collections</h1>
            </div>
            <div className="h-[30%]">
                <Image src={'/robot.avif'} alt="robot" width={700} height={800} className="w-full rounded-2xl" />
            </div>

            <div className="flex flex-col mt-10 mx-auto max-w-[60rem]  text-gray-800">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Payments & Collections</h3>
                <div className="flex flex-col gap-4 text-[16px] md:text-[18px]">
                    <div>
                        <p className="font-semibold">Payment Links</p>
                        <p className="text-gray-600">Share secure URLs via SMS, chat, or email</p>
                    </div>
                    <div>
                        <p className="font-semibold">Multi-Gateway Integration</p>
                        <p className="text-gray-600">Stripe, PayPal, Flutterwave, Razorpay & more</p>
                    </div>
                    <div>
                        <p className="font-semibold">Card & Wallet Support</p>
                        <p className="text-gray-600">Accept Apple Pay, Google Pay, debit/credit cards</p>
                    </div>
                    <div>
                        <p className="font-semibold">QR Code Payments</p>
                        <p className="text-gray-600">Generate scannable codes for physical/offline billing</p>
                    </div>
                    <div>
                        <p className="font-semibold">Split Payments</p>
                        <p className="text-gray-600">Automatically divide revenue among multiple stakeholders</p>
                    </div>
                    <div>
                        <p className="font-semibold">Buy Now, Pay Later (BNPL)</p>
                        <p className="text-gray-600">Offer installment options via integrated BNPL providers</p>
                    </div>
                </div>
            </div>

            

        </section>
    )
}

export default Payment
