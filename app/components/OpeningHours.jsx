const openingHours = [
  {
    day: "Monday – Friday",
    hours: "9:00 AM – 7:00 PM",
  },
  {
    day: "Saturday",
    hours: "9:00 AM – 4:00 PM",
  },
  {
    day: "Sunday",
    hours: "Closed",
  },
];

export default function OpeningHours() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
              Visit Dentiva
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              We're here when you need us
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              Our friendly team is ready to help you with your dental
              needs. Contact us to schedule your visit.
            </p>

            <div className="mt-8 space-y-5">

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                  ☎
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Phone
                  </p>

                  <a
                    href="tel:+9999999999"
                    className="mt-1 block font-semibold text-slate-900 hover:text-blue-700">
                    +91 9999999999</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                  @
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Email
                  </p>

                  <a
                    href="mailto:hello@dentiva.com"
                    className="mt-1 block font-semibold text-slate-900 hover:text-blue-700">
                    hello@dentiva.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                  📍
                </div>

                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Address
                  </p>

                  <p className="mt-1 font-semibold text-slate-900">
                    no 12 kuruku sandhu
                    <br />
                    dubai main road, dubai
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white sm:p-10">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">
                Opening Hours
              </h3>

              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                Open 6 days
              </span>
            </div>

            <div className="mt-8 divide-y divide-white/10">
              {openingHours.map((schedule) => (
                <div
                  key={schedule.day}
                  className="flex items-center justify-between py-5"
                >
                  <span className="text-slate-300">
                    {schedule.day}
                  </span>

                  <span
                    className={
                      schedule.hours === "Closed"
                        ? "font-semibold text-red-300"
                        : "font-semibold text-white"
                    }
                  >
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#appointment"
              className="mt-8 block rounded-full bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-500"
            >
              Book an Appointment
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
