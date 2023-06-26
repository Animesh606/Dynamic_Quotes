let realdata = "";
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuote = document.getElementById("newQuote");
const getQuote = () => {
    let num = Math.floor(Math.random() * realdata.length);
    quote.innerText = realdata[num].text;
    author.innerText = realdata[num].author;
}
const getData = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        const data = await fetch(api);
        realdata = await data.json();
        getQuote();
    } catch (error) {
        
    }
}
getData();
newQuote.addEventListener('click', getQuote);