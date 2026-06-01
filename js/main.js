// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scroll down - hide header
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scroll up - show header
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// Add scroll behavior to header
header.style.transition = 'transform 0.3s ease-in-out';

// Form submission handling
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !phone || !email || !message) {
            alert('請填寫所有欄位！');
            return;
        }
        
        // Here you would normally send the data to a server
        // For now, we'll just show a success message
        alert('感謝您的詢問！我們會盡快與您聯絡。');
        this.reset();
    });
}

// Lazy loading animation for product cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe product cards
document.querySelectorAll('.product-card, .feature-item, .installation-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add to cart functionality (placeholder)
function addToCart(productName) {
    alert(`已將 ${productName} 加入詢問清單！`);
}

// Mobile menu toggle (if needed in future)
const mobileMenuButton = document.createElement('button');
mobileMenuButton.classList.add('mobile-menu-button');
mobileMenuButton.innerHTML = '☰';
mobileMenuButton.style.display = 'none';

// Add responsive menu handling
if (window.innerWidth <= 768) {
    mobileMenuButton.style.display = 'block';
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        mobileMenuButton.style.display = 'block';
    } else {
        mobileMenuButton.style.display = 'none';
    }
});

console.log('QGOGO Website loaded successfully!');
