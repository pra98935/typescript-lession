var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DerivedClass = (function () {
    function DerivedClass(_engineName) {
        //this._engineName = "derived "+_engineName; 
        this._engineName = _engineName;
    }
    DerivedClass.prototype.multi = function (a, b) {
        var c = a * b;
        return (c);
    };
    return DerivedClass;
}());
var BaseClass = (function (_super) {
    __extends(BaseClass, _super);
    function BaseClass(engineName) {
        var _this = _super.call(this, engineName) || this;
        _this.engineName = engineName;
        return _this;
    }
    BaseClass.prototype.enginef = function () {
        console.log("void function " + this.engineName);
    };
    BaseClass.prototype.sum = function (a, b) {
        var c = a + b;
        return (c);
    };
    BaseClass.prototype.substract = function (a, b) {
        var c = a - b;
        return (c);
    };
    return BaseClass;
}(DerivedClass));
var vobj = new BaseClass("HOnda");
vobj.enginef();
console.log(vobj.multi(4, 5));
