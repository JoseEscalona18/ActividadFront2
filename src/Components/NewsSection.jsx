import React from 'react'

function News() {
  return (
    <div>
        <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Noticias de Tecnología</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Noticia 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              className="object-cover h-48 w-full rounded-md mb-4"
              src="./"
              alt="Noticia 1"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Players Are Having Trouble Activating The Cyberpunk 2077 Expansion’s Final Mission</h3>
            <p className="text-gray-600 mb-4">
            Cyberpunk 2077 and its Phantom Liberty expansion have a problem with wasting your time. CD Projekt Red’s open-world RPG has a 
            feature where you have to wait an undetermined amount of time for certain quests to activate, and that persists into Phantom Liberty.
            </p>
            <a
              className="text-blue-500 hover:text-blue-700 font-medium"
              href="#"
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
              src="imagen2.jpg"
              alt="Noticia 2"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Título de la Noticia 2</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam mauris id
              tincidunt eleifend.
            </p>
            <a
              className="text-blue-500 hover:text-blue-700 font-medium"
              href="#"
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
              src="imagen3.jpg"
              alt="Noticia 3"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Título de la Noticia 3</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam mauris id
              tincidunt eleifend.
            </p>
            <a
              className="text-blue-500 hover:text-blue-700 font-medium"
              href="#"
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