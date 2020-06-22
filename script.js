var stoicQuotes = [
  "To be evenminded is the greatest virtue - Heraclitus",
  "Just keep in mind: the more we value things outside our control, the less control we have - Epictetus",
  "The tranquility that comes when you stop caring what they say. Or think, or do. Only what you do - Marcus Aurelius",
  "The whole future lies in uncertainty: live immediately - Seneca",
  "It does not matter what you bear, but how you bear it - Seneca",
  "A gem cannot be polished without friction, nor a man perfected without trials. - Seneca",
  "He has the most who is content with the least. - Diogenes",
  "Man conquers the world by conquering himself. - Zeno of Citium",
  "When someone is properly grounded in life, they shouldn’t have to look outside themselves for approval. - Epictetus",
  "If a man knows not which port he sails, no wind is favorable. – Seneca",
  "Waste no more time arguing what a good man should be. Be one. – Marcus Aurelius",
  "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own. – Marcus Aurelius",
  "Don’t seek for everything to happen as you wish it would, but rather wish that everything happens as it actually will—then your life will flow well. – Epictetus",
  "Don’t explain your philosophy. Embody it. - Epictetus",
  "I begin to speak only when I’m certain what I’ll say isn’t better left unsaid. – Cato",
  "We are more curious about the meaning of dreams than about things we see when awake. - Diogenes",
  "We have two ears and one mouth, so we should listen more than we say. – Zeno of Citium",
  "The Fates guide the person who accepts them and hinder the person who resists them. - Cleanthes",
  "I will reveal to you a love potion, without medicine, without herbs, without any witch’s magic; if you want to be loved, then love - Hecato of Rhodes",
  "Wealth consists not in having great possessions, but in having few wants. ― Epictetus",
  "Humanity must seek what is NOT simple and obvious using the simple and obvious. - Musonius Rufus",
  "Won’t we, therefore, be willing to endure pain in order to gain complete happiness? - Musonius Rufus",
  "Do not spoil what you have by desiring what you have not; remember that what you now have was once among the things you only hoped for. - Epicurus",
  "Death does not concern us, because as long as we exist, death is not here. And when it does come, we no longer exist. - Epicurus",
  "You don't develop courage by being happy in your relationships everyday. You develop it by surviving difficult times and challenging adversity. - Epicurus"
];

// Variable que trae el boton de share a javascript
let shareButton = document.getElementById("myBtn");

// Se deshabilita el boton de share al inicio cuando no hay quote
shareButton.disabled = true;

// Funcion que busca un array random en stoicQuotes y lo reemplaza por el div quoteDisplay.
function getStoicQuote() {
  shareButton.disabled = false;
  shareButton.classList.remove("deshabilitado");
  let random = Math.floor(Math.random() * stoicQuotes.length);
  document.getElementById("quoteDisplay").innerHTML = stoicQuotes[random];

  // Fade-out del quote
  $("div.quote-container").fadeOut(0);
  // Evita que se hagan colas de animacion cuando el click se repite rapidamente.
  $("div.quote-container").stop(false, true);
  // Fade in del quote 
  $("div.quote-container").fadeIn(500);
}

// Funcion que comparte la quote (sin utilizar API de twitter)
function shareQuote() {
  let twitterText = document.getElementById("quoteDisplay").innerHTML;
  window.open("https://twitter.com/intent/tweet?text=" + twitterText);
}
