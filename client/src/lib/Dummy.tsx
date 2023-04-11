const quizData = [
  {
    id: 1,
    question: 'JavaScript에서 변수를 선언하는 키워드는 무엇인가요?',
    answer: 'var, let, const',
    level: '초급',
  },
  {
    id: 2,
    question: 'JavaScript에서 객체를 만드는 방법은 무엇인가요?',
    answer: '{} 또는 new Object()',
    level: '초급',
  },
  {
    id: 3,
    question: 'JavaScript에서 함수를 선언하는 방법은 무엇인가요?',
    answer: '"function 키워드와 Arrow Function을 사용합니다.',
    level: '초급',
  },
  {
    id: 4,
    question: 'Arrow function에 대해 설명해주세요.',
    answer: '함수를 더 간결하게 작성할 수 있으며, this 바인딩이 다릅니다.',
    level: '중급',
  },
  {
    id: 5,
    question: 'JavaScript에서 사용되는 Hoisting이란 무엇인가요?',
    answer:
      '변수 선언이나 함수 선언이 소스코드의 상단으로 끌어올려지는 현상입니다.',
    level: '중급',
  },
  {
    id: 6,
    question: 'JavaScript에서 Closure란 무엇인가요?',
    answer:
      '함수와 그 함수가 선언된 렉시컬 환경(Lexical Environment)과의 조합입니다.',
    level: '중급',
  },
  {
    id: 7,
    question: 'JavaScript에서 Promise란 무엇인가요?',
    answer:
      '비동기 작업의 결과를 나타내는 객체로, 비동기 작업이 완료되면 성공 결과 또는 실패 결과를 반환합니다.',
    level: '중급',
  },
  {
    id: 8,
    question: 'JavaScript에서 async/await에 대해 설명해주세요.',
    answer:
      '비동기 작업을 더 쉽게 다룰 수 있는 문법입니다. async 함수 내에서 await 키워드를 사용하여 비동기 작업의 결과를 기다릴 수 있습니다.',
    level: '고급',
  },
  {
    id: 9,
    question: 'JavaScript에서 메모리 누수(Memory Leak)란 무엇인가요?',
    answer: '사용하지 않는 메모리를 계속 점유하고 있는 현상입니다.',
    level: '고급',
  },
  {
    id: 10,
    question: 'JavaScript에서 prototype이란 무엇인가요?',
    answer: '객체가 상속 받을 수 있는 속성과 메소드가 정의된 객체입니다.',
    level: '중급',
  },
  {
    id: 11,
    question:
      'JavaScript에서 함수형 프로그래밍(Functional Programming)이란 무엇인가요?',
    answer:
      '순수 함수(Pure Function)를 조합하여 프로그래밍하는 패러다임입니다.',
    level: '중급',
  },
  {
    id: 12,
    question: 'JavaScript에서 REST API란 무엇인가요?',
    answer:
      'HTTP 프로토콜을 기반으로, 리소스를 이름으로 구분하여 데이터를 주고받는 API 디자인 패턴입니다.',
    level: '중급',
  },
  {
    id: 13,
    question: 'JavaScript에서 Module이란 무엇인가요?',
    answer: '자바스크립트 파일 내에서 독립적으로 작동하는 코드 단위입니다.',
    level: '고급',
  },
  {
    id: 14,
    question: 'JavaScript에서 Event Loop란 무엇인가요?',
    answer: '비동기적인 코드 실행을 관리하는 내부 처리 메커니즘입니다.',
    level: '고급',
  },
  {
    id: 15,
    question: 'JavaScript에서 this 키워드에 대해 설명해주세요.',
    answer:
      '현재 실행 중인 함수 내에서의 실행 문맥(Context)을 나타내는 키워드입니다.',
    level: '중급',
  },
];

export { quizData };
