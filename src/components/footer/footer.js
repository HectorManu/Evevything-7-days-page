import './footer.css';

export class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-section">
            <h3>About the Course</h3>
            <p>A comprehensive 7-day journey into Data Engineering. Learn at your own pace with our carefully curated content and hands-on projects.</p>
          </div>
          
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul class="footer-links">
              <li>
                <a href="#" class="footer-link">
                  <i class="bi bi-arrow-right"></i>
                  Course Overview
                </a>
              </li>
              <li>
                <a href="#" class="footer-link">
                  <i class="bi bi-arrow-right"></i>
                  Resources
                </a>
              </li>
              <li>
                <a href="https://github.com/tuusuario/data-engineering-7days" class="footer-link" target="_blank">
                  <i class="bi bi-arrow-right"></i>
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="#" class="footer-link">
                  <i class="bi bi-arrow-right"></i>
                  Community
                </a>
              </li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h3>Connect With Us</h3>
            <p>Join our community and stay updated with the latest in Data Engineering.</p>
            <div class="social-links">
              <a href="https://github.com/tuusuario" class="social-link" target="_blank">
                <i class="bi bi-github"></i>
              </a>
              <a href="https://linkedin.com/in/tuusuario" class="social-link" target="_blank">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="https://twitter.com/tuusuario" class="social-link" target="_blank">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="https://discord.gg/tuservidor" class="social-link" target="_blank">
                <i class="bi bi-discord"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} All in 7 Days. Open Source Project.</p>
        </div>
      </footer>
    `;
    }
}

customElements.define('app-footer', Footer);