// ==> Variáveis [type Annotations]
let nome: string = 'Cleiton Mariano'
console.log(nome)

// ==> Arrays [type Annotations]
let animais: string[] = ['Elephant', 'panda', 'Dog', 'Girafa']
console.log(animais[1])

// ==> Object [type Annotations]
let car: {
  name: string,
  year: number,
  price: number
}

car = {name: 'SpaceFox', year: 2014, price: 40000}
console.log(car)

// ==> Object [type Annotations]
function multiplicarnumeros(num1: number, num2: number) {
  return num1 * num2
}

console.log(multiplicarnumeros(2,5))

function addNumber(num1: number, num2: number) {
  return num1 + num2
}

console.log(addNumber(2,4))