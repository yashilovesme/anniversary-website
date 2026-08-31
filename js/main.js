/* ===========================
   ANNIVERSARY WEBSITE - MAIN JS
   =========================== */

// Configuration - Easy to customize
const anniversaryConfig = {
    person1: "Saksham",
    person2: "Yashica",
    anniversaryDate: "2026-09-01T00:20:00",
    
    photos: [
        {
            src: "assets/photos/photo1.png",
            caption: "That moment ♡"
        },
        {
            src: "assets/photos/photo2.png",
            caption: "One of my favorites"
        },
        {
            src: "assets/photos/photo3.png",
            caption: "Still makes me smile"
        },
        {
            src: "assets/photos/photo4.png",
            caption: "Forever in my heart"
        }
    ],

    timelineItems: [
        {
            title: "The Beginning",
            description: "Where everything started.",
            details: "It all began with a single moment that changed everything. That day when we first connected, I knew something special was happening. Little did we know where this journey would take us."
        },
        {
            title: "The First Few Days",
            description: "Getting to know each other a little more.",
            details: "Those early conversations felt so natural. We talked about everything—our dreams, our fears, our favorite things. Every message felt like we were peeling back layers to understand each other better."
        },
        {
            title: "The Random Moments",
            description: "The conversations, jokes and tiny memories.",
            details: "It's the small things that matter most. The inside jokes, the unexpected messages, the times we made each other laugh for no reason. These moments are the threads that weave our story together."
        },
        {
            title: "One Month",
            description: "And somehow, here we are.",
            details: "Thirty days have passed, but it feels like so much longer because every moment with you has been so full and meaningful. Here's to celebrating this milestone and to the infinite moments yet to come."
        }
    ]
};

// ===========================
// GLOBAL STATE
// ===========================

let secretFlowerClicks = 0;
let easterEggClicks = 0;
let audioAvailable = true;

// ===========================
// INITIALIZE
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initParticles();
    initEnterButton();
    initCountdown();
    initTimeline();
    initScrapbook();
    initSecretFlower();
    initEasterEgg();
    initEnvelopeInteraction();
    initMusicControl();
    checkAudioAvailability();
});

// ===========================
// NAVIGATION
// ===========================

function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when link clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ===========================
// PARTICLES ANIMATION
// ===========================

function initParticles() {
    const particlesContainer = document.getElementById('particles');
    
    if (!particlesContainer) return;

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.background = Math.random() > 0.5 ? '#FFB6D9' : '#FF69B4';
        particle.style.borderRadius = '50%';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        
        particlesContainer.appendChild(particle);
        
        const duration = Math.random() * 3 + 2;
        const keyframes = `
            @keyframes particleFloat {
                0% { transform: translate(0, 0) scale(1); opacity: ${Math.random() * 0.5 + 0.2}; }
                100% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 + 50}px) scale(0.5); opacity: 0; }
            }
        `;
        
        const style = document.createElement('style');
        style.appendChild(document.createTextNode(keyframes));
        document.head.appendChild(style);
        
        particle.style.animation = `particleFloat ${duration}s ease-out forwards`;
        
        setTimeout(() => particle.remove(), duration * 1000);
    }

    // Create initial particles
    for (let i = 0; i < 20; i++) {
        setTimeout(createParticle, i * 100);
    }

    // Create new particles periodically
    setInterval(createParticle, 1000);
}

// ===========================
// ENTER BUTTON
// ===========================

function initEnterButton() {
    const enterBtn = document.getElementById('enterBtn');
    
    if (!enterBtn) return;

    enterBtn.addEventListener('click', function() {
        // Hide hero, show introduction
        document.getElementById('home').style.display = 'none';
        
        const introSection = document.getElementById('introduction');
        if (introSection) {
            introSection.classList.remove('hidden');
            
            // Scroll to introduction smoothly
            setTimeout(() => {
                introSection.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }

        // Trigger petal animation
        triggerPetalAnimation();
    });
}

function triggerPetalAnimation() {
    const petals = 30;
    for (let i = 0; i < petals; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.style.position = 'fixed';
            petal.style.left = Math.random() * window.innerWidth + 'px';
            petal.style.top = '0px';
            petal.style.fontSize = '2rem';
            petal.style.pointerEvents = 'none';
            petal.style.zIndex = '50';
            petal.textContent = '♡';
            petal.style.opacity = '0.8';
            petal.style.color = Math.random() > 0.5 ? '#FFB6D9' : '#FF69B4';
            document.body.appendChild(petal);

            const duration = Math.random() * 2 + 2;
            const keyframes = `
                @keyframes petalFall {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(${window.innerHeight}px) rotate(360deg); opacity: 0; }
                }
            `;
            
            const style = document.createElement('style');
            style.appendChild(document.createTextNode(keyframes));
            document.head.appendChild(style);

            petal.style.animation = `petalFall ${duration}s ease-in forwards`;

            setTimeout(() => petal.remove(), duration * 1000);
        }, i * 50);
    }
}

