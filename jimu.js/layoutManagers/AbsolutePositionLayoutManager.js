//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/topic dojo/on dojo/keys dojo/dom-construct dojo/dom-geometry dojo/promise/all dojo/when ../WidgetManager ../PanelManager ../utils ../dijit/LoadingShelter ./BaseLayoutManager".split(" "),function(r,f,c,e,m,n,t,q,p,u,v,w,x,k,y,z){var h=null,l;l=r([z],{name:"AbsolutePositionLayoutManager",constructor:function(){this.widgetManager=w.getInstance();this.panelManager=x.getInstance();m.subscribe("changeMapPosition",f.hitch(this,
this.onChangeMapPosition));this.onScreenGroupPanels=[]},map:null,resize:function(){c.forEach(this.widgetManager.getAllWidgets(),function(b){!1===b.inPanel&&b.resize()},this)},setMap:function(b){this.inherited(arguments);this.panelManager.setMap(b)},getMapDiv:function(){return e.byId(this.mapId)?e.byId(this.mapId):e.create("div",{id:this.mapId,style:f.mixin({position:"absolute",backgroundColor:"#EEEEEE",overflow:"hidden",minWidth:"1px",minHeight:"1px"},k.getPositionStyle(this.appConfig.map.position))},
this.layoutId)},loadAndLayout:function(b){console.time("Load widgetOnScreen");this.setMapPosition(b.map.position);var a=new y,d=[];a.placeAt(this.layoutId);a.startup();this._setTabindex(b);d.push(this.loadOnScreenWidgets(b));c.forEach(b.widgetOnScreen.groups,function(a){d.push(this._loadOnScreenGroup(a,b))},this);u(d).then(f.hitch(this,function(){a&&(a.destroy(),a=null);console.timeEnd("Load widgetOnScreen");m.publish("preloadWidgetsLoaded")}),f.hitch(this,function(){a&&(a.destroy(),a=null);console.timeEnd("Load widgetOnScreen");
m.publish("preloadWidgetsLoaded")}))},_setTabindex:function(b){function a(a,b){a&&("undefined"!==typeof a.bottom&&(a.top=b.h-a.bottom-100,delete a.bottom),"undefined"!==typeof a.right&&(a.left=b.w-a.right-100,delete a.right))}function d(b,d,c){d=f.clone(d.position||d.panel&&d.panel.position);c=f.clone(c.position||c.panel&&c.panel.position);a(d,b);a(c,b);return d.top===c.top?d.left-c.left:d.top-c.top}var c=[],h=[];b.visitElement(function(a,b){b.isOnScreen&&(b=a.position||a.panel&&a.panel.position)&&
("browser"===b.relativeTo?c.push(a):h.push(a))});b=p.getMarginBox(this.layoutId);var l=p.getMarginBox(this.mapId),c=c.sort(f.hitch(this,d,b));c.sort(function(a,b){return"Splash"===a.name?-1:"Splash"===b.name?1:0});var h=h.sort(f.hitch(this,d,l)),g=1;c.forEach(function(a){a.tabIndex=g;g=a.isController?g+5E3:g+200});e.setAttr(this.map.container,"tabindex",g);e.setAttr(this.map.container,"aria-label",window.jimuNls.gridLayout.mapArea);e.setAttr(this.map.container,"role","application");this.own(n(this.map.container,
"keydown",f.hitch(this,function(a){"map"===e.getAttr(a.target,"id")&&a.keyCode===t.ESCAPE&&k.trapToNextFocusContainer(this.map.container)})));window.isMoveFocusFromMap=!0;this.own(n(this.map.container,"focus",f.hitch(this,function(a){k.isInNavMode()&&"map"===e.getAttr(a.target,"id")&&((a=this.widgetManager.getWidgetsByName("Splash")[0])&&"none"!==e.getStyle(a.domNode,"display")?(window.isMoveFocusFromMap=!1,a.domNode.focus()):window.currentMsgPopup&&window.currentMsgPopup.firstFocusNode?(window.isMoveFocusFromMap=
!1,window.currentMsgPopup.focusedNodeBeforeOpen=k.trapToNextFocusContainer(this.map.container,!0),window.currentMsgPopup.firstFocusNode.focus()):window.isMoveFocusFromMap?(window.isMoveFocusFromMap=!1,k.trapToNextFocusContainer(this.map.container,!0)):(a=document.getElementById("map_container"),a.addEventListener("mouseover",function(){}),a.simulateEvent=new MouseEvent("mouseover",{view:window,bubbles:!0,cancelable:!0}),this.map.isKeyboardNavigationOrigin=this.map.isKeyboardNavigation,a.dispatchEvent(a.simulateEvent)&&
this.map.enableKeyboardNavigation()))})));this.own(n(this.map.container,"blur",f.hitch(this,function(a){k.isInNavMode()&&"map"===e.getAttr(a.target,"id")&&(document.getElementById("map_container").removeEventListener("mouseover",function(){}),this.map.isKeyboardNavigationOrigin||this.map.disableKeyboardNavigation())})));g+=1E3;h.forEach(function(a){a.inPanel?a.tabIndexJimu=g:a.tabIndex=g;g=a.isController?g+5E3:g+200})},destroyOnScreenWidgetsAndGroups:function(){this.panelManager.destroyAllPanels();
this.destroyOnScreenOffPanelWidgets();this.destroyWidgetPlaceholders();this.destroyOnScreenWidgetIcons()},openWidget:function(b){c.forEach(this.onScreenWidgetIcons,function(a){a.configId===b&&a.switchToOpen()},this);c.forEach(this.widgetManager.getControllerWidgets(),function(a){a.widgetIsControlled(b)&&a.setOpenedIds([b])},this)},onLayoutChange:function(b){this._changeMapPosition(b);c.forEach(this.widgetPlaceholders,function(a){a.moveTo(b.getConfigElementById(a.configId).position)},this);c.forEach(this.onScreenWidgetIcons,
function(a){a.moveTo(b.getConfigElementById(a.configId).position)},this);c.forEach(this.widgetManager.getOnScreenOffPanelWidgets(),function(a){if(!a.closeable){var d=b.getConfigElementById(a.id).position;a.setPosition(d)}},this);c.forEach(this.onScreenGroupPanels,function(a){var d=b.getConfigElementById(a.config.id).panel.position;a.setPosition(d)},this)},onWidgetChange:function(b,a){a=b.getConfigElementById(a.id);this.onOnScreenWidgetChange(b,a);c.forEach(this.onScreenGroupPanels,function(b){b.reloadWidget(a)},
this)},onGroupChange:function(b,a){a=b.getConfigElementById(a.id);a.isOnScreen?(this.panelManager.destroyPanel(a.id+"_panel"),this.removeDestroyed(this.onScreenGroupPanels),this._loadOnScreenGroup(a,b)):(c.forEach(this.widgetManager.getControllerWidgets(),function(c){c.isControlled(a.id)&&this.reloadControllerWidget(b,c.id)},this),c.forEach(this.panelManager.panels,function(b){b.config.id===a.id&&b.updateConfig(a)},this))},onActionTriggered:function(b){"highLight"===b.action&&(c.forEach(this.widgetPlaceholders,
function(a){a.configId===b.elementId&&this._highLight(a)},this),c.forEach(this.onScreenWidgetIcons,function(a){a.configId===b.elementId&&this._highLight(a)},this),c.forEach(this.widgetManager.getOnScreenOffPanelWidgets(),function(a){a.configId===b.elementId&&this._highLight(a)},this),c.forEach(this.onScreenGroupPanels,function(a){a.configId===b.elementId&&this._highLight(a)},this));"removeHighLight"===b.action&&this._removeHighLight();"showLoading"===b.action&&(e.setStyle(jimuConfig.loadingId,"display",
"block"),e.setStyle(jimuConfig.mainPageId,"display","none"));"showApp"===b.action&&(e.setStyle(jimuConfig.loadingId,"display","none"),e.setStyle(jimuConfig.mainPageId,"display","block"))},onChangeMapPosition:function(b){var a=f.clone(this.mapPosition);f.mixin(a,b);this.setMapPosition(a)},setMapPosition:function(b){this.mapPosition=b;b=k.getPositionStyle(b);e.setStyle(this.mapId,b);this.map&&this.map.resize&&this.map.resize()},getMapPosition:function(){return this.mapPosition},_highLight:function(b){if(b.domNode){this.hlDiv&&
this._removeHighLight(b);var a=p.getMarginBox(b.domNode);this.hlDiv=q.create("div",{style:{position:"absolute",left:a.l+"px",top:a.t+"px",width:a.w+"px",height:a.h+"px"},"class":"icon-highlight"},b.domNode,"before")}},_removeHighLight:function(){this.hlDiv&&(q.destroy(this.hlDiv),this.hlDiv=null)},_changeMapPosition:function(b){this.map&&(k.isEqual(this.getMapPosition(),b.map.position)||this.setMapPosition(b.map.position))},_loadOnScreenGroup:function(b,a){return a.mode||b.widgets&&0!==b.widgets.length?
this.panelManager.showPanel(b).then(f.hitch(this,function(a){a.configId=b.id;this.onScreenGroupPanels.push(a);return a})):v(null)}});l.getInstance=function(){null===h&&(h=new l,window._absolutLayoutManager=h);return h};return l});