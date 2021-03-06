//Fetching our quotes

//Global variables
let apiQuotes = [];
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');



//Show new quote
function newQuote() {
    //Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // console.log(quote);
    // console.log(quoteText);
    //Check if author field is blank and replace with unknown
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    }
    else {
        authorText.textContent = quote.author;
    }
    //Check the quote length to determin styling
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')

    }
    quoteText.textContent = quote.text;
}

//Get quotes from API function
async function getQuotes() {
    const apiURL = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
        //shows our 0th object quote console.log(apiQuotes[0]);

    } catch (error) {
        //Cath error here normally in professionall software it comes in the form of an alert
    }
}

//On load
getQuotes();

//Tweet a quote
function tweetQuote() {
    //Make sure you are using back-ticks `` and not ''
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);