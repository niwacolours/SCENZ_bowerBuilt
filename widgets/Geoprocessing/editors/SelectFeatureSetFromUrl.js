//>>built
require({cache:{"url:widgets/Geoprocessing/editors/SelectFeatureSetFromUrl.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"inputNode"\x3e\r\n    \x3cinput name\x3d"url" data-dojo-type\x3d"jimu/dijit/URLInput" data-dojo-attach-point\x3d"featureSetUrl"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"loadingNode" class\x3d"loading"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"visibleCheckboxDiv"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"featuresetNode"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin jimu/dijit/CheckBox jimu/dijit/LoadingIndicator jimu/dijit/Message esri/tasks/query esri/layers/GraphicsLayer esri/SpatialReference esri/tasks/QueryTask esri/symbols/jsonUtils esri/renderers/SimpleRenderer ./BaseFeatureSetEditor dojo/text!./SelectFeatureSetFromUrl.html jimu/dijit/URLInput".split(" "),function(g,b,h,k,l,m,n,d,c,p,e,f,q,r,t,u){return g([t,k,l],{baseClass:"jimu-gp-editor-base jimu-gp-editor-url",
templateString:u,editorName:"SelectFeatureSetFromUrl",postCreate:function(){this.inherited(arguments);this.featureSetUrl.set("placeholder",this.nls.urlPlaceholder);this.inputLayer=new p;if(this.param.symbol){var a=new r(q.fromJson(this.param.symbol));this.inputLayer.setRenderer(a)}this.map.addLayer(this.inputLayer);this.param.featureSetUrl&&this.featureSetUrl.set("value",this.param.featureSetUrl);this.param.showUrlContent&&(this.visibleCheckbox=new m({checked:!1,label:this.nls.showLayerContent,onChange:b.hitch(this,
this.viewLayerContent)}),this.visibleCheckbox.placeAt(this.visibleCheckboxDiv));this.loading=new n({hidden:!0},this.loadingNode);this.loading.startup()},viewLayerContent:function(a){a?this.featureSetUrl.isValid()?(this._showLoading(),a=new c,a.geometry=this.map.extent,a.spatialRelationship=c.SPATIAL_REL_INTERSECTS,a.returnGeometry=!0,a.outFields=["*"],a.outSpatialReference=new e(this.map.spatialReference.wkid),this.queryTask=new f(this.getValue()),this.queryTask.execute(a,b.hitch(this,this._addToLayer),
b.hitch(this,this._queryError))):new d({message:this.nls.invalidUrl}):this.inputLayer.clear()},_showLoading:function(){this.visibleCheckbox.setStatus(!1);this.loading.show()},_hideLoading:function(){this.visibleCheckbox.setStatus(!0);this.loading.hide()},_queryError:function(a){this._hideLoading();new d({message:a.message})},_addToLayer:function(a){h.forEach(a.features,function(a){this.inputLayer.add(a)},this);this._hideLoading()},destroy:function(){this.inputLayer.clear();this.map.removeLayer(this.inputLayer)},
getValue:function(){return 0===this.activeViewIndex?this.featureSetUrl.get("value"):this.getFeatureSet()},getGPValue:function(){if(0===this.activeViewIndex){var a=new c;a.where="1\x3d1";a.returnGeometry=!0;a.outFields=["*"];a.outSpatialReference=new e(this.querySetting.spatialReference.wkid);this.queryTask=new f(this.getValue());return this.queryTask.execute(a)}return this.wrapValueToDeferred(this.getFeatureSet())}})});