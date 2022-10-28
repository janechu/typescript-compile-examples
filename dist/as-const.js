// short
var MyEnumFoo = {
    valueOne: 1,
    valueTwo: 2
};
// long
var MyEnumBar = {
    valueOne: 1,
    valueTwo: 2,
    valueThree: 3,
    valueFour: 4,
    valueFive: 5,
    valueSix: 6,
    valueSeven: 7,
    valueEight: 8,
    valueNine: 9,
    valueTen: 10,
    valueEleven: 11,
    valueTwelve: 12,
    valueThirteen: 13,
    valueFourteen: 14,
    valueFifteen: 15,
    valueSixteen: 16,
    valueSeventeen: 17,
    valueEighteen: 18
};
// tree shaking example with use
console.log(MyEnumFoo.valueOne);
console.log(MyEnumBar.valueOne);
// test
console.log(Object.values(MyEnumBar));
// test 2
function test2() {
    for (var key in MyEnumBar) {
        console.log("what", key);
    }
}
test2();
export {};
