<template>
  <section>
    <h1 class="title section-title">Others / その他</h1>
    <ul>
      <li v-for="otherItem in sortedOtherItems" v-bind:key="otherItem.text">
        <time :datetime="otherItem.datetime">{{otherItem.datetimeStr}}</time> :
        <a :href="otherItem.link">{{otherItem.text}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
import otherItems from "static/others.json";

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
      otherItems: otherItems
    };
  },
  computed: {
    sortedOtherItems: function() {
      return sortByDate(this.otherItems.slice());
    }
  }
};
</script>