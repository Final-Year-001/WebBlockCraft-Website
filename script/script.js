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



function openPDFInNewTab(pdfUrl) {
    window.open(pdfUrl, '_blank');
}

function downloadPDF(pdfUrl, desiredFilename) {
    // Create a dummy base64 string (don't use for actual PDF content)
    var dummyData = btoa('This is content (ignored)');
  
    var link = document.createElement('a');
    link.href = `data:application/pdf;base64,${dummyData}`; // Placeholder
    link.download = desiredFilename; // Set the desired filename
  
    // Check if browser supports data URI downloads
    if (link.download !== undefined) {
      link.click();
    } else {
      console.error('Data URI download not supported by your browser.');
      // Offer an alternative download method (e.g., server-side download)
    }
  }


  const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Simple validation (can be extended further)
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all required fields.');
    return; // Exit if validation fails
  }

  // Simulate form submission (replace with your actual logic)
  alert('Form submitted successfully! \n Name: ' + name + '\n Email: ' + email + '\n Message: ' + message);

  // Clear the form after successful submission (optional)
  form.reset();
});