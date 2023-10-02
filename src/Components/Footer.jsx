import React from "react";
function Footer() {
  return (


<footer class="bg-gray-900  shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="" class="hover:underline">Repair Cats™</a>. Todos los derechos reservados.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">Inicio</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Tienda</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Nosotros</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contactanos</a>
        </li>
    </ul>
    </div>
</footer>



  );
}

export default Footer;
