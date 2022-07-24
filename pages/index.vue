<template>
<div class="wrapper">
    <prof />

    <div class="main-wrapper">
        <nav class="main-menu">
            <a href="">About</a> / 
            <a href="">Publications</a> /
            <a href="">Researches</a>
        </nav>
        <post>
            <h2>About</h2>

<!--
            <h3>Updates</h3>
            <section>
                <ul>
                    <li>
                        2022年5月: 
                    </li>
                    <li>
                        2022年1月: 大阪大学大学院情報科学研究科 情報ネットワーク学専攻 モバイルコンピューティング講座の助教に着任
                    </li>
                </ul>
            </section>
-->

            <h3>Researche Topics</h3>
            <section>
                <p>Smart City Applications / Digital-Twin / Crowdsensing / Spatial Computing</p>
                <p>see <a href="./research">Researches</a></p>
            </section>

            <h3>Experience</h3>
            <section>
                <ul>
                    <li>Jan., 2022 - : Assistant Professor, Graduate School of Information Science and Technology, Osaka Univ.</li>
                    <li>Apr., 2021 - Dec., 2021: Specially Appointed Assistant Professor, Osaka Univ.</li>
                    <li>Apr., 2018 - Mar., 2021: Research Fellowshop for Young Scientists (DC1), Japan Society for the Promotion of Science (JSPS)</li>
                </ul>
            </section>

            <h3>Education</h3>
            <section>
                <ul>
                    <li>Mar., 2021: Ph.D. in Info. Science., Graduate School of Information Science and Technology, Osaka Univ.</li>
                    <li>Mar., 2018: M.E., Graduate School of Information Science and Technology, Osaka Univ.</li>
                    <li>Mar., 2016: B.E., Osaka Univ.</li>
                </ul>
            </section>

            <h3>Experience</h3>
            <section>
                <ul>
                    <li>Jan., 2022 - : Assistant Professor, Graduate School of Information Science and Technology, Osaka Univ.</li>
                    <li>Apr., 2021 - Dec., 2021: Specially Appointed Assistant Professor, Osaka Univ.</li>
                    <li>Apr., 2018 - Mar., 2021: Research Fellowshop for Young Scientists (DC1), Japan Society for the Promotion of Science (JSPS)</li>
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