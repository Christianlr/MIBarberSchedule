## Elección de la herramienta de integración continua
La integridad continua (CI) en el desarrollo de software implica la integración regular y automática de código con pruebas automatizadas frecuentes. Aporta beneficios al proyecto al detectar tempranamente errores, permitir entregas rápidas, mejorar la calidad del código, facilitar la colaboración en equipo, automatizar procesos de construcción y proporcionar retroalimentación inmediata. Por tanto, se determina para este proyecto una herramienta para llevar a cabo estos aspectos.
### Criterios de elección

-   **Que sea fácil de obtener y duradera**: Son muchas las herramientas que se pueden encontrar en la web, pero muchas de ellas vienen ligadas a cortos periodos de prueba y a pagos mensuales. Se debe encontrar una herramienta que sea gratuita y además tenga o sea accesible el mayor tiempo posible.
-   **Integración con GitHub**:  Esta herramienta que estamos buscando debe trabajar correctamente con GitHub y no debe tener problemas de integración con nuestro proyecto.
-   **Compatibilidad con el proyecto**: Al querer establecer una integración continua para llevar correctamente a cabo los cambios que se hagan, seria ideal que se puedan realizar
buenas prácticas con aquellas herramientas que estamos usando (Docker, node, pnpm, etc).

### Herramientas consideradas

Hay gran variedad de herramientas disponibles para aportar CI a un proyecto. Principalmente debemos tener en cuenta el tamaño del proyecto que se desarrolla y, en cuanto a la herramienta, si es fácil de obtener (si está ligada a una suscripción o periodo corto de prueba). He tenido en cuenta aquellos criterios mencionados en [G2](https://www.g2.com/) para la elección. Se tienen en cuenta las siguientes:

- [GitHub Actions](https://github.com/features/actions): Herramienta interna de GitHub la cual se integra con repositorios de este mismo sitio. Fácil acceso y permite buen mantenimiento junto con el proyecto.
- [Travis](https://www.travis-ci.com/): Ofrece un montaje muy sencillo y no necesita gran código para su configuración. Es muy flexible en cuando a adaptarse a ciertas configuraciones, requisitos y preferencias de un proyecto.
- [Circle CI](https://circleci.com/): Ofrece configuración flexible mediante archivos YAML y escalabilidad para proyectos de distintos tamaños. Su plan básico es gratuito con opciones de pago para características avanzadas.
- [Semaphore CI](https://semaphoreci.com/): Proporciona un enfoque simple y eficiente para la CI/CD, admitiendo múltiples lenguajes y entornos de ejecución. Ofrece planes gratuitos y de pago con características adicionales.
- [CloudBees](https://cloudbees.io/): Ofrece integración y orquestación continua para equipos ágiles, con soporte para pipelines complejas y despliegues continuos. Es una solución empresarial con opciones de pago.
- [TeamCityCI](https://www.jetbrains.com/es-es/teamcity/): Herramienta de CI/CD potente y altamente personalizable, con escalabilidad y compatibilidad con diferentes tecnologías. Tiene versiones gratuita y de pago para empresas y equipos grandes.
- [AppVeyor](https://www.appveyor.com/): Compatible con el proyecto y permite una configuración eficiente. Ofrece un plan gratuito con opciones de pago para características avanzadas.

### Elección

Una vez estudiadas las posibles opciones que se pueden encontrar, dentro de la gran multitud que hay, me decanto por Appveyor. Además, tambien usaré GitHub Actions, por ser una herramienta propia de GitHub. Al principio trabajé con CloudBees, pero debido a dificultades que he tenido con ella, me decanté por Appveyor.

### En cuanto a las versiones...

Las versiones que van a ser testeadas son las que encontramos en la página de [NodeJS](https://nodejs.org/en). Estas se basan en la versión current y las LTS. La principal diferencia que hay entre ellas es el soporte, siendo las versiones LTS las más . Por otro lado, la version "current", es decir, la actual, es aquella versión

El principal motivo para el testeo de las versiones es que se detecten imcompatibilidades del proyecto en otras versiones que puedan ser usadas y así garantizar que el proyecto es compatible en las distintas versiones estables y de producción, como las LTS, junto con las versiones actuales, sus características y mejoras.
