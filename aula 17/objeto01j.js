let amigo = {
  nome: 'joao',
  idade: 22,
  peso: 50,
  sexo: 'masculino',
  emagreceu(p = 0) { console.log('emagreceu'); this.peso -= p },
  engordou(p = 0) { console.log('engordou'); this.peso += p }
}

amigo.engordou(10)
amigo.emagreceu(10)
console.log(`${amigo.nome} pesa atualmente ${amigo.peso}kg`)