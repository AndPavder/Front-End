var str = prompt("Введите строку");
var strReversed = ""; // строка в обратном порядке

str = str.replace(/\s+/g, " ").trim()//все повторяющиеся пробелы на пробел, trim убирает в конце и в начале пробелы

for (i = str.length-1; i >= 0; i--){
    strReversed += str[i];
}

alert(strReversed);