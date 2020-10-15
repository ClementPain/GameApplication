import { PageList } from "./PageList";

export { PageDetail };

const PageDetail = (argument) => {

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">
        <div class="article row">
          <div class="col-md-4">
            <img class="img-fluid rounded" src="">
          </div>

          <div class="col-md-8">
            <h1 class="title"></h1>
            <p class="release-date">Release date : <span></span></p>
            <p class="developers">Studio : </p>
            <p class="publishers">Editeurs : </p>
            <p class="genres">Genres : </p>
            <p class="tags">Tags : </p>
            <p class="description"></p>
            <p class="website"></p>
          </div>
        </div>
      </section>
    `;

    preparePage();
  };

  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    

    const fetchGame = (url, argument) => {
      let finalURL = url + argument;

      fetch(`${finalURL}`)
        .then((response) => response.json())
        .then((response) => {
          let { background_image_additional, name, released, developers, publishers, genres, tags, description, website } = response;
          console.log(response);
          
          let articleDOM = document.querySelector(".page-detail .article");

          articleDOM.querySelector("img").src = background_image_additional;
          articleDOM.querySelector("h1.title").innerHTML = name;
          articleDOM.querySelector("p.release-date span").innerHTML = released;
          articleDOM.querySelector("p.developers").innerHTML += developers[0].name;
          argumentEvent("developers", developers[0].id, articleDOM.querySelector("p.developers"));

          publishers.forEach(function(obj) {
            articleDOM.querySelector("p.publishers").innerHTML += obj.name
            if(publishers.indexOf(obj) != publishers.length - 1) { articleDOM.querySelector("p.publishers").innerHTML += ", " };
          })

          genres.forEach(function(obj) {
            articleDOM.querySelector("p.genres").innerHTML += `<span id="genre_${obj.id}">${obj.name}</span>`
            if(genres.indexOf(obj) != genres.length - 1) { articleDOM.querySelector("p.genres").innerHTML += ", " };
            argumentEvent("genres", obj.id, articleDOM.querySelector("p.genres").querySelector(`span#genre_${obj.id}`));
          })

          tags.forEach(function(obj) {
            articleDOM.querySelector("p.tags").innerHTML += `<span id="tag_${obj.id}">${obj.name}</span>`;
            if(tags.indexOf(obj) != tags.length - 1) { articleDOM.querySelector("p.tags").innerHTML += ", " };
            argumentEvent("tags", obj.id, articleDOM.querySelector("p.genres").querySelector(`span#tag_${obj.id}`));
          })

          articleDOM.querySelector("p.description").innerHTML = description;
          articleDOM.querySelector("p.website").innerHTML = website;
        });
    };

    fetchGame("https://api.rawg.io/api/games/", cleanedArgument);
  };
  
  const argumentEvent = (argument_name, argument_id, pageElement) => {
    pageElement.addEventListener('click', (e) => {
      e.preventDefault();
      let arrayDeveloper = [ { name: argument_name, id: argument_id } ];
      PageList("", 0, arrayDeveloper);
    })
  }

  render();
};