# Portfolio personal - Jessica Mateo

Este proyecto es mi portfolio personal desarrollado durante el Módulo 1 del bootcamp Full Stack en The Bridge.

La web recoge mi presentación profesional, mis skills principales, una sección de proyectos en progreso, recursos útiles y cheatsheets de HTML, CSS y JavaScript. El objetivo del proyecto es practicar la creación de una web completa usando HTML, CSS y JavaScript, integrando además funcionalidades dinámicas y servicios externos.

## Demo en vivo

Puedes ver el proyecto publicado aquí:

https://j-mateo.github.io/proyecto1/

## Repositorio

Código fuente del proyecto:

https://github.com/J-Mateo/proyecto1

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- GitHub
- Cloudinary
- WeatherAPI
- FormSubmit

## Funcionalidades principales

- Portfolio personal responsive.
- Header y footer reutilizables mediante JavaScript.
- Menú hamburguesa para dispositivos móviles.
- Modo oscuro con persistencia en localStorage.
- Sección dinámica de skills.
- Sección de proyectos en progreso.
- Cheatsheets de HTML, CSS y JavaScript.
- Página de recursos organizada por categorías.
- Formulario de contacto conectado con FormSubmit.
- Widget de clima en tiempo real usando WeatherAPI y geolocalización.
- Imágenes y favicon alojados en Cloudinary.

## Estructura del proyecto

```text
proyecto1/
├── index.html
├── about.html
├── contacto.html
├── recursos.html
├── cheatsheet-html.html
├── cheatsheet-css.html
├── cheatsheet-js.html
├── package.json
├── package-lock.json
├── css/
│   ├── reset.css
│   └── styles.css
└── js/
    ├── main.js
    ├── data/
    │   ├── skills.js
    │   ├── cheatsheets.js
    │   └── resources.js
    ├── templates/
    │   └── template.js
    └── utils/
        ├── menu.js
        ├── darkMode.js
        ├── skillsList.js
        ├── cheatsheetsList.js
        ├── resourcesGenerator.js
        └── weather.js
```
        ## Descripción de las páginas

### `index.html`

Página principal del portfolio. Incluye la presentación personal, las skills, la sección de proyectos en progreso y las tarjetas de acceso a las cheatsheets.

### `about.html`

Página sobre mí, con información más personal y profesional sobre mi trayectoria y mi cambio hacia el desarrollo web.

### `contacto.html`

Página de contacto con formulario conectado a FormSubmit para recibir mensajes por correo electrónico.

### `recursos.html`

Página con recursos útiles organizados por categorías.

### Cheatsheets

El proyecto incluye tres páginas de consulta rápida:

- `cheatsheet-html.html`
- `cheatsheet-css.html`
- `cheatsheet-js.html`

Estas páginas recogen conceptos importantes de HTML, CSS y JavaScript trabajados durante el módulo.