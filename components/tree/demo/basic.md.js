webpackJsonp([59,366],{814:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(180),s(179)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c\u5c55\u793a\u53ef\u52fe\u9009\uff0c\u53ef\u9009\u4e2d\uff0c\u7981\u7528\uff0c\u9ed8\u8ba4\u5c55\u5f00\u7b49\u529f\u80fd\u3002"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/tree/demo/basic.md",id:"components-tree-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tree <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> TreeNode <span class="token operator" >=</span> Tree<span class="token punctuation" >.</span>TreeNode<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Demo <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getDefaultProps</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      keys<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token string" >\'0-0-0\'</span><span class="token punctuation" >,</span> <span class="token string" >\'0-0-1\'</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> keys <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span>keys<span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      defaultExpandedKeys<span class="token punctuation" >:</span> keys<span class="token punctuation" >,</span>\n      defaultSelectedKeys<span class="token punctuation" >:</span> keys<span class="token punctuation" >,</span>\n      defaultCheckedKeys<span class="token punctuation" >:</span> keys<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onSelect</span><span class="token punctuation" >(</span>info<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'selected\'</span><span class="token punctuation" >,</span> info<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onCheck</span><span class="token punctuation" >(</span>info<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'onCheck\'</span><span class="token punctuation" >,</span> info<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tree</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>myCls<span class="token punctuation" >"</span></span> <span class="token attr-name" >showLine</span> <span class="token attr-name" >checkable</span>\n        <span class="token attr-name" >defaultExpandedKeys</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>defaultExpandedKeys<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >defaultSelectedKeys</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>defaultSelectedKeys<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >defaultCheckedKeys</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>defaultCheckedKeys<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >onSelect</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onSelect<span class="token punctuation" >}</span></span> <span class="token attr-name" >onCheck</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onCheck<span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TreeNode</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>parent</span> <span class="token attr-name" >1"</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>0-0<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TreeNode</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>parent</span> <span class="token attr-name" >1-0"</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>0-0-0<span class="token punctuation" >"</span></span> <span class="token attr-name" >disabled</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TreeNode</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>leaf<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>0-0-0-0<span class="token punctuation" >"</span></span> <span class="token attr-name" >disableCheckbox</span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TreeNode</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>leaf<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>0-0-0-1<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TreeNode</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TreeNode</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>parent</span> <span class="token attr-name" >1-1"</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>0-0-1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TreeNode</span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token operator" >&lt;</span>span style<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> color<span class="token punctuation" >:</span> <span class="token string" >\'#08c\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>sss<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span> key<span class="token operator" >=</span><span class="token string" >"0-0-1-0"</span> <span class="token operator" >/</span><span class="token operator" >></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TreeNode</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TreeNode</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tree</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Demo</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=e["default"].TreeNode,a=c["default"].createClass({displayName:"Demo",getDefaultProps:function(){return{keys:["0-0-0","0-0-1"]}},getInitialState:function(){var n=this.props.keys;return{defaultExpandedKeys:n,defaultSelectedKeys:n,defaultCheckedKeys:n}},onSelect:function(n){console.log("selected",n)},onCheck:function(n){console.log("onCheck",n)},render:function(){return c["default"].createElement(e["default"],{className:"myCls",showLine:!0,checkable:!0,defaultExpandedKeys:this.state.defaultExpandedKeys,defaultSelectedKeys:this.state.defaultSelectedKeys,defaultCheckedKeys:this.state.defaultCheckedKeys,onSelect:this.onSelect,onCheck:this.onCheck},c["default"].createElement(n,{title:"parent 1",key:"0-0"},c["default"].createElement(n,{title:"parent 1-0",key:"0-0-0",disabled:!0},c["default"].createElement(n,{title:"leaf",key:"0-0-0-0",disableCheckbox:!0}),c["default"].createElement(n,{title:"leaf",key:"0-0-0-1"})),c["default"].createElement(n,{title:"parent 1-1",key:"0-0-1"},c["default"].createElement(n,{title:c["default"].createElement("span",{style:{color:"#08c"}},"sss"),key:"0-0-1-0"}))))}});return c["default"].createElement(a,null)}}}});