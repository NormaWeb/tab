import Navbar from "@/components/navbar"
import HowItWorksSection from "@/components/how-it-works-section"
import Footer from "@/components/footer"

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar />
      <div className="py-16">
        <HowItWorksSection />
      </div>
      <Footer />
    </main>
  )
}
