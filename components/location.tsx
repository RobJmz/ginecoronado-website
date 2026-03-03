export default function Location() {
  return (
    <section id="ubicacion" className="bg-verde-vela py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white text-center mb-4 text-balance">
          Vis&iacute;tanos en una de las zonas
          <br className="hidden md:block" /> m&aacute;s importantes de Saltillo
        </h2>

        {/* Hospital Logo */}
        <div className="flex justify-center mb-10 mt-8">
          <img
            src="/images/logo-hospital.png"
            alt="Christus Muguerza Hospital Saltillo"
            className="h-16 md:h-20 w-auto opacity-80"
          />
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden border-2 border-verde-turquesa/30">
          <iframe
            title="Ubicación del consultorio del Dr. Ricardo Coronado en Centro Médico Muguerza, Saltillo"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.847!2d-100.999!3d25.422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868880e6b0c0f4b9%3A0x8e44b7b0dfb3b4a0!2sCHRISTUS%20MUGUERZA%20Hospital%20Saltillo!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-64 md:h-96"
          />
        </div>
      </div>
    </section>
  )
}
