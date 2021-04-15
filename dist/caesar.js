"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caesar = void 0;
var index_js_1 = require("./index.js");
var caesar = function (word, shift) {
    var result = 'Zaszyfrowane: ';
    console.log(word);
    word.split('').forEach(function (el) {
        if (index_js_1.alphabet.indexOf(el) !== -1) {
            var alphabetIndex = index_js_1.alphabet.indexOf(el);
            result += index_js_1.alphabet[alphabetIndex + shift]
                ? index_js_1.alphabet[alphabetIndex + shift]
                : index_js_1.alphabet[alphabetIndex + shift - 26];
        }
        else {
            result += el;
        }
    });
    return result;
};
exports.caesar = caesar;
