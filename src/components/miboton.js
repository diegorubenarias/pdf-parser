export class MiBoton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.contador = 0;
  }

  // Se ejecuta cuando el componente se inserta en el DOM
  connectedCallback() {
    this.render();
    this.setupEvent();
  }

  // Estructura y estilos del componente
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        button {
          background-color: #646cff;
          color: white;
          border: none;
          padding: 10px 20px;
          font-size: 16px;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.25s;
        }
        button:hover {
          background-color: #535bf2;
        }
      </style>
      <button id="btn">Clicks: ${this.contador}</button>
    `;
  }

  // Lógica de interactividad
  setupEvent() {
    const boton = this.shadowRoot.querySelector('#btn');
    boton.addEventListener('click', () => {
      this.contador++;
      boton.textContent = `Clicks: ${this.contador}`;
    });
  }
}

// Registrar el componente con un nombre de etiqueta personalizado
customElements.define('mi-boton', MiBoton);
