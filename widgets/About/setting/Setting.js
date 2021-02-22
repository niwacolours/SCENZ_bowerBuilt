//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/sniff dojo/query dijit/_WidgetsInTemplateMixin dijit/Editor jimu/utils ../common jimu/BaseWidgetSetting dojo/NodeList-manipulate dijit/_editor/plugins/LinkDialog dijit/_editor/plugins/ViewSource dijit/_editor/plugins/FontChoice dojox/editor/plugins/Preview dijit/_editor/plugins/TextColor dojox/editor/plugins/ToolbarLineBreak dijit/ToolbarSeparator dojox/editor/plugins/FindReplace dojox/editor/plugins/PasteFromWord dojox/editor/plugins/InsertAnchor dojox/editor/plugins/Blockquote dojox/editor/plugins/UploadImage jimu/dijit/EditorChooseImage jimu/dijit/EditorTextColor jimu/dijit/EditorBackgroundColor".split(" "),
function(g,h,e,k,d,l,m,c,f,n){return g([n,l],{baseClass:"jimu-widget-about-setting",postCreate:function(){this.inherited(arguments)},startup:function(){this.inherited(arguments);this.config.about||(this.config.about={});this.initEditor();this.setConfig(this.config);this.resize()},initEditor:function(){var a=document.getElementsByTagName("head")[0],b=window.apiUrl+"dojox/editor/plugins/resources/css/TextColor.css";d('link[href\x3d"'+b+'"]',a)[0]||c.loadStyleLink("editor_plugins_resources_TextColor",
b);b=window.apiUrl+"dojox/editor/plugins/resources/editorPlugins.css";d('link[href\x3d"'+b+'"]',a)[0]||c.loadStyleLink("editor_plugins_resources_editorPlugins",b);b=window.apiUrl+"dojox/editor/plugins/resources/css/PasteFromWord.css";d('link[href\x3d"'+b+'"]',a)[0]||c.loadStyleLink("editor_plugins_resources_PasteFromWord",b);this.editor=new m({plugins:["bold","italic","underline",c.getEditorTextColor("about"),c.getEditorBackgroundColor("about"),"|","justifyLeft","justifyCenter","justifyRight","justifyFull",
"|","insertOrderedList","insertUnorderedList","indent","outdent"],extraPlugins:["|","createLink","unlink","pastefromword","|","undo","redo","|","chooseImage","|","viewsource","toolbarlinebreak",{name:"dijit._editor.plugins.FontChoice",command:"fontName",custom:"Arial;Comic Sans MS;Courier New;Garamond;Tahoma;Times New Roman;Verdana".split(";")},"fontSize","formatBlock"],style:"font-family:Verdana;"},this.editor);e.setStyle(this.editor.domNode,{width:"100%",height:"100%"});this.editor.startup();8!==
k("ie")&&this.editor.resize({w:"100%",h:"100%"})},setConfig:function(a){this.config=a;f.isDefaultContent(a)&&(a.about.aboutContent=f.setDefaultContent(a,this.nls));this.editor.set("value",a.about.aboutContent||this.nls.defaultContent);this.resize();setTimeout(h.hitch(this,function(){this.resize()}),200)},getConfig:function(){this.config.about.aboutContent=this.editor.get("value");return this.config},destroy:function(){var a=document.getElementsByTagName("head")[0];d('link[id^\x3d"editor_plugins_resources"]',
a).remove();this.inherited(arguments)},resize:function(){var a=e.getContentBox(this.editorContainer),b=d(".dijitEditorIFrameContainer",this.editorContainer)[0],c;this.editor&&this.editor.header&&(c=e.getContentBox(this.editor.header));b&&a&&c&&e.setStyle(b,"height",a.h-c.h-4+"px")}})});