// проверка строки на палиндром
export const isPalindromeLoop = (str) => {

    const formattedStr = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '')
    
    for (let i = 0; i < formattedStr.length / 2; i++) {
        const firstEl = formattedStr[i];
        const secondEl = formattedStr[formattedStr.length - 1 - i]
        
        if (firstEl !== secondEl) return false
    }

    return true
};

export const isPalindromeReverse = (str) => {
    const formattedStr = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, '')
    const reverseStr = formattedStr.split('').reverse().join('')

    return formattedStr === reverseStr;
}