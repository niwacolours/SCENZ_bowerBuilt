//>>built
define(["dojo/_base/declare","dojo/_base/array","dijit/_WidgetBase","jimu/dijit/SimpleTable","../LayerOrderUtil"],function(g,c,h,k,l){return g([h],{baseClass:"jimu-widget-setting-gp-layer-order",postCreate:function(){this.inherited(arguments);this.table=new k({fields:[{name:"layerName",title:this.nls.layer,type:"text"},{name:"actions",title:this.nls.action,type:"actions",actions:["up","down"]}]});this.table.placeAt(this.domNode)},startup:function(){this.inherited(arguments);this.table.startup()},
setConfig:function(a){this.config=a;this.table.clear();this.layerOrderUtil=new l(this.config,null);0===this.config.layerOrder.length&&(this.config.layerOrder=this.layerOrderUtil.getCandidateParamNames(!1));0<this.config.layerOrder.length&&this._initLayerTable()},acceptValue:function(){if(this.config){var a,b,d,e,f;if(0<this.config.layerOrder.length&&(a=c.map(this.table.getData(),function(a){return a.layerName}),0<a.length))for(b=d=0,e=this.config.layerOrder.length;b<e;b++)f=this.config.layerOrder[b],
-1!==c.indexOf(a,f)&&(this.config.layerOrder[b]=a[d],d+=1)}},_initLayerTable:function(){var a=[],b=this.layerOrderUtil.getCandidateParamNames(!0),a=c.filter(this.config.layerOrder,function(a){return-1!==c.indexOf(b,a)},this);c.forEach(a,function(a){this.table.addRow({layerName:a})},this)}})});