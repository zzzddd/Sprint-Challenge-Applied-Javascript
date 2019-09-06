// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
entryDiv=document.querySelector('.topics')
function topic(){
    const topicsDiv=document.createElement('div')
    topicsDiv.classList.add('tab')

    // topicsDiv.textContent


    // console.log(x[3])
    return topicsDiv
}
// entryDiv.appendChild(topic());
console.log(entryDiv);


axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(response => {
    // console.log(response.data.topics);
    let x = response.data.topics;
    x.forEach(item => {
        const newTopic = topic(item);
        entryDiv.appendChild(newTopic);
        let b=entryDiv.querySelectorAll('.tab')
        
        //  console.log(b);
      
     });
      //  const tab = Document.querySelectorAll(".tab");
      //  console.log(tab);
       
  })
  .catch(error => {
    console.log("The data was not returned", error);
  });
// 

// console.log(x)
