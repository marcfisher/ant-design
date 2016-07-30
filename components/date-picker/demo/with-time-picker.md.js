webpackJsonp([280,366],{589:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(52),a(64)),e=t(p),o=(a(37),a(36)),c=t(o),u=a(1),l=t(u),i=a(2);t(i);n.exports={content:{"zh-CN":[["p","\u548c ",["a",{href:"/components/time-picker"}],"\u65f6\u95f4\u9009\u62e9\u6846",[""]," \u914d\u5408\u4f7f\u7528\u3002"]],"en-US":[["p","Cooperate with ",["code",'<a href="/components/time-picker">time-picker</a>']]]},meta:{order:4,hidden:!0,title:{"zh-CN":"\u65e5\u671f\u65f6\u95f4\u9009\u62e9\u4e8c","en-US":"To select a date, case 2"},filename:"components/date-picker/demo/with-time-picker.md",id:"components-date-picker-demo-with-time-picker"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> DatePicker<span class="token punctuation" >,</span> TimePicker <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> DateTimePicker <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >handleChange</span><span class="token punctuation" >(</span><span class="token keyword" >from</span><span class="token punctuation" >,</span> value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span>result <span class="token operator" >=</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>result <span class="token operator" >||</span> <span class="token keyword" >new</span> <span class="token class-name" >Date</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token operator" >!</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >from</span> <span class="token operator" >===</span> <span class="token string" >\'date\'</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n        <span class="token keyword" >this</span><span class="token punctuation" >.</span>selectedDate <span class="token operator" >=</span> <span class="token boolean" >false</span><span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span> <span class="token keyword" >else</span> <span class="token punctuation" >{</span>\n        <span class="token keyword" >this</span><span class="token punctuation" >.</span>selectedTime <span class="token operator" >=</span> <span class="token boolean" >false</span><span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span>\n      <span class="token keyword" >return</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >from</span> <span class="token operator" >===</span> <span class="token string" >\'date\'</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span>result<span class="token punctuation" >.</span><span class="token function" >setFullYear</span><span class="token punctuation" >(</span>value<span class="token punctuation" >.</span><span class="token function" >getFullYear</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span>result<span class="token punctuation" >.</span><span class="token function" >setMonth</span><span class="token punctuation" >(</span>value<span class="token punctuation" >.</span><span class="token function" >getMonth</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span>result<span class="token punctuation" >.</span><span class="token function" >setDate</span><span class="token punctuation" >(</span>value<span class="token punctuation" >.</span><span class="token function" >getDate</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span>selectedDate <span class="token operator" >=</span> <span class="token boolean" >true</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span> <span class="token keyword" >else</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span>result<span class="token punctuation" >.</span><span class="token function" >setHours</span><span class="token punctuation" >(</span>value<span class="token punctuation" >.</span><span class="token function" >getHours</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span>result<span class="token punctuation" >.</span><span class="token function" >setMinutes</span><span class="token punctuation" >(</span>value<span class="token punctuation" >.</span><span class="token function" >getMinutes</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span>result<span class="token punctuation" >.</span><span class="token function" >setSeconds</span><span class="token punctuation" >(</span>value<span class="token punctuation" >.</span><span class="token function" >getSeconds</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span>selectedTime <span class="token operator" >=</span> <span class="token boolean" >true</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>selectedDate <span class="token operator" >&amp;&amp;</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>selectedTime<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span>props<span class="token punctuation" >.</span><span class="token function" >onSelect</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>result<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleDateChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >handleChange</span><span class="token punctuation" >(</span><span class="token string" >\'date\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleTimeChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >handleChange</span><span class="token punctuation" >(</span><span class="token string" >\'time\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DatePicker</span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleDateChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TimePicker</span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleTimeChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onSelect</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'\u9009\u62e9\u4e86\u65f6\u95f4\uff1a\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DateTimePicker</span> <span class="token attr-name" >onSelect</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onSelect<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log("\u9009\u62e9\u4e86\u65f6\u95f4\uff1a",n)}var s=l["default"].createClass({displayName:"DateTimePicker",handleChange:function(n,s){return this.result=this.result||new Date,s?("date"===n?(this.result.setFullYear(s.getFullYear()),this.result.setMonth(s.getMonth()),this.result.setDate(s.getDate()),this.selectedDate=!0):(this.result.setHours(s.getHours()),this.result.setMinutes(s.getMinutes()),this.result.setSeconds(s.getSeconds()),this.selectedTime=!0),void(this.selectedDate&&this.selectedTime&&this.props.onSelect(this.result))):void("date"===n?this.selectedDate=!1:this.selectedTime=!1)},handleDateChange:function(n){this.handleChange("date",n)},handleTimeChange:function(n){this.handleChange("time",n)},render:function(){return l["default"].createElement("div",null,l["default"].createElement(c["default"],{onChange:this.handleDateChange}),l["default"].createElement(e["default"],{onChange:this.handleTimeChange}))}});return l["default"].createElement(s,{onSelect:n})}}}});