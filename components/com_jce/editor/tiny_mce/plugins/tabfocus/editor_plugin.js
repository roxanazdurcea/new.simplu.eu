/* jce - 2.6.0 | 2016-11-25 | http://www.joomlacontenteditor.net | Copyright (C) 2006 - 2016 Ryan Demmer. All rights reserved | GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html */
!function(){var c=tinymce.DOM,a=tinymce.dom.Event,d=tinymce.each,b=tinymce.explode;tinymce.create("tinymce.plugins.TabFocusPlugin",{init:function(f,g){function e(i,j){if(9===j.keyCode)return a.cancel(j)}function h(l,p){function q(t){function s(v){return"BODY"===v.nodeName||"hidden"!=v.type&&!("none"==v.style.display)&&!("hidden"==v.style.visibility)&&s(v.parentNode)}function i(v){return v.attributes.tabIndex.specified||"INPUT"==v.nodeName||"TEXTAREA"==v.nodeName}function u(){return tinymce.isIE6||tinymce.isIE7}function r(v){return(!u()||i(v))&&"-1"!=v.getAttribute("tabindex")&&s(v)}if(n=c.select(":input:enabled,*[tabindex]:not(iframe)"),d(n,function(w,v){if(w.id==l.id)return j=v,!1}),t>0){for(m=j+1;m<n.length;m++)if(r(n[m]))return n[m]}else for(m=j-1;m>=0;m--)if(r(n[m]))return n[m];return null}var j,m,n,k;if(9===p.keyCode&&(k=b(l.getParam("tab_focus",l.getParam("tabfocus_elements",":prev,:next"))),1==k.length&&(k[1]=k[0],k[0]=":prev"),n=p.shiftKey?":prev"==k[0]?q(-1):c.get(k[0]):":next"==k[1]?q(1):c.get(k[1])))return n.id&&(l=tinymce.get(n.id||n.name))?l.focus():window.setTimeout(function(){tinymce.isWebKit||window.focus(),n.focus()},10),a.cancel(p)}f.onKeyUp.add(e),tinymce.isGecko?(f.onKeyPress.add(h),f.onKeyDown.add(e)):f.onKeyDown.add(h)},getInfo:function(){return{longname:"Tabfocus",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/tabfocus",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}),tinymce.PluginManager.add("tabfocus",tinymce.plugins.TabFocusPlugin)}();