// ===========================
// COUNTDOWN TIMER
// ===========================

function initCountdown() {
    const anniversaryDate = new Date(anniversaryConfig.anniversaryDate).getTime();
    const countdownText = document.getElementById('countdownText');
    const countdownTimer = document.getElementById('countdownTimer');

    if (!countdownText || !countdownTimer) return;

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = anniversaryDate - now;

        if (timeLeft <= 0) {
            countdownText.textContent = "It's our day. ♡";
            countdownTimer.innerHTML = '';
            triggerAnniversaryCelebration();
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        let timerHTML = '';
        if (days > 0) {
            timerHTML += `<div class="countdown-item"><div class="countdown-value">${days}</div><div class="countdown-label">Days</div></div>`;
        }
        timerHTML += `<div class="countdown-item"><div class="countdown-value">${hours}</div><div class="countdown-label">Hours</div></div>`;
        timerHTML += `<div class="countdown-item"><div class="countdown-value">${minutes}</div><div class="countdown-label">Minutes</div></div>`;
        timerHTML += `<div class="countdown-item"><div class="countdown-value">${seconds}</div><div class="countdown-label">Seconds</div></div>`;

        countdownTimer.innerHTML = timerHTML;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function triggerAnniversaryCelebration() {
    // Create celebration animation
    const celebration = 50;
    for (let i = 0; i < celebration; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.top = Math.random() * window.innerHeight + 'px';
            particle.style.fontSize = '2rem';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '50';
            particle.style.opacity = '1';
            particle.style.color = Math.random() > 0.5 ? '#FFB6D9' : '#FF69B4';
            
            const symbols = ['♡', '♡', '✨', '🌸'];
            particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            document.body.appendChild(particle);

            const duration = Math.random() * 2 + 1.5;
            const keyframes = `
                @keyframes celebrationBurst {
                    0% { transform: translate(0, 0) scale(1); opacity: 1; }
                    100% { transform: translate(${Math.random() * 400 - 200}px, ${Math.random() * 400 - 200}px) scale(0); opacity: 0; }
                }
            `;
            
            const style = document.createElement('style');
            style.appendChild(document.createTextNode(keyframes));
            document.head.appendChild(style);

            particle.style.animation = `celebrationBurst ${duration}s ease-out forwards`;

            setTimeout(() => particle.remove(), duration * 1000);
        }, i * 30);
    }
}

// ===========================
// TIMELINE
// ===========================

function initTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const milestoneModal = document.getElementById('milestoneModal');
    const milestoneTitle = document.getElementById('milestoneTitle');
    const milestoneText = document.getElementById('milestoneText');
    const modalClose = milestoneModal?.querySelector('.modal-close');

    if (!timelineItems.length) return;

    timelineItems.forEach((item, index) => {
        const marker = item.querySelector('.timeline-marker');
        
        if (marker) {
            marker.addEventListener('click', function(e) {
                e.stopPropagation();
                showMilestoneModal(index);
            });
        }

        const content = item.querySelector('.timeline-content');
        if (content) {
            content.addEventListener('click', function(e) {
                e.stopPropagation();
                showMilestoneModal(index);
            });
        }
    });

    function showMilestoneModal(index) {
        const milestone = anniversaryConfig.timelineItems[index];
        
        if (milestone && milestoneModal && milestoneTitle && milestoneText) {
            milestoneTitle.textContent = milestone.title;
            milestoneText.textContent = milestone.details;
            milestoneModal.classList.add('active');
        }
    }

    if (modalClose) {
        modalClose.addEventListener('click', function() {
            milestoneModal.classList.remove('active');
        });
    }

    // Close modal on background click
    if (milestoneModal) {
        milestoneModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    }
}

// ===========================
// SCRAPBOOK / PHOTOS
// ===========================

