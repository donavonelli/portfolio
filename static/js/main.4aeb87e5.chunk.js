(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){"use strict";t.r(s);var c=t(0),i=t(1),n=t.n(i),a=t(4),r=t.n(a),l=(t(10),t(11),t(12),function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Welcome to Donavon Ellison's Portfolio"}),Object(c.jsx)("p",{children:"This site is currently being built from scratch, as such its a W.I.P."}),Object(c.jsx)("p",{children:"More features to come!"})]})}),d=(t(13),function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"navbar",children:"About Me"}),Object(c.jsx)("h3",{className:"navbar",children:"Projects"}),Object(c.jsx)("h3",{className:"navbar",children:"Resume"}),Object(c.jsx)("h3",{className:"navbar",children:"Contact"})]})}),j=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"About Me"}),Object(c.jsx)("p",{children:"I'm a software engineer based near Atlanta,GA (Acworth, GA to be precise) Before software engineering, I worked customer service jobs and I'm currently serving in the US Army Reserves. I've always been a curious mind ever since i was young and did young kid experiments(My favorite being what happens if i mix all these things together)"})]})},o=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Contact Me"}),Object(c.jsx)("p",{children:"Want to get in contact with me? Great! i'm best reached through my email: donavonelli@yahoo.com"}),Object(c.jsx)("p",{children:"I look forward to speaking with you"})]})},b=t.p+"static/media/dedster.c1422fbf.png",h=t.p+"static/media/makeasip.5ff0b329.png",x=t.p+"static/media/fashion.71a7da19.png",u=t.p+"static/media/giggle.ce0c245b.png",m=t.p+"static/media/wayfarer.ca7cc167.png",O=t.p+"static/media/spades.c6937aef.png",v=(t(14),function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"My Projects"}),Object(c.jsxs)("div",{className:"slideshow-container",children:[Object(c.jsxs)("div",{className:"mySlides fade",children:[Object(c.jsx)("div",{className:"numbertext",children:"1 / 6"}),Object(c.jsx)("img",{src:b,alt:"dedster"}),Object(c.jsx)("div",{className:"text",children:"Dedster"})]}),Object(c.jsxs)("div",{className:"mySlides fade",children:[Object(c.jsx)("div",{className:"numbertext",children:"2 / 6"}),Object(c.jsx)("img",{src:h,alt:"Make-A-Sip"}),Object(c.jsx)("div",{className:"text",children:"Make-A-Sip"})]}),Object(c.jsxs)("div",{className:"mySlides fade",children:[Object(c.jsx)("div",{className:"numbertext",children:"3 / 6"}),Object(c.jsx)("img",{src:x,alt:"Your Fashion Career"}),Object(c.jsx)("div",{className:"text",children:"Your Fashion Career"})]}),Object(c.jsxs)("div",{className:"mySlides fade",children:[Object(c.jsx)("div",{className:"numbertext",children:"4 / 6"}),Object(c.jsx)("img",{src:u,alt:"Giggle Productions"}),Object(c.jsx)("div",{className:"text",children:"Giggle Productions"})]}),Object(c.jsxs)("div",{className:"mySlides fade",children:[Object(c.jsx)("div",{className:"numbertext",children:"5 / 6"}),Object(c.jsx)("img",{src:m,alt:"Wayfarer"}),Object(c.jsx)("div",{className:"text",children:"Wayfarer"})]}),Object(c.jsxs)("div",{className:"mySlides fade",children:[Object(c.jsx)("div",{className:"numbertext",children:"6 / 6"}),Object(c.jsx)("img",{src:O,alt:"Spades"}),Object(c.jsx)("div",{className:"text",children:"Spades"})]})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:"div",children:[Object(c.jsx)("span",{className:"dot",onclick:"currentSlide(1)"}),Object(c.jsx)("span",{className:"dot",onclick:"currentSlide(2)"}),Object(c.jsx)("span",{className:"dot",onclick:"currentSlide(3)"})]})]})}),g=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"My Resume"}),Object(c.jsx)("a",{href:"https://docs.google.com/document/d/1KzDV8gW-DIRi4j7EfH3HyBjecpGeKfl--f-DVLAzorg/edit?usp=sharing",children:"Donavon Ellison's Resume"})]})},f=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Most Recent Site Changes"}),Object(c.jsx)("p",{children:"Patch v1.0.0 - Site is deployed!"}),Object(c.jsx)("p",{children:"Patch v1.0.1 - Added fonts, colors, and aligned elements on the page"}),Object(c.jsx)("p",{children:"Patch v1.1.1 - Added Slideshow"})]})},p=t(2);t(15);function N(e){var s=e.images,t=void 0===s?[]:s,n=e.interval,a=void 0===n?5e3:n,r=Object(i.useState)([]),l=Object(p.a)(r,2),d=l[0],j=l[1],o=Object(i.useState)(0),b=Object(p.a)(o,2),h=b[0],x=b[1],u=Object(i.useState)({}),m=Object(p.a)(u,2),O=m[0],v=m[1],g=Object(i.useState)({}),f=Object(p.a)(g,2),N=f[0],y=f[1],S=Object(i.useState)({}),k=Object(p.a)(S,2),w=k[0],I=k[1];return Object(i.useEffect)((function(){j(t),y({backgroundImage:"url('"+t[h]+"')"}),v(h>0?{backgroundImage:"url('"+t[h-1]+"')"}:{backgroundImage:"url('"+t[t.length-1]+"')"}),h===t.length-1?I({backgroundImage:"url('"+t[0]+"')"}):I({backgroundImage:"url('"+t[h+1]+"')"});var e=setInterval((function(){h===t.length-1?x(0):x(h+1)}),a);return function(){return clearInterval(e)}}),[t,h,a]),Object(c.jsxs)("div",{className:"slideshow",children:[Object(c.jsxs)("div",{className:"slide-holder",children:[Object(c.jsx)("section",{className:"slide previous-slide",children:Object(c.jsx)("div",{style:O,className:"slide-thumbnail"})}),Object(c.jsx)("section",{className:"slide current-slide",children:Object(c.jsx)("div",{style:N,className:"slide-thumbnail"})}),Object(c.jsx)("section",{className:"slide next-slide",children:Object(c.jsx)("div",{style:w,className:"slide-thumbnail"})})]}),Object(c.jsxs)("div",{className:"slideshow-controller",children:[Object(c.jsx)("span",{onClick:function(){x(h>0?h-1:d.length-1)},children:"Previous"}),Object(c.jsx)("span",{onClick:function(){h===d.length-1?x(0):x(h+1)},children:"Next"})]})]})}var y=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h2",{children:"Footer"})})};var S=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(l,{}),Object(c.jsx)(d,{}),Object(c.jsx)(j,{}),Object(c.jsx)(v,{}),Object(c.jsx)(N,{interval:5e3,images:[b,x,u,m,h,O]}),Object(c.jsx)(g,{}),Object(c.jsx)(f,{}),Object(c.jsx)(o,{}),Object(c.jsx)(y,{})]})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(s){var t=s.getCLS,c=s.getFID,i=s.getFCP,n=s.getLCP,a=s.getTTFB;t(e),c(e),i(e),n(e),a(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(S,{})}),document.getElementById("root")),k()}],[[16,1,2]]]);
//# sourceMappingURL=main.4aeb87e5.chunk.js.map