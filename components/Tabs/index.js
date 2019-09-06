// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const entryDiv = document.querySelector(".topics");
axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    console.log(response.data.topics);
    let x = response.data.topics;
    console.log(x);
    x.forEach(elem => {
      entryDiv.appendChild(topic(elem));
    });
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });
function topic(top) {
  const menu = document.createElement("div");
  menu.classList.add("tab");
  menu.textContent = top;

  return menu;
}
