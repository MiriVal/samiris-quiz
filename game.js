let currentCategory = '';
        let questions = {
            libros: [
                { question: "¿Quién escribió Orgullo y prejuicio", options: ["", "", "Jane Austen", ""], answer: "Jane Austen" },
                { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
                { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Stephen King", "Harper Lee", "J.K. Rowling", "Charles Dickens"], answer: "Harper Lee" }
            ],
            ciencia: [
                { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "HCl"], answer: "H2O" },
                { question: "What is the closest planet to the Sun?", options: ["Mars", "Earth", "Mercury", "Venus"], answer: "Mercury" },
                { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Chloroplast", "Mitochondria", "Ribosome"], answer: "Mitochondria" }
            ],
            history: [
                { question: "Who was the first president of the United States?", options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"], answer: "George Washington" },
                { question: "In what year did World War II end?", options: ["1943", "1945", "1950", "1939"], answer: "1945" },
                { question: "Which ancient civilization built the pyramids?", options: ["Greek", "Roman", "Egyptian", "Mayan"], answer: "Egyptian" }
            ]
        };

        function startQuiz(start) {
            currentCategory = start;
            const categoryQuestions = questions[start];
            const quizContainer = document.querySelector('.quiz-container');
            const questionElement = quizContainer.querySelector('.pregunta');
            const optionsElement = quizContainer.querySelector('.options');
            const timerElement = quizContainer.querySelector('#time-left');
        

            // Show quiz container
            quizContainer.style.display = 'block';

            let score = 0;
            let timeLeft = 10;
            let timer = setInterval(() => {
                timeLeft--;
                timerElement.textContent = timeLeft + ' seconds';

                if (timeLeft === 0) {
                    clearInterval(timer);
                    endQuiz(score);
                }
            }, 1000);

            // Randomly select a question
            const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
            const currentQuestion = categoryQuestions[randomIndex];

            // Display question and options
            questionElement.textContent = currentQuestion.question;
            optionsElement.innerHTML = '';
            currentQuestion.options.forEach(option => {
                const optionButton = document.createElement('button');
                optionButton.textContent = option;
                optionButton.classList.add('option-btn');
                optionButton.addEventListener('click', () => {
                    if (option === currentQuestion.answer) {
                        optionButton.classList.add('correct');
                        score++;
                    } else {
                        optionButton.classList.add('incorrect');
                    }
                    clearInterval(timer);
                    setTimeout(() => {
                        endQuiz(score);
                    }, 1000);
                });
                optionsElement.appendChild(optionButton);
            });
        }

        function endQuiz(score) {
            alert('Haz terminado este quiz, tu puntuación es de: ' + score + 'puntos');
            resetQuiz();
        }

        function resetQuiz() {
            const quizContainer = document.querySelector('.quiz-container');
            const categoryButtons = document.querySelector('.start');
            const categoryButtonsArray = Array.from(categoryButtons.children);

            // Hide quiz container
            quizContainer.style.display = 'none';

            // Show category buttons
            categoryButtonsArray.forEach(button => {
                button.style.display = 'inline-block';
            });
        }