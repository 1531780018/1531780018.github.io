import{d as g,K as x,r as y,c as b,b as a,e as t,w as n,g as s,u as h,o as k,L as _,i as C,M as I,O as u,_ as K}from"./index-ea4a9aef.js";const U={class:"login"},B={class:"login-content"},N={class:"content"},R={class:"login-form"},V=g({__name:"index",setup(q){const m=h(),c=x(),o=y({model:{email:"1531780018@qq.com",password:"013580724422"},rules:{}}),p=async()=>{const l=await I({...o.model});if(l.data.code==200){const e=l.data.data;c.setUserInfo({token:e.token,userInfo:e.userInfo}),window.$message.success("登录成功，进入详情页"),m.push({name:"admin"})}};return(l,e)=>{const r=s("n-input"),i=s("n-form-item"),f=s("n-button"),v=s("n-form"),w=s("n-card");return k(),b("div",U,[a("div",B,[a("div",N,[t(w,{hoverable:""},{default:n(()=>[a("div",R,[t(v,{ref:"formRef",model:o.model,rules:o.rules},{default:n(()=>[t(i,{path:"age",label:"用户名"},{default:n(()=>[t(r,{value:o.model.email,"onUpdate:value":e[0]||(e[0]=d=>o.model.email=d),onKeydown:e[1]||(e[1]=_(u(()=>{},["prevent"]),["enter"]))},null,8,["value"])]),_:1}),t(i,{path:"password",label:"密码"},{default:n(()=>[t(r,{value:o.model.password,"onUpdate:value":e[2]||(e[2]=d=>o.model.password=d),type:"password",onKeydown:e[3]||(e[3]=_(u(()=>{},["prevent"]),["enter"]))},null,8,["value"])]),_:1}),a("div",null,[t(f,{type:"info",style:{width:"100%"},onClick:p},{default:n(()=>[C(" 登录 ")]),_:1})])]),_:1},8,["model","rules"])])]),_:1})])])])}}});const S=K(V,[["__scopeId","data-v-a5525969"]]);export{S as default};
