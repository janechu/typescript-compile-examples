// short enum
var MyEnumFoo;
(function (MyEnumFoo) {
    MyEnumFoo[MyEnumFoo["valueOne"] = 1] = "valueOne";
    MyEnumFoo[MyEnumFoo["valueTwo"] = 2] = "valueTwo";
})(MyEnumFoo || (MyEnumFoo = {}));
// long enum
var MyEnumBar;
(function (MyEnumBar) {
    MyEnumBar[MyEnumBar["valueOne"] = 1] = "valueOne";
    MyEnumBar[MyEnumBar["valueTwo"] = 2] = "valueTwo";
    MyEnumBar[MyEnumBar["valueThree"] = 3] = "valueThree";
    MyEnumBar[MyEnumBar["valueFour"] = 4] = "valueFour";
    MyEnumBar[MyEnumBar["valueFive"] = 5] = "valueFive";
    MyEnumBar[MyEnumBar["valueSix"] = 6] = "valueSix";
    MyEnumBar[MyEnumBar["valueSeven"] = 7] = "valueSeven";
    MyEnumBar[MyEnumBar["valueEight"] = 8] = "valueEight";
    MyEnumBar[MyEnumBar["valueNine"] = 9] = "valueNine";
    MyEnumBar[MyEnumBar["valueTen"] = 10] = "valueTen";
    MyEnumBar[MyEnumBar["valueEleven"] = 11] = "valueEleven";
    MyEnumBar[MyEnumBar["valueTwelve"] = 12] = "valueTwelve";
    MyEnumBar[MyEnumBar["valueThirteen"] = 13] = "valueThirteen";
    MyEnumBar[MyEnumBar["valueFourteen"] = 14] = "valueFourteen";
    MyEnumBar[MyEnumBar["valueFifteen"] = 15] = "valueFifteen";
    MyEnumBar[MyEnumBar["valueSixteen"] = 16] = "valueSixteen";
    MyEnumBar[MyEnumBar["valueSeventeen"] = 17] = "valueSeventeen";
    MyEnumBar[MyEnumBar["valueEighteen"] = 18] = "valueEighteen";
})(MyEnumBar || (MyEnumBar = {}));
// tree shaking example with use
console.log(MyEnumFoo.valueOne);
console.log(MyEnumBar.valueOne);
