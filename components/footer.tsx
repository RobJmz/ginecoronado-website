import Image from "next/image"
import { Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-verde-vela border-t border-verde-turquesa/20">
      {/* Gradient Band */}
      <div className="gradient-band h-3 md:h-4 w-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/logo-claro.png"
              alt="Doctor Ricardo Coronado"
              width={200}
              height={200}
              className="w-40 h-auto mb-4"
            />
          </div>

          {/* Cédula */}
          <div className="text-center md:text-left">
            <h3 className="text-verde-turquesa font-sans font-bold text-sm uppercase tracking-wider mb-4">
              C&eacute;dula
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              C&eacute;dula Prof. 7458468
              <br />
              C&eacute;dula Esp. 10511583
            </p>
          </div>

          {/* Llámanos */}
          <div className="text-center md:text-left">
            <h3 className="text-verde-turquesa font-sans font-bold text-sm uppercase tracking-wider mb-4">
              Ll&aacute;manos
            </h3>
            <div className="space-y-2">
              <a
                href="https://wa.me/528441850060"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                Citas: 844 185 00 60
              </a>
              <a
                href="tel:+528444594776"
                className="flex items-center justify-center md:justify-start gap-2 text-white/70 hover:text-white transition-colors text-sm"
              >
                <Phone className="w-3.5 h-3.5" />
                Urgencias: 844 459 47 76
              </a>
            </div>

            {/* Social */}
            <h3 className="text-verde-turquesa font-sans font-bold text-sm uppercase tracking-wider mt-6 mb-3">
              S&iacute;guenos
            </h3>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="https://www.instagram.com/dr.ricardo_coronado/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors text-sm"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/Dr.RicardoCoronado"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors text-sm"
                aria-label="Facebook"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Visítanos */}
          <div className="text-center md:text-left">
            <h3 className="text-verde-turquesa font-sans font-bold text-sm uppercase tracking-wider mb-4">
              Vis&iacute;tanos
            </h3>
            <div className="flex items-start justify-center md:justify-start gap-2 text-white/70 text-sm leading-relaxed">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p>
                Centro M&eacute;dico Muguerza
                <br />
                Piso 1 Consultorio 101
                <br />
                Paseo Villalta.
                <br />
                Luis Donaldo Colosio
                <br />
                esquina con V. Carranza
                <br />
                Col. Rancho de Pe&ntilde;a 25210
                <br />
                Saltillo, Coah.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-verde-turquesa/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-sans">
            &copy; {new Date().getFullYear()} Dr. Ricardo Coronado. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/dr.ricardo_coronado/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/70 transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/Dr.RicardoCoronado"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/70 transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
