document.addEventListener('DOMContentLoaded', () => {
    function checkAnswer() {
        const correctAnswer = '4';
        const feedback = document.getElementById('feedback');
        const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
        const userAnswer = selectedAnswer.value;
      
            
            if(userAnswer === correctAnswer) {
                feedback.textContent = "Correct! Well done.";
                feedback.style.color = "#28a745"; // Green for correct answer
            } else {
                feedback.textContent = "That's incorrect. Try again!";
                feedback.style.color = "#dc3545"; // Red for incorrect answer
            }
        


        
    }

       const submitButton = document.getElementById('submit-answer');
        submitButton.addEventListener('click', checkAnswer);
});
