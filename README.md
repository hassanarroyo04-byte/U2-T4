# NOVA / STUDIO

Landing page en español para una empresa ficticia de desarrollo de software.

## Tecnologías

- HTML semántico, CSS propio y JavaScript.
- Bootstrap Icons.
- GSAP y ScrollTrigger para animaciones de entrada y desplazamiento.
- GitHub Actions para publicar el sitio en GitHub Pages.

## Ejecutar localmente

Abre `index.html` en un navegador. La tipografía, los iconos y GSAP se cargan desde CDN, por lo que las animaciones y esos recursos requieren conexión a internet.

## Publicación

Cada push a `main` ejecuta el flujo de `.github/workflows/pages.yml` y despliega el contenido en GitHub Pages. En la configuración del repositorio, la fuente de Pages debe estar configurada como **GitHub Actions**.

La calculadora estima el precio inicial a razón de **$800 USD por página**. El formulario de contacto utiliza un enlace de correo y debe conectarse a un servicio de recepción de formularios si se necesita envío desde la página.
