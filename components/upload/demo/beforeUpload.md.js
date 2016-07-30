webpackJsonp([54,366],{819:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(79),s(78)),o=t(p),e=(s(7),s(5)),c=t(e),u=(s(10),s(8)),l=t(u),k=(s(70),s(69)),i=t(k),r=s(1),d=t(r),f=s(2);t(f);n.exports={content:[["p","\u53ef\u4ee5\u901a\u8fc7 ",["code","beforeUpload"]," \u5728\u6587\u4ef6\u4e0a\u4f20\u4e4b\u524d\u8fdb\u884c\u5e72\u9884\uff0c\u5982\u9650\u5236\u7528\u6237\u53ea\u80fd\u4e0a\u4f20 JPG \u6587\u4ef6\u3002"],["p","\u4e5f\u652f\u6301\u5f02\u6b65\u68c0\u67e5\uff0c",["code","beforeUpload"]," \u7684\u8fd4\u56de\u503c\u53ef\u4ee5\u662f\u4e00\u4e2a Promise\uff1a",["a",{title:null,href:"http://react-component.github.io/upload/examples/beforeUpload.html"},"\u793a\u4f8b"],"\u3002"]],meta:{order:7,title:"\u9650\u5236\u7528\u6237\u4e0a\u4f20\u7684\u6587\u4ef6",filename:"components/upload/demo/beforeUpload.md",id:"components-upload-demo-beforeUpload"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Upload<span class="token punctuation" >,</span> Button<span class="token punctuation" >,</span> Icon<span class="token punctuation" >,</span> message <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> props <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n  action<span class="token punctuation" >:</span> <span class="token string" >\'/upload.do\'</span><span class="token punctuation" >,</span>\n  <span class="token function" >beforeUpload</span><span class="token punctuation" >(</span>file<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> isJPG <span class="token operator" >=</span> file<span class="token punctuation" >.</span>type <span class="token operator" >===</span> <span class="token string" >\'image/jpeg\'</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token operator" >!</span>isJPG<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      message<span class="token punctuation" >.</span><span class="token function" >error</span><span class="token punctuation" >(</span><span class="token string" >\'\u53ea\u80fd\u4e0a\u4f20 JPG \u6587\u4ef6\u54e6\uff01\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >return</span> isJPG<span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token operator" >&lt;</span>Upload <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>props<span class="token punctuation" >}</span><span class="token operator" >></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ghost<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>upload<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span> \u70b9\u51fb\u4e0a\u4f20\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Upload</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n={action:"/upload.do",beforeUpload:function(n){var a="image/jpeg"===n.type;return a||i["default"].error("\u53ea\u80fd\u4e0a\u4f20 JPG \u6587\u4ef6\u54e6\uff01"),a}};return d["default"].createElement(o["default"],n,d["default"].createElement(c["default"],{type:"ghost"},d["default"].createElement(l["default"],{type:"upload"})," \u70b9\u51fb\u4e0a\u4f20"))}}}});