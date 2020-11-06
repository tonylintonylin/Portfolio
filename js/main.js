// Get the modal
var modal = document.getElementsByClassName("myModal")[0];

// Get the button that opens the modal
var btn = document.getElementsByClassName("modalBtn")[0];
var close = document.getElementsByClassName("closeBtn")[0];

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var btnClose = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

btnClose.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// -----------Coding Challenges Modals----------- //

// Get the modal
var palindromemodal = document.getElementsByClassName("myModal")[0];

// Get the button that opens the modal
var palindromebtn = document.getElementsByClassName("modalBtn")[0];
var palindromeclose = document.getElementsByClassName("closeBtn")[0];

// Get the image that opens the first palindrome modal
var palindromeIMG = document.getElementsByClassName("modalIMG")[0];

// Get the <span> element that closes the modal
var palindromespan = document.getElementsByClassName("close")[0];
var palindromebtnClose = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
palindromebtn.onclick = function() {
    palindromemodal.style.display = "block";
}

palindromeclose.onclick = function() {
    palindromemodal.style.display = "none";
}

// When the user clicks images in the coding challenges section, show code
palindromeIMG.onclick = function() {
    palindromemodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
palindromespan.onclick = function() {
    palindromemodal.style.display = "none";
}

palindromebtnClose.onclick = function() {
    palindromemodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == palindromemodal)
        palindromemodal.style.display = "none";
    if (event.target == fizzbuzzmodal)
        fizzbuzzmodal.style.display = "none";
    if (event.target == factorialsmodal)
        factorialsmodal.style.display = "none";
    if (event.target == romannumeralsmodal)
        romannumeralsmodal.style.display = "none";
}

// -----------Coding Challenges Modals----------- //

// Get the modal
var fizzbuzzmodal = document.getElementsByClassName("myModal")[1];

// Get the button that opens the modal
var fizzbuzzbtn = document.getElementsByClassName("modalBtn")[1];
var fizzbuzzclose = document.getElementsByClassName("closeBtn")[1];

// Get the image that opens the first palindrome modal
var fizzbuzzIMG = document.getElementsByClassName("modalIMG")[1];

// Get the <span> element that closes the modal
var fizzbuzzspan = document.getElementsByClassName("close")[1];
var fizzbuzzbtnClose = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
fizzbuzzbtn.onclick = function() {
    fizzbuzzmodal.style.display = "block";
}

fizzbuzzclose.onclick = function() {
    fizzbuzzmodal.style.display = "none";
}

