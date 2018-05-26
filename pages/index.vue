<template>
  <div class="wrapper">

    <div class="header">
      <profile class="profile"/>
      <!--
      <nav class="language-nav">
          <ul>
              <li>Japanese</li>
              <li>English</li>
          </ul>
      </nav>
      -->
    </div>

    <article class="main">
      <!-- <research class="section-component"/> -->
      <biography class="section-component" id="biography"/>
      <publication class="section-component" id="publication"/>
      <award class="section-component" id="award"/>
      <other class="section-component" id="other"/>
    </article>

  </div>
</template>

<script>
import Research from '~/components/Research.vue'
import Profile from '~/components/Profile.vue'
import Biography from '~/components/Biography.vue'
import Publication from '~/components/Publication.vue'
import Award from '~/components/Award.vue'
import Other from '~/components/Other.vue'

export default {
  components: {
    Research,
    Profile,
    Biography,
    Publication,
    Award,
    Other
  }
}
</script>

<style>
html {
  font-size: 62.5%;
}

body {
  color: #444;
  font-family: -apple-system, BlinkMacSystemFont,Roboto,
              'Helvetica Neue',
              'Droid Sans',
              'ヒラギノ角ゴ ProN W3',
              Hiragino Kaku Gothic ProN,
              Arial,
              YuGothicM,
              YuGothic,
              'メイリオ',
              Meiryo,
              sans-serif;
  font-size: 1.4rem;
  line-height: 1.6;
  padding: 16px;
  background-color: #e5e5e633;
}

@font-face {
  font-family: YuGothicM;
  font-weight: normal;
  src: local('YuGothic-Medium'),  /* Mediumを明示的に指定 */
       local('Yu Gothic Medium'), /* Chrome用 */
       local('YuGothic-Regular'); /* Windows8.1ではMediumがないのでRegularを指定 */
}
@font-face {
  font-family: YuGothicM;
  font-weight: bold;
  src: local('YoGothic-Bold'), /* Boldはそのまま */
}

a:link, a:visited {
  color: #d03c56;
  text-decoration: none;
}

.section-component {
  margin-bottom: 24px;
}
.section-header {
  font-size: 2.3rem;
  border-left: 5px solid #444;
  padding-left: 8px;
  line-height: 1.2;
  color: #444;
  margin-bottom: 8px;
}
/*
.section-header {
  font-size: 2.3rem;
  line-height: 1.2;
  color: #444;
  margin-bottom: 8px;
}
.section-header::before {
  content: '# ';
}
*/

.wrapper {
  position: relative;
  margin: 0 auto;
}

@media screen and (min-width: 960px)
{
  body {
    padding: 48px 20px; 
    margin: 0px;
  }
  .wrapper {
    position: relative;
    padding: 0;
    margin: 0 auto;
    width: 916px;
  }

  .header {
    position: fixed;
    float: left;
    padding: 0;
    margin: 0;
    width: 208px;
  }

  .main {
    float: right;
    width: 672px;
    padding: 0;
    margin: 0;
  }
}



</style>
