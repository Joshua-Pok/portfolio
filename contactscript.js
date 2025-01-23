

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    

    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData);
    console.log('Form submitted:', formObject);
    
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});