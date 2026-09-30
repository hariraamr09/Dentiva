"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <a href="/"
          className="text-2xl font-bold tracking-tight text-blue-900">
          Dentiva </a>

        <nav className="hidden items-center gap-8 md:flex">
          
          <a href="#services"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-700">
            Services</a>

          <a href="#doctors"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-700">
            Doctors </a>

          <a href="#before-after"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-700">
            Before & After</a>

          <a href="#gallery"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-700">
            Gallery</a>

          <a href="#faq"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-700">
            FAQ</a>
        </nav>

        <a href="#appointment"
          className="hidden rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800 md:block">
          Book Appointment</a>


        <button type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu" aria-expanded={isOpen} >
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M6 18L18 6M6 6l12 12"/>
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t bg-white px-4 py-4 md:hidden">
          <div className="grid grid-cols-2  gap-4">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-black">
              Home
            </Link>

            <Link
              href="/#services"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-black">
              services 
            </Link>

            <Link
              href="/#doctors"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-black">
              doctors
            </Link>

            <Link
              href="/#before-after"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-black">
              Bfr & Aftr
            </Link>

            <Link
              href="/#insurance"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-black">
              insurance
            </Link>

            <Link
              href="/#gallery"
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-black">
              our clinic
            </Link>

            <Link
              href="/#appointment"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-blue-700 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-800">
              Book Appointment
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}



        
