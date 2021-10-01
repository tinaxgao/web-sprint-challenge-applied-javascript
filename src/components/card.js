const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const img = document.createElement("div");
  const authPhoto = document.createElement("img");
  const authName = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  headline.textContent = article.headline;
  author.classList.add("author");
  img.classList.add("img-container");
  authPhoto.src = article.authorPhoto;
  authName.textContent = `By ${article.authorName}`;

  card.append(headline, author);
  author.append(img, authName);
  img.append(authPhoto);

  card.addEventListener("click", console.log(headline))
return card;
}

import axios from 'axios';

const cardAppender = (selector) => {
  axios.get ('http://localhost:5000/api/articles')
  .then(resp => {
    let array = resp.data.articles.javascript.concat(resp.data.articles.bootstrap, resp.data.articles.technology, resp.data.articles.jquery, resp.data.articles.node);

    // console.log(array);

    for (let i=0; i<resp.data.articles.length; i++){
            array.push(resp[data][articles][i]);
    }

    array.forEach(i => 
      document.querySelector(selector).appendChild(Card(i)) )
}
  )
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

}
console.log(cardAppender())
export { Card, cardAppender }