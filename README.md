# MIBarberSchedule

## Problema
Soy barbero y a lo largo de la semana nos resulta complicado a mi y a mis compañeros llevar a cabo las tareas básicas para el mantenimiento del local y los materiales, como pueden ser limpieza de maquinillas, recomposición de stock, recuento del día... todo esto a la vez que tratamos a los clientes. Cuando queremos darnos cuenta, no hemos realizado muchas de estas tareas. Por lo tanto, necesitamos una aplicación que, en base al tiempo libre de cada uno, nos planifique dichas tareas de forma automática entre nosotros para poder aprovechar mejor el tiempo, desempeñar correctamente el trabajo y no perder beneficio.

## Clase principal

La clase principal es `agenda.ts` la cual va a contener la lógica de negocio que se pretende desarrollar. Esta se basa principalmente en una planificación de tareas acorde a la prioridad que estas tengan de la mejor forma posible para los barberos. 

Para poder comprobar la sintaxis del código, hacemos uso de la siguiente orden:

```shell
   pnpm run check
```

## Ejecución de test

La ejecución de los test para comprobar que la lógica de negocio cubre las necesidades mínimas establecidas según las historias de usuario:

```shell
   pnpm run test
```

## Docker

### Construcción del contenedor

La siguiente orden construye el contenedor con la imagen declarada en el Dockerfile

```shell
   docker build -t christianlr/mibarberschedule .
```

### Ejecutar el contenedor

Para poder ejecutar el contenedor correctamente: 

```shell
   docker run -tv `pwd`:/app/test christianlr/mibarberschedule
```

La imagen puede se puede encontrar [aquí](https://hub.docker.com/repository/docker/christianlr/mibarberschedule/general).

## Documentación de interés

* [Historias de usuario](docs/historias_usuario.md)

* [Milestones](docs/milestones.md)

* [Runtime](docs/runtime.md)

* [Gestor de dependencias](docs/gestor_dependencias.md)

* [Gestor de tareas](docs/gestor_tareas.md)

* [Herramientas para los test](docs/test_tools.md)

* [Elección de la imagen](docs/eleccion_imagen_base.md)

* [Elección de las herramientas CI](docs/eleccion_herramienta_ci.md)
