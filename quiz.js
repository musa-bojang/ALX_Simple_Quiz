document.addEventListener('DOMContentLoaded', () => {
    function checkAnswer() {
        const correctAnswer = '4';
        const userAnswer = document.querySelector('input[name="quiz"]:checked');

        if (userAnswer) {
            console.log("Selected radio element:", userAnswer);
            console.log("User's answer:", userAnswer.value);

            const feedback = document.getElementById('feedback');
            if(userAnswer.value === correctAnswer) {
                feedback.textContent = "Correct! Well done.";
                feedback.style.color = "#28a745"; // Green for correct answer
            } else {
                feedback.textContent = "That's incorrect. Try again!";
                feedback.style.color = "#dc3545"; // Red for incorrect answer
            }
        } else {
            console.log("No option selected.");
            feedback.textContent = "Please select an answer before submitting.";
            feedback.style.color = "#dc3545"; // Red for no selection
        }


        
    }

       const submitButton = document.getElementById('submit-answer');
        submitButton.addEventListener('click', checkAnswer);
});
