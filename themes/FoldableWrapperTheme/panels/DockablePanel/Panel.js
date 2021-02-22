//>>built
require({cache:{"url:themes/FoldableWrapperTheme/panels/DockablePanel/Panel.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"jimu-container" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"bar" data-dojo-attach-point\x3d"barNode" data-dojo-attach-event\x3d"onclick:_onBarClick"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"nav pre" data-dojo-attach-point\x3d"preNode" data-dojo-attach-event\x3d"onclick:_onPreClick"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"nav next" data-dojo-attach-point\x3d"nextNode" data-dojo-attach-event\x3d"onclick:_onNextClick"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/topic dijit/_TemplatedMixin dojo/text!./Panel.html jimu/BaseWidgetPanel jimu/dijit/LoadingIndicator jimu/utils require".split(" "),function(m,f,a,l,n,p,q,r,t,b){return m([q,n],{baseClass:"jimu-panel jimu-dockable-panel",templateString:p,displayNumber:3,firstIndex:0,region:"",resizeMap:!0,_barSize:30,_margin:15,_navSize:25,_padding:15,postCreate:function(){},startup:function(){a.setStyle(this.domNode,t.getPositionStyle(this.position));
this.loadDisplayWidgets();this._setPanelPadding();this._setBarPosition();this._setNavPosition();this.resize();this._switchNavStatus();this.panelManager.normalizePanel(this)},resize:function(){this._setFrameSize()},_setFrameSize:function(){var c=Math.min(this.displayNumber,this._getConfigs().length);if(0!==c){var b={},d=a.getContentBox(this.containerNode);if("left"===this.region||"right"===this.region)b.width="100%",b.height=(d.h-c*this._margin)/c+"px",b.marginTop=this._margin+"px";else if("top"===
this.region||"bottom"===this.region)b.height="100%",b.width=(d.w-c*this._margin)/c+"px",b.marginLeft=this._margin+"px";this.getChildren().forEach(f.hitch(this,function(c){a.setStyle(c.domNode,b);c.resize()}))}},loadDisplayWidgets:function(){function c(a,c,b){c.destroy();a.setWidget(b);b.startup()}for(var b=this._getConfigs(),d=this._getEndIndex(),g=this.firstIndex;g<d;g++){var h=b[g],e,k;this.widgetManager.getWidgetById(h.id)||(k=new r,e=this.createFrame(h),this.addChild(e),a.place(k.domNode,e.containerNode),
this.widgetManager.loadWidget(h).then(f.hitch(this,c,e,k)))}this._setFrameFloat();this._setFrameSize()},onNormalize:function(){a.addClass(this.barNode,"max");a.removeClass(this.barNode,"min");this._setBarPosition();"left"===this.region?(a.setStyle(this.barNode,{backgroundImage:"url("+b.toUrl(".")+"/images/bar_left.png)"}),a.setStyle(this.domNode,{left:0,width:this.position.width+"px"}),a.setStyle(this.barNode,{borderTopLeftRadius:0,borderTopRightRadius:"4px",borderBottomLeftRadius:0,borderBottomRightRadius:"4px"})):
"right"===this.region?(a.setStyle(this.barNode,{backgroundImage:"url("+b.toUrl(".")+"/images/bar_right.png)"}),a.setStyle(this.domNode,{right:0,width:this.position.width+"px"}),a.setStyle(this.barNode,{borderTopLeftRadius:"4px",borderTopRightRadius:0,borderBottomLeftRadius:"4px",borderBottomRightRadius:0})):"top"===this.region?(a.setStyle(this.barNode,{backgroundImage:"url("+b.toUrl(".")+"/images/bar_up.png)"}),a.setStyle(this.domNode,{top:0,height:this.position.height+"px"}),a.setStyle(this.barNode,
{borderTopLeftRadius:0,borderTopRightRadius:0,borderBottomLeftRadius:"4px",borderBottomRightRadius:"4px"})):"bottom"===this.region&&(a.setStyle(this.barNode,{backgroundImage:"url("+b.toUrl(".")+"/images/bar_down.png)"}),a.setStyle(this.domNode,{bottom:0,height:this.position.height+"px"}),a.setStyle(this.barNode,{borderTopLeftRadius:"4px",borderTopRightRadius:"4px",borderBottomLeftRadius:0,borderBottomRightRadius:0}));this.inherited(arguments)},onMinimize:function(){a.setStyle(this.barNode,{borderTopLeftRadius:"4px",
borderTopRightRadius:"4px",borderBottomLeftRadius:"4px",borderBottomRightRadius:"4px"});a.removeClass(this.barNode,"max");a.addClass(this.barNode,"min");this._setBarPosition();"left"===this.region?(a.setStyle(this.barNode,{backgroundImage:"url("+b.toUrl(".")+"/images/bar_right.png)"}),a.setStyle(this.domNode,{left:0-this.position.width+"px",right:"auto"})):"right"===this.region?(a.setStyle(this.barNode,{backgroundImage:"url("+b.toUrl(".")+"/images/bar_left.png)"}),a.setStyle(this.domNode,{right:0-
this.position.width+"px",left:"auto"})):"top"===this.region?(a.setStyle(this.barNode,{backgroundImage:"url("+b.toUrl(".")+"/images/bar_down.png)"}),a.setStyle(this.domNode,{top:0-this.position.height+"px",bottom:"auto"})):"bottom"===this.region&&(a.setStyle(this.barNode,{backgroundImage:"url("+b.toUrl(".")+"/images/bar_up.png)"}),a.setStyle(this.domNode,{bottom:0-this.position.height+"px",top:"auto"}));this.inherited(arguments)},scrollWidget:function(){var c=this._getEndIndex();this.getChildren().forEach(f.hitch(this,
function(b,d){d>=this.firstIndex&&d<c?a.setStyle(b.domNode,"display",""):a.setStyle(b.domNode,"display","none")}))},_onBarClick:function(){var a={};"normal"===this.windowState?(this.panelManager.minimizePanel(this),this.resizeMap&&("left"===this.region?a.left=0:"right"===this.region?a.right=0:"top"===this.region?a.top=0:"bottom"===this.region&&(a.bottom=0),l.publish("changeMapPosition",a))):(this.panelManager.normalizePanel(this),this.resizeMap&&("left"===this.region?a.left=this.position.width:"right"===
this.region?a.right=this.position.width:"top"===this.region?a.top=this.position.height:"bottom"===this.region&&(a.bottom=this.position.height),l.publish("changeMapPosition",a)))},_onPreClick:function(){0!==this.firstIndex&&(--this.firstIndex,this.loadDisplayWidgets(),this.scrollWidget(),this._switchNavStatus())},_onNextClick:function(){this.firstIndex+this.displayNumber>=this._getConfigs().length||(this.firstIndex+=1,this.loadDisplayWidgets(),this.scrollWidget(),this._switchNavStatus())},_switchNavStatus:function(){0===
this.firstIndex?a.setStyle(this.preNode,"opacity","0.4"):a.setStyle(this.preNode,"opacity","1");this.firstIndex+this.displayNumber>=this._getConfigs().length?a.setStyle(this.nextNode,"opacity","0.4"):a.setStyle(this.nextNode,"opacity","1")},_getEndIndex:function(){var a=this._getConfigs();return Math.min(this.firstIndex+this.displayNumber,a.length)},_setBarPosition:function(){a.setStyle(this.barNode,{position:"absolute",width:this._barSize+"px",height:this._barSize+"px"});var b="normal"===this.windowState?
0-this._barSize+"px":0-this._barSize-2+"px";"left"===this.region?a.setStyle(this.barNode,{top:"10px",right:b}):"right"===this.region?a.setStyle(this.barNode,{top:"10px",left:b}):"top"===this.region?a.setStyle(this.barNode,{left:"10px",bottom:b}):"bottom"===this.region&&a.setStyle(this.barNode,{left:"10px",top:b})},_setNavPosition:function(){var c=a.getMarginBox(this.domNode);a.setStyle(this.preNode,{position:"absolute"});a.setStyle(this.nextNode,{position:"absolute"});if("left"===this.region||"right"===
this.region)a.setStyle(this.preNode,{top:"10px",left:c.w/2+"px",backgroundImage:"url("+b.toUrl(".")+"/images/nav_up.png)"}),a.setStyle(this.nextNode,{bottom:"10px",left:c.w/2+"px",backgroundImage:"url("+b.toUrl(".")+"/images/nav_down.png)"});else if("top"===this.region||"bottom"===this.region)a.setStyle(this.preNode,{left:"10px",top:c.h/2+"px",backgroundImage:"url("+b.toUrl(".")+"/images/nav_left.png)"}),a.setStyle(this.nextNode,{right:"10px",top:c.h/2+"px",backgroundImage:"url("+b.toUrl(".")+"/images/nav_right.png)"})},
_setFrameFloat:function(){"top"!==this.region&&"bottom"!==this.region||this.getChildren().forEach(function(b){a.setStyle(b.domNode,"float","left")})},_setPanelPadding:function(){"left"===this.region||"right"===this.region?a.setStyle(this.domNode,{paddingTop:this._navSize+this._padding-this._margin+"px",paddingRight:this._padding+"px",paddingBottom:this._navSize+this._padding+"px",paddingLeft:this._padding+"px"}):"top"!==this.region&&"bottom"!==this.region||a.setStyle(this.domNode,{paddingTop:this._padding+
"px",paddingRight:this._navSize+this._padding+"px",paddingBottom:this._padding+"px",paddingLeft:this._navSize+this._padding-this._margin+"px"})},_getConfigs:function(){var a=[];return a=Array.isArray(this.config.widgets)?this.config.widgets:[this.config]}})});