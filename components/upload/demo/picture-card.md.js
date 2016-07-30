webpackJsonp([49,366],{824:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(48),a(41)),o=t(p),e=(a(79),a(78)),c=t(e),l=(a(10),a(8)),u=t(l),i=a(1),k=t(i),r=a(2);t(r);n.exports={content:[["p","\u4e0a\u4f20\u6587\u4ef6\u4e3a\u56fe\u7247\uff0c\u53ef\u5c55\u793a\u672c\u5730\u7f29\u7565\u56fe\u3002"]],meta:{order:8,title:"\u56fe\u7247\u5361\u7247\u6837\u5f0f",filename:"components/upload/demo/picture-card.md",id:"components-upload-demo-picture-card"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Upload<span class="token punctuation" >,</span> Icon<span class="token punctuation" >,</span> Modal <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> ImageUploadList <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      priviewVisible<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n      priviewImage<span class="token punctuation" >:</span> <span class="token string" >\'\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleCancel</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      priviewVisible<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> props <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n      action<span class="token punctuation" >:</span> <span class="token string" >\'/upload.do\'</span><span class="token punctuation" >,</span>\n      listType<span class="token punctuation" >:</span> <span class="token string" >\'picture-card\'</span><span class="token punctuation" >,</span>\n      defaultFileList<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n        uid<span class="token punctuation" >:</span> <span class="token operator" >-</span><span class="token number" >1</span><span class="token punctuation" >,</span>\n        name<span class="token punctuation" >:</span> <span class="token string" >\'xxx.png\'</span><span class="token punctuation" >,</span>\n        status<span class="token punctuation" >:</span> <span class="token string" >\'done\'</span><span class="token punctuation" >,</span>\n        url<span class="token punctuation" >:</span> <span class="token string" >\'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png\'</span><span class="token punctuation" >,</span>\n        thumbUrl<span class="token punctuation" >:</span> <span class="token string" >\'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      onPreview<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>file<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n        <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n          priviewImage<span class="token punctuation" >:</span> file<span class="token punctuation" >.</span>url<span class="token punctuation" >,</span>\n          priviewVisible<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n        <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>clearfix<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token operator" >&lt;</span>Upload <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>props<span class="token punctuation" >}</span><span class="token operator" >></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>plus<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-upload-text<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e0a\u4f20\u7167\u7247<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Upload</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png<span class="token punctuation" >"</span></span> <span class="token attr-name" >target</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>_blank<span class="token punctuation" >"</span></span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>upload-example<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>img</span> <span class="token attr-name" >alt</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>example<span class="token punctuation" >"</span></span> <span class="token attr-name" >src</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u793a\u4f8b<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Modal</span> <span class="token attr-name" >visible</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>priviewVisible<span class="token punctuation" >}</span></span> <span class="token attr-name" >footer</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >null</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onCancel</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleCancel<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>img</span> <span class="token attr-name" >alt</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>example<span class="token punctuation" >"</span></span> <span class="token attr-name" >src</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>priviewImage<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Modal</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ImageUploadList</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=k["default"].createClass({displayName:"ImageUploadList",getInitialState:function(){return{priviewVisible:!1,priviewImage:""}},handleCancel:function(){this.setState({priviewVisible:!1})},render:function(){var n=this,s={action:"/upload.do",listType:"picture-card",defaultFileList:[{uid:-1,name:"xxx.png",status:"done",url:"https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png",thumbUrl:"https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png"}],onPreview:function(s){n.setState({priviewImage:s.url,priviewVisible:!0})}};return k["default"].createElement("div",{className:"clearfix"},k["default"].createElement(c["default"],s,k["default"].createElement(u["default"],{type:"plus"}),k["default"].createElement("div",{className:"ant-upload-text"},"\u4e0a\u4f20\u7167\u7247")),k["default"].createElement("a",{href:"https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png",target:"_blank",className:"upload-example"},k["default"].createElement("img",{alt:"example",src:"https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png"}),k["default"].createElement("span",null,"\u793a\u4f8b")),k["default"].createElement(o["default"],{visible:this.state.priviewVisible,footer:null,onCancel:this.handleCancel},k["default"].createElement("img",{alt:"example",src:this.state.priviewImage})))}});return k["default"].createElement(n,null)},style:"/* \u914d\u5408\u6837\u5f0f\u53ef\u4ee5\u505a\u51fa\u4e0a\u4f20\u6309\u94ae\u548c\u793a\u4f8b\u6548\u679c */\n.ant-upload-select-picture-card i {\n  font-size: 28px;\n  color: #999;\n}\n\n.ant-upload-select-picture-card .ant-upload-text {\n  margin-top: 8px;\n  font-size: 12px;\n  color: #666;\n}\n\n.upload-example {\n  position: relative;\n  display: inline-block;\n  height: 96px;\n  width: 96px;\n  padding: 8px;\n  border: 1px solid #d9d9d9;\n  border-radius: 6px;\n  vertical-align: top;\n}\n\n.upload-example img {\n  height: 78px;\n  width: 78px;\n}\n\n.upload-example:before {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n  content: ' ';\n  width: 78px;\n  height: 24px;\n  background-color: #808080;\n  opacity: .8;\n}\n\n.upload-example span {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n  width: 78px;\n  height: 24px;\n  color: #fff;\n  line-height: 24px;\n  text-align: center;\n}",highlightedStyle:'<span class="token comment" spellcheck="true">/* \u914d\u5408\u6837\u5f0f\u53ef\u4ee5\u505a\u51fa\u4e0a\u4f20\u6309\u94ae\u548c\u793a\u4f8b\u6548\u679c */</span>\n<span class="token selector" ><span class="token class" >.ant-upload-select-picture-card</span> i </span><span class="token punctuation" >{</span>\n  <span class="token property" >font-size</span><span class="token punctuation" >:</span> <span class="token number" >28</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#999</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.ant-upload-select-picture-card</span> <span class="token class" >.ant-upload-text</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-top</span><span class="token punctuation" >:</span> <span class="token number" >8</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >font-size</span><span class="token punctuation" >:</span> <span class="token number" >12</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#666</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.upload-example</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >position</span><span class="token punctuation" >:</span> relative<span class="token punctuation" >;</span>\n  <span class="token property" >display</span><span class="token punctuation" >:</span> inline-block<span class="token punctuation" >;</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >96</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >width</span><span class="token punctuation" >:</span> <span class="token number" >96</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >8</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >border</span><span class="token punctuation" >:</span> <span class="token number" >1</span>px solid <span class="token hexcode" >#d9d9d9</span><span class="token punctuation" >;</span>\n  <span class="token property" >border-radius</span><span class="token punctuation" >:</span> <span class="token number" >6</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >vertical-align</span><span class="token punctuation" >:</span> top<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.upload-example</span> img </span><span class="token punctuation" >{</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >78</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >width</span><span class="token punctuation" >:</span> <span class="token number" >78</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.upload-example</span><span class="token pseudo-element" >:before</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >position</span><span class="token punctuation" >:</span> absolute<span class="token punctuation" >;</span>\n  <span class="token property" >bottom</span><span class="token punctuation" >:</span> <span class="token number" >8</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >left</span><span class="token punctuation" >:</span> <span class="token number" >8</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >content</span><span class="token punctuation" >:</span> <span class="token string" >\' \'</span><span class="token punctuation" >;</span>\n  <span class="token property" >width</span><span class="token punctuation" >:</span> <span class="token number" >78</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >24</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >background-color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#808080</span><span class="token punctuation" >;</span>\n  <span class="token property" >opacity</span><span class="token punctuation" >:</span> <span class="token number" >.8</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.upload-example</span> span </span><span class="token punctuation" >{</span>\n  <span class="token property" >position</span><span class="token punctuation" >:</span> absolute<span class="token punctuation" >;</span>\n  <span class="token property" >bottom</span><span class="token punctuation" >:</span> <span class="token number" >8</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >left</span><span class="token punctuation" >:</span> <span class="token number" >8</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >width</span><span class="token punctuation" >:</span> <span class="token number" >78</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >24</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#fff</span><span class="token punctuation" >;</span>\n  <span class="token property" >line-height</span><span class="token punctuation" >:</span> <span class="token number" >24</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >text-align</span><span class="token punctuation" >:</span> center<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}}});