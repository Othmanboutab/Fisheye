// get urlParam from url
const urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");

// get data
const initPhotographPage = () => {
  fetch("../../data/photographers.json").then((response) =>
    response.json().then((data) => {
      const filteredPhtograph = data.photographers.filter((p) => p.id == id)[0];
      buildHeader(filteredPhtograph);
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
      displayForm(filteredPhtograph.name);
      buildBottomCard(photographerMedia, filteredPhtograph);
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
