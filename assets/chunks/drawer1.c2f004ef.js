import{i as b,j as _,r as a,o as m,c as p,d as t,a as n,w as o}from"../app.3e89a89a.js";const v={class:"box"},C=b({__name:"drawer1",setup(f){const e=_(!1),l=()=>{e.value=!0},c=()=>{e.value=!1},i=()=>{e.value=!1};return(h,s)=>{const r=a("sb-drawer"),d=a("sb-button");return m(),p("div",v,[t("   "),n(r,{visible:e.value,"onUpdate:visible":s[0]||(s[0]=u=>e.value=u),onOk:c,onCancel:i},{title:o(()=>[t("Title")]),body:o(()=>[t("You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.")]),_:1},8,["visible"]),n(d,{onClick:l},{default:o(()=>[t("Open Drawer")]),_:1})])}}});export{C as default};