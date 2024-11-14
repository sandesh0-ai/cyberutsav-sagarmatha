{
                    const questions = [
                    {
                        question: "Who wrote The Oval Portrait?", 
                        answers: [
                             { text: "Edgar Allan Poe", correct: true },
                             { text: "Oscar Wilde", correct: false }, 
                             { text: "Robert Burns", correct: false },
                             { text: "usan Glaspell", correct: false } 
                            ] 
                        },
                              { 
                                question: "Which app has the most total users?",
                                 answers:[
                            { text: "TikTok", correct: false },
                            { text: "Instagram", correct: true },
                            { text: "Snapchat", correct: false }, 
                            { text: "Facebook", correct: false } 
                        ] 
                    }, 
                            { 
                                question: "Which of the following is NOT a fruit?", answers: 
                            [ 
                                { text: "Tomatoes", correct: false },
                                 { text: "Rhubarb", correct: true }, 
                                 { text: "Avocados", correct: false },
                                  { text: "Mango", correct: false } 
                                ] 
                            },
                                   { 
                                    question: "If you were looking at Iguazu Falls, on what continent would you be?",
                                     answers: 
                                     [ { text: "South America", correct: true }, 
                                        { text: "Asia", correct: false },
                                         { text: "Africa", correct: false }, 
                                         { text: "Europe", correct: false } 
                                        ] 
                                    } 
                                         
                        ];
                let currentQuestionIndex = 0;
                let score = 0;
                let timer;
                const timeLimit = 30; 
                
                const questionElement = document.getElementById('question');
                const answerButtons = document.getElementById('answer-buttons');
                const nextButton = document.getElementById('next-button');
                const scoreElement = document.getElementById('score');
                const resultContainer = document.getElementById('result-container');
                const quizContainer = document.getElementById('quiz-container');
                const timerElement = document.getElementById('time');
                const progressBar = document.getElementById('progress');
                
                function startQuiz() {
                    currentQuestionIndex = 0;
                    score = 0;
                    nextButton.classList.add('hidden');
                    resultContainer.classList.add('hidden');
                    quizContainer.classList.remove('hidden');
                    resetTimer();
                    showQuestion(questions[currentQuestionIndex]);
                }
                
                function showQuestion(question) {
                    questionElement.innerText = question.question;
                    answerButtons.innerHTML = ''; 
                    question.answers.forEach(answer => {
                        const button = document.createElement('button');
                        button.innerText = answer.text;
                        button.classList.add('btn');
                        button.addEventListener('click', () => selectAnswer(answer));
                        answerButtons.appendChild(button);
                    });
                }
                
                function selectAnswer(answer) {
                    if (answer.correct) {
                        score++;
                    }
                    nextButton.classList.remove('hidden');
                    clearInterval(timer); 
                    updateProgressBar();
                }
                
                function nextQuestion() {
                    currentQuestionIndex++;
                    if (currentQuestionIndex < questions.length) {
                        showQuestion(questions[currentQuestionIndex]);
                        resetTimer();
                    } else {
                        showResult();
                    }
                }
                
                function showResult() {
                    quizContainer.classList.add('hidden');
                    resultContainer.classList.remove('hidden');
                    scoreElement.innerText = `${score} out of ${questions.length}`;
                }
                
                function restartQuiz() {
                    startQuiz();
                }
                
                function resetTimer() {
                    clearInterval(timer);
                    let timeLeft = timeLimit;
                    timerElement.innerText = timeLeft;
                    progressBar.style.width = '100%';
                
                    timer = setInterval(() => {
                        timeLeft--;
                        timerElement.innerText = timeLeft;
                        progressBar.style.width = `${(timeLeft / timeLimit) * 100}%`;
                
                        if (timeLeft <= 0) {
                            clearInterval(timer);
                            nextQuestion(); 
                        }
                    }, 1000);
                }
                
                function updateProgressBar() {
                    progressBar.style.width = '100%'; 
                }
                
                document.addEventListener('DOMContentLoaded', startQuiz);  }                  