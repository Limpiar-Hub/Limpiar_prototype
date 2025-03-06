
import Image from "next/image"

export default function TestimonialSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Heading with underline decoration */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Why Managers Love Limpiar
          </h2>
          <div className="h-1 w-12  mx-auto"></div>
        </div>

        {/* Testimonial Card */}
        <div className="bg-[#111] rounded-2xl p-8 md:p-12 relative overflow-hidden lg:py-24 lg:pr-24 lg:pl-16  ">
          <span className="text-gray-800 text-[120px] leading-none font-serif absolute top-4 left-8">"</span>

          <div className="grid md:grid-cols-[auto,1fr] gap-8 md:gap-12 items-center relative lg:grid-cols-2">
            {/* Text Content */}
            <div className="flex flex-col gap-8 max-w-[664px] max-md:max-w-full ">
              <blockquote>
                <p className="text-3xl font-bold leading-9 text-white max-md:text-2xl max-sm:text-xl">
                  Switching to Limpiar was one of the best decisions we made. Their innovative approach to cleaning and
                  property management has streamlined our operations significantly.
                </p>
              </blockquote>
              <div>
                <div className="text-white font-medium text-lg">Michael Chen</div>
                <div className="text-gray-400">Operations Manager</div>
              </div>
            </div>

            {/* Image - Positioned to the right on desktop */}
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden md:justify-end md:flex lg:justify-self-end lg:w-60 lg:h-60">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/06e8fa1461a8a2312355a99a450af8a1b788c633"
                alt="Michael Chen"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
