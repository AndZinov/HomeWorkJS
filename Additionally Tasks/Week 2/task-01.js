const checkQuestionAnswer = (question, correctAnswer) => {
    let questionUser = prompt(question);
    questionUser = questionUser.trim().toLowerCase();
    if (correctAnswer.toLowerCase() === questionUser){
        alert('Answer right!');
    } else {
        alert('Answer uncorrect');
    }
}

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');