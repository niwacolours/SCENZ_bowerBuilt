//>>built
define(["require","exports","./nextTick","./now","./requestAnimationFrame"],function(E,b,y,z,A){function B(a){if(void 0===a&&(a=b.now()),b.debug.rafId=null,0<f.length&&(b.debug.rafId=h()),0<k){var d=a-k;if(m=Math.min(d,m),d<q)return}b.debug.executeFrameTasks(a)}function h(){return b.debug.requestNextFrame?b.debug.requestNextFrame(u):u()}function v(){for(var a=0;a<f.length;){var d=f[a];if(a++,d.removed){f.splice(a-1,1);for(var b=0;b<n.length;b++){var c=n[b];if(d.phases[c]){var c=r[c],g=c.indexOf(d);
-1!==g&&c.splice(g,1)}}}}}function w(){for(;t.length;){var a=t.shift();a.isActive&&(a.isActive=!1,a.callback())}b.debug.willDispatch=!1}function u(){return A(B)}Object.defineProperty(b,"__esModule",{value:!0});b.now=z;var C=function(){return function(a){this.phases=a;this.paused=!1;this.pausedAt=0;this.epoch=-1;this.dt=0;this.ticks=-1;this.removed=!1}}(),D=function(){function a(a){this.callback=a;this.isActive=!0}return a.prototype.remove=function(){this.isActive=!1},a}(),k=-1,q=0,p=0,m=Number.POSITIVE_INFINITY,
l={time:0,deltaTime:0,elapsedFrameTime:0,frameDuration:0,spendInTask:0},n=["prepare","preRender","render","postRender","update"],t=[],f=[],r={prepare:[],preRender:[],render:[],postRender:[],update:[]},x=function(){function a(a){this._task=a}return a.prototype.remove=function(){this._task.removed=!0},a.prototype.pause=function(){this._task.paused||(this._task.paused=!0,this._task.pausedAt=b.now())},a.prototype.resume=function(){this._task.paused&&(this._task.paused=!1,-1!==this._task.epoch&&(this._task.epoch+=
b.now()-this._task.pausedAt))},a}();b.FrameTaskHandle=x;b.debug={frameTasks:f,rafId:null,requestNextFrame:null,willDispatch:!1,clearFrameTasks:function(a){void 0===a&&(a=!1);for(var b=0;b<f.length;b++)f[b].removed=!0;a&&v()},dispatch:w,executeFrameTasks:function(a){void 0===a&&(a=b.now());0>k&&(k=a);var d=a-k;k=a;for(var e=0;e<f.length;e++){var c=f[e];-1!==c.epoch&&(c.dt=d)}for(e=0;e<n.length;e++)for(var d=n[e],g=r[d],h=0;h<g.length;h++)c=g[h],c.paused||c.removed||(0===e&&c.ticks++,-1===c.epoch&&
(c.epoch=a),l.time=a,l.deltaTime=c.dt,l.elapsedFrameTime=b.now()-a,l.frameDuration=0<p?p:m,l.spendInTask=a-c.epoch,c.phases[d].call(c,l));v()}};b.schedule=function(a){a=new D(a);return t.push(a),b.debug.willDispatch||(b.debug.willDispatch=!0,y(w)),a};b.addFrameTask=function(a){var d=new C(a);f.push(d);for(var e=0,c=n;e<c.length;e++){var g=c[e];a[g]&&r[g].push(d)}return b.debug.rafId||(k=-1,b.debug.rafId=h()),new x(d)};b.setFrameRate=function(a){if(0>=a)return q=0,void(p=0);var b=1.05*m;a=Math.ceil(1E3/
a/b);q=(a-1)*b;p=a*m};b.requestNextFrame=h});