const photographerFactory = (data) => {
  const { id, name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  const article = document.createElement("article");

  // Photographer image
  const img = document.createElement("img");
  img.setAttribute("src", picture);
  img.setAttribute("alt", `image de ${name}`);

  // Photographer name
  const photographerName = document.createElement("h2");
  photographerName.classList.add("photographer-name");
  photographerName.textContent = name;

  // Photographer page
  const photographerPage = document.createElement("a");
  photographerPage.classList.add("photographer-page");
  photographerPage.href = `photographer.html?id=${id}`;
  photographerPage.appendChild(img);
  photographerPage.appendChild(photographerName);

  // Photographer city / country
  const photographerCity = document.createElement("h4");
  photographerCity.classList.add("photographer-city");
  photographerCity.textContent = `${city}, ${country}`;

  // Photographer tagline
  const photographerTagline = document.createElement("h4");
  photographerTagline.textContent = tagline;
  photographerTagline.classList.add("photographer-tagline");

  // Photographer prices
  const photographerPrice = document.createElement("h4");
  photographerPrice.textContent = `${price}€/jour`;
  photographerPrice.classList.add("photographer-price");

  // Appending elements to the article
  article.appendChild(photographerPage);
  article.appendChild(photographerCity);
  article.appendChild(photographerTagline);
  article.appendChild(photographerPrice);

  return { article };
};
