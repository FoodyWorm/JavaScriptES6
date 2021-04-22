function calculate(r) {
    return 4/3*Math.PI*Math.pow(r, 3);
}

// exports 프로퍼티에 무엇을 할당해도, 그것을 내보낸다.
module.exports = calculate;