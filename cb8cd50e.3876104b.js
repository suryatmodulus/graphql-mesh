(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),i=(n(0),n(203)),o={id:"basic-example",title:"Basic Usage",sidebar_label:"3. Basic Usage"},c={id:"getting-started/basic-example",title:"Basic Usage",description:"To get started with a simple Mesh, create a GraphQL Mesh configuration file - .meshrc.yaml, under your project root, and fill in your sources, for example:",source:"@site/docs/getting-started/basic-example.md",permalink:"/docs/getting-started/basic-example",editUrl:"https://github.com/urigo/graphql-mesh/edit/master/website/docs/getting-started/basic-example.md",sidebar_label:"3. Basic Usage",sidebar:"sidebar",previous:{title:"Installation",permalink:"/docs/getting-started/installation"},next:{title:"Mesh Transforms",permalink:"/docs/getting-started/mesh-transforms"}},s=[{value:"Try your new API",id:"try-your-new-api",children:[]},{value:"Consuming Mesh Schema in code",id:"consuming-mesh-schema-in-code",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"To get started with a simple Mesh, create a GraphQL Mesh configuration file - ",Object(i.b)("inlineCode",{parentName:"p"},".meshrc.yaml"),", under your project root, and fill in your sources, for example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"sources:\n  - name: Wiki\n    handler:\n      openapi:\n        source: https://api.apis.guru/v2/specs/wikimedia.org/1.0.0/swagger.yaml\n")),Object(i.b)("p",null,"This demo will use the public API pf Wikipedia, which uses ",Object(i.b)("inlineCode",{parentName:"p"},"openapi")," spec, so we'll need to make sure we have ",Object(i.b)("inlineCode",{parentName:"p"},"@graphql-mesh/openapi")," handler installed as well:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn add graphql @graphql-mesh/openapi\n")),Object(i.b)("h3",{id:"try-your-new-api"},"Try your new API"),Object(i.b)("p",null,"GraphQL Mesh comes with a built in GraphiQL interface, so it means that you can try your newly-created GraphQL before writing any line of code. All you need to get started is the configuration file. "),Object(i.b)("p",null,"To test your new GraphQL API based on your API specs, you can run:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yarn graphql-mesh serve\n")),Object(i.b)("p",null,"This will serve a GraphiQL interface with your schema, so you'll be able to test it right away, before intergrating it to your application, you can try to run a test query."),Object(i.b)("p",null,"Open your browser in ",Object(i.b)("inlineCode",{parentName:"p"},"http://localhost:4000")," to start using it."),Object(i.b)("p",null,"For example, this following will fetch all page views for Wikipedia.org on the past month:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'query wikipediaMetrics {\n  getMetricsPageviewsAggregateProjectAccessAgentGranularityStartEnd(\n    access: ALL_ACCESS\n    agent: USER\n    start: "20200101"\n    end: "20200226"\n    project: "en.wikipedia.org"\n    granularity: DAILY\n  ) {\n    items {\n      views\n    }\n  }\n}\n')),Object(i.b)("p",null,"You can give it a try and run it directly in your browser."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can find the complete example ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Urigo/graphql-mesh/tree/master/examples/javascript-wiki"}),"here"))),Object(i.b)("h3",{id:"consuming-mesh-schema-in-code"},"Consuming Mesh Schema in code"),Object(i.b)("p",null,"After you have tested your new API, you can use it directly in your app in order to fetch data. "),Object(i.b)("p",null,"You can use the Mesh ",Object(i.b)("inlineCode",{parentName:"p"},"GraphQLScehma")," instance to query your data from your application code by using ",Object(i.b)("inlineCode",{parentName:"p"},"getMesh")," with your configuration object. "),Object(i.b)("p",null,"Start by load and parsing your configuration file, and pass it to ",Object(i.b)("inlineCode",{parentName:"p"},"getMesh"),", this will return for your a modified version of GraphQL's ",Object(i.b)("inlineCode",{parentName:"p"},"execute"),", so you can use it directly to fetch your data:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'const { getMesh, findAndParseConfig } = require(\'@graphql-mesh/runtime\');\n\nasync function test() {\n  // This will load the config file from the default location (process.cwd)\n  const meshConfig = await findAndParseConfig();\n  const { execute } = await getMesh(meshConfig);\n\n  // Use `execute` to run a query directly and fetch data from your APIs\n  const { data, errors } = await execute(/* GraphQL */ `\n    query wikipediaMetrics {\n      getMetricsPageviewsAggregateProjectAccessAgentGranularityStartEnd(\n        access: ALL_ACCESS\n        agent: USER\n        start: "20200101"\n        end: "20200226"\n        project: "en.wikipedia.org"\n        granularity: MONTHLY\n      ) {\n        items {\n          views\n        }\n      }\n    }\n  `);\n}\n')))}p.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,c({ref:t},l,{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);