//>>built
define(["dojo/_base/declare","dijit/_WidgetBase","dojo/i18n!../nls/strings","dijit/Dialog","./AddFromUrlPane"],function(b,f,d,g,h){return b([f],{dialog:null,i18n:d,wabWidget:null,postCreate:function(){this.inherited(arguments)},hide:function(){this.dialog&&this.dialog.hide()},show:function(){var b=this,a=new h({parentDialog:this,wabWidget:this.wabWidget}),c=this.dialog=new g({"class":this.wabWidget.baseClass+"-dialog",title:d.tabs.url,content:a}),e=null,e=c.on("hide",function(){a&&"function"===typeof a.preHide&&
a.preHide();e.remove();setTimeout(function(){c.destroyRecursive(!1);b.destroyRecursive(!1)},300)});c.show()}})});