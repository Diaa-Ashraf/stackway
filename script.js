// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger);

// Preloader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    gsap.to(loader, {
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
            loader.style.display = 'none';
            initHeroAnimations();
        }
    });
});

// Theme Toggle
function toggleTheme() {
    const body = document.body;
    const icon = document.querySelector('.theme-toggle i');
    
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    }
}

// Hero Animations
function initHeroAnimations() {
    const tl = gsap.timeline();
    
    tl.fromTo('.animate-logo', 
        { opacity: 0, scale: 0.5, rotateY: -30 },
        { opacity: 1, scale: 1, rotateY: 0, duration: 1.4, ease: "back.out(1.7)" }
    )
    .to('.animate-hero', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
    }, "-=0.8");

    // Interactive 3D Parallax Tilt for Logo Showcase
    const showcase = document.querySelector('.hero-logo-showcase');
    const logoWrapper = document.querySelector('.hero-logo-wrapper');
    
    if (showcase && logoWrapper) {
        showcase.addEventListener('mousemove', (e) => {
            const rect = showcase.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(logoWrapper, {
                rotateY: x * 0.15,
                rotateX: -y * 0.15,
                duration: 0.5,
                ease: "power2.out"
            });
        });

        showcase.addEventListener('mouseleave', () => {
            gsap.to(logoWrapper, {
                rotateY: 0,
                rotateX: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.4)"
            });
        });
    }
}

// Scroll Animations
gsap.utils.toArray('.reveal').forEach(elem => {
    gsap.from(elem, {
        scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
    });
});

gsap.utils.toArray('.reveal-up').forEach((elem, i) => {
    gsap.from(elem, {
        scrollTrigger: {
            trigger: elem,
            start: "top 90%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 80,
        duration: 1,
        delay: (i % 4) * 0.12,
        ease: "power3.out"
    });
});

gsap.utils.toArray('.scroll-reveal').forEach(elem => {
    gsap.to(elem, {
        scrollTrigger: {
            trigger: elem,
            start: "top 80%",
            onEnter: () => elem.classList.add('visible')
        }
    });
});

// Magnetic & 3D Interactive Cards Tilt
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card, .service-card, .stat-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(card, {
                rotateY: x * 0.04,
                rotateX: -y * 0.04,
                transformPerspective: 1000,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateY: 0,
                rotateX: 0,
                duration: 0.6,
                ease: "power2.out"
            });
        });
    });
});

gsap.from('.cta-box', {
    scrollTrigger: {
        trigger: '.cta-box',
        start: "top 80%"
    },
    opacity: 0,
    scale: 0.8,
    duration: 1.2,
    ease: "back.out(1.7)"
});

// Stats Counter
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        
        ScrollTrigger.create({
            trigger: counter,
            start: "top 85%",
            onEnter: () => {
                let obj = { val: 0 };
                gsap.to(obj, {
                    val: target,
                    duration: 2,
                    ease: "power2.out",
                    onUpdate: () => {
                        counter.innerText = Math.floor(obj.val);
                    }
                });
            },
            once: true
        });
    });
});

// FAQ Accordion & Interactions
document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(item => {
        item.addEventListener('click', () => {
            const currentItem = item.closest('.faq-item');
            const isActive = currentItem.classList.contains('active');

            // Close other accordion items smoothly
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== currentItem) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle clicked item
            if (isActive) {
                currentItem.classList.remove('active');
            } else {
                currentItem.classList.add('active');
            }
        });
    });

    // 3D Parallax Tilt for FAQ Assistant
    const faqShowcase = document.querySelector('.faq-visual-showcase');
    const robotBot = document.querySelector('.robot-bot');

    if (faqShowcase && robotBot) {
        faqShowcase.addEventListener('mousemove', (e) => {
            const rect = faqShowcase.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(robotBot, {
                rotateY: x * 0.12,
                rotateX: -y * 0.12,
                duration: 0.4,
                ease: "power2.out"
            });
        });

        faqShowcase.addEventListener('mouseleave', () => {
            gsap.to(robotBot, {
                rotateY: 0,
                rotateX: 0,
                duration: 0.8,
                ease: "elastic.out(1, 0.4)"
            });
        });
    }
});

// Smooth Navbar Scroll
document.querySelectorAll('.nav-links a, .footer-col ul a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Check if it's a link to the services sidebar
        if (this.classList.contains('services-trigger')) {
            return; // Handled by sidebar logic
        }

        // Check if the link contains a hash
        if (href && href.includes('#')) {
            const pathParts = href.split('#');
            const pageUrl = pathParts[0];
            const targetId = '#' + pathParts[1];
            
            // If the link points to the same page, or it's a hash-only link
            const currentPath = window.location.pathname;
            const isSamePage = !pageUrl || currentPath.endsWith(pageUrl) || (currentPath.endsWith('/') && pageUrl === 'index.html');

            if (isSamePage) {
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        }
    });
});

// Parallax Effect for Hero BG Logo
window.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 50;
    const y = (e.clientY / window.innerHeight - 0.5) * 50;
    gsap.to('.hero-bg-logo', {
        x: x,
        y: y,
        duration: 1,
        ease: "power2.out"
    });
});

// Sidebar Logic
document.addEventListener('DOMContentLoaded', () => {
    const servicesTrigger = document.querySelector('.services-trigger');
    const sidebar = document.getElementById('servicesSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const closeBtn = document.getElementById('closeSidebar');

    if (servicesTrigger && sidebar && overlay && closeBtn) {
        servicesTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            sidebar.classList.add('active');
            overlay.classList.add('active');
        });

        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });

        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = menuBtn ? menuBtn.querySelector('i') : null;

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            
            if (menuIcon) {
                if (navLinks.classList.contains('active')) {
                    menuIcon.classList.replace('fa-bars', 'fa-times');
                } else {
                    menuIcon.classList.replace('fa-times', 'fa-bars');
                }
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                if (menuIcon) menuIcon.classList.replace('fa-times', 'fa-bars');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
                navLinks.classList.remove('active');
                if (menuIcon) menuIcon.classList.replace('fa-times', 'fa-bars');
            }
        });
    }
});

