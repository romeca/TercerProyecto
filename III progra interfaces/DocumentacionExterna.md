#Instituto Tecnológico de Costa Rica

##Escuela de Ingeniería en Computación

##-Introducción al Diseño de Interfaces Gráficas de Usuario-

##3er Proyecto: Editor de Diagramas UML

##Profesor:
>###Armando Arce Orozco

##Estudiantes:
>###Romero Castillo Tatiana 201030428
>###Sánchez Meléndez Cristian 201042282




##Introducción
En el desarrollo de software un aspecto importante es la rápida y efectiva producción de un producto, es decir, 
se necesita que el código sea eficiente y proporcione un grado de desempeño deseado. En la realización de este 
proyecto programado se tomó en cuenta este tipo de modalidad, además de hacer uso de de los tutoriales y material 
proporcionados por el profesor del curso. 

El Lenguaje Unificado de Modelado(UML) es el lenguaje de modelado de sistemas software más conocido y utilizado 
en la actualidad siendo respaldado por el Object Management Group. Es un lenguaje gráfico para visualizar, especificar, 
construir y documentar un sistema. UML ofrece un estándar para describir un plano del sistema (un modelo), incluyendo 
aspectos conceptuales tales como procesos de negocio, funciones del sistema, y aspectos concretos como expresiones de 
lenguajes de programación, esquemas de bases de datos y compuestos reciclados.

El primer entregable del Editor de Diagramas UML se utilizó la libreria JointJS la cual es una biblioteca de JavaScript 
para la creación de diagramas. Los diagramas pueden ser totalmente interactivo.Las características principales incluyen:

> * Conectar objetos de vectores con diferentes tipos de flechas
> * Interactuar con conexiones y los objetos
> * Controladores personalizados para diversos eventos
> * Líneas dobladas suavizado
> * Listos para utilizar elementos de conocidos diagramas
> * Diagramas jerárquicos
> * Serialización
> * Extensible
> * Personalizable y mucho más


##Descripción del contenido a desplegar

El proyecto debe desplegar una interfaz que le permita al usuario cargar un archivo de extensión .XML. 
El usuario cuenta con dos paneles, uno para mostrar el código XML y el otro para visualizar su contenido. El archivo deberá contar con lo siguiente: 

> 1. Las clases
> 2. Las conexiones entre las clases 
> 3. Los métodos y atributos que contiene cada una de las clases

Luego de realizar la lectura del archivo, se debe mostrar los datos en una aplicación web realizaba bajo el ambiente HMTL5, junto con Javascript, CSS3 y la librería Bootstrap. 

En importante recalcar que dentro de la clase se tienen tres elementos, de los cuales dos pueden no estar presentes, el que es esencial es el nombre de la clase para identificarlas entre ellas, otra parte sería los atributos propios que son desplegados en un segundo apartado de la clase UML, y el tercer elemento serían los métodos propios a cada clase que se muestran dentro de la clase en un apartado diferente. Al final cada clase se ve como una tabla de una columna y tres filas como lo es en el formato UML.


