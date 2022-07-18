do {
    var num = +prompt('Введите число'); 
}while(num == 0 || isNaN(num));

let quest = +prompt('Введите степень для числа')

while(quest == 0 || isNaN(quest)) {
    quest = 2;
}

let answer = num ** quest

alert(answer)