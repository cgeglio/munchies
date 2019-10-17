//Iteration 1
// When the user hits `Add Snack`, a card is created that has the munchie name and the description.

//Iteration 2
// Edit the HTML of the dynamic snack cards to include a DELETE button. When the user clicks the DELETE button, that specific CARD is removed from the DOM

//Iteration 3
//User can edit the name of the snack OR its description by clicking on the particular field on the CARD!

//Iteration 4
// If there is no text in the item field OR the info field, the Add Snack button should be disabled


var addSnackBtn = document.getElementById('add-btn')
var snackName = document.getElementById('snack-name')
var snackInfo = document.getElementById('snack-desc')
// var cardColors = ['red', 'blue', 'green', 'yellow', 'orange']
// var newSnack = document.querySelector('new');

var clickSection = document.querySelector('body')

clickSection.addEventListener('click', function(event) {
  event.preventDefault();
  if (snackName.value === "" || snackInfo.value === "") {
    // addSnackBtn.disabled = true;
    return;
  }
  if (event.target.className === 'add-btn') {
	createCard();
  }
  if (event.target.className === 'delete') {
    // event.target.parentNode.parentNode.remove();
    deleteCard();

    // event.target.parentNode.remove();
  }
  if (event.target.classList.contains('new-card')) {
    // event.target.parentNode.parentNode.remove();
    changeColor();

  // if (event.target.className === )
}
})

// addSnackBtn.addEventListener('click', createCard)
// deleteSnackBtn.addEventListener('click', deleteCard)
// var deleteSnackBtn = document.querySelector('delete');

function createCard (e) {
	event.preventDefault();
  var newCard = document.createElement('div');
	newCard.className = "new-card";
	document.getElementsByTagName("section")[0].appendChild(newCard);
	newCard.innerHTML+= `
    <div class="new">
     <input class='cardText' placeholder='${snackName.value}'></input>
     <input class='cardText' placeholder='${snackInfo.value}'></input>
     <button class='delete'>Delete</button>
    </div>`;
  };

  function deleteCard (e) {
    event.preventDefault();
    event.target.parentNode.parentNode.remove();
  }


  function changeColor() {
      var x = Math.floor(Math.random() * 256);
      var y = Math.floor(Math.random() * 256);
      var z = Math.floor(Math.random() * 256);
      var newColor = "rgb(" + x + "," + y + "," + z + ")";
      // console.log(newColor);
      event.target.style.background = newColor;
      // document.body.style.background = newColor;
      }

  // changeColor();

// function changeColor (e) {
//   event.preventDefault();
//   var color = cardColors[Math.floor(Math.random() * cardColors.length)];
//   // if event.target.classList.contains('.new-card') {
//     document.querySelector('new-card').style.backgroundcolor = color;}





//Iteration 5
// When a user clicks the card, it will randomly select a new background color for the card
