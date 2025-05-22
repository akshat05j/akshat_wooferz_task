
        // Wait for the DOM to be fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 70,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Simple add to cart functionality
            const addToCartButtons = document.querySelectorAll('.product .btn');
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Get the product information
                    const product = this.closest('.product');
                    const productName = product.querySelector('.product-title').textContent;
                    
                    // Show a confirmation message (in a real site, this would add to cart)
                    alert(`Added ₹{productName} to your cart!`);
                });
            });
            
            // Form submission handling
            const contactForm = document.querySelector('.contact-form form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Get form values (in a real site, this would send data to a server)
                    const name = this.querySelector('#name').value;
                    const email = this.querySelector('#email').value;
                    
                    // Show confirmation message
                    alert(`Thank you, ₹{name}! Your message has been sent. We'll contact you at ₹{email} soon.`);
                    
                    // Reset the form
                    this.reset();
                });
            }
            
            // Newsletter subscription handling
            const newsletterForm = document.querySelector('.footer-section form');
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Get email value
                    const email = this.querySelector('input[type="email"]').value;
                    
                    // Show confirmation message
                    alert(`Thank you for subscribing with ₹{email}! You'll receive our newsletter soon.`);
                    
                    // Reset the form
                    this.reset();
                });
            }
            
            // Search functionality
            const searchBtn = document.querySelector('.search-btn');
            if (searchBtn) {
                searchBtn.addEventListener('click', function() {
                    const searchInput = document.querySelector('.search-box input').value;
                    if (searchInput.trim() !== '') {
                        alert(`Searching for: ₹{searchInput}`);
                    } else {
                        alert('Please enter a search term');
                    }
                });
            }
        });
   






























        