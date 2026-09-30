import Image from "next/image";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialization: "Cosmetic & Restorative Dentistry",
    experience: "12+ years of experience",
    image: "https://plus.unsplash.com/premium_photo-1723514536306-26fe5c4adeb7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Dr. Michael Chen",
    specialization: "Implant & General Dentistry",
    experience: "10+ years of experience",
    image: "/images/doctors/doctor-2.jpg",
  },
  {
    name: "Dr. Emily Williams",
    specialization: "Orthodontics & Pediatric Dentistry",
    experience: "8+ years of experience",
    image: "/images/doctors/doctor-3.jpg",
  },
  
];

export default function Doctors() {
  return (
    <section id="doctors" className=" scroll-mt-24 bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Meet Our Doctors
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Experienced hands. Personalized care.
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Our experienced dental professionals combine clinical expertise
            with a gentle, patient-first approach.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"/>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {doctor.name}
                </h3>

                <p className="mt-2 font-medium text-blue-700">
                  {doctor.specialization}
                </p>

                <p className="mt-3 text-sm text-slate-500">
                  {doctor.experience}
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  Dedicated to providing comfortable, modern, and
                  personalized dental care for every patient.
                </p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
