## Componentes y Slots

Usé _slots_ para poder meter contenido al componente desde el HTML principal sin tener que tocar el JavaScript. Aquí explico rápido cómo se usa cada uno:

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
  --color-fondo-panel: #111;
}
```

### CSS Parts

Sirven para darle estilos específicos a una pieza de adentro del componente desde el CSS normal. Son súper útiles para meterle efectos de _hover_, por ejemplo:

```css
ucr-tarjeta-campana::part(tarjeta):hover {
  transform: translateY(-5px);
}
```
