var Z=Object.defineProperty,ee=Object.defineProperties;var oe=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var re=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var B=(e,r,t)=>r in e?Z(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,v=(e,r)=>{for(var t in r||(r={}))re.call(r,t)&&B(e,t,r[t]);if(M)for(var t of M(r))te.call(r,t)&&B(e,t,r[t]);return e},w=(e,r)=>ee(e,oe(r));import{s as p,a as ae,u as D,b as x,j as l,c as o,M as ne,d as ie,L as N,F as se,e as ce,f as le,i as de,g as he,p as me,h as O,r as f,o as pe,k as G,l as W,t as ue,m as S,z as C,R as q,n as H,q as A,v as ge,w as xe,x as fe,y as ke,A as L,B as be,C as Te,D as ye,E as ve,G as we,H as Le,P as Ne,I as Se}from"./vendor.d4d44d2e.js";const $e=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}};$e();const Ie=p.div.attrs(e=>({background:e.colorTheme,color:e.colorTheme}))`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // dark ligth
  background: ${e=>e.colorTheme==="dark"?"#050801":"#e2e2e2"};
  color: ${e=>e.colorTheme==="dark"?"#e2e2e2":" #050801"};
`,Ee=p.button.attrs(e=>({"box-shadow":e.colorTheme}))`
  cursor: pointer;
  padding: 8px;
  outline: none;
  border: none;
  border-radius: 10px;
  background: #004ae6;
  color: #e2e2e2;
  font-size: 18px;
  margin: 15px;
  font-family: 'Architects Daughter', cursive;
  &:hover{
    transform: scale(1.1);
    font-weight: bold;
    box-shadow: ${e=>e.colorTheme==="dark"?"0px 0px 10px#e2e2e2":"0px 0px 10px #050801"}
  }
  
`,De=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin:10px;
  h3{
    margin-bottom: 10px;
  }
  img{
    width: 280px;
    border-radius:10px;
    filter:drop-shadow(8px 8px 10px gray);
    margin-bottom: 10px;
    transition: all 0.3s ease-in-out;
    &:hover{
      transform: scale(1.1);
    }
  }
`,U=e=>async r=>{try{r({type:"DARK_LIGHT",payload:e})}catch(t){console.log(t)}},Ce=()=>async e=>{try{const r=await ae.get("https://www.thesportsdb.com/api/v1/json/2/all_sports.php");e({type:"GET_ALL_SPORTS",payload:r.data.sports})}catch(r){console.log(r)}},Ae=()=>async e=>{try{e({type:"INDEX_INCREMENT"})}catch(r){console.log(r)}},ze=()=>async e=>{try{e({type:"RESET_INDEX"})}catch(r){console.log(r)}},je=p.nav.attrs(e=>({color:e.colorTheme}))`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${e=>e.colorTheme==="dark"?"#e2e2e2":"#050801"};
  width: 280px;
  border-radius: 10px;
  font-weight: bold;
  cursor: default;
  .icon {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.2) rotate(360deg);
    }
  }

`,Re=p.nav.attrs(e=>({color:e.colorTheme,background:e.colorTheme}))`
  width: 240px;
  border-radius: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${e=>e.colorTheme==="dark"?"#e2e2e2":"#050801"};
  margin-top: 30px;
  padding: 10px;
  

  .icon{
    transition: all 0.3s ease-in-out;
    &:hover{
      transform: scale(1.2);
    }
    a{
    text-decoration: none;
    color: ${e=>e.colorTheme==="dark"?"#050801":"#e2e2e2"}; 
    &:hover{
      color: #004ae6;
    }
    }
  }
