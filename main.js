var textArea = document.querySelector('.areaDoTexto')
textArea.textContent = ''

//Função Criptografar
function criptografar() {
  var textoPrincipal = document.querySelector('#text1').value
  var cripto = { e: 'enter', i: 'imes', a: 'ai', o: 'ober', u: 'ufat' }

  resultado = textoPrincipal.replace(/[eiaou]/g, m => cripto[m])
  textArea.textContent = resultado.toLowerCase()
}
const criptografada = function(checar){
  const regex = /enter|imes|ai|ober|ufa/g;
  const result = checar.value.match(regex)
  return true
}

//Função Descriptografar
function descriptografar() {
  var textoPrincipal = document.querySelector('#text1').value
  String.prototype.allReplace = function (obj) {
    var retStr = this
    for (var x in obj) {
      retStr = retStr.replace(new RegExp(x, 'g'), obj[x])
    }
    return retStr
  }
  resultado = textoPrincipal.allReplace({
    enter: 'e',
    imes: 'i',
    ai: 'a',
    ober: 'o',
    ufat: 'u'
  })
  textArea.textContent = resultado.toLowerCase()
}

//Função Limpar Texto
document.getElementById('limpar').addEventListener('click', function () {
  clearInputUrlNumberText('entrada')
})

function clearInputUrlNumberText(name) {
  var entradas = document.querySelectorAll("input[name='" + name + "']")
  ;[].map.call(entradas, entrada => (entrada.value = ''))
  textArea.textContent = ''
}

//Função Copiar
var textInput = document.getElementById('areaTexto')
var copyButton = document.getElementById('copiar')

copyButton.addEventListener('click', () => {
  textInput.select()
  document.execCommand('copy')
})
