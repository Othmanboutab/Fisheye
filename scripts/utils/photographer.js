const createSort = () => {
  const SortButtonSection = document.querySelector(".select-dropdown");
  const wrapper = document.createElement("div");
  wrapper.classList.add("sort_medias");
  SortButtonSection.appendChild(wrapper);

  let buttonSortImages = "";

  buttonSortImages = `
    <label for="select_images" id="sort" tabindex="0">Trier par</label>
    <select id="select_images" data-trigger="select" tabindex="0" >
      <option value="popularity">Popularité</option>
      <option value="date">Date</option>
      <option value="title">Titre</option>
    </select>
    <i class="fas fa-chevron-down arrow-down"></i>
    `;

  wrapper.innerHTML = buttonSortImages;
  return wrapper;
};

const buildHeader = async (data) => {
  const { name, portrait, city, country, tagline } = data;

  const picture = `assets/photographers/${portrait}`;

  document.querySelector(".photographer-name").textContent = name;
  document.querySelector(
    ".photographer-location"
  ).textContent = `${city},${country}`;
  document.querySelector(".photographer-tagline").textContent = tagline;
  document.querySelector(".photographer-image").src = picture;
};

const displayMedia = async (mediasphotographer, filterBy) => {
  let mediasphotographerFiltered = null;
  const mediaElement = document.querySelector(".media");

  mediasphotographerFiltered = mediasphotographer.sort((a, b) => {
    return a.likes - b.likes;
  });
  if (filterBy === "popularity") {
    mediasphotographerFiltered = mediasphotographer.sort((a, b) => {
      return a.likes - b.likes;
    });
  }
  if (filterBy === "title") {
    mediasphotographerFiltered = mediasphotographer.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }
  if (filterBy === "date") {
    mediasphotographerFiltered.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  }

  mediaElement.innerHTML = "";
  mediasphotographerFiltered.forEach((media) => {
    const card = buildCard(media);
    mediaElement.appendChild(card);
  });
};

const buildCard = (data) => {
  const { title, video, image, photographerId, likes } = data;

  const container = document.createElement("div");
  let mediasCard = "";
  mediasCard += `<a href="#" class="media_link" onclick="openLightBox()" id="media_link"role="button" aria-label="${title}" tabindex="0">
    `;
  if (video !== undefined) {
    mediasCard += `<video class="card_video medias_all" aria-label="${title}" controls>
          <source src="assets/media/${photographerId}/${video}" type="video/mp4">
          </video>`;
  } else {
    mediasCard += `<img class="card_image medias_all" src="assets/media/${photographerId}/${image}" alt="${title}">`;
  }

  mediasCard += `
  </a>
  <div class="infoMedia">
    <span class="media-title">${data.title}</span>
    <div class="photograph-catalog-icon" tabindex="0" >
    <h3 class="photograph-catalog-like" >${likes}</h3>
    <i class="fas fa-heart like_img" tabindex="0" aria-label="likes" role="button"></i>
 </div>
  </div>`;

  container.innerHTML = mediasCard;

  return container;
};

const buildBottomCard = (photographerMedia, filteredPhtograph) => {
  const container = document.querySelector(".bottomCard");

  let totallikes = null;
  // calcule total de likes par photographe
  photographerMedia.forEach((test) => {
    totallikes = totallikes + test?.likes;
  });

  let card = "";
  card += `
  <div class="likes">
  <p class="likes-text">${totallikes}</p>
  <i class="fas fa-heart like_img" tabindex="0" aria-label="likes" role="button"></i>
  </div>
  <p class ="price">${filteredPhtograph?.price}€/jour</p>
`;
  container.innerHTML = card;
};