<template>
    <section>
        <img class="image" src="~static/profile.jpg">
        <h1 class="name">
            <ruby><rb>天野 辰哉</rb><rt>アマノ タツヤ</rt></ruby><br>
            Tatsuya AMANO
        </h1>
        <section class="affiliation">
            <ul>
                <li>大阪大学 大学院情報科学研究科<br>情報ネットワーク学専攻<br>博士後期課程１年</li>
                <li><a href="https://www-higashi.ist.osaka-u.ac.jp">モバイルコンピューティング講座<br>東野研究室</a> 所属</li>
                <li>日本学術振興会特別研究員 (DC1)</li>
            </ul>
        </section>
        <section class="address">
            <h2>Address</h2>
            <ul>
                <li>〒565-0871<br>大阪府吹田市山田丘1−5<br>情報系総合研究棟A棟502</li>
                <li>Email: t-amano [at] ist.osaka-u.ac.jp</li>
            </ul>
        </section>
    </section>
</template>

<script>
import others from "static/others.json"
export default {
    data: function() {
        return {
            otherItems: others
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
}

li {
    margin: 5px 0;
    font-size: 1.3rem;
}

.image {
    width: 70%;
}

.profile {
    padding-right: 40px;
}

.name {
    letter-spacing: 1.2;
    font-size: 2.0rem;
    line-height: 1.2;
}

.language-nav {
    font-weight: bold;
}
.affiliation {
    margin-top: 12px;
}
.address {
    margin-top: 12px;
}
</style>