`,I=()=>{const e=D(),r=x(s=>s.theme),t=()=>{e(U(r==="dark"?"light":"dark"))};return l(je,{colorTheme:r,children:[o("div",{className:"icon",children:r==="dark"?o(ne,{size:30,onClick:t}):o(ie,{size:30,onClick:t})}),o("p",{children:"Greenrun Sport"})]})},E=()=>{const e=x(r=>r.theme);return l(Re,{colorTheme:e,children:[o("div",{className:"icon",children:o(N,{to:"/",children:o(se,{size:25})})}),o("div",{className:"icon",children:o(N,{to:"/history",children:o(ce,{size:25})})}),o("div",{className:"icon",children:o(N,{to:"/login",children:o(le,{size:25})})})]})},Pe=p.div.attrs(e=>({color:e.colorTheme}))`
  width: 350px;
  border-radius: 4px;
  color: ${e=>e.colorTheme==="dark"?"#e2e2e2":"#050801"};
  margin-top: 50px;
  `,Fe=p.div.attrs(e=>({color:e.colorTheme,background:e.colorTheme,"box-shadow":e.colorTheme}))`
  .img-cardItem {
    width: 100%;
    position: relative;
    display: inline-block;
    letter-spacing:1px;
    font-weight: 600;
    text-align: center;
    cursor: default;
    
    #img-ctn {
      box-shadow: ${e=>e.colorTheme==="dark"?"0px 4px 15px #e2e2e2":"0px 4px 15px #050801"};
      width: 100%;
      height: 200px;
      object-fit: cover;
      transition: all 0.3s ease-in-out;
      border-radius: 10px;
      &:hover {
        transform: scale(1.1);
        box-shadow: ${e=>e.colorTheme==="dark"?"0px 6px 18px #e2e2e2":"0px 6px 18px #050801"};
      }
    }
    .text-top{
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 18px;
    padding: 5px;
    border-radius: 10px;
    background: ${e=>e.colorTheme==="dark"?"rgba(30,30,30,0.5)":"rgba(180,180,180,0.5)"};
      color: ${e=>e.colorTheme==="dark"?"#e2e2e2":"#050801"};
    }
    .text-bottom{
      position: absolute;
      bottom: 10px;
      right: 10px;
      font-size: 17px;
      padding: 4px;
      border-radius: 10px;
      background: ${e=>e.colorTheme==="dark"?"rgba(30,30,30,0.5)":"rgba(180,180,180,0.5)"};
      color: ${e=>e.colorTheme==="dark"?"#e2e2e2":"#050801"};
    }

    .icon-bottom{
      img{
        position: absolute;
        padding: 2px;
        bottom: 10px;
        left: 10px;
        height: 40px;
        width: 40px;
        object-fit: cover;
        transition: all 0.3s ease-in-out;
        &:hover {
          transform: scale(1.1) rotate(360deg);
        }
      }
    }
  }
`,He=p.div.attrs(e=>({color:e.colorTheme}))`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  .heart{
    color: #ff2438;
    margin: 12px 0px 0px 12px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover{
      transform: scale(1.6)
    }
  }

  .heart-broken{
    margin: 12px 12px 0px 0px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    color: #77767c;
    &:hover{
      transform: scale(1.3)
    }
  }
