//>>built
define(["require","exports","dojo/sniff","./global","../views/webgl/context-util"],function(m,n,a,c,g){function k(){var a={available:!1,version:0,majorPerformanceCaveat:!1,supportsHighPrecisionFragment:!1,supportsVertexShaderSamplers:!1,supportsElementIndexUint:!1,supportsStandardDerivatives:!1},b=document.createElement("canvas");if(!b)return a;var d=g.createContext(b,{failIfMajorPerformanceCaveat:!0},"webgl");if(d||(d=g.createContext(b,{},"webgl"))&&(a.majorPerformanceCaveat=!0),!d)return a;b=d.getParameter(d.VERSION);
if(!b)return a;if(b=b.match(/^WebGL\s+([\d.]*)/))a.version=parseFloat(b[1]),a.available=.94<=a.version,b=d.getShaderPrecisionFormat(d.FRAGMENT_SHADER,d.HIGH_FLOAT),a.supportsHighPrecisionFragment=b&&0<b.precision,a.supportsVertexShaderSamplers=0<d.getParameter(d.MAX_VERTEX_TEXTURE_IMAGE_UNITS),a.supportsElementIndexUint=null!==d.getExtension("OES_element_index_uint"),a.supportsStandardDerivatives=null!==d.getExtension("OES_standard_derivatives");return a}function l(){var a={available:!1,version:0},
b=document.createElement("canvas");if(!b)return a;b=g.createContext(b,{},"webgl2");if(!b)return a;a.available=!0;b=b.getParameter(b.VERSION);if(!b)return a;b=b.match(/^WebGL\s+([\d.]*)/);return b&&(a.version=parseFloat(b[1])),a}!function(){if(!a("host-node")){var f=navigator.userAgent,b=f.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i),f=f.match(/iPhone/i);b&&a.add("esri-mobile",b);f&&a.add("esri-iPhone",f);a.add("esri-phonegap",!!c.cordova);a.add("esri-cors",a("esri-phonegap")||
"XMLHttpRequest"in c&&"withCredentials"in new XMLHttpRequest);a.add("esri-geolocation",function(){return!!navigator.geolocation});a.add("esri-canvas-svg-support",function(){return!(a("trident")||a("ie"))});a.add("esri-secure-context",function(){return"isSecureContext"in c?c.isSecureContext:c.location&&c.location.origin?0===c.location.origin.indexOf("https:"):void 0});a.add("esri-wasm","WebAssembly"in c);a("host-webworker")||(a.add("esri-workers","Worker"in c),a.add("esri-script-sandbox",function(){return"MessageChannel"in
c&&"HTMLIFrameElement"in c&&"sandbox"in HTMLIFrameElement.prototype}),a.add("esri-url-encodes-apostrophe",function(){var a=c.document.createElement("a");return a.href="?'",-1<a.href.indexOf("?%27")}),e||(e=k()),a.add("esri-webgl",e.available),a.add("esri-webgl-high-precision-fragment",e.supportsHighPrecisionFragment),a.add("esri-webgl-vertex-shader-samplers",e.supportsVertexShaderSamplers),a.add("esri-webgl-element-index-uint",e.supportsElementIndexUint),a.add("esri-webgl-standard-derivatives",e.supportsStandardDerivatives),
a.add("esri-webgl-major-performance-caveat",e.majorPerformanceCaveat),a.add("esri-featurelayer-webgl-labeling",!0),h||(h=l()),a.add("esri-webgl2",h.available))}}();var e=null,h=null;return a});