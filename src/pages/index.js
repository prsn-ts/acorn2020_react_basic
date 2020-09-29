// src/pages/index.js 페이지

// 여러개의 컴포넌트를 불러와서 동일한 이름으로 내보내기(index.js의 역할)
// index.js 라는 파일의 이름은 정해져 있다(바꾸면 안됨!!!)
// default 뒤에 as는 Alias(별칭)의 의미이다.
export { default as Home } from './Home';
export { default as Study } from './Study';
export { default as Game } from './Game';
export { default as Buy } from './Buy'; 