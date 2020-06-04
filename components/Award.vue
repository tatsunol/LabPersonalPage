<template>
  <section>
    <h1 class="title section-title">Awards / 受賞</h1>
    <ul>
      <li v-for="award in sortedAwardItems" v-bind:key="award.text">
        <time :datetime="award.datetime">{{award.datetimeStr}}</time>
        :
        "{{award.text}}",
        {{award.event}},
        <a
          :href="award.link"
        >{{award.awardinfo}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
import awardItems from "static/awards.json";
function sortByDate(list) {
  return list.sort(function(a, b) {
    if (a.datetime < b.datetime) return 1;
    if (a.datetime > b.datetime) return -1;
    return 0;
  });
}

function converDatetimeToString(originalDatetime, isEnglish) {
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var datetime = new Date(originalDatetime);
  var year = datetime.getFullYear();
  var month = datetime.getMonth();
  if (isEnglish) {
    return monthList[month] + ", " + year;
  } else {
    return year + "年" + (month + 1) + "月";
  }
}

export default {
  data: function() {
    return {
      awards: awardItems
    };
  },
  computed: {
    sortedAwardItems: function() {
      var list = sortByDate(this.awards.slice());
      return list;
    }
  },
  created: function() {}
};
</script>