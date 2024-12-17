
// Get all question elements
const faqQuestions = document.querySelectorAll('.faq-question');

// Loop through each question
faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const answer = this.nextElementSibling; // Get the answer paragraph
        const icon = this.querySelector('.toggle-icon'); // Get the icon
        
        // Toggle the visibility of the answer
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
            icon.textContent = '-'; // Change plus to minus
        } else {
            answer.style.display = 'none';
            icon.textContent = '+'; // Change minus back to plus
        }
    });
});
