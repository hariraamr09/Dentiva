import Image from "next/image";

const testimonials = [
  {
    name: "Jessica Miller",
    image: "/images/testimonials/patient-1.jpg",
    rating: 5,
    review:
      "The entire experience at Dentiva was wonderful. The team was incredibly welcoming, professional, and made me feel comfortable throughout my treatment.",
  },
  {
    name: "Daniel Wilson",
    image: "https://images.unsplash.com/photo-1611695434369-a8f5d76ceb7b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YSUyMHNtaWxlJTIwaW1hZ2UlMjBoZWFkc2hvdHxlbnwwfHwwfHx8MA%3D%3D",
    rating: 5,
    review:
      "I had an excellent experience with the Dentiva team. Everything was explained clearly and the treatment was comfortable and professional.",
  },
  {
    name: "Sophia Anderson",
    image: "/images/testimonials/patient-3.jpg",
    rating: 5,
    review:
      "From the beautiful clinic to the caring staff, everything felt premium and patient-focused. I'm very happy with my results.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Patient Stories
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Trusted by our patients
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            See why patients choose Dentiva for comfortable,
            personalized dental care.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"/>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    {testimonial.name}
                  </h3>

                  <div
                    className="mt-1 text-sm text-yellow-500"
                    aria-label={`${testimonial.rating} out of 5 stars`}
                  >
                    {"★".repeat(testimonial.rating)}
                  </div>
                </div>
              </div>

              <p className="mt-6 leading-7 text-slate-600">
                “{testimonial.review}”
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
