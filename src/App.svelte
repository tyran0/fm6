<script>
  import "./css/styles.css";
  import Header from "./components/Header.svelte";
  import SvgAtlas from "./components/SvgAtlas.svelte";
  import ImageSlider from "./components/ImageSlider/index.svelte";
  import CartForm from "./components/CartForm/index.svelte";
</script>

<SvgAtlas />
<Header />
<main class="main">
  <article class="container grid-on-desktop">
    <h2 class="sr-only">Product Card</h2>
    <section class="container__section">
      <h3 class="sr-only">Product Pictures</h3>
      <ImageSlider />
    </section>
    <div class="grid-on-desktop__wrapper">
      <section class="container__section copy layout">
        <header class="copy__header" aria-hidden="true">
          <span class="copy__caption">Sneaker Company</span>
        </header>
        <h3 class="copy__heading copy__heading--primary">
          Fall Limited Edition Sneakers
        </h3>
        <p class="copy__paragraph">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </section>
      <CartForm
        name="Fall Limitied Edition Sneakers"
        price="250.0"
        discount="0.5"
        thumbnail="./images/image-product-1-thumbnail.jpg"
      />
    </div>
  </article>
</main>
