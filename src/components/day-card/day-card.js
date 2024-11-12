import './day-card.css';

export class DayCard extends HTMLElement {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  addEventListeners() {
    const header = this.querySelector('.day-card__header');
    header.addEventListener('click', () => {
      this.toggleCard();
    });
  }

  toggleCard() {
    this.state.isOpen = !this.state.isOpen;
    this.classList.toggle('open', this.state.isOpen);

    const content = this.querySelector('.day-card__content');
    const contentHeight = content.scrollHeight;

    if (this.state.isOpen) {
      content.style.maxHeight = `${contentHeight}px`;
    } else {
      content.style.maxHeight = '0';
    }
  }

  render() {
    const day = this.getAttribute('day');
    const title = this.getAttribute('title');
    const topics = JSON.parse(this.getAttribute('topics') || '[]');

    this.innerHTML = `
      <div class="day-card">
        <div class="day-card__header">
          <span class="day-card__title">Día ${day}: ${title}</span>
          <span class="day-card__toggle">
            <i class="bi bi-chevron-down"></i>
          </span>
        </div>
        
        <div class="day-card__content">
          <div class="day-card__section">
            <h3 class="day-card__subtitle">Temas del día:</h3>
            <ul class="day-card__topics">
              ${topics.map(topic => `
                <li class="day-card__topic">${topic}</li>
              `).join('')}
            </ul>
          </div>

          <div class="day-card__section">
            <h3 class="day-card__subtitle">Recursos:</h3>
            <ul class="day-card__resources">
              <li>
                <a href="#" class="day-card__resource-link">
                  <i class="bi bi-file-text"></i>
                  Material del día
                </a>
              </li>
              <li>
                <a href="#" class="day-card__resource-link">
                  <i class="bi bi-code-square"></i>
                  Ejercicios
                </a>
              </li>
              <li>
                <a href="#" class="day-card__resource-link">
                  <i class="bi bi-book"></i>
                  Recursos adicionales
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('day-card', DayCard);