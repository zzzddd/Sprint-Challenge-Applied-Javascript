// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const entryPoint = document.querySelector(".header-container");
function Header() {
  const header = document.createElement("div"),
    span = document.createElement("span"),
    spanT = document.createElement("span"),
    h1 = document.createElement("h1");
  header.classList.add("header");
  span.classList.add("date");
  spanT.classList.add("temp");

  span.textContent = "SMARCH 28, 2019";
  h1.textContent = "Lambda Times";
  spanT.textContent = "98°";
  header.appendChild(span)
  header.appendChild(h1)
  header.appendChild(spanT)

  return header;
}
console.log(Header())
console.log(entryPoint);

entryPoint.appendChild(Header());
