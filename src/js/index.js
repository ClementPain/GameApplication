import 'bootstrap/dist/css/bootstrap.min.css';
import "../sass/styles.scss";
import { PageList } from './PageList';
import { routes } from './routes';


// Routes

let pageArgument;

const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";

  const pageContent = document.getElementById("pageContent");
  routes[path[0]](pageArgument);
  return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());


// Input

const formElement = document.querySelector('#searchGameForm');
let searchCriterion;
let platformCriterion = [];

formElement.buttonElement.addEventListener('click', function(event) {
  event.preventDefault();
  searchCriterion = formElement.searchElement.value;
  if (formElement.platforms_list.value != -1) { platformCriterion = [ { name: "platforms", id: formElement.platforms_list.value }] };
  PageList(searchCriterion, 0, platformCriterion);
  resetCriteria();
})

const platforms = (url) => {
  fetch (url)
    .then((response) => response.json())
    .then((response) => {
      response.results.forEach( (obj) => {
        formElement.platforms_list.innerHTML += `<option value="${obj.id}"> ${obj.name} </option>`;
      })
    })
}

platforms("https://api.rawg.io/api/platforms");

const resetCriteria = () => {
  showMoreElement.innerHTML = "Voir Plus";
  searchItems = 0;
}

// Voir plus

const showMoreElement = document.getElementById("showMore");
let searchItems = 0;

showMoreElement.addEventListener('click', function(event) {
  event.preventDefault();
  searchItems += 9;
  PageList(searchCriterion, searchItems, platformCriterion);
  if(searchItems === 18) { showMoreElement.innerHTML = "" };   // delete showMoreGames if the button was used twice
})