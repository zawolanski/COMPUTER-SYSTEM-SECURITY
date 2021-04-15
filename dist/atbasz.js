"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.atbasz = void 0;
var index_js_1 = require("./index.js");
var atbasz = function (word) {
    var result = 'Zaszyfrowane: ';
    word.split('').forEach(function (el) {
        var alphabetIndex = index_js_1.alphabet.indexOf(el);
        if (index_js_1.alphabet.indexOf(el) !== -1) {
            result += index_js_1.alphabet[index_js_1.alphabet.length - alphabetIndex - 1];
        }
        else {
            result += el;
        }
    });
    return result;
};
exports.atbasz = atbasz;
