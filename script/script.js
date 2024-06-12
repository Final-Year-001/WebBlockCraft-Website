document.addEventListener('DOMContentLoaded', function () {
    // Select the form element
    const contactForm = document.querySelector('.contact-section form');

    // Add an event listener for the form submission
    contactForm.addEventListener('submit', function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        
        // Log a message to the console
        console.log('Form submitted!');

        // Optionally, you can also access form input values here if needed
        // For example:
        // const nameInput = contactForm.querySelector('input[type="text"]').value;
        // const emailInput = contactForm.querySelector('input[type="email"]').value;
        // const messageInput = contactForm.querySelector('textarea').value;
        // Then you can do something with these values, such as sending them to a server
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const navBtns = document.querySelector('.navBtns');

    menuBtn.addEventListener('click', function () {
        navBtns.classList.toggle('show');
    });

    const navLinks = document.querySelectorAll('.navBtns li a');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navBtns.classList.remove('show');
        });
    });
});
