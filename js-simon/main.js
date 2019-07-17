// Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire un prompt alla volta i numeri
//  che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e
// quali dei numeri da indovinare sono stati individuati;

// definisco le variabili
var casualNum = [];//array dei numeri
var tempNum;//variabile di appoggio per la generazione dei numeri causali
var numIns = [];
var azzeccati =[];
// var provarr;
// function generatore(){
//   for (var i = 0; i < 5; i++) {//ciclo for per la generazione dei numeri
//     tempNum = Math.floor(Math.random() * 100 +1);
//      console.log(tempNum);
//      casualNum.push(tempNum);//aggiungo i numeri all'array casualNum
// }
//
// }
// console.log(generatore());
 // casualNum = provarr.split("");
for (var i = 0; i < 5; i++) {//ciclo for per la generazione dei numeri
  tempNum = Math.floor(Math.random() * 100 +1);
  console.log(tempNum);
  casualNum.push(tempNum);//aggiungo i numeri all'array casualNum
}
// var provarr = casualNum.split("");

console.log(casualNum);
//alert per la visualizzazione dei numeri da memorizzare
alert("memorizza i numeri e premi ok: " + casualNum);

setTimeout(attesa, 3000);
function attesa() {
  for (var i = 0; i < 5; i++) {
    var numinstemp = parseInt(prompt("inserisci un numero e premi ok"));
    numIns.push(numinstemp);
  }
}
  // provarr = numIns.map();
  // console.log("senza apici", provarr);
  casualNum.sort();
  numIns.sort();
  console.log(casualNum, numIns);
  for (var i = 0; i < numIns.length; i++) {


  if (casualNum.includes(numIns[i]) == true) {
    azzeccati.push(numIns[i]);

  }else {
    console.log("non sono uguali");
  }
}
console.log("hai azzeccato", azzeccati);