`,Me={apiKey:"AIzaSyAb6omlYKmYYEnbOfK8VmuyOQTyXUzCLVg",authDomain:"react-sports-cd2a8.firebaseapp.com",projectId:"react-sports-cd2a8",storageBucket:"react-sports-cd2a8.appspot.com",messagingSenderId:"753090424911",appId:"1:753090424911:web:5cdf8328972fd4dbd93a3a"},K=de(Me),z=he(K),$=me(K);const T=(e,r)=>{r==="success"?O.success(e):O.error(e)},j=()=>{const[e,r]=f.exports.useState({email:""});return f.exports.useEffect(()=>{pe(z,t=>{r(t?w(v({},e),{email:`${t.email}`}):w(v({},e),{email:""}))})},[]),e},Be=e=>{const r=D(),t=e.sport,s=x(a=>a.theme),n=x(a=>a.indexNumber),i=j(),d=async()=>{const a=[],u=[],c=await C(S($,"likes")),b=await C(S($,"dislikes"));return c.forEach(g=>{a.push({id:g.data().id,name:g.data().name,icon:g.data().icon,user:g.data().user})}),b.forEach(g=>{u.push({id:g.data().id,name:g.data().name,icon:g.data().icon,user:g.data().user})}),{arrLike:a,arrDislike:u}},k=({arrLike:a,arrDislike:u,id:c})=>{const b=a.find(y=>y.id===c&&y.user===i.email),g=u.find(y=>y.id===c&&y.user===i.email);return{likedFilter:b,dislikedFilter:g}},m=async(a,u)=>{try{const c=a.idSport,b=a.strSport,g=a.strSportIconGreen,{arrLike:y,arrDislike:V}=await d(),{likedFilter:Q,dislikedFilter:J}=k({arrLike:y,arrDislike:V,id:c});Q||J?T("You already liked or disliked this sport","error"):(await ue(S($,u),{id:c,name:b,icon:g,user:i.email}),T(`You ${u} this sport ${b}`,"success"))}catch{T("error","error")}},h=(a,u)=>{setTimeout(()=>{a==="like"?m(u,"likes"):m(u,"dislikes"),r(Ae())},700)};return o(Pe,{colorTheme:s,children:t.length>0&&t.map((a,u)=>u===n?l(Fe,{colorTheme:s,children:[l("div",{className:"img-cardItem",children:[o("img",{id:"img-ctn",src:a.strSportThumb,alt:a.strSport}),o("div",{className:"text-top",children:a.strSport}),o("div",{className:"icon-bottom",children:o("img",{src:a.strSportIconGreen,alt:a.strSport})}),o("div",{className:"text-bottom",children:a.strFormat})]}),l(He,{colorTheme:s,children:[o("div",{className:"heart-broken",onClick:()=>h("dislike",a),children:o(G,{fontSize:30})}),o("div",{className:"heart",onClick:()=>h("like",a),children:o(W,{fontSize:32})})]})]},a.idSport):null)})},Oe=p.div.attrs(e=>({background:e.colorTheme,color:e.colorTheme}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${e=>e.colorTheme==="dark"?"#050801":"#e2e2e2"};
  color: ${e=>e.colorTheme==="dark"?"#e2e2e2":"#050801"};

  .loading{
    margin-top: 60px;
  }
`,Ue=()=>{const e=D(),r=x(s=>s.theme),t=x(s=>s.sports);return f.exports.useEffect(()=>{t.length>0||e(Ce())},[]),console.log(t),o(Oe,{colorTheme:r,children:t.length>0?o(Be,{sport:t}):o(q,{type:"spin",color:r==="dark"?"#e2e2e2":"#050801",height:50,width:50,className:"loading"})})},_=()=>{const e=H(),r=x(s=>s.theme),t=j();return l(Ie,{colorTheme:r,children:[o(I,{}),t.email===""?l(A,{children:[l(De,{children:[o("h3",{children:"Welcome to Greenrun Sport"}),o("img",{src:"https://media.tycsports.com/files/2020/12/06/160024/maradona-imagen.jpg",alt:"Maradona"})]}),o(Ee,{onClick:()=>e("/login"),colorTheme:r,children:"Login"})]}):o(A,{children:o(Ue,{})}),o(E,{})]})},X=p.form.attrs(e=>({background:e.colorTheme,color:e.colorTheme}))`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

input{
  font-size: 18px;
  outline: none;
  border: none;
  margin: 2px;
  background: transparent;
  font-family: 'Architects Daughter', cursive;
  &::placeholder{
    color: ${e=>e.colorTheme==="dark"?"#e2e2e2":"#050801"};
    font-family: 'Architects Daughter', cursive;
  }
  // dark light
  color: ${e=>e.colorTheme==="dark"?"#e2e2e2":"#050801"};
}

.divInput {
  padding: 2px;
  display: flex;
  flex-direction: column;
  background: rgba(70,70,70,0.5);
  margin: 5px;
  border-radius: 15px;
  label{
    padding: 4px;
    color: ${e=>e.colorTheme==="dark"?"#e2e2e2":"#050801"};
    font-weight:300;
  }
}
`,Y=p.div.attrs(e=>({color:e.colorTheme}))`
  margin: 5px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${e=>e.colorTheme==="dark"?"#e2e2e2":"#050801"};
  font-size: 18px;
  a{
    text-decoration: none;
    letter-spacing: 2px;
    font-weight: 500;
    text-transform: uppercase;
    //dark light
    color: ${e=>e.colorTheme==="dark"?"#e2e2e2":" #050801"};
    border-bottom: 1px solid ${e=>e.colorTheme==="dark"?"#e2e2e2":"#050801"};
    &:hover{
      color: #004ae6;
      border-color: #004ae6;
    }
  }
`,R=p.div.attrs(e=>({background:e.colorTheme,color:e.colorTheme}))`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  // dark - light
  background: ${e=>e.colorTheme==="dark"?"#050801":"#e2e2e2"};
  color: color: ${e=>e.colorTheme==="dark"?"#e2e2e2":"#050801"};
`,P=p.div.attrs(e=>({background:e.colorTheme,color:e.colorTheme}))`
  text-align: center;
  color: ${e=>e.colorTheme==="dark"?"#e2e2e2":"#050801"};
  margin: 15px 0px;
  h3{
    margin: 5px;
  }
  h1{
    margin: 5px;
  }
`,F=p.button.attrs(e=>({"box-shadow":e.colorTheme}))`
  cursor: pointer;
  padding: 8px;
  outline: none;
  border: none;
  border-radius: 10px;
  background: #004ae6;
  color: #e2e2e2;
  font-size: 18px;
  margin: 10px;
  font-family: 'Architects Daughter', cursive;
  &:hover{
    transform: scale(1.1);
    font-weight: bold;
    box-shadow: ${e=>e.colorTheme==="dark"?"0px 0px 10px#e2e2e2":"0px 0px 10px #050801"}
`,_e=()=>{const e=async()=>{await ge(z)},[r,t]=f.exports.useState(""),[s,n]=f.exports.useState(""),i=H(),d=x(h=>h.theme);D();const k=j(),m=async h=>{h.preventDefault(),console.log("holaaaa"),!r.trim()||!s.trim()?alert("Please enter an email and password"):await xe(z,r,s).then(a=>{a&&(console.log(a),t(""),n(""),T("Welcome Back","success"),setTimeout(()=>i("/"),2e3))}).catch(a=>{T(`${a.message}`,"error")})};return o(A,{children:k.email===""?l(R,{colorTheme:d,children:[o(I,{}),o(P,{colorTheme:d,children:o("h3",{children:"Login User"})}),l(X,{onSubmit:h=>m(h),colorTheme:d,children:[l("div",{className:"divInput",children:[o("label",{children:"User"}),o("input",{type:"email",placeholder:"Email",onChange:h=>t(h.target.value),value:r,required:!0})]}),l("div",{className:"divInput",children:[o("label",{children:"Password"}),o("input",{type:"password",placeholder:"Password",onChange:h=>n(h.target.value),value:s,required:!0})]}),o(F,{type:"submit",colorTheme:d,children:"Login"})]}),o(Y,{colorTheme:d,children:l("p",{children:["Don't have an account? ",o(N,{to:"/signup",children:" Sign Up "})]})}),o(E,{})]}):l(R,{colorTheme:d,children:[o(I,{}),l(P,{colorTheme:d,children:[o("h1",{children:"Welcome"}),o("h3",{children:k.email.split("@")[0]})]}),o(F,{onClick:e,colorTheme:d,children:"Logout"}),o(E,{})]})})},Ge=()=>{const[e,r]=f.exports.useState(""),[t,s]=f.exports.useState(""),n=H(),i=x(m=>m.theme),d=D(),k=m=>{m.preventDefault(),!e.trim()||!t.trim()?T("Please enter an email and password","error"):fe(z,e,t).then(h=>{h&&(r(""),s(""),T("Welcome New User","success"),d(ze()),n("/"))}).catch(h=>{T(`${h.message}`,"error")})};return l(R,{colorTheme:i,children:[o(I,{}),o(P,{colorTheme:i,children:o("h3",{children:"Register New User"})}),l(X,{onSubmit:m=>k(m),colorTheme:i,children:[l("div",{className:"divInput",children:[o("label",{children:"User"}),o("input",{type:"email",placeholder:"Email",onChange:m=>r(m.target.value),value:e,required:!0})]}),l("div",{className:"divInput",children:[o("label",{children:"Password"}),o("input",{type:"password",placeholder:"Password",onChange:m=>s(m.target.value),value:t,required:!0})]}),o(F,{type:"submit",colorTheme:i,children:"Sign Up"})]}),o(Y,{colorTheme:i,children:l("p",{children:["Do you already have an account? ",o(N,{to:"/login",children:"Login"})]})}),o(E,{})]})},We=p.div.attrs(e=>({background:e.colorTheme,color:e.colorTheme}))`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${e=>e.colorTheme==="dark"?"#050801":"#e2e2e2"};
  color: ${e=>e.colorTheme==="dark"?"#e2e2e2":"#050801"};
  .list-container {
    margin: 10px 0px;
  }
`,qe=p.div.attrs(e=>({background:e.colorTheme,color:e.colorTheme}))`
  background: rgba(30, 30, 30, 0.11);
  color: ${e=>e.colorTheme==="dark"?"#e2e2e2":"#050801"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  margin: 5px;
  padding: 5px;
  font-weight: bold;
  border-radius: 10px;
  cursor: default;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: ${e=>e.colorTheme==="dark"?"0px 4px 15px #e2e2e2":"0px 4px 15px #050801"};
  }

  .text-icon {
    display: flex;
    align-items: center;
    p {
      margin-left: 15px;
    }
    img {
      width: 35px;
      height: 35px;
      transition: all 0.3s ease-in-out;
      &:hover {
        transform: scale(1.2) rotate(360deg);
      }
    }
  }
`,Ke=()=>{const e=x(n=>n.theme),[r,t]=f.exports.useState([]),s=j();return f.exports.useEffect(()=>{(async()=>{if(r.length===0){const i=[],d=[],k=await C(S($,"likes")),m=await C(S($,"dislikes"));k.forEach(c=>{i.push({id:c.data().id,name:c.data().name,icon:c.data().icon,user:c.data().user,heart:o(W,{size:28,color:"#ff2438"})})}),m.forEach(c=>{d.push({id:c.data().id,name:c.data().name,icon:c.data().icon,user:c.data().user,heart:o(G,{size:28,color:"#77767c"})})});const h=i.filter(c=>c.user===s.email),a=d.filter(c=>c.user===s.email),u=[...h,...a].sort((c,b)=>parseInt(b.id)-parseInt(c.id));t([...u])}})()},[s,r]),l(We,{colorTheme:e,children:[o(I,{}),o("div",{className:"list-container",children:r.length>0?r.map((n,i)=>l(qe,{colorTheme:e,children:[l("div",{className:"text-icon",children:[o("img",{src:n.icon,alt:n.name}),o("p",{children:n.name})]}),o("p",{children:n.heart})]},i)):o(q,{type:"spin",color:e==="dark"?"#e2e2e2":"#050801",height:50,width:50,className:"loading"})}),o(E,{})]})},Xe=()=>o(A,{children:l(ke,{children:[o(L,{path:"/",element:o(_,{})}),o(L,{path:"/app-sports",element:o(_,{})}),o(L,{path:"/login",element:o(_e,{})}),o(L,{path:"/signup",element:o(Ge,{})}),o(L,{path:"/history",element:o(Ke,{})})]})}),Ye={theme:"dark",sports:[],indexNumber:0},Ve=(e=Ye,r)=>{switch(r.type){case"DARK_LIGHT":return w(v({},e),{theme:r.payload});case"GET_ALL_SPORTS":return w(v({},e),{sports:r.payload});case"INDEX_INCREMENT":return w(v({},e),{indexNumber:e.indexNumber+1});case"RESET_INDEX":return w(v({},e),{indexNumber:0});default:return e}},Qe=be(Ve,Te(ye(ve)));we.render(o(Le.StrictMode,{children:o(Ne,{store:Qe,children:o(Se,{children:o(Xe,{})})})}),document.getElementById("root"));
