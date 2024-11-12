export function createAnimation(element, options = {}) {
    const defaultOptions = {
        duration: 300,
        easing: 'ease',
        ...options
    };

    return {
        expand(targetHeight) {
            const animation = element.animate([
                {
                    height: '0',
                    opacity: '0',
                    padding: '0'
                },
                {
                    height: `${targetHeight}px`,
                    opacity: '1',
                    padding: '1.5rem'
                }
            ], {
                duration: defaultOptions.duration,
                easing: defaultOptions.easing,
                fill: 'forwards'
            });

            return animation.finished;
        },

        collapse() {
            const animation = element.animate([
                {
                    height: `${element.offsetHeight}px`,
                    opacity: '1',
                    padding: '1.5rem'
                },
                {
                    height: '0',
                    opacity: '0',
                    padding: '0'
                }
            ], {
                duration: defaultOptions.duration,
                easing: defaultOptions.easing,
                fill: 'forwards'
            });

            return animation.finished;
        },

        fadeIn() {
            const animation = element.animate([
                { opacity: 0 },
                { opacity: 1 }
            ], {
                duration: defaultOptions.duration,
                easing: defaultOptions.easing,
                fill: 'forwards'
            });

            return animation.finished;
        },

        fadeOut() {
            const animation = element.animate([
                { opacity: 1 },
                { opacity: 0 }
            ], {
                duration: defaultOptions.duration,
                easing: defaultOptions.easing,
                fill: 'forwards'
            });

            return animation.finished;
        }
    };
}

export function createScrollAnimation(element, options = {}) {
    const defaultOptions = {
        threshold: 0.1,
        rootMargin: '0px',
        ...options
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, defaultOptions);

    observer.observe(element);

    return {
        destroy() {
            observer.disconnect();
        }
    };
}