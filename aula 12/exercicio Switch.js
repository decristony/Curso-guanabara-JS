
/*Traz dia da semana real*/
var now = new Date()
var diaSem = now.getDay()


switch (diaSem) {
  case 0:
    console.log("Hoje é domingo")
    break /*break obrigatorio para parar o switch e nao executar tudo*/
  case 1:
    console.log("Hoje é Segunda")
    break
  case 2:
    console.log("Hoje é terça")
    break
  case 3:
    console.log("Hoje é quarta")
    break
  case 4:
    console.log("Hoje é quinta")
    break
  case 5:
    console.log("Hoje é sexta")
    break
  case 6:
    console.log("Hoje é sabado")
    break
}