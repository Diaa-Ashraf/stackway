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
    
    tl.to('.animate-hero', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
    })
    .to('.animate-logo', {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)"
    }, "-=0.5");
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
        y: 100,
        duration: 1,
        delay: i * 0.1,
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
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target') || parseInt(counter.innerText);
        const count = +counter.innerText;
        const speed = 200;
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    ScrollTrigger.create({
        trigger: counter,
        onEnter: () => {
            if (!counter.hasAttribute('data-target')) {
                counter.setAttribute('data-target', counter.innerText);
                counter.innerText = '0';
            }
            updateCount();
        }
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentElement;
        const icon = item.querySelector('i');
        
        parent.classList.toggle('active');
        
        if (parent.classList.contains('active')) {
            icon.style.transform = 'rotate(180deg)';
        } else {
            icon.style.transform = 'rotate(0deg)';
        }
    });
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

