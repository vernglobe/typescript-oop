(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CDog = void 0;
const CGroundAnimal_1 = require("./CGroundAnimal");
class CDog extends CGroundAnimal_1.CGroundAnimal {
    constructor() {
        super(...arguments);
        this.setCountryOfOrigin = (country) => {
            this.country = country;
        };
        this.getCountryOfOrigin = () => {
            return this.country;
        };
    }
}
exports.CDog = CDog;

},{"./CGroundAnimal":2}],2:[function(require,module,exports){
"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CGroundAnimal_total;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CGroundAnimal = void 0;
class CGroundAnimal {
    constructor() {
        _CGroundAnimal_total.set(this, void 0); // Not accessible outside the class same as private modifier.
        this.setDesc = (desc) => {
            throw new Error("Method not implemented!");
        };
        this.getDesc = () => {
            return this.desc;
        };
        this.setName = (name) => {
            this.name = name;
        };
        this.getName = () => {
            return this.name;
        };
        this.setColor = (color) => {
            this.color = color;
        };
        this.getColor = () => {
            return this.color;
        };
    }
    setTotal(total) {
        __classPrivateFieldSet(this, _CGroundAnimal_total, total, "f");
    }
    getTotal() {
        return __classPrivateFieldGet(this, _CGroundAnimal_total, "f");
    }
    setNumberOfLeg(numberOfLeg) {
        this.numberOfLeg = numberOfLeg;
    }
    getNumberOfLeg() {
        return this.numberOfLeg;
    }
}
exports.CGroundAnimal = CGroundAnimal;
_CGroundAnimal_total = new WeakMap();

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
1 - export/import : part of nodejs otherwise resulting error class not found.
2 -
*/
const CDog_1 = require("./animal/CDog");
function main() {
    const dog = new CDog_1.CDog(); // Create a class instance/object.
    dog.setCountryOfOrigin("Malaysia");
    dog.setName("Tony");
    dog.setTotal(100);
    dog.setColor("gray");
    console.log(`Country of origin: ${dog.getCountryOfOrigin()}`);
    console.log(`Name: ${dog.name}`);
    console.log(`Total: ${dog.getTotal()}`);
    console.log(`Color: ${dog.getColor()}`);
}
main();

},{"./animal/CDog":1}]},{},[3]);
