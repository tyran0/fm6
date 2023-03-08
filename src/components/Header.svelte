<script>
    // BUTTON CLICK HANDLER IMPL.

    // HEADER NAVIGATION HANDLER IMPL.

    // DROPDOWN HANDLER IMPL.
</script>

<header>
    <nav aria-label="Primary menu">
        <div>
            <button aria-expanded="false">
                <span>Open the menu</span>
                <div aria-hidden="true"></div> <!-- SVG Icon will be added later -->
            </button>
            <ul aria-hidden="true" hidden>
                <a href="/">Collections</a>
                <a href="/">Men</a>
                <a href="/">Women</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
            </ul>
            <div aria-hidden="true"></div> <!-- SVG Icon will be added later -->
            <button>
                <span>Open your cart</span>
                <div aria-hidden="true"></div> <!-- SVG Icon will be added later -->
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
        </div>
    </nav>
</header>