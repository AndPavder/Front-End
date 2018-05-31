var str = prompt("Введите строку");

function lastSymbol(str){
  console.log(str.slice (-1));
}

function withoutLast(str){
  var line = str.substring(0, str.length - 1);
  console.log(line);
}

function reversed(str){
  var strReversed = ""; // строка в обратном порядке
    
  for (i = str.length-1; i >= 0; i--){
    strReversed += str[i];
  }

  console.log(strReversed);
}

function deleteSpaces(str){
    str = str.replace(/\s+/g, " ").trim();
    console.log(str);
}

lastSymbol(str);
withoutLast(str);
reversed(str);
deleteSpaces(str);