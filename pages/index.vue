<template>
  <div class="container">
    <navbar>
    </navbar>
    <div class="columns reverse-row-order is-centered">
      <aside class="column is-3">
        <sidebar class="section" />
      </aside>
      <article class="column">
        <!-- <research class="section-component"/> -->
        <!-- <Profile class="section" id="profile" /> -->
        <biography class="section" id="biography" />
        <publication class="section" id="publication" />
        <award class="section" id="award" />
        <other class="section" id="other" />
      </article>
    </div>
    <footer class="footer has-background-white">
      <div class="content has-text-grey-light">Copyright © Tatsuya Amano</div>
    </footer>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Research from "~/components/Research.vue";
import Sidebar from "~/components/Sidebar.vue";
import Biography from "~/components/Biography.vue";
import Publication from "~/components/Publication.vue";
import Award from "~/components/Award.vue";
import Other from "~/components/Other.vue";

export default {
  components: {
    Biography,
    Publication,
    Sidebar,
    Award,
    Navbar,
    Other
  },

};
</script>

<style lang="scss">
$section-padding: 1rem 1rem;
$size-3: 1.5rem;
$block-spacing: 1rem;
$body-font-size: 0.9rem;
@import "../node_modules/bulma/bulma.sass";

.section-title {
  border-left: 8px solid #444;
  padding-left: 8px;
}

.subsection {
  margin-bottom: 24px;
}

ul {
  list-style-type: square;
  list-style-position: inside;
}
ol {
  list-style-position: inside;
}
li {
  line-height: 1.5rem;
  margin-bottom: 0.25rem;
  padding-left: 1em;
  text-indent: -1em;
}
a {
  font-weight: bold;
}

@media screen and (min-width: 767px) {
  .reverse-row-order {
    flex-direction: row-reverse;
  }
}
</style>
