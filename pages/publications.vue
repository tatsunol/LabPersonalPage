<template>
<div class="wrapper">
    <prof />

    <div class="main-wrapper">
        <nav class="main-menu">
            <NuxtLink to="/">About</NuxtLink> / 
            <NuxtLink to="/publications">Publications</NuxtLink> /
            <NuxtLink to="/research">Researches</NuxtLink>
        </nav>
        <post>
            <h2>Publications</h2>

            <h3></h3>
            <section>
                See <a href="">researchmap</a> for the latest publications.
            </section>

            <h3>Journal</h3>
            <section>

                <ul>
                    <li>Under Construction</li>
                </ul>
            </section>

            <h3>International Conference</h3>
            <section>

                <ul>
                    <li>Under Construction</li>
                </ul>
            </section>

            <h3>Domestic Conference</h3>
            <section>

                <ul>
                    <li>Under Construction</li>
                </ul>
            </section>

            <h2>Awards</h2>
            <section>
                <ul>
                    <li>Under Construction</li>
                </ul>
            </section>
       </post>
    </div>

    <div class="lang">
        <a href="">English</a> / <a href="">日本語</a>
    </div>

</div>
</template>

<style lang="scss">
body {
    background-color: $bg_color;
    font-family: "Roboto", sans-serif;
    a:link, a:visited {
        color: $primary_color;
    }
}
</style>

<style lang="scss" scoped>
.wrapper {
    margin: 48px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100vh;
}

.main-wrapper {
    height: 100%;
    width: 800px;
}

.main-menu {
    margin-bottom: 8px;
}

.lang {
    position: absolute;
    right: 8px;
    top:8px;
}

</style>

<script>
export default {
	
}
</script>