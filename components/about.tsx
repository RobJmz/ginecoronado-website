import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="bg-humo-blanco py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative w-64 md:w-72 lg:w-80">
              <div className="absolute inset-0 border-[5px] border-verde-vela/20 rounded-2xl translate-x-3 -translate-y-3" />
              <Image
                src="/images/foto.png"
                alt="Dr. Ricardo Coronado"
                width={320}
                height={400}
                className="relative z-10 rounded-2xl object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-verde-vela mb-6 text-balance">
              Doctor Ricardo Coronado
            </h2>
            <div className="space-y-4 text-verde-vela/80 text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                El Doctor Ricardo Coronado es especialista en escuchar c&oacute;mo te sientes,
                hacer una revisi&oacute;n correcta y despu&eacute;s aclarar todas tus dudas hasta
                que est&eacute;s satisfecha.
              </p>
              <p>
                Su visi&oacute;n es siempre tratar a cada paciente con profesionalismo y sobre
                todo empat&iacute;a.
              </p>
              <p>
                Ac&eacute;rcate al ginec&oacute;logo y obstetricia Ricardo Coronado para seguir
                disfrutando de una vida sana y plena.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
