<template>
    <section>
        <div class="profile-wrapper">
            <img class="image" src="~static/profile.jpg">
            <div class="name-affiliation">
                <h1 class="name">
                    <ruby><rb>天野 辰哉</rb><rt>アマノ タツヤ</rt></ruby><br>
                    Tatsuya AMANO
                </h1>
                <section class="affiliation">
                    <ul>
                        <li>大阪大学 大学院情報科学研究科 <br>情報ネットワーク学専攻 <br>博士後期課程１年</li>
                        <li><a href="https://www-higashi.ist.osaka-u.ac.jp">モバイルコンピューティング講座 <br>東野研究室</a> 所属</li>
                        <li>日本学術振興会特別研究員 (DC1)</li>
                    </ul>
                </section>
            </div>
        </div>
        <section class="address">
            <h2>Address</h2>
            <ul>
                <li>〒565-0871 <br> 大阪府吹田市山田丘1−5<br> 情報系総合研究棟A棟502</li>
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
/*
.address ul {
    list-style: disc;
    list-style-position: inside;
    padding-left: 1em;
    text-indent: -1em;
}
*/
br {
    display: none;
}

.image {
    width: 120px;
    margin: 0 auto;
    display: block;
    border-radius: 50%;
}

.name {
    font-size: 2.2rem;
    letter-spacing: 1.2;
    line-height: 1.2;
}
.address {
    margin-bottom: 16px;
}

@media screen and (min-width: 640px) {
    .profile-wrapper {
        width: 640px;
        display: table;
        margin-bottom: 16px;
        border-collapse: separate;
        border-spacing: 16px 0px;
    }
    .image {
        width: 110px;
        border-radius: 50%;
        display: table-cell;
        vertical-align: middle;
    }
    .name-affiliation {
        display: table-cell;
        vertical-align: middle;
    }
}

@media screen and (min-width: 960px) {
    ul {
        list-style: none;
        padding-left: 0em;
        text-indent: 0em;
    }
    .address ul {
        list-style: none;
        padding-left: 0em;
        text-indent: 0em;
    }
    br {
        display: inline;
    }
    li {
        margin: 5px 0;
        font-size: 1.3rem;
    }
    .image {
        width: 160px;
        float: none;
        display: block;
        padding: 0;
        margin: 0;
    }
    .profile-wrapper {
        width: 100%;
        display: block;
        margin: 0;
        padding: 0;
    }
    .name-affiliation {
        display: block;
    }
    .name {
        letter-spacing: 1.2;
        line-height: 1.2;
        font-size: 2.0rem;
        margin-top: 8px;
    }
    .profile-wrapper {
        width: 100%;
    }
    .name-affiliation {
        width: 100%;
    }
    .affiliation {
        display: block;
        margin-top: 16px;
    }
    .address {
        margin-top: 16px;
    }
}
</style>
