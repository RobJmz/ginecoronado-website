export default function Services() {
  return (
    <section id="servicios" className="bg-background py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Title */}
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-verde-vela text-center mb-16 text-balance">
          Servicios
        </h2>

        {/* Three Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {/* Ginecología */}
          <div className="bg-humo-blanco rounded-2xl p-8 md:p-10">
            <h3 className="font-serif text-2xl md:text-3xl text-verde-vela mb-5">
              Ginecolog&iacute;a
            </h3>
            <p className="text-verde-vela/80 text-sm md:text-base leading-relaxed mb-4">
              Elaboraremos tu historial m&eacute;dico as&iacute; que habr&aacute; preguntas sobre
              tus antecedentes gen&eacute;ticos y tu menstruaci&oacute;n, as&iacute; como
              revisiones generales.
            </p>
            <p className="text-verde-vela/80 text-sm md:text-base leading-relaxed mb-3">
              Algunos temas y dudas que podemos platicar:
            </p>
            <ul className="space-y-1.5 text-verde-vela/80 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="text-verde-turquesa mt-1.5 text-xs">&#9679;</span>
                Control prenatal
              </li>
              <li className="flex items-start gap-2">
                <span className="text-verde-turquesa mt-1.5 text-xs">&#9679;</span>
                Problemas menstruales u hormonales
              </li>
              <li className="flex items-start gap-2">
                <span className="text-verde-turquesa mt-1.5 text-xs">&#9679;</span>
                Infecci&oacute;n vaginales y urinarias
              </li>
              <li className="flex items-start gap-2">
                <span className="text-verde-turquesa mt-1.5 text-xs">&#9679;</span>
                Detecci&oacute;n oportuna de c&aacute;ncer
              </li>
            </ul>
            <p className="text-verde-vela/80 text-sm md:text-base leading-relaxed mt-4">
              Prepara tus preguntas y aprovecha al m&aacute;ximo tu primera visita con el Doctor
              Ricardo Coronado.
            </p>
          </div>

          {/* Obstetricia */}
          <div className="bg-humo-blanco rounded-2xl p-8 md:p-10">
            <h3 className="font-serif text-2xl md:text-3xl text-verde-vela mb-5">
              Obstetricia
            </h3>
            <p className="text-verde-vela/80 text-sm md:text-base leading-relaxed mb-4">
              Para tener un mejor cuidado de ti y tu beb&eacute;, es importante hacer un
              seguimiento desde el momento en que sabes de su embarazo o incluso desde que
              est&aacute;s planeando ser mam&aacute;.
            </p>
            <p className="text-verde-vela/80 text-sm md:text-base leading-relaxed mb-3">
              Algunas de los temas que se pueden ver son:
            </p>
            <ul className="space-y-1.5 text-verde-vela/80 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="text-verde-turquesa mt-1.5 text-xs">&#9679;</span>
                Atenci&oacute;n del embarazo y sus diferentes etapas
              </li>
              <li className="flex items-start gap-2">
                <span className="text-verde-turquesa mt-1.5 text-xs">&#9679;</span>
                Embarazo de alto riesgo
              </li>
              <li className="flex items-start gap-2">
                <span className="text-verde-turquesa mt-1.5 text-xs">&#9679;</span>
                Apoyo en el trabajo de parto
              </li>
              <li className="flex items-start gap-2">
                <span className="text-verde-turquesa mt-1.5 text-xs">&#9679;</span>
                Ces&aacute;rea
              </li>
              <li className="flex items-start gap-2">
                <span className="text-verde-turquesa mt-1.5 text-xs">&#9679;</span>
                Atenci&oacute;n en el post parto
              </li>
              <li className="flex items-start gap-2">
                <span className="text-verde-turquesa mt-1.5 text-xs">&#9679;</span>
                Anticoncepci&oacute;n
              </li>
            </ul>
          </div>

          {/* Colposcopía */}
          <div className="bg-humo-blanco rounded-2xl p-8 md:p-10">
            <h3 className="font-serif text-2xl md:text-3xl text-verde-vela mb-5">
              Colposcop&iacute;a
            </h3>
            <p className="text-verde-vela/80 text-sm md:text-base leading-relaxed">
              La colposcop&iacute;a es un procedimiento que consiste en una observaci&oacute;n
              microsc&oacute;pica de vagina y c&eacute;rvix por medio de un lente especializado
              llamado Colposcopio.
            </p>
            <p className="text-verde-vela/80 text-sm md:text-base leading-relaxed mt-4">
              As&iacute; se pueden detectar inflamaciones, infecciones y alteraciones en el cuello
              del &uacute;tero causados por el virus del papiloma humano.
            </p>
          </div>
        </div>

        {/* Service Tags Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            "Primera Visita",
            "Anticonceptivos",
            "Colposcopía",
            "Control prenatal",
            "Maternidad",
            "Atención posparto",
            "Cirugía Ginecológica",
            "Detección oportuna de cáncer en la mujer",
          ].map((service) => (
            <div
              key={service}
              className="bg-verde-vela text-white text-center py-5 px-4 rounded-xl font-sans text-sm md:text-base"
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
