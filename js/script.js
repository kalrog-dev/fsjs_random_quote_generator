/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Data
const quotes = [
  {
    quote: "Not all those who wander are lost.",
    source: "J. R. R. Tolkien",
    citation: "The Fellowship of the Ring",
    year: "1954",
    type: "novel"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde"
  },
  {
    quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    source: "Mahatma Gandhi"
  },
  {
    quote: "It is never too late to be what you might have been.",
    source: "George Eliot"
  },
  {
    quote: "Everything you can imagine is real.",
    source: "Pablo Picasso"
  }
];

// Get a different random quote
let randIndex, lastIndex;
function getRandomQuote() {
  do {
    randIndex = Math.floor( Math.random() * quotes.length );
  } while (randIndex === lastIndex);
  lastIndex = randIndex;
  return quotes[randIndex];
}

// Build html to inject a quote
function printQuote() {
  const randQuote = getRandomQuote();
  let html = 
    `<p class="quote">${randQuote.quote}</p>
    <p class="source">${randQuote.source}`;
  
  // Optional props
  ["citation", "year", "type"].forEach(prop => {
    if (randQuote.hasOwnProperty(prop)) {
      html += `<span class=${prop}>${randQuote[prop]}</span>`;
    }
  });
  
  html += "</p>";
  document.getElementById("quote-box").innerHTML = html; 
  changeBgColor("body");
}

// Change background color (random hue, saturation & lightness within a preferred range)
function changeBgColor(element) {
  const el = document.querySelector(element);
  el.style.backgroundColor = `hsl(${randInt(0, 360)}, ${randInt(20, 80)}%, ${randInt(40, 60)}%)`;
}

// Generate a random value in a range
function randInt(min, max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}

// Auto-refreshed quotes
const refreshQuote = setInterval(printQuote, 15000);

// Click event listener for the print quote button
document.getElementById("load-quote").addEventListener("click", printQuote, false);