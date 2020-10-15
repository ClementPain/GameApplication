import { cardGame, changeCardGame, showMore } from './composants';

export { PageList };

const PageList = (argument = "", times = 0, otherArguments = []) => {

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="articles"><span>...loading</span></div>
      </section>
    `;
    preparePage();
    document.querySelector(".page-list .articles span").innerHTML = "";
  };

  const preparePage = () => {
    let cleanedArgument = argument.replace(/\s+/g, "-");
    
    const fetchList = (url) => {
      fetch(prepareURL(url))
        .then((response) => response.json())
        .then((response) => {
          returnArticles(response.results);
        })
    }

    const prepareURL = (url) => {
      let finalURL = url
      
      if (argument) {
        finalURL += 'search=' + argument +'&';
      }

      otherArguments.forEach( (arg) => {
        finalURL += `${arg.name}=` + arg.id.toString();
        if(otherArguments.last !== arg) { finalURL += '&' };
      });

      console.log(finalURL);
      return finalURL;
    }

    fetchList("https://api.rawg.io/api/games?");
  }

  const returnArticles = (responseResults) => {
    let article;
    let articles = [];

    responseResults.sort(function(a, b) { return ((new Date(a.released)) < (new Date(b.released))) });

    for(let i=times; i < times+9; i++){
      if(article = responseResults[i]) {
        document.querySelector(".page-list .articles").innerHTML += cardGame(article.name, platformsList(article.platforms), article.id, article.background_image);
        articles.push(responseResults[i])
      }
    }

    cardHovered(articles);
  }

  const platformsList = (platforms) => {
    let list = "";
    platforms.forEach(function(obj) { 
      list += obj.platform.name;
      if(platforms.indexOf(obj) != platforms.length - 1) { list += ", " };
    })
    return list;
  }

  const cardHovered = (articles) => {
    let cardImg;
    let genres;

    articles.forEach( (article) => {
      cardImg = document.getElementById(`img_${article.id}`);
      
      cardImg.addEventListener('mouseenter', (e) => {
        e.preventDefault();

        genres = article.genres.map( (genre) => genre.name ).join(', ');
        document.getElementById(`img_${article.id}`).innerHTML = changeCardGame( article.rating, article.ratings_count, article.released, genres );
      });

      cardImg.addEventListener('mouseleave', (e) => {
        e.preventDefault();

        document.getElementById(`img_${article.id}`).innerHTML = `<img class="card-img-left img-fluid rounded" src=${article.background_image}>`
      })
    });
  }

  times === 0 ? render() : preparePage();
}