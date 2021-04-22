function calculate(a, x, n) {
    if(x === 1) 
        return a*n;
    else 
        return a*(1 - Math.pow(x, n)/(1 - x));
}

// exports 프로퍼티에 무엇을 할당해도, 그것을 내보낸다.
module.exports = calculate;