<script>
    import './css/styles.css';
    import Header from "./components/Header.svelte";
    import SvgAtlas from "./components/SvgAtlas.svelte";
    import ImageSlider from "./components/ImageSlider.svelte";
</script>

<SvgAtlas/>
<Header/>
<main class="main">
    <article class="container">
        <h2 class="sr-only">Product Card</h2>
        <section class="container__section">
            <h3 class="sr-only">Product Pictures</h3>
            <ImageSlider/>
        </section>
        <section class="container__section copy layout">
            <header class="copy__header" aria-hidden="true">
                <span class="copy__caption">Sneaker Company</span>
            </header>
            <h3 class="copy__heading">
                Fall Limited Edition Sneakers
            </h3>
            <p class="copy__paragraph">
                These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
        </section>
        <section class="container__section price-tag copy layout">
            <h3 class="sr-only">Pricing</h3>
            <figure class="price-tag__discounted-price">
                <figcaption class="sr-only">Discounted price</figcaption>
                <span class="copy__heading" data-key="discounted_price">$125.00</span>
            </figure>
            <figure class="price-tag__discount-percentage">
                <figcaption class="sr-only">Discount percentage</figcaption>
                <span class="copy__caption">50%</span>
            </figure>
            <figure class="price-tag__original-price">
                <figcaption class="sr-only">Original price</figcaption>
                <span class="copy__caption">$250.00</span>
            </figure>
        </section>
        <section class="container__section layout">
            <h3 class="sr-only">Purchase Form</h3>
            <form class="item-count" action="/">
                <div class="item-count__wrapper">
                    <button type="button" class="button js-button"
                            data-action="increase" data-for="@parent">
                        <span class="sr-only">Remove item</span>
                        <svg aria-hidden="true" class="button__icon" width="12" height="4" viewBox="0 0 12 4">
                            <use href="#svg_icon-minus" fill="#ff7e1b" fill-rule="nonzero"></use>
                        </svg>
                    </button>
                    <input type="number" name="item-count" id="item-count"
                           class="item-count__input" min="0" value="0">
                    <button type="button" class="button js-button"
                            data-action="decrease" data-for="@parent">
                        <span class="sr-only">Add item</span>
                        <svg aria-hidden="true" class="button__icon" width="12" height="12" viewBox="0 0 12 12">
                            <use href="#svg_icon-plus" fill="#ff7e1b" fill-rule="nonzero"></use>
                        </svg>
                    </button>
                </div>
                <button type="submit" class="button button--with-icon button--accent">
                    <svg aria-hidden="true" class="button__icon" width="22" height="20" viewBox="0 0 22 20">
                        <use href="#svg_icon-cart"></use>
                    </svg>
                    <span class="button__label">Add to cart</span>
                </button>
            </form>
        </section>
    </article>
</main>

<!-- ATTRIBUTION START
    <div>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge"
            target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="/">Your Name Here</a>.
    </div>
---- ATTRIBUTION END -->