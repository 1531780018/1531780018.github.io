import{d as _,r as i,l as m,c as y,e as a,w as f,C,g as n,u as h,o as k,b as v,i as c,D as w,_ as z}from"./index-140d7040.js";const x={class:"manage"},b={class:"rpage"},S=_({__name:"postManage",setup(D){const r=h(),o=()=>{C({pageCurr:(e.page-1)*e.pageSize,pageSize:e.page-1+e.pageSize}).then(t=>{t.data.code==200&&(s.dataList=t.data.data.result,e.itemCount=t.data.data.pageCount)})},e=i({page:1,pageSize:10,pageSizes:[10,15],itemCount:0,onChange:t=>{e.page=t,o()}}),s=i({dataList:[]});m(()=>{o()});const d=[{title:"文章ID",key:"id"},{title:"文章标题",key:"title"},{title:"分类",key:"categorize.name"},{title:"作者",key:"author.name"},{title:"快速链接",key:""},{title:"操作",key:"",render(t){return a("div",null,[a(n("n-button"),{strong:!0,secondary:!0,type:"primary",onClick:()=>{r.push({name:"editPost",query:{type:"edit",id:t.id}})}},{default:()=>[c("编辑")]}),a(n("n-button"),{style:"margin-left:10px",strong:!0,secondary:!0,type:"error",onClick:()=>{window.$dialog.warning({title:"警告",content:"是否要删除？",positiveText:"确定",negativeText:"不确定",onPositiveClick:async()=>{(await w({id:t.id})).data.code==200?(window.$message.success("删除成功"),setTimeout(()=>{location.reload()},3e3)):window.$message.error("删除失败")},onNegativeClick:()=>{window.$message.error("用户取消删除")}})}},{default:()=>[c("删除")]})])}}];return(t,l)=>{const p=n("n-data-table"),g=n("n-pagination"),u=n("n-card");return k(),y("div",x,[a(u,{class:"manage-content",title:"",hoverable:""},{default:f(()=>[a(p,{columns:d,data:s.dataList,bordered:!1},null,8,["data"]),v("div",b,[a(g,{"item-count":e.itemCount,page:e.page,"page-sizes":e.pageSizes,"on-change":e.onChange,"show-size-picker":""},null,8,["item-count","page","page-sizes","on-change"])])]),_:1})])}}});const N=z(S,[["__scopeId","data-v-6917611f"]]);export{N as default};
