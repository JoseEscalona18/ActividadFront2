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
            <h3 className="text-xl font-bold text-gray-800 mb-2">Players Are Having Trouble Activating The Cyberpunk 2077 Expansion’s Final Mission</h3>
            <p className="text-gray-600 mb-4">
            Cyberpunk 2077 and its Phantom Liberty expansion have a problem with wasting your time. CD Projekt Red’s open-world RPG has a 
            feature where you have to wait an undetermined amount of time for certain quests to activate, and that persists into Phantom Liberty.
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
            <h3 className="text-xl font-bold text-gray-800 mb-2">Beyerdynamic releases its first-ever wireless gaming headset</h3>
            <p className="text-gray-600 mb-4">
            Beyerdynamic is no stranger to the gaming community, as the company’s wired headsets are 
            regularly seen at professional esports events and the like. 
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
            <h3 className="text-xl font-bold text-gray-800 mb-2">You can get free games with the Xbox Series X and PlayStation 5 this weekend</h3>
            <p className="text-gray-600 mb-4">
            There’s never been a better time to join the current console generation, thanks to this weekend’s deals. 
            Current promotions on the Xbox Series X and PlayStation 5 are mighty tempting, as either console comes 
            with a free game to kickstart your collection. We have more details below.
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