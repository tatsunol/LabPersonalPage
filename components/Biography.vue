<template>
  <section>
    <h1 class="title section-title">Biography / 略歴</h1>
    <table class="table is-fullwidth">
      <tbody>
        <tr class="has-text-weight-bold" v-for="bio in sortedBioItems" v-bind:key="bio.id" v-if="bio.ongoing">
          <td>
            <time :datetime="bio.datetime">{{bio.datetimeStr}}</time>
          </td>
          <td>:</td>
          <td>
            <span>{{ bio.etext }}</span>
          </td>
        </tr>
 
        <tr v-for="bio in sortedBioItems" v-bind:key="bio.id" v-if="!bio.ongoing">
          <td>
            <time :datetime="bio.datetime">{{bio.datetimeStr}}</time>
          </td>
          <td>:</td>
          <td>
            <span>{{ bio.etext }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <!--

    <ul>
      <li
        class="has-text-weight-bold"
        v-for="bio in sortedBioItems"
        v-bind:key="bio.id"
        v-if="bio.ongoing"
      >
      </li>
      <li v-for="bio in sortedBioItems" v-bind:key="bio.id" v-if="!bio.ongoing">
        <time :datetime="bio.datetime">{{ bio.datetimeStr }}</time>
        : {{ bio.etext }}
      </li>
    </ul>
    -->
  </section>
</template>

<script>
import bioItemData from "static/biography.json";
export default {
  data: function () {
    return {
      bioItems: bioItemData,
    };
  },
  computed: {
    sortedBioItems: function () {
      var list = this.bioItems.slice();
      return list.sort(function (a, b) {
        if (a.datetime < b.datetime) return 1;
        if (a.datetime > b.datetime) return -1;
        return 0;
      });
    },
  },
};
</script>