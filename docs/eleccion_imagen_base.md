# Imágen base del contenedor

-   Para determinar la imagen con la que se va a trabajar, realizamos un estudio de las distintas alternativas que podemos usar. Para ello (y como bien hemos realizado anteriormente en la determinación de otras herramientas) basarnos en fuentes fiables es crucial para determinar una buena elección. Por tanto, el uso de [Snyk Advisor](https://snyk.io/advisor/docker) nos dará una visión más clara de aquellos campos interesantes a tener en cuenta. Estos son, por tanto, los criterios de elección

## Criterios de elección

-   Tamaño y vulnerabilidad: Son dos factores que están directamente conectados con desempeñar o no un buen CI/CD además de una postura firme o no en cuanto a seguridad. Por lo que se debe considerar una imagen ligera y bien mantenida.

 - Compatibilidad con versiones de Node.js: Asegurarse de que la imagen elegida sea compatible con la versión específica de Node.js requerida para la aplicación.

  - Soporte a Largo Plazo : Considerar imágenes respaldadas por un soporte a largo plazo para garantizar actualizaciones de seguridad y correcciones durante un período extendido.

## Imágenes base consideradas

Para la elección de la imagen, se tienen en cuenta las comentadas a continuación pero sin dejar de lado que hay multitud de posibilidades. 

-   **node**: Se trata de la imagen oficial. Usar esta imágen sin tags afecta al criterio impuesto del tamaño, ya que sería una imágen grande. Se encuentran tamaños de incluso 1.11GB(ya que se aplica la versión latest). Deja un escenario así lleno de dependencias y vulnerabilidades cuando lo que se quiere es minimizar eso.

En respuesta a eso, considero las siguientes opciones:
-   Versiones **buster**, **bullseye** y **bookworm**: Las dos primeras resultan ser basadas en Debian 10 y 11 respectivamente. Pero, en definitiva, no serían buenas opciones debido al tiempo de vida que tienen. La imagen bullseye, a diferencia de la imagen buster, si es estable pero se trata de la versión antigua. Bookworm, por otro lado, si es una versión más actual al igual que estable y aunque su final de vida no ha sido determinado, se estima en unos 5 años aproximadamente.

Pero, aun hay más problemas con estas versiones. Siguen siendo igual de pesadas y presentan las mismas vulnerabilidades que la imagen node, ya que crean la misma etiqueta latest.

-  Versiones **slim**: Cuando añadimos esta etiqueta a las imágenes anteriores, nos quedamos con las dependencias justas para nuestro proyecto. Opción más que recomendable en términos de ahorro de vulnerabilidades y reducción de tamaño de imagen.

-  **node:alpine***: Se trata de la imágen recomendada para este tipo de proyecto. Presenta un tamaño de imagen muy pequeño. Aun siendo una de las imágenes recomendadas, sufre vulnerabilidades críticas. 

- Otras posibilidades consideradas: **Debian**, **Fedora** o incluso **CentOS**. Podríamos trabajar con node sin problemas. Pero antes de eso, deberíamos de obtener las herramientas necesarias. Entonces, aunque algunas versiones de estas imágenes son bastante ligeras y casi libres de vulnerabilidades, se tendría que instalar node. Cosa que con las imágenes oficiales no haría falta.
 

## Elección

Teniendo en cuenta los criterios mencionados, las características de las distintas posibles imágenes y las necesidades del proyecto, mi elección se basa en usar **node:bookworm-slim**. Esto se debe a que la mayoria de las fuentes consultadas, así como Snyk Advisor, colocan a la versión bookworm como una de las más estables y actuales. Además, la convinación con slim, forma una imágen completa en cuando a necesidades y vulnerabilidades mínimas.

