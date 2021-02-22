//>>built
define("require exports ../../../../../../core/tsSupport/extendsHelper dojo/has ../../../../../../core/Logger ../../../../../../core/libs/earcut/earcut ../../color ../../definitions ../../enums ../../enums ../../number ../../TileClipper ../../WGLDisplayRecord ../Tesselator ./WGLMeshTemplate".split(" "),function(v,B,E,F,G,H,I,J,A,K,m,L,C,M,N){Object.defineProperty(B,"__esModule",{value:!0});var O=G.getLogger("esri.views.2d.engine.webgl.mesh.templates.WGLFillTemplate"),u=[],z=[];v=function(v){function h(c,
a,e,d,b,g,f,l){var k=v.call(this)||this;k.fillColor=d;k.tl=b;k.br=g;k.aux=f;k.isBFS=l;k.geometryType=A.WGLGeometryType.FILL;k.useLibtess=!1;d=F("esri-featurelayer-webgl");return k.useLibtess="libtess"===((d||{}).tesselator||"libtess"),k.useLibtess&&(k._tesselator=new M.default),k.vvFlags=a,k._materialStore=c,k.materialId=k._materialStore.createSpriteMaterial(e,k.geometryType,a),k._tileClipper=new L.TileClipper(0,0,0,1,8),k._tileClipper.setExtent(512),k}return E(h,v),h.fromSimpleFill=function(c,a,
e,d,b,g){void 0===g&&(g=!1);e=(b=e.color)&&"none"!==e.style&&I.premultiplyAlphaRGBA(b)||0;if(!d)return new h(c,a,null,e,0,0,0,g);var f=d.rect;b=f.x+1;var l=f.y+1,k=f.x+1+d.width,f=f.y+1+d.height;return new h(c,a,d,e,m.i1616to32(b,l),m.i1616to32(k,f),m.i8888to32(m.nextHighestPowerOfTwo(k-b),m.nextHighestPowerOfTwo(f-l),0,0),g)},h.fromPictureFill=function(c,a,e,d,b,g){void 0===g&&(g=!1);b=d.rect;var f=b.x+1+d.width,l=b.y+1+d.height;return new h(c,a,d,J.PICTURE_FILL_COLOR,m.i1616to32(b.x+1,b.y+1),m.i1616to32(f,
l),m.i8888to32(m.nextHighestPowerOfTwo(e.width),m.nextHighestPowerOfTwo(e.height),0,0),g)},h.prototype.writeMesh=function(c,a,e,d,b,g,f){if(u.length=0,this.vvFlags&K.WGLVVFlag.COLOR||0!==this.fillColor){if("esriGeometryPolygon"!==e)return void O.error("Unable to handle geometryType: "+e);var l=b.geometry,l=(b=this._isClippingRequired(l))?this._clip(l,!this.useLibtess):l.rings;return this.useLibtess?this._writeMeshLibtess(c,a,e,d,l,b,g,f):this._writeMeshEarcut(c,a,e,d,l,b,g,f)}},h.prototype._isClippingRequired=
function(c){var a=0;for(c=c.rings;a<c.length;a++){var e=c[a],d=e.length;if(!(3>d)){var b=e[0][0],g=e[0][1];if(-8>b||520<b||-8>g||520<g)return!0;for(var f=1;f<d;++f)if(b+=e[f][0],g+=e[f][1],-8>b||520<b||-8>g||520<g)return!0}}return!1},h.prototype._clip=function(c,a){var e;this._tileClipper.reset(3);for(var d=0,b=c.rings;d<b.length;d++){var g=b[d],f=g.length;if(!(3>f)){c=g[0][0];e=g[0][1];this._tileClipper.moveTo(c,e);for(var l=1;l<f;++l)c+=g[l][0],e+=g[l][1],this._tileClipper.lineTo(c,e);this._tileClipper.close()}}return this._tileClipper.result(a)},
h.prototype._writeMeshLibtess=function(c,a,e,d,b,g,f,l){if(b&&b.length){e=this._materialStore.get(this.materialId);f=[];var k=a.indexVector;a=a.get("geometry");var h=new C(d,this.geometryType,this.materialId),D=this._getOffset(a,e);h.vertexFrom=D;h.indexFrom=k.length;c.push(h);this._tesselator.beginPolygon(u,f);for(c=0;c<b.length;c++){var r=b[c];if(!(3>r.length)){this._tesselator.beginContour();var p=void 0,t=void 0;g?(p=r[0].x,t=r[0].y):(p=r[0][0],t=r[0][1]);var n=[p,t,0];this._tesselator.addVertex(n,
n);for(n=1;n<r.length-1;n++){var q=void 0,m=void 0;g?(p=r[n].x,t=r[n].y):(q=r[n][0],m=r[n][1],p+=q,t+=m);q=[p,t,0];this._tesselator.addVertex(q,q)}this._tesselator.endContour()}}this._tesselator.endPolygon();this._writeVerticesLibTess(h,a,d,u,e,l);this._writeIndicesLibTess(h,k,D,f)}},h.prototype._writeMeshEarcut=function(c,a,e,d,b,g,f,l){if(b&&b.length){e=this._materialStore.get(this.materialId);f=a.indexVector;a=a.get("geometry");var k=new C(d,this.geometryType,this.materialId),h=this._getOffset(a,
e);k.vertexFrom=h;k.indexFrom=f.length;c.push(k);for(var m=c=0,r=0;r<b.length;r++){var p=b[r],t=m,n=void 0,q=void 0;g?(n=p[0].x,q=p[0].y):(n=p[0][0],q=p[0][1]);u[m++]=n;u[m++]=q;for(var v=0,w=1;w<p.length;++w){var x=void 0,y=void 0;g?(x=n,y=q,n=p[w].x,q=p[w].y,x=n-x,y=q-y):(x=p[w][0],y=p[w][1],n+=x,q+=y);v-=x*(q+q+y);u[m++]=n;u[m++]=q}0<v?(0<t-c&&(this._write(k,f,a,h,d,u,z,c,t,e,l),c=t),z.length=0):0>v&&0<t-c?z.push(.5*(t-c)):m=t}0<m-c&&this._write(k,f,a,h,d,u,z,c,m,e,l);u.length=z.length=0}},h.prototype._write=
function(c,a,e,d,b,g,f,l,k,h,m){d=H(g.slice(l,k),f,2);d.length&&(l=this._getOffset(e,h),this._writeVertices(c,e,b,g,f,h,m),this._writeIndices(c,a,l,d))},h.prototype._getOffset=function(c,a){a=a.materialKeyInfo.hasVV()?8:6;return c.length/a},h.prototype._writeVertices=function(c,a,e,d,b,g,f){for(b=0;b<d.length;b+=2){var h=m.i1616to32(d[b],d[b+1]);a.push(h);a.push(e);a.push(this.fillColor);a.push(this.tl);a.push(this.br);a.push(this.aux);this._writeVV(a,f,g);c.vertexCount++}},h.prototype._writeIndices=
function(c,a,e,d){for(var b=0;b<d.length;b+=3)a.push(e+d[b]),a.push(e+d[b+1]),a.push(e+d[b+2]),c.indexCount+=3},h.prototype._writeVerticesLibTess=function(c,a,e,d,b,g){for(var f=0;f<d.length;f+=2){var h=m.i1616to32(d[f],d[f+1]);a.push(h);a.push(e);a.push(this.fillColor);a.push(this.tl);a.push(this.br);a.push(this.aux);this._writeVV(a,g,b);c.vertexCount++}},h.prototype._writeIndicesLibTess=function(c,a,e,d){for(var b=0;b<d.length;b++)a.push(e+d[b]),c.indexCount++},h.prototype._writeVV=function(c,a,
e){e.materialKeyInfo.hasVV()&&(this.isBFS?(c.push(4294967295),c.push(4294967295)):(c.push(a[A.VVType.COLOR]),c.push(a[A.VVType.OPACITY])))},h}(N.default);B.default=v});