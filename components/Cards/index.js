// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
     console.log(response.data);
  let x = response.data;
  
    
    cotainer.appendChild(createCard(response.data));
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });



const cotainer = document.querySelector(".carousel-container");

function createCard(data) {
  const card = document.createElement("div"),
    headLine = document.createElement("div"),
    author = document.createElement("div"),
    imgdiv = document.createElement("div"),
    img = document.createElement("img"),
    span = document.createElement("span");

   card.classList.add('card')
   headLine.classList.add('headLine')
   author.classList.add('author')
   imgdiv.classList.add("img-container")

   card.appendChild(headLine)
   card.appendChild(author)
   author.appendChild(imgdiv)
   imgdiv.appendChild(img)
   author.appendChild(span)

    data.forEach(item => {
        headLine.textContent = item.articles;
        img.src = item.articles;
        span.textContent = item.articles;
       });
  
  

    console.log(data.articles.bootstrap);

return card

}

// console.log(cotainer)



   

