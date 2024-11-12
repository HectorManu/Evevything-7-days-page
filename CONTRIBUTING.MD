# Guía de Contribución - All in 7 Days

## 🎯 Filosofía del Proyecto

"All in 7 Days" sigue estos principios fundamentales:

1. **Simplicidad**: 
   - Código limpio y directo usando Web Components
   - Mínimo de dependencias externas
   - Soluciones eficientes y mantenibles

2. **Performance**:
   - Carga rápida y eficiente
   - Código optimizado
   - Componentes ligeros

3. **Accesibilidad**:
   - Contenido estructurado y claro
   - Experiencia de usuario intuitiva
   - Diseño responsive

## 🏗 Estructura del Proyecto

```
all-in-7-days/
├── index.html
├── main.js
├── package.json
├── vite.config.js
├── src/
    ├── components/
    │   ├── nav/
    │   │   ├── nav.js
    │   │   └── nav.css
    │   ├── hero/
    │   │   ├── hero.js
    │   │   └── hero.css
    │   ├── content-section/
    │   │   ├── content-section.js
    │   │   └── content-section.css
    │   ├── day-card/
    │   │   ├── day-card.js
    │   │   └── day-card.css
    │   ├── footer/
    │   │   ├── footer.js
    │   │   └── footer.css
    │   └── pages/
    │       └── home/
    │           ├── home.js
    │           └── home.css
    ├── styles/
    │   ├── variables.css
    │   └── global.css
    ├── utils/
    │   ├── animations.js
    │   └── dom.js
    └── data/
        └── days.js
```

### Organización de Carpetas

#### components/
Contiene todos los componentes web reutilizables del proyecto:
- **nav/**: Barra de navegación principal
- **hero/**: Sección hero con partículas
- **content-section/**: Sección de contenido del learning path
- **day-card/**: Tarjetas de días individuales
- **footer/**: Pie de página
- **pages/**: Páginas completas que integran otros componentes
  - **home/**: Página principal que orquesta todos los componentes

### Pages
Cada página en la carpeta `pages/` actúa como un contenedor que:
- Integra múltiples componentes
- Maneja la lógica de la página
- Gestiona el estado global si es necesario
- Coordina las interacciones entre componentes

Ejemplo de estructura de una página:

```javascript
// src/components/pages/home/home.js
import './home.css';
import { createScrollAnimation } from '../../../utils/animations.js';
import { queryAll } from '../../../utils/dom.js';

export class HomePage extends HTMLElement {
  constructor() {
    super();
    this.state = {
      currentSection: 'hero'
    };
  }

  connectedCallback() {
    this.render();
    this.setupAnimations();
    this.initializeComponents();
  }

  render() {
    this.innerHTML = `
      <app-nav></app-nav>
      <app-hero></app-hero>
      <app-content></app-content>
      <app-footer></app-footer>
    `;
  }

  setupAnimations() {
    // Configurar animaciones de scroll, etc.
  }

  initializeComponents() {
    // Inicializar y coordinar componentes
  }
}

customElements.define('home-page', HomePage);
```

### Convenciones para Pages

1. **Estructura**:
```
pages/
└── page-name/
    ├── page-name.js    # Lógica y composición de la página
    └── page-name.css   # Estilos específicos de la página
```

2. **Nomenclatura**:
- Nombres en kebab-case para archivos
- PascalCase para clases de componentes
- Sufijo 'Page' para las clases de páginas

3. **Responsabilidades**:
- Composición de componentes
- Manejo de estado global
- Coordinación de eventos entre componentes
- Inicialización de servicios necesarios

4. **Importaciones**:
```javascript
// Orden recomendado de imports
import './page-name.css';                          // Estilos
import { utilities } from '../../../utils/...';    // Utilidades
import { services } from '../../../services/...';  // Servicios
import '../../components/...';                     // Componentes
```

### Guía de Desarrollo de Pages

1. **Crear nueva página**:
```bash
# Crear directorio
mkdir -p src/components/pages/nueva-pagina

# Crear archivos
touch src/components/pages/nueva-pagina/nueva-pagina.js
touch src/components/pages/nueva-pagina/nueva-pagina.css
```

2. **Estructura base**:
```javascript
import './nueva-pagina.css';

export class NuevaPagina extends HTMLElement {
  constructor() {
    super();
    this.state = {
      // Estado inicial
    };
  }

  connectedCallback() {
    this.render();
    this.initializeComponents();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = `
      <!-- Composición de componentes -->
    `;
  }

  initializeComponents() {
    // Inicialización de componentes
  }

  addEventListeners() {
    // Event listeners globales
  }
}

customElements.define('nueva-pagina', NuevaPagina);
```

3. **CSS de página**:
```css
/* nueva-pagina.css */
:host {
  display: block;
  width: 100%;
}

