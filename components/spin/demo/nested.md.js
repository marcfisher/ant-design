webpackJsonp([137,366],{735:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(77),s(76)),o=t(p),e=(s(127),s(126)),c=t(e),u=(s(88),s(87)),l=t(u),i=s(1),k=t(i),r=s(2);t(r);n.exports={content:[["p","\u53ef\u4ee5\u76f4\u63a5\u628a\u5185\u5bb9\u5185\u5d4c\u5230 ",["code","Spin"]," \u4e2d\uff0c\u5c06\u73b0\u6709\u5bb9\u5668\u53d8\u4e3a\u52a0\u8f7d\u72b6\u6001\u3002"]],meta:{order:3,title:"\u5361\u7247\u52a0\u8f7d\u4e2d",filename:"components/spin/demo/nested.md",id:"components-spin-demo-nested"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Spin<span class="token punctuation" >,</span> Switch<span class="token punctuation" >,</span> Alert <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Card <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span> loading<span class="token punctuation" >:</span> <span class="token boolean" >false</span> <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >toggle</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> loading<span class="token punctuation" >:</span> value <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> container <span class="token operator" >=</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6d88\u606f\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation" >"</span></span>\n        <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd<span class="token punctuation" >"</span></span>\n        <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span>\n      <span class="token punctuation" >/></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Spin</span> <span class="token attr-name" >spinning</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>loading<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span><span class="token punctuation" >{</span>container<span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Spin</span><span class="token punctuation" >></span></span>\n        \u5207\u6362\u52a0\u8f7d\u72b6\u6001\uff1a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Switch</span> <span class="token attr-name" >checked</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>loading<span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>toggle<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Card</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=k["default"].createClass({displayName:"Card",getInitialState:function(){return{loading:!1}},toggle:function(n){this.setState({loading:n})},render:function(){var n=k["default"].createElement(l["default"],{message:"\u6d88\u606f\u63d0\u793a\u7684\u6587\u6848",description:"\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd",type:"info"});return k["default"].createElement("div",null,k["default"].createElement(c["default"],{spinning:this.state.loading},n),"\u5207\u6362\u52a0\u8f7d\u72b6\u6001\uff1a",k["default"].createElement(o["default"],{checked:this.state.loading,onChange:this.toggle}))}});return k["default"].createElement(n,null)}}}});