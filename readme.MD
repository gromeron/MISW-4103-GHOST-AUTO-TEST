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
