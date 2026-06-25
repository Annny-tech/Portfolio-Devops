// Initialize Lucide SVG Icon replacement engine
document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
});

// Initialize AOS (Animate on Scroll) Engine matching required Framer Motion styles
AOS.init({
    duration: 800,
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
    once: true,
    offset: 50
});

// Mobile Responsive Navigation Dropdown Automation Menu Controller
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Auto-collapse mobile navigation pane selection clicks
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Sticky Navigation architectural accent scroll response modification 
const navBar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navBar.classList.add('bg-[#0b0f19]/90', 'shadow-2xl', 'border-slate-800/80');
        navBar.classList.remove('bg-[#0b0f19]/70', 'border-slate-800/60');
    } else {
        navBar.classList.add('bg-[#0b0f19]/70', 'border-slate-800/60');
        navBar.classList.remove('bg-[#0b0f19]/90', 'shadow-2xl', 'border-slate-800/80');
    }
});