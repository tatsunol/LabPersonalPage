<template>
  <section>
    <h1 class="title">Biography / 略歴</h1>
    <ul>
      <li
        class="has-text-weight-bold"
        v-for="bio in sortedBioItems"
        v-bind:key="bio.id"
        v-if="bio.ongoing"
      >
        <time :datetime="bio.datetime">{{bio.datetimeStr}}</time>
        : {{bio.text}}
      </li>
      <li v-for="bio in sortedBioItems" v-bind:key="bio.id" v-if="!bio.ongoing">
        <time :datetime="bio.datetime">{{bio.datetimeStr}}</time>
        : {{bio.text}}
      </li>
    </ul>
  </section>
</template>

<script>
import bioItemData from "static/biography.json";
export default {
  data: function() {
    return {
      bioItems: bioItemData
    };
  },
  computed: {
    sortedBioItems: function() {
      var list = this.bioItems.slice();
      return list.sort(function(a, b) {
        if (a.datetime < b.datetime) return 1;
        if (a.datetime > b.datetime) return -1;
        return 0;
      });
    }
  }
};
</script>


<style>
</style>