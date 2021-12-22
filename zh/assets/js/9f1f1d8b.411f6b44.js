"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[2413],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),k=u(n),s=l,N=k["".concat(o,".").concat(s)]||k[s]||m[s]||r;return n?a.createElement(N,i(i({ref:t},c),{},{components:n})):a.createElement(N,i({ref:t},c))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},60482:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return k}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],p={title:"\u7f16\u7801\u5efa\u8bae",sidebar_position:2,description:"Apache ShenYu \u7f16\u7801\u5efa\u8bae",author:"xiaoyu",categories:"Apache ShenYu",tags:["Code Suggestions "],date:new Date("2019-09-22T00:00:00.000Z"),cover:"/img/architecture/shenyu-framework.png"},o=void 0,u={unversionedId:"code-suggestions",id:"code-suggestions",isDocsHomePage:!1,title:"\u7f16\u7801\u5efa\u8bae",description:"Apache ShenYu \u7f16\u7801\u5efa\u8bae",source:"@site/i18n/zh/docusaurus-plugin-content-docs-community/current/1-code-suggestions.md",sourceDirName:".",slug:"/code-suggestions",permalink:"/zh/community/code-suggestions",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs-community/current/1-code-suggestions.md",version:"current",lastUpdatedBy:"Sinsy",lastUpdatedAt:1640163561,formattedLastUpdatedAt:"2021/12/22",sidebarPosition:2,frontMatter:{title:"\u7f16\u7801\u5efa\u8bae",sidebar_position:2,description:"Apache ShenYu \u7f16\u7801\u5efa\u8bae",author:"xiaoyu",categories:"Apache ShenYu",tags:["Code Suggestions "],date:"2019-09-22T00:00:00.000Z",cover:"/img/architecture/shenyu-framework.png"},sidebar:"community",previous:{title:"\u8ba2\u9605\u90ae\u4ef6",permalink:"/zh/community/subscribe-email"},next:{title:"\u95ee\u9898\u53ca\u63d0\u4ea4\u8bf7\u6c42",permalink:"/zh/community/issue-pr"}},c=[{value:"\u57fa\u672c\u5efa\u8bae",id:"\u57fa\u672c\u5efa\u8bae",children:[]},{value:"Object",id:"object",children:[]},{value:"Collection",id:"collection",children:[{value:"List",id:"list",children:[]},{value:"Map",id:"map",children:[]}]},{value:"String",id:"string",children:[]},{value:"Exception",id:"exception",children:[]},{value:"Resource",id:"resource",children:[]},{value:"\u5224\u65ad\u548c\u5904\u7406 Null \u7684\u51e0\u79cd\u65b9\u5f0f",id:"\u5224\u65ad\u548c\u5904\u7406-null-\u7684\u51e0\u79cd\u65b9\u5f0f",children:[]}],m={toc:c};function k(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u57fa\u672c\u5efa\u8bae"},"\u57fa\u672c\u5efa\u8bae"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8bf7\u5c3d\u53ef\u80fd\u591a\u7684\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"lambda")," \u8868\u8fbe\u5f0f\uff0c\u6765\u8fdb\u884c\u51fd\u6570\u5f0f\u7f16\u7a0b\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u65b9\u6cd5\u53c2\u6570\u524d\u9762\u5fc5\u987b\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"final")," \u5173\u952e\u5b57\u4fee\u9970\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"static final")," \u4fee\u9970\u7684\u5e38\u91cf\u5fc5\u987b\u4f7f\u7528\u5927\u5199\u547d\u540d\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e00\u4e2a\u65b9\u6cd5\u4e0d\u8981\u4f7f\u7528\u8fc7\u591a\u7684\u53c2\u6570\uff0c\u5982\u679c\u8fc7\u591a\u53ef\u4ee5\u8003\u8651\u5c01\u88c5\u6210\u5bf9\u8c61\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6e05\u7406\u6389\u65e0\u7528\u7684\u4ee3\u7801\u3002\u4e0d\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"//")," \u6ce8\u91ca\u4ee3\u7801\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"linux")," \u6362\u884c\u7b26\u53f7.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6bcf\u884c\u4ee3\u7801\u524d\u9762\u5fc5\u987b\u4fdd\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"4")," \u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Tab Siz")," \u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6240\u6709\u7684\u4ee3\u7801 \u5fc5\u987b\u901a\u8fc7 checkStyle\u7684\u68c0\u67e5: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/blob/master/script/shenyu_checkstyle.xml"},"https://github.com/apache/incubator-shenyu/blob/master/script/shenyu_checkstyle.xml")))),(0,r.kt)("h2",{id:"object"},"Object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"Optional")," \u6765\u8f6c\u6362 ",(0,r.kt)("inlineCode",{parentName:"li"},"Null")," \u5bf9\u8c61\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Optional.ofNullable(xxx).orElse(obj)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"li"},"Objects")," \u5224\u65ad\u5bf9\u8c61\u662f\u5426\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"Null")," \u5bf9\u8c61\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Objects.isNull(obj) OR Objects.nonNull(obj)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"Objects.equals")," \u5224\u65ad\u5bf9\u8c61\u662f\u5426\u76f8\u7b49\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Objects.equals(obj1, obj2)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5faa\u73af\u521b\u5efa\u5bf9\u8c61\u65f6\u5019\uff0c\u8bf7\u5728\u5faa\u73af\u5916\u9762\u5b9a\u4e49\u5bf9\u8c61\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Object object = null;\nfor () {\n    object = new Object();\n}\n")),(0,r.kt)("h2",{id:"collection"},"Collection"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c3d\u53ef\u80fd\u7684\u6307\u5b9a\u96c6\u5408\u7684\u521d\u59cb\u5316\u5bb9\u91cf\u3002")),(0,r.kt)("h3",{id:"list"},"List"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f53\u4f60\u9700\u8981\u66f4\u591a\u589e\u5220\u5143\u7d20\u7684\u65f6\u5019\uff0c\u8bf7\u5c3d\u53ef\u80fd\u7684\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"LinkedList"),", \u5176\u4ed6\u573a\u666f\u8bf7\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayList"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.commons.collections4.CollectionUtils")," \u5224\u65ad\u96c6\u5408\u662f\u5426\u4e3a\u7a7a\u3002"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"CollectionUtils.isEmpty(list) or CollectionUtils.isNotEmpty(data)")),(0,r.kt)("h3",{id:"map"},"Map"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f53\u5728\u5e76\u53d1\u573a\u666f\u65f6\u5019\uff0c\u5fc5\u987b\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentHashMap"),"\uff0c\u5176\u4ed6\u573a\u666f\u8bf7\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u6700\u4f18\u7684\u65b9\u5f0f\u8fed\u4ee3\u6216\u8005\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"lambda"),"\u8868\u8fbe\u5f0f\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Set<Map.Entry<String, String>> entrySet = map.entrySet();\nIterator<Map.Entry<String, String>> iter = entrySet.iterator();\nwhile (iter.hasNext()) {\n        Map.Entry<String, String> entry = iter.next();\n      \n}\n")),(0,r.kt)("h2",{id:"string"},"String"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.commons.lang3.StringUtils")," \u5224\u65ad\u662f\u5426\u4e3a\u7a7a\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"StringUtils.isEmpty(list) or StringUtils.isNotEmpty(data)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"String.join")," \u6765\u62fc\u63a5\u5b57\u7b26\u4e32\u3002")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"String join(CharSequence delimiter, CharSequence... elements)")),(0,r.kt)("h2",{id:"exception"},"Exception"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u5728\u5faa\u73af\u5185\u90e8\u53bb\u6355\u83b7\u5f02\u5e38\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"try {\n  for () {\n  }\n} catch () {\n  \n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0d\u8981\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"printStackTrace()")," \u65b9\u6cd5\u6765\u6253\u5370\u5f02\u5e38\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u629b\u51fa\u5f02\u5e38\u7684\u65f6\u5019\uff0c\u8bf7\u5c01\u88c5\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"ShenyuException"),"\u3002"))),(0,r.kt)("h2",{id:"resource"},"Resource"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u5c3d\u53ef\u80fd\u7684\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"try with resource")," \u8bed\u53e5\u6765\u5173\u95ed\u8d44\u6e90.")),(0,r.kt)("h2",{id:"\u5224\u65ad\u548c\u5904\u7406-null-\u7684\u51e0\u79cd\u65b9\u5f0f"},"\u5224\u65ad\u548c\u5904\u7406 Null \u7684\u51e0\u79cd\u65b9\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5224\u65ad\u81ea\u8eab\u662f\u5426\u4e3a Null\uff0c\u7136\u540e\u9700\u8981\u5bf9\u81ea\u8eab\u8f6c\u6362\u7684\uff0c\u4ee5\u4e0b\u662f\u51e0\u4e2a\u4ee3\u8868\u5b9e\u4f8b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u76ee\u524d \uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"result.setXXX(null == a ? b.getXXX() : b.getXXX(a));"),(0,r.kt)("br",{parentName:"p"}),"\n","\u5efa\u8bae \uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional.ofNullable(a).map(b::getXXX).orElse(b.getXXX());"),(0,r.kt)("br",{parentName:"p"}),"\n","\u76ee\u524d \uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"return null == a ? b.newC() : b.newC(a.getD(), a.getE());"),(0,r.kt)("br",{parentName:"p"}),"\n","\u5efa\u8bae \uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"return Optional.ofNullable(a).map(e -> b.newC(e.getD(),e.getE())).orElse(b.newC());"),(0,r.kt)("br",{parentName:"p"}),"\n","\u76ee\u524d \uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"return null == a.getB() ? null : a.getB().getC();"),(0,r.kt)("br",{parentName:"p"}),"\n","\u5efa\u8bae \uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"return Optional.ofNullable(a.getB()).map(C::getD).orElse(null);"),(0,r.kt)("br",{parentName:"p"}),"\n","\u76ee\u524d \uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"return null == a ? new B() : C.newD(a);"),(0,r.kt)("br",{parentName:"p"}),"\n","\u5efa\u8bae \uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"return Optional.ofNullable(a).map(B::newC).orElse(new D());"),"  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f53\u524d\u5bf9\u8c61\u76f4\u63a5\u4e0e Null \u8fdb\u884c\u6bd4\u8f83\uff0c\u4ee5\u4e0b\u662f\u51e0\u4e2a\u4ee3\u8868\u5b9e\u4f8b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u76ee\u524d \uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"public void xxx\uff08Object o\uff09{if(null == o){retrun;}}"),(0,r.kt)("br",{parentName:"p"}),"\n","\u76ee\u524d \uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"public boolean wasNull() {return null == currentRow;}"),(0,r.kt)("br",{parentName:"p"}),"\n","\u5efa\u8bae \uff1a\u4f7f\u7528 JDK8 \u63d0\u4f9b\u7684 Objects.isNull \u65b9\u6cd5\u3002  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5224\u65ad\u672c\u8eab\u662f\u5426\u662f Null\uff0c\u7136\u540e\u8fd4\u56de\u81ea\u8eab\uff0c\u548c\u5176\u4ed6\u7684\u4e09\u5143\u8fd0\u7b97\u7b26\uff0c\u4ee5\u4e0b\u662f\u4ee3\u8868\u5b9e\u4f8b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u76ee\u524d \uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"this.a = null == a ? new B().newC() : a;"),(0,r.kt)("br",{parentName:"p"}),"\n","\u5efa\u8bae \uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional.ofNullable(a).orElse(new B().newC());"),(0,r.kt)("br",{parentName:"p"}),"\n","\u76ee\u524d \uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"a = null == a ? b.getC().getD() : a;"),(0,r.kt)("br",{parentName:"p"}),"\n","\u5efa\u8bae \uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"a  = Optional.ofNullable(a).orElse(b.getC().getD());"),(0,r.kt)("br",{parentName:"p"}),"\n","\u76ee\u524d \uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"return null == a.getB() ? c : a.getB();"),(0,r.kt)("br",{parentName:"p"}),"\n","\u5efa\u8bae \uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"return Optional.ofNullable(a.getB()).orElse(c);"),(0,r.kt)("br",{parentName:"p"}),"\n","\u76ee\u524d \uff1a "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'BigDecimal c;\nBigDecimal s;\nif (null == c) {\n  c = new BigDecimal("0");\n}\nif (null == s) {\n  s = new BigDecimal("0");\n}\n')),(0,r.kt)("p",{parentName:"li"},"\u5efa\u8bae \uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},'c = Optional.ofNullable(c).orElse(new BigDecimal("0")); s = Optional.ofNullable(s).orElse(new BigDecimal("0"));'),(0,r.kt)("br",{parentName:"p"}),"\n","\u76ee\u524d \uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"return null == results.get(0) ? 0 : results.get(0);"),(0,r.kt)("br",{parentName:"p"}),"\n","\u5efa\u8bae \uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"return Optional.ofNullable(results.get(0)).orElse(0);"),(0,r.kt)("br",{parentName:"p"}),"\n","\u76ee\u524d \uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"return null == getA().getB() ? Collections.emptyList() : Collections.singletonList(getA().getB());"),(0,r.kt)("br",{parentName:"p"}),"\n","\u5efa\u8bae \uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"return Optional.ofNullable(getA().getB()).map(Collections::singletonList).orElse(Collections.emptyList());"),"  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5224\u65ad\u672c\u8eab\u662f Null\uff0c\u7136\u540e\u8fd4\u56de\u4e0e\u81ea\u8eab\u65e0\u5173\u7684\u4e09\u5143\u8fd0\u7b97\u7b26,\u4ee5\u4e0b\u662f\u4ee3\u8868\u5b9e\u4f8b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u76ee\u524d \uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"A a = null == b ? cMap.values().iterator().next() : cMap.get(d);"),(0,r.kt)("br",{parentName:"p"}),"\n","\u76ee\u524d \uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"return null == a ? new B() : new B(c);"),(0,r.kt)("br",{parentName:"p"}),"\n","\u5efa\u8bae \uff1a\u4e0d\u505a\u4fee\u6539  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5224\u65ad\u96c6\u5408\u662f\u5426\u4e3a\u975e\u7a7a\uff0c\u4ee5\u4e0b\u662f\u51e0\u4e2a\u4ee3\u8868\u5b9e\u4f8b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u76ee\u524d \uff1a  "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"private boolean isEmpty(final List<String> xxx) {\n    return null == xxx || xxx.isEmpty();\n}\n")),(0,r.kt)("p",{parentName:"li"},"\u5efa\u8bae \uff1a\u65b0\u589e\u4e00\u4e2a\u96c6\u5408\u5de5\u5177\u7c7b\uff0c\u6765\u7edf\u4e00\u5224\u65ad\u3002  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u83b7\u53d6 Map \u7684 value \u503c\uff0c\u7136\u540e\u5224\u65ad\u662f\u5426\u4e3a Null\uff0c\u4ee5\u4e0b\u662f\u51e0\u4e2a\u4ee3\u8868\u5b9e\u4f8b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u76ee\u524d \uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"public Collection<String> getA(final String b) {\n   Collection<String> result = cMap.get(b);\n   if (null == result) {\n      result = Collections.emptySet();\n   }\n   return result;\n}\n")),(0,r.kt)("p",{parentName:"li"},"\u5efa\u8bae \uff1a \u4f7f\u7528Map.getOrDefault()\u65b9\u6cd5  "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"public Collection<String> getA(final String b) {\n  return cMap.getOrDefault(b, Collections.emptySet());\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5224\u65ad\u662f\u5426\u4e3a Null\uff0c\u5982\u679c\u4e3a Null \u629b\u51fa\u5f02\u5e38\uff0c\u5426\u5219\u8fdb\u884c\u4e0b\u4e00\u6b65\u64cd\u4f5c \uff0c\u4ee5\u4e0b\u662f\u51e0\u4e2a\u4ee3\u8868\u5b9e\u4f8b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u76ee\u524d \uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'private Collection<String> doXxx(final Collection<String> a, final Object<?> b) {\n  if (null == c) {\n     throw new Exception("XXX");\n  }\n  return c.doXxx(a,new Object(b.getXXX(), b.getXXX(), b.getXXX()));\n}\n')),(0,r.kt)("p",{parentName:"li"},"\u5efa\u8bae \uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'private Collection<String> doXxx(final Collection<String> a, final Object<?> b) {\n     return Optional.ofNullable(c).map(e -> e.doXxx(a,\n            new Object(b.getXXX(), b.getXXX(), b.getXXX())))\n           .orElseThrow(()-> new Exception("XXX"));\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5224\u65ad\u81ea\u8eab\u5bf9\u8c61\u662f\u5426\u4e3a Null\uff0c\u4f46\u662f\u8fd4\u56de Optional \u5305\u88c5\u7684\uff0c\u4ee5\u4e0b\u662f\u51e0\u4e2a\u4ee3\u8868\u5b9e\u4f8b\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u76ee\u524d \uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"return null == a ? Optional.empty() : Optional.ofNullable(a.getXXX());"),(0,r.kt)("br",{parentName:"p"}),"\n","\u5efa\u8bae \uff1a ",(0,r.kt)("inlineCode",{parentName:"p"},"return Optional.ofNullable(a).map(e -> e.getXXX());")))))}k.isMDXComponent=!0}}]);