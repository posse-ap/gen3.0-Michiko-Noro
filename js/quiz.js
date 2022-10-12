'use strict';

{
  // ハンバーガーメニュー
  const topBody = document.getElementById('js_topBody')
  const header = document.getElementById('js_header');
  const headerHamburger = document.getElementById('js_headerHamburger');
  const main = document.getElementById('js_main');
  const footer = document.getElementById('js_footer');
  headerHamburger.addEventListener('click', () => {
    topBody.classList.toggle('is-changed')
    header.classList.toggle('is-open');
    main.classList.toggle('hide');
    footer.classList.toggle('is-changed');
  });

const TEMPLATE_ALL_QUIZ = [
  {
    question: '日本のT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
    image: 'img-quiz01.png',
    answers: ['約28万人', '約79万人', '約183万人'],
    correctNum: 1,
    note: '経済産業省　2019年3月 - IT 人材需給に関する調査'
  },
  {
    question: '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
    image: 'img-quiz02.png',
    answers: ['INTECH', 'BIZZTECH', 'X-TECH'],
    correctNum: 2,
  },
  {
    question: 'IoTとは何の略でしょう？',
    image: 'img-quiz03.png',
    answers: ['Internet of Things', 'Integrate into Technology', 'Information on Tool'],
    correctNum: 0,
  },
  {
    question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
    image: 'img-quiz04.png',
    answers: ['Society 5.0', 'CyPhy', 'SDGs'],
    correctNum: 0,
    note: 'Society5.0 - 科学技術政策 - 内閣府'
  },
  {
    question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
    image: 'img-quiz05.png',
    answers: ['Web3.0', 'NFT', 'メタバース'],
    correctNum: 0,
  },
  {
    question: '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
    image: 'img-quiz06.png',
    answers: ['約2倍', '約5倍', '約11倍'],
    correctNum: 1,
    note: 'Accenture Technology Vision 2021'
  }
];

const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const ALL_QUIZ = shuffle(TEMPLATE_ALL_QUIZ);

const quizContainer = document.getElementById('js-quizContainer');

const createQuizHtml = (quizItem, questionNumber) => {
  const answersHtml = quizItem.answers.map((answer, answerIndex) => 
      // `
      // <li class="quiz-answer">
      //   <button class="p-quiz-box__answer__button js-answer" data-answer="${answerIndex}">
      //     ${answer}<i class="u-icon__arrow"></i>
      //   </button>
      // </li>
      // `
      `
        <li class="quiz-answer" data-answer="${answerIndex}">${answer}<i class="fa-solid fa-play"></i></li>
      `
  ).join('');

  const noteHtml = quizItem.note ? `<cite class="p-quiz-box__note">
      <i class="u-icon__note"></i>${quizItem.note}
    </cite>` : '';

  // return `<section class="p-quiz-box js-quiz" data-quiz="${questionNumber}">
  //     <div class="q_1">
  //     <h1 class="question_title">Q</h1>
  //       <h2 class="question">
  //         <span class="question_title">Q${questionNumber + 1}</span>
  //         <span
  //           class="question_text">${quizItem.question}</span>
  //       </h2>
  //       <figure class="question_image">
  //         <img src="../img/quiz/img-quiz0${questionNumber + 1}.png" alt="q1_img">
  //       </figure>
  //     </div>
  //     <div class="answer">
  //       <span class="quiz_title">A</span>
  //       <ul class="quiz_answer_list">
  //         ${answersHtml}
  //       </ul>
        // <div class="p-quiz-box__answer__correct js-answerBox">
        //   <p class="p-quiz-box__answer__correct__title js-answerTitle"></p>
        //   <p class="p-quiz-box__answer__correct__content">
        //     <span class="p-quiz-box__answer__correct__content__label">A</span>
        //     <span class="js-answerText"></span>
        //   </p>
        // </div>
  //     </div>
  //     ${noteHtml}
  //   </section>`

  return `
      <div class="q_1 js-quiz" data-quiz="${questionNumber}">
        <div class="question">
          <h1>Q${questionNumber + 1}</h1>
          <p>${quizItem.question}</p>
          <img src="../img/quiz/${quizItem.image}" alt="q${questionNumber + 1}_img">
        </div>
        <div class="answer">
          <h1>A</h1>
          <ul class="quiz_answer">
          ${answersHtml}
          </ul>
          <p><i src="../img/icon/icon-note.svg"></i>経済産業省2019年3月ーIT人材需給に関する調査</p>
          <div class="p-quiz-box__answer__correct js-answerBox">
            <p class="p-quiz-box__answer__correct__title js-answerTitle"></p>
            <p class="p-quiz-box__answer__correct__content">
              <span class="p-quiz-box__answer__correct__content__label"></span>
              <span class="js-answerText"></span>
            </p>
          </div>
        </div>
      </div>`;
}

quizContainer.innerHTML = ALL_QUIZ.map((quizItem, index) => {
  return createQuizHtml(quizItem, index)
}).join('')

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
    const answers = quiz.querySelectorAll('.quiz-answer');
    const selectedQuiz = Number(quiz.getAttribute('data-quiz'));
    const answerBox = quiz.querySelector('.js-answerBox');
    const answerTitle = quiz.querySelector('.js-answerTitle');
    const answerText = quiz.querySelector('.js-answerText');

    answers.forEach(answer => {
      answer.addEventListener('click', () => {
        answer.classList.add('is-selected');
        const selectedAnswer = Number(answer.getAttribute('data-answer'));

        setDisabled(answers);

        const correctNum = ALL_QUIZ[selectedQuiz].correctNum
        const isCorrect = ALL_QUIZ[selectedQuiz].correctNum === selectedAnswer;

        answerText.innerText = ALL_QUIZ[selectedQuiz].answers[correctNum];
        setTitle(answerTitle, isCorrect);
        setClassName(answerBox, isCorrect);
      })
    })
  })
}
}