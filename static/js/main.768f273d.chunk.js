(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports=n(20)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),l=n(7),r=n.n(l),c=(n(14),function(t){var e=t.todoCount,n=t.doneCount;return o.a.createElement("div",{className:"app-header d-flex"},o.a.createElement("h1",null,"Todo list"),o.a.createElement("h2",null,e," more todo, ",n," done."))}),i=(n(15),function(){return o.a.createElement("span",null,o.a.createElement("input",{className:"form-control search-input",type:"text",placeholder:"Search"}))}),s=n(8),u=(n(16),n(1)),m=n(2),p=n(4),d=n(3),b=n(5),f=(n(17),function(t){function e(){var t;return Object(u.a)(this,e),(t=Object(p.a)(this,Object(d.a)(e).call(this))).toggleDone=function(){console.log(t.props.label),t.setState((function(t){return{done:!t.done,important:!1}}))},t.toggleImportant=function(){t.setState((function(t){return{done:!1,important:!t.important}}))},t.state={done:!1,important:!1},t}return Object(b.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){var t=this.props.label,e=this.state,n="todo-list-item";return e.done&&(n+=" done"),e.important&&(n+=" important"),o.a.createElement("span",{className:n},o.a.createElement("span",{className:"todo-list-item-label",onClick:this.toggleDone},t),o.a.createElement("button",{type:"button",onClick:this.toggleImportant,className:"btn btn-outline-success btn-sm float-right"},o.a.createElement("i",{className:"fa fa-exclamation"})),o.a.createElement("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right"},o.a.createElement("i",{className:"fa fa-trash-o"})))}}]),e}(o.a.Component)),E=function(t){var e=t.items,n=(void 0===e?[]:e).map((function(t){var e=t.id,n=Object(s.a)(t,["id"]);return o.a.createElement("li",{key:e,className:"list-group-item"},o.a.createElement(f,n))}));return o.a.createElement("ul",{className:"list-group todo-list"},n)},h=(n(18),function(t){function e(){return Object(u.a)(this,e),Object(p.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"btn-group"},o.a.createElement("button",{type:"button",className:"btn btn-info"},"All"),o.a.createElement("button",{type:"button",className:"btn btn-outline-secondary"},"Active"),o.a.createElement("button",{type:"button",className:"btn btn-outline-secondary"},"Done"))}}]),e}(o.a.Component)),g=(n(19),function(){return o.a.createElement("div",{className:"todo-app"},o.a.createElement(c,{todoCount:1,doneCount:3}),o.a.createElement("div",{className:"top-panel d-flex"},o.a.createElement(i,null),o.a.createElement(h,null)),o.a.createElement(E,{items:[{id:1,label:"Build awesome app",important:!0},{id:2,label:"Drink some cofee",important:!1},{id:3,label:"Have a nice day",important:!1}]}))});r.a.render(o.a.createElement(g,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.768f273d.chunk.js.map