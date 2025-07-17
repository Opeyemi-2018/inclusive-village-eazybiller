

const HomeSectionSix = () => {
    return (
        <section className="py-24 px-4 md:px-8 bg-[#f9fbfd] text-gray-800">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16">
                    Platform Features
                </h2>

                <div className="grid md:grid-cols-2 gap-10">
                    
                    <div className="bg-[#faf7f2] p-8 rounded-2xl">
                        <h3 className="text-xl md:text-2xl font-medium mb-6">User Features</h3>
                        <div className="space-y-4 text-base leading-relaxed text-gray-700">
                            <p>Email Login</p>
                            <p>Password Recovery</p>
                            <p>KYC Uploads</p>
                            <p>Transaction Logs</p>
                            <p>Wallet Overview</p>
                            <p>Notification Preferences</p>
                        </div>
                    </div>

                    
                    <div className="bg-[#faf7f2] p-8 rounded-2xl">
                        <h3 className="text-xl md:text-2xl font-medium mb-6">Admin Features</h3>
                        <div className="space-y-4 text-base leading-relaxed text-gray-700">
                            <p>Analytics Dashboard</p>
                            <p>Role-Based Access Control</p>
                            <p>Multi-Currency & Fee Setup</p>
                            <p>SMTP & Email Templates</p>
                            <p>Gateway Monitoring</p>
                            <p>SEO & Image Tools</p>
                            <p>Live Chat & Support</p>
                            <p>Server & Cache Management</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSectionSix;
