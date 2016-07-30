webpackJsonp([109,366],{764:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(29),s(28)),o=t(p),e=s(1),c=t(e),u=s(2);t(u);n.exports={content:[["p","\u5bf9\u4e8e\u5217\u6570\u5f88\u591a\u7684\u6570\u636e\uff0c\u53ef\u4ee5\u8fdb\u884c\u6a2a\u5411\u7684\u5206\u9875\uff0c\u901a\u8fc7\u5207\u6362\u7b26\u5207\u6362\u5f53\u524d\u5c55\u73b0\u7684\u5217\u3002"]],meta:{order:20,title:"\u6a2a\u5411\u6eda\u5c4f\u8868\u683c",hidden:!0,filename:"components/table/demo/paging-columns.md",id:"components-table-demo-paging-columns"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Table <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> columns <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u59d3\u540d\'</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'name\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'name\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u5e74\u9f84\'</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u52171\'</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'1\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u52172\'</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'2\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u52173\'</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'3\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u52174\'</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'4\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u52175\'</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'5\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u52176\'</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'6\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u52177\'</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'7\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span> title<span class="token punctuation" >:</span> <span class="token string" >\'\u52178\'</span><span class="token punctuation" >,</span> dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span> key<span class="token punctuation" >:</span> <span class="token string" >\'8\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >{</span>\n    title<span class="token punctuation" >:</span> <span class="token string" >\'\u64cd\u4f5c\'</span><span class="token punctuation" >,</span>\n    key<span class="token punctuation" >:</span> <span class="token string" >\'operation\'</span><span class="token punctuation" >,</span>\n    render<span class="token punctuation" >:</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u64cd\u4f5c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> data <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'1\'</span><span class="token punctuation" >,</span>\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u80e1\u5f66\u658c\'</span><span class="token punctuation" >,</span>\n  age<span class="token punctuation" >:</span> <span class="token number" >32</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'2\'</span><span class="token punctuation" >,</span>\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u80e1\u5f66\u7956\'</span><span class="token punctuation" >,</span>\n  age<span class="token punctuation" >:</span> <span class="token number" >42</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Table</span> <span class="token attr-name" >columns</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>columns<span class="token punctuation" >}</span></span> <span class="token attr-name" >dataSource</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>data<span class="token punctuation" >}</span></span> <span class="token attr-name" >columnsPageRange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token number" >2</span><span class="token punctuation" >,</span> <span class="token number" >9</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >columnsPageSize</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >4</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=[{title:"\u59d3\u540d",dataIndex:"name",key:"name"},{title:"\u5e74\u9f84",dataIndex:"age",key:"age"},{title:"\u52171",dataIndex:"age",key:"1"},{title:"\u52172",dataIndex:"age",key:"2"},{title:"\u52173",dataIndex:"age",key:"3"},{title:"\u52174",dataIndex:"age",key:"4"},{title:"\u52175",dataIndex:"age",key:"5"},{title:"\u52176",dataIndex:"age",key:"6"},{title:"\u52177",dataIndex:"age",key:"7"},{title:"\u52178",dataIndex:"age",key:"8"},{title:"\u64cd\u4f5c",key:"operation",render:function(){return c["default"].createElement("a",{href:"#"},"\u64cd\u4f5c")}}],a=[{key:"1",name:"\u80e1\u5f66\u658c",age:32},{key:"2",name:"\u80e1\u5f66\u7956",age:42}];return c["default"].createElement(o["default"],{columns:n,dataSource:a,columnsPageRange:[2,9],columnsPageSize:4})}}}});