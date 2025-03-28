// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const formGroups = document.querySelectorAll('.form-group');

// Validation patterns
const patterns = {
    name: /^[a-zA-Z\s]{2,50}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    subject: /^[a-zA-Z0-9\s]{2,100}$/,
    message: /^[\s\S]{10,1000}$/
};

// Error messages
const errorMessages = {
    name: 'Please enter a valid name (2-50 characters)',
    email: 'Please enter a valid email address',
    subject: 'Please enter a valid subject (2-100 characters)',
    message: 'Please enter a message (10-1000 characters)'
};

// Function to show error message
function showError(input, message) {
    const formGroup = input.parentElement;
    const errorSpan = formGroup.querySelector('.error-message');
    errorSpan.textContent = message;
    errorSpan.style.display = 'block';
    input.classList.add('error');
}

// Function to remove error message
function removeError(input) {
    const formGroup = input.parentElement;
    const errorSpan = formGroup.querySelector('.error-message');
    errorSpan.textContent = '';
    errorSpan.style.display = 'none';
    input.classList.remove('error');
}

// Function to validate input
function validateInput(input, pattern, message) {
    if (!pattern.test(input.value)) {
        showError(input, message);
        return false;
    } else {
        removeError(input);
        return true;
    }
}

// Add input event listeners for real-time validation
formGroups.forEach(group => {
    const input = group.querySelector('input, textarea');
    if (input) {
        input.addEventListener('input', () => {
            const field = input.id;
            validateInput(input, patterns[field], errorMessages[field]);
        });
    }
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    
    // Validate all fields
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        if (input) {
            const field = input.id;
            if (!validateInput(input, patterns[field], errorMessages[field])) {
                isValid = false;
            }
        }
    });
    
    if (isValid) {
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        successMessage.style.color = '#059669';
        successMessage.style.marginTop = '1rem';
        successMessage.style.textAlign = 'center';
        
        contactForm.appendChild(successMessage);
        
        // Reset form
        contactForm.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }
}); 