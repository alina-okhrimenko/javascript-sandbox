
function doMath(x, y, znak) {
    switch (znak) {
    case "+":
        return x + y;
    case "-":
        return x - y;
    case "*":
        return x * y;
    case "%":
        return x * (y / 100);
    case "^":
    if (y < 1) {
        return(`Невозможно возвести в cтепень ${y}, пожалуйста, используйте натуральное число`);
        } else {
        return(Math.pow(x, y));
        }
    case "/":
    if (y !== 0) {
          return x / y;
        } else {
          return "не делится на нуль";
        }
    }
  }

let a = +prompt("а?", 'Введите число а');
let b = +prompt("b?", 'Введите число b');
let method = prompt('Введите одну из математических операций, которую желаете выполнить. Знак может быть: `+, -, *, /, %, ^`.')

document.write(doMath(a, b, method));

