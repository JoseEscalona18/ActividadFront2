import React from 'react'

function News() {
  return (
    <div>
        <div className="bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Noticia 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              className="object-cover h-48 w-full rounded-md mb-4"
              src="src\assets\cyberpunk.webp"
              alt="Noticia 1"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Los jugadores tienen problemas para activar la misión final de la expansión Cyberpunk 2077</h3>
            <p className="text-gray-600 mb-4">
            Cyberpunk 2077 y su expansión Phantom Liberty tienen un problema con hacerte perder el tiempo. El RPG de mundo abierto de CD Projekt Red tiene una característica 
            RPG de mundo abierto de CD Projekt Red tiene una característica por la que tienes que esperar una cantidad indeterminada de tiempo para que ciertas misiones se activen, y eso persiste en Phantom Liberty.
            </p>
            <a
              className="text-blue-500 hover:text-blue-700 font-medium"
              href="https://kotaku.com/cyberpunk-2077-phantom-liberty-the-killing-moon-wait-1850888385"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer más
            </a>
          </div>

          {/* Noticia 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              className="object-cover h-48 w-full rounded-md mb-4"
              src="src\assets\audifonos.webp"
              alt="Noticia 2"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Beyerdynamic lanza sus primeros auriculares inalámbricos para juegos</h3>
            <p className="text-gray-600 mb-4">
            Beyerdynamic no es ajeno a la comunidad de jugadores, ya que los auriculares con cable de la compañía se ven regularmente en eventos de 
            deportes electrónicos profesionales y similares. se ven con regularidad en eventos deportivos profesionales y similares.
            </p>
            <a
              className="text-blue-500 hover:text-blue-700 font-medium"
              href="https://www.engadget.com/beyerdynamic-releases-its-first-ever-wireless-gaming-headset-172641714.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer más
            </a>
          </div>

          {/* Noticia 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              className="object-cover h-48 w-full rounded-md mb-4"
              src="src\assets\gamingoferta.webp"
              alt="Noticia 3"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Este fin de semana puedes conseguir juegos gratis con la Xbox Serie X y la PlayStation 5</h3>
            <p className="text-gray-600 mb-4">
            Nunca ha habido mejor momento para unirse a la actual generación de consolas, gracias a las ofertas de este fin de semana. 
            Las promociones actuales de la Serie X de Xbox y PlayStation 5 son muy tentadoras, ya que cualquiera de las dos consolas viene 
            con un juego gratis para empezar tu colección. Más detalles a continuación.
            </p>
            <a
              className="text-blue-500 hover:text-blue-700 font-medium"
              href="https://www.polygon.com/deals/23894762/best-gaming-deals-xbox-series-x-ps5-free-games-humble-gamestop-manga-blu-ray-deal-sale"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leer más
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default News