
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()

function testeHora() {

  hora = parseFloat(document.getElementById("Dh").value)
  console.log(hora)

}
function atualizarH() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var txt = document.getElementById('txt')
  var txt1 = document.getElementById('txt1')



  if (hora >= 0 && hora <= 12) {
    msg.innerHTML = `Bom dia agora são ${hora}:${minuto} horas`
    img.src = 'manha.jpg'
    txt.style.color = 'black'
    txt1.style.color = 'black'
    document.body.style.background = 'linear-gradient(90deg, rgba(204,246,255,1) 4%, rgba(122,230,255,1) 42%, rgba(140,212,255,1) 67%, rgba(102,164,252,1) 83%, rgba(5,89,172,1) 97%)'
    

  } else if (hora > 12 && hora < 18) {
    msg.innerHTML = `Boa tarde agora são ${hora}:${minuto} horas`
    img.src = 'tarde.jpg'
    txt.style.color = 'white'
    txt1.style.color = 'white'
    document.body.style.background = 'linear-gradient(90deg, rgba(198,154,20,0.9079831761806285) 3%, rgba(198,133,20,0.9079831761806285) 10%, rgba(184,97,47,1) 55%, rgba(252,54,54,1) 100%)'

  } else {
    msg.innerHTML = `Boa noite agora são ${hora}:${minuto} horas`
    img.src = 'noite.jpg'
    txt.style.color = 'white'
    txt1.style.color = 'white'
    document.body.style.background = 'linear-gradient(90deg, rgba(92,94,172,1) 4%, rgba(69,19,144,1) 45%, rgba(84,19,144,1) 82%, rgba(32,1,55,0.9079831761806285) 100%)'
  }

}







