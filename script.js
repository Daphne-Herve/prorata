function calculer() {
  let salaireA = document.getElementById('salaireA').value;
  let salaireB = document.getElementById('salaireB').value;
  let loyer = document.getElementById('loyer').value;
  let totalSalaire = parseInt(salaireA) + parseInt(salaireB);
  let montant1 = parseInt(salaireA) * parseInt(loyer);
  let prorata = montant1 / totalSalaire;
  let montant2 = loyer - prorata;
  document.getElementById('item1').innerHTML = prorata;
  document.getElementById('item2').innerHTML = montant2;
}
