import{_ as s,C as t}from"./vendor-dbc710f8.js";import{I as e}from"./models-64f15429.js";import{T as o,L as a,a as r}from"./consts-9fb24035.js";const m=(e,o)=>{const a=localStorage.getItem(e);null===a?localStorage.setItem(e,JSON.stringify(o)):o=JSON.parse(a);const r=t(o),{subscribe:m,set:i}=r;return{subscribe:m,set:s=>{localStorage.setItem(e,JSON.stringify(s)),i(s)},update:t=>{const o=t(s(r));localStorage.setItem(e,JSON.stringify(o))}}},i=m("theme",o),l=m("mode",e.TUMBLR),c=m("limit",a),n=m("speed",r);export{c as l,l as m,n as s,i as t};
