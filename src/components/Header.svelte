<script>
  import { onMount } from "svelte";
  import { getButton } from "../lib/utils.js";
  import { loadItemsInCart } from "./CartForm/index.js";

  let menu;
  let dropdown;
  let isActive = false;
  let dropdownExpanded = false;

  function onclick(e) {
    const t = e.target;
    const self = e.currentTarget;
    const button = getButton(t, self);

    if (!button) return;

    const data = button.dataset;
    if (!data.for) return;

    const elem = self.querySelector(data.for);
    let state;

    if (elem === menu && window.innerWidth >= 768) {
      return;
    }

    if (elem === dropdown) {
      state = dropdownExpanded;
      dropdownExpanded = !state;
    } else {
      state = button.ariaExpanded === "true" ? true : false;
      button.ariaExpanded = !state;
      elem.ariaHidden = state;
    }

    elem.style.display = state ? "none" : "block";
    isActive = true;
  }

  onMount(() => {
    loadItemsInCart();
    dropdown.style.display = dropdown.ariaHidden === "true" ? "none" : "block";
    if (window.innerWidth < 768) {
      menu.style.display = menu.ariaHidden === "true" ? "none" : "block";
    }
  });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<header class="header" on:click={onclick}>
  <nav class="nav layout" aria-label="Primary menu">
    <div class="nav__wrapper">
      <button aria-expanded="false" data-for=".nav__menu">
        <span class="sr-only">Open the menu</span>
        <svg
          aria-hidden="true"
          class="button__icon"
          width="16"
          height="15"
          viewBox="0 0 16 15"
        >
          <use href="#svg_icon-menu" />
        </svg></button
      >
      <ul class="nav__menu link-list" aria-hidden="true" bind:this={menu}>
        <li class="link-list__item">
          <a href="/">Collections</a>
        </li>
        <li class="link-list__item">
          <a href="/">Men</a>
        </li>
        <li class="link-list__item">
          <a href="/">Women</a>
        </li>
        <li class="link-list__item">
          <a href="/">About</a>
        </li>
        <li class="link-list__item">
          <a href="/">Contact</a>
        </li>
      </ul>
    </div>
    <div class="header__logo">
      <a href="/" aria-hidden="true">
        <svg width="138" height="20" viewBox="0 0 138 20">
          <use href="#svg_logo" />
        </svg>
      </a>
    </div>
    <div class="dropdown">
      <button
        aria-expanded={dropdownExpanded}
        class="cart-counter"
        data-for=".dropdown__inner"
      >
        <span id="cart-counter" class="cart-counter__wrapper" />
        <span class="sr-only">Open your cart</span>
        <svg
          aria-hidden="true"
          class="button__icon"
          width="22"
          height="20"
          viewBox="0 0 22 20"
        >
          <use href="#svg_icon-cart" fill="#69707D" fill-rule="nonzero" />
        </svg>
      </button>
      <button aria-expanded={dropdownExpanded} data-for=".dropdown__inner">
        <span class="sr-only">Open your cart</span>
        <img
          aria-hidden="true"
          class="button__icon header__avatar"
          src="./images/image-avatar.png"
          alt=""
          width="24"
          height="24"
        />
      </button>
      <div
        class="dropdown__inner"
        aria-hidden={!dropdownExpanded}
        bind:this={dropdown}
      >
        <article class="dropdown__widget" data-has-items="false">
          <h2 class="sr-only">Your cart</h2>
          <section class="copy">
            <h2 class="copy__heading copy__heading--secondary">Cart</h2>
          </section>
          <section class="copy dropdown__placeholder">
            <p class="copy__paragraph">Your cart is empty.</p>
          </section>
          <ul id="cart-dropdown" class="cart-dropdown" />
          <button class="button button--accent">Checkout</button>
        </article>
      </div>
    </div>
  </nav>
</header>
