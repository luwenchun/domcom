!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="/assets/",e(0)}([function(t,e,n){var o,r,c,i,u,a,d,l,s;l=dc.select,i=dc.options,s=n(1),u=s.repeatDemo1,a=s.repeatDemo2,d=s.repeatDemo3,e.demoMap=c={accordion:n(2),builtins:n(3),counter:n(4),dialog:n(5),event:n(6),controls:n(7),"if":n(8),repeat1:u,repeat2:a,repeat3:d,splitter:n(9),sum:n(10),"text model":n(11)},o="accordion",r=c[o](),e.runDomComDemo=window.runDomComDemo=function(){var t;return t=l({directives:i(Object.keys(c)),value:"accordion",onchange:function(){return this.value!==o?(r.unmount(),o=this.value,r=c[o](),r.mount()):void 0}}),t.mount(),r.mount()}},function(t,e){var n,o,r,c,i;o=dc.list,c=dc.repeat,i=dc.text,r=dc.p,n=dc.bindings,e.repeatDemo1=function(){var t,e;return e=[1,2],t=o(e)},e.repeatDemo2=function(){var t,e;return e=[1,2],t=c(e,function(t){return r(t)})},e.repeatDemo3=function(){var t,e;return e=[1,2,3,4,5,6],t=c(e,function(t){return r(t)}),setTimeout(function(){return e.push(7),t.update()},2e3),setTimeout(function(){return e.length=4,t.update()},4e3),t}},function(t,e){var n,o,r,c,i;o=dc.bibind,n=dc.accordion,c=dc.repeat,r=dc.div,i=dc.span,t.exports=function(){var t,e,o,r,u,a,d;return d=[{heading:"group1",items:"a b c".split(" ")},{heading:"group2",items:"d e f".split(" ")},{heading:"group3",items:"x y z".split(" ")}],t=function(){var t,e,n;for(n=[],t=0,e=d.length;e>t;t++)r=d[t],a={opened:r.opened,disable:r.disable},u={},o=c(r.items,function(t){return i({style:{margin:"5px"},onclick:function(){}},t)}),n.push([u,r.heading,o,a]);return n}(),e=n(Object.create(null),t,{closeOthers:!0})}},function(t,e){var n,o,r,c,i,u,a;o=dc.bibind,c=dc.div,n=dc.arrow,u=dc.list,r=dc.comboEdit,i=dc.hcombo,a=dc.vcombo,t.exports=function(){var t,e,r,d;return t={},e=c(Object.create(null),n(Object.create(null),"top",10,"blue"),n(Object.create(null),"bottom",10,"black"),n(Object.create(null),"left",10,"red"),n(Object.create(null),"right",10,"green")),r=i({style:{display:"inline-block"}},o(t,"x"),"a b".split(" ")),d=a({style:{display:"inline-block"}},o(t,"x"),"a b".split(" ")),u(e,r,d)}},function(t,e){var n,o;o=dc.txt,n=dc.p,t.exports=function(){var t,e,r,c,i,u;return c=0,t=n(o(function(){return c})),e=function(){return c++,1e3===c?clearInterval(r):void 0},i=function(){return t.update(),c>=1e3?clearInterval(u):void 0},r=setInterval(e,1),u=setInterval(i,16),t}},function(t,e){var n,o;n=dc.dialog,o=dc.div,t.exports=function(){var t,e;return e=function(){return alert("onOk"),t.close()},t=n({overlay:!0,showClose:!0},o({"class":"message"},"a message",o({onclick:e},"OK")))}},function(t,e){var n,o,r,c,i,u,a,d,l,s,f;u=dc.list,r=dc.a,i=dc.checkbox,d=dc.text,a=dc.p,c=dc.bindings,f=c({a:1,b:2}),n=f.$a,o=f.$b,l=f._a,s=f._b,t.exports=function(){var t,e;return e=r({onclick:function(){return alert("parent")}},a({onclick:function(t){return alert("child"),t.continuePropagation=!0}},"propagation")),t=r({onclick:function(){return alert("parent")}},a({onclick:function(t){return alert("child")}},"do not propagation")),t.mount(),u(e,t)}},function(t,e){var n,o,r,c,i,u,a,d,l,s,f;u=dc.list,r=dc.a,i=dc.checkbox,d=dc.text,a=dc.p,c=dc.bindings,f=c({a:1,b:2}),n=f.$a,o=f.$b,l=f._a,s=f._b,t.exports=function(){var t,e,o,c;return e=u(t=i(n),t=i(n)),c=u(r=d(n),d(n)),n(6),o=u(e,c),o.create(),t.node.addEventListener("change",function(){return n(this.value),o.update()}),o}},function(t,e){var n,o,r,c;r=dc.list,o=dc.if_,c=dc.text,n=dc.div,t.exports=function(){var t,e;return e=0,t=r(c({onchange:function(){return e=parseInt(this.value),t.update()}},e),o(function(){return e},n(1),n(2)))}},function(t,e){var n,o;o=dc.splitter,n=dc.div,t.exports=function(){var t;return t=n({directives:o("vertical"),style:{height:"100%",width:"100%"}},n({style:{"background-color":"blue",width:"100%"}},1),n({directives:o("horizontal"),style:{"background-color":"grey",width:"100%"}},n(2),n(3)))}},function(t,e){var n,o,r,c,i;n=dc.bindings,r=dc.list,i=dc.text,c=dc.p,t.exports=o=function(){var t,e,o,u;return u=n({a:1,b:2}),t=u.$a,e=u.$b,o=r(i({onchange:function(){return o.update()}},t),i({onchange:function(){return o.update()}},e),c(function(){return parseFloat(t())+parseFloat(e())}))}},function(t,e){var n,o,r,c,i;c=dc.list,n=dc.a,r=dc.checkbox,i=dc.text,o=dc.bindings,t.exports=function(){var t,e,r,u,a,d,l;return l=o({a:1,b:2}),t=l.$a,e=l.$b,a=l._a,d=l._b,r={onchange:function(){return u.update()}},u=c(n=i(r,t),i(r,t))}}]);