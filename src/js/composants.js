export { cardGame, changeCardGame, showMore };

const cardGame = (name, platforms, id, url_img) => {
  return `
  <div class='cardGame row mb-4' id="card_${id}">
    <div class="col-md-4" id="img_${id}">
      <img class="card-img-left img-fluid rounded" src=${url_img}>
    </div>
    <div class = "col-md-8">
      <h1>${name}</h1>
      <p>${platforms}</p>
      <a href = '#pagedetail/${id}'>Détails du jeu</a>
      
    </div>
  </div>
  
  <div class = "modal fade" id="modalGame${id}">
    <div class="modal-dialog">
      <div class = "modal-header">
        <h1>${name}</h1>
      </div>
      <div class="modal-body">
        This is my body
      </div>
      <div class="modal-footer">
        <a href = '#pagedetail/${id}'>${id}</a>
        <input class="btn btn-default" value="close">
      </div>
    </div>
  </div>
  `;
}

const changeCardGame = (rating, nb_rating, released, genres) => {
  return `
  <p class="rating">Note : ${rating}</p>
  <p class="rating_count">Nombre de notes : ${nb_rating}</p>
  <p class="release-date">Date de sortie : ${released}</p>
  <p class="genres">Genres : ${genres}</p>
  `
}

const showMore = () => {
  return `
  <div class="row justify-content-end">
    <div class="col-md-4" id="showMore">Voir Plus</div>
  </div>
  `
}