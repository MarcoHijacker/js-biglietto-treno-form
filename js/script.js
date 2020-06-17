// Biglietteria Ferroviaria (Form edition) JS

// Dichiarazione Variabili Globali
var submitForm = document.getElementById('submitForm');
var voidForm = document.getElementById('voidForm');

// Da eseguire sul click del bottone Invia
submitForm.addEventListener("click", function () {
  // Area variabili
  var prezzoBiglietto;
  var prezzoKm = 0.21;
  var nome = document.getElementById('name').value;
  var kmToGo = document.getElementById('kmToGo').value;
  var fasciaEta = document.getElementById('fasciaEta').value;
  var minCarrozza = 1;
  var maxCarrozza = 10;
  var minTreno = 90000;
  var maxTreno = 100000;

  // Particolarizzazione dello sconto sulla base dell'option
  if (fasciaEta == "minorenne") {
    prezzoBiglietto = 0.8 * prezzoKm * kmToGo;
  } else if (fasciaEta == "over65") {
    prezzoBiglietto = 0.6 * prezzoKm * kmToGo;
  } else {
    prezzoBiglietto = prezzoKm * kmToGo;
  }

  // Generazione casuale di numero carrozza e numero treno
  var carrozza = Math.floor(Math.random()*(maxCarrozza - minCarrozza + 1)) + minCarrozza;
  var treno = Math.floor(Math.random()*(maxTreno - minTreno + 1)) + minTreno;

  // Stampo nella tabella i dettagli del biglietto
  document.getElementById('ticketPasseggero').innerHTML = nome;
  document.getElementById('ticketTreno').innerHTML = treno;
  document.getElementById('ticketCarrozza').innerHTML = carrozza;
  document.getElementById('ticketPrezzo').innerHTML = prezzoBiglietto + " Euro";
  document.getElementById('ticketEta').innerHTML = fasciaEta;

  // Visualizzo la tabella solo dopo il click sul bottone Invia
  document.getElementById('ticketTable').classList.remove("hidden");
  document.getElementById('ticketTable').classList.add("show");

})

// Il bottone Annulla inizializza i campi compilati e fa sparire la tabella
voidForm.addEventListener("click", function () {
  document.getElementById('ticketTable').classList.remove("show");
  document.getElementById('ticketTable').classList.add("hidden");

  document.getElementById('name').value = "";
  document.getElementById('kmToGo').value = "";
  document.getElementById('fasciaEta').value = "maggiorenne";
})
