"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[995],{3995:function(n,e,t){t.r(e),t.d(e,{default:function(){return Pn}});var i,r,o,d,a,l,s,c,x,h,p,f,u,m,g,Z,y,b,j,w,k,v,C,M=t(9439),P=t(4157),D=t(5719),S=t(4888),I=t(4565),z=t(9040),F=t(8347),O=t(4690),T=t(1104),A=t(3629),B=t(168),E=t(7691),U=E.ZP.div(i||(i=(0,B.Z)(["\n@media(min-width: 768px) {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  };"]))),_=(E.ZP.div(r||(r=(0,B.Z)(["\ndisplay: flex;\njustify-content: space-between;\nmargin-bottom: 18px;"]))),E.ZP.div(o||(o=(0,B.Z)(["\nmargin-bottom: 24px;\ndisplay: flex"]))),E.ZP.span(d||(d=(0,B.Z)(["\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\npadding: 6px 12px;\nbackground: ",";\nborder-radius: 8px;\ncolor: ",";\nfont-family: 'Inter';\nfont-style: normal;\nfont-weight: 700;\nfont-size: 14px;\nline-height: 1.29;\ntext-align: center;\ntext-transform: uppercase;\n\n@media(min-width: 768px) {\n    padding: 8px 12px;\n    font-size: 16px;\n    line-height: 1.12;\n    margin-right: 8px;\n  };\n\n"])),(function(n){return n.theme.accentColor}),(function(n){return n.theme.secondaryTextColor})),t(8713)),H=t(7692),L=(0,E.ZP)(H.gbs)(a||(a=(0,B.Z)(["\nheight: 30px;\nwidth: 36px;\nfill: #616161;\n"]))),N=(0,E.ZP)(H.lU2)(l||(l=(0,B.Z)(["\nfill: #616161;\n"]))),W=E.ZP.span(s||(s=(0,B.Z)(["\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\npadding: 6px 12px;\nbackground: ",";\nborder-radius: 8px;\ncolor: ",";\nfont-family: 'Inter';\nfont-style: normal;\nfont-weight: 700;\nfont-size: 14px;\nline-height: 1.29;\ntext-align: center;\ntext-transform: uppercase;\nmin-width: 170px;\n\n@media(min-width: 768px) {\n    padding: 8px 12px;\n    font-size: 16px;\n    line-height: 1.12;\n    margin-right: 8px;\n  };\n\n"])),(function(n){return n.theme.accentColor}),(function(n){return n.theme.secondaryTextColor})),q=E.ZP.div(c||(c=(0,B.Z)(["\ndisplay: flex;\njustify-content: space-between;\nmargin-bottom: 18px;"]))),R=E.ZP.button(x||(x=(0,B.Z)(["\nwidth: 36px;\nheight: 34px;\nbox-sizing: border-box;\nfont-size: 24px;\nfill: red;\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\n\nbackground: ",";\nborder: 1px solid rgba(220, 227, 229, 0.5);\n\n&:first-child {\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n};\n\n&:last-child {\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n};\n\n:hover {\n  cursor: pointer;\n} \n\n:hover svg {\n  cursor: pointer;\n  fill: ",";\n};  \n  "])),(function(n){return n.theme.mainBackgroundColor}),(function(n){return n.theme.accentColor})),G=E.ZP.div(h||(h=(0,B.Z)(["\ndisplay: flex;"]))),J=t(184),K=function(n){var e=n.isChoosedMonth,t=n.changeAskDay,i=(n.calendar,n.askDay),r=e?(0,_.Z)(i,"MMMM yyyy"):(0,_.Z)(i,"dd MMMM yyyy");return(0,J.jsxs)(q,{children:[(0,J.jsx)(W,{children:r}),(0,J.jsxs)(G,{children:[(0,J.jsx)(R,{onClick:function(){return t(-1)},children:(0,J.jsx)(L,{})}),(0,J.jsx)(R,{onClick:function(){return t(1)},children:(0,J.jsx)(N,{})})]})]})},Q=t(1087),V=E.ZP.div(p||(p=(0,B.Z)(["\n  margin-bottom: 24px;\n  display: flex;\n"]))),X=(0,E.ZP)(Q.OL)(f||(f=(0,B.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  padding: 8px 25px;\n  gap: 149px;\n  width: 76px;\n  height: 34px;\n  font-family: 'Inter';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.29;\n  text-align: center;\n  color: #3e85f3;\n  border: none;\n\n  :first-child {\n    border-radius: 8px 0px 0px 8px;\n    padding: 8px 16px;\n    border-right: 1px solid rgba(62, 133, 243, 0.2);\n    background: ",";\n  }\n\n  :last-child {\n    border-radius: 0px 8px 8px 0px;\n    background: ",";\n  }\n\n"])),(function(n){return"false"===n.ischoosedmonth?"#e3f3ff":"#CAE8FF"}),(function(n){return"true"===n.ischoosedmonth?"#e3f3ff":"#CAE8FF"})),Y=function(n){var e=n.toogleChooseMonth,t=n.ischoosedmonth;return(0,J.jsxs)(V,{children:[(0,J.jsx)(X,{onClick:e,ischoosedmonth:t.toString(),to:"/calendar/month",children:"Month"}),(0,J.jsx)(X,{onClick:e,ischoosedmonth:t.toString(),to:"/calendar/day",children:"Day"})]})},$=function(n){var e=n.isChoosedMonth,t=n.changeAskDay,i=n.askDay,r=n.calendar,o=n.toogleChooseMonth;return(0,J.jsxs)(U,{children:[(0,J.jsx)(K,{isChoosedMonth:e,askDay:i,changeAskDay:t,calendar:r}),(0,J.jsx)(Y,{ischoosedmonth:e,toogleChooseMonth:o})]})},nn=t(2791),en=t(5375),tn=t(9129),rn=t(786),on=t(9710),dn=E.ZP.div(u||(u=(0,B.Z)(["\ndisplay: grid;\ngrid-template-columns: repeat(7, 1fr);\nborder-radius: 8px;"]))),an=(0,E.ZP)(Q.OL)(m||(m=(0,B.Z)(["\nbackground: ",";\nborder: 1px solid rgba(220, 227, 229, 0.5);\nfont-family: 'Inter';\nfont-style: normal;\nfont-weight: 700;\nfont-size: 12px;\nline-height: 1.17;\ncolor: ",";\n\n&:first-child {\n  border-top-left-radius: 8px;\n};\n\n&:last-child {\n  border-bottom-right-radius: 8px;\n};\n\n&:nth-child(7) {\n  border-top-right-radius: 8px;\n};\n\n&:nth-last-child(7) {\n  border-bottom-left-radius: 8px;\n};\n\n@media(min-width: 376px) {\n  min-width: 48px;\n  min-height: 68px;\n};\n\n@media(min-width: 768px) {\n    min-width: 100px;\n    height: 104px;\n    font-family: 'Inter';\n    font-size: 16px;\n    line-height: 1.12;\n  };\n\n  @media(min-width: 1280px) {\n    min-width: 155px;\n    height: 125px;\n    font-family: 'Inter';\n  }\n"])),(function(n){return n.theme.mainBackgroundColor}),(function(n){return"true"===n.iscurrentmonth?n.theme.mainTextColor:n.theme.mainBackgroundColor})),ln=E.ZP.div(g||(g=(0,B.Z)(["\ndisplay: flex;\njustify-content: ",";\nflex-direction: column;"])),(function(n){return n.justifyContent?n.justifyContent:"flex-start"})),sn=E.ZP.div(Z||(Z=(0,B.Z)(["\npadding: 10px 12px;\nfont-weight: 700;\nfont-family: 'Inter-Bold';\n\n@media(min-width: 768px) {\n    padding: 18px 22px;\n  }"]))),cn=E.ZP.div(y||(y=(0,B.Z)(["\nbackground: ",";\ncolor: #fff;\npadding: 4px 6px;\nborder-radius: 6px;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nmargin: -4px -6px;\n\n@media(min-width: 768px) {\n    padding: 4px 8px;\n    margin: -4px -8px;\n    border-radius: 8px;\n  }"])),(function(n){return n.theme.accentColor})),xn=E.ZP.div(b||(b=(0,B.Z)(["\ndisplay: flex;\njustify-content: flex-end;\n"]))),hn=E.ZP.ul(j||(j=(0,B.Z)(["\nlist-style-type: none;\npadding: 0 8px 0px 8px;"]))),pn=E.ZP.li(w||(w=(0,B.Z)(["\noverflow: hidden;"]))),fn=E.ZP.div(k||(k=(0,B.Z)(["\nmargin-top: auto;\nmargin: auto;\ntext-align: center;\noverflow: hidden;\ntext-overflow: ellipsis;"]))),un=t(5984),mn=t(9434),gn=t(2553),Zn=function(n){var e=n.calendar,t=n.askDay,i=(0,mn.v9)(gn.Co),r=(0,mn.v9)(gn.xU);console.log(i);var o=[],d=function(n){o=null===i||void 0===i?void 0:i.filter((function(e){return(0,tn.Z)(new Date(e.date))>=(0,tn.Z)((0,F.Z)(n))&&(0,tn.Z)(new Date(e.date))<(0,tn.Z)((0,rn.Z)(n))}))};return console.log(o),(0,J.jsx)(dn,{children:e.map((function(n){var e,i,a;return(0,J.jsx)(an,{to:"/calendar/day:".concat((0,_.Z)(n,"ddMMMMyyyy")),iscurrentmonth:(a=n,(0,en.Z)(t,a)).toString(),children:(0,J.jsxs)(ln,{justifyContent:"flex-end",children:[(0,J.jsx)(xn,{children:(0,J.jsx)(sn,{children:(0,on.Z)(n)?(0,J.jsx)(cn,{children:(0,_.Z)(n,"d")}):(0,_.Z)(n,"d")})}),!r&&(0,J.jsxs)(hn,{children:[d(n),null===(e=o)||void 0===e?void 0:e.slice(0,2).map((function(n){return(0,J.jsx)(pn,{children:n.title},(0,un.x0)())}))]}),(null===(i=o)||void 0===i?void 0:i.length)>2&&(0,J.jsx)(fn,{children:"More..."})]})},(0,un.x0)())}))})},yn=E.ZP.ul(v||(v=(0,B.Z)(["\ndisplay: grid;\ngrid-template-columns: repeat(7, 1fr);\nborder-radius: 8px;\nborder: 1px solid rgba(220, 227, 229, 0.5);\npadding-left: 0;\nmargin-bottom: 14px;"]))),bn=E.ZP.li(C||(C=(0,B.Z)(["\nheight: 50px;\nbackground: ",";\nfont-family: 'InterSemiBolt';\nfont-style: normal;\nfont-weight: 600;\nfont-size: 16px;\nline-height: 1.12;\ntext-align: center;\ntext-transform: uppercase;\ncolor: ",";\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n\n&:first-child {\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n};\n\n&:last-child {\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n};\n\n@media(min-width: 376px) {\n    min-width: 40px;\n  };\n\n@media(min-width: 768px) {\n  height: 46px;\n};\n"])),(function(n){return n.theme.mainBackgroundColor}),(function(n){return n.weekend?n.theme.accentColor:n.theme.CalendarHead})),jn=t(419),wn=function(){var n=(0,jn.a)().isMobile;return(0,J.jsx)(yn,{children:n?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(bn,{children:"M"}),(0,J.jsx)(bn,{children:"T"}),(0,J.jsx)(bn,{children:"W"}),(0,J.jsx)(bn,{children:"T"}),(0,J.jsx)(bn,{children:"F"}),(0,J.jsx)(bn,{weekend:!0,children:"S"}),(0,J.jsx)(bn,{weekend:!0,children:"S"})]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(bn,{children:"MON"}),(0,J.jsx)(bn,{children:"TUE"}),(0,J.jsx)(bn,{children:"WED"}),(0,J.jsx)(bn,{children:"THU"}),(0,J.jsx)(bn,{children:"FRI"}),(0,J.jsx)(bn,{weekend:!0,children:"SAT"}),(0,J.jsx)(bn,{weekend:!0,children:"SUN"})]})})},kn=function(n){var e=n.calendar,t=n.askDay;return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(wn,{}),(0,J.jsx)(Zn,{calendar:e,askDay:t})]})},vn=t(2988),Cn=t(8427),Mn=t(7689);function Pn(){var n=(0,nn.useState)((0,P.Z)()),e=(0,M.Z)(n,2),t=e[0],i=e[1],r=(0,nn.useState)(!0),o=(0,M.Z)(r,2),d=o[0],a=o[1],l=(0,D.Z)(t),s=(0,A.Z)(l,{weekStartsOn:1}),c=(0,S.Z)(t),x=(0,I.Z)(c,{weekStartsOn:1}),h=(0,z.Z)(x,1),p=(0,A.Z)(t,{weekStartsOn:1}),f=(0,I.Z)(t,{weekStartsOn:1}),u=(0,z.Z)(f,1),m=(0,Mn.UO)();(0,nn.useEffect)((function(){if(m.date){var n=new Date(m.date);i((0,F.Z)(n)),a(!1)}}),[m]);for(var g=[],Z=[],y=s,b=p;!(0,O.Z)(y,h);)g.push(y),y=(0,z.Z)(y,1);for(;!(0,O.Z)(b,u);)Z.push(b),b=(0,z.Z)(b,1);var j=new Date(t).toISOString().substr(0,7),w=(0,mn.I0)();return(0,nn.useEffect)((function(){w((0,Cn.qs)(j))}),[w,j]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)($,{calendar:g,changeAskDay:function(n){return d?d?i((0,T.Z)(t,n)):void 0:(Z=[],i((0,z.Z)(t,n)))},isChoosedMonth:d,askDay:t,toogleChooseMonth:function(){a((function(n){return!n}))}}),d?(0,J.jsx)(kn,{calendar:g,askDay:t}):(0,J.jsx)(vn.T,{weekCalendar:Z})]})}}}]);
//# sourceMappingURL=995.a2056366.chunk.js.map