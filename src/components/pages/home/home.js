import './home.css';
import { createScrollAnimation } from '../../../utils/animations.js';
import { queryAll } from '../../../utils/dom.js';

export class HomePage extends HTMLElement {
    constructor() {
        super();
        this.state = {
            isLoaded: false,
            currentSection: 'hero'
        };
    }

    connectedCallback() {
        this.render();
        this.initializeComponents();
        this.setupAnimations();
        this.setupScrollObserver();
        this.handleInitialLoad();
    }

    render() {
        this.innerHTML = `
      <div class="home">
        <app-nav></app-nav>
        
        <main class="home__main">
          <app-hero></app-hero> 
          <app-content 
            class="home__section" 
            id="program"
            data-animate="fade-up"
          ></app-content>
        </main>

        <app-footer></app-footer>

        <!-- Loader overlay -->
        <div class="home__loader ${this.state.isLoaded ? 'home__loader--hidden' : ''}">
          <div class="home__loader-content">
            <div class="home__loader-circle"></div>
          </div>
        </div>
      </div>
    `;
    }

    handleInitialLoad() {
        // Simular tiempo de carga para la animación
        setTimeout(() => {
            this.state.isLoaded = true;
            this.querySelector('.home__loader').classList.add('home__loader--hidden');
            document.body.style.overflow = 'visible';
        }, 800);
    }

    setupAnimations() {
        // Animar elementos cuando entran en viewport
        const animatedElements = queryAll('[data-animate]', this);

        animatedElements.forEach(element => {
            createScrollAnimation(element, {
                threshold: 0.2,
                rootMargin: '50px'
            });
        });
    }

    setupScrollObserver() {
        // Observar qué sección está en vista
        const sections = queryAll('.home__section', this);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.state.currentSection = entry.target.id;
                        this.updateActiveNavLink();
                    }
                });
            },
            {
                threshold: 0.5
            }
        );

        sections.forEach(section => observer.observe(section));
    }

    updateActiveNavLink() {
        // Actualizar link activo en la navegación
        const navLinks = queryAll('.nav-link', this);

        navLinks.forEach(link => {
            const href = link.getAttribute('href').replace('#', '');
            if (href === this.state.currentSection) {
                link.classList.add('nav-link--active');
            } else {
                link.classList.remove('nav-link--active');
            }
        });
    }

    initializeComponents() {
        // Configurar smooth scroll
        this.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    disconnectedCallback() {
        // Cleanup cuando el componente se desmonta
        this.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.removeEventListener('click', null);
        });
    }
}

customElements.define('home-page', HomePage);