function initScrapbook() {
    const scrapbookContainer = document.getElementById('scrapbookContainer');
    
    if (!scrapbookContainer) return;

    const rotations = [-3, -2, -1, 0, 1, 2, 3];
    const decorations = ['♡', '✨', '🌸', '⭐'];

    anniversaryConfig.photos.forEach((photo, index) => {
        const rotation = rotations[index % rotations.length];
        
        const photoSticker = document.createElement('div');
        photoSticker.className = 'photo-sticker';
        photoSticker.style.setProperty('--rotation', `${rotation}deg`);
        
        const img = document.createElement('img');
        img.className = 'photo-image';
        img.src = photo.src;
        img.alt = photo.caption;
        img.onerror = function() {
            // Placeholder if image not found
            this.parentElement.style.background = 'linear-gradient(135deg, #FFB6D9, #FFD0E0)';
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.style.width = '100%';
            placeholder.style.height = '100%';
            placeholder.style.display = 'flex';
            placeholder.style.alignItems = 'center';
            placeholder.style.justifyContent = 'center';
            placeholder.style.fontSize = '3rem';
            placeholder.textContent = '📷';
            this.parentElement.appendChild(placeholder);
        };
        
        const caption = document.createElement('div');
        caption.className = 'photo-caption';
        caption.textContent = photo.caption;
        
        photoSticker.appendChild(img);
        photoSticker.appendChild(caption);
        
        // Add decorations
        const decoration = document.createElement('div');
        decoration.className = 'photo-decoration';
        decoration.textContent = decorations[Math.floor(Math.random() * decorations.length)];
        decoration.style.top = Math.random() * 20 + 'px';
        decoration.style.right = Math.random() * 20 + 'px';
        photoSticker.appendChild(decoration);
        
        scrapbookContainer.appendChild(photoSticker);
    });
}

// ===========================
// SECRET FLOWER
// ===========================

function initSecretFlower() {
    const secretFlower = document.getElementById('secretFlower');
    const secretModal = document.getElementById('secretModal');
    const modalClose = secretModal?.querySelector('.modal-close');

    if (!secretFlower) return;

    secretFlower.addEventListener('click', function() {
        secretFlowerClicks++;
        
        // Show hint
        const hint = document.querySelector('.secret-hint');
        if (hint && secretFlowerClicks === 1) {
            hint.textContent = `Click ${3 - secretFlowerClicks} more times... ♡`;
        } else if (hint && secretFlowerClicks > 1 && secretFlowerClicks < 3) {
            hint.textContent = `Click ${3 - secretFlowerClicks} more times... ♡`;
        }
        
        if (secretFlowerClicks >= 3) {
            secretFlowerClicks = 0;
            if (secretModal) {
                secretModal.classList.add('active');
            }
            if (hint) {
                hint.textContent = 'Click the flower... (multiple times)';
            }
        }
    });

    if (modalClose) {
        modalClose.addEventListener('click', function() {
            if (secretModal) {
                secretModal.classList.remove('active');
            }
        });
    }

    if (secretModal) {
        secretModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    }
}

// ===========================
// EASTER EGG
// ===========================

function initEasterEgg() {
    const easterEggTrigger = document.querySelector('.easter-egg-trigger');
    const easterEggModal = document.getElementById('easterEggModal');
    const modalClose = easterEggModal?.querySelector('.modal-close');

    if (!easterEggTrigger) return;

    easterEggTrigger.addEventListener('click', function() {
        easterEggClicks++;
        
        if (easterEggClicks >= 5) {
            easterEggClicks = 0;
            if (easterEggModal) {
                easterEggModal.classList.add('active');
                createCelebrationParticles();
            }
        }
    });

    if (modalClose) {
        modalClose.addEventListener('click', function() {
            if (easterEggModal) {
                easterEggModal.classList.remove('active');
            }
        });
    }

    if (easterEggModal) {
        easterEggModal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
            }
        });
    }
}

function createCelebrationParticles() {
    const celebrationContainer = document.getElementById('celebrationParticles');
    if (!celebrationContainer) return;

    const particles = 40;
    for (let i = 0; i < particles; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'celebration-particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.fontSize = Math.random() * 20 + 10 + 'px';
            
            const symbols = ['♡', '✨', '🌸', '⭐'];
            particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            
            celebrationContainer.appendChild(particle);
            
            setTimeout(() => particle.remove(), 2000);
        }, i * 30);
    }
}

// ===========================
// ENVELOPE INTERACTION
// ===========================

function initEnvelopeInteraction() {
    const envelope = document.getElementById('envelope');
    
    if (!envelope) return;

    envelope.addEventListener('click', function() {
        this.classList.add('opened');
    });
}

// ===========================
// MUSIC CONTROL
// ===========================

function initMusicControl() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');

    if (!musicToggle || !bgMusic) return;

    musicToggle.addEventListener('click', function() {
        if (bgMusic.paused) {
            bgMusic.play().catch(e => {
                console.log('Audio autoplay prevented:', e);
            });
            musicToggle.classList.add('playing');
        } else {
            bgMusic.pause();
            musicToggle.classList.remove('playing');
        }
    });
}

function checkAudioAvailability() {
    const bgMusic = document.getElementById('bgMusic');
    if (!bgMusic) return;

    // Try to preload the audio to check if it exists
    bgMusic.addEventListener('error', function() {
        audioAvailable = false;
        const musicToggle = document.getElementById('musicToggle');
        if (musicToggle) {
            musicToggle.style.display = 'none';
        }
    }, { once: true });
}

// ===========================
// UTILITIES
// ===========================

// Smooth scroll helper
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}