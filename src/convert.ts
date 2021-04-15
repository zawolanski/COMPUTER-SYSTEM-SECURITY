type TypeOfOperation = 'binary' | 'ascii';

export const convert = (word: string, type: TypeOfOperation = 'binary') => {
  let result = `${type === 'binary' ? 'Binarnie' : 'Ascii'}: `;

  for (let i = 0; i < word.length; i++) {
    if (type === 'binary') {
      result += `${word[i].charCodeAt(0).toString(2)} `;
    } else {
      result += `${word[i].charCodeAt(0)} `;
    }
  }

  return result;
};
