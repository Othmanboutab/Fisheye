const lightboxShow = () => {
  const modalLightBox = document.querySelector(".lightbox_modal");
  const bodyDiv = document.querySelector("body");
  const MainDiv = document.getElementById("main");

  const setAriaHidden = (element, value) => {
    element.setAttribute("aria-hidden", value);
  };

  const setTabIndex = (elements, value) => {
    elements.forEach((el) => el?.setAttribute("tabIndex", value));
  };

  const removeTabIndex = (elements) => {
    elements.forEach((el) => el.removeAttribute("tabIndex"));
  };

  const enableTabindexLightbox = () => {
    setTabIndex([document.querySelector("header a"), document.querySelector(".photograph-name"), document.querySelector(".photograph-txt"), document.querySelector(".contact_me"), document.querySelector(".photograph-img"), document.querySelector(".likes-price")], "0");

    setTabIndex(document.querySelectorAll(".media_link, .photograph-catalog-txt, .photograph-catalog-icon, .like_img"), "0");

    const videoCatalog = document.querySelectorAll(".media_link .card_video");
    setTabIndex(videoCatalog, "0");
  };

  const disableTabindexLightbox = () => {
    setTabIndex([document.querySelector("header a"), document.querySelector(".photograph-name"), document.querySelector(".photograph-txt"), document.querySelector(".contact_me"), document.querySelector(".photograph-img"), document.querySelector(".likes-price"), document.querySelector("#sort"), document.querySelector("#select_images")], "-1");

    setTabIndex(document.querySelectorAll(".media_link, .photograph-catalog-txt, .photograph-catalog-icon, .like_img"), "-1");

    const videoCatalog = document.querySelectorAll(".media_link .card_video");
    setTabIndex(videoCatalog, "-1");
  };

  const activateTabindexAndFocus = () => {
    enableTabindexLightbox();

    const modalMediaTab = document.querySelectorAll(".modal_media");
    for (let i = 0; i < modalMediaTab.length; i++) {
      if (modalMediaTab[i].style.display === "block") {
        modalMediaTab[i].firstChild.focus();
      }
    }
  };

  function showSlides(n) {
    let slides = document.getElementsByClassName("modal_media");

    if (slides.length === 0) {
      return;
    }

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    if (slides[slideIndex - 1]) {
      slides[slideIndex - 1].style.display = "block";
    } else {
      return;
    }
  }


  const handleArrowKeys = (e) => {
    if (e.code === "ArrowLeft") {
      plusSlides(-1);
    } else if (e.code === "ArrowRight") {
      plusSlides(1);
    }
  };

  const handleArrowButtonClick = (event, direction) => {
    event.preventDefault();
    plusSlides(direction);
  };

  const handleCloseButtonClick = () => {
    modalLightBox.style.display = "none";
    MainDiv.setAttribute("aria-hidden", "false");
    modalLightBox.setAttribute("aria-hidden", "true");
    bodyDiv.classList.remove("no-scroll");

    const lastMediaModal = document.querySelectorAll(".media_link");
    lastMediaModal[getIndexMediaModal - 1].focus();
    enableTabindexLightbox();
  };

  const currentSlide = (n) => {
    showSlides((slideIndex = n));
    getIndexMediaModal = slideIndex; //get value of position media modal
  };

  const handleImageClick = (event, index) => {
    event.preventDefault();

    modalLightBox.style.display = "flex";
    MainDiv.setAttribute("aria-hidden", "true");
    bodyDiv.classList.add("no-scroll");
    modalLightBox.setAttribute("aria-hidden", "false");

    currentSlide(index + 1);

    disableTabindexLightbox();

    activateTabindexAndFocus();
  };

  const plusSlides = (n) => {
    showSlides((slideIndex += n));
    getIndexMediaModal = slideIndex;
  };

  let slideIndex = 1;
  showSlides(slideIndex);

  document.addEventListener("keydown", handleArrowKeys);

  const linkPrevLightBox = document.querySelector(".prev_image");

  linkPrevLightBox && linkPrevLightBox.addEventListener("click", (event) => handleArrowButtonClick(event, -1));

  const linkNextLightBox = document.querySelector(".next_image");
  linkNextLightBox && linkNextLightBox.addEventListener("click", (event) => handleArrowButtonClick(event, 1));

  const linkPrevEnterLightBox = document.querySelector(".controls_left");
  linkPrevEnterLightBox && linkPrevEnterLightBox.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      e.preventDefault();
      plusSlides(-1);
    }
  });

  const linkNextEnterLightBox = document.querySelector(".controls_right");
  linkNextEnterLightBox && linkNextEnterLightBox.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      e.preventDefault();
      plusSlides(1);
    }
  });

  const closeLightBoxModal = document.querySelector(".modal_close_btn");
  closeLightBoxModal && closeLightBoxModal.addEventListener("click", handleCloseButtonClick);

  const imageSelected = document.querySelectorAll(".media_link");
  imageSelected.forEach((image, index) => {
    image.addEventListener("click", (event) => handleImageClick(event, index));
  });
};

const LightDOM = () => {
  const modalLightBox = document.createElement("article");
  modalLightBox.classList.add("modal_carousel");

  const mediasAll = document.querySelectorAll(".medias_all");
  const mediasTitleAll = document.querySelectorAll(".media-title");

  for (var i = 0; i < mediasAll.length; i++) {
    const modalMediaDiv = document.createElement("div");
    modalMediaDiv.classList.add("modal_media");
    modalMediaDiv.appendChild(mediasAll[i].cloneNode(true));
    modalMediaDiv.appendChild(mediasTitleAll[i].cloneNode(true));
    modalLightBox.appendChild(modalMediaDiv);
  }

  const buttonsLightBox = `
    <a href="#" class="controls controls_left">
      <div role="button" class="control_btn" >
        <span class="img prev_image" >
          <i aria-hidden="true" class="fas fa-chevron-left"></i>
        </span>
        <p class="sr-only">Previous image</p>
      </div>
    </a>
    <a href="#" class="controls controls_right">
      <div role="button" class="control_btn">
        <span class="img next_image">
          <i aria-hidden="true" class="fas fa-chevron-right"></i>
        </span>
        <p class="sr-only">Next image</p>
      </div>
    </a>
    <button class="modal_close_btn" aria-label="close dialog">
      <img src="../../assets/icons/close.svg" />
    </button>`;

  modalLightBox.innerHTML += buttonsLightBox;

  return modalLightBox;
};

lightboxShow();
