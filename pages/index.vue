<template>
  <div class="container">
    <navbar></navbar>

    <article>
      <profile class="section" />
      <biography class="section" id="biography" />
      <publication class="section" id="publication" />
      <award class="section" id="award" />
      <other class="section" id="other" />
    </article>

    <footer class="footer has-background-white">
      <div class="content has-text-grey-light">Copyright © Tatsuya Amano</div>
    </footer>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Research from "~/components/Research.vue";
import Sidebar from "~/components/Sidebar.vue";
import Profile from "~/components/Profile.vue";
import Biography from "~/components/Biography.vue";
import Publication from "~/components/Publication.vue";
import Award from "~/components/Award.vue";
import Other from "~/components/Other.vue";

export default {
  components: {
    Biography,
    Publication,
    Sidebar,
    Profile,
    Award,
    Navbar,
    Other,
  },
};
</script>

<style lang="scss">
$gap: 64px;
$section-padding: 1rem 1rem;
$size-3: 1.5rem;
$block-spacing: 1rem;
$body-font-size: 0.95rem;
@import "../node_modules/bulma/bulma.sass";

.section-title {
  border-left: 8px solid #444;
  padding-left: 8px;
}

.subsection {
  margin-bottom: 1.2rem;
}

.subtitle {
  text-decoration: underline;
  margin-bottom: 0.5rem;
}

body {
  font-family: "Roboto", "Noto Sans JP", Arial, sans-serif;
}

ul {
  list-style-type: square;
  padding-left: 1.5em;
  // list-style-position: inside;
}
ol {
  padding-left: 1.5em;
//  list-style-position: inside;
}

li {
  // line-height: 1.5rem;
  margin-bottom: 0.75rem;
  // padding-left: 1em;
  //text-indent: -1em;
}

a {
  font-weight: bold;
}
</style>
