<script>
    import { getButton } from '../lib/utils.js';
    
    function onclick(e) {
        const root = e.currentTarget;
        const t = e.target;

        const button = getButton(t, root);
        if (!button) return;

        console.log(button);
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<header class="header" on:click={onclick}>
    <nav class="nav layout" aria-label="Primary menu">
        <span class="nav__wrapper">
            <button aria-expanded="false" class="js-button"
                    data-action="expand" data-for=".nav__menu">
                <span class="sr-only">Open the menu</span>
                <svg aria-hidden="true" class="button__icon" width="16" height="15" viewBox="0 0 16 15">
                    <use href="#svg_icon-menu"></use>
            </button>
            <ul class="nav__menu link-list" aria-hidden="true" hidden>
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
        </span>
        <a class="header__logo" href="/" aria-hidden="true">
            <svg width="138" height="20" viewBox="0 0 138 20">
                <use href="#svg_logo"></use>
            </svg>
        </a>
        <span class="dropdown">
            <button class="js-button"
                    data-action="expand" data-scope="local"
                    data-for=".dropdown-inner">
                <span class="sr-only">Open your cart</span>
                <svg aria-hidden="true" class="button__icon" width="22" height="20" viewBox="0 0 22 20">
                    <use href="#svg_icon-cart" fill="#69707D" fill-rule="nonzero"></use>
                </svg>
            </button>
            <button class="js-button"
                    data-action="expand" data-scope="local"
                    data-for=".dropdown__inner">
                <span class="sr-only">Open your cart</span>
                <img aria-hidden="true" class="button__icon" src="./images/image-avatar.png"
                     alt="" width="24" height="24">
            </button>
            <div class="dropdown__inner"></div>
        </span>
    </nav>
</header>