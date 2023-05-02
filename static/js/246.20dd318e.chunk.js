"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[246],{5246:function(e,n,t){t.r(n),t.d(n,{default:function(){return Ce}});var r,i,a,o=t(5861),l=t(9439),c=t(4687),d=t.n(c),u=t(2791),s=t(9434),h=t(6864),p=t(6727),m=/^(?!.@.@.$)(?!.@.--...$)(?!.@.-..$)(?!.@.-$)((.*)?@[a-z0-9]{1,}.[a-z]{2,}(.[a-z]{2,})?)$/,f=/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}$/,g=/^@[A-Za-z0-9_.-]{3,50}$/,x=p.Ry().shape({name:p.Z_().matches(/^[^0-9]+$/,"Name should contain only letters").min(2,"Must be at least 2 characters!").max(16,"Must be up to 16 characters!").required("Name is required"),birthday:p.Z_("Please enter your full date of birth").required("Birthday is required"),email:p.Z_().email("Invalid email format").matches(m,"Invalid email format").required("Email is required"),phone:p.Z_().matches(f,"Invalid phone number format").min(6,"At least 7 digits is required"),telegram:p.Z_().matches(g,"Invalid telegram username format").max(50,"At most 50 digits is required"),avatarURL:p.Z_()}),y=function(e){return e.user.info},b=t(5667),v=t(3682),w=t(184),j=function(e){e.avatarURL;var n=(0,u.useState)("data:image/png;base64,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"),t=(0,l.Z)(n,2),r=t[0],i=t[1];return(0,w.jsxs)(v.Z,{position:"relative",display:"block",m:"0 auto",width:"max-content",children:[(0,w.jsx)(Y,{children:(0,w.jsx)(R,{src:r,alt:"Avatar Preview"})}),(0,w.jsx)(N,{type:"file",onChange:function(e){var n=e.target.files[0];if(n){var t=URL.createObjectURL(n);i(t)}},accept:"image/*",id:"add-image"}),(0,w.jsx)(S,{htmlFor:"add-image",children:(0,w.jsx)(T,{})})]})},k=t(168),A=t(7691),P=["title","titleId"];function O(){return O=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},O.apply(this,arguments)}function Z(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function L(e,n){var t=e.title,o=e.titleId,l=Z(e,P);return u.createElement("svg",O({width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":o},l),t?u.createElement("title",{id:o},t):null,r||(r=u.createElement("circle",{cx:7,cy:7,r:7})),i||(i=u.createElement("path",{d:"M7 4.66669V9.33336",stroke:"white",strokeWidth:.8,strokeLinecap:"round",strokeLinejoin:"round"})),a||(a=u.createElement("path",{d:"M4.66699 7H9.33366",stroke:"white",strokeWidth:.8,strokeLinecap:"round",strokeLinejoin:"round"})))}var W,E,C,I,U,F,M,B,z=u.forwardRef(L),Y=(t.p,A.ZP.div(W||(W=(0,k.Z)(["\n  width: 72px;\n  height: 72px;\n  margin: 0 auto;\n  border: 1px solid ",";\n  border-radius: 50%;\n  overflow: hidden;\n\n  @media (min-width: 768px) {\n    width: 124px;\n    height: 124px;\n  }\n"])),(function(e){return e.theme.accentColor}))),R=A.ZP.img(E||(E=(0,k.Z)(["\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n"]))),N=A.ZP.input(C||(C=(0,k.Z)(["\n  display: none;\n"]))),S=A.ZP.label(I||(I=(0,k.Z)(["\n  display: block;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background-color: #e0e0e0;\n  cursor: pointer;\n  position: absolute;\n  top: 85%;\n  right: 20%;\n  /* right: 15px;\n  top: 62px; */\n\n  @media (min-width: 768px) {\n    width: 24px;\n    height: 24px;\n  }\n"]))),T=(0,A.ZP)(z)(U||(U=(0,k.Z)(["\n  width: 100%;\n  height: 100%;\n  display: block;\n  transition: ",";\n  fill: ",";\n  &:hover,\n  &:focus {\n    fill: ",";\n  }\n"])),(function(e){return e.theme.defaultTransition}),(function(e){return e.theme.buttonBackgroundColor}),(function(e){return e.theme.buttonBackgroundColorHover})),J=(0,A.ZP)(h.Bc)(F||(F=(0,k.Z)(["\n  display: block;\n  color: red;\n"]))),q=A.ZP.label(M||(M=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 8px;\n  max-width: 354px;\n  font-family: 'InterNormal';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: calc((14 / 12) * 100%);\n  color: ",";\n\n  @media (min-width: 768px) {\n    width: 354px;\n    font-size: 14px;\n    line-height: calc((18 / 14) * 100%);\n  }\n"])),(function(e){return e.theme.labelText})),G=function(e){var n=e.title,t=e.type,r=e.name,i=e.placeholder,a=void 0===i?null:i;return(0,w.jsxs)(q,{children:[n," ",(0,w.jsx)(Oe,{type:t,name:r,placeholder:a}),(0,w.jsx)(J,{name:r,component:"p"})]})},H=t(9137),K=t(1048),X=["title","titleId"];function D(){return D=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},D.apply(this,arguments)}function V(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function Q(e,n){var t=e.title,r=e.titleId,i=V(e,X);return u.createElement("svg",D({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},i),t?u.createElement("title",{id:r},t):null,B||(B=u.createElement("path",{d:"M4.5 6.75L9 11.25L13.5 6.75",stroke:"#111111",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}var _,$=u.forwardRef(Q),ee=(t.p,["title","titleId"]);function ne(){return ne=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},ne.apply(this,arguments)}function te(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function re(e,n){var t=e.title,r=e.titleId,i=te(e,ee);return u.createElement("svg",ne({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},i),t?u.createElement("title",{id:r},t):null,_||(_=u.createElement("path",{d:"M11.25 13.5L6.75 9L11.25 4.5",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var ie,ae=u.forwardRef(re),oe=(t.p,["title","titleId"]);function le(){return le=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},le.apply(this,arguments)}function ce(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function de(e,n){var t=e.title,r=e.titleId,i=ce(e,oe);return u.createElement("svg",le({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},i),t?u.createElement("title",{id:r},t):null,ie||(ie=u.createElement("path",{d:"M6.75 13.5L11.25 9L6.75 4.5",stroke:"white",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var ue,se,he,pe,me,fe,ge,xe,ye,be,ve,we=u.forwardRef(de),je=(t.p,function(e){var n=e.title,t=e.name,r=e.date,i=e.changeDate,a=(0,s.v9)(K.L);return(0,w.jsxs)(q,{children:[n,(0,w.jsx)(H.Z,{onChange:function(e){return i(t,e)},value:r,name:t,format:"dd/MM/yyyy",locale:"en-GB",maxDate:new Date,calendarClassName:"my-calendar",className:a?["my-date-picker","my-date-picker--dark"]:"my-date-picker",clearIcon:null,calendarIcon:(0,w.jsx)($,{}),formatShortWeekday:function(e,n){return n.toLocaleDateString("en-GB",{weekday:"short"}).slice(0,1)},goToRangeStartOnSelect:!1,next2Label:null,prev2Label:null,prevLabel:(0,w.jsx)(ae,{}),nextLabel:(0,w.jsx)(we,{}),showNeighboringMonth:!1})]})}),ke=function(){var e=(0,s.I0)(),n=(0,s.v9)(y),t=(0,u.useState)(!0),r=(0,l.Z)(t,2),i=r[0],a=r[1];if((0,u.useEffect)((function(){var n=function(){var n=(0,o.Z)(d().mark((function n(){return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e((0,b.B)());case 2:a(!1);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[e]),i)return(0,w.jsx)("div",{children:"Loading..."});var c=n.name,p=n.birthday,m=n.email,f=n.phone,g=n.telegram;return(0,w.jsx)(h.J9,{initialValues:{name:c,birthday:p,email:m,phone:f,telegram:g},validationSchema:x,onSubmit:function(n){return e((0,b.N)(n))},children:function(e){var n=e.values,t=e.setFieldValue;return(0,w.jsxs)(We,{children:[(0,w.jsx)(j,{}),(0,w.jsx)(Le,{children:n.name}),(0,w.jsxs)(Ae,{children:[(0,w.jsxs)(Pe,{children:[(0,w.jsx)(G,{title:"User name",type:"text",name:"name"}),(0,w.jsx)(je,{title:"Birthday",name:"birthday",date:n.birthday,changeDate:t}),(0,w.jsx)(G,{title:"Email",type:"email",name:"email"})]}),(0,w.jsxs)(Pe,{children:[(0,w.jsx)(G,{title:"Phone",type:"tel",name:"phone",placeholder:"Add phone number"}),(0,w.jsx)(G,{title:"Telegram",type:"text",name:"telegram",placeholder:"Add a telegram nickname"})]})]}),(0,w.jsx)(Ze,{type:"submit",children:"Save changes"})]})}})},Ae=A.ZP.div(ue||(ue=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 18px;\n  column-gap: 50px;\n  align-items: center;\n  max-width: 100%;\n  margin-top: 40px;\n\n  @media (min-width: 960px) {\n    margin-bottom: 44px;\n  }\n\n  @media (min-width: 1150px) {\n    flex-direction: row;\n    justify-content: center;\n    align-items: baseline;\n  }\n"]))),Pe=A.ZP.div(se||(se=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  max-width: 100%;\n"]))),Oe=(A.ZP.label(he||(he=(0,k.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 124px;\n  height: 124px;\n  border-radius: 50%;\n  border: 1px solid red;\n"]))),(0,A.ZP)(h.gN)(pe||(pe=(0,k.Z)(["\n  height: 42px;\n  border-radius: 8px;\n  border-width: 1px;\n  padding: 0 14px;\n  border-color: ",";\n  background-color: transparent;\n  color: ",";\n  transition: ",";\n  font-family: 'InterSemiBolt';\n  font-weight: 600;\n  font-size: 14px;\n  line-height: calc((18 / 14) * 100%);\n\n  &::placeholder {\n    color: ",";\n  }\n\n  @media (min-width: 768px) {\n    font-size: 16px;\n    line-height: calc((18 / 16) * 100%);\n  }\n"])),(function(e){return e.theme.inputBorder}),(function(e){return e.theme.inputText}),(function(e){return e.theme.defaultTransition}),(function(e){return e.theme.inputText}))),Ze=((0,A.ZP)(h.gN)(me||(me=(0,k.Z)(["\n  width: 40px;\n"]))),A.ZP.button(fe||(fe=(0,k.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 195px;\n  height: 46px;\n  margin-top: 40px;\n  margin-left: auto;\n  margin-right: auto;\n  /* margin: 40px auto; */\n  border-radius: 16px;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: calc((18 / 14) * 100%);\n  background-color: ",";\n  color: ",";\n  transition: ",";\n  border: none;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    background: ",";\n  }\n  @media (min-width: 960px) {\n    margin-top: 88px;\n  }\n"])),(function(e){return e.theme.buttonBackgroundColor}),(function(e){return e.theme.buttontextColor}),(function(e){return e.theme.defaultTransition}),(function(e){return e.theme.buttonBackgroundColorHover}))),Le=(A.ZP.img(ge||(ge=(0,k.Z)(["\n  max-width: 100%;\n  max-height: 100%;\n"]))),A.ZP.h2(xe||(xe=(0,k.Z)(["\n  margin: 0;\n  margin-top: 20px;\n  /* margin-bottom: 40px; */\n  text-align: center;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: calc((18 / 14) * 100%);\n  transition: ",";\n  color: ",";\n\n  @media (min-width: 768px) {\n    font-size: 18px;\n    line-height: calc((18 / 18) * 100%);\n  }\n"])),(function(e){return e.theme.defaultTransition}),(function(e){return e.theme.mainTextColor}))),We=(0,A.ZP)(h.l0)(ye||(ye=(0,k.Z)(["\n  padding: 40px 18px;\n  transition: ",";\n  background-color: ",";\n  border-radius: 16px;\n  height: 100%;\n\n  @media (min-width: 960px) {\n    padding: 60px 18px;\n  }\n"])),(function(e){return e.theme.defaultTransition}),(function(e){return e.theme.mainBackgroundColor})),Ee=t(1087);(0,A.ZP)(Ee.OL)(be||(be=(0,k.Z)(["\n  border: 1px solid black;\n\n  :hover,\n  :focus {\n    background-color: #290b78;\n    color: white;\n  }\n"]))),A.ZP.div(ve||(ve=(0,k.Z)(["\n  background-color: purple;\n"])));function Ce(){return(0,w.jsx)(ke,{})}}}]);
//# sourceMappingURL=246.20dd318e.chunk.js.map