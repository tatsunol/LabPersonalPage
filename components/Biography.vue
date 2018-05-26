<template>
    <section>
        <h1 class="section-header">Biography / 略歴</h1>
        <ul>
            <li v-for="bio in sortedBioItems" v-bind:key="bio.id">
                <time :datetime="bio.datetime">{{bio.datetimeStr}}</time> : {{bio.text}}
            </li>
        </ul>
    </section>
</template>

<script>
import bioItemData from "static/biography.json"
export default {
    data: function() {
        return {
            bioItems : bioItemData
        }
    },
    computed: {
        sortedBioItems: function() {
            var list = this.bioItems.slice();
            return list.sort(function(a,b) {
                if (a.datetime<b.datetime) return 1;
                if (a.datetime>b.datetime) return -1;
                return 0;
            });
        }
    }
}
</script>


<style scoped>
ul {
    list-style-position: inside;
    list-style-type: disc;
}
li {
    margin: 2px 0;
}
</style>