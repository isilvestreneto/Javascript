function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = window.document.getElementById("txtano");
  var res = document.querySelector("div#res");
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 5) {
        img.setAttribute("src", "_images/baby-m.png");
      } else if (idade < 13) {
        img.setAttribute("src", "_images/child-m.png");
      } else if (idade < 35) {
        img.setAttribute("src", "_images/young-m.png");
      } else if (idade < 50) {
        img.setAttribute("src", "_images/adult-m.png");
      } else {
        img.setAttribute("src", "_images/old-m.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 5) {
        img.setAttribute("src", "_images/baby-f.png");
      } else if (idade < 13) {
        img.setAttribute("src", "_images/child-f.png");
      } else if (idade < 35) {
        img.setAttribute("src", "_images/young-f.png");
      } else if (idade < 50) {
        img.setAttribute("src", "_images/adult-f.png");
      } else {
        img.setAttribute("src", "_images/old-f.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} e ${idade} anos. <br>`;
    res.appendChild(img);
  }
}
