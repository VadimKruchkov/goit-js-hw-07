import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const createGalleryItems = (galleryItems) => {
  const galleryItem = galleryItems
    .map((item) => {
      return `<div class='gallery__item'>
    <a class='gallery__link' href='${item.original}'>
    <img class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt"${item.description}"></a></div>`;
    })
    .join("");
  return galleryItem;
};
galleryEl.insertAdjacentHTML("afterbegin", createGalleryItems(galleryItems));

function openModal(event) {
  event.preventDefault();

  const instance = basicLightbox.create(
    `
       <img src="${event.target.dataset.source}" width="800" height="600">
	`,
    {
      onShow: () => {
        window.addEventListener("keydown", clickOnEscape);
      },
      onClose: () => {
        window.removeEventListener("keydown", clickOnEscape);
      },
    }
  );
  instance.show();

  function clickOnEscape(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
}

galleryEl.addEventListener("click", openModal);

console.log(galleryItems);
