!function(e){const t=e.en=e.en||{};t.dictionary=Object.assign(t.dictionary||{},{"Choose language":"Choose language",Language:"Language","Remove language":"Remove language"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),
/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={704:(e,t,n)=>{e.exports=n(79)("./src/core.js")},273:(e,t,n)=>{e.exports=n(79)("./src/ui.js")},209:(e,t,n)=>{e.exports=n(79)("./src/utils.js")},79:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(()=>{"use strict";n.r(a),n.d(a,{TextPartLanguage:()=>u,TextPartLanguageEditing:()=>r,TextPartLanguageUI:()=>s});var e=n(704),t=n(209);function o(e,n){return`${e}:${n=n||(0,t.getLanguageDirection)(e)}`}class i extends e.Command{refresh(){const e=this.editor.model,t=e.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=e.schema.checkAttributeInSelection(t.selection,"language")}execute({languageCode:e,textDirection:t}={}){const n=this.editor.model,a=n.document.selection,i=!!e&&o(e,t);n.change((e=>{if(a.isCollapsed)i?e.setSelectionAttribute("language",i):e.removeSelectionAttribute("language");else{const t=n.schema.getValidRanges(a.getRanges(),"language");for(const n of t)i?e.setAttribute("language",i,n):e.removeAttribute("language",n)}}))}_getValueFromFirstAllowedNode(){const e=this.editor.model,t=e.schema,n=e.document.selection;if(n.isCollapsed)return n.getAttribute("language")||!1;for(const e of n.getRanges())for(const n of e.getItems())if(t.checkAttribute(n,"language"))return n.getAttribute("language")||!1;return!1}}class r extends e.Plugin{static get pluginName(){return"TextPartLanguageEditing"}constructor(e){super(e),e.config.define("language",{textPartLanguage:[{title:"Arabic",languageCode:"ar"},{title:"French",languageCode:"fr"},{title:"Spanish",languageCode:"es"}]})}init(){const e=this.editor;e.model.schema.extend("$text",{allowAttributes:"language"}),e.model.schema.setAttributeProperties("language",{copyOnEnter:!0}),this._defineConverters(),e.commands.add("textPartLanguage",new i(e))}_defineConverters(){const e=this.editor.conversion;e.for("upcast").elementToAttribute({model:{key:"language",value:e=>o(e.getAttribute("lang"),e.getAttribute("dir"))},view:{name:"span",attributes:{lang:/[\s\S]+/}}}),e.for("downcast").attributeToElement({model:"language",view:(e,{writer:t},n)=>{if(!e)return;if(!n.item.is("$textProxy")&&!n.item.is("documentSelection"))return;const{languageCode:a,textDirection:o}=function(e){const[t,n]=e.split(":");return{languageCode:t,textDirection:n}}(e);return t.createAttributeElement("span",{lang:a,dir:o})}})}}var g=n(273);class s extends e.Plugin{static get pluginName(){return"TextPartLanguageUI"}init(){const e=this.editor,n=e.t,a=e.config.get("language.textPartLanguage"),i=n("Choose language"),r=n("Remove language"),s=n("Language");e.ui.componentFactory.add("textPartLanguage",(n=>{const u=new t.Collection,l={},d=e.commands.get("textPartLanguage");u.add({type:"button",model:new g.Model({label:r,languageCode:!1,withText:!0})}),u.add({type:"separator"});for(const e of a){const t={type:"button",model:new g.Model({label:e.title,languageCode:e.languageCode,textDirection:e.textDirection,withText:!0})},n=o(e.languageCode,e.textDirection);t.model.bind("isOn").to(d,"value",(e=>e===n)),u.add(t),l[n]=e.title}const c=(0,g.createDropdown)(n);return(0,g.addListToDropdown)(c,u),c.buttonView.set({isOn:!1,withText:!0,tooltip:s}),c.extendTemplate({attributes:{class:["ck-text-fragment-language-dropdown"]}}),c.bind("isEnabled").to(d,"isEnabled"),c.buttonView.bind("label").to(d,"value",(e=>e&&l[e]||i)),this.listenTo(c,"execute",(t=>{d.execute({languageCode:t.source.languageCode,textDirection:t.source.textDirection}),e.editing.view.focus()})),c}))}}class u extends e.Plugin{static get requires(){return[r,s]}static get pluginName(){return"TextPartLanguage"}}})(),(window.CKEditor5=window.CKEditor5||{}).language=a})();