import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import * as solutions from './palindrome.js';

for (const [name, isPalindrome] of Object.entries(solutions)) {
  describe(`${name}: уровень 1: простая строка`, () => {
    test('палиндромы', () => {
      assert.equal(isPalindrome('шалаш'), true);
      assert.equal(isPalindrome('abba'), true);
      assert.equal(isPalindrome('racecar'), true);
    });

    test('не палиндромы', () => {
      assert.equal(isPalindrome('hello'), false);
      assert.equal(isPalindrome('ab'), false);
    });

    test('пустая строка и один символ', () => {
      assert.equal(isPalindrome(''), true);
      assert.equal(isPalindrome('a'), true);
    });
  });

  describe(`${name}: уровень 2: регистр, пробелы и знаки препинания`, () => {
    test('игнорирует регистр', () => {
      assert.equal(isPalindrome('Шалаш'), true);
    });

    test('игнорирует пробелы и знаки', () => {
      assert.equal(isPalindrome('А роза упала на лапу Азора'), true);
      assert.equal(isPalindrome('A man, a plan, a canal: Panama'), true);
      assert.equal(isPalindrome('Hello, world!'), false);
      assert.equal(isPalindrome('1a2-2a1'), true);
    });
  });
}
