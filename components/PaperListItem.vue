<template>
  <span>
    <!--
      <span class="scheduled" v-show="paper.scheduled">[to appear]&nbsp;</span>
      <span class="presentation_type" v-if="type">{{type}}</span>
      <br/>
      -->
    <span class="author">{{ author }}</span>
    <span>:</span>
    <br />
    <span class="papertitle has-text-weight-bold">{{ paper.title }}</span>
    <a
      target="_blank"
      rel="noopener noreferrer"
      v-if="paper.link"
      v-bind:href="paper.link"
    >
      (LINK) <i class="fas fa-external-link-alt"></i>
    </a>
    <br />
    <span
      class="in_proc_of"
      v-if="
        paper.presentation_type != null &&
        paper.presentation_type == 'oral' &&
        paper.international
      "
      >{{ in_proc_of }}</span
    >
    <span class="info">{{ paper.publishedin }},&nbsp;</span>
    <span class="volume" v-if="'volume' in paper && paper.volume != null"
      >Vol.{{ paper.volume }},&nbsp;</span
    >
    <span class="issue" v-if="'issue' in paper && paper.issue != null"
      >No.{{ paper.issue }},&nbsp;</span
    >
    <span class="page" v-if="'pages' in paper && paper.pages != null"
      >pp.{{ paper.pages }},&nbsp;</span
    >
    <span class="location" v-if="'location' in paper"
      >{{ paper.location }},&nbsp;</span
    >
    <time class="time" :datetime="paper.datetime">{{ datetimeStr }}</time>
    <span>.</span>
    <!--
    <span class="other_info" v-if="'other_info' in paper">{{
      paper.other_info
    }}</span>
    -->
  </span>
  <!--
  <span>
    <span class="scheduled" v-show="paper.scheduled">[to appear]&nbsp;</span>
    <span class="presentation_type" v-if="type">{{type}}</span>
    <span class="author" v-for="author in authorsBeforeMe" v-bind:key="author">{{author}},&nbsp;</span>
    <span class="author me">{{authorMe}}</span>
    <span>,&nbsp;</span>
    <span class="author" v-for="author in authorsAfterMe" v-bind:key="author">{{author}},&nbsp;</span>
    <span class="papertitle">"{{paper.title}}",&nbsp;</span>
    <span
      class="in_proc_of"
      v-if="paper.presentation_type=='oral' && paper.international"
    >{{in_proc_of}}&nbsp;</span>
    <span class="info">{{paper.publishedin}},&nbsp;</span>
    <span class="volume" v-if="'volume' in paper && paper.volume !=null">Vol.{{paper.volume}},&nbsp;</span>
    <span class="issue" v-if="'issue' in paper && paper.issue !=null">No.{{paper.issue}},&nbsp;</span>
    <span class="page" v-if="'pages' in paper && paper.pages != null">pp.{{paper.pages}},&nbsp;</span>
    <span class="location" v-if="'location' in paper">{{paper.location}},&nbsp;</span>
    <time class="time" :datetime="paper.datetime">{{datetimeStr}}</time>
    <span>.</span>
  </span>
  -->
</template>

<script>
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
    "December",
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
  props: ["paper"],
  data: function () {
    return {
      author: "",
      authors: [],
      authorsBeforeMe: [],
      authorMe: "",
      authorsAfterMe: [],
      datetimeStr: "",
      type: "",
      page: "",
      in_proc_of: "in Proceedings of",
    };
  },
  created: function () {
    // poster or demo
    if (this.paper.presentation_type == "poster") {
      this.type = "[Poster] ";
    } else if (this.paper.presentation_type == "demo") {
      this.type = "[Demo] ";
    } else if (this.paper.presentation_type == "oral") {
      this.type = "";
    } else {
      this.type = "";
    }

    // authors
    this.authors = this.paper.authors;

    var isAuthorsBeforeMe = true;
    for (var i in this.paper.authors) {
      var author = this.paper.authors[i];
      if (i > 0) {
        this.author += ", ";
      }
      this.author += author;
      if (
        author.indexOf("天野 辰哉") >= 0 ||
        author.toLowerCase().indexOf("tatsuya amano") >= 0
      ) {
        isAuthorsBeforeMe = false;
        this.authorMe = author;
      } else if (isAuthorsBeforeMe) {
        this.authorsBeforeMe.push(author);
      } else {
        this.authorsAfterMe.push(author);
      }
    }

    // datetime
    this.datetimeStr = converDatetimeToString(
      this.paper.datetime,
      this.paper.international
    );
  },
};
</script>

<style>
.me {
  font-weight: bold;
  text-decoration: underline;
}
span {
  word-break: break-all;
}
.presentation_type {
  font-weight: bold;
}

.listItem {
  display: inline;
}
.other_info {
  font-weight: bold;
}
</style>

