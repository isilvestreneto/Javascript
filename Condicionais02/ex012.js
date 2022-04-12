var agora = new Date();
var hora = agora.getHours();
console.log(`Agora são ${hora}h.`);
if (hora > 6 && hora < 13) {
  console.log(`É de manhã`);
} else if (hora >= 13 && hora <= 18) {
  console.log("É à tarde.");
} else {
  console.log("É à noite.");
}
