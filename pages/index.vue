<template>
  <div class="container">
    <div class="columns">
      <article class="column is-four-fifths">
        <!-- <research class="section-component"/> -->
        <!-- <Profile class="section" id="profile" /> -->
        <biography class="section" id="biography" />
        <publication class="section" id="publication" />
        <award class="section" id="award" />
        <other class="section" id="other" />
      </article>
      <aside class="column">
        <sidebar class="section" />
      </aside>
    </div>
  </div>
</template>

<script>
import Profile from "~/components/Profile.vue";
import Research from "~/components/Research.vue";
import Sidebar from "~/components/Sidebar.vue";
import Biography from "~/components/Biography.vue";
import Publication from "~/components/Publication.vue";
import Award from "~/components/Award.vue";
import Other from "~/components/Other.vue";

export default {
  components: {
    Profile,
    Biography,
    Publication,
    Sidebar,
    Award,
    Other
  }
};
</script>

<style lang="scss">
$section-padding: 1rem 1rem;
@import "../node_modules/bulma/bulma.sass";
@import "../node_modules/bulmaswatch/cosmo/_variables.scss";
@import "../node_modules/bulmaswatch/cosmo/_overrides.scss";

.subsection {
  margin-bottom: 36px;
}
ul {
  list-style-type: none;
}
ol {
  list-style-position: inside;
}
li {
  line-height: 1.6rem;
  margin-bottom: 4px;
  padding-left: 1em;
  text-indent: -1em;
}
a {
  font-weight: bold;
}
</style>