/* Estilos específicos de la página */
.page-container {
  max-width: var(--container-width);
  margin: 0 auto;
}
```

Esta estructura facilita:
- Organización clara del código
- Separación de responsabilidades
- Mantenimiento más sencillo
- Escalabilidad del proyecto

¿Necesitas que profundice en algún aspecto específico de la estructura o que agregue más detalles sobre alguna parte?
### Componentes
Cada componente es un Web Component independiente que sigue esta estructura:
```
component-name/
├── component-name.js    # Clase del componente y lógica
└── component-name.css   # Estilos específicos del componente
```

### Convenciones

#### JavaScript
- Web Components nativos
- Clases con extensión de HTMLElement
- Métodos connectedCallback para inicialización
- Gestión de estado interna en cada componente

#### CSS
- Variables CSS definidas en variables.css
- Metodología BEM para clases
- Estilos específicos por componente
- Media queries para responsive design

#### Nomenclatura
- kebab-case para archivos y carpetas
- PascalCase para clases de componentes
- camelCase para variables y métodos
- BEM para clases CSS

## 🤝 Cómo Contribuir

### 1. Tipos de Contribuciones

#### 🐛 Reportar Bugs
```md
Título: [BUG] - Descripción corta del problema

**Comportamiento Esperado:**
- Qué debería suceder

**Comportamiento Actual:**
- Qué está sucediendo

**Pasos para Reproducir:**
1. Paso 1
2. Paso 2

**Capturas de Pantalla:**
(Si aplica)

**Entorno:**
- Navegador:
- SO:
- Dispositivo:
```

#### 🎨 Mejoras de UI/UX
```md
Título: [UI] - Descripción de la mejora

**Problema Actual:**
- Descripción del problema de usabilidad

**Mejora Propuesta:**
- Descripción de la solución
- Mockups/Screenshots (si aplica)

**Beneficios:**
- Lista de beneficios
```

#### 📝 Nuevo Contenido
```md
Título: [CONTENT] - Tema o sección a agregar

**Descripción:**
- Detalle del contenido a agregar

**Ubicación:**
- Día/sección donde se agregará

**Referencias:**
- Fuentes o recursos relevantes
```

### 2. Proceso de Desarrollo

1. **Setup Inicial**
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/all-in-7-days
cd all-in-7-days

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

2. **Crear Nuevo Componente**
```bash
# Crear directorio del componente
mkdir -p src/components/mi-componente

# Crear archivos necesarios
touch src/components/mi-componente/mi-componente.js
touch src/components/mi-componente/mi-componente.css
```

3. **Estructura Base de Componente**
```javascript
import './mi-componente.css';

export class MiComponente extends HTMLElement {
  constructor() {
    super();
    this.state = {};
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.innerHTML = `
      <!-- Template del componente -->
    `;
  }

  addEventListeners() {
    // Event listeners
  }
}

customElements.define('mi-componente', MiComponente);
```

4. **Importar Componente**
```javascript
// En main.js
import './src/components/mi-componente/mi-componente.js';
```

### 3. Commits y Pull Requests

1. **Ramas**
```bash
# Para nuevos componentes
git checkout -b feature/nuevo-componente

# Para correcciones
git checkout -b fix/nombre-error

# Para contenido
git checkout -b content/dia-nuevo
```

2. **Commits Semánticos**
```bash
# Formato
git commit -m "tipo(alcance): descripción"

# Ejemplos
git commit -m "feat(day-card): agregar animación de apertura"
git commit -m "fix(nav): corregir posición en móviles"
git commit -m "style(hero): actualizar paleta de colores"
```

### 4. Checklist de PR

- [ ] Componente sigue las convenciones establecidas
- [ ] Estilos siguen metodología BEM
- [ ] Diseño es responsive
- [ ] No hay console.logs
- [ ] Se han agregado comentarios donde es necesario
- [ ] Se ha probado en diferentes navegadores

### 5. Recursos y Documentación

- [Web Components MDN](https://developer.mozilla.org/es/docs/Web/Web_Components)
- [Custom Elements v1](https://developers.google.com/web/fundamentals/web-components/customelements)
- [CSS Variables](https://developer.mozilla.org/es/docs/Web/CSS/Using_CSS_custom_properties)
- [BEM Methodology](https://en.bem.info/methodology/)

## 📜 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo LICENSE para más detalles.