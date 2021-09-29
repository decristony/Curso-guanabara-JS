

function tabuada() {
  var numero = document.getElementById('primeiro')
  var res = document.getElementById('select')
  var contando = document.getElementById('res')
  var n = Number(numero.value)



  if (numero.value.length == 0) {
    alert('por favor digite um numero')
  } else {

    res.innerHTML = ""
    contando.innerHTML = `tabuada de ${n} gerada com sucesso`

    for (var c = 1; c <= 10; c++) {

      var r = n * c
      console.log(r)
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${r}`
      item.value = `tab ${c}`
      //adiciona um elemento filho 
      res.appendChild(item)

    }

  }
}


