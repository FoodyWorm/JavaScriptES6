// require은 node가 설치되어있기에 사용가능한 모듈을 불러오는 함수이다.
// 각각의 js파일에서 모듈화된 것을 가져와서 hello에 집어넣고 있는 중 이다.
import test from './hello.js'

// 모듈을 만들고 사용하지 않으면, 아무 소용이 없다.
test();

//document.write(hello + ", " +  world + "!");