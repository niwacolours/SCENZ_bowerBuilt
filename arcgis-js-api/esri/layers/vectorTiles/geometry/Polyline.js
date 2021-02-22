//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/lang ../core/accessorSupport/decorators ./Extent ./Geometry ./Point ./SpatialReference ./support/zmUtils".split(" "),function(h,O,L,k,w,e,I,M,l,N,x){function J(m){return function(b,g){return null==b?g:null==g?b:m(b,g)}}var m=J(Math.min),g=J(Math.max);h=function(h){function b(){for(var a=0;a<arguments.length;a++);a=h.call(this)||this;return a.paths=[],a.type="polyline",a}return L(b,h),r=b,b.prototype.normalizeCtorArgs=
function(a,n){var c,d,b=null,f=null;return a&&!Array.isArray(a)?(b=a.paths?a.paths:null,n||(a.spatialReference?n=a.spatialReference:a.paths||(n=a)),c=a.hasZ,d=a.hasM):b=a,b=b||[],n=n||N.WGS84,b.length&&b[0]&&null!=b[0][0]&&"number"==typeof b[0][0]&&(b=[b]),f=b[0]&&b[0][0],f&&(void 0===c&&void 0===d?(c=2<f.length,d=!1):void 0===c?c=!d&&3<f.length:void 0===d&&(d=!c&&3<f.length)),{paths:b,spatialReference:n,hasZ:c,hasM:d}},Object.defineProperty(b.prototype,"extent",{get:function(){var a=this.hasZ,n=
this.hasM,b=this.spatialReference,d=this.paths,K=a?3:2;if(!d.length||!d[0].length)return null;for(var f=d[0][0],h=f[0],f=f[1],e=d[0][0],l=e[0],e=e[1],k=void 0,y=void 0,r=void 0,w=void 0,D=[],E=0;E<d.length;E++){for(var z=d[E],t=z[0],F=t[0],t=t[1],u=z[0],G=u[0],u=u[1],A=void 0,B=void 0,x=void 0,q=void 0,H=0;H<z.length;H++){var v=z[H],p=v[0],C=v[1];if(h=m(h,p),f=m(f,C),l=g(l,p),e=g(e,C),F=m(F,p),t=m(t,C),G=g(G,p),u=g(u,C),a&&2<v.length)p=v[2],k=m(k,p),y=g(y,p),A=m(A,p),B=g(B,p);n&&v.length>K&&(q=v[K],
r=m(k,q),w=g(y,q),x=m(A,q),q=g(B,q))}D.push(new I({xmin:F,ymin:t,zmin:A,mmin:x,xmax:G,ymax:u,zmax:B,mmax:q,spatialReference:b}))}d=new I;return d.xmin=h,d.ymin=f,d.xmax=l,d.ymax=e,d.spatialReference=b,a&&(d.zmin=k,d.zmax=y),n&&(d.mmin=r,d.mmax=w),d.cache._partwise=1<D.length?D:null,d},enumerable:!0,configurable:!0}),b.prototype.writePaths=function(a,b,c,d){b.paths=w.clone(this.paths)},b.prototype.addPath=function(a){if(a){this.clearCache();var b=this.paths,c=b.length;if(Array.isArray(a[0]))b[c]=a.concat();
else{for(var d=[],e=0,f=a.length;e<f;e++)d[e]=a[e].toArray();b[c]=d}return this}},b.prototype.clone=function(){var a=new r;return a.spatialReference=this.spatialReference,a.paths=w.clone(this.paths),a.hasZ=this.hasZ,a.hasM=this.hasM,a},b.prototype.getPoint=function(a,b){if(!this._validateInputs(a,b))return null;a=this.paths[a][b];b=this.hasZ;var c=this.hasM;return b&&!c?new l(a[0],a[1],a[2],void 0,this.spatialReference):c&&!b?new l(a[0],a[1],void 0,a[2],this.spatialReference):b&&c?new l(a[0],a[1],
a[2],a[3],this.spatialReference):new l(a[0],a[1],this.spatialReference)},b.prototype.insertPoint=function(a,b,c){return this._validateInputs(a,b,!0)?(this.clearCache(),x.updateSupportFromPoint(this,c),Array.isArray(c)||(c=c.toArray()),this.paths[a].splice(b,0,c),this):this},b.prototype.removePath=function(a){if(!this._validateInputs(a,null))return null;this.clearCache();a=this.paths.splice(a,1)[0];var b=this.spatialReference;return a.map(function(a){return new l(a,b)})},b.prototype.removePoint=function(a,
b){return this._validateInputs(a,b)?(this.clearCache(),new l(this.paths[a].splice(b,1)[0],this.spatialReference)):null},b.prototype.setPoint=function(a,b,c){return this._validateInputs(a,b)?(this.clearCache(),x.updateSupportFromPoint(this,c),Array.isArray(c)||(c=c.toArray()),this.paths[a][b]=c,this):this},b.prototype._validateInputs=function(a,b,c){return(void 0===c&&(c=!1),null==a||0>a||a>=this.paths.length)||null!=b&&(a=this.paths[a],c&&(0>b||b>a.length)||!c&&(0>b||b>=a.length))?!1:!0},b.prototype.toJSON=
function(a){return this.write(null,a)},k([e.property({dependsOn:["hasM","hasZ","paths"]})],b.prototype,"cache",void 0),k([e.property({dependsOn:["cache"],readOnly:!0})],b.prototype,"extent",null),k([e.property({type:[[[Number]]],json:{write:{isRequired:!0}}})],b.prototype,"paths",void 0),k([e.writer("paths")],b.prototype,"writePaths",null),b=r=k([e.subclass("esri.geometry.Polyline")],b);var r}(e.declared(M));return h.prototype.toJSON.isDefaultToJSON=!0,h});