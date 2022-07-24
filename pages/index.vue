<template>
<div class="wrapper">

    <div class="background">
            <img  class="hex1" src="~/static/hex.svg" alt="hexagon" />
            <img  class="hex2" src="~/static/hex.svg" alt="hexagon" />
            <img  class="hex-s1" src="~/static/hex_s.svg" alt="hexagon" />
            <img  class="hex-s2" src="~/static/hex_ss.svg" alt="hexagon" />
            <img  class="hex-sw" src="~/static/hex_sw.svg" alt="hexagon" />
        <!--
        <div class="hex2">
            <img src="~/static/hex.svg" alt="hexagon" />
        </div>
        -->
    </div>

    <prof />

    <div class="main-wrapper">
        <nav class="main-menu">
            <NuxtLink to="/">About</NuxtLink> / 
            <NuxtLink to="/publications">Publications</NuxtLink> /
            <NuxtLink to="/research">Researches</NuxtLink>
        </nav>
        <post>
            <h2>About</h2>

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

            <div class="hr"></div>  

            <h3>Recent News and Updates</h3>
            <section>
                <ul>
                    <li>Jul. 2022: <a href="https://dicomo.org/">DICOMO2022シンポジウム</a>で2件の発表（共著）</li>
                    <li>Jul. 2022: H. Rizk, T. Amano, H. Yamaguchi and M. Youssef, "Cross-Subject Activity Detection for COVID-19 Infection Avoidance Based on Automatically Annotated IMU Data," in IEEE Sensors Journal, vol. 22, no. 13, pp. 13125-13135, 1 July1, 2022, doi: 10.1109/JSEN.2022.3176291. </li>
                </ul>
                <p>see <a href="./publication">Publications</a></p>
            </section>
       </post>
    </div>

    <div class="lang">
        <a href="">English</a> / <a href="">日本語</a>
    </div>

</div>
</template>

<style lang="scss">

.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.hex1 {
    position:absolute;
    top: -400px;
    left: -650px;
    width: 1100px;
    height: 1100px;
}

.hex-sw {
    position:absolute;
    top: 20px;
    left: 160px;
    width: 484px;
    height: 484px;
}

.hex2 {
    position:absolute;
    bottom: -100px;
    left: 380px;
    width: 316px;
    height: 316px;
}

.hex-s1 {
    position:absolute;
    top: 60px;
    right: 160px;
    width: 111px;
    height: 111px;
}

.hex-s2 {
    position:absolute;
    top: 32px;
    right: 252px;
    width: 69px;
    height: 69px;
}




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