import{d as A,r as g,l as S,c as M,e as a,w as n,E as T,g as o,u as V,o as u,i,b as c,F as I,f,G as w,H as N,I as B,J as E,_ as F}from"./index-4d7b5155.js";const L={class:"manage"},P={class:"rpage"},U=A({__name:"index",setup(R){V();const p=()=>{T({pageCurr:(s.page-1)*s.pageSize,pageSize:s.page-1+s.pageSize}).then(t=>{t.data.code==200&&(e.dataList=t.data.data.result,s.itemCount=t.data.data.pageCount)})},y=()=>{e.showModal=!0,e.tempData={},e.isAdd=0,e.model={name:"",desc:"",id:null}},v=async()=>{(await N({...e.model})).data.code==200?(window.$message.success("新增成功!!"),setTimeout(()=>{location.reload()},3e3)):window.$message.success("新增失败!!")},C=async()=>{(await B({...e.model})).data.code==200?(window.$message.success("编辑成功!!"),setTimeout(()=>{location.reload()},3e3)):window.$message.success("编辑失败!!")},s=g({page:1,pageSize:10,pageSizes:[10,15],itemCount:0,onChange:t=>{s.page=t,p()}}),e=g({dataList:[],showModal:!1,tempData:{},isAdd:0,rules:{},model:{name:"",desc:"",id:null}});S(()=>{p()});const h=[{title:"分类ID",key:"id"},{title:"分类名称",key:"name"},{title:"分类描述",key:"desc"},{title:"操作",key:"",render(t){return a("div",null,[a(o("n-button"),{strong:!0,secondary:!0,type:"primary",onClick:()=>{e.showModal=!0,e.tempData=t,e.isAdd=1,e.model={id:t.id,desc:t.desc,name:t.name}}},{default:()=>[i("编辑")]}),a(o("n-button"),{style:"margin-left:10px",strong:!0,secondary:!0,type:"error",onClick:()=>{window.$dialog.warning({title:"警告",content:"是否要删除该分类？删除该分类将会删除该分类所有文章",positiveText:"确定",negativeText:"不确定",onPositiveClick:async()=>{(await E({id:t.id})).data.code==200?(window.$message.success("删除成功"),setTimeout(()=>{location.reload()},3e3)):window.$message.error("删除失败")},onNegativeClick:()=>{window.$message.error("用户取消删除")}})}},{default:()=>[i("删除")]})])}}];return(t,d)=>{const r=o("n-button"),k=o("n-data-table"),b=o("n-pagination"),x=o("n-card"),m=o("n-input"),_=o("n-form-item-gi"),z=o("n-grid"),D=o("n-form"),$=o("n-modal");return u(),M("div",L,[a(x,{class:"manage-content",title:"",hoverable:""},{default:n(()=>[a(r,{type:"primary",onClick:d[0]||(d[0]=l=>y())},{default:n(()=>[i(" 新增分类 ")]),_:1}),a(k,{columns:h,data:e.dataList,bordered:!1},null,8,["data"]),c("div",P,[a(b,{"item-count":s.itemCount,page:s.page,"page-sizes":s.pageSizes,"on-change":s.onChange,"show-size-picker":""},null,8,["item-count","page","page-sizes","on-change"])])]),_:1}),a($,{show:e.showModal,"onUpdate:show":d[3]||(d[3]=l=>e.showModal=l),preset:"dialog",title:"Dialog"},{header:n(()=>[c("div",null,I(e.isAdd==0?"新增":"编辑")+" 分类 ",1)]),action:n(()=>[c("div",null,[e.isAdd==1?(u(),f(r,{key:0,type:"primary",onClick:C},{default:n(()=>[i(" 提交编辑 ")]),_:1})):w("",!0),e.isAdd==0?(u(),f(r,{key:1,type:"primary",onClick:v},{default:n(()=>[i(" 提交新增 ")]),_:1})):w("",!0)])]),default:n(()=>[c("div",null,[a(D,{ref:"formRef",model:e.model,rules:e.rules,"label-placement":"top"},{default:n(()=>[a(z,{cols:24,"x-gap":24},{default:n(()=>[a(_,{span:16,label:"分类名称",path:"inputValue"},{default:n(()=>[a(m,{value:e.model.name,"onUpdate:value":d[1]||(d[1]=l=>e.model.name=l),placeholder:"Input"},null,8,["value"])]),_:1}),a(_,{span:16,label:"分类简介",path:"inputValue"},{default:n(()=>[a(m,{value:e.model.desc,"onUpdate:value":d[2]||(d[2]=l=>e.model.desc=l),placeholder:"Input"},null,8,["value"])]),_:1})]),_:1})]),_:1},8,["model","rules"])])]),_:1},8,["show"])])}}});const H=F(U,[["__scopeId","data-v-d36b15fd"]]);export{H as default};
