/* ===========================
   ANNIVERSARY WEBSITE - ANIMATIONS JS
   =========================== */

// Intersection Observer for fade-in animations
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initParallax();
});

// ===========================
// SCROLL ANIMATIONS
// ===========================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe message containers
    const messages = document.querySelectorAll('.anniversary-message');
    messages.forEach(msg => {
        msg.style.opacity = '0';
        msg.style.transform = 'translateY(20px)';
        msg.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(msg);
    });

    // Observe game cards
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Observe timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });

    // Observe photo stickers
    const photoStickers = document.querySelectorAll('.photo-sticker');
    photoStickers.forEach((sticker, index) => {
        sticker.style.opacity = '0';
        sticker.style.transform = 'scale(0.8) rotate(5deg)';
        sticker.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(sticker);
    });
}

// ===========================
// PARALLAX EFFECT
// ===========================

function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', function() {
        parallaxElements.forEach(element => {
            const scrollPosition = window.pageYOffset;
            const elementOffset = element.offsetTop;
            const distance = (scrollPosition - elementOffset) * 0.5;
            
            element.style.transform = `translateY(${distance}px)`;
        });
    });
}

// ===========================
// PARTICLE EFFECTS
// ===========================

class ParticleEmitter {
    constructor(element) {
        this.element = element;
        this.particles = [];
    }

    emit(options = {}) {
        const {
            count = 10,
            color = '#FFB6D9',
            size = 10,
            duration = 1000,
            velocity = { x: 1, y: 1 }
        } = options;

        for (let i = 0; i < count; i++) {
            this.createParticle(color, size, duration, velocity);
        }
    }

    createParticle(color, size, duration, velocity) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.pointerEvents = 'none';
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = color;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';

        const rect = this.element.getBoundingClientRect();
        particle.style.left = (rect.width / 2 - size / 2) + 'px';
        particle.style.top = (rect.height / 2 - size / 2) + 'px';

        this.element.appendChild(particle);

        const vx = (Math.random() - 0.5) * velocity.x;
        const vy = (Math.random() - 0.5) * velocity.y;

        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = elapsed / duration;

            if (progress < 1) {
                particle.style.left = (rect.width / 2 - size / 2 + vx * elapsed) + 'px';
                particle.style.top = (rect.height / 2 - size / 2 + vy * elapsed) + 'px';
                particle.style.opacity = 1 - progress;
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };

        animate();
    }
}

// ===========================
// INTERACTIVE HOVER EFFECTS
// ===========================

function initHoverEffects() {
    // Photo stickers hover effect
    const photoStickers = document.querySelectorAll('.photo-sticker');
    photoStickers.forEach(sticker => {
        sticker.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 30px rgba(255, 182, 217, 0.8)';
        });

        sticker.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
        });
    });

    // Game card hover effect
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Button hover effects
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (!this.disabled) {
                this.style.transform = 'scale(1.05)';
            }
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

document.addEventListener('DOMContentLoaded', initHoverEffects);

// ===========================
// SMOOTH PAGE TRANSITIONS
// ===========================

function smoothTransition(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.5s ease';

    // Trigger reflow
    void element.offsetHeight;

    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
}

// ===========================
// RIPPLE EFFECT
// ===========================

function addRippleEffect() {
    const buttons = document.querySelectorAll('button, .timeline-marker, .photo-sticker');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.pointerEvents = 'none';

            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.animation = 'ripple 0.6s ease-out';

            // Add animation if not already in stylesheet
            if (!document.querySelector('style[data-ripple]')) {
                const style = document.createElement('style');
                style.setAttribute('data-ripple', '');
                style.appendChild(document.createTextNode(`
                    @keyframes ripple {
                        to {
                            transform: scale(4);
                            opacity: 0;
                        }
                    }
                `));
                document.head.appendChild(style);
            }

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
}

document.addEventListener('DOMContentLoaded', addRippleEffect);

// ===========================
// GLOWING EFFECT
// ===========================

