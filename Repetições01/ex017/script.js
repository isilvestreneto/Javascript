function tabuada() {
  var txtn = window.document.querySelector("input#txtn");
  var res = window.document.querySelector("div#res");
  var numero = Number(txtn.value);
  res.innerHTML = ``;

  if (txtn.value.length == 0) {
    window.alert("[ERRO] Insira um número!");
  } else {
    for (let c = 1; c <= 10; c++) {
      var produto = numero * c;
      res.innerHTML += `${numero} x ${c} = ${produto} <br>`;
    }
  }
}