// When the user clicks images in the coding challenges section, show code
fizzbuzzIMG.onclick = function() {
    fizzbuzzmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
fizzbuzzspan.onclick = function() {
    fizzbuzzmodal.style.display = "none";
}

fizzbuzzbtnClose.onclick = function() {
    fizzbuzzmodal.style.display = "none";
}

// Get the modal
var factorialsmodal = document.getElementsByClassName("myModal")[2];

// Get the button that opens the modal
var factorialsbtn = document.getElementsByClassName("modalBtn")[2];
var factorialsclose = document.getElementsByClassName("closeBtn")[2];

// Get the image that opens the first palindrome modal
var factorialsIMG = document.getElementsByClassName("modalIMG")[2];

// Get the <span> element that closes the modal
var factorialsspan = document.getElementsByClassName("close")[2];
var factorialsbtnClose = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
factorialsbtn.onclick = function() {
    factorialsmodal.style.display = "block";
}

factorialsclose.onclick = function() {
    factorialsmodal.style.display = "none";
}

// When the user clicks images in the coding challenges section, show code
factorialsIMG.onclick = function() {
    factorialsmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
factorialsspan.onclick = function() {
    factorialsmodal.style.display = "none";
}

factorialsbtnClose.onclick = function() {
    factorialsmodal.style.display = "none";
}


// Get the modal
var romannumeralsmodal = document.getElementsByClassName("myModal")[3];

// Get the button that opens the modal
var romannumeralsbtn = document.getElementsByClassName("modalBtn")[3];
var romannumeralsclose = document.getElementsByClassName("closeBtn")[3];

// Get the image that opens the first palindrome modal
var romannumeralsIMG = document.getElementsByClassName("modalIMG")[3];

// Get the <span> element that closes the modal
var romannumeralsspan = document.getElementsByClassName("close")[3];
var romannumeralsbtnClose = document.getElementsByClassName("close")[3];

// When the user clicks on the button, open the modal
romannumeralsbtn.onclick = function() {
    romannumeralsmodal.style.display = "block";
}

romannumeralsclose.onclick = function() {
    romannumeralsmodal.style.display = "none";
}

// When the user clicks images in the coding challenges section, show code
romannumeralsIMG.onclick = function() {
    romannumeralsmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
romannumeralsspan.onclick = function() {
    romannumeralsmodal.style.display = "none";
}

romannumeralsbtnClose.onclick = function() {
    romannumeralsmodal.style.display = "none";
}

// -----------Coding Challenges Functions----------- //

// Solving this problem by comparing the input with the input's reversed version

function PalindromeFunction(input, result) {

    // Alert empty input
    if (input == "") {
        alert("Please enter some text! \nThis could be a word, phrase, or number.");
        return;
    }

    // Case insensitive
    var str = input.toLowerCase();

    // Ensure no spaces
    str = input.replace(/ /g, "");

    var reversed = "";

    var length = str.length - 1;

    for (i = length; i >= 0; i--) {
        reversed += str[i];
    }

    var output = "";

    if (str === reversed) {
        output = input + " and " + reversed + " are palindromes!"
    } else {
        output = input + " and " + reversed + " are not palindromes!"
    }

    result.innerHTML = output;
}

function FizzBuzzFunction(num1, num2) {

    var alertOutput = "";

    // Ensure both inputs are between 1 and 100
    if (num1 > 100 || num1 < 1 || num2 > 100 || num2 < 1) {
        alert("Please enter numbers between 1 and 100.");
        return;
    }

    for (i = 1; i < 101; i++) {
        if ((i % num1 === 0) && (i % num2 === 0)) alertOutput += "FizzBuzz ";
        else if ((i % num1 == 0)) alertOutput += "Fizz ";
        else if ((i % num2 == 0)) alertOutput += "Buzz ";
        else alertOutput += i + " ";
    }

    alert(alertOutput);
}

function FactorialFunction(input, result) {

    var factorial = 1;

    if (input < 0) {
        alert("Please enter a non-negative number.");
        return;
    }

    for (i = input; i > 0; i--) {
        factorial = factorial * i;
    }

    result.innerHTML = input + "! = " + factorial;
}

function RomanNumeralsFunction(num, toRomanNumResult, romanNum, toNumResult) {

    // Hold dictionary values to use Roman Numerals
    var RomanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }

    // Number to Roman Numeral 
    // Ensure Number input is valid, can be empty, and cap at 10000
    if (num < 1 && num != "" || num > 10000) {
        alert("Please enter a number from 1-10000! \nThere are no negative Roman Numerals, nor is there a Roman Numeral for zero.");
        return;
    }

    let toRomanNumOutput = "";

    for (let i in RomanNumerals) {

        // Loop through the list of Roman Numerals ordered from greatest to least
        while (num >= RomanNumerals[i]) {
            num -= RomanNumerals[i]
            toRomanNumOutput += i
        }
    }

    toRomanNumResult.innerHTML = toRomanNumOutput;

    // Roman Numeral to Number
    let toNumOutput = 0;

    roman = romanNum.toUpperCase();

    for (let i = 0; i < roman.length; i++) {

        switch (roman[i]) {

            case 'M':
                toNumOutput += 1000;
                break;
            case 'D':
                toNumOutput += 500;
                break;
            case 'C':
                if (roman.length > (i + 1) && roman[i + 1] == 'M') {
                    toNumOutput += 900;
                    i++;
                    break;
                } else if (roman.length > (i + 1) && roman[i + 1] == 'D') {
                    toNumOutput += 400;
                    i++;
                    break;
                } else {
                    toNumOutput += 100;
                    break;
                }
            case 'L':
                toNumOutput += 50;
                break;
            case 'X':
                if (roman.length > (i + 1) && roman[i + 1] == 'C') {
                    toNumOutput += 90;
                    i++;
                    break;
                } else if (roman.length > (i + 1) && roman[i + 1] == 'L') {
                    toNumOutput += 40;
                    i++;
                    break;
                } else {
                    toNumOutput += 10;
                    break;
                }
            case 'V':
                toNumOutput += 5;
                break;
            case 'I':
                if (roman.length > (i + 1) && roman[i + 1] == 'X') {
                    toNumOutput += 9;
                    i++;
                    break;
                } else if (roman.length > (i + 1) && roman[i + 1] == 'V') {
                    toNumOutput += 4;
                    i++;
                    break;
                } else {
                    toNumOutput += 1;
                    break;
                }
            default:
                return false;
        }
    }
    toNumResult.innerHTML = toNumOutput;
}