import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      title: "Emergency Cleaning",
      image: "/Liliana.png",
    },
    {
      title: "Pressure Washing",
      image: "/fleet.png",
    },
    {
      title: "Porter/Janitorial",
      image: "/bin.png",
    },
    {
      title: "Disinfection Services",
      image: "/quarantine.png",
    },
    {
      title: "Supply Management",
      image: "/cleaner.png",
    },
    {
      title: "Construction Cleaning",
      image: "/ladder.png",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-3">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base">
          Experience the difference with our comprehensive suite of professional
          services designed to elevate your property management.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden aspect-square md:aspect-[4/5]"
          >
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              fill
              className="object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div> */}
            {/* <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-white bg-opacity-70  backdrop-filter backdrop-blur-md">
              <h3 className="text-2xl font-medium">{service.title}</h3>
            </div> */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg- bg-opacity-70 dark:bg-gray-900 dark:bg-opacity-70 backdrop-filter backdrop-blur-md">
  <h3 className="text-2xl font-medium  text-white dark:text-white">{service.title}</h3>
</div>

          </div>
        ))}
      </div>
    </section>
  );
}
