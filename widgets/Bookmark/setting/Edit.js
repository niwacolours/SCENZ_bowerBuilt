//>>built
require({cache:{"url:widgets/Bookmark/setting/Edit.html":'\x3cdiv class\x3d"edit-page jimu-widget-bookmark"\x3e\r\n  \x3cdiv class\x3d"info"\x3e\r\n    \x3cdiv class\x3d"image"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"imageChooserBase"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"text"\x3e\r\n      \x3cdiv class\x3d"lebel"\x3e\r\n        \x3cspan\x3e${nls.title}\x3c/span\x3e\x3cspan class\x3d"start"\x3e*\x3c/span\x3e\r\n      \x3c/div\x3e\r\n      \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-attach-point\x3d"displayName" required\x3d"true" placeHolder\x3d${nls.title} data-dojo-props\x3d\'style:{width:"100%"}\' class\x3d"title"/\x3e\r\n      \x3cdiv class\x3d"tips"\x3e(${nls.thumbnailHint})\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"options"\x3e\r\n    \x3cdiv class\x3d"tips"\x3e${nls.extent}\x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"extent-chooser" data-dojo-attach-point\x3d"extentChooserNode"\x3e\x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"itmes btns"\x3e\r\n      \x3cdiv class\x3d"" data-dojo-attach-point\x3d"saveLayers"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"layerChooserContainer" class\x3d"layer-chooser-container"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"layerChooser"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/on dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting esri/geometry/Extent jimu/dijit/ImageChooser ./ExtentAndLayersChooser jimu/dijit/LayerChooserFromMapLite jimu/utils ../utils dojo/text!./Edit.html jimu/dijit/CheckBox".split(" "),function(h,c,d,f,k,l,m,e,n,g,p,q,r,t){return h([l,k],{baseClass:"jimu-Bookmark-Edit",ImageChooser:null,templateString:r,extent:{},portalUrl:null,itemId:null,isInWebmap:!1,mapOptions:null,layerOptions:null,
postCreate:function(){this.inherited(arguments);this.imageChooser=new e({cropImage:!0,defaultSelfSrc:this.folderUrl+"images/thumbnail_default.png",showSelfImg:!0,format:[e.GIF,e.JPEG,e.PNG],goldenWidth:100,goldenHeight:60});this.saveLayers=new t({label:this.nls.savelayers,checked:!1},this.saveLayers);this.own(f(this.saveLayers,"change",c.hitch(this,"_changeSetBtnStyle")));this.own(f(this.displayName,"change",c.hitch(this,"_onNameChange")));this.own(f(this.displayName,"keyUp",c.hitch(this,"_onNameChange")));
d.addClass(this.imageChooser.domNode,"img-chooser");d.place(this.imageChooser.domNode,this.imageChooserBase,"replace")},startup:function(){this.displayName&&this.displayName.focusNode&&this.displayName.focusNode.focus&&this.displayName.focusNode.focus();this.inherited(arguments)},_changeSetBtnStyle:function(){this.saveLayers.getValue()?d.removeClass(this.layerChooserContainer,"hide"):d.addClass(this.layerChooserContainer,"hide")},setConfig:function(a){a.displayName&&this.displayName.set("value",a.displayName);
if(a.thumbnail){var b=p.processUrlInWidgetConfig(a.thumbnail,this.folderUrl);this.imageChooser.setDefaultSelfSrc(b)}a.isInWebmap&&(this.isInWebmap=!0);"undefined"===typeof a.isSaveExtent&&(a.isSaveExtent=!0);"undefined"===typeof a.isSaveLayers&&(a.isSaveLayers=!1);q.setCheckboxWithoutEvent(this.saveLayers,a.isSaveLayers);this._changeSetBtnStyle();a.layerOptions&&(this.layerOptions=a.layerOptions);this.extentChooser||(b={portalUrl:this.portalUrl,itemId:this.itemId},this.config&&this.config.bookmark.extent&&
(b.initExtent=new m(a.extent)),this.mapOptions&&this.mapOptions.lods&&(b.lods=this.mapOptions.lods),this.extentChooser=new n(b,this.extentChooserNode),this.extentChooser.createMap().then(c.hitch(this,function(a){this.layersChooser=new g({map:a,layerState:this.layerOptions,layerStateController:g.layerVisibilityStateController},this.layerChooser)})))},getConfig:function(){var a=this.layersChooser.getState();return{displayName:this.displayName.get("value"),name:this.displayName.get("value"),extent:this.extentChooser.getExtent(),
thumbnail:this.imageChooser.imageData,isInWebmap:this.isInWebmap,isSaveLayers:this.saveLayers.getValue(),layerOptions:a}},_onNameChange:function(){this._checkRequiredField()},_onExtentChange:function(a){this.currentExtent=a},_checkRequiredField:function(){this.displayName.get("value")?this.popup&&this.popup.enableButton(0):this.popup&&this.popup.disableButton(0)}})});