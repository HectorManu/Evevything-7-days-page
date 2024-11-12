import './hero.css';

export class Hero extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    this.render();
    await this.initializeParticles();
  }

  async initializeParticles() {
    try {
      const particlesConfig = {
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#BE95C4"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.5,
            random: true
          },
          size: {
            value: 3,
            random: true
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#9F86C0",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            push: {
              particles_nb: 4
            }
          }
        },
        retina_detect: true
      };

      await tsParticles.load("particles-js", particlesConfig);
    } catch (error) {
      console.error("Error initializing particles:", error);
    }
  }

  render() {
    this.innerHTML = `
      <section class="hero">
        <div id="particles-js" class="particles-container"></div>
        <div class="hero-content">
          <div class="hero-box">
            <h1>Data Engineering</h1>
            <p>All in 7 Days</p>
            <div class="buttons">
              <a href="https://github.com/tuusuario/data-engineering-7days" 
                 class="btn btn-primary" 
                 target="_blank">
                Start Learning
              </a>
              <a href="#program" class="btn btn-outline">
                View Program
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
  initializeAnimations() {
    // Inicializar animaciones
  }
}

customElements.define('app-hero', Hero);