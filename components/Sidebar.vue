<template>
<div>
  <div class="">
    <div class="">
      <figure class="image is-128x128">
        <img class="is-rounded" src="~static/profile.jpg" />
      </figure>
    </div>

    <div class="">
        <h1 class="is-size-5">
            天野 辰哉<br/>Tatsuya AMANO
        </h1>
        <section class="affiliation">
          <ul>
            <li>大阪大学 大学院情報科学研究科<br/>情報ネットワーク学専攻<br />博士後期課程{{grade}}年</li>
            <li>日本学術振興会特別研究員 (DC1)</li>
            <li>IEEE/情報処理学会/電子情報通信学会会員</li>
          </ul>
        </section>
    </div>

    <div class="address">
      <h2 class="is-size-6 has-text-weight-bold">Address</h2>
      <ul>
        <li>〒565-0871
          <br />大阪府吹田市山田丘1−5
          <br />情報科学研究科A棟502
        </li>
        <li>Email: t-amano [at] ist.osaka-u.ac.jp</li>
      </ul>
    </div>

    <div class="links">
      <h2 class="is-size-6 has-text-weight-bold">Links</h2>
      <ul>
        <li>
          <a href="https://www-higashi.ist.osaka-u.ac.jp">大阪大学大学院情報科学研究科</a>
        </li>
        <li>
          <a href="http://www.ist.osaka-u.ac.jp/japanese/index.html">東野研究室</a>
        </li>
      </ul>
    </div>
  </div>

</div>
</template>

<script>
import others from "static/others.json";
export default {
  data: function() {
    return {
      otherItems: others,
      grade: 0
    };
  },
  created: function() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const japaneseYear = month >= 4 && month <= 12 ? year : year - 1;
    this.grade = japaneseYear - 2018 + 1;
  }
};
</script>

<style scoped>
div {
  margin-left: 0;
  margin-right: 0;
  padding-left:0px;
  padding-right:0px;
}
ul {
  padding-left: 1em;
  list-style: square;
  list-style-position: inside;
}
li {
  margin: 0px;
  padding-left: 1em;
  text-indent: -1.5em;
}
</style>
