export function createElement(tag, props = {}) {
    const element = document.createElement(tag);

    // Manejar clases
    if (props.className) {
        element.className = props.className;
    }

    // Manejar atributos
    if (props.attributes) {
        Object.entries(props.attributes).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });
    }

    // Manejar eventos
    if (props.events) {
        Object.entries(props.events).forEach(([event, handler]) => {
            element.addEventListener(event, handler);
        });
    }

    // Manejar contenido de texto
    if (props.textContent !== undefined) {
        element.textContent = props.textContent;
    }

    // Manejar HTML interno
    if (props.innerHTML !== undefined) {
        element.innerHTML = props.innerHTML;
    }

    // Manejar hijos
    if (props.children) {
        props.children.forEach(child => {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child));
            } else {
                element.appendChild(child);
            }
        });
    }

    return element;
}

export function query(selector, context = document) {
    return context.querySelector(selector);
}

export function queryAll(selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
}

export function addClass(element, ...classes) {
    element.classList.add(...classes);
}

export function removeClass(element, ...classes) {
    element.classList.remove(...classes);
}

export function toggleClass(element, className, force) {
    element.classList.toggle(className, force);
}

export function setStyles(element, styles) {
    Object.assign(element.style, styles);
}

export function getData(element, key) {
    return element.dataset[key];
}

export function setData(element, key, value) {
    element.dataset[key] = value;
}

export function onReady(callback) {
    if (document.readyState !== 'loading') {
        callback();
    } else {
        document.addEventListener('DOMContentLoaded', callback);
    }
}

export function createFragment() {
    return document.createDocumentFragment();
}

// Utilidad para manejo de eventos delegados
export function delegate(element, eventType, selector, handler) {
    element.addEventListener(eventType, event => {
        const target = event.target.closest(selector);
        if (target && element.contains(target)) {
            handler.call(target, event);
        }
    });
}