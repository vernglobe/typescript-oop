(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CCat = void 0;
const CGroundAnimal_1 = require("./CGroundAnimal");
class CCat extends CGroundAnimal_1.CGroundAnimal {
    constructor() {
        super(...arguments);
        this.sound = "miao miao";
    }
    getSound() {
        return this.sound;
    }
}
exports.CCat = CCat;

},{"./CGroundAnimal":3}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CDog = void 0;
const CGroundAnimal_1 = require("./CGroundAnimal");
class CDog extends CGroundAnimal_1.CGroundAnimal {
    constructor() {
        super(...arguments);
        this.sound = "woof woof";
        this.setCountryOfOrigin = (country) => {
            this.country = country;
        };
        this.getCountryOfOrigin = () => {
            return this.country;
        };
    }
    getSound() {
        return this.sound;
    }
}
exports.CDog = CDog;

},{"./CGroundAnimal":3}],3:[function(require,module,exports){
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
            this.desc = desc; //prefix readonly desc: string will cause error `Cannot assign to 'desc' because it is a read-only property`
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
    getSound() {
        throw new Error("Method not implemented");
    }
}
exports.CGroundAnimal = CGroundAnimal;
_CGroundAnimal_total = new WeakMap();

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
1 - export/import : part of nodejs otherwise resulting error class not found.
2 -
*/
const CCat_1 = require("./animal/CCat");
const CDog_1 = require("./animal/CDog");
function main() {
    const dogFrmAfrika = new CDog_1.CDog(); // Create a class instance/object.
    dogFrmAfrika.setCountryOfOrigin("Afrika");
    dogFrmAfrika.setName("Tony");
    dogFrmAfrika.setTotal(100);
    dogFrmAfrika.setColor("gray");
    dogFrmAfrika.setNumberOfLeg(4);
    const dogFrmJapan = new CDog_1.CDog; // Class can be used as both a type and value.
    dogFrmJapan.setCountryOfOrigin("Japan");
    dogFrmJapan.setName("Meme");
    dogFrmJapan.setTotal(88);
    dogFrmJapan.setNumberOfLeg(4);
    dogFrmJapan.setColor("white");
    dogFrmJapan.setDesc("This dog is a special breed.");
    let cat;
    cat = new CCat_1.CCat();
    console.log(`Country of origin: ${dogFrmAfrika.getCountryOfOrigin()}`);
    console.log(`Name: ${dogFrmAfrika.name}`);
    console.log(`Total: ${dogFrmAfrika.getTotal()}`);
    console.log(`Color: ${dogFrmAfrika.getColor()}`);
    console.log(`Number of legs: ${dogFrmAfrika.getNumberOfLeg()}`);
    console.log(`\nCountry of origin: ${dogFrmJapan.getCountryOfOrigin()}`);
    console.log(`Name: ${dogFrmJapan.name}`);
    console.log(`Total: ${dogFrmJapan.getTotal()}`);
    console.log(`Color: ${dogFrmJapan.getColor()}`);
    console.log(`Sound: ${dogFrmJapan.getSound()}`);
    console.log(`Number of legs: ${dogFrmJapan.getNumberOfLeg()}`);
    console.log(`Description: ${dogFrmJapan.getDesc()}`);
    dogFrmJapan.desc = "Replace previous description";
    console.log(`${dogFrmJapan.desc}`);
    console.log(`\n Cat sound: ${cat.getSound()}`);
}
main();

},{"./animal/CCat":1,"./animal/CDog":2}]},{},[4]);
