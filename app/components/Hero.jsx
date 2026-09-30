import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[700px] overflow-hidden">

      <div className="absolute inset-0 z-0">
        <Image
          src="https://plus.unsplash.com/premium_photo-1681967039743-37dc3a27f4ce?q=80&w=2105&auto=format&fit=crop"
          alt="Dental care"
          fill
          priority
          className="object-cover"/>
      </div>

      <div className="absolute inset-0 z-10 bg-black/45" />

      <div className="relative z-20 mx-auto flex min-h-[700px] max-w-7xl items-center px-6 py-20">

        <div className="max-w-2xl text-white">

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-200">
            Premium Dental Care
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Your smile deserves exceptional care.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">
            Experience modern dentistry in a comfortable environment with
            personalized care from our experienced dental professionals.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <a
              href="#appointment"
              className="rounded-full bg-blue-700 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-800">
              Book an Appointment
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/60 bg-white/10 px-6 py-3 text-center font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-slate-900">
              Explore Services
            </a>

          </div>

          <div className="mt-10 flex flex-wrap gap-8 text-sm text-white/80">

            <div>
              <strong className="block text-xl text-white">
                15+
              </strong>
              Years Experience
            </div>

            <div>
              <strong className="block text-xl text-white">
                10k+
              </strong>
              Happy Patients
            </div>

            <div>
              <strong className="block text-xl text-white">
                4.9/5
              </strong>
              Patient Rating
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
