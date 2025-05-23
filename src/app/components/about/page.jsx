import Navbar from "@/components/navbar"
import WhyChooseSection from "@/components/why-choose-section"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <Navbar />
      <div className="py-16">
        <WhyChooseSection />
      </div>
      <Footer />
    </main>
  )
}
