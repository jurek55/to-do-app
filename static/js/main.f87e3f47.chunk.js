(this["webpackJsonpto-do-app"]=this["webpackJsonpto-do-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),i=(n(14),n(1)),l=n(4),d=n(5),s=n(7),u=n(6),h=n(8),m=(n(15),function(e){var t=e.task,n=t.tekst,a=t.termin,o=t.id,c=t.done,i=t.wennDone,l={};return t.important&&(l={color:"red"}),r.a.createElement("p",null,r.a.createElement("strong",{style:l},n,", termin wykonania do ",a," "),c?r.a.createElement("p",null,"wykonano ",i):r.a.createElement("button",{onClick:function(){return e.archive(o)}},"wykonane"),r.a.createElement("button",{onClick:function(){return e.delete(o)}},"usu\u0144"))}),k=function(e){return e.taskslist.filter((function(e){return!e.done})).map((function(t){return r.a.createElement(m,{key:t.id,task:t,archive:e.archive,delete:e.delete})}))},f=function(e){return e.taskslist.filter((function(e){return e.done})).map((function(t){return r.a.createElement(m,{key:t.id,task:t,archive:e.archive,delete:e.delete})}))},p=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",null,r.a.createElement("p",null,r.a.createElement("input",{value:e.state.date,type:"date",id:"termin",onChange:e.form,min:"2020-03-03"}),r.a.createElement("input",{type:"checkbox",onChange:e.form,checked:e.state.checked,id:"important"})),r.a.createElement("p",null,r.a.createElement("textarea",{value:e.state.text,onChange:e.form,rows:"10",cols:"40",placeholder:"...opis zadania",id:"task"})),r.a.createElement("button",{onClick:e.send},"zapisz")))},v=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:[{id:0,tekst:"ksi\u0105\u017cka",termin:"2020-03-11",done:!1,wenndone:"",important:!0},{id:1,tekst:"rower",termin:"2020-05-18",done:!1,wenndone:"",important:!1},{id:2,tekst:"narty",termin:"2020-03-21",done:!1,wenndone:"",important:!0}],text:"",checked:!1,date:""},n.handleDeleteButton=function(e){var t=Object(i.a)(n.state.data),a=t.findIndex((function(t){return t.id===e}));t.splice(a,1),n.setState({data:t})},n.handleArchiveButton=function(e){var t=Object(i.a)(n.state.data),a=t.findIndex((function(t){return t.id===e}));t[a].done=!0;var r=new Date;t[a].wennDone=r.toLocaleString(),n.setState({data:t})},n.handleForm=function(e){var t=e.target.id,a=e.target.value;"task"===t?n.setState({text:a}):"termin"===t?n.setState({date:a}):"important"===t&&n.setState({checked:e.target.checked})},n.handleSendButton=function(e){e.preventDefault();var t=Object(i.a)(n.state.data);console.log(t);var a=t.length;console.log(a);var r={id:a,tekst:n.state.text,termin:n.state.date,done:!1,wenndone:"",important:n.state.checked};t.push(r),n.setState({data:t,text:"",checked:!1,date:""})},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=Object(i.a)(this.state.data);return console.log(this.state.data),r.a.createElement(a.Fragment,null,r.a.createElement("h1",null,"Nowe zadanie"),r.a.createElement(p,{form:this.handleForm,state:this.state,send:this.handleSendButton}),r.a.createElement("hr",null),r.a.createElement("h1",{style:{color:"red"}},"Lista zada\u0144"),r.a.createElement(k,{taskslist:e,archive:this.handleArchiveButton,delete:this.handleDeleteButton}),r.a.createElement("hr",null),r.a.createElement("h1",null,"Zarchiwizowane"),r.a.createElement(f,{taskslist:e,archive:this.handleArchiveButton,delete:this.handleDeleteButton}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.f87e3f47.chunk.js.map