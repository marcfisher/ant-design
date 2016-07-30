webpackJsonp([19,366],{855:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=s(1),o=t(p),e=s(2),c=(t(e),s(128)),l=t(c);n.exports={content:[["p","\u540a\u9876\u4e00\u822c\u7528\u4e8e\u8de8\u7cfb\u7edf/\u5e94\u7528\u573a\u666f\uff0c\u53ef\u4ee5\u653e\u7f6e\u7edf\u4e00\u7684\u767b\u5f55/\u5e2e\u52a9\u4fe1\u606f\u3002"],["p","\u540a\u9876\u80cc\u666f\u6df1\u8272\uff0c\u9ad8\u5ea6 ",["code","30px"],"\uff0c\u548c\u6d45\u8272\u8c03\u7684\u4e3b\u5bfc\u822a\u914d\u5408\u4f7f\u7528\u3002"]],meta:{order:3,title:"\u540a\u9876\u89c4\u8303",filename:"docs/spec/layout/demo/ceiling.md",id:"docs-spec-layout-demo-ceiling"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Menu<span class="token punctuation" >,</span> Breadcrumb <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> BrowserDemo <span class="token keyword" >from</span> <span class="token string" >\'site/theme/template/BrowserDemo\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>BrowserDemo</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-layout-ceiling-demo<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-layout-ceiling<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-layout-wrapper<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ul</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>right<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span><span class="token punctuation" >></span></span>xxx@example<span class="token punctuation" >.</span>com<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span><span class="token punctuation" >></span></span><span class="token operator" >|</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span><span class="token punctuation" >></span></span>\u5e2e\u52a9\u4e2d\u5fc3<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span><span class="token punctuation" >></span></span><span class="token operator" >|</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span><span class="token punctuation" >></span></span>\u5ba2\u670d<span class="token operator" >/</span>\u6295\u8bc9\u7535\u8bdd\uff1a<span class="token number" >400</span><span class="token operator" >-</span><span class="token number" >826</span><span class="token operator" >-</span><span class="token number" >7710</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>ul</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-layout-header<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-layout-wrapper<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-layout-logo<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>BrowserDemo</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return o["default"].createElement(l["default"],null,o["default"].createElement("div",{className:"ant-layout-ceiling-demo"},o["default"].createElement("div",{className:"ant-layout-ceiling"},o["default"].createElement("div",{className:"ant-layout-wrapper"},o["default"].createElement("ul",{className:"right"},o["default"].createElement("li",null,"xxx@example.com"),o["default"].createElement("li",null,"|"),o["default"].createElement("li",null,"\u5e2e\u52a9\u4e2d\u5fc3"),o["default"].createElement("li",null,"|"),o["default"].createElement("li",null,"\u5ba2\u670d/\u6295\u8bc9\u7535\u8bdd\uff1a400-826-7710")))),o["default"].createElement("div",{className:"ant-layout-header"},o["default"].createElement("div",{className:"ant-layout-wrapper"},o["default"].createElement("div",{className:"ant-layout-logo"})))))},style:".ant-layout-ceiling-demo {\n  height: 100%;\n}\n\n.ant-layout-ceiling {\n  font-size: 12px;\n  height: 30px;\n  line-height: 30px;\n  background-color: #242736;\n  color: #ddd;\n}\n\n.ant-layout-ceiling .right {\n  float: right;\n}\n\n.ant-layout-ceiling ul li {\n  display: inline-block;\n  margin: 0 4px;\n}\n\n.ant-layout-ceiling-demo .ant-layout-wrapper {\n  padding: 0 50px;\n}\n\n.ant-layout-ceiling-demo .ant-layout-header {\n  background: #fff;\n  height: 64px;\n  border-bottom: 1px solid #d9d9d9;\n}\n\n.ant-layout-ceiling-demo .ant-layout-logo {\n  width: 120px;\n  height: 32px;\n  background: #eee;\n  border-radius: 6px;\n  margin: 16px 28px 16px 0;\n  float: left;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.ant-layout-ceiling-demo</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >100%</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.ant-layout-ceiling</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >font-size</span><span class="token punctuation" >:</span> <span class="token number" >12</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >30</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >line-height</span><span class="token punctuation" >:</span> <span class="token number" >30</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >background-color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#242736</span><span class="token punctuation" >;</span>\n  <span class="token property" >color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#ddd</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.ant-layout-ceiling</span> <span class="token class" >.right</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >float</span><span class="token punctuation" >:</span> right<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.ant-layout-ceiling</span> ul li </span><span class="token punctuation" >{</span>\n  <span class="token property" >display</span><span class="token punctuation" >:</span> inline-block<span class="token punctuation" >;</span>\n  <span class="token property" >margin</span><span class="token punctuation" >:</span> <span class="token number" >0</span> <span class="token number" >4</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.ant-layout-ceiling-demo</span> <span class="token class" >.ant-layout-wrapper</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >0</span> <span class="token number" >50</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.ant-layout-ceiling-demo</span> <span class="token class" >.ant-layout-header</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >background</span><span class="token punctuation" >:</span> <span class="token hexcode" >#fff</span><span class="token punctuation" >;</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >64</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >border-bottom</span><span class="token punctuation" >:</span> <span class="token number" >1</span>px solid <span class="token hexcode" >#d9d9d9</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.ant-layout-ceiling-demo</span> <span class="token class" >.ant-layout-logo</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >width</span><span class="token punctuation" >:</span> <span class="token number" >120</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >32</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >background</span><span class="token punctuation" >:</span> <span class="token hexcode" >#eee</span><span class="token punctuation" >;</span>\n  <span class="token property" >border-radius</span><span class="token punctuation" >:</span> <span class="token number" >6</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >margin</span><span class="token punctuation" >:</span> <span class="token number" >16</span>px <span class="token number" >28</span>px <span class="token number" >16</span>px <span class="token number" >0</span><span class="token punctuation" >;</span>\n  <span class="token property" >float</span><span class="token punctuation" >:</span> left<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}}});