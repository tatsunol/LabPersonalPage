<template>
  <div>
    <div class="columns is-vcentered">
      <div class="column is-3 is-full-mobile">
        <figure class="image">
          <img class="is-rounded" src="~static/profile.jpg" />
        </figure>
      </div>

      <div class="column">
        <h1 class="is-size-4">天野 辰哉 (Tatsuya AMANO)</h1>
        <section>
          <ul>
            <li>
              大阪大学 大学院情報科学研究科 情報ネットワーク学専攻
              特任助教（常勤）<br />
              Specially Appointed Assistant Professor (full-time), Osaka
              Univeristy
            </li>
          </ul>
        </section>
        <section>
          <h2 class="is-size-6 has-text-weight-bold">Address</h2>
          <ul>
            <li>〒565-0871 大阪府吹田市山田丘1−5 情報科学研究科A棟</li>
            <li>Email: t-amano [at] ist.osaka-u.ac.jp</li>
          </ul>
        </section>
        <section>
          <div class="links">
            <h2 class="is-size-6 has-text-weight-bold">Links</h2>
            <ul>
              <li>
                <a href="http://www.ist.osaka-u.ac.jp/japanese/index.html"
                  >大阪大学大学院情報科学研究科</a
                >
                <span>/</span>
                <a href="https://www-higashi.ist.osaka-u.ac.jp"
                  >モバイルコンピューティング講座（山口研究室）</a
                >
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import others from "static/others.json";
export default {
  data: function () {
    return {
      otherItems: others,
      grade: 0,
    };
  },
  created: function () {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const japaneseYear = month >= 4 && month <= 12 ? year : year - 1;
    this.grade = japaneseYear - 2018 + 1;
  },
};
</script>

<style scoped>
figure {
  max-width: 200px;
  margin: auto;
}
img {
  box-shadow: 10px 10px 30px rgba(18, 47, 61, 0.5),
    -10px -10px 30px rgba(248, 253, 255, 0.9), inset 10px 10px 30px transparent,
    inset -10px -10px 30px transparent;
  transition: box-shadow 0.5s;
}

ul {
  padding-left: 1em;
  list-style: square;
  list-style-position: inside;
  line-height: 1.6rem;
}
li {
  margin: 0px;
  padding-left: 1em;
  text-indent: -1.5em;
}
</style>
