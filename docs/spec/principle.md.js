webpackJsonp([13,366],{861:function(e,t,s){"use strict";function c(e){return e&&e.__esModule?e:{"default":e}}var i=s(1),r=(c(i),s(2));c(r);e.exports={content:["article",{},["div",{"class":"resource-cards"},["a",{target:"_blank",href:"http://book.douban.com/subject/3323633/","class":"resource-card"},["img",{src:"https://os.alipayobjects.com/rmsportal/SNdJVyZaZwdwJmr.png"}],["span",{"class":"resource-card-content"},["span",{"class":"resource-card-title"},"\u5199\u7ed9\u5927\u5bb6\u770b\u7684\u8bbe\u8ba1\u4e66"],["span",{"class":"resource-card-description"},"\u4f5c\u8005: Robin Williams"],["span",{"class":"resource-card-description"},"\u51fa\u7248\u793e: \u4eba\u6c11\u90ae\u7535\u51fa\u7248\u793e"]]],["a",{target:"_blank",href:"http://book.douban.com/subject/3821157/","class":"resource-card"},["img",{src:"https://os.alipayobjects.com/rmsportal/CoojVXLtoWrUSmI.png"}],["span",{"class":"resource-card-content"},["span",{"class":"resource-card-title"},"Web \u754c\u9762\u8bbe\u8ba1"],["span",{"class":"resource-card-description"},"\u4f5c\u8005: Bill Scott / Theresa Neil"],["span",{"class":"resource-card-description"},"\u51fa\u7248\u793e: \u7535\u5b50\u5de5\u4e1a\u51fa\u7248\u793e"]]]],["h4","Ant Design \u5341\u5927\u8bbe\u8ba1\u539f\u5219"],["ul",["li",["p",["a",{title:null,href:"/docs/spec/proximity"},"\u4eb2\u5bc6\u6027 Proximity"]]],["li",["p",["a",{title:null,href:"/docs/spec/alignment"},"\u5bf9\u9f50 Alignment"]]],["li",["p",["a",{title:null,href:"/docs/spec/contrast"},"\u5bf9\u6bd4 Contrast"]]],["li",["p",["a",{title:null,href:"/docs/spec/repetition"},"\u91cd\u590d Repetition"]]],["li",["p",["a",{title:null,href:"/docs/spec/direct"},"\u76f4\u622a\u4e86\u5f53 Make it Direct"]]],["li",["p",["a",{title:null,href:"/docs/spec/lightweight"},"\u7b80\u5316\u4ea4\u4e92 Keep it Lightweight"]]],["li",["p",["a",{title:null,href:"/docs/spec/stay"},"\u8db3\u4e0d\u51fa\u6237 Stay on the Page"]]],["li",["p",["a",{title:null,href:"/docs/spec/invitation"},"\u63d0\u4f9b\u9080\u8bf7 Provide Invitation"]]],["li",["p",["a",{title:null,href:"/docs/spec/transition"},"\u5de7\u7528\u8fc7\u6e21 Use Transition"]]],["li",["p",["a",{title:null,href:"/docs/spec/reaction"},"\u5373\u65f6\u53cd\u5e94 React Immediately"]]]]],meta:{category:"\u5341\u5927\u539f\u5219",order:0,subtitle:"Introduction",english:"\u5f15\u8a00",filename:"docs/spec/principle.md"},description:["section",["p","\u300e\u597d\u8bbe\u8ba1\u6bd4\u5dee\u8bbe\u8ba1\u66f4\u96be\u53d1\u73b0\u300f\uff0c\u56e0\u4e3a\u597d\u8bbe\u8ba1\u662f\u5982\u6b64\u7684\u81ea\u7136\uff0c\u5e2e\u52a9\u7528\u6237\u8f7b\u677e\u7684\u5b8c\u6210\u76ee\u6807\uff0c\u4ee5\u81f3\u4e8e\u7528\u6237\u6839\u672c\u610f\u8bc6\u4e0d\u5230\u597d\u8bbe\u8ba1\u7684\u5b58\u5728\u3002"],["p","\u6211\u4eec\u501f\u9274\u4e86\u300a\u5199\u7ed9\u5927\u5bb6\u770b\u7684\u8bbe\u8ba1\u4e66\u300b\u3001\u300aWeb \u754c\u9762\u8bbe\u8ba1\u300b\u5bf9\u8bbe\u8ba1\u539f\u5219\u7684\u603b\u7ed3\u548c\u63a8\u7406\uff0c\u5e76\u7ed3\u5408\u6211\u4eec\u56e2\u961f\u7684\u5b9e\u8df5\u548c\u7406\u89e3\uff0c\u5236\u5b9a\u4e86\u4ee5\u4e0b\u5341\u5927\u539f\u5219\uff0c\u4e3a\u300e\u8bbe\u8ba1\u8005\u300f\u63d0\u4f9b\u89e3\u51b3\u5177\u4f53\u95ee\u9898\u7684\u51c6\u5219\u548c\u542f\u793a\u3002"],["blockquote",["p","\u6ce8\uff1a\u8bbe\u8ba1\u539f\u5219\u662f\u5bf9\u5177\u8c61\u8bbe\u8ba1\u7684\u62bd\u8c61\u548c\u603b\u7ed3\uff0c\u7136\u800c\u4ea7\u54c1\u662f\u4e00\u4e2a\u6574\u4f53\uff0c\u7528\u6237\u5bf9\u6574\u4e2a\u4ea7\u54c1\u7684\u8ba4\u77e5\u4e5f\u662f\u4ece\u5168\u5c40\u5230\u5c40\u90e8\uff0c\u6240\u4ee5\u5ffd\u7565\u5168\u5c40\uff0c\u53ea\u5728\u5c40\u90e8\u5957\u7528\u539f\u5219\u662f\u4e0d\u53ef\u53d6\u7684\u3002\u5bf9\u4e8e\u8fd9\u4e9b\u539f\u5219\uff0c\u300e\u8bbe\u8ba1\u8005\u300f\u5e94\u5f53\u7406\u6027\u5730\u5b66\u4f1a\u5b83\uff0c\u800c\u540e\u52c7\u6562\u5730\u629b\u5f03\u5b83\u3002"]]],toc:["ul"]}}});