import { Link } from "react-router-dom"
import { ArrowRight, Settings } from "lucide-react"

const ServicesSection = ({ services }) => {
  return (
    <section className="services-section py-16 md:py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold tracking-widest uppercase">
            <Settings size={14} /> What We Do
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Our Digital Services
          </h2>

          <p className="text-gray-600 max-w-4xl mx-auto text-lg">
            End-to-end digital services designed to scale your business,
            generate quality leads, and build strong online presence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, i) => (
            <Link key={i} to={s.link} className="group block h-full">
              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col">
                
                {/* IMAGE */}
                <div className="w-full h-36 md:h-40 bg-gray-100 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 text-center mb-2">
                    {s.title}
                  </h3>

                  <p className="text-gray-500 text-sm md:text-base text-center mb-4 flex-grow">
                    {s.desc}
                  </p>

                  <div className={`flex items-center justify-center gap-2 font-bold text-sm ${s.color}`}>
                    Learn More <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
