# **Repair Cats, Tienda de Tecnología**

**Descripción:**
Es una app hecha con React JS, Tailwind, LocalStorage y el plugin Flowbite, en donde hicimos su landing page en conjunto a un Formulario de Agregado de Productos y una Tabla de los Productos Agregados, a partir de la reactividad con LocalStorage. En si, su proposito es ser un proyecto a largo plazo que podamos llevar para el resto de actividades o usar de referencia para las mismas.

# **Requisitos e instalación:**

1. Se necesitan los siguientes componentes: Node.JS y NPM

2. Se dirigen hacia la dirección del Proyecto en Github: [https://github.com/JoseEscalona18/ActividadFront2](https://github.com/JoseEscalona18/ActividadFront2)

3. Seleccionan a Code y Local, luego lo descargamos en Download ZIP

4. A partir de esto, nos quedaria en ZIP y lo extraemos

5. Luego, abrimos Visual Studio Code y pasamos/abrimos la carpeta dentro del programa, desde Archivo/Abrir Carpeta

6. Ahora que tenemos nuestro proyecto colocado, tan solo tenemos que abrir consola con CTRL + Ñ o Desde Terminal/Abrir Terminal

7. Al iniciar la terminal, vamos a instalar los paquetes que tiene el proyecto, utilizando `npm i` o `npm install`

8. Luego usamos el comando `npm run dev` y el programa se ejecutara

9. Vamos hacia [http://localhost:3000](http://localhost:3000) y ahí tendremos la página ejecutándose.

# **Uso:**

El sistema es sencillo por ahora, básicamente nos permite hacer un CRUD Básico desde LocalStorage:

- **Crear:** Desde el formulario podremos agregar diferentes productos.

- **Leer:** Los productos se leerán de forma automática cada vez que se reinicie la página, y así mismo podremos presionar el botón de "Actualizar Tabla" luego de agregar un producto y se actualizará sin necesidad de reiniciarla.

- **Editar:** Al presionar el botón de "Editar" que se encuentra al lado de cada producto, podremos editar sus detalles y luego guardar. La tabla mostrará sus cambios a tiempo real sin necesidad de reiniciar.

- **Borrar:** Al presionar el botón de "Borrar" que se encuentra al lado de cada producto, podremos borrar el producto y la tabla se actualizará a tiempo real sin necesidad de reiniciar la página.

# **Estructura del Proyecto:**

**Carpeta Base:**

- **node_modules/**: Esta carpeta es generada automáticamente cuando se instalan las dependencias del proyecto utilizando el comando `npm install`. Aquí se almacenan todas las bibliotecas y módulos de terceros necesarios para el funcionamiento del proyecto.

- **public/**: Esta carpeta suele contener los archivos estáticos que se servirán públicamente en el proyecto, como imágenes, archivos CSS o cualquier otro recurso estático. Estos archivos se pueden acceder directamente desde la URL del proyecto.

- **vite.config.js**: Este archivo es la configuración del entorno de desarrollo basado en Vite. Vite es un entorno de compilación rápida para aplicaciones web modernas. Aquí puedes personalizar diferentes aspectos de tu proyecto, como la configuración del servidor de desarrollo, la configuración de las rutas de construcción, etc.

- **tailwind.config.js**: Este archivo es la configuración de Tailwind CSS, un framework de utilidades CSS altamente personalizable. En este archivo puedes personalizar los estilos predeterminados de Tailwind CSS y agregar tus propias configuraciones.

- **postcss.config.js**: Este archivo es la configuración de PostCSS, una herramienta de transformación de CSS. Aquí puedes especificar los plugins de PostCSS que deseas utilizar y configurar sus opciones.

- **package.json**: Este archivo es un archivo de configuración para administrar las dependencias y scripts de tu proyecto. Aquí se enumeran todas las dependencias del proyecto, así como los scripts definidos que se pueden ejecutar con el comando npm run.

- **package-lock.json**: Este archivo se genera automáticamente cuando se instalan las dependencias del proyecto y se utiliza para bloquear versiones específicas de las dependencias. Ayuda a garantizar que el proyecto tenga las mismas dependencias en diferentes entornos.

- **.gitignore**: Este archivo se utiliza para especificar qué archivos y carpetas deben ser ignorados por Git, el sistema de control de versiones. Los archivos y carpetas enumerados aquí no se incluirán en los commits ni se rastrearán en el repositorio.

- **eslintrc.cjs**: Este archivo es la configuración de ESLint, una herramienta de análisis de código estático para identificar y reportar patrones problemáticos en el código JavaScript. Aquí puedes configurar las reglas de ESLint y personalizarlas según tus preferencias.

**Carpeta SRC**

- **main.jsx**: Este archivo es el punto de entrada principal de la aplicación. Es comúnmente utilizado para importar y renderizar el componente principal de la aplicación, como el componente App. Aquí se configuran las rutas, se establece el tema o se realizan otras configuraciones globales de la aplicación.

- **index.css**: Este archivo contiene estilos CSS que se aplicarán a toda la aplicación.

- **app.jsx**: Este archivo es el componente principal de la aplicación. Es donde se define y se estructura la interfaz de usuario de la aplicación.

**La carpeta Pages/ contiene:**

- **home.jsx**: Este archivo representa la página de inicio de tu aplicación.

**La carpeta Components/ contiene:**

- **Footer.jsx**: Este archivo define el componente de pie de página de tu aplicación.

- **Form.jsx**: Este archivo define un componente de formulario reutilizable.

- **Header.jsx**: Este archivo define el componente de encabezado de tu aplicación.

- **NewsSection.jsx**: Este archivo define un componente de sección de noticias.

- **TablaProductos.jsx**: Este archivo define un componente de tabla de productos. Puede contener una tabla con información sobre productos, como nombre, precio, descripción, etc.

La carpeta assets/ generalmente se utiliza para almacenar recursos estáticos, como imágenes, archivos de video, fuentes, iconos, etc. Puedes colocar cualquier archivo multimedia o recurso estático que necesites en el proyecto.


# **Autores:**

- José Escalona / C.I: 28.206.133
- Maikel Villegas Rojas / C.I: 30.302.836
- Luis Monsalve / C.I: 30.380.310

# **Enlaces:**

- Proyecto en GitHub: [https://github.com/JoseEscalona18/ActividadFront2](https://github.com/JoseEscalona18/ActividadFront2)


# **Dependencias y DevDependencias**

**Dependencias:**

"@material-tailwind/react": "^2.1.2": Librería de componentes de interfaz de usuario basados en Tailwind CSS.

"flowbite": "^1.8.1": Librería de componentes de interfaz de usuario para React.

"flowbite-react": "^0.6.3": Librería de componentes de interfaz de usuario para React.

"react": "^18.2.0": Biblioteca principal de React para construir interfaces de usuario.

"react-dom": "^18.2.0": Renderizador de React para el navegador web.

"tw-elements": "^1.0.0": Conjunto de componentes de interfaz de usuario basados en Tailwind CSS.

**DevDependencies:**

"@types/react": "^18.2.15": Definiciones de tipos TypeScript para React.

"@types/react-dom": "^18.2.7": Definiciones de tipos TypeScript para ReactDOM.

"@vitejs/plugin-react": "^4.0.3": Plugin de Vite para admitir la sintaxis de React.

"autoprefixer": "^10.4.16": Plugin de PostCSS para agregar prefijos de proveedores en los estilos CSS.

"eslint": "^8.45.0": Herramienta de análisis de código estático para JavaScript.

"eslint-plugin-react": "^7.32.2": Plugin de ESLint para reglas específicas de React.

"eslint-plugin-react-hooks": "^4.6.0": Plugin de ESLint para reglas específicas de los Hooks de React.

"eslint-plugin-react-refresh": "^0.4.3": Plugin de ESLint para reglas específicas de React Refresh.

"postcss": "^8.4.31": Herramienta de transformación de CSS.

"tailwindcss": "^3.3.3": Framework de utilidades CSS altamente personalizable.

"vite": "^4.4.5": Entorno de compilación rápida para aplicaciones web modernas.

# **Muchas gracias por su atención**