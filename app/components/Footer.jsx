const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Doctors", href: "#doctors" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
];

const services = [
  { name: "General Dentistry", href: "#services" },
  { name: "Cosmetic Dentistry", href: "#services" },
  { name: "Dental Implants", href: "#services" },
  { name: "Teeth Whitening", href: "#services" },
  { name: "Orthodontics", href: "#services" },
  { name: "Pediatric Dentistry", href: "#services" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          <div>
            <a
              href="#home"
              className="text-2xl font-bold tracking-tight text-white">
              Dentiva<span className="text-blue-500">.</span>
            </a>

            <p className="mt-5 max-w-xs leading-7 text-slate-400">
              Premium dental care focused on your comfort, confidence,
              and long-term oral health.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-sm font-semibold transition hover:bg-blue-600 hover:text-white">
                IG</a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-sm font-semibold transition hover:bg-blue-600 hover:text-white">
                FB</a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-sm font-semibold transition hover:bg-blue-600 hover:text-white">
                LI</a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition hover:text-white">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="transition hover:text-white">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4">

              <a
                href="tel:+91 999999999"
                className="block transition hover:text-white">
                +91 9999999999
              </a>

              <a
                href="mailto:hello@dentiva.com"
                className="block transition hover:text-white">
                hello@dentiva.com
              </a>
              
              <p className="leading-6">
                no 12 kuruku sandhu
                <br />
                dubai main road, duba
              </p>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {new Date().getFullYear()} Dentiva Dental Clinic.
              All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="transition hover:text-white">
                Privacy Policy
              </a>

              <a
                href="#"
                className="transition hover:text-white">
                Terms of Service
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
