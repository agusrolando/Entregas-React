# E-commerce VH Piscinas

![](public/LogoVhPscinas.jpg)

Este es un sitio donde se puede obtener informacion y comprar no solo piscinas sino que tambien accesorios para la misma y jacuzzis. 

## Librerías utilizadas

-   [Firebase](https://firebase.google.com/) 

    UTilizada para cargar informacion de productos y luego utilizarlos como base de datos para la creacion de las cards. Tambien se almacenaran las categorias y las ordenes de compra generadas.

-   [React-router-dom](https://www.npmjs.com/package/react-router-dom)

    Permite implementar enrutamiento dinámico en una aplicación web . Le permite mostrar páginas y permitir que los usuarios naveguen por ellas.

-   [React-spinners](https://www.npmjs.com/package/react-spinners)

    Utilizada para crear la interfez de espera mientras llegan la informacion desde la base de datos.

-   [Fortawesome](https://fontawesome.com/icons)

    Utilizada para implementar iconos como el del carrito de compras, el cesto para eliminar un procuto, etc.

-   [Testing](https://www.npmjs.com/package/@testing-library/dom)

    Familia de paquetes que lo ayudan a probar los componentes de la interfaz de usuario de una manera centrada en el usuario.

    [Core-js](https://www.npmjs.com/package/core-js)

    Proporciona herramientas para crear código JavaScript orientado a objetos y controlado por eventos

    [React-dom](https://es.reactjs.org/docs/react-dom.html)

    Proporciona métodos específicos del DOM que pueden ser utilizados en el nivel más alto de tu aplicación como una vía de escape del modelo de React si así lo necesitas.

## Funcionalidades del proyecto

-   Se podra acceder a informacion sobre pilestas, rejas, accesorios de piletas y jacuzzis.

-   Se puede seleccionar una cantidad deseada para la compra de cualquier producto.

- Se puege agregar a un carrito. En el mismo se podra ver el subtotal y el total de la compra. Tambien se podra desde el mismo eliminar algun producto no deseado o todos.

- Se podra cargar la informacion necesaria para crear una orden de compra, dejando asentada informacion necesaria del comprador.

- Se brindara informacion sobre el numero de orden de compra para un seguimiento.


### Pasos para correr el proyecto en local

1. Clonar el repositorio

```
git clone https://github.com/agusrolando/Entregas-React.git
```

2. Abrirlo en algún editor de código e instalar las dependencias

```
npm install
```

3. Correr el proyecto en local

```
npm start
```