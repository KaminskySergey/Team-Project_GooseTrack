"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[710],{3710:function(n,e,t){t.r(e),t.d(e,{default:function(){return mn}});var i,r,a,o=t(5861),l=t(9439),d=t(4687),c=t.n(d),s=t(2791),m=t(9434),p=t(5705),h=t(6727),u=/^(?!.@.@.$)(?!.@.--...$)(?!.@.-..$)(?!.@.-$)((.*)?@[a-z0-9]{1,}.[a-z]{2,}(.[a-z]{2,})?)$/,f=/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}$/,x=/^@[A-Za-z0-9_.-]{3,50}$/,g=h.Ry().shape({name:h.Z_().matches(/^[^0-9]+$/,"Name should contain only letters").min(2,"Must be at least 2 characters!").max(16,"Must be up to 50 characters!").required("Name is required"),birthday:h.Z_("Please enter your full date of birth").required("Birthday is required"),email:h.Z_().email("Invalid email format").matches(u,"Invalid email format").required("Email is required"),phone:h.Z_().matches(f,"Invalid phone number format").min(6,"At least 7 digits is required"),telegram:h.Z_().matches(x,"Invalid telegram username format").max(50,"At most 50 digits is required"),avatarURL:h.Z_()}),y=function(n){return n.user.info},b=t(5667),v=["title","titleId"];function w(){return w=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},w.apply(this,arguments)}function j(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}function A(n,e){var t=n.title,o=n.titleId,l=j(n,v);return s.createElement("svg",w({width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":o},l),t?s.createElement("title",{id:o},t):null,i||(i=s.createElement("circle",{cx:7,cy:7,r:7,fill:"#3E85F3"})),r||(r=s.createElement("path",{d:"M7 4.66669V9.33336",stroke:"white",strokeWidth:.8,strokeLinecap:"round",strokeLinejoin:"round"})),a||(a=s.createElement("path",{d:"M4.66699 7H9.33366",stroke:"white",strokeWidth:.8,strokeLinecap:"round",strokeLinejoin:"round"})))}var Z,P,k,W,F,U,z=s.forwardRef(A),Y=(t.p,t(3682)),C=t(184),M=function(n){n.avatarURL;var e=(0,s.useState)("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAYAAACrHtS+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAApaSURBVHgB7Z17UhNJHMd/GSIJCAK7bm1Z/mE8gXAC4wnUE6x7AvEEqycQbsCeQD3BxhMQT+BYW1vulrsSIEAIeezvO3STzpDHJPPqbvpTlUoyDMMw3/k9+tePKZBFnJ2dVTzP2+x2u5Visfig3++v86vCP6qIXdbFK4xfKBQavG+DPzf4GH6n0/nC2+r42dLSkk+WUCBDgZjtdrvKojzu9XqbvAmvdUoH3Ah1vhHqfDN9KJfLddwgZCBGCc4WXOWL/pjFrvLXKuVLjc/jI98A71dWVupkCNoLroj8ggauWTd8Psf3LP6u7u5fS8HhrlnoF3wRn1L+ljwTiPscYiD8HmmIVoKLuPyS37cpvXicFUgEayz+G52sXgvBLRP6Giz8ni7C5yq47UKPYIf/11zjfG6Ct1qtl/z2mm6G0Co+i/4mrxifueDNZnOTiyJvybBkLAUg/JOsrd2jDGGrfsti75MTG1Q4tn8+Pz//jTIkEwsXJc93fEdvkmMUmVl76haOWM138r4TeyIwiH2+VtuUMqlaOFw4v6X+T1jGDtfqX1FKpCK4c+HxENW652m4+MQFh9h8wn+QvnVvU0glricaw9HkcmInRmA4MCBKkMQsXLSvIfZNK6SkCvrdLy4uniTVBZuI4E7sdElS9NiCi5iNYooTO0WSEj1WDFcSNCd2yqCjib3ou7gxfW4Ld9l4bsTK3ue2cLSzyYmdBxVx7ediLsFRQXNFlfzAtRdVzJmZWXDRj+3KpfmzPU/tfaYY7jJyvUDmziXYrVni+UwW7jJyvUDmPms8jyy46KivkEMrZo3nkVy6cOWfyaEtnU5nK0pRJpKFC1fu0BgxTnAqUwXHDBByrtwEqlGy9oku3VXTzAJZ++Li4sNJM1u9KQdAm7tCDiNA1j7NysdauEvUzGSalY+1cG7fZTpe2pEM06x8pIU76zabSVY+0sKddZvNJCsfaeG8M6y7Qg5jGWfl1yzctbvtAFbO5fAX4e3XBBdNMYcdPA1vGHLpLlmzDzEcqia/e6EfuoEN9lFVvwxZuM3JWq/PXbydPrU7/Ll3uc3j232xSFQqFsgzdonCqfjlcvmh/HL1b7bb7c1er7dPlnF20afGCd/MF5P3K98iWikTrZbtU15161cuvdvtPiOLgNB/HfTp78Z0sQH2+feY6M/vfep0yTaq8kNRfsCapWQJByds1afXt8N941UUt3mHXTtcPF4SiA3R15eJNm7bYe2qtsF/dHBwsM4mf0AWEBYbcXptqUB3lmhsnIbIRy2i41b/Kr4Dm0QvlUobKMIE9zoHdSvGmIfFRly+v14IhJuUlBUXiH64fbkvfkeCY+GYNnB6elrFeyA4B3Xj4zesVBUbydc9FhBiRgX74ndWy4NtOGaUHEB3FhYWqngPBOfOkkdkOF8PB5YIK727SnNzd3XY0i2x8kBjmaUb7dKbrUFmjZj902r8uItjeOLqwMJNt3KO34HGnph+avTkguPW4PNKiWZy4+PAMe4ort10KxePA3mAe7hCBoMKmmp9yMiTYm15cCz8jZ7hnp0Tty3P9FmgKJdKgjZ2AtYtQWa/qMRytb1uIpy4VYy3cFWExSIlzqJyA110jU/eKh6r/oAMRi2UFFNYSFQ9puklV07c1uDS3WzQGwKe4Yb712jBbykut9OjxFGPaUEXqvmCFxcGKqSRVLUVN166Zb7ixidtaqIWDG5IMK9CzG5fjP5bJsIxfD3TJyKkAdysWgY9PE1O8cPWcLnWdJcerBhBFqB2YR6dJZNN4xhNpYJny0gYKwSH9Ukrh0v/dhzfynEM2eRDMWelTFZgheBAtXKUQeOI/u2oP1Suvbdmzzg3CN4gC4CFq6LDHX9tzDY+Dfvid5rng204ZpLl2rxB3gnBrSi+YGQLRm3Jni1YKQYywh2jU2WccAgDSPYwzEmt3EHsy2Nag294Q+M6YdEhJhK5o7N+pEGMEgvFBg0I7pNlkw8gFET9djy8fZy4YTC+bc0+sUGjyG2zL9wgJ1vA6BcMiIgzQuX7CUaxXg5VtmliQq/XO4TgDRsEx8QDTCQYl6RJd47iiSygwN3DrQcVtZDlYxuO1zi1R3jP83zp0o0FoiFeI06rYDwahjvdLhWuhJ52HHiFk/P+UMFFCt/iG+rHFePnoPmwcJ8MJWhGHQ43vaJMPBgF9l1exKtAG2zRaJodK4Mjm61L0dEmN7WZxlrXC6bOCYcLhthqMwpCr99OruYNsQ9Ohy0eYv98p2BkRwoL/jC4NK1WC9OMjGmLh8WGVcPdwoWnAQT/70T5e4XLCQsmiY5pRphuJEuriTwELQtgdf8cDde54WbTEhugcHNfmcWCeI9zMGnIE9w53gPBOV3/RIagxmwpdhaWJv+WFF3eeAYRaCznltXIAJCNq1aFWJplAiXjtwShxZQJCqzxe7wHgrfb7RppTniyIEqfecRQ/E3kCxKckwmuvVwuD1z6xsYGOlBqpDHHodEneda50eRTR9mo56YpNblA31V/OJv8R9IYFFDgUpOaLBgXnIM8H92rcKq2V2fK7fGqe9SFnajPQ7kxy3bdYIaW7QovzPc7OWzjg/olPKatRg6rYCPeUb8PCS4Wb6uRwxbq4cdUXhu1ylW3D+SwArbu3fC2a+0JsWYbkjc3q9RshpI1yTULRxFm1J3hMAtuYtdGbh+10Vm5+aDve9RjpkfOPHFWbjZs3Xvjnik+tiborNxcxlk3GDu3zFm5seyOExtMnEzIpVY02q2Ye3ZD8MOFljATBRfdpm/IYQQs9ptJ1g0i9euxpaMXrUoOnRnZ7g4TaX44d6+9IofW4LkmUfaLJDj6Urnk6hI4TYniyiUzDdVg146nHlnx9ASLiOTKJTMt+cF30nNyWbtONKK6cslMggu34bJ2fYjsyiUzL+rD7mPHxXMt2IUWNCNzD7d08Tw/uFZeL5VKWzQHcy/bJeK5T46s8dnDPqc5iTWgWkw1RlGmQo4s8MVzRH2ak9gj6JvN5maxWITorlctXZCRb8URG8ReiRFFGa7EoWngmmvp0cA1jis2SGyOjLP01AjEljNH4pLYWqs4IbgccolckvhJig0SnwXnErnEiJ2gjSLx1ZRxgqLcZ8wyIrqBdnYaYoNUls/GiXIVaMtV5OZiF0WVNMQGqa6Xvry8vM1v6Et3Gfx0cI1esaFsU4pkMpPdxfXJwIWjepaWVatk8kQE4eIfoqOeHGFSdeFhMl+rwln7FTUMHUuyyRWFzJ95olj7r3Qz2+wyVj/JWmyQ62o0sHYWftvzvJdkP8HEDvRhyxWV8kCL5YcgPL+95gvxC9mHFkJLtFpvShH+MZkf47USWqLtAmMs/gu+UHD1po2qqWEVDc5V9nQSWqL3inJ0ldWjGPGU9LV6X6yAVRPr5GiL9oKroAt2YWHhmXD5VcqXmljhUHuRVYwSXAVPym21Wpss/jP++oguXX9affFwzWhCfep2uzUuGdd0dNdRMFbwUYikD029TW7q4fMDurwJ5Ksy4tcaNKj1+ywk3PMhx2G8+3ycelZVsCz4H0Hv6ZQW5TUVAAAAAElFTkSuQmCC"),t=(0,l.Z)(e,2),i=t[0],r=t[1];return(0,C.jsxs)(Y.Z,{position:"relative",display:"block",m:"0 auto",width:"max-content",children:[(0,C.jsx)(L,{children:(0,C.jsx)(R,{src:i,alt:"Avatar Preview"})}),(0,C.jsx)(B,{type:"file",onChange:function(n){var e=n.target.files[0];if(e){var t=URL.createObjectURL(e);r(t)}},accept:"image/*",id:"add-image"}),(0,C.jsx)(J,{htmlFor:"add-image",children:(0,C.jsx)(z,{width:"100%",height:"100%",display:"block"})})]})},E=t(168),I=t(6444),L=I.ZP.div(Z||(Z=(0,E.Z)(["\n  width: 72px;\n  height: 72px;\n  margin: 0 auto;\n  border: 1px solid #3e85f3;\n  border-radius: 50%;\n  overflow: hidden;\n\n  @media (min-width: 768px) {\n    width: 124px;\n    height: 124px;\n  }\n"]))),R=I.ZP.img(P||(P=(0,E.Z)(["\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: center;\n"]))),B=I.ZP.input(k||(k=(0,E.Z)(["\n  display: none;\n"]))),J=I.ZP.label(W||(W=(0,E.Z)(["\n  display: block;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background-color: #e0e0e0;\n  cursor: pointer;\n  position: absolute;\n  top: 85%;\n  right: 20%;\n  /* right: 15px;\n  top: 62px; */\n\n  @media (min-width: 768px) {\n    width: 24px;\n    height: 24px;\n  }\n"]))),N=(0,I.ZP)(p.Bc)(F||(F=(0,E.Z)(["\n  display: block;\n  color: red;\n"]))),q=I.ZP.label(U||(U=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 8px;\n  max-width: 354px;\n  font-family: 'InterNormal';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: calc((14 / 12) * 100%);\n  color: #111111;\n\n  @media (min-width: 768px) {\n    width: 354px;\n    font-size: 14px;\n    line-height: calc((18 / 14) * 100%);\n  }\n"]))),S=function(n){var e=n.title,t=n.type,i=n.name,r=n.placeholder,a=void 0===r?null:r;return(0,C.jsxs)(q,{children:[e," ",(0,C.jsx)(ln,{type:t,name:i,placeholder:a}),(0,C.jsx)(N,{name:i,component:"p"})]})},G=t(7788),K=t(6101),X=["S","M","T","W","T","F","S"],H={width:"100%",fontFamily:"InterSemiBolt",fontSize:"16px",lineHeight:"calc((18/16) * 100%)",margin:0,padding:"0 14px",color:"#111111",height:"42px",borderRadius:"8px",borderColor:"rgb(17 17 17 / 15%)"};function T(n){var e=n.title,t=n.name,i=n.date,r=n.onChange;return(0,C.jsxs)(q,{children:[e,(0,C.jsx)(G.ZP,{name:t,value:i,onChange:function(n){return r(n)},format:"DD/MM/YYYY",editable:!1,weekDays:X,weekStartDayIndex:1,highlightToday:!1,plugins:[(0,K.Z)()],style:H}),(0,C.jsx)(N,{name:t,component:"p"})]})}var D,O,V,Q,_,$,nn,en,tn,rn=function(){var n=(0,m.I0)(),e=(0,m.v9)(y),t=(0,s.useState)(!0),i=(0,l.Z)(t,2),r=i[0],a=i[1];if((0,s.useEffect)((function(){var e=function(){var e=(0,o.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n((0,b.B)());case 2:a(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),r)return(0,C.jsx)("div",{children:"Loading..."});var d=e.name,h=e.birthday,u=e.email,f=e.phone,x=e.telegram;return(0,C.jsx)(p.J9,{initialValues:{name:d,birthday:h,email:u,phone:f,telegram:x},validationSchema:g,onSubmit:function(e){return n((0,b.N)(e))},children:function(n){var e=n.values;return(0,C.jsxs)(sn,{children:[(0,C.jsx)(M,{}),(0,C.jsx)(cn,{children:e.name}),(0,C.jsxs)(an,{children:[(0,C.jsxs)(on,{children:[(0,C.jsx)(S,{title:"User name",type:"text",name:"name"}),(0,C.jsx)(T,{title:"Birthday",name:"birthday",date:e.birthday,onChange:function(n){return e.birthday=n}}),(0,C.jsx)(S,{title:"Email",type:"email",name:"email"})]}),(0,C.jsxs)(on,{children:[(0,C.jsx)(S,{title:"Phone",type:"tel",name:"phone",placeholder:"Add phone number"}),(0,C.jsx)(S,{title:"Telegram",type:"text",name:"telegram",placeholder:"Add a telegram nickname"})]})]}),(0,C.jsx)(dn,{type:"submit",children:"Save changes"})]})}})},an=I.ZP.div(D||(D=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 18px;\n  column-gap: 50px;\n  align-items: center;\n  max-width: 100%;\n  margin-top: 40px;\n\n  @media (min-width: 960px) {\n    margin-bottom: 44px;\n  }\n\n  @media (min-width: 1150px) {\n    flex-direction: row;\n    justify-content: center;\n    align-items: baseline;\n  }\n"]))),on=I.ZP.div(O||(O=(0,E.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  max-width: 100%;\n"]))),ln=(I.ZP.label(V||(V=(0,E.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 124px;\n  height: 124px;\n  border-radius: 50%;\n  border: 1px solid red;\n"]))),(0,I.ZP)(p.gN)(Q||(Q=(0,E.Z)(["\n  height: 42px;\n  border-radius: 8px;\n  padding: 0 14px;\n  border-color: rgb(17 17 17 / 15%);\n  color: #111111;\n  font-family: 'InterSemiBolt';\n  font-weight: 600;\n  font-size: 14px;\n  line-height: calc((18 / 14) * 100%);\n\n  @media (min-width: 768px) {\n    font-size: 16px;\n    line-height: calc((18 / 16) * 100%);\n  }\n"])))),dn=((0,I.ZP)(p.gN)(_||(_=(0,E.Z)(["\n  width: 40px;\n"]))),I.ZP.button($||($=(0,E.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 195px;\n  height: 46px;\n  margin-top: 40px;\n  margin-left: auto;\n  margin-right: auto;\n  /* margin: 40px auto; */\n  border-radius: 16px;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: calc((18 / 14) * 100%);\n  background-color: #3e85f3;\n  color: #ffffff;\n  border: none;\n  cursor: pointer;\n\n  @media (min-width: 960px) {\n    margin-top: 88px;\n  }\n"])))),cn=(I.ZP.img(nn||(nn=(0,E.Z)(["\n  max-width: 100%;\n  max-height: 100%;\n"]))),I.ZP.h2(en||(en=(0,E.Z)(["\n  margin: 0;\n  margin-top: 20px;\n  /* margin-bottom: 40px; */\n  text-align: center;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: calc((18 / 14) * 100%);\n  color: #343434;\n\n  @media (min-width: 768px) {\n    font-size: 18px;\n    line-height: calc((18 / 18) * 100%);\n  }\n"])))),sn=(0,I.ZP)(p.l0)(tn||(tn=(0,E.Z)(["\n  padding: 40px 18px;\n  background-color: #ffffff;\n  border-radius: 16px;\n  height: 100%;\n\n  @media (min-width: 960px) {\n    padding: 60px 18px;\n  }\n"])));function mn(){return(0,C.jsx)(rn,{})}}}]);
//# sourceMappingURL=710.e2531eef.chunk.js.map