/* num.length --- posições
num.sort() --- ordenação crescente dos valores
num.push(1) --- acrescenta valor
num.indexOf(7) --- procura valor
*/

let  num = [5, 8, 2, 9, 3, 1]
num.sort()

/* console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]} `)  */

  /* for(let pos=0; pos < num.length; pos++){
    console.log(`a posição ${pos} tem  valor ${num[pos]}`)
} 

------------------------------*/

for(let pos in num){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}





