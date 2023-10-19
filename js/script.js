/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Array of quote objects
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

// Get a random quote object from the quotes array
let randomIndex, lastIndex;
function getRandomQuote() {
  // If we get the same quote again, repeat until the quote has changed
  do {
    randomIndex = Math.floor( Math.random() * quotes.length );
  } while (randomIndex === lastIndex);
  lastIndex = randomIndex;
  return quotes[randomIndex];
}

// Build html to inject a quote
function printQuote() {
  const randomQuote = getRandomQuote();
  let html = 
    `<p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}`;

  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }

  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  }

  if (randomQuote.type) {
    html += `<span class="type">${randomQuote.type}</span>`;
  }

  html += "</p>";
  document.getElementById('quote-box').innerHTML = html; 
}

// Click event listener for the print quote button
document.getElementById('load-quote').addEventListener("click", printQuote, false);