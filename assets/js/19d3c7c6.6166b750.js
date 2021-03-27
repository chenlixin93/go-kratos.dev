(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),d=p(n),s=r,O=d["".concat(o,".").concat(s)]||d[s]||u[s]||l;return n?a.a.createElement(O,i(i({ref:t},b),{},{components:n})):a.a.createElement(O,i({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var b=2;b<l;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),l=(n(0),n(116)),o={slug:"go-project-layout",title:"Go\u5de5\u7a0b\u5316 - Project Layout \u6700\u4f73\u5b9e\u8df5",description:"Go \u9879\u76ee\u5de5\u7a0b\u5316/\u57fa\u7840\u5e93\uff0c\u5728\u9879\u76ee\u4e0d\u540c\u89d2\u5ea6\u4e2d\u7684\u8bbe\u8ba1\u7406\u5ff5\uff0cGo \u662f\u4e00\u4e2a\u9762\u5411\u5305\u540d\u8bbe\u8ba1\u7684\u8bed\u8a00\uff0c\u53ef\u4ee5\u901a\u8fc7\u5404\u4e2a\u5305\u540d\u8fdb\u884c\u7ec4\u7ec7 Go \u7684\u9879\u76ee\u5e03\u5c40",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"],author:"Tony",author_title:"Maintainer of go-kratos",author_url:"https://github.com/tonybase",author_image_url:"https://avatars.githubusercontent.com/u/3871120?s=460&v=4",tags:["go","golang","\u5de5\u7a0b\u5316","\u9879\u76ee\u5e03\u5c40","\u6700\u4f73\u5b9e\u8df5"]},i={permalink:"/blog/go-project-layout",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/blog/2021-03-08-go-project-layout.md",source:"@site/blog/2021-03-08-go-project-layout.md",description:"Go \u9879\u76ee\u5de5\u7a0b\u5316/\u57fa\u7840\u5e93\uff0c\u5728\u9879\u76ee\u4e0d\u540c\u89d2\u5ea6\u4e2d\u7684\u8bbe\u8ba1\u7406\u5ff5\uff0cGo \u662f\u4e00\u4e2a\u9762\u5411\u5305\u540d\u8bbe\u8ba1\u7684\u8bed\u8a00\uff0c\u53ef\u4ee5\u901a\u8fc7\u5404\u4e2a\u5305\u540d\u8fdb\u884c\u7ec4\u7ec7 Go \u7684\u9879\u76ee\u5e03\u5c40",date:"2021-03-08T00:00:00.000Z",formattedDate:"March 8, 2021",tags:[{label:"go",permalink:"/blog/tags/go"},{label:"golang",permalink:"/blog/tags/golang"},{label:"\u5de5\u7a0b\u5316",permalink:"/blog/tags/\u5de5\u7a0b\u5316"},{label:"\u9879\u76ee\u5e03\u5c40",permalink:"/blog/tags/\u9879\u76ee\u5e03\u5c40"},{label:"\u6700\u4f73\u5b9e\u8df5",permalink:"/blog/tags/\u6700\u4f73\u5b9e\u8df5"}],title:"Go\u5de5\u7a0b\u5316 - Project Layout \u6700\u4f73\u5b9e\u8df5",readingTime:2.565,truncated:!1},c=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",children:[]},{value:"\u9879\u76ee\u5e03\u5c40",id:"\u9879\u76ee\u5e03\u5c40",children:[{value:"Kit \u57fa\u7840\u5e93",id:"kit-\u57fa\u7840\u5e93",children:[]},{value:"Application \u5e94\u7528\u9879\u76ee",id:"application-\u5e94\u7528\u9879\u76ee",children:[]},{value:"\u5e94\u7528\u7c7b\u578b",id:"\u5e94\u7528\u7c7b\u578b",children:[]}]},{value:"\u5e94\u7528\u76ee\u5f55",id:"\u5e94\u7528\u76ee\u5f55",children:[{value:"/cmd",id:"cmd",children:[]},{value:"/internal",id:"internal",children:[]},{value:"/pkg",id:"pkg",children:[]}]},{value:"\u670d\u52a1\u5e94\u7528\u76ee\u5f55",id:"\u670d\u52a1\u5e94\u7528\u76ee\u5f55",children:[{value:"/api",id:"api",children:[]},{value:"/configs",id:"configs",children:[]},{value:"/test",id:"test",children:[]}]},{value:"\u670d\u52a1\u5185\u90e8\u76ee\u5f55",id:"\u670d\u52a1\u5185\u90e8\u76ee\u5f55",children:[{value:"data",id:"data",children:[]},{value:"biz",id:"biz",children:[]},{value:"service",id:"service",children:[]},{value:"server",id:"server",children:[]}]},{value:"\u4e0d\u5efa\u8bae\u7684\u76ee\u5f55",id:"\u4e0d\u5efa\u8bae\u7684\u76ee\u5f55",children:[{value:"<del>src/</del>",id:"src",children:[]},{value:"<del>model/</del>",id:"model",children:[]},{value:"<del>xxs/</del>",id:"xxs",children:[]}]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",children:[]}],b={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),Object(l.b)("p",null,"\u8fd9\u7bc7\u6587\u7ae0\u4e3b\u8981\u8bb2 ",Object(l.b)("strong",{parentName:"p"},"Go \u9879\u76ee\u5de5\u7a0b\u5316")," \u4e0a\u7684\u4e00\u4e9b\u601d\u8003\uff0c\u4ee5\u53ca ",Object(l.b)("strong",{parentName:"p"},"Kratos")," \u5728\u9879\u76ee\u4e0d\u540c\u89d2\u5ea6\u4e2d\u7684\u8bbe\u8ba1\u7406\u5ff5\u3002"),Object(l.b)("p",null,"Go \u662f\u4e00\u4e2a\u9762\u5411\u5305\u540d\u8bbe\u8ba1\u7684\u8bed\u8a00\uff0c\u53ef\u4ee5\u901a\u8fc7\u5404\u4e2a\u5305\u540d\u8fdb\u884c\u7ec4\u7ec7 Go \u7684\u9879\u76ee\u5e03\u5c40\uff0c\u800c\u5927\u5bb6\u9075\u5faa\u89c4\u8303\u8bbe\u8ba1\u51c6\u5219\uff0c\u53ef\u4ee5\u5f88\u597d\u5730\u6539\u5584\u56e2\u961f\u6210\u5458\u4e4b\u95f4\u7684\u6c9f\u901a\u3002"),Object(l.b)("h2",{id:"\u9879\u76ee\u5e03\u5c40"},"\u9879\u76ee\u5e03\u5c40"),Object(l.b)("p",null,"\u6bcf\u4e2a\u516c\u53f8\u90fd\u5e94\u5f53\u4e3a\u4e0d\u540c\u7684\u5fae\u670d\u52a1\u5efa\u7acb\u4e00\u4e2a\u7edf\u4e00\u7684 Kit \u5de5\u5177\u5305\u9879\u76ee\uff08\u57fa\u7840\u5e93/\u6846\u67b6\uff09\u548c Application \u9879\u76ee\u3002\n\u57fa\u7840\u5e93 Kit \u4e3a\u72ec\u7acb\u9879\u76ee\uff0c\u516c\u53f8\u7ea7\u5efa\u8bae\u53ea\u6709\u4e00\u4e2a\uff0c\u6309\u7167\u529f\u80fd\u76ee\u5f55\u6765\u62c6\u5206\u4f1a\u5e26\u6765\u4e0d\u5c11\u7684\u7ba1\u7406\u5de5\u4f5c\uff0c\u56e0\u6b64\u5efa\u8bae\u5408\u5e76\u6574\u5408\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"by Package Oriented Design\n\u201cTo this end, the Kit project is not allowed to have a vendor folder. If any of packages are dependent on 3rd party packages, they must always build against the latest version of those dependences.\u201d")),Object(l.b)("h3",{id:"kit-\u57fa\u7840\u5e93"},"Kit \u57fa\u7840\u5e93"),Object(l.b)("p",null,"\u5c06 Kit \u9879\u76ee\u4f5c\u4e3a\u516c\u53f8\u7684\u6807\u51c6\u5e93\uff0c\u56e0\u6b64\u5e94\u8be5\u53ea\u6709\u4e00\u4e2a\u3002\u5e76\u4e14 Kit \u57fa\u7840\u5e93\u4e5f\u5e94\u8be5\u5177\u5907\u4ee5\u4e0b\u8fd9\u4e9b\u7279\u70b9\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u7b80\u5355\uff1a\u4e0d\u8fc7\u5ea6\u8bbe\u8ba1\uff0c\u4ee3\u7801\u5e73\u5b9e\u7b80\u5355\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u901a\u7528\uff1a\u901a\u7528\u4e1a\u52a1\u5f00\u53d1\u6240\u9700\u8981\u7684\u57fa\u7840\u5e93\u7684\u529f\u80fd\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u9ad8\u6548\uff1a\u63d0\u9ad8\u4e1a\u52a1\u8fed\u4ee3\u7684\u6548\u7387\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u7a33\u5b9a\uff1a\u57fa\u7840\u5e93\u53ef\u6d4b\u8bd5\u6027\u9ad8\uff0c\u8986\u76d6\u7387\u9ad8\uff0c\u6709\u7ebf\u4e0a\u5b9e\u8df5\u5b89\u5168\u53ef\u9760\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u5065\u58ee\uff1a\u901a\u8fc7\u826f\u597d\u7684\u57fa\u7840\u5e93\u8bbe\u8ba1\uff0c\u51cf\u5c11\u9519\u7528\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd\uff1a\u6027\u80fd\u9ad8\uff0c\u4f46\u4e0d\u7279\u5b9a\u4e3a\u4e86\u6027\u80fd\u505a hack \u4f18\u5316\uff0c\u5f15\u5165 unsafe \uff1b"),Object(l.b)("li",{parentName:"ul"},"\u6269\u5c55\u6027\uff1a\u826f\u597d\u7684\u63a5\u53e3\u8bbe\u8ba1\uff0c\u6765\u6269\u5c55\u5b9e\u73b0\uff0c\u6216\u8005\u901a\u8fc7\u65b0\u589e\u57fa\u7840\u5e93\u76ee\u5f55\u6765\u6269\u5c55\u529f\u80fd\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u5bb9\u9519\u6027\uff1a\u4e3a\u5931\u8d25\u8bbe\u8ba1\uff0c\u5927\u91cf\u5f15\u5165\u5bf9 SRE \u7684\u7406\u89e3\uff0c\u9c81\u68d2\u6027\u9ad8\uff1b"),Object(l.b)("li",{parentName:"ul"},"\u5de5\u5177\u94fe\uff1a\u5305\u542b\u5927\u91cf\u5de5\u5177\u94fe\uff0c\u6bd4\u5982\u8f85\u52a9\u4ee3\u7801\u751f\u6210\uff0clint \u5de5\u5177\u7b49\u7b49\uff1b")),Object(l.b)("p",null,"\u4ee5 Kratos \u4e3a\u4f8b\u5b50\uff0c\u4e00\u4e2a\u5178\u578b\u7684 Kit \u57fa\u7840\u5e93 \u53ef\u80fd\u770b\u8d77\u6765\u50cf\u8fd9\u6837\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"github.com/go-kratos/kratos\n\u251c\u2500\u2500 cmd\n\u251c\u2500\u2500 docs\n\u251c\u2500\u2500 internal\n\u251c\u2500\u2500 examples\n\u251c\u2500\u2500 api\n\u251c\u2500\u2500 errors\n\u251c\u2500\u2500 config\n\u251c\u2500\u2500 log\n\u251c\u2500\u2500 metrics\n\u251c\u2500\u2500 registry\n\u251c\u2500\u2500 middleware\n\u251c\u2500\u2500 transport\n\u251c\u2500\u2500 third_party\n\u251c\u2500\u2500 app.go\n\u251c\u2500\u2500 options.go\n\u251c\u2500\u2500 go.mod\n\u251c\u2500\u2500 go.sum\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u4e3a\u4e86\u4fdd\u8bc1 Kit \u57fa\u7840\u5e93\u7684\u53ef\u79fb\u690d\u6027\uff0c\u5c3d\u53ef\u80fd\u8fdb\u884c\u63a5\u53e3\u62bd\u8c61\uff0c\u5e76\u4e14 go.mod \u4f9d\u8d56\u7b2c\u4e09\u65b9\u5e93\u4e5f\u5c3d\u53ef\u80fd\u7b80\u5355\uff0c\u7136\u540e\u518d\u901a\u8fc7 plugins \u8fdb\u884c\u6269\u5c55\u57fa\u7840\u5e93\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u4e1a\u52a1\u9700\u6c42\u5b9a\u5236\u5316\u3002")),Object(l.b)("h3",{id:"application-\u5e94\u7528\u9879\u76ee"},"Application \u5e94\u7528\u9879\u76ee"),Object(l.b)("p",null,"\u5982\u679c\u4f60\u5c1d\u8bd5\u5b66\u4e60 Go\uff0c\u6216\u8005\u4f60\u6b63\u5728\u4e3a\u81ea\u5df1\u5efa\u7acb\u4e00\u4e2a PoC \u6216\u4e00\u4e2a\u73a9\u5177\u9879\u76ee\uff0c\u8fd9\u4e2a\u9879\u76ee\u5e03\u5c40\u662f\u6ca1\u5565\u5fc5\u8981\u7684\u3002\u4ece\u4e00\u4e9b\u975e\u5e38\u7b80\u5355\u7684\u4e8b\u60c5\u5f00\u59cb\uff08\u4e00\u4e2a main.go \u6587\u4ef6\u7ef0\u7ef0\u6709\u4f59\uff09\u3002\u5f53\u6709\u66f4\u591a\u7684\u4eba\u53c2\u4e0e\u8fd9\u4e2a\u9879\u76ee\u65f6\uff0c\u4f60\u5c06\u9700\u8981\u66f4\u591a\u7684\u7ed3\u6784\uff0c\u5305\u62ec\u9700\u8981\u4e00\u4e2a Toolkit \u6765\u65b9\u4fbf\u751f\u6210\u9879\u76ee\u7684\u6a21\u677f\uff0c\u5c3d\u53ef\u80fd\u5927\u5bb6\u7edf\u4e00\u7684\u5de5\u7a0b\u76ee\u5f55\u5e03\u5c40\u3002"),Object(l.b)("img",{src:"/images/ddd.jpg",alt:"kratos ddd",width:"500px"}),Object(l.b)("p",null,"\u4f8b\u5982\uff0c\u901a\u8fc7 Kratos \u5de5\u5177\u751f\u6210\u4e00\u4e2a Go\u5de5\u7a0b\u5316\u9879\u76ee \u6a21\u677f\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"# \u521b\u5efa\u9879\u76ee\u6a21\u677f\nkratos new helloworld\n\ncd helloworld\n# \u62c9\u53d6\u9879\u76ee\u4f9d\u8d56\ngo mod download\n# \u751f\u6210proto\u6a21\u677f\nkratos proto add api/helloworld/helloworld.proto\n# \u751f\u6210client\u6e90\u7801\nkratos proto client api/helloworld/helloworld.proto\n# \u751f\u6210server\u6a21\u677f\nkratos proto server api/helloworld/helloworld.proto -t internal/service\n")),Object(l.b)("p",null,"\u5728 Kratos \u4e2d\uff0c\u4e00\u4e2a\u5178\u578b\u7684 Go \u9879\u76ee\u5e03\u5c40 \u53ef\u80fd\u770b\u8d77\u6765\u50cf\u8fd9\u6837\uff1a"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"application\n|____api\n| |____helloworld\n| | |____v1\n| | |____errors\n|____cmd\n| |____helloworld\n|____configs\n|____internal\n| |____conf\n| |____data\n| |____biz\n| |____service\n| |____server\n|____test\n|____pkg\n|____go.mod\n|____go.sum\n|____LICENSE\n|____README.md\n")),Object(l.b)("h3",{id:"\u5e94\u7528\u7c7b\u578b"},"\u5e94\u7528\u7c7b\u578b"),Object(l.b)("p",null,"\u5fae\u670d\u52a1\u4e2d\u7684 app \u670d\u52a1\u7c7b\u578b\u4e3b\u8981\u5206\u4e3a4\u7c7b\uff1ainterface\u3001service\u3001job\u3001admin\uff0c\u5e94\u7528 cmd \u76ee\u5f55\u8d1f\u8d23\u7a0b\u5e8f\u7684\uff1a\u542f\u52a8\u3001\u5173\u95ed\u3001\u914d\u7f6e\u521d\u59cb\u5316\u7b49\u3002"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"interface: \u5bf9\u5916\u7684 BFF \u670d\u52a1\uff0c\u63a5\u53d7\u6765\u81ea\u7528\u6237\u7684\u8bf7\u6c42\uff0c\u6bd4\u5982\u66b4\u9732\u4e86 HTTP/gRPC \u63a5\u53e3\u3002"),Object(l.b)("li",{parentName:"ul"},"service: \u5bf9\u5185\u7684\u5fae\u670d\u52a1\uff0c\u4ec5\u63a5\u53d7\u6765\u81ea\u5185\u90e8\u5176\u4ed6\u670d\u52a1\u6216\u8005\u7f51\u5173\u7684\u8bf7\u6c42\uff0c\u6bd4\u5982\u66b4\u9732\u4e86gRPC \u63a5\u53e3\u53ea\u5bf9\u5185\u670d\u52a1\u3002"),Object(l.b)("li",{parentName:"ul"},"admin\uff1a\u533a\u522b\u4e8e service\uff0c\u66f4\u591a\u662f\u9762\u5411\u8fd0\u8425\u6d4b\u7684\u670d\u52a1\uff0c\u901a\u5e38\u6570\u636e\u6743\u9650\u66f4\u9ad8\uff0c\u9694\u79bb\u5e26\u6765\u66f4\u597d\u7684\u4ee3\u7801\u7ea7\u522b\u5b89\u5168\u3002"),Object(l.b)("li",{parentName:"ul"},"job: \u6d41\u5f0f\u4efb\u52a1\u5904\u7406\u7684\u670d\u52a1\uff0c\u4e0a\u6e38\u4e00\u822c\u4f9d\u8d56 message broker\u3002"),Object(l.b)("li",{parentName:"ul"},"task: \u5b9a\u65f6\u4efb\u52a1\uff0c\u7c7b\u4f3c cronjob\uff0c\u90e8\u7f72\u5230 task \u6258\u7ba1\u5e73\u53f0\u4e2d\u3002")),Object(l.b)("h2",{id:"\u5e94\u7528\u76ee\u5f55"},"\u5e94\u7528\u76ee\u5f55"),Object(l.b)("h3",{id:"cmd"},"/cmd"),Object(l.b)("p",null,"\u672c\u9879\u76ee\u7684\u4e3b\u5e72\u3002\n\u6bcf\u4e2a\u5e94\u7528\u7a0b\u5e8f\u7684\u76ee\u5f55\u540d\u5e94\u8be5\u4e0e\u4f60\u60f3\u8981\u7684\u53ef\u6267\u884c\u6587\u4ef6\u7684\u540d\u79f0\u76f8\u5339\u914d\uff08\u4f8b\u5982\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"/cmd/myapp"),"\uff09\u3002\n\u4e0d\u8981\u5728\u8fd9\u4e2a\u76ee\u5f55\u4e2d\u653e\u7f6e\u592a\u591a\u4ee3\u7801\u3002\u5982\u679c\u4f60\u8ba4\u4e3a\u4ee3\u7801\u53ef\u4ee5\u5bfc\u5165\u5e76\u5728\u5176\u4ed6\u9879\u76ee\u4e2d\u4f7f\u7528\uff0c\u90a3\u4e48\u5b83\u5e94\u8be5\u4f4d\u4e8e ",Object(l.b)("inlineCode",{parentName:"p"},"/pkg")," \u76ee\u5f55\u4e2d\u3002\u5982\u679c\u4ee3\u7801\u4e0d\u662f\u53ef\u91cd\u7528\u7684\uff0c\u6216\u8005\u4f60\u4e0d\u5e0c\u671b\u5176\u4ed6\u4eba\u91cd\u7528\u5b83\uff0c\u8bf7\u5c06\u8be5\u4ee3\u7801\u653e\u5230 ",Object(l.b)("inlineCode",{parentName:"p"},"/internal")," \u76ee\u5f55\u4e2d\u3002"),Object(l.b)("h3",{id:"internal"},"/internal"),Object(l.b)("p",null,"\u79c1\u6709\u5e94\u7528\u7a0b\u5e8f\u548c\u5e93\u4ee3\u7801\u3002\u8fd9\u662f\u4f60\u4e0d\u5e0c\u671b\u5176\u4ed6\u4eba\u5728\u5176\u5e94\u7528\u7a0b\u5e8f\u6216\u5e93\u4e2d\u5bfc\u5165\u4ee3\u7801\u3002\u8bf7\u6ce8\u610f\uff0c\u8fd9\u4e2a\u5e03\u5c40\u6a21\u5f0f\u662f\u7531 Go \u7f16\u8bd1\u5668\u672c\u8eab\u6267\u884c\u7684\u3002\u6709\u5173\u66f4\u591a\u7ec6\u8282\uff0c\u8bf7\u53c2\u9605 Go 1.4 release notes\u3002\u6ce8\u610f\uff0c\u4f60\u5e76\u4e0d\u5c40\u9650\u4e8e\u9876\u7ea7 ",Object(l.b)("inlineCode",{parentName:"p"},"internal")," \u76ee\u5f55\u3002\u5728\u9879\u76ee\u6811\u7684\u4efb\u4f55\u7ea7\u522b\u4e0a\u90fd\u53ef\u4ee5\u6709\u591a\u4e2a\u5185\u90e8\u76ee\u5f55\u3002\n\u4f60\u53ef\u4ee5\u9009\u62e9\u5411 ",Object(l.b)("inlineCode",{parentName:"p"},"internal")," \u5305\u4e2d\u6dfb\u52a0\u4e00\u4e9b\u989d\u5916\u7684\u7ed3\u6784\uff0c\u4ee5\u5206\u9694\u5171\u4eab\u548c\u975e\u5171\u4eab\u7684\u5185\u90e8\u4ee3\u7801\u3002\u8fd9\u4e0d\u662f\u5fc5\u9700\u7684(\u7279\u522b\u662f\u5bf9\u4e8e\u8f83\u5c0f\u7684\u9879\u76ee)\uff0c\u4f46\u662f\u6700\u597d\u6709\u6709\u53ef\u89c6\u5316\u7684\u7ebf\u7d22\u6765\u663e\u793a\u9884\u671f\u7684\u5305\u7684\u7528\u9014\u3002\u4f60\u7684\u5b9e\u9645\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u53ef\u4ee5\u653e\u5728 ",Object(l.b)("inlineCode",{parentName:"p"},"/internal/app")," \u76ee\u5f55\u4e0b\uff08\u4f8b\u5982 ",Object(l.b)("inlineCode",{parentName:"p"},"/internal/app/myapp"),"\uff09\uff0c\u8fd9\u4e9b\u5e94\u7528\u7a0b\u5e8f\u5171\u4eab\u7684\u4ee3\u7801\u53ef\u4ee5\u653e\u5728 ",Object(l.b)("inlineCode",{parentName:"p"},"/internal/pkg")," \u76ee\u5f55\u4e0b\uff08\u4f8b\u5982 /internal/pkg/myprivlib\uff09\u3002\n\u56e0\u4e3a\u6211\u4eec\u4e60\u60ef\u628a\u76f8\u5173\u7684\u670d\u52a1\uff0c\u6bd4\u5982\u8d26\u53f7\u670d\u52a1\uff0c\u5185\u90e8\u6709 rpc\u3001job\u3001admin \u7b49\uff0c\u76f8\u5173\u7684\u670d\u52a1\u6574\u5408\u4e00\u8d77\u540e\uff0c\u9700\u8981\u533a\u5206 app\u3002\u5355\u4e00\u7684\u670d\u52a1\uff0c\u53ef\u4ee5\u53bb\u6389 ",Object(l.b)("inlineCode",{parentName:"p"},"/internal/myapp"),"\u3002"),Object(l.b)("h3",{id:"pkg"},"/pkg"),Object(l.b)("p",null,"\u5916\u90e8\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u4f7f\u7528\u7684\u5e93\u4ee3\u7801\uff08\u4f8b\u5982 ",Object(l.b)("inlineCode",{parentName:"p"},"/pkg/mypubliclib"),"\uff09\u3002\u5176\u4ed6\u9879\u76ee\u4f1a\u5bfc\u5165\u8fd9\u4e9b\u5e93\uff0c\u6240\u4ee5\u5728\u8fd9\u91cc\u653e\u4e1c\u897f\u4e4b\u524d\u8981\u4e09\u601d:-)\u6ce8\u610f\uff0c",Object(l.b)("inlineCode",{parentName:"p"},"internal")," \u76ee\u5f55\u662f\u786e\u4fdd\u79c1\u6709\u5305\u4e0d\u53ef\u5bfc\u5165\u7684\u66f4\u597d\u65b9\u6cd5\uff0c\u56e0\u4e3a\u5b83\u662f\u7531 Go \u5f3a\u5236\u6267\u884c\u7684\u3002",Object(l.b)("inlineCode",{parentName:"p"},"/pkg")," \u76ee\u5f55\u4ecd\u7136\u662f\u4e00\u79cd\u5f88\u597d\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u663e\u5f0f\u5730\u8868\u793a\u8be5\u76ee\u5f55\u4e2d\u7684\u4ee3\u7801\u5bf9\u4e8e\u5176\u4ed6\u4eba\u6765\u8bf4\u662f\u5b89\u5168\u4f7f\u7528\u7684\u597d\u65b9\u6cd5\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"/pkg \u76ee\u5f55\u5185\uff0c\u53ef\u4ee5\u53c2\u8003 go \u6807\u51c6\u5e93\u7684\u7ec4\u7ec7\u65b9\u5f0f\uff0c\u6309\u7167\u529f\u80fd\u5206\u7c7b\u3002/internla/pkg \u4e00\u822c\u7528\u4e8e\u9879\u76ee\u5185\u7684 \u8de8\u591a\u4e2a\u5e94\u7528\u7684\u516c\u5171\u5171\u4eab\u4ee3\u7801\uff0c\u4f46\u5176\u4f5c\u7528\u57df\u4ec5\u5728\u5355\u4e2a\u9879\u76ee\u5de5\u7a0b\u5185\u3002  ")),Object(l.b)("p",null,"\u7531 Travis Jeffery  \u64b0\u5199\u7684 I'll take pkg over internal \u535a\u5ba2\u6587\u7ae0\u63d0\u4f9b\u4e86 ",Object(l.b)("inlineCode",{parentName:"p"},"pkg")," \u548c ",Object(l.b)("inlineCode",{parentName:"p"},"internal")," \u76ee\u5f55\u7684\u4e00\u4e2a\u5f88\u597d\u7684\u6982\u8ff0\uff0c\u4ee5\u53ca\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528\u5b83\u4eec\u662f\u6709\u610f\u4e49\u7684\u3002\n\u5f53\u6839\u76ee\u5f55\u5305\u542b\u5927\u91cf\u975e Go \u7ec4\u4ef6\u548c\u76ee\u5f55\u65f6\uff0c\u8fd9\u4e5f\u662f\u4e00\u79cd\u5c06 Go \u4ee3\u7801\u5206\u7ec4\u5230\u4e00\u4e2a\u4f4d\u7f6e\u7684\u65b9\u6cd5\uff0c\u8fd9\u4f7f\u5f97\u8fd0\u884c\u5404\u79cd Go \u5de5\u5177\u53d8\u5f97\u66f4\u52a0\u5bb9\u6613\u7ec4\u7ec7\u3002 "),Object(l.b)("h2",{id:"\u670d\u52a1\u5e94\u7528\u76ee\u5f55"},"\u670d\u52a1\u5e94\u7528\u76ee\u5f55"),Object(l.b)("h3",{id:"api"},"/api"),Object(l.b)("p",null,"\u200b    API \u534f\u8bae\u5b9a\u4e49\u76ee\u5f55\uff0cservices.proto protobuf \u6587\u4ef6\uff0c\u4ee5\u53ca\u751f\u6210\u7684 go \u6587\u4ef6\u3002\u6211\u4eec\u901a\u5e38\u628a api \u6587\u6863\u76f4\u63a5\u5728 proto \u6587\u4ef6\u4e2d\u63cf\u8ff0\u3002"),Object(l.b)("h3",{id:"configs"},"/configs"),Object(l.b)("p",null,"\u200b    \u914d\u7f6e\u6587\u4ef6\u6a21\u677f\u6216\u9ed8\u8ba4\u914d\u7f6e\u3002"),Object(l.b)("h3",{id:"test"},"/test"),Object(l.b)("p",null,"\u200b    \u989d\u5916\u7684\u5916\u90e8\u6d4b\u8bd5\u5e94\u7528\u7a0b\u5e8f\u548c\u6d4b\u8bd5\u6570\u636e\u3002\u4f60\u53ef\u4ee5\u968f\u65f6\u6839\u636e\u9700\u6c42\u6784\u9020 /test \u76ee\u5f55\u3002\u5bf9\u4e8e\u8f83\u5927\u7684\u9879\u76ee\uff0c\u6709\u4e00\u4e2a\u6570\u636e\u5b50\u76ee\u5f55\u662f\u6709\u610f\u4e49\u7684\u3002\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 /test/data \u6216 /test/testdata (\u5982\u679c\u4f60\u9700\u8981\u5ffd\u7565\u76ee\u5f55\u4e2d\u7684\u5185\u5bb9)\u3002\u8bf7\u6ce8\u610f\uff0cGo \u8fd8\u4f1a\u5ffd\u7565\u4ee5 \u201c.\u201d \u6216 \u201c_\u201d \u5f00\u5934\u7684\u76ee\u5f55\u6216\u6587\u4ef6\uff0c\u56e0\u6b64\u5728\u5982\u4f55\u547d\u540d\u6d4b\u8bd5\u6570\u636e\u76ee\u5f55\u65b9\u9762\u6709\u66f4\u5927\u7684\u7075\u6d3b\u6027\u3002"),Object(l.b)("h2",{id:"\u670d\u52a1\u5185\u90e8\u76ee\u5f55"},"\u670d\u52a1\u5185\u90e8\u76ee\u5f55"),Object(l.b)("p",null,"Application \u76ee\u5f55\u4e0b\u6709 api\u3001cmd\u3001configs\u3001internal\u3001pkg \u76ee\u5f55\uff0c\u76ee\u5f55\u91cc\u4e00\u822c\u8fd8\u4f1a\u653e\u7f6e README\u3001CHANGELOG\u3001OWNERS\u3002"),Object(l.b)("p",null,"internal \u662f\u4e3a\u4e86\u907f\u514d\u6709\u540c\u4e1a\u52a1\u4e0b\u6709\u4eba\u8de8\u76ee\u5f55\u5f15\u7528\u4e86\u5185\u90e8\u7684 data\u3001biz\u3001service\u3001server \u7b49\u5185\u90e8 struct\u3002"),Object(l.b)("h3",{id:"data"},"data"),Object(l.b)("p",null,"\u4e1a\u52a1\u6570\u636e\u8bbf\u95ee\uff0c\u5305\u542b cache\u3001db \u7b49\u5c01\u88c5\uff0c\u5b9e\u73b0\u4e86 biz \u7684 repo \u63a5\u53e3\u3002\u6211\u4eec\u53ef\u80fd\u4f1a\u628a data \u4e0e dao \u6df7\u6dc6\u5728\u4e00\u8d77\uff0cdata \u504f\u91cd\u4e1a\u52a1\u7684\u542b\u4e49\uff0c\u5b83\u6240\u8981\u505a\u7684\u662f\u5c06\u9886\u57df\u5bf9\u8c61\u91cd\u65b0\u62ff\u51fa\u6765\uff0c\u6211\u4eec\u53bb\u6389\u4e86 DDD \u7684 infra\u5c42\u3002"),Object(l.b)("h3",{id:"biz"},"biz"),Object(l.b)("p",null,"\u4e1a\u52a1\u903b\u8f91\u7684\u7ec4\u88c5\u5c42\uff0c\u7c7b\u4f3c DDD \u7684 domain \u5c42\uff0cdata \u7c7b\u4f3c DDD \u7684 repo\uff0crepo \u63a5\u53e3\u5728\u8fd9\u91cc\u5b9a\u4e49\uff0c\u4f7f\u7528\u4f9d\u8d56\u5012\u7f6e\u7684\u539f\u5219\u3002"),Object(l.b)("h3",{id:"service"},"service"),Object(l.b)("p",null,"\u5b9e\u73b0\u4e86 api \u5b9a\u4e49\u7684\u670d\u52a1\u5c42\uff0c\u7c7b\u4f3c DDD \u7684 application \u5c42\uff0c\u5904\u7406 DTO \u5230 biz \u9886\u57df\u5b9e\u4f53\u7684\u8f6c\u6362\uff08DTO -> DO\uff09\uff0c\u540c\u65f6\u534f\u540c\u5404\u7c7b biz \u4ea4\u4e92\uff0c\u4f46\u662f\u4e0d\u5e94\u5904\u7406\u590d\u6742\u903b\u8f91\u3002"),Object(l.b)("h3",{id:"server"},"server"),Object(l.b)("p",null,"\u4e3ahttp\u548cgrpc\u5b9e\u4f8b\u7684\u521b\u5efa\u548c\u914d\u7f6e\uff0c\u4ee5\u53ca\u6ce8\u518c\u5bf9\u5e94\u7684 service \u3002"),Object(l.b)("h2",{id:"\u4e0d\u5efa\u8bae\u7684\u76ee\u5f55"},"\u4e0d\u5efa\u8bae\u7684\u76ee\u5f55"),Object(l.b)("h3",{id:"src"},Object(l.b)("del",{parentName:"h3"},"src/")),Object(l.b)("p",null,"  src \u76ee\u5f55\u5728 java \u5f00\u53d1\u8bed\u8a00\u7684\u9879\u76ee\u4e2d\u662f\u4e00\u4e2a\u5e38\u7528\u7684\u6a21\u5f0f\uff0c\u4f46\u662f\u5728 go \u5f00\u53d1\u9879\u76ee\u4e2d\uff0c\u5c3d\u91cf\u4e0d\u8981\u4f7f\u7528 src \u76ee\u5f55\u3002"),Object(l.b)("h3",{id:"model"},Object(l.b)("del",{parentName:"h3"},"model/")),Object(l.b)("p",null," \u5728\u5176\u4ed6\u8bed\u8a00\u5f00\u53d1\u4e2d\u4e00\u4e2a\u975e\u5e38\u901a\u7528\u7684\u6a21\u5757\u53eb model\uff0c\u628a\u6240\u6709\u7c7b\u578b\u90fd\u653e\u5728 model \u91cc\u3002\u4f46\u662f\u5728 go \u91cc\u4e0d\u5efa\u8bae\u7684\uff0c\u56e0\u4e3a go \u7684\u5305\u8bbe\u8ba1\u662f\u6839\u636e\u529f\u80fd\u804c\u8d23\u5212\u5206\u7684\u3002\u6bd4\u5982\u4e00\u4e2a User \u6a21\u578b\uff0c\u5e94\u8be5\u58f0\u660e\u5728\u4ed6\u88ab\u7528\u7684\u529f\u80fd\u6a21\u5757\u91cc\u3002"),Object(l.b)("h3",{id:"xxs"},Object(l.b)("del",{parentName:"h3"},"xxs/")),Object(l.b)("p",null,"  \u5e26\u590d\u6570\u7684\u76ee\u5f55\u6216\u5305\u3002\u867d\u7136 go \u6e90\u7801\u4e2d\u6709 strings \u5305\uff0c\u4f46\u66f4\u591a\u90fd\u662f\u7528\u5355\u6570\u5f62\u5f0f\u3002"),Object(l.b)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(l.b)("p",null,"\u5728\u5b9e\u9645 go \u9879\u76ee\u5f00\u53d1\u4e2d\uff0c\u4e00\u5b9a\u8981\u7075\u6d3b\u8fd0\u7528\uff0c\u5f53\u7136\u4e5f\u53ef\u4ee5\u5b8c\u5168\u4e0d\u6309\u7167\u8fd9\u6837\u67b6\u6784\u5206\u5c42\u3001\u5305\u8bbe\u8ba1\u7684\u89c4\u5219\uff0c\u4e00\u5207\u4ee5\u9879\u76ee\u7684\u5927\u5c0f\u3001\u4e1a\u52a1\u7684\u590d\u6742\u5ea6\u3001\u4e2a\u4eba\u4e13\u4e1a\u6280\u80fd\u8ba4\u77e5\u7684\u5e7f\u5ea6\u548c\u6df1\u5ea6\u3001\u65f6\u95f4\u7684\u7d27\u8feb\u5ea6\u4e3a\u51c6\u3002"),Object(l.b)("p",null,"\u5e76\u4e14\uff0c\u4e00\u5b9a\u8981\u6309\u5b9e\u9645\u60c5\u51b5\uff0c\u9009\u62e9\u5408\u9002\u81ea\u5df1\u56e2\u961f\u7684 Kit \u57fa\u7840\u5e93\uff0c\u8fdb\u884c\u5145\u5206\u7684\u8c03\u7814\u4ee5\u53ca\u662f\u5426\u53ef\u6ee1\u8db3\u63d2\u4ef6\u5b9a\u5236\u5316\uff0c\u9700\u8981\u7ef4\u62a4\u597d\u5c5e\u4e8e\u56e2\u961f\u7684 Kit \u57fa\u7840\u5e93 \u548c \u4ee3\u7801\u89c4\u8303 \uff0c\u5e26\u52a8\u5f00\u53d1\u8005\u8fdb\u884c\u79ef\u6781\u53c2\u4e0e\u8d21\u732e\u3002"),Object(l.b)("p",null,"\u5982\u679c\u5927\u5bb6\u6709\u66f4\u597d\u7684\u67b6\u6784\u8bbe\u8ba1\u7406\u5ff5\uff0c\u6b22\u8fce\u5230 go-kratos \u793e\u533a\u8fdb\u884c\u63a2\u8ba8\uff0c\u5e0c\u671b\u8fd9\u7bc7\u6587\u7ae0\u5bf9\u60a8\u6709\u5e2e\u52a9~"),Object(l.b)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.ardanlabs.com/blog/2017/02/package-oriented-design.html"},"Package Oriented Design")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/previous-versions/msp-n-p/ee658109(v=pandp.10)"},"Layered Application Guidelines")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/golang-standards/project-layout"},"Standard Go Project Layout")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/danceyoung/paper-code/blob/master/package-oriented-design/packageorienteddesign.md"},"Go \u9762\u5411\u5305\u7684\u8bbe\u8ba1\u548c\u67b6\u6784\u5206\u5c42")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://u.geekbang.org/subject/go"},"Go \u8fdb\u9636\u8bad\u7ec3\u8425 - \u6781\u5ba2\u65f6\u95f4"))))}p.isMDXComponent=!0}}]);