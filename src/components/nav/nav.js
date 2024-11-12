import './nav.css';

export class Navigation extends HTMLElement {
  constructor() {
    super();
    this.isOverDayCard = false; // Bandera para rastrear si el nav está sobre el día-card
  }

  connectedCallback() {
    this.render();
    this.checkOverDayCard(); // Comprobar si el nav está sobre el día-card al iniciar
  }

  render() {
    this.innerHTML = `
      <div class="nav-container ${this.isOverDayCard ? 'dark-text' : ''}">
        <nav class="nav-content">
          <a href="#" class="nav-logo">All in 7 Days</a>
          <div class="nav-links">
            <a href="#" class="nav-link">Home</a>
            <a href="#program" class="nav-link">Program</a>
            <a href="#" class="nav-link">Community</a>
          </div>
        </nav>
      </div>
    `;
  }

  checkOverDayCard() {
    // Comprueba si el nav está sobre un componente day-card
    const dayCards = document.querySelectorAll('day-card');
    this.isOverDayCard = Array.from(dayCards).some(card => {
      const rect = card.getBoundingClientRect();
      return (
        rect.top <= window.innerHeight &&
        rect.bottom >= 0 &&
        rect.left <= window.innerWidth &&
        rect.right >= 0
      );
    });
    this.render(); // Vuelve a renderizar con la clase actualizada
  }
}

customElements.define('app-nav', Navigation);