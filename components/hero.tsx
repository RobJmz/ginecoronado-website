import Image from "next/image"
import { Phone } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-verde-vela overflow-hidden">
      {/* Top social bar - desktop */}
      <div className="hidden md:flex items-center justify-end gap-6 px-8 py-3">
        <a
          href="https://www.instagram.com/dr.ricardo_coronado/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white transition-colors text-sm font-sans tracking-wide"
          aria-label="Visita nuestro Instagram"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com/Dr.RicardoCoronado"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 hover:text-white transition-colors text-sm font-sans tracking-wide"
          aria-label="Visita nuestro Facebook"
        >
          Facebook
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 pb-0 pt-8 md:pt-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left pb-8 lg:pb-16">
            {/* Logo */}
            <div className="mb-8 lg:mb-10">
              <Image
                src="/images/logo-claro.png"
                alt="Doctor Ricardo Coronado - Ginecología, Obstetricia, Colposcopía"
                width={280}
                height={280}
                className="w-48 md:w-56 lg:w-64 h-auto"
                priority
              />
            </div>

            {/* Tagline */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight text-balance mb-6 lg:mb-8">
              Escucha, calidad{" "}
              <br className="hidden lg:block" />
              y atenci&oacute;n
              <br />
              <span className="text-verde-turquesa">en un ambiente</span>
              <br />
              <span className="text-verde-turquesa">seguro y de</span>
              <br />
              <span className="text-verde-turquesa">confianza.</span>
            </h1>

            {/* Address */}
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
              Centro M&eacute;dico Muguerza
              <br />
              Piso 1 Consultorio 101 Paseo Villalta.
              <br />
              Luis Donaldo Colosio esquina con V. Carranza
              <br />
              Col. Rancho de Pe&ntilde;a 25210 Saltillo, Coah.
            </p>

            {/* CTA Button */}
            <a
              href="https://wa.me/528441850060"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-verde-turquesa text-verde-vela font-sans font-bold text-sm tracking-[0.2em] uppercase px-8 py-4 rounded-full hover:bg-verde-turquesa/90 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Agenda tu cita
            </a>
          </div>

          {/* Right - Doctor Photo */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-72 md:w-80 lg:w-[420px]">
              {/* Teal border frame */}
              <div className="absolute inset-0 border-[6px] border-verde-turquesa/40 rounded-2xl translate-x-3 -translate-y-3 lg:translate-x-4 lg:-translate-y-4" />
              <Image
                src="/images/foto.png"
                alt="Dr. Ricardo Coronado en su consultorio"
                width={420}
                height={520}
                className="relative z-10 rounded-2xl object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Band */}
      <div className="gradient-band h-3 md:h-4 w-full" />
    </section>
  )
}
