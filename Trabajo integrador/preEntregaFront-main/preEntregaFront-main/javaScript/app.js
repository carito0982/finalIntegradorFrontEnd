const marvel = {
    render: () => {
       const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=f5d46aa6376f8342a9b58d144650b32d&hash=0e2431d7c4666d3a03af52b4dc0d4f51';
        const container = document.querySelector('#marvel-row');
        let contentHTML = '';
        
    fetch(urlAPI)
      .then(res => res.json())
      .then((json) => {
        for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
          contentHTML += `
            <div class="col-md-4">
                <a href="${urlHero}" target="_blank">
                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                <h3 class="title">${hero.name}</h3>
            </div>`;
        }
        container.innerHTML = contentHTML;
      })
  }
};
marvel.render();