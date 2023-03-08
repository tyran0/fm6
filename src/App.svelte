<script>
    // IMPORTS
    import Header from "./components/Header.svelte";
    import ImageSlider from "./components/ImageSlider.svelte";
    import SvgAtlas from "./components/SvgAtlas.svelte";

    // ENTRY CODE
</script>

<SvgAtlas/>
<Header/>
<main>
    <article>
        <h2>Product Card</h2>
        <section>
            <h3>Product Pictures</h3>
            <ImageSlider/>
        </section>
        <section>
            <header aria-hidden="true">
                <span>Sneaker Company</span>
            </header>
            <h3>
                Fall Limited Edition Sneakers
            </h3>
            <p>
                These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
        </section>
        <section>
            <h3>Pricing</h3>
            <figure>
                <figcaption>Discounted price</figcaption>
                <span>$125.00</span>
            </figure>
            <figure>
                <figcaption>Discount percentage</figcaption>
                <span>50%</span>
            </figure>
            <figure>
                <figcaption>Original price</figcaption>
                <span>$250.00</span>
            </figure>
        </section>
        <section>
            <h3>Purchase Form</h3>
            <form action="/">
                <div>
                    <button type="button">
                        <span>Remove item</span>
                        <div aria-hidden="true"> <!-- SVG icon will be added later -->
                            -
                        </div>
                    </button>
                    <input type="number" name="" id=""
                           min="0">
                    <button type="button">
                        <span>Add item</span>
                        <div aria-hidden="true"> <!-- SVG icon will be added later -->
                            +
                        </div>
                    </button>
                </div>
                <button type="submit">
                    <div aria-hidden="true"></div> <!-- SVG icon will be added later -->
                    <span>Add to cart</span>
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