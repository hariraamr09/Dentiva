import Image from "next/image";

const treatments = [
  {
    title: "Teeth Whitening",
    description:
      "Professional whitening treatment for a brighter and more confident smile.",
    beforeImage:
      "https://images.unsplash.com/photo-1679741919483-acf704e00495?q=80&w=1625&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1769559893692-c6d0623bf8e4?q=80&w=1625&auto=format&fit=crop",
  },
  {
    title: "Smile Makeover",
    description:
      "A personalized combination of cosmetic treatments designed to transform the smile.",
    beforeImage: "/images/before-after/smile-before.jpg",
    afterImage: "/images/before-after/smile-after.jpg",
  },
  {
    title: "Dental Restoration",
    description:
      "Restorative treatment designed to improve both the appearance and function of damaged teeth.",
    beforeImage: "/images/before-after/restoration-before.jpg",
    afterImage: "/images/before-after/restoration-after.jpg",
  },
];

export default function BeforeAfter() {
  return (
    <section
      id="before-after"
      className="scroll-mt-24 bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">


        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Before & After
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Results you can see
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Explore examples of how personalized dental treatments can
            transform smiles and restore confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {treatments.map((treatment) => (
            <article
              key={treatment.title}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

              <div className="grid grid-cols-2">

                <div className="relative h-64 w-full bg-slate-100">
                  <Image
                    src={treatment.beforeImage}
                    alt={`${treatment.title} before treatment`}
                    fill
                    sizes="50vw"
                    className="object-contain"/>

                  <span className="absolute left-3 top-3 z-10 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white">
                    Before
                  </span>
                </div>

                <div className="relative h-64 w-full bg-slate-100">
                  <Image
                    src={treatment.afterImage}
                    alt={`${treatment.title} after treatment`}
                    fill
                    sizes="50vw"
                    className="object-contain"/>

                  <span className="absolute right-3 top-3 z-10 rounded-full bg-blue-700/90 px-3 py-1 text-xs font-semibold text-white">
                    After
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {treatment.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {treatment.description}
                </p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
