# Laboratorio: Señalador UCR con Web Components

¡Hola! Este es el proyecto para el recorrido virtual de la Sede Guanacaste de la UCR. 
Para este laboratorio, tomé el código HTML normal y convertí las secciones principales en **Web Components** propios usando solo JavaScript (sin frameworks).

## ¿Cómo funciona?

Para que los componentes funcionen, solo hay que enlazar el archivo de JavaScript en el `<head>` del HTML así:

```html
<script type="module" src="js/components.js"></script>
```

A partir de ahí, ya se pueden usar las nuevas etiquetas personalizadas directo en el código.

## Componentes y Slots

Usé *slots* para poder meter contenido al componente desde el HTML principal sin tener que tocar el JavaScript. Aquí explico rápido cómo se usa cada uno:

### 1. Pantalla de Bienvenida (`<ucr-bienvenida>`)
Sirve para la primera vista de la página.
- `slot="titulares"`: Aquí se ponen los títulos (como el logo grande de la UCR y los textos).
- `slot="indicador"`: Aquí va el texto y la flechita animada que le dicen al usuario que baje.

### 2. Tarjeta de Campaña (`<ucr-tarjeta-campana>`)
Es la tarjeta amarilla de la campaña institucional.
- `slot="icono"`: Para el emoji o icono animado de la esquina superior izquierda.
- `slot="contenido"`: Para todo lo de adentro (títulos, texto, la foto y el código QR).

### 3. Letrero de Direcciones (`<ucr-letrero>`)
Es el poste con las direcciones de las aulas y los laboratorios.
- **Slot normal (sin nombre)**: Aquí se meten todos los enlaces (`<a>`) con los nombres de las direcciones.
- `slot="logo"`: Para las letritas de "UCR" que van en la base de la caja azul.

---

## Estilos: Variables y Parts (Guía de revisión)

Para que el diseño se pueda modificar fácilmente desde el `style.css` principal, dejé listas unas variables CSS y expuse algunas partes de los componentes con `::part`.

### Variables CSS
Se pueden cambiar directo llamando a la etiqueta en el CSS, por ejemplo:
```css
ucr-letrero {
  --color-fondo-panel: #111; /* Cambia el color del letrero */
}
```

| Componente | Variable | ¿Qué hace? |
| --- | --- | --- |
| **Tarjeta Campaña** | `--bg-tarjeta` | Color de fondo principal |
| **Tarjeta Campaña** | `--color-borde-tarjeta` | Color del borde de la tarjeta |
| **Tarjeta Campaña** | `--radius-tarjeta` | Qué tan redondeadas son las esquinas |
| **Letrero** | `--color-fondo-panel` | Fondo azul de la caja |
| **Letrero** | `--color-borde-panel` | Borde oscuro alrededor de la caja |
| **Letrero** | `--bg-poste` | Color/Degradado del tubo que sostiene el letrero |

### CSS Parts
Sirven para darle estilos específicos a una pieza de adentro del componente desde el CSS normal. Son súper útiles para meterle efectos de *hover*, por ejemplo:
```css
ucr-tarjeta-campana::part(tarjeta):hover {
  transform: translateY(-5px); /* Hace que la tarjeta flote un poco */
}
```

| Componente | Part expuesto | ¿Para qué sirve? |
| --- | --- | --- |
| **Bienvenida** | `contenedor` | La caja invisible que centra todo el texto |
| **Tarjeta Campaña** | `tarjeta` | Toda la caja amarilla en sí |
| **Tarjeta Campaña** | `icono` | El emoji animado de la esquina |
| **Letrero** | `panel` | La caja azul principal donde van los textos |
| **Letrero** | `poste` | El tubo gris de abajo |
| **Letrero** | `logo` | El texto de la UCR hasta abajo del letrero |
