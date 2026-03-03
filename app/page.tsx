import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Testimonial from "@/components/testimonial"
import Location from "@/components/location"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Testimonial />
      <Location />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
