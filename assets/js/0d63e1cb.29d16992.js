(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{299:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,O=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.a.createElement(O,o(o({ref:t},c),{},{components:n})):a.a.createElement(O,o({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(299)),l={},o={unversionedId:"generated-markdown/GrpcHandler.generated",id:"generated-markdown/GrpcHandler.generated",isDocsHomePage:!1,title:"GrpcHandler.generated",description:"* endpoint (type: String, required) - gRPC Endpoint",source:"@site/docs/generated-markdown/GrpcHandler.generated.md",slug:"/generated-markdown/GrpcHandler.generated",permalink:"/docs/generated-markdown/GrpcHandler.generated",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/generated-markdown/GrpcHandler.generated.md",version:"current"},b=[],c={toc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"endpoint")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required) - gRPC Endpoint"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"protoFilePath")," -  - gRPC Proto file that contains your protobuf schema One of: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"object"),": ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"file")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"load")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Object"),"): ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"defaults")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Boolean"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"includeDirs")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Array of String"),")"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"String")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"descriptorSetFilePath")," -  - Use a binary-encoded or JSON file descriptor set file One of: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"object"),": ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"file")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),", required)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"load")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Object"),"): ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"defaults")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Boolean"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"includeDirs")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Array of String"),")"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"String")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"serviceName")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),") - Your base service name\nUsed for naming only"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"packageName")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),") - Your base package name\nUsed for naming only"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"requestTimeout")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Int"),") - Request timeout in milliseconds\nDefault: 200000"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"credentialsSsl")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Object"),") - SSL Credentials: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"rootCA")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"certChain")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"privateKey")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"String"),")"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"useHTTPS")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Boolean"),") - Use https instead of http for gRPC connection"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"metaData")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"JSON"),") - MetaData"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"useReflection")," (type: ",Object(i.b)("inlineCode",{parentName:"li"},"Boolean"),") - Use gRPC reflection to automatically gather the connection")))}p.isMDXComponent=!0}}]);