const runicAlphabet = {
    'a': 'ᚨ',
    'b': 'ᛒ',
    'c': 'ᚲ',
    'd': 'ᛞ',
    'e': 'ᛖ',
    'f': 'ᚠ',
    'g': 'ᚷ',
    'h': 'ᚺ',
    'i': 'ᛁ',
    'j': 'ᛃ',
    'k': 'ᚲ',
    'l': 'ᛚ',
    'm': 'ᛗ',
    'n': 'ᚾ',
    'o': 'ᛟ',
    'p': 'ᛈ',
    'q': 'ᛩ',
    'r': 'ᚱ',
    's': 'ᛊ',
    't': 'ᛏ',
    'u': 'ᚢ',
    'v': 'ᚡ',
    'w': 'ᚹ',
    'x': 'ᛪ',
    'y': 'ᛇ',
    'z': 'ᛉ',
    ' ': ' '
};

function translateToRunic() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    let runicText = '';
    for (let char of inputText) {
        runicText += runicAlphabet[char] || char;
    }
    document.getElementById('outputRunic').innerText = runicText;
}
