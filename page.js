import Navbar from "./components/Navbar"
import HeroSection from "./components/Hero"
import Features from "./components/Features"
import AboutUs from "./components/WhyChooseUs"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar />
      <div className="bg-gradient-to-b from-[#121212] to-[#1A1A1A]">
        <HeroSection />
        <Features />
        <AboutUs />
      </div>
    </main>
  );
}
