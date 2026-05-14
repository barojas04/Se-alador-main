// Web Component: ucr-bienvenida
const templateBienvenida = document.createElement('template');
templateBienvenida.innerHTML = `
<style>
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .contenido-centro {
    text-align: center;
  }
</style>
<div class="contenido-centro" part="contenedor">
  <slot name="titulares"></slot>
  <slot name="indicador"></slot>
</div>
`;

class UcrBienvenida extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.appendChild(templateBienvenida.content.cloneNode(true));
  }
}
customElements.define('ucr-bienvenida', UcrBienvenida);


// Web Component: ucr-tarjeta-campana
const templateCampana = document.createElement('template');
templateCampana.innerHTML = `
<style>
  .tarjeta-campana-creativa {
    background: var(--bg-tarjeta, #ffd966);
    max-width: var(--ancho-tarjeta, 450px);
    padding: var(--padding-tarjeta, 40px);
    border-radius: var(--radius-tarjeta, 20px);
    text-align: center;
    box-shadow: var(--sombra-tarjeta, 0 15px 45px rgba(0,0,0,0.2));
    border: var(--grosor-borde-tarjeta, 4px) solid var(--color-borde-tarjeta, #f39c12);
    position: relative;
  }
  .icono-animado-creativo {
    font-size: var(--size-icono, 3rem);
    position: absolute;
    top: -25px;
    left: -25px;
    transform: rotate(-15deg);
    animation: pulso 1.5s infinite;
  }
  @keyframes pulso {
    0%, 100% { transform: rotate(-15deg) scale(1); }
    50% { transform: rotate(-10deg) scale(1.1); }
  }
</style>
<div class="tarjeta-campana-creativa" part="tarjeta">
  <div class="icono-animado-creativo" part="icono">
    <slot name="icono">📢</slot>
  </div>
  <div part="contenido">
    <slot name="contenido"></slot>
  </div>
</div>
`;

class UcrTarjetaCampana extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.appendChild(templateCampana.content.cloneNode(true));
  }
}
customElements.define('ucr-tarjeta-campana', UcrTarjetaCampana);


// Web Component: ucr-letrero
const templateLetrero = document.createElement('template');
templateLetrero.innerHTML = `
<style>
  :host {
    display: block;
    position: relative;
    z-index: 10;
    width: 100%;
  }
  .letrero-estructura {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: var(--altura-letrero, 85vh);
  }
  .letrero-panel {
    background-color: var(--color-fondo-panel, #004a99);
    width: var(--ancho-panel, 450px);
    max-width: 90%;
    border-radius: var(--radius-panel, 6px);
    border: var(--grosor-borde-panel, 3px) solid var(--color-borde-panel, #002d5e);
    padding: var(--padding-panel, 25px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.4), inset 0 0 10px rgba(0,0,0,0.3);
    position: relative;
    z-index: 11;
  }
  .letrero-poste {
    width: var(--ancho-poste, 50px);
    height: var(--altura-poste, 350px);
    background: var(--bg-poste, linear-gradient(to right, #666 0%, #aaa 50%, #555 100%));
    box-shadow: 5px 0 15px rgba(0,0,0,0.5);
    margin-top: -20px;
    z-index: 10;
  }
  .lista-direcciones-letrero {
    display: flex;
    flex-direction: column;
  }
  .logo-ucr-letrero {
    text-align: center;
    color: var(--color-texto-logo, #ffffff);
    font-size: var(--size-texto-logo, 2.2rem);
    font-weight: 900;
    margin-top: 25px;
    letter-spacing: 4px;
    opacity: 0.8;
  }
</style>
<div class="letrero-estructura" part="estructura">
  <div class="letrero-panel" part="panel">
    <div class="lista-direcciones-letrero" part="lista-direcciones">
      <slot></slot>
    </div>
    <div class="logo-ucr-letrero" part="logo">
      <slot name="logo">UCR</slot>
    </div>
  </div>
  <div class="letrero-poste" part="poste"></div>
</div>
`;

class UcrLetrero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.appendChild(templateLetrero.content.cloneNode(true));
  }
}
customElements.define('ucr-letrero', UcrLetrero);
