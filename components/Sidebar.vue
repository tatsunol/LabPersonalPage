<template>
  <section>
    <div>
      <figure class="image is-128x128">
        <img class="is-rounded" src="~static/profile.jpg" />
      </figure>
      <div class="name-affiliation">
        <h1 class="name is-size-5">
          <ruby>
            <rb>天野 辰哉</rb>
          </ruby>
          <br />Tatsuya AMANO
        </h1>
        <section class="affiliation">
          <ul>
            <li>
              大阪大学 大学院情報科学研究科
              <br />情報ネットワーク学専攻
              <br />
              博士後期課程{{grade}}年
            </li>
            <li></li>
            <li>日本学術振興会特別研究員 (DC1)</li>
          </ul>
        </section>
      </div>
    </div>
    <section class="address">
      <h2>Address</h2>
      <ul>
        <li>
          〒565-0871
          <br />大阪府吹田市山田丘1−5
          <br />情報科学研究科A棟502
        </li>
        <li>Email: t-amano [at] ist.osaka-u.ac.jp</li>
      </ul>
    </section>
    <section class="link">
      <p>略歴 / 業績 / 受賞 / その他</p>
      <h2>Links</h2>
      <ul>
        <li>
          <a href="https://www-higashi.ist.osaka-u.ac.jp">モバイルコンピューティング講座 東野研究室</a>
        </li>
      </ul>
    </section>

    <!--
    <div class="language-nav">
      <ul>
        <li>Japanese</li>/
        <li>English</li>
      </ul>
    </div>
    -->
  </section>
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
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-indent: 0;
}
</style>
