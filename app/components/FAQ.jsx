"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "For most patients, we recommend a dental examination and cleaning every six months. Your dentist may recommend a different schedule based on your individual oral health needs.",
  },
  {
    question: "Do you accept dental insurance?",
    answer:
      "Yes. We work with several major dental insurance providers. Coverage varies by plan, so we recommend contacting our team to verify your specific benefits.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Please bring a valid ID, your insurance information if applicable, a list of current medications, and any relevant dental or medical records.",
  },
  {
    question: "How long does a dental cleaning take?",
    answer:
      "A routine dental cleaning typically takes around 45 to 60 minutes, although the exact time can vary depending on your individual needs.",
  },
  {
    question: "Do you provide dental care for children?",
    answer:
      "Yes. Our pediatric dental services are designed to make dental visits comfortable and positive for children of different ages.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            FAQ
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Find answers to some of the questions our patients ask most often.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-semibold text-slate-900 transition hover:bg-slate-50">
                  <span>{faq.question}</span>

                  <span
                    className={`text-2xl font-normal text-blue-700 transition-transform ${
                      isOpen ? "rotate-45" : ""}`}
                    aria-hidden="true">
                      +
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-100 px-6 py-5">
                    <p className="leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
