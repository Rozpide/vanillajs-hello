var quien = ("El gato ", "Mi perro ", "Tu loro ", "Mi caballo ");
var verbo = (" se comio ", "se llevo ", "me escondio ", "a roto ");
var que = ("mis ejercicios ", "mi pantalon ", "las flores ", "tu comida ");
var como =
  ("mientras dormia ",
  "cuando paseaba",
  "cuando leia un libro",
  "al salir de casa");
function generarUnaExcusa() {
  var quienIndex = Math.floor(Math.random() * length.quien);
  var verboIndex = Math.floor(Math.random() * length.verbo);
  var queIndex = Math.floor(Math.random() * length.que);
  var comoIndex = Math.floor(Math.random() * length.como);

  let excusa =
    quien[quienIndex] + verbo[verboIndex] + que[queIndex] + como[comoIndex];

  document.getElementById("excusa").innerHTML = excusa;
}
