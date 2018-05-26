<template>
    <section>
        <h1 class="section-header">Publications / 業績</h1>
        <section>
            <h2 class="publication-header">Jornals / 論文誌</h2>
            <ul>
                <li v-for="paper in sortedJornals" :key="paper.title">
                    <paper-list-item :paper=paper />
                </li>
            </ul>
        </section>
        <section>
            <h2 class="publication-header">International Conferences / 国際会議</h2>
            <ul>
                <li v-for="paper in sortedInternationalConfs" :key="paper.title">
                    <paper-list-item :paper=paper />
                </li>
            </ul>
        </section>
        <section>
            <h2 class="publication-header">Domestic Conferences / 国内研究会等</h2>
            <ul>
                <li v-for="paper in sortedDomesticConfsReviewed" :key="paper.title">
                    <paper-list-item :paper=paper />
                </li>
            </ul>
        </section>
        <section>
            <h2 class="publication-header">Domestic Conferences (Non Peer Reviewed) / 国内研究会等 (査読なし)</h2>
            <ul>
                <li v-for="paper in sortedDomesticConfsNonReviewed" :key="paper.title">
                    <paper-list-item :paper=paper />
                </li>
            </ul>
        </section>
   </section>
</template>

<script>
import publications from "static/publications.json"
import PaperListItem from '~/components/PaperListItem.vue'

function sortByDate(list) {
    return list.sort(function(a,b) {
        if (a.datetime<b.datetime) return 1;
        if (a.datetime>b.datetime) return -1;
        return 0;
    });
}

export default {
    data: function() {
        return {
            jornals: publications.jornals,
            internationalConfs: publications.international_conferences,
            domesticConfs: ""
        }
    },
    created: function () {
        this.domesticConfsReviewed = publications.domestic_conferences.filter(function (item) {
            return item.peer_reviewed;
        });
        this.domesticConfsNonReviewed = publications.domestic_conferences.filter(function (item) {
            return !item.peer_reviewed;
        })
    },
    computed: {
        sortedJornals: function() {
            return sortByDate(this.jornals.slice())
        },
        sortedInternationalConfs: function() {
            return sortByDate(this.internationalConfs.slice())
        },
        sortedDomesticConfsReviewed: function() {
            return sortByDate(this.domesticConfsReviewed.slice())
        },
        sortedDomesticConfsNonReviewed: function() {
            return sortByDate(this.domesticConfsNonReviewed.slice())
        }
    },
    components: {
        PaperListItem
    }
}
</script>

<style scoped>
li {
    list-style-position: inside;
    list-style-type: decimal;
    margin-bottom: 8px;

    padding-left: 1em;
    text-indent: -1em;
}
ul {

}
.publication-header {
    font-size: 1.7rem;
    margin: 10px 0;
}

</style>