"use strict";(self.webpackChunkenzo_filmes=self.webpackChunkenzo_filmes||[]).push([[745],{5186:function(e,t,n){var s=n(9981),r=n(1441),i=n(1660),o=n(5306),a=n(9555),c=n(184);t.Z=function(e){return e.content.map((function(e,t){return(0,c.jsxs)(o.W,{children:[(0,c.jsx)(o.N,{children:e.slug}),(0,c.jsx)(i.tq,{modules:[s.W_],navigation:!0,slidesPerView:"auto",className:"mySwiper",loop:"true",spaceBetween:30,breakpoints:{0:{slidesPerView:1.15},350:{slidesPerView:1.5},400:{slidesPerView:1.6},460:{slidesPerView:2.1},500:{slidesPerView:2.3},550:{slidesPerView:2.5},600:{slidesPerView:2.8},680:{slidesPerView:3.3},800:{slidesPerView:3.8},900:{slidesPerView:4.2},1080:{slidesPerView:5.3},1300:{slidesPerView:5.8},1400:{slidesPerView:6.2},1500:{slidesPerView:6.5},1600:{slidesPerView:6.8},1700:{slidesPerView:7.5},1800:{slidesPerView:7.5}},children:e.content.map((function(e,t){return(0,c.jsx)(i.o5,{children:(0,c.jsx)(a.mA,{children:(0,c.jsx)(r.Z,{variant:"rounded",sx:{background:"#1C1C1C",width:"200px",height:"250px"}})})},t)}))})]},t)}))}},2030:function(e,t,n){var s=n(9981),r=n(1660),i=n(5306),o=n(2366),a=n(184);t.Z=function(e){var t=e.content;return(0,a.jsxs)(i.W,{children:[(0,a.jsxs)(i.N,{children:[t.slug," ",t.icon]}),(0,a.jsx)(r.tq,{modules:[s.W_,s.oM],grabCursor:!0,navigation:!0,slidesPerView:"auto",className:"mySwiper",spaceBetween:30,loop:"true",lazy:!0,preloadImages:!1,on:{lazyImageReady:function(e){console.log(e)}},breakpoints:{0:{slidesPerView:1.15},350:{slidesPerView:1.5},400:{slidesPerView:1.6},460:{slidesPerView:2.1},500:{slidesPerView:2.3},550:{slidesPerView:2.5},600:{slidesPerView:2.8},680:{slidesPerView:3.3},800:{slidesPerView:3.8},900:{slidesPerView:4.2},1080:{slidesPerView:5.3},1300:{slidesPerView:5.8},1400:{slidesPerView:6.2},1500:{slidesPerView:6.5},1600:{slidesPerView:6.8},1700:{slidesPerView:7.5},1800:{slidesPerView:7.5}},children:t.content.results.map((function(e){return(0,a.jsx)(r.o5,{className:"swiper-lazy",children:(0,a.jsx)(o.Z,{content:t,media:e})},e.id)}))})]})}},5306:function(e,t,n){n.d(t,{N:function(){return c},W:function(){return a}});var s,r,i=n(168),o=n(7691),a=o.ZP.section(s||(s=(0,i.Z)(["\n    width: 100%;\n    margin: 2em 0 2em 0 ;\n   \n\n    svg{\n        width:25px;\n        margin: auto 0\n    }\n    "]))),c=o.ZP.h2(r||(r=(0,i.Z)(["\n        color: #FFFF;\n        margin-bottom: 0.5em;\n        font-size: 2em;\n        font-weight: normal ;\n        display: flex;\n        align-items: center;\n        gap: 0.5em;\n    "])))},5745:function(e,t,n){n.r(t);var s=n(4165),r=n(5861),i=(n(2791),n(1933)),o=n(74),a=n(7692),c=n(6355),l=n(8820),d=n(6856),u=n(8014),w=n(6869),x=n(5984),p=n(5186),g=n(2030),m=n(184);t.default=function(){function e(){return(e=(0,r.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=(0,m.jsx)(l.o$9,{}),e.next=3,w.Z.get("/tv/popular?page=2");case 3:return e.next=5,e.sent.data;case 5:return e.t1=e.sent,e.t2={slug:"Em Alta",icon:e.t0,type:"tv",content:e.t1},e.t3=(0,m.jsx)(d.xki,{}),e.next=10,w.Z.get("/discover/tv?sort_by=popularity.desc&page=1");case 10:return e.next=12,e.sent.data;case 12:return e.t4=e.sent,e.t5={slug:"Recomendados",icon:e.t3,type:"tv",content:e.t4},e.t6=(0,m.jsx)(u.Sw$,{}),e.next=17,w.Z.get("/tv/top_rated");case 17:return e.next=19,e.sent.data;case 19:return e.t7=e.sent,e.t8={slug:"Melhores Avaliados",icon:e.t6,type:"tv",content:e.t7},e.t9=(0,m.jsx)(u.O$m,{}),e.next=24,w.Z.get("/discover/tv?page=2&with_genres=10759");case 24:return e.next=26,e.sent.data;case 26:return e.t10=e.sent,e.t11={slug:"A\xe7\xe3o e Aventura",icon:e.t9,type:"tv",content:e.t10},e.t12=(0,m.jsx)(c.U41,{}),e.next=31,w.Z.get("/discover/tv?&page=2&with_genres=9648");case 31:return e.next=33,e.sent.data;case 33:return e.t13=e.sent,e.t14={slug:"Mist\xe9rio",icon:e.t12,type:"tv",content:e.t13},e.t15=(0,m.jsx)(a.z_D,{}),e.next=38,w.Z.get("/discover/tv?page=2&with_genres=35");case 38:return e.next=40,e.sent.data;case 40:return e.t16=e.sent,e.t17={slug:"Com\xe9dia",type:"tv",icon:e.t15,content:e.t16},e.t18=(0,m.jsx)(u.$TH,{}),e.next=45,w.Z.get("/discover/tv?page=1&with_genres=16");case 45:return e.next=47,e.sent.data;case 47:return e.t19=e.sent,e.t20={slug:"Anima\xe7\xe3o",icon:e.t18,type:"tv",content:e.t19},t=[e.t2,e.t5,e.t8,e.t11,e.t14,e.t17,e.t20],e.abrupt("return",t);case 51:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var t=(0,i.useQuery)({queryKey:["series"],queryFn:function(){return e.apply(this,arguments)},refetchOnWindowFocus:!1});return t.isLoading?(0,m.jsx)(x.Z,{children:(0,m.jsx)(p.Z,{content:[{slug:"Em Alta",content:["","","","","","","","",""]},{slug:"Recomendados",type:"tv",content:["","","","","","","","",""]},{slug:"A\xe7\xe3o",type:"movie",content:["","","","","","","","",""]},{slug:"Aventura",type:"tv",content:["","","","","","","","",""]},{slug:"Terror",type:"movie",content:["","","","","","","","",""]},{slug:"Com\xe9dia",type:"tv",content:["","","","","","","","",""]},{slug:"Document\xe1rios",type:"movie",content:["","","","","","","","",""]}]})}):(0,m.jsx)(x.Z,{children:t.data&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(g.Z,{content:t.data[0]}),(0,m.jsx)(g.Z,{content:t.data[1]}),(0,m.jsx)(o.Z,{offset:.8,children:(0,m.jsx)(g.Z,{content:t.data[2]})}),(0,m.jsx)(o.Z,{offset:.8,children:(0,m.jsx)(g.Z,{content:t.data[3]})}),(0,m.jsx)(o.Z,{offset:.8,children:(0,m.jsx)(g.Z,{content:t.data[4]})}),(0,m.jsx)(o.Z,{offset:.8,children:(0,m.jsx)(g.Z,{content:t.data[5]})}),(0,m.jsx)(o.Z,{offset:.8,children:(0,m.jsx)(g.Z,{content:t.data[6]})})]})})}}}]);
//# sourceMappingURL=745.d83f39ca.chunk.js.map