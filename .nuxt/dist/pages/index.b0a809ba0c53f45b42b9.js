webpackJsonp([0],{"+ZU5":function(e,t,i){var n=i("o5g0");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("28214e47",n,!1,{sourceMap:!1})},"+ptz":function(e,t,i){"use strict";var n=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"header"},[t("profile",{staticClass:"profile"})],1),t("article",{staticClass:"main"},[t("biography",{staticClass:"section-component"}),t("publication",{staticClass:"section-component"}),t("award",{staticClass:"section-component"}),t("other",{staticClass:"section-component"})],1)])};n._withStripped=!0;var a={render:n,staticRenderFns:[]};t.a=a},"+zCd":function(e,t,i){"use strict";var n=i("/L8i"),a=i.n(n);t.a={data:function(){return{otherItems:a.a}}}},"/L8i":function(e,t){e.exports=[{text:"豊岡市デマンド型交通サービス実証実験 予約・配車システム構築",link:"http://www.city.toyooka.lg.jp/www/contents/1506990414785/index.html",datetime:"2017-09",datetimeStr:"2017.09"},{text:"マルチメディア,分散,協調とモバイル(DICOMO 2017)シンポジウム 学生ボランティア",datetime:"2017-06",datetimeStr:"2017.06"},{text:"enPiT-SecCap 演習 TA (Teaching Assistant)",link:"https://www.seccap.jp/gs/index.html",datetime:"2017-04",datetimeStr:"2017.04 ~ 2018.03"},{text:"分野・地域を越えた実践的情報教育協働ネットワーク(enPiT) セキュリティ分野 (SecCap) 修了",link:"https://www.seccap.jp/gs/index.html",datetime:"2017-03",datetimeStr:"2017.03"},{text:"情報処理技術者試験 情報セキュリティスペシャリスト 合格",datetime:"2016-12",datetimeStr:"2016.12"},{text:"セキュリティキャンプ全国大会2015 修了",link:"https://www.ipa.go.jp/jinzai/camp/2015/zenkoku2015.html",datetime:"2015-08",datetimeStr:"2015.08"}]},"/TYz":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("6rFU"),a=i("+ptz"),s=!1;var o=function(e){s||i("bfSe")},r=i("VU/8")(n.a,a.a,!1,o,null,null);r.options.__file="pages/index.vue",t.default=r.exports},"1ZUi":function(e,t){e.exports=[{datetime:"2018-04",datetimeStr:"2018.04 ~",text:"大阪大学 大学院情報科学研究科 博士後期課程"},{datetime:"2018-04",datetimeStr:"2018.04 ~",text:"日本学術振興会 特別研究員 DC1"},{datetime:"2018-03",datetimeStr:"2018.03",text:"大阪大学 大学院情報科学研究科 博士前期課程 修了"},{datetime:"2017-12",datetimeStr:"2017.12",text:"大阪大学 社会経済研究所 RA (Research Assistant)"},{datetime:"2017-08",datetimeStr:"2017.08",text:"Space-Time Engineering インターンシップ"},{datetime:"2016-03",datetimeStr:"2016.03",text:"大阪大学 基礎工学部 情報科学科 卒"}]},"4qz8":function(e,t,i){e.exports=i.p+"img/profile.08d727a.jpg"},"6rFU":function(e,t,i){"use strict";var n=i("eF6x"),a=i("ZTWV"),s=i("oa6N"),o=i("kHw/"),r=i("M4My"),c=i("hf6E");t.a={components:{Research:n.default,Profile:a.a,Biography:s.a,Publication:o.a,Award:r.a,Other:c.a}}},"8bml":function(e,t,i){"use strict";t.a={props:["paper"],data:function(){return{isInternational:!1,authorsBeforeMe:[],authorMe:"",authorsAfterMe:[],datetimeStr:"",type:"",page:""}},created:function(){this.paper.type.indexOf("poster")>=0?this.type="[Poster]":this.paper.type.indexOf("demo")>=0?this.type="[Demo]":this.paper.type.indexOf("international_conference")>=0?this.type="in Proceedings of":this.type="";this.paper.type.indexOf("international")>=0&&(this.isInternational=!0);var e,t,i,n,a,s=!0;for(var o in this.paper.authors){var r=this.paper.authors[o];r.indexOf("天野 辰哉")>=0||r.toLowerCase().indexOf("tatsuya amano")>=0?(s=!1,this.authorMe=r):s?this.authorsBeforeMe.push(r):this.authorsAfterMe.push(r)}this.datetimeStr=(e=this.paper.datetime,t=this.isInternational,i=new Date(e),n=i.getFullYear(),a=i.getMonth(),t?["January","February","March","April","May","June","July","August","September","October","November","December"][a]+", "+n:n+"年"+(a+1)+"月")}}},BJd7:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"li[data-v-0ea44e21]{list-style-position:inside;list-style-type:decimal;margin-bottom:8px;padding-left:1em;text-indent:-1em}.publication-header[data-v-0ea44e21]{font-size:27.2px;font-size:1.7rem;margin:10px 0}",""])},CAaj:function(e,t,i){var n=i("XV5E");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("cf533bae",n,!1,{sourceMap:!1})},CDeh:function(e,t,i){var n=i("Sv89");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("341648cc",n,!1,{sourceMap:!1})},G16A:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("h1",{staticClass:"section-header"},[e._v("Biography / 略歴")]),i("ul",e._l(e.sortedBioItems,function(t){return i("li",{key:t.id},[i("time",{attrs:{datetime:t.datetime}},[e._v(e._s(t.datetimeStr))]),e._v(" : "+e._s(t.text)+"\n        ")])}))])};n._withStripped=!0;var a={render:n,staticRenderFns:[]};t.a=a},GIzL:function(e,t){},GWqw:function(e,t,i){var n=i("I7kV");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("5c44dc0b",n,!1,{sourceMap:!1})},I7kV:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"ul[data-v-5047af92]{list-style-type:disc;list-style-position:inside;padding-left:1em;text-indent:-1em}li[data-v-5047af92]{margin:2px 0}",""])},IEi5:function(e,t,i){"use strict";var n=function(){var e=this.$createElement;this._self._c;return this._m(0)};n._withStripped=!0;var a={render:n,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("section",[t("h1",{staticClass:"section-header"},[this._v("Research / 研究")]),t("p")])}]};t.a=a},M4My:function(e,t,i){"use strict";var n=i("y8Q7"),a=i("u7Zu"),s=!1;var o=function(e){s||i("GWqw")},r=i("VU/8")(n.a,a.a,!1,o,"data-v-5047af92",null);r.options.__file="components/Award.vue",t.a=r.exports},Nfjr:function(e,t,i){var n=i("ziRB");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("24984897",n,!1,{sourceMap:!1})},OHdB:function(e,t){e.exports=[{datetime:"2017.06",authors:["濱谷 尚志","梶田 宗吾","山田 遊馬","天野 辰哉","成元 椋祐","本田 美輝","吉川 寛樹","吉貞 洸"],text:"深層学習を用いた論文表題の評価・生成システム",event:"マルチメディア、分散、協調とモバイル(DICOMO2016) シンポジウム",awardinfo:"ナイトテクニカルセッション 2位",link:"http://www.dicomo.org/2017/2017/commendation/index.html"},{datetime:"2016.10",authors:["天野 辰哉","梶田 宗吾","山口 弘純","東野 輝夫","高井 峰生"],text:"3次元空間上の電波強度推定・可視化システム",event:"第24回マルチメディア通信と分散処理(DPS)ワークショップ",awardinfo:"優秀デモンストレーション賞",link:"http://www.dpsws.org/2016/?%E5%8F%97%E8%B3%9E%E8%80%85%E4%B8%80%E8%A6%A7"},{datetime:"2016.05",authors:["天野 辰哉","梶田 宗吾","山口 弘純","東野 輝夫","浦山 博史","高井 峰生"],text:"参加型ビーコンセンシングによる3次元空間上のWi-Fiデータベース構築と可視化",event:"第79回モバイルコンピューティングとパーベイシブシステム(MBL)研究会",awardinfo:"優秀発表賞",link:"http://www.ishilab.net/mbl/excellent/2016/"}]},Sv89:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"",""])},XV5E:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"ul[data-v-223da3a8]{list-style-position:inside;list-style-type:disc}li[data-v-223da3a8]{margin:2px 0}",""])},ZTWV:function(e,t,i){"use strict";var n=i("+zCd"),a=i("s5SY"),s=!1;var o=function(e){s||i("+ZU5")},r=i("VU/8")(n.a,a.a,!1,o,"data-v-010534c4",null);r.options.__file="components/Profile.vue",t.a=r.exports},"ZYX/":function(e,t,i){"use strict";var n=i("8bml"),a=i("cpn8"),s=!1;var o=function(e){s||i("Nfjr")},r=i("VU/8")(n.a,a.a,!1,o,null,null);r.options.__file="components/PaperListItem.vue",t.a=r.exports},bfSe:function(e,t,i){var n=i("zftM");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("51300b9c",n,!1,{sourceMap:!1})},cTVX:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("h1",{staticClass:"section-header"},[e._v("Publications / 業績")]),i("section",[i("h2",{staticClass:"publication-header"},[e._v("Jornals / 論文誌")]),i("ul",e._l(e.sortedJornals,function(e){return i("li",{key:e.title},[i("paper-list-item",{attrs:{paper:e}})],1)}))]),i("section",[i("h2",{staticClass:"publication-header"},[e._v("International Conferences / 国際会議")]),i("ul",e._l(e.sortedInternationalConfs,function(e){return i("li",{key:e.title},[i("paper-list-item",{attrs:{paper:e}})],1)}))]),i("section",[i("h2",{staticClass:"publication-header"},[e._v("Domestic Conferences / 国内研究会等")]),i("ul",e._l(e.sortedDomesticConfsReviewed,function(e){return i("li",{key:e.title},[i("paper-list-item",{attrs:{paper:e}})],1)}))]),i("section",[i("h2",{staticClass:"publication-header"},[e._v("Domestic Conferences (Non Peer Reviewed) / 国内研究会等 (査読なし)")]),i("ul",e._l(e.sortedDomesticConfsNonReviewed,function(e){return i("li",{key:e.title},[i("paper-list-item",{attrs:{paper:e}})],1)}))])])};n._withStripped=!0;var a={render:n,staticRenderFns:[]};t.a=a},cpn8:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",[e._l(e.authorsBeforeMe,function(t){return i("span",{key:t,staticClass:"author"},[e._v(e._s(t))])}),i("span",{staticClass:"author me"},[e._v(e._s(e.authorMe))]),i("span",{staticClass:"author"}),e._l(e.authorsAfterMe,function(t){return i("span",{key:t,staticClass:"author"},[e._v(e._s(t))])}),i("span",{staticClass:"papertitle"},[e._v('"'+e._s(e.paper.title)+'"')]),i("span",{staticClass:"info"},[e._v(e._s(e.type)+" "+e._s(e.paper.publishedin))]),"volume"in e.paper?i("span",{staticClass:"volume",attrs:{"&&":"","paper.volume":"","!":"null"}},[e._v("Vol."+e._s(e.paper.volume))]):e._e(),"issue"in e.paper?i("span",{staticClass:"issue",attrs:{"&&":"","paper.issue":"","!":"null"}},[e._v("No."+e._s(e.paper.issue))]):e._e(),"pages"in e.paper&&null!=e.paper.pages?i("span",{staticClass:"page"},[e._v("pp."+e._s(e.paper.pages))]):e._e(),"location"in e.paper?i("span",{staticClass:"location"},[e._v(e._s(e.paper.location))]):e._e(),i("time",{staticClass:"time",attrs:{datetime:e.paper.datetime}},[e._v(e._s(e.datetimeStr))]),i("span",[e._v(".")])],2)};n._withStripped=!0;var a={render:n,staticRenderFns:[]};t.a=a},eAgF:function(e,t,i){"use strict";var n=i("qODE"),a=i.n(n),s=i("ZYX/");function o(e){return e.sort(function(e,t){return e.datetime<t.datetime?1:e.datetime>t.datetime?-1:0})}t.a={data:function(){return{jornals:a.a.jornals,internationalConfs:a.a.international_conferences,domesticConfs:""}},created:function(){this.domesticConfsReviewed=a.a.domestic_conferences.filter(function(e){return e.peer_reviewed}),this.domesticConfsNonReviewed=a.a.domestic_conferences.filter(function(e){return!e.peer_reviewed})},computed:{sortedJornals:function(){return o(this.jornals.slice())},sortedInternationalConfs:function(){return o(this.internationalConfs.slice())},sortedDomesticConfsReviewed:function(){return o(this.domesticConfsReviewed.slice())},sortedDomesticConfsNonReviewed:function(){return o(this.domesticConfsNonReviewed.slice())}},components:{PaperListItem:s.a}}},eF6x:function(e,t,i){"use strict";var n=i("GIzL"),a=i.n(n),s=i("IEi5"),o=!1;var r=function(e){o||i("CDeh")},c=i("VU/8")(a.a,s.a,!1,r,null,null);c.options.__file="components/Research.vue",t.default=c.exports},hf6E:function(e,t,i){"use strict";var n=i("ucf3"),a=i("l8o1"),s=!1;var o=function(e){s||i("x885")},r=i("VU/8")(n.a,a.a,!1,o,"data-v-dd77ba76",null);r.options.__file="components/Other.vue",t.a=r.exports},"kHw/":function(e,t,i){"use strict";var n=i("eAgF"),a=i("cTVX"),s=!1;var o=function(e){s||i("mBrU")},r=i("VU/8")(n.a,a.a,!1,o,"data-v-0ea44e21",null);r.options.__file="components/Publication.vue",t.a=r.exports},l8o1:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("h1",{staticClass:"section-header"},[e._v("Others / その他")]),i("ul",e._l(e.sortedOtherItems,function(t){return i("li",{key:t.text},[i("time",{attrs:{datetime:t.datetime}},[e._v(e._s(t.datetimeStr))]),e._v(" : \n            "),i("a",{attrs:{href:t.link}},[e._v(e._s(t.text))])])}))])};n._withStripped=!0;var a={render:n,staticRenderFns:[]};t.a=a},mBrU:function(e,t,i){var n=i("BJd7");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("7f368727",n,!1,{sourceMap:!1})},mVH2:function(e,t,i){"use strict";var n=i("1ZUi"),a=i.n(n);t.a={data:function(){return{bioItems:a.a}},computed:{sortedBioItems:function(){return this.bioItems.slice().sort(function(e,t){return e.datetime<t.datetime?1:e.datetime>t.datetime?-1:0})}}}},o5g0:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"ul[data-v-010534c4]{list-style:none}li[data-v-010534c4]{margin:5px 0;font-size:20.8px;font-size:1.3rem}.image[data-v-010534c4]{width:70%}.profile[data-v-010534c4]{padding-right:40px}.name[data-v-010534c4]{letter-spacing:1.2;font-size:32px;font-size:2rem;line-height:1.2}.language-nav[data-v-010534c4]{font-weight:700}.address[data-v-010534c4],.affiliation[data-v-010534c4]{margin-top:12px}",""])},oa6N:function(e,t,i){"use strict";var n=i("mVH2"),a=i("G16A"),s=!1;var o=function(e){s||i("CAaj")},r=i("VU/8")(n.a,a.a,!1,o,"data-v-223da3a8",null);r.options.__file="components/Biography.vue",t.a=r.exports},qODE:function(e,t){e.exports={jornals:[{authors:["天野 辰哉","梶田 宗吾","山口 弘純","東野 輝夫","高井 峰生"],title:"クラウドソーシングと3次元電波伝搬シミュレーションの併用による効率的なWi-Fi電波データベース構築",etitle:"",publishedin:"情報処理学会論文誌(IPSJ Jornal)",volume:59,issue:2,pages:"450-461",datetime:" 2018-02",type:"jornal",peer_reviewed:!0}],international_conferences:[{authors:["Shugo Kajita","Hiroki Iwasaki","Tatsuya Amano","Hirozumi Yamaguchi","Teruo Higashino","Mineo Takai"],title:"Deployment Support of Temporary Wi-Fi Access Points in Urban Environment",publishedin:"the 19th ACM International Workshop on Mobile Computing Systems and Applicatoins (HotMobile 2018)",pages:null,location:"USA",datetime:"2018-02",type:"international_conference_poster",peer_reviewed:!0},{authors:["Tatsuya Amano","Shugo Kajita","Hirozumi Yamaguchi","Teruo Higashino","Mineo Takai"],title:"A Crowdsourcing and Simulation based Approach for Fast and Accurate Wi-Fi Radio Map Construction in Urban Environment",publishedin:"IFIP Networking 2017 (Networking 2017)",pages:"1-9",location:"Sweden",datetime:"2017-06",type:"international_conference_proc",peer_reviewed:!0},{authors:["Shugo Kajita","Tatsuya Amano","Hirozumi Yamaguchi","Teruo Higashino","Mineo Takai"],title:"A New Architecture of Wi-Fi APs with Prediction-based Autonomous Channel Migration Function",publishedin:"the 18th ACM International Workshop on Mobile Computing Systems and Applicatoins (HotMobile 2017)",pages:null,location:"USA",datetime:"2017-02",type:"international_conference_poster",peer_reviewed:!0},{authors:["Tatsuya Amano","Shugo Kajita","Hirozumi Yamaguchi","Teruo Higashino","Mineo Takai"],title:"Construction and Visualization of 3D Wi-Fi Radio Map in Urban Environment",publishedin:"the 18th ACM International Workshop on Mobile Computing Systems and Applicatoins (HotMobile 2017)",pages:null,location:"USA",datetime:"2017-02",type:"international_conference_demo",peer_reviewed:!0},{authors:["Shugo Kajita","Tatsuya Amano","Hirozumi Yamaguchi","Teruo Higashino","Mineo Takai"],title:"Wi-Fi Channel Selection Based on Urban Interference Measurement",publishedin:"the 13th International Conference on Mobile and Ubiquitous Systems: Computing, Networking and Services (MobiQuitous 2016)",pages:"143-150",location:"Japan",datetime:"2016-11",type:"international_conference_proc",peer_reviewed:!0}],domestic_conferences:[{authors:["梶田 宗吾","岩崎 博生","天野 辰哉","山口 弘純","東野 輝夫","高井 峰生"],title:"通信混雑環境における都市Wi-Fiアクセスポイントの追加設置支援",publishedin:"情報処理学会 第80回全国大会",pages:null,location:"東京",datetime:"2018-03",type:"domestic_conference_non_reviewed",peer_reviewed:!1},{authors:["天野 辰哉","梶田 宗吾","山口 弘純","東野 輝夫","高井 峰生"],title:"都市Wi-Fiアクセスポイントの3次元位置データベース自動構築とその活用",publishedin:"情報処理学会 第80回全国大会",pages:null,location:"東京",datetime:"2018-03",type:"domestic_conference_non_reviewed",peer_reviewed:!1},{authors:["岩崎 博生","天野 辰哉","梶田 宗吾","山口 弘純","東野 輝夫","高井 峰生"],title:"都市部における公衆Wi-Fiのキャパシティ評価のためのシナリオ構築",publishedin:"モバイルネットワークとアプリケーション(MoNA)研究会",pages:"329-334",location:"東京",datetime:"2018-02",type:"domestic_conference_non_reviewed",peer_reviewed:!1},{authors:["梶田 宗吾","天野 辰哉","山口 弘純","東野 輝夫","高井 峰生"],title:"Scenargieシミュレーションに基づく通信品質予測機能を用いた自律 Wi-Fi チャネル制御手法",publishedin:"Scenargie Workshop 2017",pages:null,location:"東京",datetime:"2017-10",type:"domestic_conference_non_reviewed_poster",peer_reviewed:!1},{authors:["天野 辰哉","梶田 宗吾","山口 弘純","東野 輝夫","高井 峰生"],title:"クラウドソーシングとScenargie電波伝搬シミュレーションに基づくWi-Fi電波強度推定システム",publishedin:"Scenargie Workshop 2017",pages:null,location:"東京",datetime:"2017-10",type:"domestic_conference_non_reviewed_poster",peer_reviewed:!1},{authors:["梶田 宗吾","天野 辰哉","山口 弘純","東野 輝夫","高井 峰生"],title:"通信品質予測に基づく自律 Wi-Fi チャネル制御手法",publishedin:"マルチメディア,分散,協調とモバイル(DICOMO 2017)シンポジウム",pages:"1565-1574",location:"北海道",datetime:"2017-06",type:"domestic_conference_reviewed",peer_reviewed:!0},{authors:["天野 辰哉","梶田 宗吾","山口 弘純","東野 輝夫","高井 峰生"],title:"クラウドソーシングと3次元地理空間情報に基づくWi-Fiデータベースの構築と活用",publishedin:"マルチメディア,分散,協調とモバイル(DICOMO 2017)シンポジウム",pages:"727-737",location:"北海道",datetime:"2017-06",type:"domestic_conference_reviewed",peer_reviewed:!0},{authors:["梶田 宗吾","天野 辰哉","山口 弘純","東野 輝夫","高井 峰生"],title:"Wi-Fi過密環境における自律チャネル制御へ向けた通信品質予測手法",publishedin:"情報処理学会 第79回全国大会",pages:null,location:"名古屋",datetime:"2017-03",type:"domestic_conference_non_reviewed",peer_reviewed:!1},{authors:["天野 辰哉","梶田 宗吾","山口 弘純","東野 輝夫","高井 峰生"],title:"都市環境における3次元空間上のWi-Fiデータベースの構築",publishedin:"情報処理学会 第79回全国大会",pages:null,location:"名古屋",datetime:"2017-03",type:"domestic_conference_non_reviewed",peer_reviewed:!1},{authors:["梶田 宗吾","天野 辰哉","山口 弘純","東野 輝夫","高井 峰生"],title:"Wi-Fiチャネル選択手法のAP分布調査に基づくチャネル占有モデルによるシミュレーション評価",publishedin:"Scenargie Workshop 2016",pages:null,location:"東京",datetime:"2016-10",type:"domestic_conference_non_reviewed_poster",peer_reviewed:!1},{authors:["天野 辰哉","梶田 宗吾","山口 弘純","東野 輝夫","高井 峰生"],title:"Scenargieを用いた都市環境におけるWi-Fi電波強度推定システムの構築",publishedin:"Scenargie Workshop 2016",pages:null,location:"東京",datetime:"2016-10",type:"domestic_conference_non_reviewed_poster",peer_reviewed:!1},{authors:["梶田 宗吾","天野 辰哉","山口 弘純","東野 輝夫","高井 峰生"],title:"AP 分布調査に基づく Wi-Fi チャネル占有モデルによるチャネル選択手法の評価",publishedin:"第24回マルチメディア通信と分散処理(DPS)ワークショップ",pages:null,location:"秋田",datetime:"2016-10",type:"domestic_conference_non_reviewed_poster",peer_reviewed:!0},{authors:["天野 辰哉","梶田 宗吾","山口 弘純","東野 輝夫","高井 峰生"],title:"3次元空間上の電波強度推定・可視化システム",publishedin:"第24回マルチメディア通信と分散処理(DPS)ワークショップ",pages:null,location:"秋田",datetime:"2016-10",type:"domestic_conference_reviewed_demo",peer_reviewed:!0},{authors:["梶田 宗吾","天野 辰哉","山口 弘純","東野 輝夫","高井 峰生"],title:"都市部におけるWi-Fi過密環境の分析と機械学習に基づくチャネル選択手法の検討",publishedin:"電子情報通信学会ソサイエティ大会",pages:null,location:"北海道",datetime:"2016-09",type:"domestic_conference_non_reviewed",peer_reviewed:!1},{authors:["梶田 宗吾","天野 辰哉","山口 弘純","東野 輝夫","高井 峰生"],title:"都市実環境観測データに基づくWi-Fi通信性能予測手法の評価",publishedin:"マルチメディア,分散,協調とモバイル(DICOMO 2016)シンポジウム",pages:"99-104",location:"三重",datetime:"2016-07-06",type:"domestic_conference_reviewed",peer_reviewed:!0},{authors:["天野 辰哉","梶田 宗吾","山口 弘純","東野 輝夫","浦山 博史","高井 峰生"],title:"参加型ビーコンセンシングによる3次元空間上のWi-Fiデータベース構築と可視化",publishedin:"第79回モバイルコンピューティングとパーベイシブシステム(MBL)研究会",pages:null,location:"沖縄",datetime:"2016-05-26",type:"domestic_conference_non_reviewed",peer_reviewed:!1}]}},s5SY:function(e,t,i){"use strict";var n=function(){var e=this.$createElement,t=this._self._c||e;return t("section",[t("img",{staticClass:"image",attrs:{src:i("4qz8")}}),t("h1",{staticClass:"name"},[t("ruby",[t("rb",[this._v("天野 辰哉")]),t("rt",[this._v("アマノ タツヤ")])],1),t("br"),this._v("\n        Tatsuya AMANO\n    ")]),this._m(0),this._m(1)])};n._withStripped=!0;var a={render:n,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"affiliation"},[t("ul",[t("li",[this._v("大阪大学 大学院情報科学研究科"),t("br"),this._v("情報ネットワーク学専攻"),t("br"),this._v("博士後期課程１年")]),t("li",[t("a",{attrs:{href:"https://www-higashi.ist.osaka-u.ac.jp"}},[this._v("モバイルコンピューティング講座"),t("br"),this._v("東野研究室")]),this._v(" 所属")]),t("li",[this._v("日本学術振興会特別研究員 (DC1)")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"address"},[t("h2",[this._v("Address")]),t("ul",[t("li",[this._v("〒565-0871"),t("br"),this._v("大阪府吹田市山田丘1−5"),t("br"),this._v("情報系総合研究棟A棟502")]),t("li",[this._v("Email: t-amano [at] ist.osaka-u.ac.jp")])])])}]};t.a=a},u7Zu:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",[i("h1",{staticClass:"section-header"},[e._v("Awards / 受賞")]),i("ul",e._l(e.sortedAwardItems,function(t){return i("li",{key:t.text},[e._v("\n            "+e._s(t.datetime)+' : \n            "'),i("a",{attrs:{href:t.link}},[e._v(e._s(t.text))]),e._v('",\n            '+e._s(t.event)+", \n            "+e._s(t.awardinfo)+"\n        ")])}))])};n._withStripped=!0;var a={render:n,staticRenderFns:[]};t.a=a},ucf3:function(e,t,i){"use strict";var n=i("/L8i"),a=i.n(n);t.a={data:function(){return{otherItems:a.a}},computed:{sortedOtherItems:function(){return this.otherItems.slice().sort(function(e,t){return e.datetime<t.datetime?1:e.datetime>t.datetime?-1:0})}}}},vtpx:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"ul[data-v-dd77ba76]{list-style-position:inside;list-style-type:disc}li[data-v-dd77ba76]{margin:2px 0}",""])},x885:function(e,t,i){var n=i("vtpx");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("6f32b10d",n,!1,{sourceMap:!1})},y8Q7:function(e,t,i){"use strict";var n=i("OHdB"),a=i.n(n);t.a={data:function(){return{awards:a.a}},computed:{sortedAwardItems:function(){return function(e){return e.sort(function(e,t){return e.datetime<t.datetime?1:e.datetime>t.datetime?-1:0})}(this.awards.slice())}},created:function(){}}},zftM:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"html{font-size:62.5%}body{color:#444;font-family:-apple-system,BlinkMacSystemFont,Roboto,Droid Sans,Helvetica Neue,\\\\30D2\\30E9\\30AE\\30CE\\89D2\\30B4 ProN W3,Hiragino Kaku Gothic ProN,Arial,\\\\30E1\\30A4\\30EA\\30AA,Meiryo,sans-serif;font-size:14px;font-size:1.4rem;line-height:1.6;padding:16px;background-color:hsla(240,2%,90%,.2)}a:link,a:visited{color:#d03c56;text-decoration:none}.section-component{margin-bottom:24px}.section-header{font-size:23px;font-size:2.3rem;border-left:5px solid #444;padding-left:8px;line-height:1.2;color:#444;margin-bottom:8px}.wrapper{margin:32px auto;width:960px}.header{position:fixed;float:left;width:256px}.main{float:right;width:704px}",""])},ziRB:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,'.author:after{content:", ";font-weight:400;text-decoration:none}.me{font-weight:700;text-decoration:underline}.me:after{content:""}.info:after,.issue:after,.location:after,.page:after,.papertitle:after,.volume:after{content:", "}',""])}});