
import { isYes } from './is-yes.js';

const buttonTakeQuiz = document.getElementById('action-button');
let questions = [['Are cyclists safe on today\'s roads?', false], ['Can we improve equity in education through technology?', true], ['You\'re driving in your car.  Is it safe to pass a cyclist at a distance of 1 foot?', false]];

let score = 0;

const runQuiz = () => {
    for (let i = 0; i < 3; i++){
        const userAnswer = prompt(`${questions[i][0]} Enter Yes/No.`);
        if (isYes(userAnswer) === questions[i][1]){
            score++;
            alert('Right-o!');
        }
        else {
            alert('Bummer. Work on your reading comprehension.');
        }
    }
    alert('Thank you! You finished the quiz.  See below for your results.');
    document.getElementById('results').style.visibility = 'visible';
};    
const percent = Math.floor(score / 3 * 100);

const quizResults = document.getElementById('quiz-results');
const message = (`You scored ${score} points out of 3.  This is ${percent}%.`);
quizResults.textContent = message;

buttonTakeQuiz.addEventListener('click', () => {
    const name = prompt('Please enter your name: ');
    const confirmation = confirm(`${name}, do you want to take the quiz?`);
    if (confirmation === true){
        runQuiz();
    }
    else {
        return;
    }
});

