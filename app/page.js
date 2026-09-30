
import BeforeAfter from "./components/BeforeAfter";
import Doctors from "./components/doctors";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Insurance from "./components/Insurance";
import Services from "./components/services";
import Testimonials from "./components/Testimonials";
import insurance from "./components/Insurance.jsx";
import Gallery from "./components/gallery";
import OpeningHours from "./components/OpeningHours";
import FAQ from "./components/FAQ";
import Appointment from "./components/Appointment";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Doctors />
        <BeforeAfter />
        <Testimonials />  
        <Insurance />
        <Gallery />
        <OpeningHours />
        <FAQ />
        <Appointment  />
      </main>
      <Footer />
    </>
  );
}
