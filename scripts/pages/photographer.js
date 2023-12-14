// get urlParam from url
const urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");

// Afficher le loader au début
const loader = document.getElementById("loader");
loader.style.display = "flex";

// get data
const initPhotographPage = () => {
  fetch("../../data/photographers.json").then((response) =>
    response.json().then((data) => {

      loader.style.display = "none";

      const filteredPhotograph = data.photographers.filter((p) => p.id == id)[0];
      buildHeader(filteredPhotograph);
      createSort();

      const photographerMedia = data.media.filter(
        (media) => media.photographerId == id
      );

      document
        .getElementById("select_images")
        .addEventListener("change", (e) => {
          if (e.target.value === "popularity") {
            displayMedia(photographerMedia, "popularity");
          }
          if (e.target.value === "date") {
            displayMedia(photographerMedia, "date");
          }
          if (e.target.value === "title") {
            displayMedia(photographerMedia, "title");
          }
        });

      displayMedia(photographerMedia, "popularity");
      displayForm(filteredPhotograph.name);
      buildBottomCard(photographerMedia, filteredPhotograph);
      checkForm();
      AddClickHeart();

      const modalLightBox = document.querySelector(".lightbox_modal");

      // create LightBoxDOM
      modalLightBox.innerHTML = "";
      const lightBoxDOM = LightDOM();
      modalLightBox.appendChild(lightBoxDOM);

      lightboxShow();
    })
  );
};
initPhotographPage();
