webpackJsonp([239,366],{630:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(35),s(34)),o=t(p),e=(s(24),s(23)),c=t(e),l=s(1),u=t(l),k=s(2);t(k);n.exports={content:[["p","Flex \u5e03\u5c40\u57fa\u7840\u3002"],["p","\u4f7f\u7528 ",["code","row-flex"]," \u5b9a\u4e49 ",["code","flex"]," \u5e03\u5c40\uff0c\u5176\u5b50\u5143\u7d20\u6839\u636e\u4e0d\u540c\u7684\u503c ",["code","start"],",",["code","center"],",",["code","end"],",",["code","space-between"],",",["code","space-around"],"\uff0c\u5206\u522b\u5b9a\u4e49\u5176\u5728\u7236\u8282\u70b9\u91cc\u9762\u7684\u6392\u7248\u65b9\u5f0f\u3002"]],meta:{order:4,title:"Flex \u5e03\u5c40",filename:"components/layout/demo/flex.md",id:"components-layout-demo-flex"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Row<span class="token punctuation" >,</span> Col <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u5b50\u5143\u7d20\u5c45\u5de6\u6392\u5217<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Row</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>flex<span class="token punctuation" >"</span></span> <span class="token attr-name" >justify</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>start<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Row</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u5b50\u5143\u7d20\u5c45\u4e2d\u6392\u5217<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Row</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>flex<span class="token punctuation" >"</span></span> <span class="token attr-name" >justify</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>center<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Row</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u5b50\u5143\u7d20\u5c45\u53f3\u6392\u5217<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Row</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>flex<span class="token punctuation" >"</span></span> <span class="token attr-name" >justify</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>end<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Row</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u5b50\u5143\u7d20\u7b49\u5bbd\u6392\u5217<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Row</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>flex<span class="token punctuation" >"</span></span> <span class="token attr-name" >justify</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>space-between<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Row</span><span class="token punctuation" >></span></span>\n\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u5b50\u5143\u7d20\u5206\u6563\u5bf9\u9f50<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Row</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>flex<span class="token punctuation" >"</span></span> <span class="token attr-name" >justify</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>space-around<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >.</span>ant<span class="token operator" >-</span>col<span class="token number" >-4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Row</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n  mountNode\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return u["default"].createElement("div",null,u["default"].createElement("p",null,"\u5b50\u5143\u7d20\u5c45\u5de6\u6392\u5217"),u["default"].createElement(o["default"],{type:"flex",justify:"start"},u["default"].createElement(c["default"],{span:4},".ant-col-4"),u["default"].createElement(c["default"],{span:4},".ant-col-4"),u["default"].createElement(c["default"],{span:4},".ant-col-4"),u["default"].createElement(c["default"],{span:4},".ant-col-4")),u["default"].createElement("p",null,"\u5b50\u5143\u7d20\u5c45\u4e2d\u6392\u5217"),u["default"].createElement(o["default"],{type:"flex",justify:"center"},u["default"].createElement(c["default"],{span:4},".ant-col-4"),u["default"].createElement(c["default"],{span:4},".ant-col-4"),u["default"].createElement(c["default"],{span:4},".ant-col-4"),u["default"].createElement(c["default"],{span:4},".ant-col-4")),u["default"].createElement("p",null,"\u5b50\u5143\u7d20\u5c45\u53f3\u6392\u5217"),u["default"].createElement(o["default"],{type:"flex",justify:"end"},u["default"].createElement(c["default"],{span:4},".ant-col-4"),u["default"].createElement(c["default"],{span:4},".ant-col-4"),u["default"].createElement(c["default"],{span:4},".ant-col-4"),u["default"].createElement(c["default"],{span:4},".ant-col-4")),u["default"].createElement("p",null,"\u5b50\u5143\u7d20\u7b49\u5bbd\u6392\u5217"),u["default"].createElement(o["default"],{type:"flex",justify:"space-between"},u["default"].createElement(c["default"],{span:4},".ant-col-4"),u["default"].createElement(c["default"],{span:4},".ant-col-4"),u["default"].createElement(c["default"],{span:4},".ant-col-4"),u["default"].createElement(c["default"],{span:4},".ant-col-4")),u["default"].createElement("p",null,"\u5b50\u5143\u7d20\u5206\u6563\u5bf9\u9f50"),u["default"].createElement(o["default"],{type:"flex",justify:"space-around"},u["default"].createElement(c["default"],{span:4},".ant-col-4"),u["default"].createElement(c["default"],{span:4},".ant-col-4"),u["default"].createElement(c["default"],{span:4},".ant-col-4"),u["default"].createElement(c["default"],{span:4},".ant-col-4")))}}}});