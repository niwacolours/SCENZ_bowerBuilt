//>>built
define(["require","exports","dojo/has","./Renderbuffer","./Texture"],function(m,n,l,g,f){return function(){function c(a,b,e,d){if(this._context=null,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachment=null,this._initialized=!1,this._context=a,this._desc={colorTarget:b.colorTarget,depthStencilTarget:b.depthStencilTarget,width:b.width,height:b.height,multisampled:b.multisampled},this._id=c._nextId++,l("esri-webgl-debug")&&a.instanceCounter.incrementCount(4),
e)a=void 0,e instanceof f?(this._colorAttachment=e,a=e.descriptor):(a=e,this._colorAttachment=new f(this._context,a)),0!==this._desc.colorTarget&&console.error("Framebuffer is initialized with a texture however the descriptor indicates using a renderbuffer color attachment!"),c._validateTextureDimensions(a,this._desc);d instanceof g?(2===b.depthStencilTarget?this._stencilAttachment=d:1===b.depthStencilTarget||3===b.depthStencilTarget?this._depthAttachment=d:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),
c._validateBufferDimensions(d.descriptor,this._desc)):d&&(this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!"),b=void 0,d instanceof f?(this._depthStencilTexture=d,b=this._depthStencilTexture.descriptor):(b=d,this._depthStencilTexture=new f(this._context,b)),c._validateTextureDimensions(b,this._desc))}return c.create=function(a,b){return new c(a,b)},c.createWithAttachments=
function(a,b,e,d){return new c(a,e,b,d)},Object.defineProperty(c.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"descriptor",{get:function(){return this._desc},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"colorTexture",{get:function(){return this._colorAttachment instanceof f?this._colorAttachment:null},
enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"depthStencilTexture",{get:function(){return this._depthStencilTexture},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"width",{get:function(){return this._desc.width},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"height",{get:function(){return this._desc.height},enumerable:!0,configurable:!0}),c.prototype.dispose=function(){if(this._context){if(this._disposeColorAttachment(),this._disposeDepthStencilAttachments(),
this._glName)this._context.gl.deleteFramebuffer(this._glName),this._glName=null;l("esri-webgl-debug")&&this._context.instanceCounter.decrementCount(4);this._context=null}},c.prototype.attachColorTexture=function(a){if(a){if(c._validateTextureDimensions(a.descriptor,this._desc),this._disposeColorAttachment(),this._initialized){this._context.bindFramebuffer(this);var b=this._context.gl;b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,a.glName,0)}this._colorAttachment=a}},c.prototype.detachColorTexture=
function(){var a=void 0;if(this._colorAttachment instanceof f){if(a=this._colorAttachment,this._initialized){this._context.bindFramebuffer(this);var b=this._context.gl;this._context.gl.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,null,0)}this._colorAttachment=null}return a},c.prototype.attachDepthStencilTexture=function(a){if(a){var b=a.descriptor;if(34041!==b.pixelFormat&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),34042!==b.dataType&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8_WEBGL!"),
this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),c._validateTextureDimensions(b,this._desc),4!==this._desc.depthStencilTarget&&(this._desc.depthStencilTarget=4),this._disposeDepthStencilAttachments(),this._initialized)this._context.bindFramebuffer(this),b=this._context.gl,b.framebufferTexture2D(b.FRAMEBUFFER,b.DEPTH_STENCIL_ATTACHMENT,b.TEXTURE_2D,a.glName,0);this._depthStencilTexture=
a}},c.prototype.detachDepthStencilTexture=function(){var a=this._depthStencilTexture;if(a&&this._initialized){this._context.bindFramebuffer(this);var b=this._context.gl;this._context.gl.framebufferTexture2D(b.FRAMEBUFFER,b.DEPTH_STENCIL_ATTACHMENT,b.TEXTURE_2D,null,0)}return this._depthStencilTexture=null,a},c.prototype.attachDepthStencilBuffer=function(a){if(a){var b=a.descriptor;if(34041!==b.internalFormat&&33189!==b.internalFormat&&console.error("Depth/Stencil buffer must have correct internalFormat"),
c._validateBufferDimensions(b,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=34041===b.internalFormat?3:1,this._initialized)this._context.bindFramebuffer(this),b=this._context.gl,b.framebufferRenderbuffer(b.FRAMEBUFFER,1===this._desc.depthStencilTarget?b.DEPTH_ATTACHMENT:b.DEPTH_STENCIL_ATTACHMENT,b.RENDERBUFFER,a.glName);this._depthAttachment=a}},c.prototype.detachDepthStencilBuffer=function(){var a=this._context.gl,b=this._depthAttachment;b&&this._initialized&&
(this._context.bindFramebuffer(this),a.framebufferRenderbuffer(a.FRAMEBUFFER,1===this._desc.depthStencilTarget?a.DEPTH_ATTACHMENT:a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,null));return this._depthAttachment=null,b},c.prototype.copyToTexture=function(a,b,e,c,f,k,h){(0>a||0>b||0>f||0>k)&&console.error("Offsets cannot be negative!");(0>=e||0>=c)&&console.error("Copy width and height must be greater than zero!");var d=this._desc,g=h.descriptor;3553!==h.descriptor.target&&console.error("Texture target must be TEXTURE_2D!");
(a+e>d.width||b+c>d.height||f+e>g.width||k+c>g.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");d=this._context;d.bindTexture(h);d.bindFramebuffer(this);d.gl.copyTexSubImage2D(3553,0,f,k,a,b,e,c)},c.prototype.readPixels=function(a,b,e,c,f,g,h){(0>=e||0>=c)&&console.error("Copy width and height must be greater than zero!");h||console.error("Target memory is not initialized!");this._context.bindFramebuffer(this);this._context.gl.readPixels(a,
b,e,c,f,g,h)},c.prototype.resize=function(a,b){var e=this._desc;if(e.width!==a||e.height!==b){if(!this._initialized){if(e.width=a,e.height=b,this._colorAttachment instanceof f)e=this._colorAttachment,e.resize(a,b);return void(this._depthStencilTexture&&this._depthStencilTexture.resize(a,b))}if(e.width=a,e.height=b,this._colorAttachment instanceof f){var e=this._colorAttachment,d=e.descriptor;d.width=a;d.height=b;this._colorAttachment.dispose();this._colorAttachment=new f(this._context,d);c._validateTextureDimensions(e.descriptor,
this._desc)}else this._colorAttachment&&this._disposeColorAttachment();null!=this._depthStencilTexture?(d=this._depthStencilTexture.descriptor,d.width=a,d.height=b,this._depthStencilTexture.dispose(),this._depthStencilTexture=new f(this._context,d)):(this._depthAttachment||this._stencilAttachment)&&this._disposeDepthStencilAttachments();this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null);this._initialized=!1}},c.prototype.initialize=function(){if(this._initialized)return!1;
var a=this._context.gl;this._glName&&a.deleteFramebuffer(this._glName);var b=a.createFramebuffer(),c=this._desc;if(a.bindFramebuffer(a.FRAMEBUFFER,b),!this._colorAttachment)if(0===c.colorTarget)this._colorAttachment=new f(this._context,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:c.width,height:c.height});else{var d=new g(this._context,{internalFormat:32854,width:c.width,height:c.height});a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,
d.glName);this._colorAttachment=d}this._colorAttachment instanceof f&&a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,this._colorAttachment.glName,0);switch(c.depthStencilTarget){case 1:case 3:this._depthAttachment||(this._depthAttachment=new g(this._context,{internalFormat:1===c.depthStencilTarget?33189:34041,width:c.width,height:c.height}));a.framebufferRenderbuffer(a.FRAMEBUFFER,1===c.depthStencilTarget?a.DEPTH_ATTACHMENT:a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,this._depthAttachment.glName);
break;case 2:this._stencilAttachment||(this._stencilAttachment=new g(this._context,{internalFormat:36168,width:c.width,height:c.height}));a.framebufferRenderbuffer(a.FRAMEBUFFER,a.STENCIL_ATTACHMENT,a.RENDERBUFFER,this._stencilAttachment.glName);break;case 4:this._depthStencilTexture||(this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!"),this._depthStencilTexture=new f(this._context,
{target:3553,pixelFormat:34041,dataType:34042,samplingMode:9728,wrapMode:33071,width:c.width,height:c.height})),a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,this._depthStencilTexture.glName,0)}return a.checkFramebufferStatus(a.FRAMEBUFFER)!==a.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=b,this._initialized=!0,!0},c.prototype._disposeColorAttachment=function(){if(this._colorAttachment instanceof f){var a=this._colorAttachment;if(this._initialized){this._context.bindFramebuffer(this);
var b=this._context.gl;b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,null,0)}a.dispose()}else this._colorAttachment instanceof WebGLRenderbuffer&&(a=this._colorAttachment,b=this._context.gl,this._initialized&&(this._context.bindFramebuffer(this),b.framebufferRenderbuffer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.RENDERBUFFER,null)),this._context.gl.deleteRenderbuffer(a));this._colorAttachment=null},c.prototype._disposeDepthStencilAttachments=function(){var a=this._context.gl;this._depthAttachment&&
(this._initialized&&(this._context.bindFramebuffer(this),a.framebufferRenderbuffer(a.FRAMEBUFFER,1===this._desc.depthStencilTarget?a.DEPTH_ATTACHMENT:a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,null)),this._depthAttachment.dispose(),this._depthAttachment=null);this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.STENCIL_ATTACHMENT,a.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null);this._depthStencilTexture&&
(this._initialized&&(this._context.bindFramebuffer(this),a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,null,0)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)},c._validateBufferDimensions=function(a,b){console.assert(0<=a.width&&0<=a.height);void 0!==b.width&&0<=b.width&&void 0!==b.height&&0<=b.height?b.width===a.width&&b.height===a.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(b.width=a.width,b.height=a.height)},
c._validateTextureDimensions=function(a,b){console.assert(0<=a.width&&0<=a.height);3553!==a.target&&console.error("Texture type must be TEXTURE_2D!");void 0!==b.width&&0<=b.width&&void 0!==b.height&&0<=b.height?b.width===a.width&&b.height===a.height||console.error("Color attachment texture must match the framebuffer's!"):(b.width=a.width,b.height=a.height)},c._nextId=0,c}()});