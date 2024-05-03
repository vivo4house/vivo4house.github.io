function openVideoModal() {
    document.getElementById("modalReceip").style.display = "block";
  }
  
  function closeVideoModal() {
    document.getElementById("modalReceip").style.display = "none";
  }



// --------------------------------------------------------------------
// Fonction de selection à partir d'une chaine de caractaire
// --------------------------------------------------------------------
function filterSelectionFromString(input) {
 
    // Prendre la liste des cartes 
    const cardContainer = document.getElementById("liste_videos");
   
    // Tableau des div (HTML) contenant les cards
    const cards = cardContainer.getElementsByTagName('article')

    // Parcourir toutes les cards 
    for (let i=0;i<cards.length;i++) {

        // Cherche dans le titre de la carte
        //let title = cards[i].querySelector("h2");
        
      
       
        // indexOf : cherche l'index de l'occurance de la chaine 
        if (cards[i].innerText.toUpperCase().indexOf(input) > -1 ) {
            cards[i].style.display = "";
        }
        else {
            cards[i].style.display ="none";
           // cards[i].style.visibility  = "collapse";
        }
    }
}


// --------------------------------------------------------------------
// Fonction de selection à partir de la barre de recherche
// --------------------------------------------------------------------

function searchSelection() {

    // Prendre la valeur du champs de recherche
    const inputRaw = document.getElementById("filter").value;

    // Tout mettre en majuscule
    const input = inputRaw.toUpperCase();

    filterSelectionFromString(input);
};





// --------------------------------------------------------------------
// Fonction de selection à partir d'un bouton
// --------------------------------------------------------------------
function buttonFilterSelection() {
      const input = "DO";
      filterSelectionFromString(input);
}





// --------------------------------------------------------------------
// Fonction de réaffichage de toutes les cartes
// --------------------------------------------------------------------
function showAllCards() {
 
      // Prendre la liste des cartes 
      const cardContainer = document.getElementById("liste_videos");
     
      // Tableau des div (HTML) contenant les cards
      const cards = cardContainer.getElementsByTagName('article')
  
      // Parcourir toutes les cards 
      for (let i=0;i<cards.length;i++) {
  
          // Cherche dans le titre de la carte
          let title = cards[i].querySelector("h2");
  {
              cards[i].style.display = "";
     
          }
   
      }
}


// Recupérer le bon switch 
var checkbox = document.getElementById('flexSwitchCheckChecked');

function checker(checked) {
    if (checked) {
        showAllCards();
    }
    else {
        filterSelectionFromString("TA5");
    }
  }

// Ajouter l'évènement du switch à la fonction javascript  
checkbox.addEventListener('change', function () { checker(this.checked) })



