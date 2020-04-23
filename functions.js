function getLength(string) { //Function 1
    return string.length;
}

function convertToLower(string) { //Function 2 (add 32 to ascii of uppercases)
    let lowercase = "";
    for (var i = 0; i < getLength(string); i++) { 
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
            lowercase += (String.fromCharCode(string.charCodeAt(i) + 32));
        } else {
            lowercase += string.charAt(i);
        }
    }
    return lowercase;
}
function convertToUpper(char) { //Extra function
    char = (String.fromCharCode(char.charCodeAt(0) - 32));
    return char;
}

function reverse(string) { //Function 3
    let reversed = "";
    for(var i = getLength(string)-1; i >=0; i--) {
        reversed += string.charAt(i);
    }
    return reversed;
}

function sumOfNumbers(array) { //Function 4
    let sum = 0;
    for(var i = 0; i < array.length; i++) {
        intIndex = parseInt(array[i]);
        if (!(isNaN(intIndex))){
            sum += intIndex;
        }
    }
    return sum;
}

function charEraser(string, char) { //Function 5
    char = convertToLower(char);
    let lowerString = convertToLower(string);
    let clippedString = "";
    for (var i = 0; i < string.length; i++) {
        if (char != lowerString.charAt(i)) {
            clippedString += string.charAt(i);
        }
    }
    return clippedString;
}

function stringAlternator(string1, string2) { //Function 6
    let finalString = "";
    let length = 0;
    if (string1.length > string2.length) {
        length = string1.length;
    } else {
        length = string2.length;
    }
    for (var i = 0; i < length; i++) {
        try {
            finalString += string1.charAt(i);
        } catch(error) {}
        try {
            finalString += string2.charAt(i);
        } catch(error) {}
    }
    return finalString;
}

function charReverser(string, char) { //Function 7
    let loweredString = convertToLower(string);
    let loweredChar = convertToLower(char);
    let reversedString = "";
    for (var i = 0; i < string.length; i++) {
        if ((loweredChar == loweredString.charAt(i)) && (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90)) {
            reversedString += convertToLower(string.charAt(i));
        } else if ((loweredChar == loweredString.charAt(i)) && (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122)) {
            reversedString += convertToUpper(string.charAt(i));
        } else {
            reversedString += string.charAt(i);
        }
    }
    return reversedString;
}

function whitespaceTrimmer(string) { //Function 8 ("\t" still equals "\t" when comparing, only becomes a tab when outputting)
    let startOfString = 0;
    let endOfString = string.length;
    let trimmedString = "";
    for (var i = 0; i < string.length; i++) {
        if (!((string.charAt(i) == " ") || (string.charAt(i) == "\t") || (string.charAt(i) == "\n"))) {
            startOfString = i;
            break;
        }
    }
    for (var i = string.length-1; i >= 0; i--) {
        if (!((string.charAt(i) == " ") || (string.charAt(i) == "\t") || (string.charAt(i) == "\n"))) {
            endOfString = i;
            break;
        }
    }
    for (var i = startOfString; i <= endOfString; i++) {
        trimmedString += string.charAt(i);
    }
    return trimmedString;
}

function lowASCIIConcatenator(string1, string2) { //Function 9
    let finalString = "";
    let ASCIISum1 = 0;
    let ASCIISum2 = 0;
    for (var i = 0; i < string1.length; i++) {
        ASCIISum1 += string1.charCodeAt(i);
    }
    for (var i = 0; i < string2.legth; i++) {
        ASCIISum2 += string2.charCodeAt(i);
    }
    if (ASCIISum1 < ASCIISum2) {
        return string1+string2;
    } else {
        return string2+string1;
    }
}

function isArrayBigger(array, int) {//Function 10
    for(var i = 0; i < array.length; i++) {
        if (array[i] > int) {
            return true;
        }
    }
    return false;
}