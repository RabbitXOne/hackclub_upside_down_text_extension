function replaceText(textToReplace) {
    if (textToReplace.nodeType === 3) {
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/a/g, 'ɐ');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/b/g, 'q');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/c/g, 'ɔ');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/p/g, 'd');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/d/g, 'p');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/e/g, 'ǝ');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/f/g, 'ɟ');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/g/g, 'ƃ');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/h/g, 'ɥ');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/i/g, 'ı');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/j/g, 'ƪ');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/k/g, 'ʞ');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/l/g, '1');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/m/g, 'ɯ');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/n/g, 'n');
        // Skip 'o'
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/q/g, 'b');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/r/g, 'ɹ');
        // Skip 's'
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/t/g, 'ʇ');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/u/g, '∩');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/v/g, 'ʌ');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/w/g, 'ʍ');
        // Skip 'x'
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/y/g, 'ʎ');
        // Skip 'z'

        textToReplace.nodeValue = textToReplace.nodeValue.replace(/A/g, '∀');
        // Skip 'B'
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/C/g, 'ɔ');
        // Skip 'D'
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/E/g, 'Ǝ');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/F/g, 'Ⅎ');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/G/g, '⅁');
        // Skip 'H'
        // Skip 'I'
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/J/g, 'ſ');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/K/g, '⋊');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/L/g, '⅂');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/M/g, 'W');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/N/g, 'ᴎ');
        // Skip 'O'
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/P/g, 'Ԁ');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/Q/g, 'Ό');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/R/g, 'ᴚ');
        // Skip 'S'
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/T/g, '⊥');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/U/g, '∩');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/V/g, 'ᴧ');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/W/g, 'M');
        // Skip 'x'
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/Y/g, '⅄');
        // Skip 'z'

        // Skip '0'
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/1/g, 'Ɩ');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/5/g, '૨');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/2/g, '5');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/3/g, 'Ɛ');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/4/g, 'ㄣ');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/6/g, '୧');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/7/g, '𝘓');
        // Skip '8'
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/9/g, 'მ');

        textToReplace.nodeValue = textToReplace.nodeValue.replace(/,/g, '‘');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/\./g, '˙');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/'/g, ',');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/"/g, '„');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/!/g, '¡');
        textToReplace.nodeValue = textToReplace.nodeValue.replace(/&/g, '⅋');


    } else if (textToReplace.nodeType === 1 && textToReplace.nodeName != "SCRIPT" && textToReplace.nodeName != "STYLE") {
        textToReplace.childNodes.forEach(replaceText);
    }
}

replaceText(document.body);