function addGlowEffect() {
    const glowElements = document.querySelectorAll('.hero-title, .modal-content h2, .modal-content h3');

    glowElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 20px rgba(255, 182, 217, 0.6)';
        });

        element.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    });
}

document.addEventListener('DOMContentLoaded', addGlowEffect);

// ===========================
// CONFETTI ANIMATION
// ===========================

function createConfetti(x, y, count = 20) {
    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = x + 'px';
        confetti.style.top = y + 'px';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        
        const symbols = ['♡', '✨', '🌸', '⭐', '💕'];
        confetti.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        confetti.style.fontSize = Math.random() * 20 + 10 + 'px';
        confetti.style.color = Math.random() > 0.5 ? '#FFB6D9' : '#FF69B4';
        
        document.body.appendChild(confetti);

        const vx = (Math.random() - 0.5) * 8;
        const vy = Math.random() * 5 + 2;
        const duration = Math.random() * 1000 + 1500;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = elapsed / duration;

            if (progress < 1) {
                confetti.style.left = (x + vx * elapsed / 100) + 'px';
                confetti.style.top = (y + vy * elapsed / 100 + progress * progress * 100) + 'px';
                confetti.style.opacity = 1 - progress;
                confetti.style.transform = `rotate(${progress * 360}deg)`;
                requestAnimationFrame(animate);
            } else {
                confetti.remove();
            }
        };

        animate();
    }
}

// ===========================
// HEART PULSE
// ===========================

function addHeartPulse() {
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(`
        @keyframes heartPulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
        }

        .heart-pulse {
            animation: heartPulse 1.5s ease-in-out infinite;
        }
    `));
    document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', addHeartPulse);

// ===========================
// FLOATING ANIMATION UTILS
// ===========================

function makeFloating(element, intensity = 1) {
    const style = document.createElement('style');
    const animationName = 'float-' + Math.random().toString(36).substr(2, 9);
    
    style.appendChild(document.createTextNode(`
        @keyframes ${animationName} {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-${20 * intensity}px);
            }
        }
    `));
    
    document.head.appendChild(style);
    element.style.animation = `${animationName} 3s ease-in-out infinite`;
}

// ===========================
// STAGGER ANIMATION
// ===========================

function staggerChildren(parent, delayBetween = 100) {
    const children = parent.querySelectorAll(':scope > *');
    
    children.forEach((child, index) => {
        child.style.animation = `fadeInUp 0.6s ease-out ${index * delayBetween}ms both`;
    });

    // Ensure animation exists
    if (!document.querySelector('style[data-stagger]')) {
        const style = document.createElement('style');
        style.setAttribute('data-stagger', '');
        style.appendChild(document.createTextNode(`
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `));
        document.head.appendChild(style);
    }
}

// ===========================
// GRADIENT ANIMATION
// ===========================

function addGradientAnimation() {
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(`
        @keyframes gradientShift {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }

        .gradient-animated {
            background-size: 200% 200%;
            animation: gradientShift 8s ease infinite;
        }
    `));
    document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', addGradientAnimation);

// ===========================
// BLUR IN ANIMATION
// ===========================

function addBlurInAnimation() {
    const style = document.createElement('style');
    style.appendChild(document.createTextNode(`
        @keyframes blurIn {
            from {
                opacity: 0;
                filter: blur(10px);
            }
            to {
                opacity: 1;
                filter: blur(0);
            }
        }

        .blur-in {
            animation: blurIn 0.8s ease-out;
        }
    `));
    document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', addBlurInAnimation);

// ===========================
// SECTION REVEAL ANIMATION
// ===========================

function revealOnScroll() {
    const reveals = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => {
        reveal.style.opacity = '0';
        reveal.style.transform = 'translateY(40px)';
        reveal.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(reveal);
    });
}

document.addEventListener('DOMContentLoaded', revealOnScroll);

// ===========================
// EXPORT UTILITIES
// ===========================

window.AnimationUtils = {
    createConfetti,
    makeFloating,
    staggerChildren,
    smoothTransition,
    ParticleEmitter
};
