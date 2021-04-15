"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matrix = void 0;
var matrix = function (word) {
    var result = 'Szyfr macierzowy: ';
    var wordToEncrypt = word.replace(/\s/g, '');
    //szukanie rozmiaru tablicy
    var n = 1;
    while (true) {
        if (Math.pow(n, 2) >= wordToEncrypt.length)
            break;
        n++;
    }
    var matrix = [];
    //wypełnienie tablicy poszczegołnymi znakami podanymi przez użytkownika
    matrix = wordToEncrypt.split('');
    //wypełnienie brakujących miejsc spacjami np.: gdy słowo ma 7
    //znaków to 2 ostatnie miejsca wypełniamy spacjami
    while (Math.pow(n, 2) > matrix.length) {
        matrix.push(' ');
    }
    //!SZYFROWANIE
    for (var i = 0; i < n; i++) {
        //wewnętrzna pętla ma za zadanie iterować co n aby wyznaczać
        //zaszyfrowany tekst
        for (var j = i; j < matrix.length; j += n) {
            result += matrix[j];
        }
    }
    return result;
};
exports.matrix = matrix;
