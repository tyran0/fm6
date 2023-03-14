<script>
  import "./index.css";
  import { getOutermostParent } from "../../lib/utils.js";

  let root;
  let slider;
  let slides;
  let controlSet;
  let previewNode;
  let preview;
  let swap;
  let previewID = 0;
  let swapID = 1;

  function setAlts() {
    for (let i = 0; i < slides.length; i++) {
      const child = slides[i];
      const alt = child.dataset.alt;
      if (alt === undefined || alt === "") return;

      const img = child.children[0];
      if (!img) return;

      img.setAttribute("alt", alt);
    }
  }

  function setImageAttribute(node, attribute) {
    const id = parseInt(node.dataset.id);
    const data = slides[id].dataset;
    node[attribute] = data[attribute];
  }

  import { onMount } from "svelte";
  onMount(() => {
    slides = slider.children;
    setAlts();
    setImageAttribute(preview, "alt");
  });

  function updateID(newID) {
    if (newID > slides.length - 1) return 0;
    if (newID < 0) return slides.length - 1;
    return newID;
  }

  function updateImage(img, id) {
    img.src = `./images/image-product-${id + 1}.jpg`;
  }

  function update(preview, newPreviewID, swap, newSwapID, slides) {
    const previewID = updateID(newPreviewID);
    const swapID = updateID(newSwapID);
    preview.dataset.id = previewID;
    swap.dataset.id = swapID;
    updateImage(preview, previewID);
    updateImage(swap, swapID);

    const slide = slides[previewID];
    if (!slide) return;

    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];
      slide.dataset.active = false;
    }

    slide.dataset.active = true;
  }

  function updateOnSlide(id, preview, swap, slides) {
    update(preview, id, swap, id + 1, slides);
  }

  function updateOnButton(id = null, preview, swap, slides, direction) {
    const diff = direction === "left" ? 1 : -1;
    const previewID = parseInt(preview.dataset.id) + diff;
    const swapID = parseInt(swap.dataset.id) + diff;
    update(preview, previewID, swap, swapID, slides);
  }

  import { createLightbox, removeLightbox, updateLightbox } from "./lightbox";
  function handleClick(e) {
    const clicked = e.target;
    const parent = clicked.parentNode;

    const isSlide = clicked.className === "image-slider__slide";
    const isLightbox = parent.dataset.lightboxCapability === "true";
    const isPreview = parent.className === "image-slider__preview";

    if (isSlide && clicked.dataset.active === "false") {
      const id = parseInt(clicked.dataset.id);
      updateOnSlide(id, preview, swap, slides);
      updateLightbox(id, updateOnSlide);
    }

    const button = getOutermostParent(
      clicked,
      (node) => node.nodeName === "BUTTON",
      root
    );

    if (button) {
      const direction = button.dataset.direction;
      updateOnButton(null, preview, swap, slides, direction);
      updateLightbox(null, updateOnButton, direction);
    }

    const flag = isSlide || isPreview || button;
    if (isPreview && !isLightbox) createLightbox(root);
    if (!flag) removeLightbox();
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="image-slider" bind:this={root} on:click={handleClick}>
  <div class="image-slider__wrapper">
    <div class="image-slider__controls" bind:this={controlSet}>
      <button
        class="button  button--round"
        data-direction="right"
        title="Previous image"
      >
        <span class="sr-only">Previous Image</span>
        <svg aria-hidden="true" width="15" height="18" viewBox="0 0 15 18">
          <use href="#svg_icon-previous" />
        </svg>
      </button>
      <button
        class="button button--round"
        data-direction="left"
        title="Next image"
      >
        <span class="sr-only">Next Image</span>
        <svg aria-hidden="true" width="13" height="18" viewBox="0 0 13 18">
          <use href="#svg_icon-next" />
        </svg>
      </button>
    </div>
    <div
      class="image-slider__preview"
      bind:this={previewNode}
      data-lightbox-capability="false"
      title="Click to open in fullscreen"
    >
      <img
        bind:this={preview}
        data-id={previewID}
        data-swap="false"
        fetchpriority="high"
        src={`./images/image-product-${previewID + 1}.jpg`}
        width="1000"
        height="1000"
        alt=""
      />
      <img
        bind:this={swap}
        data-id={swapID}
        data-swap="true"
        fetchpriority="low"
        src={`./images/image-product-${swapID + 1}.jpg`}
        width="1000"
        height="1000"
        alt=""
      />
    </div>
  </div>
  <div class="image-slider__slides" aria-hidden="true" bind:this={slider}>
    <div
      class="image-slider__slide"
      data-src="./image-product-1.jpg"
      data-id="0"
      data-alt="abc"
      data-active="true"
    >
      <img
        src="./images/image-product-1-thumbnail.jpg"
        width="176"
        height="176"
        alt=""
      />
    </div>
    <div
      class="image-slider__slide"
      data-src="./image-product-2.jpg"
      data-id="1"
      data-alt="123"
      data-active="false"
    >
      <img
        src="./images/image-product-2-thumbnail.jpg"
        width="176"
        height="176"
        alt=""
      />
    </div>
    <div
      class="image-slider__slide"
      data-src="./image-product-3.jpg"
      data-id="2"
      data-alt="456"
      data-active="false"
    >
      <img
        src="./images/image-product-3-thumbnail.jpg"
        width="176"
        height="176"
        alt=""
      />
    </div>
    <div
      class="image-slider__slide"
      data-src="./image-product-4.jpg"
      data-id="3"
      data-alt="789"
      data-active="false"
    >
      <img
        src="./images/image-product-4-thumbnail.jpg"
        width="176"
        height="176"
        alt=""
      />
    </div>
  </div>
</div>
