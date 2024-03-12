document.getElementById('convert-btn').addEventListener('click', function() {
    var numberInput = document.getElementById('number').value.trim();
    var outputElement = document.getElementById('output');
    var arabicNumeral = parseInt(numberInput);
    if (!numberInput) {
        outputElement.textContent = 'Please enter a valid number';
    } else if (arabicNumeral < 1) {
         
        outputElement.textContent = 'Please enter a number greater than or equal to 1';
        } else if(arabicNumeral > 3999){
            outputElement.textContent = "Please enter a number less than or equal to 3999";
        }else {
            outputElement.textContent =  convertToRoman(arabicNumeral);
        }
    
});

function convertToRoman(num) {
    var romanNumeral = '';
    var romanValues = [
        { numeral: 'M', value: 1000 },
        { numeral: 'CM', value: 900 },
        { numeral: 'D', value: 500 },
        { numeral: 'CD', value: 400 },
        { numeral: 'C', value: 100 },
        { numeral: 'XC', value: 90 },
        { numeral: 'L', value: 50 },
        { numeral: 'XL', value: 40 },
        { numeral: 'X', value: 10 },
        { numeral: 'IX', value: 9 },
        { numeral: 'V', value: 5 },
        { numeral: 'IV', value: 4 },
        { numeral: 'I', value: 1 }
    ];

    for (var i = 0; i < romanValues.length; i++) {
        while (num >= romanValues[i].value) {
            romanNumeral += romanValues[i].numeral;
            num -= romanValues[i].value;
        }
    }

    return romanNumeral;
}
