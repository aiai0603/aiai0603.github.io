import{i as l,m as n,r as t,o as d,c as r,a as m,u as i}from"../app.3e89a89a.js";const c={class:"box"},y=l({__name:"table2",setup(p){const e=[{title:"Name",dataIndex:"name",width:"70px"},{title:"Salary",dataIndex:"salary",width:"60px"},{title:"Address",dataIndex:"address",width:"100px"},{title:"Email",dataIndex:"email",width:"100px"}];let a=[{key:"1",name:"Jane Doe",salary:23e3,address:"32 Park Road, ",email:"jane.doe@example.com"},{key:"2",name:"Alisa Ross",salary:25e3,address:"35 Park Road, London",email:"alisa.ross@example.com"},{key:"3",name:"Kevin Sandra",salary:22e3,address:"31 Park Road, London",email:"kevin.sandra@example.com"},{key:"4",name:"Ed Hellen",salary:17e3,address:"42 Park Road, London",email:"ed.hellen@example.com"},{key:"5",name:"William Smith",salary:27e3,address:"62 Park Road, London",email:"william.smith@example.com"}];const s=n({type:"checkbox",showCheckedAll:!0});return(_,x)=>{const o=t("sbTable");return d(),r("div",c,[m(o,{columns:e,data:i(a),"row-selection":s},null,8,["data","row-selection"])])}}});export{y as default};