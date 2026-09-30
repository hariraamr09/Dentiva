const insuranceProviders = [
  {
    name: "Delta Dental",
    description: "Dental insurance coverage",
  },
  {
    name: "Cigna Dental",
    description: "Dental insurance coverage",
  },
  {
    name: "MetLife Dental",
    description: "Dental insurance coverage",
  },
  {
    name: "Aetna Dental",
    description: "Dental insurance coverage",
  },
  {
    name: "Guardian Dental",
    description: "Dental insurance coverage",
  },
  {
    name: "Flexible Payment",
    description: "Convenient self-pay options",
  },
];

export default function Insurance() {
  return (
    <section id="insurance"
      className="bg-white py-20 md:py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
              Insurance & Payments
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Making quality dental care easier to access
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              We work with several major dental insurance providers and
              offer flexible payment options for patients without insurance.
            </p>
            <p><strong>cash,card,upi accepted</strong></p>

            <p className="mt-4 max-w-xl leading-7 text-slate-600">
              Insurance coverage varies by plan. Contact our team before
              your appointment and we'll help you understand your benefits
              and available payment options.
            </p>

            <a
              href="#appointment"
              className="mt-7 inline-block rounded-full bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">
              Ask About Coverage</a>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {insuranceProviders.map((provider) => (
              <div
                key={provider.name}
                className="flex min-h-32 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:shadow-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-lg font-bold text-blue-700 shadow-sm">+</div>

                <h3 className="mt-4 text-sm font-semibold text-slate-900">{provider.name}</h3>

                <p className="mt-1 text-xs text-slate-500">
                  {provider.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
