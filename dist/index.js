"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alphabet = void 0;
var convert_1 = require("./convert");
var caesar_1 = require("./caesar");
var atbasz_1 = require("./atbasz");
var matrix_1 = require("./matrix");
exports.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
window.addEventListener('DOMContentLoaded', function () {
    //decimal to ASCII and Binary
    var decimalWord = document.querySelector('#decimalWord');
    var decimalBtn = document.querySelector('.decimalBtn');
    var binaryOutput = document.querySelector('.binaryOutput');
    var asciiOutput = document.querySelector('.asciiOutput');
    decimalBtn.addEventListener('click', function () {
        binaryOutput.textContent = convert_1.convert(decimalWord.value);
        asciiOutput.textContent = convert_1.convert(decimalWord.value, 'ascii');
    });
    //Caesar cipher
    var caesarWord = document.getElementById('caesarWord');
    var caesarShiftValue = document.getElementById('caesarShift');
    var caesarBtn = document.querySelector('.caesarBtn');
    var caesarOutput = document.querySelector('.caesarOutput');
    var caesarShift = parseInt(caesarShiftValue.value, 10);
    caesarBtn.addEventListener('click', function () {
        caesarOutput.textContent = caesar_1.caesar(caesarWord.value, caesarShift);
    });
    //Atbash cipher
    var atbaszWord = document.getElementById('atbaszWord');
    var atbaszBtn = document.querySelector('.atbaszBtn');
    var atbaszOutput = document.querySelector('.caesarOutput');
    atbaszBtn.addEventListener('click', function () {
        atbaszOutput.textContent = atbasz_1.atbasz(atbaszWord.value);
    });
    //Matrix cipher
    var matrixWord = document.getElementById('matrixWord');
    var matrixBtn = document.querySelector('.matrixBtn');
    var matrixOutput = document.querySelector('.matrixOutput');
    matrixBtn.addEventListener('click', function () {
        matrixOutput.textContent = matrix_1.matrix(matrixWord.value);
    });
});
