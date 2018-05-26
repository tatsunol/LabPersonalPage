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
      <biography class="section-component"/>
      <publication class="section-component"/>
      <award class="section-component"/>
      <other class="section-component"/>
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
  font-family: -apple-system,BlinkMacSystemFont,Roboto,'Droid Sans','Helvetica Neue','ヒラギノ角ゴ ProN W3',Hiragino Kaku Gothic ProN,Arial,'メイリオ',Meiryo,sans-serif;
  font-size: 1.4rem;
  line-height: 1.6;
  padding: 16px;
  background-color: #e5e5e633;
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

.wrapper {
  margin: 32px auto;
  width: 960px;
}

.header {
  position: fixed;
  float: left;
  width: 256px;
}

.main {
  float: right;
  width: 704px;
}
</style>