En el caso de las conexiones se pueden crear diferentes tipos de enlaces, entre las cuales se encuentran:
> 1. Herencia.
 
 ![Texto alternativo](https://lh5.googleusercontent.com/-k1TZFpFfOBM/UKUQ6XceGbI/AAAAAAAAB20/KpGa_Sz0YvM/s491/screenshot.10.png)

> 2. Composición.  
 
 ![Texto alternativo](https://lh4.googleusercontent.com/-7XsJKeZUjto/UKUSHak1c1I/AAAAAAAAB28/7pWMd-f7y-I/s459/screenshot.11.png)

> 3. Asociación.
 
 ![Texto alternativo](https://lh4.googleusercontent.com/-Qr6zLVNeHeI/UKUS1euxWtI/AAAAAAAAB3E/qNPXI5uvXE0/s454/screenshot.14.png)

Por lo tanto, cada relación tiene su tipo de identificador gráfico. Esto le permite al usuario mayor satisfacción cuando realiza su diagrama de clases, pues podrá alcanzar su objetivo. 



##Definición de estructuras de datos utilizadas

El formato que se implemento para cargar los archivos fue extensión .XML, pues al ser iguales a los ejemplos realizados en clase, el equipo estaba familiarizado con los terminos y se conocía el código. Además es una manera simple de representar este tipo de información, y su mantenimiento de la aplicación se torna mas sencilla.

Este archivo contiene elementos de tipo clase y la conexion. Es importante manejar estos nombres, debido a que su lectura se implemento de dicha manera. De otra manera, la lectura de archivo no será exitosa.



##Forma de compilación, ejecución y utilización de la aplicación

Para la compilación, ejecución y utilización de la aplicacion web, es necesario contar con las librerias de javascript d3.js, joint.all.min.js,jquery-latest.js, main.js y bootstrap. 

Luego se debe correr la aplicacion extensión .HTML:

> 1. Los archivos son los siguientes:
 ![Texto alternativo](https://lh3.googleusercontent.com/-z3Nzbb6Ydeg/UKUXIMypwhI/AAAAAAAAB3U/EGZUUePtD1Y/s912/screenshot.15.png)

> 2. Para correr la aplicación se debe abrir el archivo index.HTML. El cual debe mostrar la siguiente interfaz:
 ![Texto alternativo](https://lh3.googleusercontent.com/-7ZxYb-OIz78/UKUbHsu3fVI/AAAAAAAAB3k/uJEL4h1XM1k/s912/screenshot.16.png)

> 3. Lo siguiente es cargar el archivo, el cual utiliza un modal para dicha operacion: 
![Texto alternativo](https://lh5.googleusercontent.com/-9YpL94ppdPE/UKUbKKD7F2I/AAAAAAAAB3s/xfly85FECo0/s800/screenshot.17.png)

> 4. El archivo se selecciona y muestra lo siguiente:
![Texto alternativo](https://lh5.googleusercontent.com/-SOf_oAjY-08/UKUbLyVsi_I/AAAAAAAAB30/981DL06wmQw/s800/screenshot.18.png)

> > 4.1 El código XML aparece en el panel izquierdo:
![Texto alternativo](https://lh3.googleusercontent.com/-WDIzqBMnTdg/UKUbNiwHR2I/AAAAAAAAB38/htJIM6QE_XM/s800/screenshot.19.png)

> 5. Se debe hacer click sobre el boton refrescar para que actualize los datos en pantalla:
![Texto alternativo](https://lh4.googleusercontent.com/-NTW5NNHmGpo/UKUbPxJbvdI/AAAAAAAAB4E/9p9O4CY9h1A/s800/screenshot.20.png)

> 6. Entre las opciones de editar el contenido está "Agregar clase", la cual muestra una interfaz sencilla para que el usuario pueda agregar cuantas clases necesite.
![Texto alternativo](https://lh4.googleusercontent.com/-42G9JTYouyw/UKUbR50XUxI/AAAAAAAAB4M/VuLHTfK5g7E/s800/screenshot.21.png)

> > 6.1 El usuario ingresa los datos de la clase:
 ![Texto alternativo](https://lh5.googleusercontent.com/-7p_tNywLcQE/UKUbUIQ3nfI/AAAAAAAAB4U/Vthukq5bpdw/s800/screenshot.22.png)

> > 6.2 Se puede observar donde se agrega la clase en el panel izquierdo:
 ![Texto alternativo](https://lh5.googleusercontent.com/-15rEgWHl6RA/UKUbWqWltLI/AAAAAAAAB4c/QD0gtAZoCyk/s800/screenshot.23.png)

> > 6.3 Luego se debe refrescar la pantalla para mostrar la nueva clase. Se debe notar que la clase todavia no tiene conexión con ninguna otra.
 ![Texto alternativo](https://lh4.googleusercontent.com/-k7sdsQS8SE4/UKUbefeFDQI/AAAAAAAAB40/K5moR1fdT2Q/s800/screenshot.27.png)

> 7. Otra opción que le permite al usuario editar el contenido es "Cambiar Conexión", la cual despliega lo siguiente:
![Texto alternativo](https://lh3.googleusercontent.com/-hsdAaY0VIAc/UKUbaCWBQVI/AAAAAAAAB4k/HlT_WfGpGrU/s800/screenshot.25.png)

> > 7.1 Se ingresan los datos de las clases para comunicarlas y el tipo:
![Texto alternativo](https://lh6.googleusercontent.com/-MscxldNaR7o/UKUbcBysiDI/AAAAAAAAB4s/13kyU-IMi7g/s800/screenshot.26.png)

> > 7.2 Los datos se mostrarán en el panel izquierdo, con la clase y la conexión:
![Texto alternativo](https://lh4.googleusercontent.com/-k7sdsQS8SE4/UKUbefeFDQI/AAAAAAAAB40/K5moR1fdT2Q/s800/screenshot.27.png)

> > 7.3 Luego se refrescar la pantalla para que la clase se muestre:
![Texto alternativo](https://lh3.googleusercontent.com/-FGlJUS-e9ZY/UKUbgeWIgdI/AAAAAAAAB48/KIsqVNXOu5E/s800/screenshot.28.png)

> 9. Validaciones. El usuario no puede agregar una clase sin su respectivo nombre, por ejemplo:
![Texto alternativo](https://lh4.googleusercontent.com/-XQkpMNSqQaM/UKUjgpUgalI/AAAAAAAAB5c/F_ukqz1ClF8/s800/screenshot.31.png)

> > 9.1 El programa debe retornar un mensaje de error:
![Texto alternativo](https://lh5.googleusercontent.com/-d8lq5iTjboQ/UKUji0zs32I/AAAAAAAAB5k/7LW6DldoB80/s800/screenshot.32.png)

> 10. Validaciones. El usuario no puede agregar una conexión sin el nombre de las clases que ingreso son nulas o incorrectar, por ejemplo:
![Texto alternativo](https://lh4.googleusercontent.com/-YUsd6IKCHt0/UKUkm76LM_I/AAAAAAAAB5s/AQIp4e1Vaz8/s800/screenshot.33.png)

> > 10.1![Texto alternativo](https://lh6.googleusercontent.com/-aSOeKym-qh4/UKUblU3z63I/AAAAAAAAB5M/5zFh2Jf0neg/s800/screenshot.30.png)


Es importante resaltar que no se utilizó adobe Air para compilar la aplicación pues la libreria no fue compatible. Y daba un error null de un objeto.


##Ejemplos de datos a utilizar como pruebas

Los ejemplos de archivos XML con los que se ejecutaron el editor tienen los siguientes formatos, se definen las clases y las conexiones en un solo apartado definido como "clases":

Este ejemplo es uno completo donde cada clase tiene todos los datos

clases

>clase nombre="Vehiculo" atributos="-motor:int" metodos="$avanzar()"/>
  
>clase nombre="Automovil" atributos="-edad:int$-estado:string" metodos=""/>

>clase nombre="Camioneta" atributos="" metodos="+detenerse()"/>

>conexion clase1="Camioneta" clase2="Vehiculo" tipo="Herencia"/>

>conexion clase1="Automovil" clase2="Vehiculo" tipo="Herencia"/>

>conexion clase1="Vehiculo" clase2="Camioneta" tipo="Asociacion"/>



##Limitaciones observadas y posibles mejoras 
En este proyecto se presentaron muchos inconvenientes con las librerias utilizadas, pues ninguna es compatible al 100% con Abode Air. Se probó el código en HTML para verificar algun problema, pero los problemas de funcionamiento se presentaban unicamente con Air. 

Para poder completar el proyecto, se dejó de lado la compilación con adobe. ![](http://)
