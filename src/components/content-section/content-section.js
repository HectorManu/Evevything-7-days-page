import './content-section.css';

export class ContentSection extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
      <section id="program" class="content-section">
        <div class="content-container">
          <h2 class="section-title">Learning Path</h2>
          <div id="days-container">
            <!-- Las tarjetas se generarán dinámicamente -->
          </div>
        </div>
      </section>
    `;
    }
}

customElements.define('app-content', ContentSection);