function checkAnswer(formId, questionName, correctAnswer, resultId) {
    const form = document.getElementById(formId);
    const formData = new FormData(form);
    const userAnswer = formData.get(questionName);

    const resultElement = document.getElementById(resultId);

    // Si la respuesta es correcta, mostrar "correcto"
    if (userAnswer === correctAnswer) {
        resultElement.innerText = 'Correcto';
    } else {
        resultElement.innerText = ''; // No mostrar nada si es incorrecto
    }
}
