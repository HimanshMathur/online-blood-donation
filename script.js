document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            if (navLinks) navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
            if (navLinks) navLinks.classList.remove('active');
        });
    });
    
    // Sticky Navigation on Scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const icon = question.querySelector('i');
                
                // Toggle current item
                answer.classList.toggle('active');
                icon.classList.toggle('fa-chevron-down');
                icon.classList.toggle('fa-chevron-up');
                
                // Close other items
                faqQuestions.forEach(otherQuestion => {
                    if (otherQuestion !== question) {
                        otherQuestion.nextElementSibling.classList.remove('active');
                        const otherIcon = otherQuestion.querySelector('i');
                        otherIcon.classList.remove('fa-chevron-up');
                        otherIcon.classList.add('fa-chevron-down');
                    }
                });
            });
        });
    }
    
    // Chatbot Button
    const chatbotButton = document.getElementById('chatbotButton');
    if (chatbotButton) {
        chatbotButton.addEventListener('click', function() {
            alert('Chatbot functionality will be implemented here!');
        });
    }
    
    // Counter Animation
    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const speed = 200; // Animation duration in ms
            const increment = target / speed;
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.ceil(current);
                    setTimeout(updateCounter, 1);
                } else {
                    counter.textContent = target;
                }
            };
            
            // Start animation when counter is in view
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    updateCounter();
                    observer.unobserve(counter);
                }
            });
            
            observer.observe(counter);
        });
    }
        // Modal Handling
        const bloodRequestModal = document.getElementById('blood-request-modal');
        const donorRegisterModal = document.getElementById('donor-register-modal');
        const hospitalRegisterModal = document.getElementById('hospital-register-modal');
        const needBloodBtn = document.getElementById('need-blood-btn');
        const donateBloodBtn = document.getElementById('donate-blood-btn');
        const registerBtn = document.getElementById('register-btn');
        const closeModals = document.querySelectorAll('.close-modal');
        
        if (needBloodBtn) {
            needBloodBtn.addEventListener('click', function(e) {
                e.preventDefault();
                if (bloodRequestModal) {
                    bloodRequestModal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
            });
        }
        
        if (donateBloodBtn) {
            donateBloodBtn.addEventListener('click', function(e) {
                e.preventDefault();
                if (donorRegisterModal) {
                    donorRegisterModal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
            });
        }
        
        if (registerBtn) {
            registerBtn.addEventListener('click', function(e) {
                e.preventDefault();
                if (donorRegisterModal) {
                    donorRegisterModal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
            });
        }
        
        closeModals.forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.modal').forEach(modal => {
                    modal.style.display = 'none';
                });
                document.body.style.overflow = 'auto';
            });
        });
        
        window.addEventListener('click', function(e) {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        // Form Submissions
        const bloodRequestForm = document.getElementById('blood-request-form');
        const donorRegisterForm = document.getElementById('donor-register-form');
        const hospitalRegisterForm = document.getElementById('hospital-register-form');
        
        if (bloodRequestForm) {
            bloodRequestForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Blood request submitted! Our AI will now find matching donors.');
                if (bloodRequestModal) bloodRequestModal.style.display = 'none';
                document.body.style.overflow = 'auto';
                this.reset();
            });
        }
        
        if (donorRegisterForm) {
            donorRegisterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Calculate BMI
                const height = parseFloat(document.getElementById('donor-height')?.value) / 100;
                const weight = parseFloat(document.getElementById('donor-weight')?.value);
                if (height && weight) {
                    const bmi = (weight / (height * height)).toFixed(1);
                    if (bmi < 18.5 || bmi > 30) {
                        alert(`Your BMI is ${bmi}. For blood donation, BMI should be between 18.5 and 30.`);
                        return;
                    }
                }
                
                // Check location permission
                const locationAllowed = document.getElementById('donor-location')?.checked;
                if (locationAllowed) {
                    alert('Thank you for allowing location access. This helps us find you quickly during emergencies.');
                }
                
                alert('Registration successful! Thank you for becoming a LifeSaver donor.');
                if (donorRegisterModal) donorRegisterModal.style.display = 'none';
                document.body.style.overflow = 'auto';
                this.reset();
            });
        }
          
        
        if (hospitalRegisterForm) {
            hospitalRegisterForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Hospital registration submitted! Our team will verify your details and contact you shortly.');
                if (hospitalRegisterModal) hospitalRegisterModal.style.display = 'none';
                document.body.style.overflow = 'auto';
                this.reset();
            });
        }
    
    // GSAP Animations
    if (typeof gsap !== 'undefined') {
        // Hero section animation
        gsap.from('.hero-content h1', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power3.out'
        });
        
        gsap.from('.hero-content p', {
            duration: 1,
            y: 50,
            opacity: 0,
            delay: 0.3,
            ease: 'power3.out'
        });
        
        gsap.from('.hero-buttons', {
            duration: 1,
            y: 50,
            opacity: 0,
            delay: 0.6,
            ease: 'power3.out'
        });
        
        gsap.from('.hero-image', {
            duration: 1,
            x: 50,
            opacity: 0,
            delay: 0.3,
            ease: 'power3.out'
        });
        
        // Blood drop animations
        const bloodDrops = document.querySelectorAll('.blood-drop');
        if (bloodDrops.length > 0) {
            bloodDrops.forEach((drop, index) => {
                gsap.to(drop, {
                    y: 20,
                    duration: 1 + index * 0.3,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut'
                });
            });
        }
        
        // Section animations with ScrollTrigger
        gsap.utils.toArray('section').forEach(section => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });
        });
    }
});