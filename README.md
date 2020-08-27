# Worgiphy

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Es una web app diseñada par mostrar Gifs de tus temas favoritos, mediante el consumo del API de Giphy. Visita el sitio dando [click aquí.](https://worgiphy.firebaseapp.com)

# Funcionalidades!

  - Registro e inicio de sesión con Firebase
  - Barra de busqueda
  - Pagina de "Trending  gifs"
  - Guarda tus gifs favoritos en tu cuenta
  - Un avatar diferente cada que inicias sesión
  - Navegación totalmente personalizada para mobile y desktop
  - Feedback a cada acción del usuario mediante notifiaciones

# Instalación del proyecto 

## 1. Dependiencias 
Verifica que GIT, Node y Yarn esten instalados
```
    git --version
    yarn --version
    node --version
```

## 2. Clona el proyecto

```
    git clone
```

## 3. Instala las dependencias

```
    yarn install
```

## 4. Instala Firebase CLI (Si no necesitas hacer deploy, salta al paso 5)
Este paso es necesario para poder hacer deploy
```
    npm install -g firebase-tools
```
### 4.1 Inicia sesión desde el CLI de firebase
```
    firebase login
```
Despues de ingresar el comando anterior, se abrirá una ventana del navegador para que inicies sesión con tu cuenta de Google

### 4.2 Inicia un proyecto de firebase
Una vez inicies sesión, ingresa lo siguiente
```
    firebase init
```

### 4.3 Inicia un proyecto de firebase

1. Se mostraran varias opcines, selecciona HOSTING
2. Selecciona un proyecto de Firebase para conectar al directorio del proyecto local
3. Ingresa 'dist' para usar como directorio raíz del proyecto(Firebase tomará los archivos de este directorio para hacer el deploy)
4. Selecciona crear "app single page"

Al terminar estos pasos, Firebase agrega dos archivos automaticamente
    - Un archivo firebase.json que contiene la configuración del proyecto
    - Un archivo .firebaserc que almacena los alias del proyecto

[Guía de referencía](https://firebase.google.com/docs/hosting/quickstart?hl=es)

## 5. Agrega las variables de entorno
En el directorio raíz del proyecto, crea un archivo .env, con lo siguiente para configurar Firebase
```
    VUE_APP_API_KEY=AIzaSyDxNiOHkk-kfy-WFb1f0qpsjfSTj1h8_m4
    VUE_APP_AUTH_DOMAIN=worgiphy.firebaseapp.com
    VUE_APP_DATABASE_URL=https://worgiphy.firebaseio.com
    VUE_APP_PROJECT_ID=worgiphy
    VUE_APP_STORAGE_BUCKET=worgiphy.appspot.com
    VUE_APP_MESSAGING_SENDER_ID=744364657898
    VUE_APP_APP_ID=1:744364657898:web:ff2257d75cb01dc85d1b93
```

## 6. Compila el proyecto para entorno de desarrollo y habilita "Hot reload"

```
    yarn serve
```
Abre una ventana del navegador, y entra a localhost:8080

## 7. Compila el proyecto para entorno de producción

```
    yarn build
```
Todos los archivos generados son guardados en el directorio 'dist'


## 8. Deploy
```
    yarn deploy
```
