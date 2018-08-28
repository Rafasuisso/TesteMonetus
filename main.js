var empresaF = { sigla: "fb", nome: "facebook", valor: "1250" };
var empresaA = { sigla: "appl", nome: "Aplle", valor: "1559" };
const BASE_URL = "https://api.iextrading.com/1.0/stock/";

var quote;
var entreprise;
var icone;

function mudar() {
  if (document.dados.imp.value == "fb") {
    document.getElementById("simb").innerHTML = empresaF.sigla;
    document.getElementById("nam").innerHTML = empresaF.nome;
    document.getElementById("lp").innerHTML = empresaF.valor;
  } else if (document.dados.imp.value == "appl") {
    document.getElementById("simb").innerHTML = empresaA.sigla;
    document.getElementById("nam").innerHTML = empresaA.nome;
    document.getElementById("lp").innerHTML = empresaA.valor;
  } else {
    window.alert("Valor invalido");
  }
}

function mudar2() {
  icone = document.dados.imp.value;
  console.log(icone);
  BASE_URL.concat(icone);
  console.log(BASE_URL);
}

var d = document;
function processar(idTabela) {
  var newRow = d.createElement("tr");
  icone = document.dados.imp.value;
  console.log(icone);
  var url = BASE_URL.concat(icone, "/quote");
  console.log(url);
  fetch(url)
    .then(function(response) {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );

        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        newRow.insertCell(0).innerHTML = data.symbol;
        newRow.insertCell(1).innerHTML = data.companyName;
        newRow.insertCell(2).innerHTML = data.latestPrice;
        newRow.insertCell(3).innerHTML = data.sector;
      });
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });

  d.getElementById(idTabela).appendChild(newRow);
  return false;
}
