export const matrix = (word: string) => {
  let result = 'Szyfr macierzowy: ';
  let wordToEncrypt = word.replace(/\s/g, '');

  //szukanie rozmiaru tablicy
  let n = 1;
  while (true) {
    if (n ** 2 >= wordToEncrypt.length) break;
    n++;
  }

  let matrix: string[] = [];
  //wypełnienie tablicy poszczegołnymi znakami podanymi przez użytkownika
  matrix = wordToEncrypt.split('');

  //wypełnienie brakujących miejsc spacjami np.: gdy słowo ma 7
  //znaków to 2 ostatnie miejsca wypełniamy spacjami
  while (n ** 2 > matrix.length) {
    matrix.push(' ');
  }

  //!SZYFROWANIE
  for (let i = 0; i < n; i++) {
    //wewnętrzna pętla ma za zadanie iterować co n aby wyznaczać
    //zaszyfrowany tekst
    for (let j = i; j < matrix.length; j += n) {
      result += matrix[j];
    }
  }

  return result;
};
