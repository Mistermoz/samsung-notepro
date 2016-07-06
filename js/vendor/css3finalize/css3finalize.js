/* CSS3 Finalize - v3.4.0 - 2013-03-29 - Automatically add vendor prefixes.
* https://github.com/codler/jQuery-Css3-Finalize
* Copyright (c) 2013 Han Lin Yap http://yap.nu; http://creativecommons.org/licenses/by-sa/3.0/ */
(function(a){if(a.cssFinalize){return}a.cssFinalizeSetup={node:"style,link",append:true,callback:function(b){}};a.fn.cssFinalize=function(b){if(!b||typeof b!="object"){b={}}b.node=this;a.cssFinalize(b);return this};a.cssFinalize=function(d){var o=document.createElement("div");o.style.cssText="background-image:linear-gradient(#9f9, white);";d=a.extend({},a.cssFinalizeSetup,d);var w=function(i){return i.replace(/[A-Z]/g,function(z){return"-"+z.toLowerCase()})};var e=[];var t;if(window.getComputedStyle){var k=getComputedStyle(document.documentElement,null);if(k.length){for(var s=0;s<k.length;s++){if(k[s].charAt(0)==="-"){var f=k[s].indexOf("-",1);e.push(k[s].substr(f+1));t=k[s].substr(1,f-1)}}}else{for(var s in k){var u=w(s);if(u.indexOf("-o-")===0){e.push(u.substr(3))}}t="o"}}else{return true}if(t=="ms"&&e.indexOf("transform")===-1){e.push("transform");e.push("transform-origin")}else{if(t=="webkit"){for(var s in o.style){if(s.indexOf("webkit")===0){var u=w(s);if(a.inArray(u.substr(7),e)===-1){e.push(u.substr(7))}}}}}function j(i){var z=a.camelCase(i);return(t=="ms")?z.charAt(0).toLowerCase()+z.substr(1):z}function v(i){i=i.replace(/\/\*((?:[^\*]|\*[^\/])*)\*\//g,"");i=i.replace(/\n/g,"");i=i.replace(/\r/g,"");i=i.replace(/\@import[^;]*;/g,"");return i}function y(i,z){i.after('<style class="css-finalized" '+((i.attr("media")&&i.attr("media").length>0)?'media="'+i.attr("media")+'"':"")+">"+a.cssFinalize.cssObjToText(z)+"</style>")}function b(z,A){A=v(A);if(a.trim(A)===""){return}var B=c(A);var i=[];i=C(B);function C(E){var D=[];a.each(E,function(F,H){if(H.attributes){var G=p(H.attributes);if(!a.isEmptyObject(G)){D.push({selector:l(H.selector),attributes:G})}else{if(l(H.selector)!=H.selector){D.push({selector:l(H.selector),attributes:p(H.attributes,true)})}else{if((G=C(H.attributes))&&G.length>0){D.push({selector:H.selector,attributes:G})}}}}});return D}z.addClass("css-finalize-read");if(i.length>0&&d.append){y(z,i)}if(a.isFunction(d.callback)){d.callback.call(z,i)}}function c(G){var B=G.split(/({[^{}]*})/);if(B[B.length-1].indexOf("}")==-1){B.pop()}var C=[];var z=false;var H;var E=0;var F;var D=0;while(D<B.length){if(D%2===0){var A=a.trim(B[D]);if(z){if(A.indexOf("}")!=-1){A=A.substr(1);B[D]=A;F=B.splice(E,D-E);F.shift();F.unshift(H[1]);C[C.length-1].attributes=c(F.join(""));z=false;D=E;continue}}else{if(A.indexOf("{")!=-1){H=A.split("{");A=a.trim(H[0]);z=true;E=D}if(A!==""){C.push({selector:A})}}}else{if(!z){C[C.length-1].attributes=x(B[D].substr(1,B[D].length-2))}}D++}return C}function x(A){var z;A=A.replace(/url\(([^)]+)\)/g,function(B){return B.replace(/;/g,"[cssFinalize]")});z=A.split(/(:[^;]*;?)/);z.pop();var i={};a.map(z,function(C,B){if(B%2==1){i[a.trim(z[B-1])]=a.trim(C.substr(1).replace(";","").replace(/url\(([^)]+)\)/g,function(D){return D.replace(/\[cssFinalize\]/g,";")}))}});return i}function p(z,i){if(a.isArray(z)){if(i){return a.map(z,function(C,B){return{selector:C.selector,attributes:p(C.attributes,i)}})}else{return{}}}var A={};a.each(z,function(E,D){var G=false;var B=q(E);if(B){G=true;A[B]=D}var F=m(E,D,B);if(F){G=true;A[(B)?B:E]=F}var C=r(E,D);if(C){G=true;a.each(C,function(H,I){if(H=="filter"&&A[H]){A[H]+=" "+I}else{A[H]=I}})}if(i&&!G){A[E]=D}});return A}function q(i){if(a.inArray(i,e)>-1){if(!(j(i) in o.style)){if(j("-"+t+"-"+i) in o.style){return"-"+t+"-"+i}}}return false}function m(E,D,z){z=z||E;if(E=="transition"||E=="transition-property"){var C=D.split(/\s?,\s?/);var F=[];a.each(C,function(G){var H,I;if(E=="transition"){H=C[G].split(" ")[0]}else{H=C[G]}if((I=q(H))!==false){F.push(I+C[G].substr(H.length))}else{F.push(C[G])}});return F.join(",")}if(t=="webkit"){if(D.indexOf("calc")===0){return"-webkit-"+D}}if(t=="moz"){if(D.indexOf("element")===0){return"-moz-"+D}}if(E=="display"){if(t=="ms"&&"msFlexWrap" in o.style){if(D.indexOf("flex")===0){return"-ms-flexbox"}if(D.indexOf("inline-flex")===0){return"-ms-inline-flexbox"}}if(D.indexOf("grid")===0||D.indexOf("inline-grid")===0||D.indexOf("flexbox")===0||D.indexOf("inline-flexbox")===0||D.indexOf("flex")===0||D.indexOf("inline-flex")===0){return"-"+t+"-"+D}}if(E=="background"||E=="background-image"){if(D.indexOf("linear-gradient")===0){if(t=="ms"&&o.style.backgroundImage.indexOf("gradient")===-1){var A=D.replace(/^linear-gradient\s?\(\s?(.*?)\s?\)$/,"$1"),i=[1,1];if(A.indexOf("rgba")===0){A=A.split(/rgba\s?\(\s?(.*?)\s?\)/);A[1]=A[1].split(/,\s?/);A[3]=A[3].split(/,\s?/);i[0]=A[1].pop();i[1]=A[3].pop();A=["rgb("+A[1].join(",")+")","rgb("+A[3].join(",")+")"]}else{A=A.split(/,\s?/)}if(A.length==2){var B='<svg xmlns="http://www.w3.org/2000/svg" version="1.0"><defs><linearGradient id="gradient" x1="0" y1="0" x2="0" y2="100%"><stop offset="0%" style="stop-color: '+A[0]+";stop-opacity:"+i[0]+'"/><stop offset="100%" style="stop-color: '+A[1]+";stop-opacity:"+i[1]+'"/></linearGradient></defs><rect x="0" y="0" fill="url(#gradient)" width="100%" height="100%" /></svg>';return"url(data:image/svg+xml,"+escape(B)+")"}}else{if(t=="webkit"){return"-"+t+"-"+D}}}else{if(D.indexOf("linear-gradient")>-1){if(t=="webkit"){return D.replace(RegExp("(\\s|:|,)(linear-gradient)\\s*\\(","gi"),"$1-webkit-$2(")}}}}return false}function r(z,i){return false}function l(i){switch(t){case"moz":i=i.replace("::selection","::-moz-selection");i=i.replace(":input-placeholder",":-moz-placeholder");break;case"webkit":i=i.replace("@keyframes","@-webkit-keyframes");i=i.replace(":input-placeholder","::-webkit-input-placeholder");break;case"ms":i=i.replace(":input-placeholder",":-ms-input-placeholder");i=i.replace("@viewport","@-ms-viewport");break;case"o":i=i.replace("@viewport","@-o-viewport");break}return i}if(!(d.node instanceof jQuery)){d.node=a(d.node)}d.node.each(function(i,z){var A=a(this);if(A.hasClass("css-finalize-read")||A.hasClass("css-finalized")){return true}if(this.tagName=="LINK"&&A.attr("rel")=="stylesheet"){h(this.href,A)}else{if(this.tagName=="TEXTAREA"){b(A,A.val())}else{b(A,A.html())}}});function h(i,z){var E=document.location,D=E.protocol||"http:";var C=/^(\w+:)\/\/([^\/?#:]+)(?::(\d+))?/.exec(i.toLowerCase());var A=!!(C&&(C[1]!=D||C[2]!=E.hostname||(C[3]||(C[1]==="http:"?80:443))!=(E.port||(D==="http:"?80:443))));if(A){return}try{a("<div />").load(i,function(F){if(F){b(z,F)}})}catch(B){}}var g="background background-image transition transition-property".split(" ");a.each(g,function(i){if(a.inArray(g[i],e)===-1){n(g[i],g[i])}});function n(z,i){i=j(i);a.cssHooks[j(z)]={get:function(C,B,A){if(!B){return C.style[i]}},set:function(A,C){var E=m(z,C,i);try{A.style[i]=(E)?E:C}catch(D){}var B=r(z,C);if(B){a.each(B,function(F,G){try{if(F=="filter"&&A.style[F]){A.style[F]+=" "+G}else{A.style[F]=G}}catch(H){}})}}}}};a.cssFinalize.cssObjToText=function(d,c,b){var e="";c=c||false;b=b||1;a.each(d,function(f,g){if(c){e+=Array(b).join("  ")}e+=g.selector+"{";if(a.isArray(g.attributes)){if(c){e+="\r\n"+Array(b).join("  ")}e+=a.cssFinalize.cssObjToText(g.attributes,c,b+1)}else{a.each(g.attributes,function(i,h){if(c){e+="\r\n"+Array(b+1).join("  ")}e+=i+":"+h+";"});if(c){e+="\r\n"+Array(b).join("  ")}}e+="}";if(c){e+="\r\n"}});return e};a(function(){if(window.cssFinalize!==false){a.cssFinalize()}})})(jQuery);