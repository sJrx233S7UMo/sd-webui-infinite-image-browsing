import{d as Q,r as V,aw as j,bo as H,bp as J,o,l as k,c as r,n as e,bu as W,z as m,m as u,C as w,t as v,J as f,p as $,q as A,B as X,N as U,bs as Y,ae as Z,I as ee,U as se,Q as te,v as ie,V as ne}from"./index-25d56352.js";import{i as ae,j as le,t as oe,L as re,R as ue,k as de,S as ce}from"./fullScreenContextMenu-419af06d.js";/* empty css              */import{a as D,b as pe,d as me,u as ve}from"./db-8aee7ac1.js";import{u as fe}from"./hook-74fcab4d.js";import"./index-a4f9859b.js";import"./_baseIteratee-29ccfc96.js";const ge={key:0,class:"search-bar"},ke={class:"hint"},we={key:1,class:"preview-switch"},ye=Q({__name:"SubstrSearch",setup(Ce){const{queue:l,images:n,onContextMenuClickU:y,stackViewEl:E,previewIdx:d,previewing:C,onPreviewVisibleChange:F,previewImgMove:b,canPreview:I,itemSize:_,gridItems:N,showGenInfo:c,imageGenInfo:x,q:R,multiSelectedIdxs:q,onFileItemClick:P,scroller:h,showMenuIdx:g}=fe(),p=V(""),t=V();j(async()=>{t.value=await D(),t.value.img_count&&t.value.expired&&S()});const S=H(()=>l.pushAction(async()=>(await ve(),t.value=await D(),t.value)).res),z=async()=>{var i;n.value=await l.pushAction(()=>me(p.value)).res,(i=h.value)==null||i.scrollToItem(0),n.value.length||Y.info(Z("fuzzy-search-noResults"))};return J("return-to-iib",async()=>{const i=await l.pushAction(pe).res;t.value.expired=i.expired}),(i,s)=>{const T=ee,M=se,G=te,K=ie,L=ce;return o(),k("div",{class:"container",ref_key:"stackViewEl",ref:E},[t.value?(o(),k("div",ge,[r(T,{value:p.value,"onUpdate:value":s[0]||(s[0]=a=>p.value=a),placeholder:i.$t("fuzzy-search-placeholder"),disabled:!e(l).isIdle,onKeydown:W(z,["enter"])},null,8,["value","placeholder","disabled","onKeydown"]),t.value.expired||!t.value.img_count?(o(),m(M,{key:0,onClick:e(S),loading:!e(l).isIdle,type:"primary"},{default:u(()=>[w(v(t.value.img_count===0?i.$t("generateIndexHint"):i.$t("UpdateIndex")),1)]),_:1},8,["onClick","loading"])):(o(),m(M,{key:1,type:"primary",onClick:z,loading:!e(l).isIdle,disabled:!p.value},{default:u(()=>[w(v(i.$t("search")),1)]),_:1},8,["loading","disabled"]))])):f("",!0),r(L,{size:"large",spinning:!e(l).isIdle},{default:u(()=>[r(K,{visible:e(c),"onUpdate:visible":s[2]||(s[2]=a=>$(c)?c.value=a:null),width:"70vw","mask-closable":"",onOk:s[3]||(s[3]=a=>c.value=!1)},{cancelText:u(()=>[]),default:u(()=>[r(G,{active:"",loading:!e(R).isIdle},{default:u(()=>[A("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto"},onDblclick:s[1]||(s[1]=a=>e(X)(e(x)))},[A("div",ke,v(i.$t("doubleClickToCopy")),1),w(" "+v(e(x)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),e(n)?(o(),m(e(ae),{key:0,ref_key:"scroller",ref:h,class:"file-list",items:e(n),"item-size":e(_).first,"key-field":"fullpath","item-secondary-size":e(_).second,gridItems:e(N)},{default:u(({item:a,index:B})=>[r(le,{idx:B,file:a,"show-menu-idx":e(g),"onUpdate:showMenuIdx":s[4]||(s[4]=O=>$(g)?g.value=O:null),onFileItemClick:e(P),"full-screen-preview-image-url":e(n)[e(d)]?e(oe)(e(n)[e(d)]):"",selected:e(q).includes(B),onContextMenuClick:e(y),onPreviewVisibleChange:e(F)},null,8,["idx","file","show-menu-idx","onFileItemClick","full-screen-preview-image-url","selected","onContextMenuClick","onPreviewVisibleChange"])]),_:1},8,["items","item-size","item-secondary-size","gridItems"])):f("",!0),e(C)?(o(),k("div",we,[r(e(re),{onClick:s[5]||(s[5]=a=>e(b)("prev")),class:U({disable:!e(I)("prev")})},null,8,["class"]),r(e(ue),{onClick:s[6]||(s[6]=a=>e(b)("next")),class:U({disable:!e(I)("next")})},null,8,["class"])])):f("",!0)]),_:1},8,["spinning"]),e(C)&&e(n)&&e(n)[e(d)]?(o(),m(de,{key:1,file:e(n)[e(d)],idx:e(d),onContextMenuClick:e(y)},null,8,["file","idx","onContextMenuClick"])):f("",!0)],512)}}});const Me=ne(ye,[["__scopeId","data-v-837e8af1"]]);export{Me as default};
