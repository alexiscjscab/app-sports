var te=Object.defineProperty,ae=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var ie=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var W=(e,r,a)=>r in e?te(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,x=(e,r)=>{for(var a in r||(r={}))ie.call(r,a)&&W(e,a,r[a]);if(G)for(var a of G(r))se.call(r,a)&&W(e,a,r[a]);return e},f=(e,r)=>ae(e,ne(r));import{i as ce,g as le,p as de,s as u,a as he,u as z,b as T,j as d,c as o,M as me,d as pe,L as D,F as ue,e as ge,f as xe,h as Y,r as g,o as R,k as V,l as Q,z as $,m as L,t as q,R as J,n as _,q as j,v as fe,w as be,x as ke,y as ye,A as I,B as Te,C as ve,D as we,E as Le,G as Se,H as Ne,P as $e,I as Ee}from"./vendor.7c10a1d2.js";const Ie=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const m of t.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&c(m)}).observe(document,{childList:!0,subtree:!0});function a(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerpolicy&&(t.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?t.credentials="include":s.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(s){if(s.ep)return;s.ep=!0;const t=a(s);fetch(s.href,t)}};Ie();const De={apiKey:"AIzaSyAb6omlYKmYYEnbOfK8VmuyOQTyXUzCLVg",authDomain:"react-sports-cd2a8.firebaseapp.com",projectId:"react-sports-cd2a8",storageBucket:"react-sports-cd2a8.appspot.com",messagingSenderId:"753090424911",appId:"1:753090424911:web:5cdf8328972fd4dbd93a3a"},Z=ce(De),N=le(Z),S=de(Z),Ce=u.div.attrs(e=>({background:e.colorTheme,color:e.colorTheme}))`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // dark ligth
  background: ${e=>e.colorTheme==="dark"?"#050801":"#e2e2e2"};
  color: ${e=>e.colorTheme==="dark"?"#e2e2e2":" #050801"};
`,Ae=u.button.attrs(e=>({"box-shadow":e.colorTheme}))`
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
  
`,ze=u.div`
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
`,K=e=>async r=>{try{r({type:"DARK_LIGHT",payload:e})}catch(a){console.log(a)}},je=()=>async e=>{try{const r=await he.get("https://www.thesportsdb.com/api/v1/json/2/all_sports.php");e({type:"GET_ALL_SPORTS",payload:r.data.sports})}catch(r){console.log(r)}},Re=()=>async e=>{try{e({type:"INDEX_INCREMENT"})}catch(r){console.log(r)}},ee=()=>async e=>{try{e({type:"RESET_INDEX"})}catch(r){console.log(r)}},Pe=u.nav.attrs(e=>({color:e.colorTheme}))`
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

`,Fe=u.nav.attrs(e=>({color:e.colorTheme,background:e.colorTheme}))`
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
`,C=()=>{const e=z(),r=T(c=>c.theme),a=()=>{e(K(r==="dark"?"light":"dark"))};return d(Pe,{colorTheme:r,children:[o("div",{className:"icon",children:r==="dark"?o(me,{size:30,onClick:a}):o(pe,{size:30,onClick:a})}),o("p",{children:"Greenrun Sport"})]})},A=()=>{const e=T(r=>r.theme);return d(Fe,{colorTheme:e,children:[o("div",{className:"icon",children:o(D,{to:"/",children:o(ue,{size:25})})}),o("div",{className:"icon",children:o(D,{to:"/history",children:o(ge,{size:25})})}),o("div",{className:"icon",children:o(D,{to:"/login",children:o(xe,{size:25})})})]})},He=u.div.attrs(e=>({color:e.colorTheme}))`
  width: 350px;
  border-radius: 4px;
  color: ${e=>e.colorTheme==="dark"?"#e2e2e2":"#050801"};
  margin-top: 50px;
  `,Me=u.div.attrs(e=>({color:e.colorTheme,background:e.colorTheme,"box-shadow":e.colorTheme}))`
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
`,Be=u.div.attrs(e=>({color:e.colorTheme}))`
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
`;const k=(e,r)=>{r==="success"?Y.success(e):Y.error(e)},Oe=e=>{const r=z(),a=e.sport,c=T(i=>i.theme),s=T(i=>i.indexNumber),[t,m]=g.exports.useState({email:""});g.exports.useEffect(()=>{R(N,i=>{m(i?f(x({},t),{email:`${i.email}`}):f(x({},t),{email:""}))})},[]);const w=async i=>{const l=i.idSport,b=i.strSport,p=i.strSportIconGreen;try{const v=[],E=[],P=await $(L(S,"likes")),F=await $(L(S,"dislikes"));P.forEach(n=>{v.push({id:n.data().id,name:n.data().name,icon:n.data().icon,user:n.data().user})}),F.forEach(n=>{E.push({id:n.data().id,name:n.data().name,icon:n.data().icon,user:n.data().user})});const H=v.find(n=>n.id===l&&n.user===t.email),M=E.find(n=>n.id===l&&n.user===t.email);H||M?k("You already liked or disliked this sport","error"):(await q(L(S,"likes"),{id:l,name:b,icon:p,user:t.email}),k(`You liked this sport ${b}`,"success"))}catch{k("error","error")}},h=async i=>{const l=i.idSport,b=i.strSport,p=i.strSportIconGreen;try{const v=[],E=[],P=await $(L(S,"likes")),F=await $(L(S,"dislikes"));P.forEach(n=>{v.push({id:n.data().id,name:n.data().name,icon:n.data().icon,user:n.data().user})}),F.forEach(n=>{E.push({id:n.data().id,name:n.data().name,icon:n.data().icon,user:n.data().user})});const H=v.find(n=>n.id===l&&n.user===t.email),M=E.find(n=>n.id===l&&n.user===t.email);H||M?k("You already liked or disliked this sport","error"):(await q(L(S,"dislikes"),{id:l,name:b,icon:p,user:t.email}),k(`You disliked this sport ${b}`,"success"))}catch{k("error","error")}},y=(i,l)=>{setTimeout(()=>{i==="like"?w(l):h(l),r(Re())},700)};return o(He,{colorTheme:c,children:a.length>0&&a.map((i,l)=>l===s?d(Me,{colorTheme:c,children:[d("div",{className:"img-cardItem",children:[o("img",{id:"img-ctn",src:i.strSportThumb,alt:i.strSport}),o("div",{className:"text-top",children:i.strSport}),o("div",{className:"icon-bottom",children:o("img",{src:i.strSportIconGreen,alt:i.strSport})}),o("div",{className:"text-bottom",children:i.strFormat})]}),d(Be,{colorTheme:c,children:[o("div",{className:"heart-broken",onClick:()=>y("dislike",i),children:o(V,{fontSize:30})}),o("div",{className:"heart",onClick:()=>y("like",i),children:o(Q,{fontSize:32})})]})]},i.idSport):null)})},Ue=u.div.attrs(e=>({background:e.colorTheme,color:e.colorTheme}))`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${e=>e.colorTheme==="dark"?"#050801":"#e2e2e2"};
  color: ${e=>e.colorTheme==="dark"?"#e2e2e2":"#050801"};

  .loading{
    margin-top: 60px;
  }
`,_e=()=>{const e=z(),r=T(c=>c.theme),a=T(c=>c.sports);return g.exports.useEffect(()=>{a.length>0||e(je())},[]),console.log(a),o(Ue,{colorTheme:r,children:a.length>0?o(Oe,{sport:a}):o(J,{type:"spin",color:r==="dark"?"#e2e2e2":"#050801",height:50,width:50,className:"loading"})})},X=()=>{const[e,r]=g.exports.useState({email:""}),a=_(),c=T(s=>s.theme);return g.exports.useEffect(()=>{R(N,s=>{r(s?f(x({},e),{email:`${s.email}`}):f(x({},e),{email:""}))})},[]),d(Ce,{colorTheme:c,children:[o(C,{}),e.email===""?d(j,{children:[d(ze,{children:[o("h3",{children:"Welcome to Greenrun Sport"}),o("img",{src:"https://media.tycsports.com/files/2020/12/06/160024/maradona-imagen.jpg",alt:"Maradona"})]}),o(Ae,{onClick:()=>a("/login"),colorTheme:c,children:"Login"})]}):o(j,{children:o(_e,{})}),o(A,{})]})},oe=u.form.attrs(e=>({background:e.colorTheme,color:e.colorTheme}))`
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
`,re=u.div.attrs(e=>({color:e.colorTheme}))`
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
`,B=u.div.attrs(e=>({background:e.colorTheme,color:e.colorTheme}))`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  // dark - light
  background: ${e=>e.colorTheme==="dark"?"#050801":"#e2e2e2"};
  color: color: ${e=>e.colorTheme==="dark"?"#e2e2e2":"#050801"};
`,O=u.div.attrs(e=>({background:e.colorTheme,color:e.colorTheme}))`
  text-align: center;
  color: ${e=>e.colorTheme==="dark"?"#e2e2e2":"#050801"};
  margin: 15px 0px;
  h3{
    margin: 5px;
  }
  h1{
    margin: 5px;
  }
`,U=u.button.attrs(e=>({"box-shadow":e.colorTheme}))`
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
`,Ge=()=>{const e=async()=>{await fe(N)},[r,a]=g.exports.useState(""),[c,s]=g.exports.useState(""),[t,m]=g.exports.useState({email:""}),w=_(),h=T(l=>l.theme),y=z();g.exports.useEffect(()=>{R(N,l=>{l?(m(f(x({},t),{email:`${l.email}`})),y(ee())):m(f(x({},t),{email:""}))})},[]);const i=async l=>{l.preventDefault(),console.log("holaaaa"),!r.trim()||!c.trim()?alert("Please enter an email and password"):await be(N,r,c).then(b=>{b&&(console.log(b),a(""),s(""),k("Welcome Back","success"),setTimeout(()=>w("/"),2e3))}).catch(b=>{k(`${b.message}`,"error")})};return o(j,{children:t.email===""?d(B,{colorTheme:h,children:[o(C,{}),o(O,{colorTheme:h,children:o("h3",{children:"Login User"})}),d(oe,{onSubmit:l=>i(l),colorTheme:h,children:[d("div",{className:"divInput",children:[o("label",{children:"User"}),o("input",{type:"email",placeholder:"Email",onChange:l=>a(l.target.value),value:r,required:!0})]}),d("div",{className:"divInput",children:[o("label",{children:"Password"}),o("input",{type:"password",placeholder:"Password",onChange:l=>s(l.target.value),value:c,required:!0})]}),o(U,{type:"submit",colorTheme:h,children:"Login"})]}),o(re,{colorTheme:h,children:d("p",{children:["Don't have an account? ",o(D,{to:"/signup",children:" Sign Up "})]})}),o(A,{})]}):d(B,{colorTheme:h,children:[o(C,{}),d(O,{colorTheme:h,children:[o("h1",{children:"Welcome"}),o("h3",{children:t.email.split("@")[0]})]}),o(U,{onClick:e,colorTheme:h,children:"Logout"}),o(A,{})]})})},We=()=>{const[e,r]=g.exports.useState(""),[a,c]=g.exports.useState(""),s=_(),t=T(h=>h.theme),m=z(),w=h=>{h.preventDefault(),!e.trim()||!a.trim()?k("Please enter an email and password","error"):ke(N,e,a).then(y=>{y&&(r(""),c(""),k("Welcome New User","success"),m(ee()),s("/"))}).catch(y=>{k(`${y.message}`,"error")})};return d(B,{colorTheme:t,children:[o(C,{}),o(O,{colorTheme:t,children:o("h3",{children:"Register New User"})}),d(oe,{onSubmit:h=>w(h),colorTheme:t,children:[d("div",{className:"divInput",children:[o("label",{children:"User"}),o("input",{type:"email",placeholder:"Email",onChange:h=>r(h.target.value),value:e,required:!0})]}),d("div",{className:"divInput",children:[o("label",{children:"Password"}),o("input",{type:"password",placeholder:"Password",onChange:h=>c(h.target.value),value:a,required:!0})]}),o(U,{type:"submit",colorTheme:t,children:"Sign Up"})]}),o(re,{colorTheme:t,children:d("p",{children:["Do you already have an account? ",o(D,{to:"/login",children:"Login"})]})}),o(A,{})]})},Ye=u.div.attrs(e=>({background:e.colorTheme,color:e.colorTheme}))`
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
`,qe=u.div.attrs(e=>({background:e.colorTheme,color:e.colorTheme}))`
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
`,Ke=()=>{const e=T(t=>t.theme),[r,a]=g.exports.useState({email:""}),[c,s]=g.exports.useState([]);return g.exports.useEffect(()=>{R(N,m=>{a(m?f(x({},r),{email:`${m.email}`}):f(x({},r),{email:""}))}),(async()=>{if(c.length===0){const m=[],w=[],h=await $(L(S,"likes")),y=await $(L(S,"dislikes"));h.forEach(p=>{m.push({id:p.data().id,name:p.data().name,icon:p.data().icon,user:p.data().user,heart:o(Q,{size:28,color:"#ff2438"})})}),y.forEach(p=>{w.push({id:p.data().id,name:p.data().name,icon:p.data().icon,user:p.data().user,heart:o(V,{size:28,color:"#77767c"})})});const i=m.filter(p=>p.user===r.email),l=w.filter(p=>p.user===r.email),b=[...i,...l].sort((p,v)=>parseInt(v.id)-parseInt(p.id));s([...b])}})()},[c]),d(Ye,{colorTheme:e,children:[o(C,{}),o("div",{className:"list-container",children:c.length>0?c.map((t,m)=>d(qe,{colorTheme:e,children:[d("div",{className:"text-icon",children:[o("img",{src:t.icon,alt:t.name}),o("p",{children:t.name})]}),o("p",{children:t.heart})]},m)):o(J,{type:"spin",color:e==="dark"?"#e2e2e2":"#050801",height:50,width:50,className:"loading"})}),o(A,{})]})},Xe=()=>o(j,{children:d(ye,{children:[o(I,{path:"/",element:o(X,{})}),o(I,{path:"/app-sports",element:o(X,{})}),o(I,{path:"/login",element:o(Ge,{})}),o(I,{path:"/signup",element:o(We,{})}),o(I,{path:"/history",element:o(Ke,{})})]})}),Ve={theme:"dark",sports:[],indexNumber:0},Qe=(e=Ve,r)=>{switch(r.type){case"DARK_LIGHT":return f(x({},e),{theme:r.payload});case"GET_ALL_SPORTS":return f(x({},e),{sports:r.payload});case"INDEX_INCREMENT":return f(x({},e),{indexNumber:e.indexNumber+1});case"RESET_INDEX":return f(x({},e),{indexNumber:0});default:return e}},Je=Te(Qe,ve(we(Le)));Se.render(o(Ne.StrictMode,{children:o($e,{store:Je,children:o(Ee,{children:o(Xe,{})})})}),document.getElementById("root"));
