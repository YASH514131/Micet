/**
 * MICET WALLET - Landing Page JavaScript
 * Handles navigation, scroll effects, and interactions
 */

(function() {
    'use strict';

    // ========== DOM ELEMENTS ==========
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');

    // ========== NAVBAR SCROLL EFFECT ==========
    /**
     * Adds 'scrolled' class to navbar when page is scrolled
     * This creates a more solid background effect
     */
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // ========== MOBILE MENU TOGGLE ==========
    /**
     * Toggles the mobile navigation menu
     */
    function toggleMobileMenu() {
        mobileMenuBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (mobileNav.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    /**
     * Closes the mobile menu
     */
    function closeMobileMenu() {
        mobileMenuBtn.classList.remove('active');
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
    }

    // ========== SMOOTH SCROLL FOR NAV LINKS ==========
    /**
     * Handles smooth scrolling to anchor links
     * @param {Event} e - Click event
     */
    function handleNavLinkClick(e) {
        const href = this.getAttribute('href');
        
        // Only handle internal anchor links
        if (href.startsWith('#')) {
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Calculate offset for fixed navbar
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                closeMobileMenu();
            }
        }
    }

    // ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
    /**
     * Creates an intersection observer for fade-in animations
     * Elements with 'data-animate' attribute will animate when in view
     */
    function setupScrollAnimations() {
        const animatedElements = document.querySelectorAll('.feature-card, .download-content');
        
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
            observer.observe(el);
        });
    }

    // ========== CLOSE MOBILE MENU ON RESIZE ==========
    /**
     * Closes mobile menu when window is resized to desktop size
     */
    function handleResize() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    }

    // ========== CLOSE MOBILE MENU ON ESCAPE KEY ==========
    /**
     * Closes mobile menu when Escape key is pressed
     * @param {KeyboardEvent} e - Keyboard event
     */
    function handleKeydown(e) {
        if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
            closeMobileMenu();
        }
    }

    // ========== INITIALIZE ==========
    /**
     * Initializes all event listeners and functionality
     */
    function init() {
        // Scroll event for navbar
        window.addEventListener('scroll', handleNavbarScroll, { passive: true });
        
        // Initial check for scroll position
        handleNavbarScroll();
        
        // Mobile menu toggle
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        }
        
        // Nav link smooth scroll
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavLinkClick);
        });
        
        // Resize handler
        window.addEventListener('resize', handleResize, { passive: true });
        
        // Keyboard navigation
        document.addEventListener('keydown', handleKeydown);
        
        // Setup scroll animations
        setupScrollAnimations();
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (mobileNav.classList.contains('active') && 
                !mobileNav.contains(e.target) && 
                !mobileMenuBtn.contains(e.target)) {
                closeMobileMenu();
            }
        });

        console.log('✨ Micet Wallet landing page initialized');
    }

    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
