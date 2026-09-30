const services = [
  {
    icon: "🦷",
    title: "General Dentistry",
    description:
      "Comprehensive dental care including checkups, cleanings, fillings, and preventive treatments.",
  },
  {
    icon: "✨",
    title: "Cosmetic Dentistry",
    description:
      "Enhance your smile with personalized cosmetic treatments designed to improve appearance and confidence.",
  },
  {
    icon: "🔹",
    title: "Dental Implants",
    description:
      "Restore missing teeth with natural-looking and durable dental implant solutions.",
  },
  {
    icon: "😁",
    title: "Teeth Whitening",
    description:
      "Brighten your smile with professional whitening treatments designed for safe and noticeable results.",
  },
  {
    icon: "🪥",
    title: "Orthodontics",
    description:
      "Straighten and align your teeth with modern orthodontic treatment options.",
  },
  {
    icon: "👶",
    title: "Pediatric Dentistry",
    description:
      "Gentle and friendly dental care designed specifically for children and growing smiles.",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Our Services
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Complete care for your smile
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            From preventive care to advanced cosmetic treatments, our team
            provides personalized dental solutions for every stage of life.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                {service.icon}</div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {service.title}</h3>

              <p className="mt-3 leading-7 text-slate-600">
                {service.description}</p>

              <a href="#appointment"
                className="mt-5 inline-block text-sm font-semibold text-blue-700 transition group-hover:text-blue-900">
                Book this service → </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
