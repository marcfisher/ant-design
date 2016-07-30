webpackJsonp([325,366],{542:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(123),s(122)),p=t(e),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:{"zh-CN":[["p","\u7528 ",["code","dateCellRender"]," \u548c ",["code","monthCellRender"]," \u51fd\u6570\u6765\u81ea\u5b9a\u4e49\u9700\u8981\u6e32\u67d3\u7684\u6570\u636e\u3002"]],"en-US":[["p","This component can be rendered by using ",["code","dateCellRender"]," and ",["code","monthCellRender"]," with the data you need."]]},meta:{order:1,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u6e32\u67d3","en-US":"Custom Render"},filename:"components/calendar/demo/custom-render.md",id:"components-calendar-demo-custom-render"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Calendar <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >dateCellRender</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\u81ea\u5b9a\u4e49\u65e5\u6570\u636e <span class="token punctuation" >{</span>value<span class="token punctuation" >.</span><span class="token function" >getDayOfMonth</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >monthCellRender</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\u81ea\u5b9a\u4e49\u6708\u6570\u636e <span class="token punctuation" >{</span>value<span class="token punctuation" >.</span><span class="token function" >getMonth</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Calendar</span> <span class="token attr-name" >defaultValue</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >new</span> <span class="token class-name" >Date</span><span class="token punctuation" >(</span><span class="token string" >\'2010-10-10\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n    <span class="token attr-name" >dateCellRender</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>dateCellRender<span class="token punctuation" >}</span></span> <span class="token attr-name" >monthCellRender</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>monthCellRender<span class="token punctuation" >}</span></span>\n  <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){return c["default"].createElement("div",null,"\u81ea\u5b9a\u4e49\u65e5\u6570\u636e ",n.getDayOfMonth())}function a(n){return c["default"].createElement("div",null,"\u81ea\u5b9a\u4e49\u6708\u6570\u636e ",n.getMonth())}return c["default"].createElement(p["default"],{defaultValue:new Date("2010-10-10"),dateCellRender:n,monthCellRender:a})}}}});