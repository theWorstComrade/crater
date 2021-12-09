import{g as I,i as S,k as p,m as P,n as V,p as C,q as k,r as u,o as q,s as j,w as r,t as c,v as y,x as v,y as t,b as s,z as x,B as N}from"./vendor.e9042f2c.js";import{g as z,o as D}from"./main.e180e539.js";const G={class:"flex justify-between w-full"},L=["onSubmit"],T={class:"p-4 sm:p-6"},A={class:"z-0 flex justify-end p-4 border-t border-gray-200 border-solid"},F={setup(U){const o=z(),e=D(),{t:M}=I(),l=S(!1),g=p(()=>({currentPaymentMode:{name:{required:P.withMessage(M("validation.required"),V),minLength:P.withMessage(M("validation.name_min_length",{count:3}),C(3))}}})),a=k(g,p(()=>e)),h=p(()=>o.active&&o.componentName==="PaymentModeModal");async function B(){if(a.value.currentPaymentMode.$touch(),a.value.currentPaymentMode.$invalid)return!0;try{const n=e.currentPaymentMode.id?e.updatePaymentMode:e.addPaymentMode;l.value=!0,await n(e.currentPaymentMode),l.value=!1,o.refreshData&&o.refreshData(),d()}catch{return l.value=!1,!0}}function d(){o.closeModal(),setTimeout(()=>{a.value.$reset(),e.currentPaymentMode={id:"",name:null}})}return(n,i)=>{const f=u("BaseIcon"),b=u("BaseInput"),$=u("BaseInputGroup"),_=u("BaseButton"),w=u("BaseModal");return q(),j(w,{show:t(h),onClose:d},{header:r(()=>[c("div",G,[y(v(t(o).title)+" ",1),s(f,{name:"XIcon",class:"w-6 h-6 text-gray-500 cursor-pointer",onClick:d})])]),default:r(()=>[c("form",{action:"",onSubmit:N(B,["prevent"])},[c("div",T,[s($,{label:n.$t("settings.payment_modes.mode_name"),error:t(a).currentPaymentMode.name.$error&&t(a).currentPaymentMode.name.$errors[0].$message,required:""},{default:r(()=>[s(b,{modelValue:t(e).currentPaymentMode.name,"onUpdate:modelValue":i[0]||(i[0]=m=>t(e).currentPaymentMode.name=m),invalid:t(a).currentPaymentMode.name.$error,onInput:i[1]||(i[1]=m=>t(a).currentPaymentMode.name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"])]),c("div",A,[s(_,{variant:"primary-outline",class:"mr-3",type:"button",onClick:d},{default:r(()=>[y(v(n.$t("general.cancel")),1)]),_:1}),s(_,{loading:l.value,disabled:l.value,variant:"primary",type:"submit"},{left:r(m=>[s(f,{name:"SaveIcon",class:x(m.class)},null,8,["class"])]),default:r(()=>[y(" "+v(t(e).currentPaymentMode.id?n.$t("general.update"):n.$t("general.save")),1)]),_:1},8,["loading","disabled"])])],40,L)]),_:1},8,["show"])}}};export{F as _};