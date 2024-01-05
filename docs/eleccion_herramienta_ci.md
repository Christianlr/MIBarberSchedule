## Elección de la herramienta de integración continua
La integración continua (CI) en el desarrollo de software implica la integración regular y automática de código con pruebas automatizadas frecuentes. Aporta beneficios al proyecto al detectar tempranamente errores, permitir entregas rápidas, mejorar la calidad del código, facilitar la colaboración en equipo, automatizar procesos de construcción y proporcionar retroalimentación inmediata. Por tanto, se determina para este proyecto una herramienta para llevar a cabo estos aspectos.
### Criterios de elección

-   **Que sea fácil de obtener y duradera**: Son muchas las herramientas que se pueden encontrar en la web, pero muchas de ellas vienen ligadas a cortos periodos de prueba y a pagos mensuales. Se debe encontrar una herramienta que sea gratuita y además tenga o sea accesible el mayor tiempo posible.
-   **Compatibilidad con el proyecto**: Al querer establecer una integración continua para llevar correctamente a cabo los cambios que se hagan, seria ideal que se puedan realizar
buenas prácticas con aquellas herramientas que estamos usando (Docker, node, pnpm, etc).

### Herramientas consideradas

Hay gran variedad de herramientas disponibles para aportar CI a un proyecto. Principalmente debemos tener en cuenta el tamaño del proyecto que se desarrolla y, en cuanto a la herramienta, si es fácil de obtener (si está ligada a una suscripción o periodo corto de prueba). He tenido en cuenta aquellos criterios mencionados en [G2](https://www.g2.com/) para la elección, como pueden ser opiniones (aunque esto es algo subjetivo de cada uno) quizás con información de interés, algunas introducciones y definiciones de a que están enfocadas algunas herramientas como tambien a los apartados de características de cada uno, en los que se contienen datos como la funcionalidad, procesos que pueden llevar a cabo y gestiones. [En este enlace](https://www.g2.com/products/cloudbees/features), a modo de ejemplo, se muestran todos estos puntos para CloudBees, junto con comparaciones sobre aspectos relevantes.

Entrando en las herramientas consideradas, se tienen en cuenta las siguientes:

- [GitHub Actions](https://github.com/features/actions): Herramienta interna de GitHub la cual se integra con repositorios de este mismo sitio. Fácil acceso y permite buen mantenimiento junto con el proyecto.
- [Travis](https://www.travis-ci.com/): Ofrece un montaje muy sencillo y no necesita gran código para su configuración. Es muy flexible en cuando a adaptarse a ciertas configuraciones, requisitos y preferencias de un proyecto.
- [Circle CI](https://circleci.com/): Ofrece configuración flexible mediante archivos YAML y escalabilidad para proyectos de distintos tamaños. Su plan básico es gratuito con opciones de pago para características avanzadas.
- [Semaphore CI](https://semaphoreci.com/): Proporciona un enfoque simple y eficiente para la CI/CD, admitiendo múltiples lenguajes y entornos de ejecución. Ofrece planes gratuitos y de pago con características adicionales.
- [CloudBees](https://cloudbees.io/): Ofrece integración y orquestación continua para equipos ágiles, con soporte para pipelines complejas y despliegues continuos. Es una solución empresarial con opciones de pago.
- [TeamCityCI](https://www.jetbrains.com/es-es/teamcity/): Herramienta de CI/CD potente y altamente personalizable, con escalabilidad y compatibilidad con diferentes tecnologías. Tiene versiones gratuita y de pago para empresas y equipos grandes.
- [AppVeyor](https://www.Appveyor.com/): Compatible con el proyecto y permite una configuración eficiente. Ofrece un plan gratuito con opciones de pago para características avanzadas.

### Elección

Una vez estudiadas las posibles opciones que se pueden encontrar, dentro de la gran multitud que hay, me decanto por AppVeyor. Los principales motivos han sido la sencillez en cuanto a integridad y configuración. Bastaría con la creación de un archivo .yml al cual se le pueden añadir las ordenes que se consideren. Esto me sorprendió, ya que parto de herramientas como CloudBees, la cuál es algo más engorrosa a la hora de configuraciones y compatibilidades con ciertas ordenes. Otro aspecto que me ha hecho finalmente escoger a AppVeyor, es que la interfaz en la web es simple y concisa, mostrando lo más relevante a aquellos cambios que se hagan tanto en el proyecto como en el archivo de configuración. Por último y un aspecto que me ha gustado bastante es que, pese a ser más orientada a proyectos de Windows, ofrece una compatibilidad con aquellos proyectos que quizas contengan ordenes para Linux, como es el caso del montaje del contenedor de pruebas. Finalmente, ofrece un apartado para poder validar el archivo de configuración que se crea por si existe algún tipo de error. Al principio trabajé con CloudBees como he mencionado, pasando por otras herramientas como TeamCity CI e incluso considerando otras como las mencionadas, pero debido dichas dificultades que he tenido con ellas en cuando a inicio, configuración, ... me quedo con AppVeyor, y el cambio ha sido bastante rápido.

Además, tambien usaré GitHub Actions, por ser una herramienta propia de GitHub. 

### En cuanto a las versiones...

Las versiones que van a ser testeadas son las que encontramos en la página de [NodeJS](https://nodejs.org/en). Estas se basan en la versión current y las LTS. La principal diferencia que hay entre ellas es el soporte, siendo las versiones LTS las que más soporte tienen a largo plazo y están destinadas a entornos de producción. Por otro lado, la version "current", es decir, la actual, es aquella versión más estable. Aunque no tiene un soporte tan duradero como las LTS, están destinadas a ser versiones que ofrecen las últimas funcionalidades posibles.

El propósito principal de probar distintas versiones de Node.js radica en identificar posibles incompatibilidades del proyecto con las diferentes versiones que podrían ser utilizadas. Este proceso garantiza la compatibilidad del proyecto tanto con las versiones estables y de producción, como las LTS (con soporte a largo plazo), como con las versiones actuales que ofrecen las características y mejoras más recientes.
