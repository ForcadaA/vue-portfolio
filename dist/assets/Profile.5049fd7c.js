import{_ as l,o as s,c as i,F as h,r as m,t,s as p,a as g,b as e,d as v,e as _}from"./index.5fc667dd.js";const k={props:["card"]};function b(a,n,o,f,u,r){return s(),i("ul",null,[(s(!0),i(h,null,m(o.card,(d,c)=>(s(),i("li",{key:c},t(d),1))),128))])}var C=l(k,[["render",b]]);const x={components:{TheCard:C},computed:{fieldId(){return parseInt(this.$route.params.id)},field(){return p.profile.find(a=>a.id===this.fieldId)}}},y={class:"bg-primary"},T={class:"split"},B={class:"image-container"},I=["src","alt"],N={class:"image-caption"},V=_(" Photo by "),$=["href"],D=_(" on "),F=["href"],P={class:"go-back"};function E(a,n,o,f,u,r){const d=g("TheCard");return s(),i("section",y,[e("div",T,[e("div",null,[e("h2",null,t(r.field.title),1),e("p",null,t(r.field.description),1),e("div",B,[e("img",{src:r.field.image.src,alt:r.field.image.alt},null,8,I),e("p",N,[V,e("a",{href:r.field.image.author.link},t(r.field.image.author.name),9,$),D,e("a",{href:r.field.image.provider.link},t(r.field.image.provider.name),9,F)])])]),e("div",null,[v(d,{card:r.field.card},null,8,["card"]),e("span",P,[e("button",{onClick:n[0]||(n[0]=c=>a.$router.back())},"Retour")])])])])}var R=l(x,[["render",E]]);export{R as default};
