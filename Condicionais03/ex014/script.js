function carregar() {
  var msg = window.document.getElementById("msg");

  var img = window.document.getElementById("imagem");

  var data = new Date();
  var hora = data.getHours();
  msg.innerHTML = `<h2>Agora são ${hora} horas</h2>`;

  if (hora >= 5 && hora < 12) {
    img.src = "_images/morning.png";
    document.body.style.background = "#fffbf8";
  } else if (hora >= 12 && hora < 18) {
    img.src = "_images/afternoon.png";
    document.body.style.background = "#9c3312";
  } else {
    img.src = "_images/night.png";
    document.body.style.background = "#143852";
  }
}
