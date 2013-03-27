/*
jQWidgets v1.9.0 (2012-03-23)
Copyright (c) 2011-2012 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.jqx.jqxWidget("jqxComboBox","",{});a.extend(a.jqx._jqxComboBox.prototype,{defineInstance:function(){this.disabled=false;this.width=null;this.height=null;this.items=new Array();this.selectedIndex=-1;this.source=null;this.scrollBarSize=15;this.arrowSize=18;this.enableHover=true;this.enableSelection=true;this.visualItems=new Array();this.groups=new Array();this.equalItemsWidth=true;this.itemHeight=-1;this.visibleItems=new Array();this.emptyGroupText="Group";if(this.showDelay==undefined){this.showDelay=350}if(this.hideDelay==undefined){this.hideDelay=400}this.animationType="default";this.dropDownWidth="auto";this.dropDownHeight="200px";this.autoDropDownHeight=false;this.enableBrowserBoundsDetection=false;this.searchMode="startswithignorecase";this.autocomplete=false;this.displayMember="";this.valueMember="";this.keyboardSelection=true;this.events=["open","close","select","unselect","change"]},createInstance:function(h){this._setSize();this.isanimating=false;var d=a("<div tabIndex=0 style='background-color: transparent; -webkit-appearance: none; outline: none; width:100%; height: 100%; padding: 0px; margin: 0px; border: 0px; position: relative;'><div id='dropdownlistWrapper' style='padding: 0; margin: 0; border: none; background-color: transparent; float: left; width:100%; height: 100%; position: relative;'><div id='dropdownlistContent' style='padding: 0; margin: 0; border: none; float: left; position: relative;'/><div id='dropdownlistArrow' style='padding: 0; margin: 0; border-left-width: 1px; border-bottom-width: 0px; border-top-width: 0px; border-right-width: 0px; background-color: transparent; float: right; position: relative;'/></div></div>");if(a.jqx._jqxListBox==null||a.jqx._jqxListBox==undefined){throw"jqxListBox is not loaded."}try{var j="listBox"+this.element.id;var f=a(a.find("#"+j));if(f.length>0){f.remove()}var b=a("<div style='overflow: hidden; border: none; background-color: transparent; position: absolute;' id='listBox"+this.element.id+"'><div id='innerListBox"+this.element.id+"'></div></div>");b.appendTo(document.body);this.container=b;this.listBoxContainer=a(a.find("#innerListBox"+this.element.id));var c=this.width;if(this.dropDownWidth!="auto"){c=this.dropDownWidth}if(this.dropDownHeight==null){this.dropDownHeight=200}this.listBoxContainer.jqxListBox({incrementalSearch:false,width:c,scrollBarSize:this.scrollBarSize,autoHeight:this.autoDropDownHeight,height:this.dropDownHeight,displayMember:this.displayMember,valueMember:this.valueMember,source:this.source,theme:this.theme});this.container.width(parseInt(c)+25);this.container.height(parseInt(this.dropDownHeight)+25);this.listBoxContainer.css({position:"absolute",zIndex:100000,top:0,left:0});this.listBoxContainer.css("border-top-width","1px");this.listBox=a.data(this.listBoxContainer[0],"jqxListBox").instance;this.listBox.enableSelection=this.enableSelection;this.listBox.enableHover=this.enableHover;this.listBox.equalItemsWidth=this.equalItemsWidth;this.listBox.selectIndex(this.selectedIndex);this.listBox._arrange();this.listBox.rendered=function(){i.listBox.selectIndex(i.selectedIndex);i.renderSelection("mouse")};var i=this;this.addHandler(this.host,"loadContent",function(e){i._arrange()});this.addHandler(this.listBoxContainer,"unselect",function(e){i._raiseEvent("3",{index:e.args.index,type:e.args.type,item:e.args.item})});this.addHandler(this.listBoxContainer,"change",function(e){i._raiseEvent("4",{index:e.args.index,type:e.args.type,item:e.args.item})});if(this.animationType=="none"){this.container.css("display","none")}else{this.container.hide()}}catch(g){}this.touch=a.jqx.mobile.isTouchDevice();this.host.append(d);this.dropdownlistWrapper=this.host.find("#dropdownlistWrapper");this.dropdownlistArrow=this.host.find("#dropdownlistArrow");this.dropdownlistContent=this.host.find("#dropdownlistContent");this.dropdownlistContent.addClass(this.toThemeProperty("jqx-combobox-content"));this.dropdownlistWrapper[0].id="dropdownlistWrapper"+this.element.id;this.dropdownlistArrow[0].id="dropdownlistArrow"+this.element.id;this.dropdownlistContent[0].id="dropdownlistContent"+this.element.id;this.dropdownlistContent.append(a('<input style="margin: 0; padding: 0; border: 0;" type="textarea"/>'));this.input=this.dropdownlistContent.find("input");this.input.addClass(this.toThemeProperty("jqx-combobox-input"));var k=this;k.input.attr("disabled",k.disabled);this.propertyChangeMap.disabled=function(e,m,l,n){if(k.disabled){k.host.addClass(k.toThemeProperty("jqx-combobox-state-disabled"));k.dropdownlistContent.addClass(k.toThemeProperty("jqx-combobox-content-disabled"))}else{k.host.removeClass(k.toThemeProperty("jqx-combobox-state-disabled"));k.dropdownlistContent.removeClass(k.toThemeProperty("jqx-combobox-content-disabled"))}k.input.attr("disabled",k.disabled)};if(this.disabled){this.host.addClass(this.toThemeProperty("jqx-combobox-state-disabled"));this.dropdownlistContent.addClass(this.toThemeProperty("jqx-combobox-content-disabled"))}this.host.addClass(this.toThemeProperty("jqx-combobox-state-normal"));this.host.addClass(this.toThemeProperty("jqx-rc-all"));this.dropdownlistArrowIcon=a("<div style='width: 100%; height: 100%;'></div>");this.dropdownlistArrowIcon.addClass(this.toThemeProperty("icon-arrow-down"));this.dropdownlistArrow.append(this.dropdownlistArrowIcon);this.dropdownlistArrow.addClass(this.toThemeProperty("jqx-combobox-arrow-normal"));this.render();this.addHandler(this.input,"keyup.textchange",function(e){var l=i._search(e)})},_search:function(d){if(d.key=="Tab"){return}if(this.searchMode=="none"||this.searchMode==null||this.searchMode=="undefined"){return}if(d.keyCode==16||d.keyCode==17||d.keyCode==20){return false}if(!this.isanimating){if(d.altKey&&d.keyCode==38){this.hideListBox();return false}if(d.altKey&&d.keyCode==40){if(!this.isOpened()){this.showListBox()}return false}}if(d.keyCode==37||d.keyCode==39){return false}if(d.altKey||d.keyCode==18){return}if(d.keyCode>=33&&d.keyCode<=40){return}var f=this.input.val();if(f.length==0&&!this.autocomplete){this.hideListBox();this.listBox.selectIndex(-1,true);return}var c=this;var e=this._getMatches(f);var h=e.matchItems;var b=e.index;if(c.autocomplete){if(h.length>0||f==""){this.listBox.vScrollInstance.value=0;this.listBox._addItems();this.listBox.autoHeight=false;if(this.listBox.virtualSize.height<parseInt(this.dropDownHeight)){this.listBox.autoHeight=true;this.container.height(this.listBox.virtualSize.height+25);this.listBoxContainer.height(this.listBox.virtualSize.height);this.listBox._arrange()}else{this.listBox.height=this.dropDownHeight;this.container.height(parseInt(this.dropDownHeight)+25);this.listBoxContainer.height(parseInt(this.dropDownHeight));this.listBox._arrange()}this.listBox._addItems();this.listBox._renderItems();b=0}else{b=-1}if(b==-1){this.hideListBox()}}if(d.keyCode=="13"){return}else{if(d.keyCode=="27"){if(a.data(document.body,"this.listBox.selectedIndex")!=null){var g=a.data(document.body,"this.listBox.selectedIndex");this.listBox.selectIndex(g,true);this.renderSelection("mouse")}else{if(this.tempSelectedIndex!=undefined){this.listBox.selectIndex(this.tempSelectedIndex,true);this.renderSelection("mouse")}}this.hideListBox()}else{if(b>-1){if(!this.isOpened()&&!this.opening){a.data(document.body,"this.listBox.selectedIndex",this.listBox.selectedIndex);this.showListBox()}this.listBox.selectIndex(b,true)}else{if(b==-1){this.listBox.selectIndex(b,true)}}}}},_getMatches:function(f){var b=this.getItems();var e=this;var c=-1;var g=new Array();var d=0;a.each(b,function(h){var k="";if(!this.isGroup){if(this.label){k=this.label}else{if(this.value){k=this.value}else{if(this.title){k=this.title}else{k="jqxItem"}}}var j=false;switch(e.searchMode){case"containsignorecase":j=a.jqx.string.containsIgnoreCase(k,f);break;case"contains":j=a.jqx.string.contains(k,f);break;case"equals":j=a.jqx.string.equals(k,f);break;case"equalsignorecase":j=a.jqx.string.equalsIgnoreCase(k,f);break;case"startswith":j=a.jqx.string.startsWith(k,f);break;case"startswithignorecase":j=a.jqx.string.startsWithIgnoreCase(k,f);break;case"endswith":j=a.jqx.string.endsWith(k,f);break;case"endswithignorecase":j=a.jqx.string.endsWithIgnoreCase(k,f);break}if(e.autocomplete&&!j){this.visible=false}if(j&&e.autocomplete){g[d++]=this;this.visible=true}if(f==""&&e.autocomplete){this.visible=true;j=false}if(j&&!e.autocomplete){c=this.visibleIndex;return false}}});return{index:c,matchItems:g}},findItems:function(e){var b=this.getItems();var d=this;var c=0;var f=new Array();a.each(b,function(g){var j="";if(!this.isGroup){if(this.label){j=this.label}else{if(this.value){j=this.value}else{if(this.title){j=this.title}else{j="jqxItem"}}}var h=false;switch(d.searchmode){case"containsignorecase":h=a.jqx.string.containsIgnoreCase(j,e);break;case"contains":h=a.jqx.string.contains(j,e);break;case"equals":h=a.jqx.string.equals(j,e);break;case"equalsignorecase":h=a.jqx.string.equalsIgnoreCase(j,e);break;case"startswith":h=a.jqx.string.startsWith(j,e);break;case"startswithignorecase":h=a.jqx.string.startsWithIgnoreCase(j,e);break;case"endswith":h=a.jqx.string.endsWith(j,e);break;case"endswithignorecase":h=a.jqx.string.endsWithIgnoreCase(j,e);break}if(h){f[c++]=this}}});return f},_resetautocomplete:function(){a.each(this.listBox.items,function(b){this.visible=true});this.listBox.vScrollInstance.value=0;this.listBox._addItems();this.listBox.autoHeight=false;this.listBox.height=this.dropDownHeight;this.container.height(parseInt(this.dropDownHeight)+25);this.listBoxContainer.height(parseInt(this.dropDownHeight));this.listBox._arrange();this.listBox._addItems();this.listBox._renderItems()},getItems:function(){var b=this.listBox.items;return b},_setSize:function(){if(this.width!=null&&this.width.toString().indexOf("px")!=-1){this.host.width(this.width)}else{if(this.width!=undefined&&!isNaN(this.width)){this.host.width(this.width)}}if(this.height!=null&&this.height.toString().indexOf("px")!=-1){this.host.height(this.height)}else{if(this.height!=undefined&&!isNaN(this.height)){this.host.height(this.height)}}},isOpened:function(){var c=this;var b=a.data(document.body,"openedComboJQXListBox");if(this.container.css("display")!="block"){return false}if(b!=null&&b==c.listBoxContainer){return true}return false},render:function(){var b=this;var c=false;if(!this.touch){this.host.hover(function(){if(!b.disabled&&b.enableHover){c=true;b.host.addClass(b.toThemeProperty("jqx-combobox-state-hover"));b.dropdownlistArrowIcon.addClass(b.toThemeProperty("icon-arrow-down-hover"));b.dropdownlistArrow.addClass(b.toThemeProperty("jqx-combobox-arrow-hover"))}},function(){if(!b.disabled&&b.enableHover){b.host.removeClass(b.toThemeProperty("jqx-combobox-state-hover"));b.dropdownlistArrowIcon.removeClass(b.toThemeProperty("icon-arrow-down-hover"));b.dropdownlistArrow.removeClass(b.toThemeProperty("jqx-combobox-arrow-hover"));c=false}})}this.addHandler(this.dropdownlistArrow,"mousedown",function(f){if(!b.disabled){var d=b.container.css("display")=="block";if(!b.isanimating){if(d){b.hideListBox()}else{if(b.autocomplete){b._resetautocomplete()}if(b.autoDropDownHeight){b.container.height(b.listBoxContainer.height()+25);var e=b.listBoxContainer.jqxListBox("autoHeight");if(!e){b.listBoxContainer.jqxListBox({autoHeight:b.autoDropDownHeight});b.listBox._arrange();b.listBox.ensureVisible(0);b.listBox._renderItems();b.container.height(b.listBoxContainer.height()+25)}}b.showListBox()}}}});this.addHandler(this.input,"focus",function(){b.host.addClass(b.toThemeProperty("jqx-combobox-state-focus"))});this.addHandler(this.input,"blur",function(){b.host.removeClass(b.toThemeProperty("jqx-combobox-state-focus"))});this.addHandler(a(document),"mousedown."+this.element.id,b.closeOpenedListBox,{me:this,listbox:this.listBox,id:this.element.id});this.addHandler(this.host,"keydown",function(e){var d=b.container.css("display")=="block";if(b.host.css("display")=="none"){return true}if(e.keyCode=="13"){if(d&&!b.isanimating){b.renderSelection("mouse");b.hideListBox();if(!b.keyboardSelection){b._raiseEvent("2",{index:b.selectedIndex,type:"keyboard",item:b.getItem(b.selectedIndex)})}return false}else{if(!d){b.showListBox()}}}if(e.keyCode==115){if(!b.isanimating){if(!b.isOpened()){b.showListBox()}else{if(b.isOpened()){b.hideListBox()}}}return false}if(e.altKey){if(b.host.css("display")=="block"){if(!b.isanimating){if(e.keyCode==38){if(b.isOpened()){b.hideListBox()}}else{if(e.keyCode==40){if(!b.isOpened()){b.showListBox()}}}}}}if(e.keyCode=="27"){b.hideListBox();if(b.tempSelectedIndex!=undefined){b.selectIndex(b.tempSelectedIndex)}}if(d&&!b.disabled){return b.listBox._handleKeyDown(e)}});this.addHandler(this.listBoxContainer,"select",function(d){if(!b.disabled){if(d.args.type!="keyboard"||b.keyboardSelection){b.renderSelection(d.args.type);b._raiseEvent("2",{index:d.args.index,type:d.args.type,item:d.args.item});if(d.args.type=="mouse"){b.hideListBox()}}}});if(this.listBox!=null&&this.listBox.content!=null){this.addHandler(this.listBox.content,"click",function(d){if(!b.disabled){b.renderSelection("mouse");b.hideListBox()}})}},removeHandlers:function(){var b=this;this.removeHandler(this.dropdownlistWrapper,"mousedown");this.removeHandler(this.host,"keydown");this.host.unbind("hover");this.removeHandler(this.input,"focus");this.removeHandler(this.input,"blur")},getItem:function(b){var c=this.listBox.getItem(b);return c},renderSelection:function(g){if(g==undefined||g=="none"){return}if(this.listBox==null){return}var h=this.listBox.visibleItems[this.listBox.selectedIndex];if(h==null){return}this.selectedIndex=this.listBox.selectedIndex;var f=a("<span></span>");f.appendTo(a(document.body));f.addClass(this.toThemeProperty("jqx-listitem-state-normal"));if(h.label!=undefined&&h.label!=null&&h.label.toString().length>0){f.html(h.label)}else{if(h.value!=undefined&&h.value!=null&&h.value.toString().length>0){f.html(h.value)}else{if(h.title!=undefined&&h.title!=null&&h.title.toString().length>0){f.html(h.title)}else{f.html("jqxItem")}}}var i=this.dropdownlistContent.css("font-size");var b=this.dropdownlistContent.css("font-family");var e=this.dropdownlistContent.css("padding-top");var c=this.dropdownlistContent.css("padding-bottom");f.css("font-size",i);f.css("font-family",b);f.css("padding-top",e);f.css("padding-bottom",c);var d=f.outerHeight();f.remove();f.removeClass();this.input.val(f[0].innerHTML)},clearSelection:function(b){this.listBox.clearSelection()},unselectIndex:function(b,c){if(isNaN(b)){return}this.listBox.unselectIndex(b,c);this.renderSelection()},selectIndex:function(b,d,e,c){this.listBox.selectIndex(b,d,e,c);this.renderSelection();this.selectedIndex=b},getSelectedIndex:function(){return this.selectedIndex},getSelectedItem:function(){return this.getItem(this.selectedIndex)},insertAt:function(c,b){if(c==null){return false}return this.listBox.insertAt(c,b)},addItem:function(b){return this.listBox.addItem(b)},removeAt:function(c){var b=this.listBox.removeAt(c);this.renderSelection("mouse");return b},ensureVisible:function(b){this.listBox.ensureVisible(b)},disableAt:function(b){this.listBox.disableAt(b)},enableAt:function(b){this.listBox.enableAt(b)},_findPos:function(c){while(c&&(c.type=="hidden"||c.nodeType!=1||a.expr.filters.hidden(c))){c=c.nextSibling}var b=a(c).offset();return[b.left,b.top]},testOffset:function(d,h,f){var g=d.outerWidth();var c=d.outerHeight();var e=document.documentElement.clientWidth+a(window).scrollLeft();var b=document.documentElement.clientHeight+a(window).scrollTop();h.left-=0;h.left-=0;h.top-=0;h.left-=Math.min(h.left,(h.left+g>e&&e>g)?Math.abs(h.left+g-e):0);h.top-=Math.min(h.top,(h.top+c>b&&b>c)?Math.abs(c+f):0);return h},showListBox:function(){var l=this;var b=this.listBoxContainer;var g=this.listBox;var i=a(window).scrollTop();var e=a(window).scrollLeft();var h=parseInt(this._findPos(this.host[0])[1])+parseInt(this.host.outerHeight())+"px";var d=parseInt(this.host.offset().left)+"px";if(a.browser.mozilla){var d=parseInt(this.host.offset().left)+1+"px"}if(!this.keyboardSelection){this.listBox.selectIndex(this.selectedIndex);this.listBox.ensureVisible(this.selectedIndex)}this.tempSelectedIndex=this.selectedIndex;var k=a.jqx.mobile.isSafariMobileBrowser();if(k!=null&&k){h=parseInt(h)-i+"px";d=parseInt(d)-e+"px"}this.host.addClass(this.toThemeProperty("jqx-combobox-state-selected"));this.dropdownlistArrowIcon.addClass(this.toThemeProperty("icon-arrow-down-selected"));this.dropdownlistArrow.addClass(this.toThemeProperty("jqx-combobox-arrow-selected"));this.container.css("left",d);this.container.css("top",h);g._arrange();var c=true;if(this.enableBrowserBoundsDetection){var f=this.testOffset(b,{left:parseInt(this.container.css("left")),top:parseInt(h)},parseInt(this.host.outerHeight()));this.container.css("top",f.top)}if(this.animationType=="none"){this.container.css("display","block");a.data(document.body,"openedComboJQXListBoxParent",l);a.data(document.body,"openedComboJQXListBox",b)}else{this.container.css("display","block");var j=b.outerHeight();b.stop();b.css("margin-top",-j);this.isanimating=true;this.opening=true;b.animate({"margin-top":0},this.showDelay,function(){l.isanimating=false;l.opening=false;a.data(document.body,"openedComboJQXListBoxParent",l);a.data(document.body,"openedComboJQXListBox",b)})}g._renderItems();this._raiseEvent("0",g)},hideListBox:function(){var e=this.listBoxContainer;var f=this.listBox;var c=this.container;if(this.container.css("display")=="none"){return}this.tempSelectedIndex=undefined;var d=this;a.data(document.body,"openedComboJQXListBox",null);if(this.animationType=="none"){this.container.css("display","none")}else{var b=e.outerHeight();e.css("margin-top",0);e.stop();this.isanimating=true;e.animate({"margin-top":-b},this.hideDelay,function(){d.isanimating=false;c.css("display","none");d.ishiding=false})}this.ishiding=true;this.host.removeClass(this.toThemeProperty("jqx-combobox-state-selected"));this.dropdownlistArrowIcon.removeClass(this.toThemeProperty("icon-arrow-down-selected"));this.dropdownlistArrow.removeClass(this.toThemeProperty("jqx-combobox-arrow-selected"));this._raiseEvent("1",f)},closeOpenedListBox:function(e){var d=e.data.me;var b=a(e.target);var c=e.data.listbox;if(c==null){return true}if(a(e.target).ischildof(e.data.me.host)){return}var f=d;var g=false;a.each(b.parents(),function(){if(this.className!=undefined){if(this.className.indexOf("jqx-listbox")!=-1){g=true;return false}if(this.className.indexOf("jqx-combobox")!=-1){g=true;return false}}});if(c!=null&&!g){if(d.tempSelectedIndex!=undefined){d.listBox.selectIndex(d.tempSelectedIndex,true);d.renderSelection("mouse")}d.hideListBox();d.ishiding=false}return true},loadFromSelect:function(b){this.listBox.loadFromSelect(b)},refresh:function(){this._arrange();this.renderSelection("mouse")},_arrange:function(){var f=parseInt(this.host.width());var b=parseInt(this.host.height());var e=this.arrowSize;var d=this.arrowSize;var h=1;var c=f-d-1*h;if(c>0){this.dropdownlistContent.width(c+"px")}this.dropdownlistContent.height(b);this.dropdownlistContent.css("left",0);this.dropdownlistContent.css("top",0);this.dropdownlistArrow.width(d);this.dropdownlistArrow.height(b);this.input.css("width","100%");this.input.addClass(this.toThemeProperty("jqx-rc-all"));var g=parseInt(b)/2-parseInt(this.input.height())/2;if(g>0){this.input.css("margin-top",g)}},destroy:function(){this.listBoxContainer.remove();this.host.removeClass();this.removeHandler(a(document),"mousedown."+this.element.id,self.closeOpenedListBox)},_raiseEvent:function(f,c){if(c==undefined){c={owner:null}}var d=this.events[f];args=c;args.owner=this;var e=new jQuery.Event(d);e.owner=this;if(f==2||f==3||f==4){e.args=c}var b=this.host.trigger(e);return b},propertyChangedHandler:function(b,c,f,e){if(this.isInitialized==undefined||this.isInitialized==false){return}if(c=="source"){this.listBoxContainer.jqxListBox({source:this.source});this.renderSelection("mouse")}if(c=="displayMember"||c=="valueMember"){this.listBoxContainer.jqxListBox({displayMember:this.displayMember,valueMember:this.valueMember});this.renderSelection()}if(c=="autoDropDownHeight"){this.listBoxContainer.jqxListBox({autoHeight:this.autoDropDownHeight});if(this.autoDropDownHeight){this.container.height(this.listBoxContainer.height()+25)}else{this.listBoxContainer.jqxListBox({height:this.dropDownHeight});this.container.height(parseInt(this.dropDownHeight)+25)}}if(c=="dropDownHeight"){if(!this.autoDropDownHeight){this.listBoxContainer.jqxListBox({height:this.dropDownHeight});this.container.height(parseInt(this.dropDownHeight)+25)}}if(c=="dropDownWidth"||c=="scrollBarSize"){var d=this.width;if(this.dropDownWidth!="auto"){d=this.dropDownWidth}this.listBoxContainer.jqxListBox({width:d,scrollBarSize:this.scrollBarSize});this.container.width(parseInt(d)+25)}if(c=="autocomplete"){b._resetautocomplete()}if(c=="theme"&&e!=null){this.listBoxContainer.jqxListBox({theme:e});this.dropdownlistContent.removeClass();this.dropdownlistContent.addClass(this.toThemeProperty("jqx-combobox-content"));this.input.removeClass();this.input.addClass(this.toThemeProperty("jqx-combobox-input"));this.host.removeClass();this.host.addClass(this.toThemeProperty("jqx-combobox-state-normal"));this.host.addClass(this.toThemeProperty("jqx-rc-all"));this.dropdownlistArrow.removeClass();this.dropdownlistArrowIcon.addClass(this.toThemeProperty("icon-arrow-down"));this.dropdownlistArrow.addClass(this.toThemeProperty("jqx-combobox-arrow-normal"))}if(c=="width"||c=="height"){this._setSize();this._arrange()}if(c=="selectedIndex"){this.listBox.selectIndex(e);this.renderSelection("mouse")}}})})(jQuery);