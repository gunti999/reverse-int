module.exports = function reverse (n) {
    let abs = Math.abs(n);
    let arr = String(abs).split('');
    let arrReverse = arr.reverse();
    return Number(arrReverse.join(''));
}