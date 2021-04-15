"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
var convert = function (word, type) {
    if (type === void 0) { type = 'binary'; }
    var result = (type === 'binary' ? 'Binarnie' : 'Ascii') + ": ";
    for (var i = 0; i < word.length; i++) {
        if (type === 'binary') {
            result += word[i].charCodeAt(0).toString(2) + " ";
        }
        else {
            result += word[i].charCodeAt(0) + " ";
        }
    }
    return result;
};
exports.convert = convert;
