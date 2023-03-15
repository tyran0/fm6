<script>
  import { onMount } from "svelte";
  import { getCartFormNodes, saveItemsInCart } from "./index.js";

  export let name;
  export let price;
  export let thumbnail;
  export let discount;

  let cartCounter;
  let cartDropdown;
  let itemDataNode;
  let actualPrice = 0;
  let totalItemCount = 0;
  let currentItemCount = 0;

  function increase() {
    currentItemCount++;
  }

  function decrease() {
    currentItemCount--;
    if (currentItemCount < 0) {
      currentItemCount = 0;
    }
  }

  function prepareItemData(name = "", price = 0, amount = 0, thumbnail = "") {
    if (price <= 0) throw new Error("Price can't be 0 or less.");
    if (amount <= 0) throw new Error("Item count can't be 0 or less.");
    return [{ name, thumbnail, price, amount, totalPrice: price * amount }];
  }

  function updateItemsInCart(itemData) {
    let previousItemCount = 0;
    if (cartCounter.innerText !== "") {
      previousItemCount = parseInt(cartCounter.innerText);
    }

    totalItemCount = previousItemCount + currentItemCount;
    saveItemsInCart(totalItemCount, itemData);

    /* Don't update before we save */
    cartCounter.innerText = totalItemCount;
    cartCounter.style.display = "block";
  }

  function handleSubmit(e) {
    const data = prepareItemData(
      name,
      actualPrice,
      currentItemCount,
      thumbnail
    );
    updateItemsInCart(data);
    currentItemCount = 0;
  }

  onMount(() => {
    actualPrice = discount ? price - price * discount : price;
    const formNodes = getCartFormNodes();
    cartCounter = formNodes.cartCounter;
    cartDropdown = formNodes.cartDropdown;
  });
</script>

<section
  class="container__section price-tag copy layout"
  bind:this={itemDataNode}
>
  <h3 class="sr-only">Pricing</h3>
  <figure class="price-tag__discounted-price">
    <figcaption class="sr-only">Discounted price</figcaption>
    <span class="copy__heading" data-key="discounted_price">${actualPrice}</span
    >
  </figure>
  <figure class="price-tag__discount-percentage">
    <figcaption class="sr-only">Discount percentage</figcaption>
    <span class="copy__caption">{discount * 100}%</span>
  </figure>
  <figure class="price-tag__original-price">
    <figcaption class="sr-only">Original price</figcaption>
    <span class="copy__caption">${price}</span>
  </figure>
</section>
<section class="container__section layout">
  <h3 class="sr-only">Purchase Form</h3>
  <form class="item-count" action="/" on:submit|preventDefault={handleSubmit}>
    <div class="item-count__wrapper">
      <button type="button" class="button" on:click={decrease}>
        <span class="sr-only">Remove item</span>
        <svg
          aria-hidden="true"
          class="button__icon"
          width="12"
          height="4"
          viewBox="0 0 12 4"
        >
          <use href="#svg_icon-minus" fill="#ff7e1b" fill-rule="nonzero" />
        </svg>
      </button>
      <label for="item-count" class="sr-only">Items in cart</label>
      <input
        type="number"
        name="item-count"
        id="item-count"
        class="item-count__input"
        min="1"
        bind:value={currentItemCount}
      />
      <button type="button" class="button" on:click={increase}>
        <span class="sr-only">Add item</span>
        <svg
          aria-hidden="true"
          class="button__icon"
          width="12"
          height="12"
          viewBox="0 0 12 12"
        >
          <use href="#svg_icon-plus" fill="#ff7e1b" fill-rule="nonzero" />
        </svg>
      </button>
    </div>
    <button type="submit" class="button button--with-icon button--accent">
      <svg
        aria-hidden="true"
        class="button__icon"
        width="22"
        height="20"
        viewBox="0 0 22 20"
      >
        <use href="#svg_icon-cart" />
      </svg>
      <span class="button__label">Add to cart</span>
    </button>
  </form>
</section>
