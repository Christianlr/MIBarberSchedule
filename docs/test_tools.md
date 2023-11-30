# Herramientas para los test

A estas alturas lo único que tenemos en el proyecto es código que, aunque parezca que tiene sentido o está bien, no tiene valor. Y esto es por la sencilla razón de que este mismo no ha sido comprobado por alguna herramienta o proceso que lo evalue. Si hablamos de test hacemos referencia a asegurar una calidad en el código. Por lo tanto, se hace un estudio de las diferentes alternativas que tenemos en este proyecto para su correcto desarrollo.

## Criterios de selección

-   El principal criterio de selección que se debe tener es el de mantener una deuda técnica la más baja posible.

-   Se consultarán fuentes fiables para determinar una herramienta que cumpla con un correcto mantenimiento y que no tenga vulnerabilidades o problemas a la hora de buscar soluciones.

Mencionar que para la elección de las herramientas, sitios web como [Snyk Advisor](https://snyk.io/advisor/) o [Moiva](https://moiva.io/) han sido clave para la consulta y determinación de los criterios y descartar herramientas que parecian asequibles pero realmente están obsoletas.

## Test runner o frameworks

Un test runner o framework va a permitir la automatización en cuanto a la ejecución de tareas. Normalmente, proporcionan una colección completa de herramientas para llevar a cabo dicha función. Las opciones que se comentan en este apartado están debido a su alto score en *** Snyk ***, el cual se compone de vulnerabilidades y mantenimiento (factores que interesan) entre otros.

-   ### Jest (Score: 92)

No sería necesario configurar nada. Pruebas que se ejecutan en paralelo para maximizar el rendimiento. Está muy mantenido y presenta arreglos y mejoras constantes. Reorganiza los test en función de los que han fallado y menos tiempo tardan, consolidando así un escenario de testeo rápido. Otro punto bastante positivo es que ya contiene biblioteca de asercciones propia y es bastante completa. Otorga contexto en cuanto a los errores de testeo que puedan surgir para facilitar su arreglo y depuración. 

-   ### Jasmine (Score: 87)

Contiene su propia API de funciones de aserción. Realmente no se encuentran muchas diferencias con Jest: pruebas asíncronas, sintaxis clara y pruebas legíbles... Destaco que en posibles aspectos de optimización en configuraciones o puestas en marcha en el proyecto con TypeScript, Jasmine puede necesitar configuraciones adicionales.

-   ### Ava (Score: 94)

Simple y fácil de configurar. Concurrente con sintaxis simple. Comportamiento asíncrono. Lo único que no tiene frente a otros es la no posibilidad de organizar tests en grupos.

-   ### Vitest (Score: 98)

Ideal para proyectos pequeños debido a su enfoque minimalista. Configuración bastante simple. API amplia e intuitiva. Ofrece detalles de cara a las pruebas que se realizan. Se garantiza un mejor desempeño en la ejecución de gran número de tests, aunque no es algo de lo que nos tengamos que preocupar. La gestión de módulos es con ECMAScript Modules, que es más moderno que CommonJS de Jest, por ejemplo.

## Aserciones

Se tratan de expresiones, afirmaciones o funciones que determinan si una condición es verdadera. Las aserciones que se han considerado son las siguientes

-   ### Chai(Score: 97)

Ofrece una amplia variedad de estilos, incluyendo should, expect, y assert. Proporciona una sintaxis expresiva y es altamente extensible.

-   ### Hein(Score: 67)

Fuera de lo común, se trata de una libreria de aserciones que apenas está presente y tiene muy buenas puntuaciones pese a lo joven que es.


-   ### Las propias del test runner o framework

EL test runner elegido ya presenta bibliotecas de aserciones que son más que suficientes para realizar las pruebas que se necesitan en este proyecto. No sería por tanto necesario añadir nada más y mantendríamos una mejor deuda técnica.

## Herramienta CLI

Estas herramientas te permiten la ejeción de pruebas desde linea de comandos de una manera simple y rápida.

Realmente, todas las herramientas mencionadas ya cuentan con su propia herramienta CLI para la ejecución de test, por lo que no sería necesario realmente buscar una herramienta distinta.

## Herramientas seleccionadas

Basandome en las fuentes consultadas, características y criterios de elección, considero que cubre bastante bien la necesidad que se presenta Jest como marco de pruebas, así como sus propias librerías de aserciones y herramienta CLI. No sería necesario por lo tanto añadir nuevas herramientas, manteniendo la simplicidad en el desarrollo del proyecto y disminuyendo todo lo posible la deuda técnica.

En cuanto a las necesidades del proyecto, Jest en una opción más que correcta. Cualquiera de las herramientas mencionadas puede servir para este proyecto. No necesitamos algo complejo como, por ejemplo, para tener que añadir herramientas adicionales (como es el caso de Karma con Jasmine). Otro de los motivos de su elección es que, pese a los altos scores que se presentan en Snyk, he encontrado una información más transparence en Jest, teniendo más claro los conceptos y características de la herramienta que pretendo usar.



