# Creando un nuevo proyecto con Phaser

- _Necesitamos tener instalado_ **Node.js**

## Instalando Dependencias

Creamos una carpeta llamada _/Phaser_

Creamos otra carpeta dentro llamada _/Phaser/phaser_configuracion_

Dentro, en la terminal escribimos los siguientes comandos

- Para crear el archivo packaje.json de nuestro proyecto:

```javascript
    npm init -y
```

- Para instalar las dependencias de Phaser:

```javascript
    npm install --save phaser
```

## Creando archivo básico

A continuación nos vamos a Visual Code y creamos la estructura básica HTML
Cargamos también el archivo phaser contenido en la carpeta _/node_modules_

```javascript
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="container"></div>

    <script src="./node_modules/phaser/dist/phaser.js"></script>
</body>
</html>
```

Debajo del script, cargamos otro script llamando al archivo que iniciará nuestra aplicación:

```javascript
<script src="./src/init.js"></script>
```

Nos bajamos la extensión _Live Server_ de visual code, o cualquier app que nos abra un dev server

Ahora creamos la carpeta _/src_ y el archivo **init.js**

- En el archivo **init.js** debemos escribir lo siguiente:

```javascript
const config = { }
};

var game = new Phaser.Game(config); // Esta línea carga Phaser con la configuración indicada arriba

```

- Ahora pasamos a definir la configuración de nuestro juego:

```javascript
const config = {
  width: 320, // Tamaño del juego
  heigth: 200,
  parent: "container", // Contenedor padre del juego
  type: Phaser.AUTO, // modo de render (Auto antepone OpenGL)
  scene: {
    // cargo las funciones principales de la escena
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);
```

- Y debajo de la variable game, pasamos a definir las funciones que hemos cargado en la escena:

```javascript
function preload() {
  console.log("soy Preload");
}

function create() {
  console.log("soy Create");
}

function update() {}
```
