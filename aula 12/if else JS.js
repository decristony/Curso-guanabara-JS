
/*pegando a hora atual do dia*/
var now = new Date()
var hora= now.getHours()

/*estrutura de condiçao*/
if(hora<12){
  console.log("bom dia")
}else if(hora<=18){
  console.log("boa tarde")
}else{
  console.log("boa noite")
}

console.log(`agora sao : ${hora} horas`)