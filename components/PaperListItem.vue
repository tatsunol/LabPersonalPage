<template>
  <span>
    <span class="presentation_type" v-if="type">{{type}}</span>
    <span class="author" v-for="author in authorsBeforeMe" v-bind:key="author">{{author}}</span>
    <span class="author me">{{authorMe}}</span>
    <span class="author"></span>
    <span class="author" v-for="author in authorsAfterMe" v-bind:key="author">{{author}}</span>
    <span class="papertitle">"{{paper.title}}"</span>
    <span class="in_proceedings_of" v-if="paper.presentation_type=='oral'">{{in_proc_of}}</span>
    <span class="info">{{paper.publishedin}}</span>
    <span class="volume" v-if="'volume' in paper" paper.volume !="null">Vol.{{paper.volume}}</span>
    <span class="issue" v-if="'issue' in paper" paper.issue !="null">No.{{paper.issue}}</span>
    <span class="page" v-if="'pages' in paper && paper.pages != null">pp.{{paper.pages}}</span>
    <span class="location" v-if="'location' in paper">{{paper.location}}</span>
    <time class="time" :datetime="paper.datetime">{{datetimeStr}}</time>
    <span>.</span>
  </span>
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
  props: ["paper"],
  data: function() {
    return {
      isInternational: false,
      authorsBeforeMe: [],
      authorMe: "",
      authorsAfterMe: [],
      datetimeStr: "",
      type: "",
      page: "",
      in_proc_of: "in Proceedings of "
    };
  },
  created: function() {
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

    this.isInternational = this.paper.international;

    // authors
    var isAuthorsBeforeMe = true;
    for (var i in this.paper.authors) {
      var author = this.paper.authors[i];
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
      this.isInternational
    );
  }
};
</script>

<style>
.author::after {
  content: ", ";
  font-weight: normal;
  text-decoration: none;
}

.me {
  font-weight: bold;
  text-decoration: underline;
}
.me::after {
  content: "";
}

.papertitle::after {
  content: ", ";
}
.info::after {
  content: ", ";
}
.page::after {
  content: ", ";
}
.volume::after {
  content: ", ";
}
.issue::after {
  content: ", ";
}
.location::after {
  content: ", ";
}
.presentation_type {
  font-weight: bold;
}
</style>
