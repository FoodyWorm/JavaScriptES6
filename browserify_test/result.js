(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// hello라는 Text를 모듈호
module.exports = 'Hello';

},{}],2:[function(require,module,exports){
// world라는 Text를 모듈화하여 프로젝트내에 공유한다.
module.exports = 'world';
},{}],3:[function(require,module,exports){
// require은 node가 설치되어있기에 사용가능한 모듈을 불러오는 함수이다.
// 각각의 js파일에서 모듈화된 것을 가져와서 hello에 집어넣고 있는 중 이다.
var hello = require('./Test_Module/hello.js');
var world = require('./Test_Module/world.js');

// 모듈을 만들고 사용하지 않으면, 아무 소용이 없다.
console.log(hello + world);
//document.write(hello + ", " +  world + "!");
},{"./Test_Module/hello.js":1,"./Test_Module/world.js":2}]},{},[3]);
