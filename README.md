# ToDo List
![HTML5](https://img.shields.io/badge/HTML%20-orange?logo=HTML5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS%20-blue?logo=CSS3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript%20-yellow?logo=JavaScript&logoColor=white)

![LocalStorage](https://img.shields.io/badge/LocalStorage%20-green?style=for-the-badge&logo=JavaScript&logoColor=white&label=Vanilla%20JavaScript&labelColor=yellow&color=%23CD7FE8)

![ResponsiveSite](https://img.shields.io/badge/Responsive%20Site%20-yellow?style=for-the-badge&label=100%25&labelColor=%23FE008B&color=%23FEE300)

![toDoList](https://github.com/HeyItsMe72/ToDo-List/assets/124311622/05fabe7b-bbf9-4778-9c54-b6ce9d206687)

## Introducción
*ToDo List* es un proyecto realizado para experimentar con las funcionalidades de Vanilla JavaScript; utiliza la temática de "Lista por Hacer" que invita al usuario a enlistar sus "*qué haceres*" en el sitio. Una de las formas más sencillas de almacenar esta lista es utilizando el LocalStorage, ya que nos permite guardar la información y mantenerla almacenada incluso cuando el usuario ha cerrado la pestaña del sitio o abandonado la navegación. 

*localStorage* es es una propiedad global de sólo lectura del objeto window que nos permite interactuar y manipular la ventana del navegador. Los datos almacenados aquí sólo pueden ser accesados por el mismo origen por el que fue creado. 

Para obtener más información del funcionamiento y características del *localStorage* se puede visitar los siguientes enlaces: 

* [LocalStorage - Mozilla Developer](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
* [LocalStorage Explanation](https://blog.logrocket.com/localstorage-javascript-complete-guide/)

Para crearlo, se utilizaron sólo tecnologías puras, como HTML5, CSS3 y Vanilla JavaScript (ES6).

**CSS *styles.css***

Todos los estilos requeridos para el sitio son creados en este archivo, utilizando *Grid Flexbox* para generar un diseño responsivo sin utilizar media queries.

**JavaScript *index.js***

*index.js* es el archivo donde se encuentra toda la funcionalidad del sitio. Se comienza obteniendo el input (*newTask*) en donde el usuario agregará los ítems de su lista y al contenedor de esta lista (*tasksList*). Para interactuar con el *localStorage* se crean dos funciones que lo permiten: *saveTask()* y *getTask()*. La primera nos permite crear el registro del ítem con el contenido HTML generado en el contenedor de la lista (*tasksList*), esto accediendo al método *setItem()* propio del *localStorage*. Por otra parte, la función *getTasks()* permite obtener todos los registros de datos (*tasksList*) que fueron almacenas en el *localStorage* mediante el método propio *getItem()*. Esta útlima función debe ser ejecutada para que, en caso de existir datos almacenados al cargar el sitio, sean mostrados al usuario. 

Se utilizan dos manejadores de eventos, el primero se trata del *submit*, que es ejecutado al añadir una nueva tarea mediante el input. La información que registra el usuarioen el input (*newTask*) es agregada a la lista de tareas y se limpia el input. Para asegurar los datos, la función *saveTask()* es ejecutada. 

El segundo evento es *click*, en caso de que el objetivo sea la "x", elimina el ítem de la lista, mientras que si el objetivo corresponde al ítem de la lista, se agrega a su lista de clases la clase *checked*, la cual permite mostrar al usuario que la tarea ha sido marcada como realizada. Para salvar los datos de estos cambios, la función *saveTask()* debe ser ejecutada. 

## Mejoras 
![ToDoList](https://img.shields.io/badge/ToDo%20List%20-green?style=for-the-badge&logoColor=white&label=%C3%81reas%20de%20Oportunidad&labelColor=%23F5B32E&color=%23FF0000)

Una gran mejora es evitar el uso del *localStorage* para almacenar los datos y crear un CRUD que permita editar los registros.
