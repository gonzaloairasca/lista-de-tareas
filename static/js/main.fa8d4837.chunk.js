(this["webpackJsonpla-flauta"]=this["webpackJsonpla-flauta"]||[]).push([[0],{15:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var n=a(2),i=a.n(n),c=a(8),r=a.n(c),u=(a(15),a(7)),o=a(3),s=a(1);var l=function(t){var e=Object(n.useState)(t.editar?t.editar.value:""),a=Object(o.a)(e,2),i=a[0],c=a[1];return Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:i}),c("")},children:[Object(s.jsx)("input",{onChange:function(t){c(t.target.value)},value:i}),Object(s.jsx)("button",{children:"AGREGAR"})]})},j=a(9),d=a(10);var b=function(t){var e=t.tareas,a=t.eliminarTarea,i=t.setActualizadoTarea,c=t.tareaCompletada,r=Object(n.useState)({id:null,value:""}),u=Object(o.a)(r,2),b=u[0],f=u[1];return b.id?Object(s.jsx)(l,{editar:b,onSubmit:function(t){i(b.id,t),f({id:null,value:""})}}):e.map((function(t,e){return Object(s.jsxs)("div",{className:t.estaCompleta?"completa":"",children:[Object(s.jsx)("div",{onClick:function(){return c(t.id)},children:t.text},t.id),Object(s.jsxs)("div",{children:[Object(s.jsx)(j.a,{onClick:function(){return a(t.id)}}),Object(s.jsx)(d.a,{onClick:function(){return f({id:t.id,value:t.text})}})]})]},e)}))};var f=function(){var t=Object(n.useState)([]),e=Object(o.a)(t,2),a=e[0],i=e[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)(l,{onSubmit:function(t){if(t.text&&!/^\s*$/.test(t.text)){var e=[t].concat(Object(u.a)(a));i(e)}}}),Object(s.jsx)(b,{tareaCompletada:function(t){var e=a.map((function(e){return e.id===t&&(e.estaCompleta=!e.estaCompleta),e}));i(e)},tareas:a,eliminarTarea:function(t){var e=Object(u.a)(a).filter((function(e){return e.id!==t}));i(e)},setActualizadoTarea:function(t,e){e.text&&!/^\s*$/.test(e.text)&&i((function(a){return a.map((function(a){return a.id=t?e:a}))}))}})]})};var O=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(f,{})})};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.fa8d4837.chunk.js.map