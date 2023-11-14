# Gestor de tareas

El gestor de tareas se va a encargar de ejecutar tareas que pueden ser problematicas periodicamente. Por lo tanto se considera un estudio de los principales gestores de tareas que podemos añadir a este proyecto buscando sencillez y eficacia. En algunos casos, he considerado mezclar en el mismo apartado herramientas que son muy similares o comparadas entre sí por la comunidad para reflejar sus características.

## Criterios

En cuanto a los criterios de la elección:

-   Trataremos de no aumentar deuda técnica ya sea aprovechando herramientas que ya se tienen o si no queda otra, eligiendo otra que se adapte a una automatización básica de tareas, ya que este proyecto no requiere tareas complejas.

## Make y Just

Pese a que Make es una herramienta que surge para cubrir otras necesidades, puede aplicarse como un gestor de tareas. Aparece así una comparación reciente con Just, el cual es parecido en ciertos aspectos.

No se necesitan complementos adicionales para que Make funcione correctamente como gestor de tareas. Just tampoco y ambos presentan buen rendimiento y estabilidad, más por parte de make en ambos casos.

En cuanto a la sintaxis, puede ser algo más tediosa para make y mas sencillo en cambio en just.

Dejo por aquí un [enlace de interés de Just](https://github.com/casey/just) que es menos conocido, por si gusta al lector echar un ojo. Incluso hay un [apartado de alternativas](https://github.com/casey/just#alternatives-and-prior-art) similares a este donde encontramos a make como primera alternativa! 

## NPM Scripts

Una de las grandes ventajas que tenemos al usar NPM Scripts es la automatización de tareas en el mismo fichero package.json. En relativamente sencillo de hacer y no sería necesario instalar ninguna herramienta externa. Si se da alguna complicación en específico, podemos derivar a otro archivo. 

Por otra parte, dependiendo del archivo que se esté creando, puede terminar siendo engorroso.

## Grunt y Gulp

Son bastante parecidas entre sí. Realmente son populares en la comunidad y dos de las más usadas. Hay mucha gente que prefiere Grunt y otros que prefieren Gulp. Pero no es un factor a tener en cuenta aquí.

De Grunt nos quedamos con que se configura mediante un fichero en JavaScript. Es más lento que Gulp por su enfoque E/S de archivos en disco y ejecuciones secuenciales.

Por otra parte, Gulp presenta un código más legible y conciso a través de tuberías. Es flexible y carga en memoria, por lo que es más rápido. Otro punto a destacar es la ejecución de tareas en paralelo.


## Elección

Podria decantarme por cualquiera de ambas, de verdad. Pero si se analiza un poco más la situación podemos llegar a la conclusión de que realmente ya disponemos de la solución. Voy a usar NPM Scripts, ya que principalmente no se necesita nada externo y se cuenta con ello, reduciendo así la deuda técnica. Por otro lado, no se debería tener ningún tipo de problema con PNPM, ya que partimos de un `package.json` similar al de NPM.



