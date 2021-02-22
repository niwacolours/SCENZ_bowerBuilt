//>>built
define("require exports ../../../../config ../../../../core/Error ../../../../core/Logger ../../../../core/promiseUtils ./CIMSymbolHelper ./fontUtils ./GlyphMosaic ./GlyphSource ./SDFHelper ./SpriteMosaic ./Utils ../../../3d/support/imageUtils".split(" "),function(x,y,n,k,p,g,h,q,r,t,m,u,f,v){function w(e){if(e.type){switch(f.normalizeSymbolType(e.type)){case "simple-marker":return"simple-marker"+e.style;case "simple-line":return"simple-line"+e.style}if(f.isPictureSymbol(e))return e.url?e.url:e.imageData+
""+e.width+e.height}return JSON.stringify(e)}var l=p.getLogger("esri.views.2d.engine.webgl.TextureManager");return function(){function e(){this._invalidFontsMap=new Map;this._spriteMosaic=new u(1024,1024,250);this._glyphSource=new t(n.fontsUrl+"/{fontstack}/{range}.pbf");this._glyphMosaic=new r(1024,1024,this._glyphSource)}return Object.defineProperty(e.prototype,"sprites",{get:function(){return this._spriteMosaic},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"glyphs",{get:function(){return this._glyphMosaic},
enumerable:!0,configurable:!0}),e.prototype.dispose=function(){this._spriteMosaic.dispose();this._glyphMosaic.dispose();this._rasterizationCanvas=null},e.prototype.rasterizeItem=function(a,b){return void 0===b&&(b=null),a?a.type&&-1!==a.type.toLowerCase().indexOf("3d")?(l.error(new k("mapview-invalid-type","Mapviewer does not support 3d symbol type: "+a.type,a)),g.resolve({glyphMosaicItems:[],spriteMosaicItem:null})):!a.type||"text"!==a.type&&"esriTS"!==a.type?this._rasterizeSpriteSymbol(a).then(function(a){return{spriteMosaicItem:a}}):
this._rasterizeTextSymbol(a,b).then(function(a){return{glyphMosaicItems:a}}):(l.error(new k("mapview-null-resource","Unable to rasterize null resource")),g.resolve(null))},e.prototype.bindSpritePage=function(a,b,d,c){c||(c=9729);this._spriteMosaic.bind(a,c,b,d)},e.prototype.bindGlyphsPage=function(a,b,d){this._glyphMosaic.bind(a,9729,b,d)},e.prototype._rasterizeTextSymbol=function(a,b){var d=this,c=q.getFullyQualifiedFontName(a.font);a=this._invalidFontsMap.has(c);return this._glyphMosaic.getGlyphItems(a?
"arial-unicode-ms-regular":c,b).catch(function(a){return l.error(new k("mapview-invalid-resource","Couldn't find font "+c+". Falling back to Arial Unicode MS Regular")),d._invalidFontsMap.set(c,!0),d._glyphMosaic.getGlyphItems("arial-unicode-ms-regular",b)})},e.prototype._rasterizeSpriteSymbol=function(a){var b=this;if(a&&(f.isFillSymbol(a)||f.isLineSymbol(a))&&"style"in a&&("solid"===a.style||"esriSFSSolid"===a.style||"esriSLSSolid"===a.style||"none"===a.style||"esriSFSNull"===a.style||"esriSLSNull"===
a.style))return g.resolve(null);var d=w(a);if(this._spriteMosaic.has(d))return g.resolve(this._spriteMosaic.getSpriteItem(d));if(a.url||a.imageData)return v.requestImage(a.imageData?"data:"+a.contentType+";base64,"+a.imageData:a.url).then(function(c){c=b._rasterizeResource(c);return b._addItemToMosaic(d,c.size,c.anchor,c.image,!f.isMarkerSymbol(a),c.sdf)});var c=this._rasterizeResource(a);return g.resolve(this._addItemToMosaic(d,c.size,c.anchor,c.image,!f.isMarkerSymbol(a),c.sdf))},e.prototype._rasterizeResource=
function(a){if(a instanceof HTMLImageElement){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas"));this._rasterizationCanvas.width=a.width;this._rasterizationCanvas.height=a.height;var b=this._rasterizationCanvas.getContext("2d");b.drawImage(a,0,0,a.width,a.height);for(var b=b.getImageData(0,0,a.width,a.height),b=new Uint8Array(b.data),d=void 0,c=0;c<b.length;c+=4)d=b[c+3]/255,b[c]*=d,b[c+1]*=d,b[c+2]*=d;return{size:[a.width,a.height],anchor:[0,0],image:new Uint32Array(b.buffer),
sdf:!1}}return this._rasterizeJSON(a)},e.prototype._addItemToMosaic=function(a,b,d,c,e,f){return this._spriteMosaic.addSpriteItem(a,b,d,c,e,f)},e.prototype._rasterizeJSON=function(a){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),"simple-fill"===a.type||"esriSFS"===a.type){var b=h.SymbolHelper.rasterizeSimpleFill(this._rasterizationCanvas,a.style);a=b[0];var d=b[1],b=b[2];return{size:[d,b],anchor:[0,0],image:new Uint32Array(a.buffer),sdf:!1}}if("simple-line"===
a.type||"esriSLS"===a.type)return b=h.SymbolHelper.rasterizeSimpleLine(this._rasterizationCanvas,a.style),a=b[0],d=b[1],b=b[2],{size:[d,b],anchor:[0,0],image:new Uint32Array(a.buffer),sdf:!0};if("simple-marker"===a.type||"esriSMS"===a.type?(d=h.CIMSymbolHelper.fromSimpleMarker(a),b=!0):(d=a,b=m.SDFHelper.checkSDF(d)),b)return d=(new m.SDFHelper).buildSDF(d),a=d[0],{size:[d[1],d[2]],anchor:[0,0],image:new Uint32Array(a.buffer),sdf:!0};var c=h.CIMSymbolHelper.rasterize(this._rasterizationCanvas,d);
a=c[0];d=c[1];b=c[2];return{size:[d,b],anchor:[c[3],c[4]],image:new Uint32Array(a.buffer),sdf:!1}},e}()});