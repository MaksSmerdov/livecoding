import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import * as solutions from './fizzbuzz.js';

for (const [name, fizzBuzz] of Object.entries(solutions)) {
  describe(name, () => {
    test('обычные числа остаются числами', () => {
      assert.deepEqual(fizzBuzz(2), [1, 2]);
    });

    test('Fizz и Buzz', () => {
      assert.deepEqual(fizzBuzz(5), [1, 2, 'Fizz', 4, 'Buzz']);
    });

    test('FizzBuzz для чисел, кратных и 3, и 5', () => {
      assert.deepEqual(fizzBuzz(15), [
        1,
        2,
        'Fizz',
        4,
        'Buzz',
        'Fizz',
        7,
        8,
        'Fizz',
        'Buzz',
        11,
        'Fizz',
        13,
        14,
        'FizzBuzz',
      ]);
    });

    test('n = 0 даёт пустой массив', () => {
      assert.deepEqual(fizzBuzz(0), []);
    });
  });
}
