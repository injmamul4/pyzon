document.addEventListener("DOMContentLoaded", function() {
    // Select all question elements
    const questions = document.querySelectorAll('.faq-question h2');
    
    // Add event listeners to each question
    questions.forEach(item => {
        item.addEventListener('click', () => {
            // Find the closest faq-item for each clicked question
            const faqItem = item.closest('.faq-item');
            
            // Toggle the 'active' class to show/hide the answer
            faqItem.classList.toggle('active');
      });
    });
});

