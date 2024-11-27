// Mobile Menu Toggle Script with Accessibility Enhancements
function toggleMobileMenu() {
    const menu = document.getElementById('menu');
    const isExpanded = menu.classList.toggle('active');
    
    const toggleButton = document.querySelector('[onClick="toggleMobileMenu();"]');
    toggleButton.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');

    if (isExpanded) {
        menu.setAttribute('aria-hidden', 'false');
    } else {
        menu.setAttribute('aria-hidden', 'true');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';

    // Apply dark mode if it was previously selected
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggle.classList.add('dark-mode');
        darkModeToggle.textContent = 'Light Mode';
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkModeToggle.classList.toggle('dark-mode');

        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDark);
        darkModeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });
});

// Smooth Scrolling for Anchor Links with Compatibility Check
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target && 'scrollIntoView' in target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header Scroll Effect with Improved Performance (Throttling)
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.scrollY;

    if (currentScroll > 50 && currentScroll > lastScroll) {
        header.classList.add('scrolled');
    } else if (currentScroll <= 50) {
        header.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Contact Form Submission with On-Page Success Message
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const successMessage = document.createElement('p');
        successMessage.className = 'success-message text-burgundy-800 text-center';
        successMessage.textContent = 'Thank you for contacting us! We will get back to you shortly.';
        
        if (!contactForm.querySelector('.success-message')) {
            contactForm.appendChild(successMessage);
        }

        contactForm.reset();
    });
}

// Portfolio Item Hover Effect with Class Toggle
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('hovered');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('hovered');
    });
});

// Filter Projects by Category
function filterProjects(category) {
    const projects = document.querySelectorAll('.portfolio-item');

    projects.forEach(project => {
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Contact Information Logging for Development Mode Only
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log("Contact Information: Kevin Jerome");
    console.log("Email: blade94781kj@gmail.com");
    console.log("LinkedIn: https://www.linkedin.com/in/kevin-jerome-10371a234/");
    console.log("GitHub: https://github.com/SpikeTek241/Spiketek.github.io");
}
