//Exercío 1

(!true) //false
(!false) //true
(!!false) //false
(!!true) //true
(!1) //false
(!!1) //true
(!0)  //true
(!!0) //false
(!!"") //false


let x = 5 ;
let y = 9;
(x < 10 && x!==5) //false
(x>9 || x===5) //false
(!(x===y)) //false

//Exercício2

let x = 10
let y = "a"
(y==="b" || x >= 10) //true

let x = 3
let y = 8
(!(x == "3" || x === y) && !(y !== 8 && x <= y)) //true

let str = ""
let msg = "haha!"
let eBonito = "false"
(!((str || msg) && eBonito)) //false

