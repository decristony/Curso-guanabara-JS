/*array sintaxe*/
let num = [6, 7, 8, 4]
/*adiciona o numero 6 a posiçao 3 do array*/
num.sort()
/*adiciona o numero 8 a proxima posiçao do array*/
num.push(8)
/*veja os vetores no console*/
console.log(`nosso vetor é  ${num}`)
/*pega um valor isolado do vetor*/
console.log(`o valor da posiçao 0 do vetor é ${num[0]}`)
/*conta a quantidade de posiçoes que tem o array*/
console.log(`o vetor num possui ${num.length} posiçoes`)
/*coloca os vetores em ordem crescente*/
console.log(`a ordem crescente do vetor é ${num} `)
/*pesquisando se existe um valor em especifico dentro do array, PESQUISA UM VALOR
NAO A POSIÇAO*/
let cont = num.indexOf(5)

if (cont == -1) {
  console.log(`o valor nao foi encontrado`)
} else { console.log(`o valor 4 está na posiçao ${cont}`) }