// quotes array
let quotes = [
  ["Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.","Rumi"],
  ["Stop acting so small. You are the universe in ecstatic motion", "Rumi"],
  ["Everything that is made beautiful and fair and lovely is made for the eye of one who sees", "Rumi"],
  ["Raise your words, not voice. It is rain that grows flowers, not thunder", "Rumi"],
  ["Goodbyes are only for those who love with their eyes. Because for those who love with heart and soul there is no such thing as separation", "Rumi"]
  ["Your heart is the size of an ocean. Go find yourself in its hidden depths", "Rumi"],
  ["Love is the bridge between you and everything", "Rumi"]
]

function newQuote() {
  //generator the quotes
  cont randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumberNumber];
}

//listening for new quote
element.addEventListener("click, btn");
