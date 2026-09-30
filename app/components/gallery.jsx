import Image from "next/image";

const galleryImages = [
  {
    src: "/images/gallery/reception.jpg",
    alt: "Dentiva clinic reception",
    title: "Reception",
  },
  {
    src: "/images/gallery/treatment-room.jpg",
    alt: "Modern dental treatment room",
    title: "Treatment Room",
  },
  {
    src: "/images/gallery/waiting-area.jpg",
    alt: "Dentiva patient waiting area",
    title: "Waiting Area",
  },
  {
    src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Modern dental equipment",
    title: "Modern Equipment",
  },
  {
    src: "/images/gallery/exterior.jpg",
    alt: "Dentiva clinic exterior",
    title: "Our Clinic",
  },
  {
    src: "https://images.unsplash.com/photo-1606811811225-10635e4c9a39?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Dental consultation room",
    title: "Consultation Room",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Our Clinic
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A space designed around you
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Take a look inside our modern clinic, designed to make every
            visit comfortable and welcoming.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.title}
              className="group relative overflow-hidden rounded-2xl">
              <div className="relative h-72">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"/>
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16">
                <h3 className="font-semibold text-white">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
