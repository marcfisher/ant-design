webpackJsonp([229,366],{642:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(10),s(8)),e=t(p),c=(s(27),s(26)),o=t(c),u=s(1),l=t(u),k=s(2);t(k);n.exports={content:[["p","\u5782\u76f4\u83dc\u5355\uff0c\u5b50\u83dc\u5355\u5185\u5d4c\u5728\u83dc\u5355\u533a\u57df\u3002"]],meta:{order:1,title:"\u5185\u5d4c\u83dc\u5355",filename:"components/menu/demo/sider.md",id:"components-menu-demo-sider"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Menu<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> SubMenu <span class="token operator" >=</span> Menu<span class="token punctuation" >.</span>SubMenu<span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> MenuItemGroup <span class="token operator" >=</span> Menu<span class="token punctuation" >.</span>ItemGroup<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Sider <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      current<span class="token punctuation" >:</span> <span class="token string" >\'1\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleClick</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'click \'</span><span class="token punctuation" >,</span> e<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      current<span class="token punctuation" >:</span> e<span class="token punctuation" >.</span>key<span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleClick<span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >240</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >defaultOpenKeys</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'sub1\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >selectedKeys</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>current<span class="token punctuation" >]</span><span class="token punctuation" >}</span></span>\n        <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>inline<span class="token punctuation" >"</span></span>\n      <span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SubMenu</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>sub1<span class="token punctuation" >"</span></span> <span class="token attr-name" >title={&lt;span</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>mail<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u5bfc\u822a\u4e00<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span><span class="token operator" >></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>MenuItemGroup</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5206\u7ec41<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >1</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >2</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>MenuItemGroup</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>MenuItemGroup</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5206\u7ec42<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>3<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >3</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>4<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>MenuItemGroup</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>SubMenu</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SubMenu</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>sub2<span class="token punctuation" >"</span></span> <span class="token attr-name" >title={&lt;span</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>appstore<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u5bfc\u822a\u4e8c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span><span class="token operator" >></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>5<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >5</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>6<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >6</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SubMenu</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>sub3<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u4e09\u7ea7\u5bfc\u822a<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>7<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >7</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>8<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >8</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>SubMenu</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>SubMenu</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SubMenu</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>sub4<span class="token punctuation" >"</span></span> <span class="token attr-name" >title={&lt;span</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>setting<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u5bfc\u822a\u4e09<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span><span class="token operator" >></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>9<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >9</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>10<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >10</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>11<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >11</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>12<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >12</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>SubMenu</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Sider</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=o["default"].SubMenu,a=o["default"].ItemGroup,s=l["default"].createClass({displayName:"Sider",getInitialState:function(){return{current:"1"}},handleClick:function(n){console.log("click ",n),this.setState({current:n.key})},render:function(){return l["default"].createElement(o["default"],{onClick:this.handleClick,style:{width:240},defaultOpenKeys:["sub1"],selectedKeys:[this.state.current],mode:"inline"},l["default"].createElement(n,{key:"sub1",title:l["default"].createElement("span",null,l["default"].createElement(e["default"],{type:"mail"}),l["default"].createElement("span",null,"\u5bfc\u822a\u4e00"))},l["default"].createElement(a,{title:"\u5206\u7ec41"},l["default"].createElement(o["default"].Item,{key:"1"},"\u9009\u98791"),l["default"].createElement(o["default"].Item,{key:"2"},"\u9009\u98792")),l["default"].createElement(a,{title:"\u5206\u7ec42"},l["default"].createElement(o["default"].Item,{key:"3"},"\u9009\u98793"),l["default"].createElement(o["default"].Item,{key:"4"},"\u9009\u98794"))),l["default"].createElement(n,{key:"sub2",title:l["default"].createElement("span",null,l["default"].createElement(e["default"],{type:"appstore"}),l["default"].createElement("span",null,"\u5bfc\u822a\u4e8c"))},l["default"].createElement(o["default"].Item,{key:"5"},"\u9009\u98795"),l["default"].createElement(o["default"].Item,{key:"6"},"\u9009\u98796"),l["default"].createElement(n,{key:"sub3",title:"\u4e09\u7ea7\u5bfc\u822a"},l["default"].createElement(o["default"].Item,{key:"7"},"\u9009\u98797"),l["default"].createElement(o["default"].Item,{key:"8"},"\u9009\u98798"))),l["default"].createElement(n,{key:"sub4",title:l["default"].createElement("span",null,l["default"].createElement(e["default"],{type:"setting"}),l["default"].createElement("span",null,"\u5bfc\u822a\u4e09"))},l["default"].createElement(o["default"].Item,{key:"9"},"\u9009\u98799"),l["default"].createElement(o["default"].Item,{key:"10"},"\u9009\u987910"),l["default"].createElement(o["default"].Item,{key:"11"},"\u9009\u987911"),l["default"].createElement(o["default"].Item,{key:"12"},"\u9009\u987912")))}});return l["default"].createElement(s,null)}}}});