"use strict";(self.webpackChunkenzo_filmes=self.webpackChunkenzo_filmes||[]).push([[745],{5186:function(t,e,n){var s=n(9981),r=n(1441),a=n(1660),o=n(5306),c=n(9555),i=n(184);e.Z=function(t){return t.content.map((function(t,e){return(0,i.jsxs)(o.W,{children:[(0,i.jsx)(o.N,{children:t.slug}),(0,i.jsx)(a.tq,{modules:[s.W_],navigation:!0,slidesPerView:"auto",className:"mySwiper",loop:"true",spaceBetween:20,children:t.content.map((function(t,e){return(0,i.jsx)(a.o5,{className:"media",children:(0,i.jsx)(c.mA,{children:(0,i.jsx)(r.Z,{variant:"rounded",sx:{background:"#1C1C1C",width:"200px",height:"250px"}})})},e)}))})]},e)}))}},2030:function(t,e,n){var s=n(9981),r=n(1660),a=n(5306),o=n(2366),c=n(184);e.Z=function(t){var e=t.content;return(0,c.jsxs)(a.W,{children:[(0,c.jsxs)(a.N,{children:[e.slug," ",e.icon]}),(0,c.jsx)(r.tq,{modules:[s.W_,s.oM],grabCursor:!0,navigation:!0,slidesPerView:"auto",className:"mySwiper",spaceBetween:20,loop:!0,children:e.content.results.map((function(t){return(0,c.jsx)(r.o5,{className:"media",children:(0,c.jsx)(o.Z,{content:e,media:t})},t.id)}))})]})}},5306:function(t,e,n){n.d(e,{N:function(){return i},W:function(){return c}});var s,r,a=n(168),o=n(7691),c=o.ZP.section(s||(s=(0,a.Z)(["\n    width: 100%;\n    margin: 2em 0 2em 0 ;\n    \n\n    svg{\n        width:25px;\n        margin: auto 0;\n        \n    }\n    "]))),i=o.ZP.h2(r||(r=(0,a.Z)(["\n        color: #FFFF;\n        margin-bottom: 0.5em;\n        font-size: 2em;\n        font-weight: normal ;\n        display: flex;\n        align-items: center;\n        gap: 0.5em;\n    "])))},5745:function(t,e,n){n.r(e);var s=n(4165),r=n(5861),a=(n(2791),n(1933)),o=n(74),c=n(7692),i=n(6355),u=n(8820),d=n(6856),l=n(8014),x=n(6869),p=n(5984),g=n(5186),m=n(2030),v=n(184);e.default=function(){function t(){return(t=(0,r.Z)((0,s.Z)().mark((function t(){var e;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=(0,v.jsx)(u.o$9,{}),t.next=3,x.Z.get("/tv/popular?page=2");case 3:return t.next=5,t.sent.data;case 5:return t.t1=t.sent,t.t2={slug:"Em Alta",icon:t.t0,type:"tv",content:t.t1},t.t3=(0,v.jsx)(d.xki,{}),t.next=10,x.Z.get("/discover/tv?sort_by=popularity.desc&page=1");case 10:return t.next=12,t.sent.data;case 12:return t.t4=t.sent,t.t5={slug:"Recomendados",icon:t.t3,type:"tv",content:t.t4},t.t6=(0,v.jsx)(l.Sw$,{}),t.next=17,x.Z.get("/tv/top_rated");case 17:return t.next=19,t.sent.data;case 19:return t.t7=t.sent,t.t8={slug:"Melhores Avaliados",icon:t.t6,type:"tv",content:t.t7},t.t9=(0,v.jsx)(l.O$m,{}),t.next=24,x.Z.get("/discover/tv?page=2&with_genres=10759");case 24:return t.next=26,t.sent.data;case 26:return t.t10=t.sent,t.t11={slug:"A\xe7\xe3o e Aventura",icon:t.t9,type:"tv",content:t.t10},t.t12=(0,v.jsx)(i.U41,{}),t.next=31,x.Z.get("/discover/tv?&page=2&with_genres=9648");case 31:return t.next=33,t.sent.data;case 33:return t.t13=t.sent,t.t14={slug:"Mist\xe9rio",icon:t.t12,type:"tv",content:t.t13},t.t15=(0,v.jsx)(c.z_D,{}),t.next=38,x.Z.get("/discover/tv?page=2&with_genres=35");case 38:return t.next=40,t.sent.data;case 40:return t.t16=t.sent,t.t17={slug:"Com\xe9dia",type:"tv",icon:t.t15,content:t.t16},t.t18=(0,v.jsx)(l.$TH,{}),t.next=45,x.Z.get("/discover/tv?page=1&with_genres=16");case 45:return t.next=47,t.sent.data;case 47:return t.t19=t.sent,t.t20={slug:"Anima\xe7\xe3o",icon:t.t18,type:"tv",content:t.t19},e=[t.t2,t.t5,t.t8,t.t11,t.t14,t.t17,t.t20],t.abrupt("return",e);case 51:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var e=(0,a.useQuery)({queryKey:["series"],queryFn:function(){return t.apply(this,arguments)},refetchOnWindowFocus:!1});return e.isLoading?(0,v.jsx)(p.Z,{children:(0,v.jsx)(g.Z,{content:[{slug:"Em Alta",content:["","","","","","","","",""]},{slug:"Recomendados",type:"tv",content:["","","","","","","","",""]},{slug:"A\xe7\xe3o",type:"movie",content:["","","","","","","","",""]},{slug:"Aventura",type:"tv",content:["","","","","","","","",""]},{slug:"Terror",type:"movie",content:["","","","","","","","",""]},{slug:"Com\xe9dia",type:"tv",content:["","","","","","","","",""]},{slug:"Document\xe1rios",type:"movie",content:["","","","","","","","",""]}]})}):(0,v.jsx)(p.Z,{children:e.data&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m.Z,{content:e.data[0]}),(0,v.jsx)(m.Z,{content:e.data[1]}),(0,v.jsx)(o.Z,{offset:.8,children:(0,v.jsx)(m.Z,{content:e.data[2]})}),(0,v.jsx)(o.Z,{offset:.8,children:(0,v.jsx)(m.Z,{content:e.data[3]})}),(0,v.jsx)(o.Z,{offset:.8,children:(0,v.jsx)(m.Z,{content:e.data[4]})}),(0,v.jsx)(o.Z,{offset:.8,children:(0,v.jsx)(m.Z,{content:e.data[5]})}),(0,v.jsx)(o.Z,{offset:.8,children:(0,v.jsx)(m.Z,{content:e.data[6]})})]})})}}}]);
//# sourceMappingURL=745.e97aa074.chunk.js.map