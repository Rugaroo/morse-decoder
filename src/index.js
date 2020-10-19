const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let str = '';
    let morse = '';
    for (let i = 0; i < expr.length; i += 10) {
        let symbols = expr.slice(i, i + 10);

        if (symbols === '**********') {
            str += ' ';
        } else {

            for (let k = 0; k < 10; k += 2) {
                if (symbols[k] === '1') {
                    if (symbols[k + 1] === '0') {
                        morse += '.';
                    } else morse += '-';
                }
            }
            str += MORSE_TABLE[morse];
            morse = '';
        }
    }
    return str;
}

module.exports = {
    decode
}