import './src/styles/variables.css';
import './src/styles/global.css';
import './src/components/nav/nav.js';
import './src/components/hero/hero.js';
import './src/components/content-section/content-section.js';
import './src/components/day-card/day-card.js';
import './src/components/footer/footer.js';
// En main.js
import './src/components/pages/home/home.js';
import { daysData } from './src/data/days.js';

document.addEventListener('DOMContentLoaded', () => {
  // Renderizar tarjetas de días
  const daysContainer = document.querySelector('#days-container');
  if (daysContainer) {
    daysData.forEach(day => {
      const dayCard = document.createElement('day-card');
      dayCard.setAttribute('day', day.day);
      dayCard.setAttribute('title', day.title);
      dayCard.setAttribute('topics', JSON.stringify(day.topics));
      daysContainer.appendChild(dayCard);
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});