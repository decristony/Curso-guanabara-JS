
/*percurso para exibiçao da lista*/
/*let list=[1,2,7,4,5,8]

for(var cont=[0]; cont<list.length; cont++){

  console.log(`a posiçao ${cont} poussi o numero ${list[cont]}`)
  
}*/

/*forma simplificada ecs6*/
let list = [1, 2, 7, 4, 5, 8]
/**/
for (let cont in list) {
  console.log(`a posiçao ${cont} possui o valor ${list[cont]}`)
}
console.log('e a lista em ordem crescente é')
for (let cont in list) {
  list.sort()
  console.log(`a posiçao ${cont} possui o valor ${list[cont]}`)
}
