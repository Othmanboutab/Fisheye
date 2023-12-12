const photographerFactory = (data) => {
  const { id, name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");

    //photographer image
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", `image de ${name}`);

    // photographer name
    const photographerName = document.createElement("h2");
    photographerName.classList.add("photographer-name");
    photographerName.textContent = name;
    article.appendChild(photographerName);

    // photographer page
    const photographerPage = document.createElement("a");
    photographerPage.classList.add("photographer-page");
    photographerPage.href = `photographer.html?id=${id}`;
    photographerPage.appendChild(img);
    photographerPage.appendChild(photographerName);
    article.appendChild(photographerPage);

    //photographer city / country
    const photographerCity = document.createElement("h4");
    photographerCity.classList.add("photographer-city");
    photographerCity.textContent = `${city}, ${country}`;
    article.appendChild(photographerCity);

    //  photographer tagline
    const photographerTagline = document.createElement("h4");
    photographerTagline.textContent = tagline;
    photographerTagline.classList.add("photographer-tagline");
    article.appendChild(photographerTagline);

    //  photographer prices
    const photographerPrice = document.createElement("h4");
    photographerPrice.textContent = `${price}€/jour`;
    photographerPrice.classList.add("photographer-price");
    article.appendChild(photographerPrice);

    return article;
  }
  return { name, picture, getUserCardDOM };
};
