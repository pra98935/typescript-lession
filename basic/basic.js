var BasicExample = (function () {
    function BasicExample() {
        console.log("Hello Team");
    }
    BasicExample.prototype.sum = function (a, b) {
        var c = a + b;
        return (c);
    };
    return BasicExample;
}());
var Obj = new BasicExample();
var Result = Obj.sum(5, 6);
console.log(Result);
