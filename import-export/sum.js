'use strict';
exports.__esModule = true;
var Importexa = (function () {
    function Importexa() {
    }
    Importexa.prototype.sum = function (a, b) {
        var c = a + b;
        return c;
    };
    return Importexa;
}());
var vobj = new Importexa();
var result = vobj.sum(5, 6);
console.log(result);
