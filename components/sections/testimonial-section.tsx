"use client";

import TestimonialCard from "./testimonial-card";

const TestimonialSection = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <section className="flex flex-col gap-16 items-center p-0 mx-auto my-0 w-full max-w-[1512px] max-md:gap-10 max-md:p-5 max-sm:gap-6 max-sm:p-4">
        <h2 className="w-full text-4xl font-bold leading-10 text-center text-neutral-900 max-md:text-3xl max-sm:text-3xl">
          Why Managers Love Limpiar
        </h2>
        <TestimonialCard
          quote="Switching to Limpiar was one of the best decisions we made. Their innovative approach to cleaning and property management has streamlined our operations significantly."
          authorName="Michael Chen"
          authorRole="Operations Manager"
          imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/06e8fa1461a8a2312355a99a450af8a1b788c633"
          imageAlt="Michael Chen profile"
        />
      </section>
    </>
  );
};

export default TestimonialSection;
