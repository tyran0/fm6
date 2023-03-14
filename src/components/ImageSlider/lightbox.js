let lightboxRoot;
let previewNode;
let slider;

export function createLightbox(node) {
  if (window.innerWidth < 768) return;
  const root = node.cloneNode(true);
  lightboxRoot = document.createElement("div");
  slider = root.querySelector(".image-slider__slides");
  previewNode = root.querySelector(".image-slider__preview");

  root.classList.add("lightbox__image-slider");
  previewNode.dataset.lightboxCapability = true;
  lightboxRoot.classList.add("lightbox");

  lightboxRoot.append(root);
  node.append(lightboxRoot);
}

export function updateLightbox(id = null, update, direction = null) {
  if (!slider) return;
  const slides = slider.children;

  if (!previewNode) return;
  const preview = previewNode.children[0];
  const swap = previewNode.children[1];

  update(id, preview, swap, slides, direction);
}

export function removeLightbox() {
  if (!lightboxRoot) return;
  previewNode.dataset.lightboxCapability = false;
  lightboxRoot.remove();
}
