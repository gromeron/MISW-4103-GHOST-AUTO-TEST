# MISW-4103-GHOST-AUTO-TEST
Repositorio para la clase de Pruebas Automatizadas - Trabajo con Ghost

## Ejecución Semana 7 - Escenarios cypress

### Nota: En la Wiki se encuentran detallados los escenarios de la semana 7 con sus estrategias definidas.

### Ghost v3.41.1
Inicialmente se debe contar con una instalación local de Ghost en su versión 3.41.1, la cual fuú utilizada para realizar la pruebas.

Una vez se tenga la aplicación corriendo se debe registrar un usuario con las siguientes credenciales:

Correo | Clave
---|---
g.romeron2@uniandes.edu.co | 1234567890!

### Cypress

Se debe clonar el repositorio una vez dentro de él se ingreas en la carpeta:

```bash
cd 7-semana/1_ghost-cy-3.41.1
```

Dentro de esta carpeta se deben realizar los siguientes comandos para tener las dependencias necesarias:

```bash
npm i
npm install --save-dev cypress@9.7.0
npm i typescript
npm i dayjs
npm i faker-js/faker --save-dev
```

Finalmente para abrir el cypres se hace con:

```
npx cypress run
```

Desde ahí se puede seleccionar el asser que se quiera correr y se pueden apreciar las pruebas deseadas.

---



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
npm install -g ghost-cli@latest
```

```bash
npm install sqlite3 --save
```

```bash
ghost install 3.41.1 --local --force
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


## 2. Instalación y ejecución de kraken

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

Finalmente, los diferentes tipos de pruebas estan en varios archivos `.feature` los cuales estan renombrados como `.donefeature` y solamente uno de ellos se ejecuta y es el que tenga la extensión `.feature`
# Entrega semana 5: Testing E2E

Las herramientas escogidas por el equipo para realizar el testing E2E fueron Cypress y Kraken. Los scripts y archivos necesarios para ejecutar las pruebas de Cypres estan en la ruta /5-semana/1_ghost_e2e_cypress y los scripts y archivos necesarios para ejecutar las pruebas de Kraken estan en la ruta /5-semana/2_ghost_e2e_kraken.

## Funcionalidades escogidas:

| ID | Funcionalidad | Descripción | Herramientas |
|---|---|---|---|
| [FN01](FN01) | [Iniciar sesión](FN01) | Permitir que un usuario inicie sesión con sus datos personales |  kraken<br>cypress |
| [FN02](FN02) | [Agregar post](FN02) | Permite a un usuario crear un post y publicarlo | kraken<br>cypress |
| [FN04](FN04) | [Crear tags](FN04) | Permite a un usuario crear etiquetas para clasificar el contenido |  kraken<br>cypress |
| [FN03](FN03) | [Crear página](FN03) | Permite al usuario crear paginas para publicar contenido | kraken<br>cypress |
| [FN05](FN05) | [Editar perfil](FN05) | Permite la edicion de los datos del usuario  | kraken<br>cypress |

## Escenarios de pruebas:

| ID | Escenario | Funcionalidad | 
|---|---|---|
|es01|Inicio de sesión con usuario inválido / clave válida|FN01|
|es02|Inicio de sesión con clave inválida / usuario válido|FN01|
|es03|Inicio de sesión sin datos|FN01|
|es04|Inicio de sesión con datos válidos|FN01|
|es05|Usuario logueado - Crear post con título - Navegación|FN02|
|es06|Usuario logueado - Crear post con título - Navegación segundo nivel|FN02|
|es07|Usuario logueado - Crear post con título|FN02|
|es08|Usuario logueado - Crear post con título - Ir al listado de post|FN02|
|es09|Usuario logueado - Crear post con título - Buscar en el listado|FN02|
|es10|Usuario logueado - buscar post existente - publicar|FN03|
|es11|Usuario logueado - buscar post existente - despublicar|FN03|
|es12|Usuario logueado - Crear página con título - Navegación|FN03|
|es13|Usuario logueado - Crear página con título - Navegación segundo nivel|FN03|
|es14|Usuario logueado - Crear página con título|FN03|
|es15|Usuario logueado - Crear página con título - Ir al listado de páginas|FN03|
|es16|Usuario logueado - Crear página con título - Buscar en el listado|FN03|
|es17|Usuario logueado - ver página de tags|FN04|
|es18|Usuario logueado - Crear tag nuevo - Sin información|FN04|
|es19|Usuario logueado - Crear tag nuevo - Con información|FN04|
|es20|Actualizar perfil - Cambiar información Full Name, Slug y Email|FN05|

Comparativo de herramientas de testing E2E utilizadas: https://github.com/gromeron/MISW-4103-Ghost-Auto-Test/wiki/Comparacion


## Entrega Semana 6 - Pruebas VRT

Se corrieron los escenarios de pruebas con Cypress y Kraken en las siguientes versiones de Ghost: 3.44 y 4.44.0 con el objetivo de identificar regresiones entre los features de las dos versiones. Para ejecutar las pruebas en la version más reciente de Ghost, se requirió hacer cambios al codigo de las pruebas (detalle aquí https://github.com/gromeron/MISW-4103-Ghost-Auto-Test/wiki/Impacto-nueva-versi%C3%B3n).
