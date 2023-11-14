# Runtime

Para determinar el runtime de este proyecto, se realiza un estudio de las diferentes alternativas que se presentan compatibles para TypeScript. 
Cuando navegas por la web surge una comparación extremadamente destacada entre tres en concreto: node, deno y bun. 

## Criterios

Procedo a explicar algunos de los detalles que más interesan para su elección.

- Estabilidad o velocidad? : Nuestro proyecto no se basa en dar datos rápidos que son imprescindibles al momento o algo parecido. Por lo que pensar en una estabilidad en la que simplemente funcione correctamente, creo es la mejor opción. 
- Rendimiento
- Seguridad en prestaciones : Se deben cubrir requisitos mínimos de seguridad.

## Node.js

Se trata de un entorno de tiempo de ejecución bastante conocido. Además de ser de código abierto, lo cual incita a mejoras por parte de la comunidad. Es asíncrono, lo que permite flexibilidad en las peticiones que se realizan durante el funcionamiento sin bloqueos.

Los casos de uso en los que node tendría un papel ideal son, entre otros, en aplicaciones de una sola página (SPA) y vinculadas a E/S. Este proyecto, en cierta parte, tiene vínculos con ambos escenarios. Otro dato interesante es que está basado en eventos y de que el programa responda a ellos.

En cuanto al rendimiento, actualmente no es de las más rápidas pero esto no significa que sea malo. Aunque no sea actualmente su punto más fuerte debido al largo desarrollo ha tenido hasta ahora desde su fecha de salida, la solidez que presenta es muy buena.

Una posible desventaja es que en nuestro caso, para poder ejecutar proyectos en TypeScript necesitamos herramientas adicionales (como ts-node) y no cuenta con gestor de dependencias.

## Deno

Deno se trata de un runtime bastante reciente pero no por ello presenta malos escenarios. Fué lanzado por la misma persona que lanzó node con la finalidad de mejorar la seguridad de este. En cuanto a rendimiento llega a ser hasta 10 veces más rápido que node y algo más rápido que otros runtime actuales tambien que se pueden encontrar. En cuanto a rendimiento y estabilidad, es una gran opción.

Importación de módulos mediante URL, evitando paquetes duplicados por motivos de trabajo en varios proyectos. Aunque esto es fantástico, no es un problema en nuestro caso.

A diferencia de node, no se necesita hacer gran cosa para poder usar TypeScript en él, ya que es compatible de primeras. Lo único es que no hay mucha documentación y aunque hay actividad en foros y distintas páginas web, no se puede comparar con Node.js. 

Por último, decir que Deno se considera un toolchain, es decir, un entorno completo de ejecución de código TypeScript. Eso realmente es algo muy cómodo en desarrollo ya que podemos usar herramientas propias y quitarnos de complicaciones (aunque no incluye un gestor de tareas).

## Bun

Bun se trata de un all-in-one toolkit super rápido siendo este de los 3 destacados el más rápido. Solventa principalmente la complejidad que ha tenido node a lo largo del tiempo de desarrollo. Al igual que Deno y Node.js, se tiene buen rendimiento y quizás estabilidad.

En cuanto a seguridad, es realmente bueno ya que puede restringir accesos a determinados sitios si así se desea.
El problema viene en la documentación que realmente no tiene una gran comunidad y está empezando.

Lo único que hace que bun, para mí, no sea una opción quizás demasiado recomendada sea su temprana salida. Es decir, hace poco estaba en versión beta hasta que hace nada salió la versión 1.0.

## Elección

Tras estudiar las distintas características de los principales runtimes que hay, elijo node.js. Puede parecer el menos seguro pero actualmente en su v21.0 ofrece posibilidades similares en cuanto a seguridad acercandose a Deno. Deno hubiera sido algo ideal, pero tal y como se presenta la situación en clase no es una opción. Por otra parte, Bun me parece increíble, pero está recien empezando a desarrollarse y no hay mucha documentación y comunidad(aunque no sea un criterio para la elección, puede llegar a motivar más a un usuario el adentrarse en una nueva herramienta si esta tiene respaldo en la web con prácticas y proyectos). Finalmente, el ecosistema de Node.js es mas ámplio.


## Algunas curiosidades...

Se habla de rendimiento pero no se tiene un número, algo contable. Por lo tanto, quiero añadir una medición de la media de peticiones que pueden realizarse con cada uno de los runtimes mencionados:

![](img/RendimientoRuntime.png)

