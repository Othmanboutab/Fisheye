const getPhotographers = async () => {
  const response = await fetch("../../data/photographers.json")
  const photographersList = await response.json()
  return photographersList;
};

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    photographersSection.appendChild(photographerModel.article);
  });
}

async function init() {
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
