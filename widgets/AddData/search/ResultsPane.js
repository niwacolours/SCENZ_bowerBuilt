//>>built
require({cache:{"url:widgets/AddData/search/templates/ResultsPane.html":'\x3cdiv class\x3d"search-results-pane" data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv class\x3d"search-results-pane-no-match empty-data-label" data-dojo-attach-point\x3d"noMatchNode" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"itemsNode" class\x3d"search-results"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/array ./SearchComponent dojo/text!./templates/ResultsPane.html dojo/i18n!../nls/strings ./ItemCard ./util".split(" "),function(c,e,f,g,a,h,d){return c([f],{i18n:a,templateString:g,postCreate:function(){this.inherited(arguments)},addItem:function(b){b.placeAt(this.itemsNode)},destroyItems:function(){this.noMatchNode.style.display="none";this.noMatchNode.innerHTML="";this.destroyDescendants(!1)},showNoMatch:function(){d.setNodeText(this.noMatchNode,a.search.resultsPane.noMatch);
this.noMatchNode.style.display="block"},processResults:function(b){this.destroyItems();var a=b.results;if(a&&0<a.length){var c=d.findLayersAdded(this.getMap(),null).itemIds;e.forEach(b.results,function(a){this.addItem(new h({item:a,canRemove:-1!==c.indexOf(a.id),resultsPane:this}))},this)}else this.showNoMatch()}})});