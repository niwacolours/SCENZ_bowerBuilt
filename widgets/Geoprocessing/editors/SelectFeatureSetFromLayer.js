//>>built
require({cache:{"url:widgets/Geoprocessing/editors/SelectFeatureSetFromLayer.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"inputNode"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"layerChooseNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"featuresetNode"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/Deferred dojo/_base/lang dijit/_TemplatedMixin jimu/dijit/SpatialFilterByFeatures jimu/utils ./BaseFeatureSetEditor dojo/text!./SelectFeatureSetFromLayer.html esri/tasks/query".split(" "),function(f,g,c,h,e,k,l,m,n){return f([l,h],{templateString:m,editorName:"SelectFeatureSetFromLayer",postCreate:function(){this.inherited(arguments);this.spatialFilterByFeatures=new e({map:this.map,types:this.param.defaultValue&&this.param.defaultValue.geometryType?[k.getTypeByGeometryType(this.param.defaultValue.geometryType)]:
["point","polyline","polygon"]});this.spatialFilterByFeatures.placeAt(this.layerChooseNode);this.spatialFilterByFeatures.startup()},getGPValue:function(){if(0===this.activeViewIndex){var b=new g;this.spatialFilterByFeatures.getFeatureSet(!0).then(c.hitch(this,function(a){b.resolve(a)}),c.hitch(this,function(a){if(a&&a.type===e.NONE_SELECTED_FEATURES_NOT_DRAW_SHAPES){var d=this.spatialFilterByFeatures.getSelectedLayer();d&&d.url?(a=new n,a.where="1\x3d1",d.queryFeatures(a).then(c.hitch(this,function(a){b.resolve(a)}),
c.hitch(this,function(a){b.reject(a)}))):b.reject(a)}else b.reject(a)}));return b}return this.wrapValueToDeferred(this.getFeatureSet())}})});