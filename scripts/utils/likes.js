const AddClickHeart = () => {
  const totalLikesText = document.querySelector(".likes-text");
  const clickLikes = document.querySelectorAll(".like_img");

  // click for all hearts images
  for (const clickHeart of clickLikes) {
    clickHeart.addEventListener("click", () => {
      let siblingClick = clickHeart.previousElementSibling;

      siblingClick.innerHTML = parseInt(siblingClick.innerHTML) + 1;
      totalLikesText.innerHTML = parseInt(totalLikesText.innerHTML) + 1;
    });
  }
  for (const clickHeart of clickLikes) {
    clickHeart.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        let siblingClick = clickHeart.previousElementSibling;

        siblingClick.innerHTML = parseInt(siblingClick.innerHTML) + 1;
        totalLikesText.innerHTML = parseInt(totalLikesText.innerHTML) + 1;
      }
    });
  }
};
