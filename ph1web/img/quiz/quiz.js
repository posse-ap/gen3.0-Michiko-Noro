'use strict';

{
  const allQuiz = document.querySelectorAll('.js-quiz');

  const setDisabled = answers => {
    answers.forEach(answer => {
      answer.disabled = true;
    })
  }

  const setTitle = (target, isCorrect) => {
    target.innerText = isCorrect ? '正解！' : '不正解...';
  }
  const setClassName = (target, isCorrect) => {
    target.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');
  }


  allQuiz.forEach(quiz => {
    const answers = quiz.querySelectorAll('.quiz_answer');
    const selectedQuiz = Number(quiz.getAttribute('data-quiz'));
    const answerBox = quiz.querySelector('.js-answerBox');
    const answerTitle = quiz.querySelector('.js-answerTitle');
    const answerText = quiz.querySelector('.js-answerText');

    answers.forEach(answer => {
      answer.addEventListener('click', () => {
        answer.classList.add('is-selected');
        const selectedAnswer = Number(answer.getAttribute('data-answer'));

        setDisabled(answers);

        const isCorrect = CORRECT_ANSWERS[selectedQuiz].index === selectedAnswer;

        answerText.innerText = CORRECT_ANSWERS[selectedQuiz].value;
        setTitle(answerTitle, isCorrect);
        setClassName(answerBox, isCorrect);
      })
    })
  })
}


const ALL_QUIZ = [
  {
    question: '日本のT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
    answer: ['約28万人', '約79万人', '約183万人'],
    correctNum: 1,
    note: '経済産業省　2019年3月 - IT 人材需給に関する調査'
  },
  {
    question: '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
    answer: ['INTECH', 'BIZZTECH', 'X-TECH'],
    correctNum: 2,
  },
  {
    question: 'IoTとは何の略でしょう？',
    answer: ['Internet of Things', 'Integrate into Technology', 'Information on Tool'],
    correctNum: 0,
  },
  {
    question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
    answer: ['Society 5.0', 'CyPhy', 'SDGs'],
    correctNum: 0,
    note: 'Society5.0 - 科学技術政策 - 内閣府'
  },
  {
    question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
    answer: ['Web3.0', 'NFT', 'メタバース'],
    correctNum: 0,
  },
  {
    question: '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
    answer: ['約2倍', '約5倍', '約11倍'],
    correctNum: 1,
    note: 'Accenture Technology Vision 2021'
  }

];

const quizContainer = document.getElementById('js-quizContainer');

const createQuizHtml = (quizItem, questionNumber) => {
  const answersHtml = quizItem.answers.map((answer, answerIndex) => `<li class="quiz-answer">
        <button class="p-quiz-box__answer__button js-answer" data-answer="${answerIndex}">
          ${answer}<i class="u-icon__arrow"></i>
        </button>
      </li>`
  ).join('');

  const noteHtml = quizItem.note ? `<cite class="p-quiz-box__note">
      <i class="u-icon__note"></i>${quizItem.note}
    </cite>` : '';

  return `<section class="p-quiz-box js-quiz" data-quiz="${questionNumber}">
      <div class="q_1">
      <h1 class="question_title">Q</h1>
        <h2 class="question">
          <span class="question_title">Q${questionNumber + 1}</span>
          <span
            class="question_text">${quizItem.question}</span>
        </h2>
        <figure class="question_image">
          <img src="../assets/img/quiz/img-quiz0${questionNumber + 1}.png" alt="q1_img">
        </figure>
      </div>
      <div class="answer">
        <span class="quiz_title">A</span>
        <ul class="quiz_answer_list">
          ${answersHtml}
        </ul>
        <div class="p-quiz-box__answer__correct js-answerBox">
          <p class="p-quiz-box__answer__correct__title js-answerTitle"></p>
          <p class="p-quiz-box__answer__correct__content">
            <span class="p-quiz-box__answer__correct__content__label">A</span>
            <span class="js-answerText"></span>
          </p>
        </div>
      </div>
      ${noteHtml}
    </section>`
}

quizContainer.innerHTML = ALL_QUIZ.map((quizItem, index) => {
  return createQuizHtml(quizItem, index)
}).join('')

const allQuiz = document.querySelectorAll('.js-quiz');

const setDisabled = answers => {
  answers.forEach(answer => {
    answer.disabled = true;
  })
}

const setTitle = (target, isCorrect) => {
  target.innerText = isCorrect ? '正解！' : '不正解...';

  const setClassName = (target, isCorrect) => {
    target.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');
  }

  allQuiz.forEach(quiz => {
    const answers = quiz.querySelectorAll('.js-answer');
    const selectedQuiz = Number(quiz.getAttribute('data-quiz'));
    const answerBox = quiz.querySelector('.js-answerBox');
    const answerTitle = quiz.querySelector('.js-answerTitle');
    const answerText = quiz.querySelector('.js-answerText');

    answers.forEach(answer => {
      answer.addEventListener('click', () => {
        answer.classList.add('is-selected');
        const selectedAnswerNumber = Number(answer.getAttribute('data-answer'));

        setDisabled(answers);

        const correctNumber = ALL_QUIZ[selectedQuiz].correctNumber
        const isCorrect = correctNumber === selectedAnswerNumber;

        answerText.innerText = ALL_QUIZ[selectedQuiz].answers[correctNumber];
        setTitle(answerTitle, isCorrect);
        setClassName(answerBox, isCorrect);
      })
    })
  })

  const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

}
shuffle(ALL_QUIZ);