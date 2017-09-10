var BaseClass2 = (function () {
    function BaseClass2() {
    }
    BaseClass2.prototype.sum = function (a, b) {
        var c = a + b;
        return (c);
    };
    BaseClass2.prototype.substract = function (a, b) {
        var c = a - b;
        return (c);
    };
    return BaseClass2;
}());
var vobBaseClass2 = new BaseClass2();
console.log(vobBaseClass2.sum(5, 6));
console.log(vobBaseClass2.substract(9, 6));
