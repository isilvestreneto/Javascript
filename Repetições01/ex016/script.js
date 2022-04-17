function contar() {
  var inicio = window.document.querySelector("input#txti");
  var fim = window.document.querySelector("input#txtf");
  var passo = window.document.querySelector("input#txtp");
  var res = document.querySelector("div#res");

  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    res.innerHTML = `Impossível contar, tente novamente`;
  } else {
    res.innerHTML = `Contando:`;
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    if (p <= 0) {
      window.alert("Passo inválido! Considerando passo = 1");
      p = 1;
    }

    if (i < f) {
      // Contagem crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} &#128073; `;
      }
    } else {
      // Contagem decrescente
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += ` ${c} &#128073;`;
      }
    }

    res.innerHTML += `&#127937;`;
  }
}
