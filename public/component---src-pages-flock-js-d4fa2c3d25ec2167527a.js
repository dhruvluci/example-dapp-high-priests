(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{CnBM:function(t,e,n){"use strict";n("91GP"),n("VRzm"),n("XfO3"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("LK8F"),n("/SS/"),n("hHhE"),n("rE2o"),n("ioFf");var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var l=n("q1tI"),u=n("17x9"),c=[],s=[];function d(t){var e=t(),n={loading:!0,loaded:null,error:null};return n.promise=e.then((function(t){return n.loading=!1,n.loaded=t,t})).catch((function(t){throw n.loading=!1,n.error=t,t})),n}function p(t){var e={loading:!1,loaded:{},error:null},n=[];try{Object.keys(t).forEach((function(o){var r=d(t[o]);r.loading?e.loading=!0:(e.loaded[o]=r.loaded,e.error=r.error),n.push(r.promise),r.promise.then((function(t){e.loaded[o]=t})).catch((function(t){e.error=t}))}))}catch(o){e.error=o}return e.promise=Promise.all(n).then((function(t){return e.loading=!1,t})).catch((function(t){throw e.loading=!1,t})),e}function f(t,e){return l.createElement((n=t)&&n.__esModule?n.default:n,e);var n}function h(t,e){var d,p;if(!e.loading)throw new Error("react-loadable requires a `loading` component");var h=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:f,webpack:null,modules:null},e),m=null;function y(){return m||(m=t(h.loader)),m.promise}return c.push(y),"function"==typeof h.webpack&&s.push((function(){if(t=h.webpack,"object"===o(n.m)&&t().every((function(t){return void 0!==t&&void 0!==n.m[t]})))return y();var t})),p=d=function(e){function n(o){r(this,n);var a=i(this,e.call(this,o));return a.retry=function(){a.setState({error:null,loading:!0,timedOut:!1}),m=t(h.loader),a._loadModule()},y(),a.state={error:m.error,pastDelay:!1,timedOut:!1,loading:m.loading,loaded:m.loaded},a}return a(n,e),n.preload=function(){return y()},n.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},n.prototype._loadModule=function(){var t=this;if(this.context.loadable&&Array.isArray(h.modules)&&h.modules.forEach((function(e){t.context.loadable.report(e)})),m.loading){"number"==typeof h.delay&&(0===h.delay?this.setState({pastDelay:!0}):this._delay=setTimeout((function(){t.setState({pastDelay:!0})}),h.delay)),"number"==typeof h.timeout&&(this._timeout=setTimeout((function(){t.setState({timedOut:!0})}),h.timeout));var e=function(){t._mounted&&(t.setState({error:m.error,loaded:m.loaded,loading:m.loading}),t._clearTimeouts())};m.promise.then((function(){e()})).catch((function(t){e()}))}},n.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},n.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},n.prototype.render=function(){return this.state.loading||this.state.error?l.createElement(h.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?h.render(this.state.loaded,this.props):null},n}(l.Component),d.contextTypes={loadable:u.shape({report:u.func.isRequired})},p}function m(t){return h(d,t)}m.Map=function(t){if("function"!=typeof t.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return h(p,t)};var y=function(t){function e(){return r(this,e),i(this,t.apply(this,arguments))}return a(e,t),e.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},e.prototype.render=function(){return l.Children.only(this.props.children)},e}(l.Component);function b(t){for(var e=[];t.length;){var n=t.pop();e.push(n())}return Promise.all(e).then((function(){if(t.length)return b(t)}))}y.propTypes={report:u.func.isRequired},y.childContextTypes={loadable:u.shape({report:u.func.isRequired}).isRequired},m.Capture=y,m.preloadAll=function(){return new Promise((function(t,e){b(c).then(t,e)}))},m.preloadReady=function(){return new Promise((function(t,e){b(s).then(t,t)}))},t.exports=m},yfjT:function(t,e,n){"use strict";n.r(e);var o=n("q1tI"),r=n.n(o),i=n("vrFN"),a=n("yBb5"),l=n("CnBM"),u=n.n(l)()({loader:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"vGNc"))},loading:function(t){return t.error?r.a.createElement("div",null,"Error! ",r.a.createElement("button",{onClick:function(){return location.reload()}},"Retry")):t.pastDelay?r.a.createElement("div",null):t.timedOut?r.a.createElement("div",null,"Taking a long time..."," ",r.a.createElement("button",{onClick:function(){return location.reload()}},"Retry")):null},delay:300,timeout:1e4});e.default=function(){return r.a.createElement(a.a,null,r.a.createElement(i.a,{title:"My Flock",description:"Check out my flock here.",image:"https://imgur.com/ldBwSph.png"}),r.a.createElement(u,null))}}}]);
//# sourceMappingURL=component---src-pages-flock-js-d4fa2c3d25ec2167527a.js.map