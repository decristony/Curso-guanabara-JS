

function contar() {
  var inicio = document.getElementById('primeiro');
  var fim = document.getElementById('segundo');
  var passo = document.getElementById('terceiro');
  var res = document.getElementById('res');


  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    alert(`[ERROR] \u{26A0} Faltam dados revise e tente novamente `)
  } else if (inicio.value < fim.value) {
    res.innerHTML = "Contando..."
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    for (var c = i; c <= f; c += p) {
      res.innerHTML += ` ${c} \u{1F449}`}
  } else {
    res.innerHTML = "Contando..."
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)


    for (var c = i; c >= f; c -= p) {
      res.innerHTML += `  ${c} \u{1F449}`


    }
    res.innerHTML += ` \u{1F6A9}`

  }
}



