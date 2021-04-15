import { alphabet } from './index.js';

export const caesar = (word: string, shift: number) => {
  let result = 'Zaszyfrowane: ';

  console.log(word);
  word.split('').forEach((el) => {
    if (alphabet.indexOf(el) !== -1) {
      const alphabetIndex = alphabet.indexOf(el);
      result += alphabet[alphabetIndex + shift]
        ? alphabet[alphabetIndex + shift]
        : alphabet[alphabetIndex + shift - 26];
    } else {
      result += el;
    }
  });

  return result;
};
