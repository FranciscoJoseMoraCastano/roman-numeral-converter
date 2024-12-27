function convertRoman() {
    const num = parseInt(document.getElementById('number').value, 10);
    if (!num) { // Si el valor está vacío
        document.getElementById('output').innerText = "Please enter a valid number";
        return;
    } else if (num < 0) { // Si el número es negativo
      document.getElementById('output').innerText = "Please enter a number greater than or equal to 1";
      return
    } else if (num >= 4000) { // Si el número es igual o mayor a 4000
      document.getElementById('output').innerText = "Please enter a number less than or equal to 3999";
      return
    }
    const result = convertToRoman(num);
    document.getElementById('output').innerText = `${result}`;
}
// 2. Roman Number Converter
function convertToRoman(num) {
    const romanNums = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ]; // Array de objetos con los símbolos
    let result = ''; // Resultado en números romanos
    for (let i = 0; i < romanNums.length; i++) {
        while (num >= romanNums[i].value) { // Si el valor cabe en el número
            result += romanNums[i].symbol; // Añadimos el símbolo al resultado
            num -= romanNums[i].value; // Restamos el valor del número
        }
    }
    return result;
}