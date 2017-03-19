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
var Greeter = (function () {
    function Greeter(message) {
        var _this = this;
        this.greet = function () {
            return "Hello, " + _this.greeting;
        };
        this.greeting = message;
    }
    return Greeter;
}());
var Greeter2 = (function (_super) {
    __extends(Greeter2, _super);
    function Greeter2(message) {
        return _super.call(this, message) || this;
    }
    Greeter2.prototype.greet2 = function () {
        console.log(this.greet());
    };
    return Greeter2;
}(Greeter));
var test = new Greeter2('Luis');
console.log("This is a test");
test.greet2();
console.log(test);
