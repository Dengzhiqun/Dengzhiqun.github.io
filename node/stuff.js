/**
 * Created by lanou3g on 17/2/7.
 */
var counter = function (arr) {
    // return "一共有" + arr.length + "个元素";
    return `一共有${arr.length}个元素`;
}
var adder = function (a,b) {
    return `两数之和：${a + b}`;
}
var pi = 3.14;
// module.exports.counter = counter;
// module.exports.adder = adder;
module.exports = {
    counter:counter,
    adder:adder,
    pi:pi
};