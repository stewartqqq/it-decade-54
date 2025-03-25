// Quiz Data
const quizData = {
    "html-css": {
      name: "HTML, CSS",
      easy: [
        {
          question: "Что означает HTML?",
          answers: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language",
          ],
          correct: 0,
        },
        {
          question: "Какой тег используется для создания параграфа?",
          answers: ["<paragraph>", "<p>", "<para>", "<text>"],
          correct: 1,
        },
        {
          question: "Какое свойство CSS используется для изменения цвета текста?",
          answers: ["text-color", "font-color", "color", "text-style"],
          correct: 2,
        },
        {
          question: "Какой тег используется для создания заголовка первого уровня?",
          answers: ["<heading>", "<h1>", "<head>", "<title>"],
          correct: 1,
        },
        {
          question: "Какое свойство CSS используется для изменения размера шрифта?",
          answers: ["text-size", "font-style", "text-style", "font-size"],
          correct: 3,
        },
      ],
      medium: [
        {
          question: "Какой CSS селектор используется для выбора элемента с определенным id?",
          answers: [".id", "#id", "id:", "@id"],
          correct: 1,
        },
        {
          question: "Какое свойство CSS используется для создания тени текста?",
          answers: ["text-shadow", "font-shadow", "text-effect", "shadow-effect"],
          correct: 0,
        },
        {
          question: "Какой HTML-атрибут используется для определения встроенных стилей?",
          answers: ["class", "styles", "style", "css"],
          correct: 2,
        },
        {
          question: "Какое свойство CSS используется для изменения расстояния между буквами?",
          answers: ["letter-spacing", "text-spacing", "font-spacing", "character-spacing"],
          correct: 0,
        },
        {
          question: "Какой тег используется для вставки изображения?",
          answers: ["<picture>", "<image>", "<img>", "<src>"],
          correct: 2,
        },
      ],
      hard: [
        {
          question: "Какое свойство CSS используется для создания анимации?",
          answers: ["transition", "animation", "transform", "motion"],
          correct: 1,
        },
        {
          question: "Какой псевдокласс используется для выбора элемента при наведении мыши?",
          answers: [":active", ":focus", ":hover", ":visited"],
          correct: 2,
        },
        {
          question:
            "Какое значение свойства position делает элемент позиционированным относительно его ближайшего позиционированного предка?",
          answers: ["relative", "absolute", "fixed", "static"],
          correct: 1,
        },
        {
          question: "Какое свойство CSS используется для создания гибкого контейнера?",
          answers: ["flex", "display: flex", "flexbox", "flexible"],
          correct: 1,
        },
        {
          question: "Какой метод CSS Grid используется для создания именованных областей сетки?",
          answers: ["grid-template", "grid-area", "grid-template-areas", "grid-name"],
          correct: 2,
        },
      ],
    },
    python: {
      name: "Python",
      easy: [
        {
          question: "Какая функция используется для вывода данных в Python?",
          answers: ["output()", "print()", "write()", "display()"],
          correct: 1,
        },
        {
          question: "Какой оператор используется для сравнения равенства в Python?",
          answers: ["=", "==", "===", "is equal"],
          correct: 1,
        },
        {
          question: "Какой тип данных используется для хранения последовательности элементов в Python?",
          answers: ["list", "tuple", "dictionary", "set"],
          correct: 0,
        },
        {
          question: "Как объявить переменную в Python?",
          answers: ["var x = 5", "let x = 5", "x = 5", "variable x = 5"],
          correct: 2,
        },
        {
          question: "Какое расширение имеют файлы Python?",
          answers: [".pt", ".py", ".python", ".p"],
          correct: 1,
        },
      ],
      medium: [
        {
          question: "Какая функция используется для получения длины списка или строки в Python?",
          answers: ["size()", "length()", "count()", "len()"],
          correct: 3,
        },
        {
          question: "Какой метод используется для добавления элемента в конец списка?",
          answers: ["add()", "append()", "insert()", "push()"],
          correct: 1,
        },
        {
          question: "Как создать функцию в Python?",
          answers: ["function myFunc():", "def myFunc():", "create myFunc():", "func myFunc():"],
          correct: 1,
        },
        {
          question: "Какой оператор используется для проверки, является ли элемент частью списка?",
          answers: ["has", "contains", "in", "exists"],
          correct: 2,
        },
        {
          question: "Какой метод строки используется для замены подстроки?",
          answers: ["change()", "replace()", "swap()", "substitute()"],
          correct: 1,
        },
      ],
      hard: [
        {
          question: "Что такое декоратор в Python?",
          answers: [
            "Функция, которая принимает другую функцию и расширяет её функциональность",
            "Специальный комментарий для документации",
            "Метод для украшения вывода в консоль",
            "Класс для создания графического интерфейса",
          ],
          correct: 0,
        },
        {
          question: "Какой метод используется для создания генератора в Python?",
          answers: ["create()", "generator()", "yield", "iterate()"],
          correct: 2,
        },
        {
          question: "Что такое list comprehension в Python?",
          answers: [
            "Метод сортировки списков",
            "Способ создания списков с помощью выражений",
            "Функция для объединения нескольких списков",
            "Метод для сжатия списков в памяти",
          ],
          correct: 1,
        },
        {
          question: "Какой модуль используется для работы с регулярными выражениями в Python?",
          answers: ["regex", "re", "regexp", "regular"],
          correct: 1,
        },
        {
          question: "Что такое lambda-функция в Python?",
          answers: [
            "Функция с множеством аргументов",
            "Анонимная функция, определенная в одну строку",
            "Функция, которая всегда возвращает логическое значение",
            "Функция для работы с многопоточностью",
          ],
          correct: 1,
        },
      ],
    },
    cpp: {
      name: "C++",
      easy: [
        {
          question: "Какое расширение имеют файлы C++?",
          answers: [".c", ".cpp", ".cplus", ".cp"],
          correct: 1,
        },
        {
          question: "Какая функция используется для вывода данных в C++?",
          answers: ["printf()", "cout", "print()", "write()"],
          correct: 1,
        },
        {
          question: "Какой оператор используется для получения адреса переменной в C++?",
          answers: ["*", "&", "#", "@"],
          correct: 1,
        },
        {
          question: "Какое ключевое слово используется для объявления целочисленной переменной в C++?",
          answers: ["integer", "number", "int", "num"],
          correct: 2,
        },
        {
          question: "Какая библиотека используется для ввода-вывода в C++?",
          answers: ["<stdio.h>", "<iostream>", "<io.h>", "<input.h>"],
          correct: 1,
        },
      ],
      medium: [
        {
          question: "Что такое указатель в C++?",
          answers: [
            "Переменная, которая хранит адрес другой переменной",
            "Специальный тип данных для хранения больших чисел",
            "Функция для указания на ошибки в коде",
            "Оператор для создания ссылок",
          ],
          correct: 0,
        },
        {
          question: "Какое ключевое слово используется для создания класса в C++?",
          answers: ["struct", "object", "class", "type"],
          correct: 2,
        },
        {
          question: "Какой оператор используется для динамического выделения памяти в C++?",
          answers: ["alloc", "malloc", "new", "create"],
          correct: 2,
        },
        {
          question: "Какое ключевое слово используется для наследования в C++?",
          answers: ["extends", "inherits", "derives", ":"],
          correct: 3,
        },
        {
          question: "Что такое перегрузка функций в C++?",
          answers: [
            "Функция, которая вызывает сама себя",
            "Возможность создавать функции с одинаковым именем, но разными параметрами",
            "Функция, которая выполняется слишком долго",
            "Функция с большим количеством параметров",
          ],
          correct: 1,
        },
      ],
      hard: [
        {
          question: "Что такое виртуальная функция в C++?",
          answers: [
            "Функция, которая не существует в реальности",
            "Функция, которая может быть переопределена в производных классах",
            "Функция, которая работает только в виртуальной среде",
            "Функция без тела",
          ],
          correct: 1,
        },
        {
          question: "Что такое шаблоны (templates) в C++?",
          answers: [
            "Готовые фрагменты кода для копирования",
            "Механизм для создания обобщенных функций и классов",
            "Специальные комментарии для документации",
            "Предварительно скомпилированные библиотеки",
          ],
          correct: 1,
        },
        {
          question: "Какое ключевое слово используется для обработки исключений в C++?",
          answers: ["try/catch", "error/handle", "exception/catch", "try/except"],
          correct: 0,
        },
        {
          question: "Что такое умные указатели (smart pointers) в C++?",
          answers: [
            "Указатели, которые автоматически управляют памятью",
            "Указатели с расширенной функциональностью",
            "Указатели, которые не могут быть нулевыми",
            "Указатели, которые работают только с определенными типами данных",
          ],
          correct: 0,
        },
        {
          question: "Какое ключевое слово используется для предотвращения дальнейшего наследования класса?",
          answers: ["sealed", "final", "locked", "closed"],
          correct: 1,
        },
      ],
    },
    scratch: {
      name: "Scratch",
      easy: [
        {
          question: "Какой цвет у блоков движения в Scratch?",
          answers: ["Зеленый", "Синий", "Красный", "Желтый"],
          correct: 1,
        },
        {
          question: "Какой блок используется для начала выполнения скрипта при нажатии на зеленый флаг?",
          answers: ["Когда клавиша нажата", "Когда спрайт нажат", "Когда зеленый флаг нажат", "Когда получено сообщение"],
          correct: 2,
        },
        {
          question: "Как называются объекты в Scratch?",
          answers: ["Актеры", "Спрайты", "Фигуры", "Персонажи"],
          correct: 1,
        },
        {
          question: "Какой блок используется для повторения действий определенное количество раз?",
          answers: ["Повторить", "Всегда", "Повторять пока", "Цикл"],
          correct: 0,
        },
        {
          question: "Какой блок используется для ожидания определенного времени?",
          answers: ["Подождать", "Пауза", "Остановить", "Задержка"],
          correct: 0,
        },
      ],
      medium: [
        {
          question: "Какой блок используется для создания клона спрайта?",
          answers: ["Создать копию", "Создать клон", "Дублировать", "Размножить"],
          correct: 1,
        },
        {
          question: "Какой цвет у блоков условий в Scratch?",
          answers: ["Синий", "Зеленый", "Желтый", "Оранжевый"],
          correct: 2,
        },
        {
          question: "Какой блок используется для отправки сообщения другим спрайтам?",
          answers: ["Сказать", "Передать", "Отправить сообщение", "Сообщить"],
          correct: 2,
        },
        {
          question: "Какой блок используется для изменения костюма спрайта?",
          answers: ["Изменить вид", "Сменить костюм", "Переодеть", "Изменить образ"],
          correct: 1,
        },
        {
          question: "Какой блок используется для определения касания спрайтом другого объекта?",
          answers: ["Касается?", "Соприкасается?", "Столкновение?", "Контакт?"],
          correct: 0,
        },
      ],
      hard: [
        {
          question: "Какой блок используется для создания переменной в Scratch?",
          answers: ["Создать переменную", "Новая переменная", "Добавить переменную", "Определить переменную"],
          correct: 0,
        },
        {
          question: "Какой блок используется для получения случайного числа?",
          answers: ["Случайное от 1 до 10", "Выбрать случайное", "Случайное число", "Случайное от _ до _"],
          correct: 3,
        },
        {
          question: "Какой блок используется для создания собственного блока (функции)?",
          answers: ["Создать блок", "Новая функция", "Определить", "Создать процедуру"],
          correct: 0,
        },
        {
          question: "Какой блок используется для проверки нажатия клавиши?",
          answers: ["Клавиша _ нажата?", "Нажата клавиша _?", "Проверить клавишу _", "Если клавиша _ нажата"],
          correct: 0,
        },
        {
          question: "Какой блок используется для получения координаты X спрайта?",
          answers: ["Позиция X", "Координата X", "Положение X", "X-позиция"],
          correct: 0,
        },
      ],
    },
  }
  
  // Global variables
  let currentSubject = ""
  let currentDifficulty = ""
  let currentQuestions = []
  let currentQuestionIndex = 0
  let userAnswers = []
  
  // DOM Elements
  document.addEventListener("DOMContentLoaded", () => {
    // Start button
    document.getElementById("start-btn").addEventListener("click", () => {
      showScreen("subject-screen")
    })
  
    // Subject selection
    const subjectCards = document.querySelectorAll(".option-card")
    subjectCards.forEach((card) => {
      card.addEventListener("click", function () {
        currentSubject = this.getAttribute("data-subject")
        showScreen("difficulty-screen")
      })
    })
  
    // Difficulty selection
    const difficultyCards = document.querySelectorAll(".difficulty-card")
    difficultyCards.forEach((card) => {
      card.addEventListener("click", function () {
        currentDifficulty = this.getAttribute("data-difficulty")
        startQuiz()
      })
    })
  
    // Back buttons
    document.getElementById("back-to-subjects").addEventListener("click", () => {
      showScreen("subject-screen")
    })
  
    document.getElementById("back-to-difficulty").addEventListener("click", () => {
      showScreen("difficulty-screen")
    })
  
    // Next question button
    document.getElementById("next-question").addEventListener("click", () => {
      const selectedAnswer = document.querySelector(".answer-option.selected")
      if (!selectedAnswer && currentQuestionIndex < currentQuestions.length) {
        alert("Пожалуйста, выберите ответ")
        return
      }
  
      if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++
        showQuestion()
      } else {
        showResults()
      }
    })
  
    // Retry quiz button
    document.getElementById("retry-quiz").addEventListener("click", () => {
      currentQuestionIndex = 0
      userAnswers = []
      startQuiz()
    })
  
    // Back to main button
    document.getElementById("back-to-main").addEventListener("click", () => {
      showScreen("title-screen")
    })
  })
  
  // Functions
  function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll(".screen")
    screens.forEach((screen) => {
      screen.classList.remove("active")
    })
  
    // Show the selected screen
    document.getElementById(screenId).classList.add("active")
  }
  
  function startQuiz() {
    // Reset quiz state
    currentQuestionIndex = 0
    userAnswers = []
  
    // Get questions for the selected subject and difficulty
    currentQuestions = quizData[currentSubject][currentDifficulty]
  
    // Update UI
    document.getElementById("subject-title").textContent = quizData[currentSubject].name
  
    let difficultyText = ""
    switch (currentDifficulty) {
      case "easy":
        difficultyText = "Легкий"
        break
      case "medium":
        difficultyText = "Средний"
        break
      case "hard":
        difficultyText = "Сложный"
        break
    }
    document.getElementById("difficulty-label").textContent = difficultyText
  
    // Show the first question
    showQuestion()
  
    // Show the quiz screen
    showScreen("quiz-screen")
  }
  
  function showQuestion() {
    const question = currentQuestions[currentQuestionIndex]
  
    // Update question counter
    document.getElementById("question-counter").textContent =
      `Вопрос ${currentQuestionIndex + 1}/${currentQuestions.length}`
  
    // Update question text
    document.getElementById("question-text").textContent = question.question
  
    // Clear previous answers
    const answersContainer = document.getElementById("answers-container")
    answersContainer.innerHTML = ""
  
    // Add answer options
    question.answers.forEach((answer, index) => {
      const answerElement = document.createElement("div")
      answerElement.className = "answer-option"
      answerElement.textContent = answer
      answerElement.dataset.index = index
  
      // Check if this answer was previously selected
      if (userAnswers[currentQuestionIndex] !== undefined && userAnswers[currentQuestionIndex] === index) {
        answerElement.classList.add("selected")
      }
  
      answerElement.addEventListener("click", selectAnswer)
      answersContainer.appendChild(answerElement)
    })
  }
  
  function selectAnswer() {
    // Remove selected class from all answers
    const answers = document.querySelectorAll(".answer-option")
    answers.forEach((answer) => {
      answer.classList.remove("selected")
    })
  
    // Add selected class to clicked answer
    this.classList.add("selected")
  
    // Save the answer
    userAnswers[currentQuestionIndex] = Number.parseInt(this.dataset.index)
  }
  
  function showResults() {
    // Calculate score
    let score = 0
    userAnswers.forEach((answer, index) => {
      if (answer === currentQuestions[index].correct) {
        score++
      }
    })
  
    // Update score display
    document.getElementById("score-value").textContent = `${score}/${currentQuestions.length}`
  
    // Update score text
    let scoreText = ""
    const percentage = (score / currentQuestions.length) * 100
    if (percentage >= 80) {
      scoreText = "Отличный результат!"
    } else if (percentage >= 60) {
      scoreText = "Хороший результат!"
    } else if (percentage >= 40) {
      scoreText = "Неплохой результат!"
    } else {
      scoreText = "Стоит попробовать еще раз!"
    }
    document.getElementById("score-text").textContent = scoreText
  
    // Show answer review
    const answersReview = document.getElementById("answers-review")
    answersReview.innerHTML = ""
  
    userAnswers.forEach((answer, index) => {
      const question = currentQuestions[index]
      const isCorrect = answer === question.correct
  
      const reviewElement = document.createElement("div")
      reviewElement.className = `answer-review ${isCorrect ? "correct" : "wrong"}`
  
      const statusElement = document.createElement("span")
      statusElement.className = `answer-status ${isCorrect ? "correct" : "wrong"}`
      statusElement.textContent = isCorrect ? "✓" : "✗"
  
      const questionElement = document.createElement("div")
      questionElement.innerHTML = `
              <div><strong>Вопрос ${index + 1}:</strong> ${question.question}</div>
              <div>Ваш ответ: ${question.answers[answer]}</div>
              ${!isCorrect ? `<div>Правильный ответ: ${question.answers[question.correct]}</div>` : ""}
          `
  
      reviewElement.appendChild(statusElement)
      reviewElement.appendChild(questionElement)
      answersReview.appendChild(reviewElement)
    })
  
    // Show results screen
    showScreen("results-screen")
  }
  
  