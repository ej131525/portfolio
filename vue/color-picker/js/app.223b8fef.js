(function(e){function t(t){for(var l,i,o=t[0],s=t[1],u=t[2],v=0,p=[];v<o.length;v++)i=o[v],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l]);c&&c(t);while(p.length)p.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],l=!0,o=1;o<a.length;o++){var s=a[o];0!==r[s]&&(l=!1)}l&&(n.splice(t--,1),e=i(i.s=a[0]))}return e}var l={},r={app:0},n=[];function i(t){if(l[t])return l[t].exports;var a=l[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=l,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(a,l,function(t){return e[t]}.bind(null,l));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/portfolio/color-picker/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=s;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var l=a("2b0e"),r=function(){var e=this,t=e._self._c;return t("div",[t("h1",{staticStyle:{"text-align":"center"}},[e._v("JavaScript 系列九：第7課 ── 學習開發狀態複雜的 vue 元件")]),e._m(0),e._m(1),e._m(2),t("p",[e._v("ps: the link tool hex to rgba provides only 2 digits decimal, but my covert tool is 3 digits decimal.")]),e._m(3),t("my-color",{model:{value:e.color1,callback:function(t){e.color1=t},expression:"color1"}}),t("my-color",{model:{value:e.color2,callback:function(t){e.color2=t},expression:"color2"}}),t("my-color")],1)},n=[function(){var e=this,t=e._self._c;return t("p",[t("a",{attrs:{href:"https://rgbacolorpicker.com/rgba-to-hex",target:"_blank"}},[e._v("RGBA->HEX Convert check")])])},function(){var e=this,t=e._self._c;return t("p",[t("a",{attrs:{href:"https://rgbacolorpicker.com/hex-to-rgba",target:"_blank"}},[e._v("HEX->RGBA Convert check")])])},function(){var e=this,t=e._self._c;return t("p",[t("a",{attrs:{target:"_blank",href:"https://play.vuejs.org/#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"}},[e._v("作業繳交（vue3寫法）")])])},function(){var e=this,t=e._self._c;return t("div",[t("h2",[e._v("Usage:")]),t("p",[e._v("1. type hex code or RGBA code or each value of rgba next to the scroll bar or scroll the scroll bar.")]),t("p",[e._v("2. if you type in RGBA and each color is over 255 (over 1 for alpha), it will automatically return 255\n            (return 1\n            for\n            alpha).")]),t("p",[e._v("3. click the button next to the hex / rgba code to copy the color version you like.")]),t("p",[e._v('ps: if there\'s no the last two digits which means alpha in hex code, it will regard as "FF", and it means\n            alpha =\n            1\n            in RGBA.')]),t("p",[e._v("ps: if no v-model in parent conponent (like the third demo), the default color is #000000FF.")])])}],i=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{display:"inline-block"}},[t("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",integrity:"sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==",crossorigin:"anonymous",referrerpolicy:"no-referrer"}}),t("div",{staticClass:"container"},[t("div",{staticClass:"colorView"},[t("img",{staticClass:"transparent"}),e.modelHEX?t("div",{staticClass:"colorBlock",style:{"background-color":e.hex}}):e._e(),e.modelRGB?t("div",{staticClass:"colorBlock",style:{"background-color":e.rgba}}):e._e()]),t("div",{staticClass:"colorValue"},[t("div",{staticClass:"colorCode"},[t("div",{staticClass:"hex"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.hex,expression:"hex"}],attrs:{type:"text",placeholder:"#RRGGBB(AA)"},domProps:{value:e.hex},on:{input:[function(t){t.target.composing||(e.hex=t.target.value)},e.HEXtoRGB]}}),t("button",{on:{click:e.copy}},[t("i",{staticClass:"fa-regular fa-copy"})]),t("p",{staticClass:"hint"},[e._v("copy")])]),t("div",{staticClass:"rgba"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.rgba,expression:"rgba"}],attrs:{type:"text",placeholder:"rgba(r, g, b, a)"},domProps:{value:e.rgba},on:{input:[function(t){t.target.composing||(e.rgba=t.target.value)},e.setRGB],blur:e.padZero}}),t("button",{on:{click:e.copy}},[t("i",{staticClass:"fa-regular fa-copy"})]),t("p",{staticClass:"hint"},[e._v("copy")])])]),t("div",{staticClass:"rgbaSetting red"},[t("label",{attrs:{for:"red"}},[e._v("R")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.Rvalue,expression:"Rvalue"}],attrs:{type:"range",id:"red",min:"0",max:"255"},domProps:{value:e.Rvalue},on:{input:e.RGBtoHEX,__r:function(t){e.Rvalue=t.target.value}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.Rvalue,expression:"Rvalue"}],attrs:{type:"text"},domProps:{value:e.Rvalue},on:{input:[function(t){t.target.composing||(e.Rvalue=t.target.value)},e.RGBtoHEX],blur:e.padZero}})]),t("div",{staticClass:"rgbaSetting green"},[t("label",{attrs:{for:"green"}},[e._v("G")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.Gvalue,expression:"Gvalue"}],attrs:{type:"range",id:"green",min:"0",max:"255"},domProps:{value:e.Gvalue},on:{input:e.RGBtoHEX,__r:function(t){e.Gvalue=t.target.value}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.Gvalue,expression:"Gvalue"}],attrs:{type:"text"},domProps:{value:e.Gvalue},on:{input:[function(t){t.target.composing||(e.Gvalue=t.target.value)},e.RGBtoHEX],blur:e.padZero}})]),t("div",{staticClass:"rgbaSetting blue"},[t("label",{attrs:{for:"blue"}},[e._v("B")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.Bvalue,expression:"Bvalue"}],attrs:{type:"range",id:"blue",min:"0",max:"255"},domProps:{value:e.Bvalue},on:{input:e.RGBtoHEX,__r:function(t){e.Bvalue=t.target.value}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.Bvalue,expression:"Bvalue"}],attrs:{type:"text"},domProps:{value:e.Bvalue},on:{input:[function(t){t.target.composing||(e.Bvalue=t.target.value)},e.RGBtoHEX],blur:e.padZero}})]),t("div",{staticClass:"rgbaSetting alpha"},[t("label",{attrs:{for:"alpha"}},[e._v("A")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.Avalue,expression:"Avalue"}],attrs:{type:"range",id:"alpha",min:"0",max:"1",step:"0.001"},domProps:{value:e.Avalue},on:{input:e.RGBtoHEX,__r:function(t){e.Avalue=t.target.value}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.Avalue,expression:"Avalue"}],attrs:{type:"text"},domProps:{value:e.Avalue},on:{input:[function(t){t.target.composing||(e.Avalue=t.target.value)},e.RGBtoHEX],blur:e.padZero}})])])])])},o=[],s=(a("28a5"),a("a481"),a("c5f6"),a("f576"),a("6b54"),a("f559"),a("6762"),a("2fdb"),{model:{prop:"modelValue",event:"change"},props:{modelValue:{type:String,default:"#000000ff"}},data:function(){return{Rvalue:null,Gvalue:null,Bvalue:null,Avalue:null,hex:null,rgba:null,modelHEX:!1,modelRGB:!1}},watch:{modelValue:{handler:function(e){e.includes("#")&&(this.hex=e,this.modelHEX=!0,this.HEXtoRGB()),e.includes("rgba")&&(this.rgba=e,this.modelRGB=!0,this.setRGB())},immediate:!0},Rvalue:function(e){this.Rvalue=this.checkRGB(e)},Gvalue:function(e){this.Gvalue=this.checkRGB(e)},Bvalue:function(e){this.Bvalue=this.checkRGB(e)},Avalue:function(e){this.Avalue=this.checkAlpha(e)}},methods:{checkRGB:function(e){return e=parseInt(e),e>255?255:e<0||""===e||isNaN(e)?"":e},checkAlpha:function(e){return parseFloat(e)>=1?1:e.toString().startsWith("00")||e<0||""===e||isNaN(e)?"":e.toString().length>5?e.slice(0,5):e},HEXtoRGB:function(){if(this.hex=this.hex.toUpperCase(),this.hex.length>9&&(this.hex=this.hex.slice(0,9)),""===this.hex||"#"===this.hex)return this.hex="#",this.rgba="",this.Rvalue=0,this.Gvalue=0,this.Bvalue=0,void(this.Avalue=0);for(var e=1;e<this.hex.toString().length;e++)isNaN(parseInt(this.hex[e],16))&&(this.hex=this.hex.slice(0,e));this.hex.slice(1,2)&&this.hex.slice(2,3)?this.Rvalue=parseInt(this.hex.slice(1,3),16):this.Rvalue=0,this.hex.slice(3,4)&&this.hex.slice(4,5)?this.Gvalue=parseInt(this.hex.slice(3,5),16):this.Gvalue=0,this.hex.slice(5,6)&&this.hex.slice(6,7)?this.Bvalue=parseInt(this.hex.slice(5,7),16):this.Bvalue=0,this.hex.slice(7,8)&&this.hex.slice(8,9)?this.Avalue=parseFloat((parseInt(this.hex.slice(7,9),16)/255).toFixed(3)):this.Avalue=1,this.rgba="rgba(".concat(this.Rvalue,", ").concat(this.Gvalue,", ").concat(this.Bvalue,", ").concat(this.Avalue,")")},RGBtoHEX:function(){this.rgba="rgba(".concat(this.Rvalue,", ").concat(this.Gvalue,", ").concat(this.Bvalue,", ").concat(this.Avalue,")");var e=Number(this.Rvalue).toString(16).padStart(2,"0"),t=Number(this.Gvalue).toString(16).padStart(2,"0"),a=Number(this.Bvalue).toString(16).padStart(2,"0"),l=Math.round(255*Number(this.Avalue)).toString(16).padStart(2,"0");this.hex="#".concat(e).concat(t).concat(a).concat(l).toUpperCase()},setRGB:function(){""===this.rgba&&(this.rgba="rgba(0, 0, 0, 0)");var e=this.rgba.replace("rgba","");e=e.replace("(",""),e=e.replace(")",""),this.Rvalue=this.checkRGB(parseInt(e.split(",")[0])),this.Gvalue=this.checkRGB(parseInt(e.split(",")[1])),this.Bvalue=this.checkRGB(parseInt(e.split(",")[2])),this.Avalue=this.checkAlpha(e.split(",")[3].trim()),this.RGBtoHEX()},padZero:function(){""===this.Rvalue&&(this.Rvalue=0),""===this.Gvalue&&(this.Gvalue=0),""===this.Bvalue&&(this.Bvalue=0),""===this.Avalue&&(this.Avalue=0),this.rgba="rgba(".concat(this.Rvalue,", ").concat(this.Gvalue,", ").concat(this.Bvalue,", ").concat(this.Avalue,")"),this.RGBtoHEX()},copy:function(e){var t=e.target.previousSibling.value;navigator.clipboard.writeText(t),e.target.nextSibling.textContent="copied",e.target.nextSibling.style.right="-20px",e.target.nextSibling.style.display="flex",setTimeout((function(){e.target.nextSibling.textContent="copy",e.target.nextSibling.style.right="",e.target.nextSibling.style.display=""}),1500)}}}),u=s,c=(a("9513"),a("2877")),v=Object(c["a"])(u,i,o,!1,null,"16f607d2",null),p=v.exports,h={components:{MyColor:p},data:function(){return{color1:"#3a86ff",color2:"rgba(228, 193, 249, 0.79)"}}},d=h,g=Object(c["a"])(d,r,n,!1,null,null,null),f=g.exports;l["a"].config.productionTip=!1,new l["a"]({render:function(e){return e(f)}}).$mount("#app")},9513:function(e,t,a){"use strict";a("cee7")},cee7:function(e,t,a){}});
//# sourceMappingURL=app.223b8fef.js.map