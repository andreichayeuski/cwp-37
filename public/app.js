!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function u(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}var p=function(){function e(){c(this,e),this.list=[]}return u(e,[{key:"getItems",value:function(){return this.list}},{key:"getActiveItems",value:function(){return this.list.filter(function(e){return!e.completed})}},{key:"getCompletedItems",value:function(){return this.list.filter(function(e){return e.completed})}},{key:"getActiveCount",value:function(){return this.list.filter(function(e){return!e.completed}).length}},{key:"getCompletedCount",value:function(){return this.list.filter(function(e){return e.completed}).length}},{key:"addItem",value:function(e){var t={id:Math.floor(Date.now()/1e4)+this.list.length,text:e,completed:!1};return this.list.push(t),t}},{key:"removeItem",value:function(e){var t=this.list.findIndex(function(t){return t.id===e});this.list.splice(t,1)}},{key:"removeCompleted",value:function(){this.list=this.getActiveItems()}},{key:"updateItem",value:function(e,t){var n=this.list.findIndex(function(t){return t.id===e});this.list[n].text=t}},{key:"toggleItem",value:function(e){var t=this.list.findIndex(function(t){return t.id===e});this.list[t].completed=!this.list[t].completed}},{key:"switchAllTo",value:function(e){this.list.forEach(function(t){return t.completed=e})}}]),e}(),m=function(){function e(){c(this,e),this.links=[{title:"All"},{title:"Active"},{title:"Completed"}],this.active=this.links[0]}return u(e,[{key:"getLinks",value:function(){return this.links}},{key:"getActive",value:function(){return this.active}},{key:"setActive",value:function(e){this.active=e}}]),e}(),d=function(){function e(){c(this,e),this.closeTimeout=5e3,this.notifications=[]}return u(e,[{key:"getNotifications",value:function(){return this.notifications}},{key:"push",value:function(e,t,n){var i=this,o=setTimeout(function(){i.notifications=i.notifications.filter(function(t){return t.task.id!==e.id}),n()},this.closeTimeout);this.notifications.push({task:e,timerId:o,error:t})}}]),e}(),f=new p,h=new m,v=new d,_=function(e){function t(){return c(this,t),i(this,r(t).apply(this,arguments))}return a(t,React.Component),u(t,[{key:"render",value:function(){return React.createElement("div",{className:"notifications_container"},this.props.notifications.map(function(e){return React.createElement(g,{notification:e})}))}}]),t}(),g=function(e){function t(){return c(this,t),i(this,r(t).apply(this,arguments))}return a(t,React.PureComponent),u(t,[{key:"render",value:function(){var e=this.props.notification,t=e.task;return e.error?React.createElement("div",{className:"notification_item reject_add"},"The task ",t.id,"(",t.text.slice(0,10),"...) was not added to the task list"):React.createElement("div",{className:"notification_item success_add"},"The task ",t.id,"(",t.text.slice(0,10),"...) was successfully added to the list")}}]),t}(),k=function(e){function t(){return c(this,t),i(this,r(t).apply(this,arguments))}return a(t,React.PureComponent),u(t,[{key:"render",value:function(){return React.createElement("div",{className:"popup"},React.createElement("div",{className:"popup_inner"},React.createElement("h1",null,this.props.text),React.createElement("button",{onClick:this.props.complete},"Yes"),React.createElement("button",{onClick:this.props.closePopup},"No")))}}]),t}(),y=function(e){function t(){return c(this,t),i(this,r(t).apply(this,arguments))}return a(t,React.PureComponent),u(t,[{key:"render",value:function(){return React.createElement("div",{className:"todo-info"},React.createElement("span",{className:"todo-info__remains"},this.props.remains," remains")," ",React.createElement("span",{className:"todo-info__completed"},"/ ",this.props.completed," completed"))}}]),t}(),b=function(e){function t(e){var n;return c(this,t),(n=i(this,r(t).call(this,e)))._save=n._save.bind(o(n)),n._onChange=n._onChange.bind(o(n)),n._onKeyDown=n._onKeyDown.bind(o(n)),n.state={text:n.props.text?n.props.text:""},n}return a(t,React.PureComponent),u(t,[{key:"render",value:function(){return React.createElement("input",{className:this.props.className,placeholder:this.props.placeholder,value:this.state.text,onChange:this._onChange,onKeyDown:this._onKeyDown})}},{key:"_save",value:function(){this.props.onSave(this.state.text),this.setState({text:""})}},{key:"_onChange",value:function(e){this.setState({text:e.target.value})}},{key:"_onKeyDown",value:function(e){13===e.keyCode&&this._save()}}]),t}(),I=function(e){function t(e){var n;return c(this,t),(n=i(this,r(t).call(this,e)))._edit=n._edit.bind(o(n)),n._save=n._save.bind(o(n)),n._toggleItem=n._toggleItem.bind(o(n)),n._removeItem=n._removeItem.bind(o(n)),n._togglePopup=n._togglePopup.bind(o(n)),n.state={isEditing:!1,popup:!1},n}return a(t,React.Component),u(t,[{key:"render",value:function(){var e=this.state.isEditing?React.createElement(b,{className:"todo__text todo__text_editing",text:this.props.task.text,onSave:this._save}):React.createElement("span",{className:"todo__text"+(this.props.task.completed?" todo__text_completed":""),onDoubleClick:this._edit},this.props.task.text);return React.createElement("div",{className:"todo__item"},React.createElement("input",{type:"checkbox",className:"todo__checkbox",checked:this.props.task.completed,onChange:this._toggleItem}),React.createElement("span",{className:"todo__destroy",onClick:this._togglePopup},"-")," ",e,this.state.popup?React.createElement(k,{text:"Do you sure?",complete:this._removeItem,closePopup:this._togglePopup}):null)}},{key:"_edit",value:function(){this.setState({isEditing:!0})}},{key:"_save",value:function(e){this.setState({isEditing:!1}),this.props.updateItem(this.props.task.id,e)}},{key:"_toggleItem",value:function(){this.props.toggleItem(this.props.task.id)}},{key:"_removeItem",value:function(){this.props.removeItem(this.props.task.id)}},{key:"_togglePopup",value:function(){this.setState({popup:!this.state.popup})}}]),t}(),C=function(e){function t(){return c(this,t),i(this,r(t).apply(this,arguments))}return a(t,React.Component),u(t,[{key:"render",value:function(){var e=this,t=this.props.tasks.map(function(t){return React.createElement(I,{key:t.id,task:t,toggleItem:e.props.toggleItem,removeItem:e.props.removeItem,updateItem:e.props.updateItem})});return React.createElement("div",{className:"todo__list"},React.createElement("div",{className:"todo__toggle-all"},React.createElement("input",{type:"checkbox",className:"todo__checkbox",checked:this.props.areAllComplete,onChange:this.props.toggleAll})," ","Complete all"),t)}}]),t}(),R=function(e){function t(e){var n;return c(this,t),(n=i(this,r(t).call(this,e)))._save=n._save.bind(o(n)),n}return a(t,React.PureComponent),u(t,[{key:"render",value:function(){return React.createElement("div",{className:"todo__form"},React.createElement(b,{className:"todo__text-input",placeholder:"I need to do...",onSave:this._save}))}},{key:"_save",value:function(e){this.props.addItem(e)}}]),t}(),E=function(e){function t(){return c(this,t),i(this,r(t).apply(this,arguments))}return a(t,React.PureComponent),u(t,[{key:"render",value:function(){return React.createElement("div",{className:"todo__clear",onClick:this.props.removeCompleted},"Clear")}}]),t}(),x=function(e){function t(e){var n;return c(this,t),(n=i(this,r(t).call(this,e)))._navigate=n._navigate.bind(o(n)),n}return a(t,React.PureComponent),u(t,[{key:"render",value:function(){return React.createElement("div",{className:"nav__item"+(this.props.isActive?" nav__item_active":""),onClick:this._navigate},this.props.link.title)}},{key:"_navigate",value:function(){this.props.navigate(this.props.link)}}]),t}(),A=function(e){function t(){return c(this,t),i(this,r(t).apply(this,arguments))}return a(t,React.PureComponent),u(t,[{key:"render",value:function(){var e=this,t=this.props.links.map(function(t){return React.createElement(x,{key:t.title,link:t,navigate:e.props.navigate,isActive:t.title===e.props.activeLink.title})});return React.createElement("div",{className:"nav"},t)}}]),t}(),N=function(e){function t(e){var n;return c(this,t),(n=i(this,r(t).call(this,e)))._rerender=n._rerender.bind(o(n)),n._toggleItem=n._toggleItem.bind(o(n)),n._toogleAll=n._toogleAll.bind(o(n)),n._removeItem=n._removeItem.bind(o(n)),n._addItem=n._addItem.bind(o(n)),n._updateItem=n._updateItem.bind(o(n)),n._removeCompleted=n._removeCompleted.bind(o(n)),n._navigate=n._navigate.bind(o(n)),n.state={activeLink:{title:"All"},areAllCompleted:!0,completed:0,links:[],remains:0,tasks:[],notifications:[]},n}return a(t,React.Component),u(t,[{key:"componentWillMount",value:function(){var e=this;axios.get("/tasks").then(function(t){var n=t.data;f.list=n,e._rerender()})}},{key:"render",value:function(){return React.createElement("div",{className:"global"},React.createElement("div",{className:"todo"},React.createElement("div",{className:"todo__title"},"React ToDo"),React.createElement(A,{links:this.state.links,activeLink:this.state.activeLink,navigate:this._navigate}),React.createElement(y,{remains:this.state.remains,completed:this.state.completed}),React.createElement(C,{tasks:this.state.tasks,areAllComplete:this.state.areAllCompleted,toggleItem:this._toggleItem,toggleAll:this._toogleAll,removeItem:this._removeItem,updateItem:this._updateItem}),React.createElement(R,{addItem:this._addItem}),React.createElement(E,{removeCompleted:this._removeCompleted})),React.createElement("div",{className:"notifications"},React.createElement(_,{notifications:this.state.notifications})))}},{key:"_getState",value:function(){var e={remains:f.getActiveCount(),completed:f.getCompletedCount(),links:h.getLinks(),activeLink:h.getActive()};return e.areAllCompleted=0===e.remains,"All"===e.activeLink.title?e.tasks=f.getItems():"Completed"===e.activeLink.title?e.tasks=f.getCompletedItems():e.tasks=f.getActiveItems(),e.notifications=v.getNotifications(),e}},{key:"_rerender",value:function(){this.setState(this._getState())}},{key:"_toggleItem",value:function(e){var t=this;axios.post("/toggle-item",{id:e}).then(function(){f.toggleItem(e),t._rerender()})}},{key:"_toogleAll",value:function(){var e=this;axios.post("/toggle-all",{areAllCompleted:!this.state.areAllCompleted}).then(function(){f.switchAllTo(!e.state.areAllCompleted),e._rerender()})}},{key:"_removeItem",value:function(e){var t=this;axios.delete("/tasks/".concat(e)).then(function(){f.removeItem(e),t._rerender()})}},{key:"_addItem",value:function(e){var t=this,n=f.addItem(e);this._rerender(),axios.post("/tasks",{task:n}).then(function(e){var i=e.data;i.error&&f.removeItem(i.id),v.push(n,i.error,function(){t._rerender()}),t._rerender()})}},{key:"_updateItem",value:function(e,t){var n=this;axios.put("/tasks/".concat(e),{text:t}).then(function(){f.updateItem(e,t),n._rerender()})}},{key:"_removeCompleted",value:function(){var e=this;axios.post("/clear",{}).then(function(){f.removeCompleted(),e._rerender()})}},{key:"_navigate",value:function(e){h.setActive(e),this._rerender()}}]),t}();ReactDOM.render(React.createElement(N,null),document.getElementById("app"))}]);
//# sourceMappingURL=app.js.map