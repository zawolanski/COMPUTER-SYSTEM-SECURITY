import { alphabet } from './index.js';

export const atbasz = (word: string) => {
  let result = 'Zaszyfrowane: ';

  word.split('').forEach((el: string) => {
    const alphabetIndex = alphabet.indexOf(el);
    if (alphabet.indexOf(el) !== -1) {
      result += alphabet[alphabet.length - alphabetIndex - 1];
    } else {
      result += el;
    }
  });

  return result;
};
