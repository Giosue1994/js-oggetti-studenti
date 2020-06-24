$(document).ready(function() {

//   - Creare un oggetto che descriva uno studente con le
//     seguenti proprietà: nome, cognome e età. Stampare a
//     schermo attraverso il for in tutte le proprietà.
//   - Creare un array di oggetti di studenti. Ciclare su tutti gli
//     studenti e stampare per ognuno nome e cognome
//   - Dare la possibilità all’utente attraverso 3 prompt di
//     aggiungere un nuovo oggetto studente inserendo
//     nell’ordine: nome, cognome e età.

var studente = {
  "nome": "Gianfilibero",
  "cognome": "Carciofo",
  "eta": 76
}

var studenti = [
  {
    "nome": "Camilla",
    "cognome": "Banana",
    "eta": 25
  },
  {
    "nome": "Benito",
    "cognome": "Mussolini",
    "eta": 64
  },
  {
    "nome": "Salvatore",
    "cognome": "Bombaamano",
    "eta": 46
  }
]

for (var key in studente) {
  console.log(studente[key]);
}

for (var i = 0; i < studenti.length; i++) {
  var dettagliStudente = studenti[i];

  for (var key2 in dettagliStudente) {
    console.log(dettagliStudente[key2]);
    
  }
}

// var inserisciNome = prompt('Inserisci il tuo nome');
// var inserisciCognome = prompt('Inserisci il tuo cognome');
// var inserisciEta = prompt('Inserisci la tua età');

});
