// FizzBuzz для чисел от 1 до n
export const fizzBuzz = (n) => {
    const result = [];

    for (let i = 1; i <= n; i++) {
        
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz')
        } else if (i % 3 === 0) {
            result.push('Fizz')
        } else if (i % 5 === 0) {
            result.push('Buzz')
        } else {
            result.push(i)
        }
        
    }
    
    return result
};

export const fizzBuzzSecond = (n) => {
    const result = [];

    for (let i = 1; i <= n; i++) {
        let word = ''
        
        if (i % 3 === 0) {
            word += 'Fizz';
        }

        if (i % 5 === 0) {
            word += 'Buzz';
        }

        if (word === '') {
            result.push(i);
        } else {
            result.push(word);
        }


    }

    return result
}