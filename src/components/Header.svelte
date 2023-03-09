<script>
    // BUTTON CLICK HANDLER IMPL.

    // HEADER NAVIGATION HANDLER IMPL.

    // DROPDOWN HANDLER IMPL.
</script>

<header class="header no-overflow">
    <nav class="nav" aria-label="Primary menu">
        <span class="nav__wrapper">
            <button aria-expanded="false" class="button js-button"
                    data-action="expand" data-for=".link-list"
                    data-scope="local">
                <span class="sr-only">Open the menu</span>
                <svg aria-hidden="true" class="button__icon" width="16" height="15" viewBox="0 0 16 15">
                    <use href="#svg_icon-menu"></use>
            </button>
            <span class="link-list" aria-hidden="true">
                <a class="link-list__item" href="/">Collections</a>
                <a class="link-list__item" href="/">Men</a>
                <a class="link=list__item" href="/">Women</a>
                <a class="link=list__item" href="/">About</a>
                <a class="link=list__item" href="/">Contact</a>
            </span>
        </span>
        <a class="header__logo" href="/" aria-hidden="true">
            <svg width="138" height="20" viewBox="0 0 138 20">
                <use href="#svg_logo"></use>
            </svg>
        </a>
        <span class="dropdown">
            <button class="button">
                <span class="sr-only">Open your cart</span>
                <svg aria-hidden="true" class="button__icon" width="22" height="20" viewBox="0 0 22 20">
                    <use href="#svg_icon-cart"></use>
                </svg>
            </button>
            <button class="button">
                <span class="sr-only">Open your cart</span>
                <img aria-hidden="true" class="button__icon" src="./images/image-avatar.png"
                     alt="" width="44" height="44">
            </button>
            <div class="dropdown__inner"></div>
        </span>
    </nav>
</header>