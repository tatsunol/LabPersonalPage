<template>
  <section>
    <h1 class="section-header">Publications / 業績</h1>
    <section>
      <h2 class="publication-header">Jornals / 論文誌</h2>
      <ul>
        <li v-for="paper in sortedJornals" :key="paper.title">
          <paper-list-item :paper="paper"/>
        </li>
      </ul>
    </section>
    <section>
      <h2 class="publication-header">International Conferences / 国際会議（口頭発表）</h2>
      <ul>
        <li v-for="paper in sortedInternationalConfs" :key="paper.title">
          <paper-list-item :paper="paper"/>
        </li>
      </ul>
    </section>
    <section>
      <h2 class="publication-header">International Conferences (Demo/Poster) / 国際会議（ポスター・デモ）</h2>
      <ul>
        <li v-for="paper in sortedInternationalConfsPosterDemo" :key="paper.title">
          <paper-list-item :paper="paper"/>
        </li>
      </ul>
    </section>
    <section>
      <h2 class="publication-header">Domestic Conferences / 国内研究会等</h2>
      <ul>
        <li v-for="paper in sortedDomesticConfs" :key="paper.title">
          <paper-list-item :paper="paper"/>
        </li>
      </ul>
    </section>
  </section>
</template>

<script>
import publications from "static/publications.json";
import PaperListItem from "~/components/PaperListItem.vue";

function sortByDate(list) {
  return list.sort(function(a, b) {
    if (a.datetime < b.datetime) return 1;
    if (a.datetime > b.datetime) return -1;
    return 0;
  });
}

export default {
  data: function() {
    return {
      jornals: publications.jornals,
      internationalConfs: [],
      internationalConfsPosterDemo: [],
      domesticConfs: publications.domestic_conferences
    };
  },
  created: function() {
    this.internationalConfs = publications.international_conferences.filter(
      function(item) {
        return item.presentation_type == "oral";
      }
    );
    this.internationalConfsPosterDemo = publications.international_conferences.filter(
      function(item) {
        return item.presentation_type != "oral";
      }
    );
  },
  computed: {
    sortedJornals: function() {
      return sortByDate(this.jornals.slice());
    },
    sortedInternationalConfs: function() {
      return sortByDate(this.internationalConfs.slice());
    },
    sortedInternationalConfsPosterDemo: function() {
      return sortByDate(this.internationalConfsPosterDemo.slice());
    },
    sortedDomesticConfs: function() {
      return sortByDate(this.domesticConfs.slice());
    }
  },
  components: {
    PaperListItem
  }
};
</script>

<style scoped>
li {
  list-style-position: inside;
  list-style-type: decimal;
  margin-bottom: 8px;

  padding-left: 1em;
  text-indent: -1em;
}

.publication-header {
  font-size: 1.7rem;
  margin: 10px 0;
}
</style>