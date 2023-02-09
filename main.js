//1 part

const input = document.querySelector('#text')
const reverse = document.querySelector('.reverse')

input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        let arr = []

        const rev = input.value.split('').reverse('').join('')
        arr.push(rev)
        arr.forEach((item) => {
            const div = document.createElement('div')
            div.innerHTML = item
            reverse.append(div)
        })
    }
})

//2 part 


let number = parseInt(prompt("Напишите положительное число"))

let sum = 0

for (let i = 1; i <= number; i++) {
    sum += i
}


console.log("Сумма всех чисел от 1 до" + number + "это"+ sum)

//3 part 

let a = 1

let summa = 0

while (a <= 99) {
    if(a % 2 !== 0) {
        summa += a 
    }
    a++
}

console.log (summa)

const days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскрнесенье']

for (let m = 0; m < days.length; m++) {
    if (m < 5) {
        console.log(days[m].toLocaleLowerCase());
    } else {
        console.log(days[m].toUpperCase())
    }
}