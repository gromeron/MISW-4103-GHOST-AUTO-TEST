# MISW-4103-GHOST-AUTO-TEST
Repositorio para la clase de Pruebas Automatizadas - Trabajo con Ghost

## 1. Instalación Ghost - local

Para instalar Ghost en la versión 3.41.1 en la cual se hicieron las pruebas, se clona el repositorio con:

```bash
git clone https://github.com/gromeron/MISW-4103-Ghost-Auto-Test.git
```

después se entra a la carpeta de la instalación de ghost local que es

```bash
cd /MISW-4103-GHOS-AUTO-TEST/1-ghost-local
```

Luego se ejecuta la aplicación ghost con

```bash
ghost start
```

En caso de presentar errores proceder con la instalación de la versión del cypress utilizada en este proyecto, mediante la instrucción desde la carpeta del proyecto clonado del repositorio con

```bash
ghost install 3.41.1 --local --force
```

```bash
npm install -g ghost-cli@latest
```

```bash
npm install sqlite3 --save
```

Si esto no funciona, se puede borrar el contenido de la carpeta local y ejecutar desde esta el siguiente comando

```bash
ghost update v.3.41.1 --force
```

Posteriormente volver a ejecutar

```bash
ghost start
```

Despues de instalado, ingresar a la url `http://localhost:2368/ghost/`, una vez adentro registrar un usuario con las credenciales

```bash
Correo: g.romeron2@uniandes.edu.co
Clave: 1234567890!
```

## 2. Instalación y ejecución de cypress

Dentro de la carpeta del repositorio entrar en

```bash
cd /MISW-4103-GHOS-AUTO-TEST/5-semana/1_ghost_e2e_cypress
```

Se instalan las dependecias con

```bash
npm install
```

Se ejecuta el set de pruebas con

```bash
cypress run
```

## 3. Instalación y ejecución de kraken

Dentro de la carpeta del repositorio entrar en

```bash
cd /MISW-4103-GHOS-AUTO-TEST/5-semana/2_ghost_e2e_kraken
```

Se instalan las dependecias con

```bash
npm install
```

Igualmente se debe instalar el módulo de kraken con

```bash
npm install kraken-node
```

Se ejecuta el set de pruebas con

```bash
./node_modules/kraken-node/bin/kraken-node run
```

En caso de tener un error se debe instalar el ADB, para cada SO

* Para linux
    ```bash
    sudo apt-get install android-tools-adb
    ```

Finalmente, los diferentes tipos de pruebas estan en varios archivos `.feature` los cuales estan renombrados como `.nofeature` y solamente uno de ellos se ejecuta y es el que tenga la extensión `.feature`