import{S as P,E as W,P as I,d as j,g as q,a as A,G as B,b as H,W as N,s as Z,R as D,c as _,e as k,D as g,T as K,f as S,M as v,h,i as U,j as V,L as J}from"./vendor.d452c830.js";const Q=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};Q();class X{constructor(){P.use([W,I]);const a=new P(".project-swiper",{slidesPerView:1,spaceBetween:30,grabCursor:!0,effect:"fade",fadeEffect:{crossFade:!0},pagination:{el:".swiper-pagination",type:"bullets"},interaction:!1,autoHeight:!0});$(window).on("resize",j(400,!0,()=>{a.init()})),a.on("slideChange",i=>{console.log(i),console.log(a.activeIndex)})}}q.registerPlugin(A);class Y{constructor(){new B;const a={light:"#fff",accentLight:"#fc819f",purple:8412601};let i,o,e={width:0,height:0};const t=new H,n=new N({alpha:!0,antialias:!0});n.physicallyCorrectLights=!0,n.outputEncoding=Z,n.toneMapping=D,n.toneMappingExposure=5,n.shadowMap.enabled=!0,n.shadowMap.type=_;const r=document.querySelector(".canvas-container");r.appendChild(n.domElement);const s=new k(35,e.width/e.height,.1,100);s.position.set(0,1.24,4.24),t.add(s),e.width=r.clientWidth,e.height=r.clientHeight;const w=new g(a.light,.2);w.position.set(3,5,4),t.add(w);let m=new K,x=m.load("../../../models/blue-light.png"),b=m.load("../../../models/red-light.png"),z=new S(4,4),E=new v({map:x,opacity:1,transparent:!0}),L=new h(z,E);L.rotateZ=Math.PI*4;let C=new S(3,3),O=new v({map:b,opacity:1,transparent:!0}),R=new h(C,O);R.rotateZ=Math.PI*4,i=new g(4415982,.5),i.position.set(.4,1.3,-2),t.add(i),window.innerWidth>800&&i.add(L),o=new g(255,.2),t.add(o);const y=()=>{e.width=r.clientWidth,e.height=r.clientHeight,s.aspect=e.width/e.height,s.updateProjectionMatrix(),n.setSize(e.width,e.height),n.setPixelRatio(Math.min(window.devicePixelRatio,2))};window.addEventListener("resize",y),y();const d={},M=()=>{n.render(t,s),window.requestAnimationFrame(()=>M())};M();const F=[{group:new U,name:"zeus",file:"../../../models/zeus/god-zeus.gltf"}],G=new J(()=>{d.zeus.position.x=.676,d.zeus.rotation.y=-.52}),T=new V(G);F.forEach(l=>{T.load(l.file,c=>{c.scene.traverse(p=>{p instanceof h&&(p.receiveShadow=!0,p.castShadow=!0)});let u=.2;t.add(c.scene),c.scene.scale.set(u,u,u),l.group.add(c.scene),t.add(l.group),d[l.name]=l.group})})}}$(document).ready(()=>{$(function(){new X,new Y})});
