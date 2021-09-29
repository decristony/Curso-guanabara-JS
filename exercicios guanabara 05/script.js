var num = document.getElementById('fnum').value
var lista = document.getElementById('flista')
var res = document.getElementById('resumo')
let valores = []


function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}
function adicionar() {
  if (isNumero(num) && !inLista(num, valores)) {
    valores.push(Number(num))
    let item = document.createElement('option')
    item.text = `valor ${num} adicionado`
    lista.appendChild(item)
  } else {
    alert('valor invalido ou ja consta na lista')
  }
}


