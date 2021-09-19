// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let heartsNodeArray = [...document.getElementsByClassName("like-glyph")];
let modal = document.getElementById('modal');
let modalParagraph = document.getElementById('modal-message');
let click1 = 0;
let click2 = 0;
let click3 = 0;
let click4 = 0;
let click5 = 0;

let callServerAndCatch = (event) => {
  mimicServerCall()
  .then(() => handleResponse(event))
  .catch(error => handleError(error))
}

let handleError = (errorMessage) => {
  modal.classList.remove('hidden')
  modalParagraph.innerText = errorMessage
  setTimeout(() => { 
    modal.classList.add('hidden')
    modalParagraph.innerText = ""
  }, 3000);
}

let handleResponse = (event) => {
  if (event.target.textContent === EMPTY_HEART){
    event.target.classList.add('activated-heart');
    event.target.textContent = FULL_HEART;
    if (event.target.parentNode.parentNode.parentNode.parentNode.id === '201811189'){
      click1 += 1
      document.getElementById('art1').innerText = click1;
     // handleCounter('art1')
    }
    if (event.target.parentNode.parentNode.parentNode.parentNode.id === '201811190'){
      click2 += 1
      document.getElementById('art2').innerText = click2;
      //handleCounter('art2')
    }
    if (event.target.parentNode.parentNode.parentNode.parentNode.id === '201811191'){
      click3 += 1
      document.getElementById('art3').innerText = click3;
      //handleCounter('art3')
    }
    if (event.target.parentNode.parentNode.parentNode.parentNode.id === '201811192'){
      click4 += 1
      document.getElementById('art4').innerText = click4;
     // handleCounter('art4')

    }
    if (event.target.parentNode.parentNode.parentNode.parentNode.id === '201811193'){
      click5 += 1
      document.getElementById('art5').innerText = click5;
      //handleCounter('art5')
    }
  }
  else {
    event.target.classList.remove('activated-heart');
    event.target.textContent = EMPTY_HEART;
  }
  console.log(event.target.parentNode.parentNode.parentNode.parentNode.id)
}

heartsNodeArray.map(heartNode => {
  heartNode.addEventListener('click', callServerAndCatch);
})

// let clicks = 0;

// function handleCounter(articleId) {
//   clicks += 1
//   document.getElementById(articleId).innerText = clicks;
// }

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
