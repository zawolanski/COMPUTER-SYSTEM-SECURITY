import { convert } from './convert';
import { caesar } from './caesar';
import { atbasz } from './atbasz';
import { matrix } from './matrix';

export const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

window.addEventListener('DOMContentLoaded', () => {
  //decimal to ASCII and Binary
  const decimalWord = <HTMLInputElement>document.querySelector('#decimalWord');
  const decimalBtn = <HTMLButtonElement>document.querySelector('.decimalBtn');
  const binaryOutput = <HTMLDivElement>document.querySelector('.binaryOutput');
  const asciiOutput = <HTMLDivElement>document.querySelector('.asciiOutput');

  decimalBtn.addEventListener('click', () => {
    binaryOutput.textContent = convert(decimalWord.value);
    asciiOutput.textContent = convert(decimalWord.value, 'ascii');
  });

  //Caesar cipher
  const caesarWord = <HTMLInputElement>document.getElementById('caesarWord');
  const caesarShiftValue = <HTMLInputElement>document.getElementById('caesarShift');
  const caesarBtn = <HTMLButtonElement>document.querySelector('.caesarBtn');
  const caesarOutput = <HTMLDivElement>document.querySelector('.caesarOutput');
  const caesarShift = parseInt(caesarShiftValue.value, 10);

  caesarBtn.addEventListener('click', () => {
    caesarOutput.textContent = caesar(caesarWord.value, caesarShift);
  });

  //Atbash cipher
  const atbaszWord = <HTMLInputElement>document.getElementById('atbaszWord');
  const atbaszBtn = <HTMLButtonElement>document.querySelector('.atbaszBtn');
  const atbaszOutput = <HTMLDivElement>document.querySelector('.caesarOutput');

  atbaszBtn.addEventListener('click', () => {
    atbaszOutput.textContent = atbasz(atbaszWord.value);
  });

  //Matrix cipher
  const matrixWord = <HTMLInputElement>document.getElementById('matrixWord');
  const matrixBtn = <HTMLButtonElement>document.querySelector('.matrixBtn');
  const matrixOutput = <HTMLDivElement>document.querySelector('.matrixOutput');

  matrixBtn.addEventListener('click', () => {
    matrixOutput.textContent = matrix(matrixWord.value);
  });
});
