<template>
    <aside class="side">
        <figure>
            <img class="profile-img" src="~static/amano_tatsuya.jpg" alt="Tatsuya Amano / 天野 辰哉">
        </figure>

        <div class="subsection">
            <h1 class="en-name">Tatsuya Amano</h1>
            <h2 class="ja-name">天野 辰哉</h2>
            <p>Assistant Professor, Graduate School of Information Science and Technology, Osaka University</p>
        </div>

        <div class="subsection">
            <h3 class="subsection-header">Address</h3>
            <p>Location: 565-0871, Yamadaoka 1-5, Suita, Osaka, Japan<br/>Email: t-amano [ at ] ist.osaka-u.ac.jp</p>
        </div>

        <div class="subsection">
            <h3 class="subsection-header">Links</h3>
            <ul class="links">
                <li class="link-item"><a href="Google Scholar">Google Scholar</a></li>
                <li class="link-item"><a href="Researchmap">Researchmap</a></li>
                <li class="link-item"><a href="ResearchGate">Researchgate</a></li>
            </ul>
            <figure>
                <a href="https://mc.net.ist.osaka-u.ac.jp/ja/">
                    <img class="logo" width="140" src="~static/mclab-logo.svg" alt="Mobile Computing Lab."/>
                </a>
            </figure>
        </div>

        <div class="subsection">
            <p>Last Update: 24, July 2022</p>
        </div>

    </aside>
</template>

<style lang="scss" scoped>
figure {
    margin: 0;
    padding: 0;
}

.logo {
    margin: 16px 0;
    // background: #dfdfdf;
    // border: 1px solid #dfdfdf;
}

.en-name {
    font-size: 1.5em;
    font-weight: bold;
    margin: 0 0 2px 0;
}

.ja-name {
    font-size: 1.3em;
    font-weight: bold;
    margin: 0;
}

.side {
    padding: 0 32px;
    width: 240px;
}

.subsection {
    margin: 0 0 32px 0;
}

.subsection .subsection-header {
    font-size: 1.1em;
    margin: 0 0 8px 0;
}

.subsection p {
    margin: 8px 0;
}

.profile-img {
    // margin-left: -32px ;
    margin: 16px 0 16px 0;
    width: 180px;
    height: 180px;
    box-shadow: 4px 4px 16px 8px rgba(95, 95, 95, 0.16);
    border-radius: 4px;
    transform: rotate(-5deg);
}

.links {
    margin: 0;
    padding: 0;
    list-style-type: none;
    line-height: 1.5;
}

.link-item {
    margin: 0;
    padding: 0;
}

</style>