import { Check } from "lucide-react";

const LimpiarAdvantage = () => {
  const features = [
    { title: "Centralized Operations", description: "Streamline your operations with our unified dashboard" },
    { title: "Enhanced Tenant Retention", description: "Keep your tenants happy with superior service quality" },
    { title: "Eco-friendly Services", description: "Sustainable solutions for a better tomorrow" },
    { title: "On-Demand Solutions", description: "Flexible service available when you need them" },
    { title: "Advanced Technology", description: "Cutting-edge tools for optimal service" },
    { title: "Property Management", description: "Comprehensive solutions for property maintenance" },
    { title: "Rapid Response", description: "Quick and efficient service deployment" },
    { title: "Performance Metrics", description: "Data-driven insights for better decision making" },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-16 ">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center">The Limpiar Advantage</h2>
        <p className="text-gray-600 mt-2 text-center">
          Experience the difference with our comprehensive suite of professional services
          designed to elevate your property management.
        </p>
        <div className="h-1 w-10 mx-auto mt-4 mb-8"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-white p-6 border border-gray-200 rounded-lg"
          >
            <div className="mb-2 flex items-center">
              <Check className="text-green-500 w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 mt-1">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LimpiarAdvantage;
