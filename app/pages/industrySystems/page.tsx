import React from 'react';

const IndustrySystem = () => {
  return (
    <div className="bg-white md:mt-44 mt-32 text-[#084972]">
      {/* Hero Section */}
      <section className="bg-[#084972] text-white py-16 px-3 text-center">
        <h1 className="text-4xl font-bold mb-4">Industry System</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We don&apos;t just build solutions; we engineer digital systems tailored to your industry’s DNA.
        </p>
      </section>

      {/* Why Industry System */}
      <section className="py-14 px-3 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-[#084972]">Why an Industry System Approach?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Tailored Solutions',
              desc: 'No more one-size-fits-all. We design strategies and tools that reflect your industry’s uniqueness.',
            },
            {
              title: 'Deep Market Understanding',
              desc: 'We research your industry’s trends, players, and consumer behaviors for smarter strategy.',
            },
            {
              title: 'Optimized Performance',
              desc: 'Solutions that align with real-world operations to boost efficiency and ROI.',
            },
            {
              title: 'Future-Proofing',
              desc: 'Built to scale with your growth and adapt to industry shifts.',
            },
            {
              title: 'Competitive Advantage',
              desc: 'Stand out with digital systems that speak your industry’s language.',
            },
          ].map(({ title, desc }, index) => (
            <div
              key={index}
              className="bg-[#f8f9fa] border-l-4 border-[#ff7f50] p-6 rounded-md shadow-sm"
            >
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-700 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 px-3 bg-[#f3f7f9]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-[#084972]">How Our Industry System Works</h2>
          <ol className="list-decimal space-y-4 ml-6 text-gray-700">
            <li><strong>Immersive Research:</strong> We analyze markets, competitors, and industry challenges.</li>
            <li><strong>Stakeholder Collaboration:</strong> Your insights + our expertise = perfect alignment.</li>
            <li><strong>Custom Design:</strong> From UI to backend, we tailor the system to your exact needs.</li>
            <li><strong>Agile Development:</strong> Flexible, iterative builds that respond to feedback fast.</li>
            <li><strong>Performance Monitoring:</strong> We track, optimize, and grow your system’s impact.</li>
          </ol>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-14 px-3 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-[#084972]">Industries We Serve</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Healthcare',
              desc: 'Revolutionizing patient engagement and admin efficiency.',
            },
            {
              title: 'E-commerce & Retail',
              desc: 'Boosting digital sales and personalized customer journeys.',
            },
            {
              title: 'Real Estate',
              desc: 'Automating property management and enhancing lead conversion.',
            },
            {
              title: 'Financial Services',
              desc: 'Simplifying secure, intuitive platforms for finance workflows.',
            },
            {
              title: 'Education',
              desc: 'Modern e-learning tools that drive results and engagement.',
            },
          ].map(({ title, desc }, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md p-5 shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg text-[#084972] mb-2">{title}</h3>
              <p className="text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default IndustrySystem;
