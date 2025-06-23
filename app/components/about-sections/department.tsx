import { FaDollarSign, FaRocket, FaUser, FaChartLine } from "react-icons/fa";

const departments = [
  {
    id: 1,
    icon: <FaDollarSign className="text-white text-xl" />,
    bgColor: "bg-green-700",
    title: "Finance",
    description:
      "Streamline your accounting function, leverage deep financial insights, and chart a clear path to profitability with Maxio.",
  },
  {
    id: 2,
    icon: <FaRocket className="text-white text-xl" />,
    bgColor: "bg-purple-700",
    title: "Product",
    description:
      "Leverage flexible billing and reporting to drive adoption, usage, and retention across all your product lines.",
  },
  {
    id: 3,
    icon: <FaUser className="text-white text-xl" />,
    bgColor: "bg-blue-700",
    title: "Founders",
    description:
      "Execute any GTM strategy, extend your cash runway, and lead your business confidently with Maxio.",
  },
  {
    id: 4,
    icon: <FaChartLine className="text-white text-xl" />,
    bgColor: "bg-orange-500",
    title: "Developers",
    description:
      "Tackle billing quickly. Give Product and Finance the tools they need so you can get back to building amazing products.",
  },
];

const DepartmentSection = () => {
  return (
    <section className="bg-gray-100 py-24 px-3">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-black font-bold mb-10">Inclusive Village by Department</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {departments.map(({ id, icon, bgColor, title, description }) => (
            <div key={id} className="bg-white p-6 shadow-sm hover:shadow-md transition duration-200">
              <div className={`w-12 h-12 flex items-center justify-center rounded-sm mb-4 ${bgColor}`}>
                {icon}
              </div>
              <h3 className="font-semibold text-black text-lg mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentSection;
