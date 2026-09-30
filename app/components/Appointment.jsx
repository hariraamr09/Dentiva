"use client";

import { useState } from "react";

const services = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Dental Implants",
  "Teeth Whitening",
  "Orthodontics",
  "Pediatric Dentistry",
];

export default function Appointment() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!/^[+()\d\s-]{7,20}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!formData.date) {
      newErrors.date = "Please select a preferred date.";
    }

    if (!formData.time) {
      newErrors.time = "Please select a preferred time.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setSubmitted(true);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      service: "",
      message: "",
    });

    setErrors({});
  };

  return (
    <section
      id="appointment"
      className="bg-slate-900 py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-12 lg:grid-cols-2">

          <div className="lg:pr-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Book Your Visit
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to take care of your smile?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Complete the form and our team will contact you to confirm
              your appointment.
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold">
                    Personalized care
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Treatment plans designed around your individual needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                  ✓ </div>

                <div>
                  <h3 className="font-semibold">
                    Modern facilities
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    Comfortable spaces and modern dental technology.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold">
                    Friendly team
                  </h3>

                  <p className="mt-1 text-sm text-slate-400">
                    A welcoming team focused on making your visit comfortable.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl sm:p-8">

            {submitted && (
              <div
                className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"
                role="status">
                <p className="font-semibold">
                  Appointment request received!
                </p>

                <p className="mt-1">
                  This is a demo submission. Our team would contact you to
                  confirm the appointment.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="fullName"
                    className="text-sm font-medium text-slate-700">
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="hari "
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"/>

                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700">
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="hari@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"/>

                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-slate-700">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 999999999"
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"/>

                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="text-sm font-medium text-slate-700">
                    Select Service
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
                    <option value="">Choose a service</option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>

                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.service}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="date"
                    className="text-sm font-medium text-slate-700">
                    Preferred Date
                  </label>

                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"/>

                  {errors.date && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="text-sm font-medium text-slate-700">
                    Preferred Time
                  </label>

                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100">
                    <option value="">Choose a time</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                  </select>

                  {errors.time && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.time}
                    </p>
                  )}
                </div>

              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-slate-700">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  className="mt-2 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"/>
              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-full bg-blue-700 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200">
                Submit Appointment Request
              </button>

              <p className="mt-4 text-center text-xs text-slate-500">
                This demo form does not send real appointment requests.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
