function verifica() {
  var data = new Date
  var ano = data.getFullYear()
  var Fano = document.getElementById('ano')
  var res = document.querySelector('div#res')

  //criando uma imagem com js e setando valores
  var img = document.createElement('img')
  img.setAttribute('id', 'foto')

  //verifica se o ano é valido
  if (Fano.value.length == 0 || Number(Fano.value) > ano) {
    alert('[ERRO] verifique os dados e tente novamente')
  } else {
    // se o ano for valido calcula a idade
    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(Fano.value)
    //setta o genero de acordo com o radio button e faz verificaçoes de idade para cada genero
    var genero = ''
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 12) {
        // setta uma imagem e passa como parametro o nome e o src criança
        img.setAttribute('src', 'criança-M.jpg')
      
      } else if (idade < 21) {
        //// setta uma imagem e passa como parametro o nome e o src jovem
        img.setAttribute('src', 'jovem-M.jpg')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'Adulto-M.jpg')
      } else {
        //idoso
        img.setAttribute('src', 'idoso-M.jpg')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade <= 12) {
        img.setAttribute('src', 'criança-F.jpg')
      } else if (idade < 21) {
        img.setAttribute('src', 'jovem-F.jpg')
      } else if (idade <= 50) {
        img.setAttribute('src', 'adulto-f.jpg')
      } else {
        img.setAttribute('src', 'idoso-F.jpg')
      }
    }
    //centraliza os elementos do resultado
    res.style.textAlign='center'
    res.innerHTML = `Detectamos ${genero} com a idade de ${idade} anos`
    
    //adiciona um elemento a baixo do tipo img
    res.appendChild(img)
  }
}