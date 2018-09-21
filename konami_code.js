const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init () {
const main = document.body;
main.addEventListener('keydown', function(event) {
  const key = event.key;
  let index = 0;
 
  if (key === codes[index]) {
    index++;
 
    if (index === codes.length) {
      alert("Bravo!");
 
      index = 0;
    }
  } else {
  index = 0;
  }
} );
}
