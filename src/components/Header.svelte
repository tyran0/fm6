<script>
    // BUTTON CLICK HANDLER IMPL.

    // HEADER NAVIGATION HANDLER IMPL.

    // DROPDOWN HANDLER IMPL.
</script>

<header>
    <nav aria-label="Primary menu">
        <span>
            <button aria-expanded="false">
                <span>Open the menu</span>
                <svg width="16" height="15" viewBox="0 0 16 15">
                    <use href="#svg_icon-menu"></use>
            </button>
            <ul aria-hidden="true" hidden>
                <a href="/">Collections</a>
                <a href="/">Men</a>
                <a href="/">Women</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
            </ul>
        </span>
        <a href="/">
            <svg width="138" height="20" viewBox="0 0 138 20">
                <use href="#svg_logo"></use>
            </svg>
        </a>
        <button>
            <span>Open your cart</span>
            <svg width="22" height="20" viewBox="0 0 22 20">
                <use href="#svg_icon-cart"></use>
            </svg>
        </button>
        <button aria-hidden="true">
            <!--
                Might be an accessability concern.
                Hard to tell If visually-impaired people might need to use
                profile picture functionality, and because of that Im not entirely sure
                whether to include a button with exactly the same title as the previous one,
                hence why I've decided to put `aria-hidden="true"`.
            -->
            <span>Open your cart</span>
            <img src="./images/image-avatar.png" alt=""
                    width="44" height="44">
        </button>
    </nav>
</header>