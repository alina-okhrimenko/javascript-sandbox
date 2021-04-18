var horizCount = +prompt("Введите желаемое количество символов для длины прямоугольника");
var vertCount = +prompt("Введите желаемое количество символов для высоты прямоугольника"); 

document.write('<br />')
for(i = 1; i <= vertCount; i++) {
    for(j = 1; j <= horizCount; j++) {
        if (i == 1 || j == 1 || i == vertCount || j == horizCount) {
            document.write('*')
        } else {
            document.write('&nbsp;')
        }
    }
    document.write('<br />')
}
