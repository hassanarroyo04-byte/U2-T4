# HACHE studios

Landing page en español para HACHE studios, un estudio ficticio de diseño y desarrollo web.

## Tecnologías

- HTML semántico, CSS propio y JavaScript.
- Bootstrap Icons.
- GSAP y ScrollTrigger para animaciones de entrada y desplazamiento.
- GitHub Actions para publicar el sitio en GitHub Pages.

## Ejecutar localmente

Abre `index.html` en un navegador. La tipografía, los iconos y GSAP se cargan desde CDN, por lo que las animaciones y esos recursos requieren conexión a internet.

## Publicación

Cada push a `main` ejecuta el flujo de `.github/workflows/pages.yml` y despliega el contenido en GitHub Pages. En la configuración del repositorio, la fuente de Pages debe estar configurada como **GitHub Actions**.

La calculadora estima el precio inicial a razón de **$800 USD por página**. El formulario prepara un mensaje en el cliente de correo del visitante; cambia `hola@hachestudios.com` por el correo que quieras usar. Para recibir envíos directamente desde la página, conéctalo a un servicio de formularios.
