webpackJsonp([115,366],{758:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(29),a(28)),o=t(p),c=a(1),e=t(c),u=a(2);t(u);n.exports={content:[["p","\u9002\u5408\u540c\u65f6\u5c55\u793a\u6709\u5927\u91cf\u6570\u636e\u548c\u6570\u636e\u5217\u3002"],["blockquote",["p","\u82e5\u672a\u6307\u5b9a\u6bcf\u5217\u7684\u5bbd\u5ea6\uff0c\u5219\u5efa\u8bae\u6307\u5b9a scroll.x \u4e3a\u56fa\u5b9a\u5bbd\u5ea6\u3002"],["p","\u82e5\u5217\u5934\u4e0e\u5185\u5bb9\u4e0d\u5bf9\u9f50\uff0c\u8bf7\u6307\u5b9a\u6bcf\u5217\u5bbd\u5ea6 ",["code","width"],"\u3002"]]],meta:{order:18,title:"\u56fa\u5b9a\u5934\u548c\u5217",filename:"components/table/demo/fixed-columns-header.md",id:"components-table-demo-fixed-columns-header"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Table <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> columns <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u59d3\u540d\'</span><span class="token punctuation" >,</span> width<span class="token punctuation" >:</span> <span class="token number" >100</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'name\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'name\'</span><span class="token punctuation" >,</span> fixed<span class="token punctuation" >:</span> <span class="token string" >\'left\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u5e74\u9f84\'</span><span class="token punctuation" >,</span> width<span class="token punctuation" >:</span> <span class="token number" >100</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span> fixed<span class="token punctuation" >:</span> <span class="token string" >\'left\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u52171\'</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'address\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'1\'</span><span class="token punctuation" >,</span> width<span class="token punctuation" >:</span> <span class="token number" >150</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u52172\'</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'address\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'2\'</span><span class="token punctuation" >,</span> width<span class="token punctuation" >:</span> <span class="token number" >150</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u52173\'</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'address\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'3\'</span><span class="token punctuation" >,</span> width<span class="token punctuation" >:</span> <span class="token number" >150</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u52174\'</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'address\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'4\'</span><span class="token punctuation" >,</span> width<span class="token punctuation" >:</span> <span class="token number" >150</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u52175\'</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'address\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'5\'</span><span class="token punctuation" >,</span> width<span class="token punctuation" >:</span> <span class="token number" >150</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u52176\'</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'address\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'6\'</span><span class="token punctuation" >,</span> width<span class="token punctuation" >:</span> <span class="token number" >150</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u52177\'</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'address\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'7\'</span><span class="token punctuation" >,</span> width<span class="token punctuation" >:</span> <span class="token number" >150</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u52178\'</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'address\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'8\'</span><span class="token punctuation" >,</span> width<span class="token punctuation" >:</span> <span class="token number" >150</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span>\n    title<span class="token punctuation" >:</span> <span class="token string" >\'\u64cd\u4f5c\'</span><span class="token punctuation" >,</span>\n    key<span class="token punctuation" >:</span> <span class="token string" >\'operation\'</span><span class="token punctuation" >,</span>\n    fixed<span class="token punctuation" >:</span> <span class="token string" >\'right\'</span><span class="token punctuation" >,</span>\n    width<span class="token punctuation" >:</span> <span class="token number" >100</span><span class="token punctuation" >,</span>\n    render<span class="token punctuation" >:</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u64cd\u4f5c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> data <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n<span class="token keyword" >for</span> <span class="token punctuation" >(</span><span class="token keyword" >let</span> i <span class="token operator" >=</span> <span class="token number" >0</span><span class="token punctuation" >;</span> i <span class="token operator" >&lt;</span> <span class="token number" >100</span><span class="token punctuation" >;</span> i<span class="token operator" >++</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  data<span class="token punctuation" >.</span><span class="token function" >push</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n    key<span class="token punctuation" >:</span> i<span class="token punctuation" >,</span>\n    name<span class="token punctuation" >:</span> <span class="token template-string" ><span class="token string" >`\u674e\u5927\u5634</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>i<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >,</span>\n    age<span class="token punctuation" >:</span> <span class="token number" >32</span><span class="token punctuation" >,</span>\n    address<span class="token punctuation" >:</span> <span class="token template-string" ><span class="token string" >`\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>i<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >\u53f7`</span></span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >App</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Table</span> <span class="token attr-name" >columns</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>columns<span class="token punctuation" >}</span></span> <span class="token attr-name" >dataSource</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>data<span class="token punctuation" >}</span></span> <span class="token attr-name" >scroll</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> x<span class="token punctuation" >:</span> <span class="token number" >1500</span><span class="token punctuation" >,</span> y<span class="token punctuation" >:</span> <span class="token number" >300</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>App</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(){return e["default"].createElement(o["default"],{columns:s,dataSource:a,scroll:{x:1500,y:300}})}for(var s=[{title:"\u59d3\u540d",width:100,dataIndex:"name",key:"name",fixed:"left"},{title:"\u5e74\u9f84",width:100,dataIndex:"age",key:"age",fixed:"left"},{title:"\u52171",dataIndex:"address",key:"1",width:150},{title:"\u52172",dataIndex:"address",key:"2",width:150},{title:"\u52173",dataIndex:"address",key:"3",width:150},{title:"\u52174",dataIndex:"address",key:"4",width:150},{title:"\u52175",dataIndex:"address",key:"5",width:150},{title:"\u52176",dataIndex:"address",key:"6",width:150},{title:"\u52177",dataIndex:"address",key:"7",width:150},{title:"\u52178",dataIndex:"address",key:"8",width:150},{title:"\u64cd\u4f5c",key:"operation",fixed:"right",width:100,render:function(){return e["default"].createElement("a",{href:"#"},"\u64cd\u4f5c")}}],a=[],t=0;t<100;t++)a.push({key:t,name:"\u674e\u5927\u5634"+t,age:32,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed"+t+"\u53f7"});return e["default"].createElement(n,null)}}}});