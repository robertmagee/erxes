(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6612],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(r),d=o,b=h["".concat(u,".").concat(d)]||h[d]||p[d]||a;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3322:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var n=r(74034),o=r(79973),a=(r(67294),r(3905)),i={id:"contribute-to-codebase",title:"Contribute to codebase",sidebar_label:"Contribute to codebase"},s={unversionedId:"contribute/contribute-to-codebase",id:"contribute/contribute-to-codebase",isDocsHomePage:!1,title:"Contribute to codebase",description:"Contribute to codebase",source:"@site/docs/contribute/contribute-to-codebase.md",sourceDirName:"contribute",slug:"/contribute/contribute-to-codebase",permalink:"/contribute/contribute-to-codebase",editUrl:"https://github.com/erxes/erxes/edit/erxes-docs-blog/docs/docs/contribute/contribute-to-codebase.md",version:"current",lastUpdatedBy:"Nauren Batjargal",lastUpdatedAt:1659879336,formattedLastUpdatedAt:"8/7/2022",sidebar_label:"Contribute to codebase",frontMatter:{id:"contribute-to-codebase",title:"Contribute to codebase",sidebar_label:"Contribute to codebase"},sidebar:"docs",previous:{title:"Overview",permalink:"/contribute/overview"},next:{title:"Contribute to documentation",permalink:"/contribute/contribute-to-documentation"}},u=[{value:"Contribute to codebase",id:"contribute-to-codebase",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Issues before PRs",id:"issues-before-prs",children:[]},{value:"Workflow",id:"workflow",children:[]},{value:"Documentation",id:"documentation",children:[]},{value:"Release",id:"release",children:[]}],l={toc:u};function c(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"contribute-to-codebase"},"Contribute to codebase"),(0,a.kt)("p",null,"Thank you for considering contributing to erxes! This document will outline how to submit changes to this repository and which conventions to follow. If you are ever in doubt about anything, we encourage you to reach out by submitting an issue here or via ",(0,a.kt)("a",{href:"https://discord.com/invite/aaGzy3gQK5",target:"_blank"},"Discord"),"."),(0,a.kt)("p",null,"If you're contributing to our documentation, make sure to also check out ",(0,a.kt)("a",{href:"https://www.erxes.org/overview/deployment-overview",target:"_blank"},"the contribution guidelines on our documentation website.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You're familiar with GitHub Issues and Pull Requests"),(0,a.kt)("li",{parentName:"ul"},"You've read the ",(0,a.kt)("a",{href:"https://www.erxes.org/overview/deployment-overview",target:"_blank"},"docs"),"."),(0,a.kt)("li",{parentName:"ul"},"You've set up a test project with erxes")),(0,a.kt)("h2",{id:"issues-before-prs"},"Issues before PRs"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Before you start working on a change, please make sure there is an issue with what you will be working on. You can either find an ",(0,a.kt)("a",{href:"https://github.com/erxes/erxes/issues",target:"_blank"},"existing issue")," or ",(0,a.kt)("a",{href:"https://github.com/erxes/erxes/issues/new/choose",target:"_blank"},"open a new issue")," if none exists. Doing this makes sure that others can contribute with thoughts or suggest alternatives, ultimately making sure that we only add changes that make"),(0,a.kt)("li",{parentName:"ol"},"When you are ready to start working on a change, you should first ",(0,a.kt)("a",{href:"https://help.github.com/en/github/getting-started-with-github/fork-a-repo",target:"_blank"},"fork the erxes repo")," and ",(0,a.kt)("a",{href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository",target:"_blank"},"branch out")," from the develop branch."),(0,a.kt)("li",{parentName:"ol"},"Make your changes."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork",target:"_blank"},"Open a pull request towards the development branch in the erxes repo"),". Within a couple of days, erxes team members will review, comment, and eventually approve your PR.")),(0,a.kt)("h2",{id:"workflow"},"Workflow"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Branches")),(0,a.kt)("p",null,"All changes should be part of a branch and submitted as a pull request - your branches should be prefixed with one of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fix/ for bug fixes"),(0,a.kt)("li",{parentName:"ul"},"feat/ for features"),(0,a.kt)("li",{parentName:"ul"},"docs/ for documentation changes")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Commits")),(0,a.kt)("p",null,"Strive towards keeping your commits small and isolated - this helps the reviewer understand what is going on and makes it easier to process your requests."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pull Requests")),(0,a.kt)("p",null,"Once your changes are ready, you must submit your branch as a pull request. Your pull request should be opened against the development branch in the main erxes repo."),(0,a.kt)("p",null,"In your PR's description, you should follow the structure:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What - what changes are in this PR"),(0,a.kt)("li",{parentName:"ul"},"Why - why are these changes relevant"),(0,a.kt)("li",{parentName:"ul"},"How - how have the changes been implemented"),(0,a.kt)("li",{parentName:"ul"},"Testing - how have the changes been tested or how can the reviewer test the feature")),(0,a.kt)("p",null,"We highly encourage that you do a self-review prior to requesting a review. To do a self-review click the review button in the top right corner, go through your code and annotate your changes. This makes it easier for the reviewer to process your PR."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Merge Style")),(0,a.kt)("p",null,"All pull requests are squashed and merged."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Testing")),(0,a.kt)("p",null,"All PRs should include tests for the changes that are included. We have two types of tests that must be written:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Unit tests found under packages/",(0,a.kt)("em",{parentName:"li"},"/src/services/",(0,a.kt)("strong",{parentName:"em"},"tests")," and packages/"),"/src/api/routes/*/",(0,a.kt)("strong",{parentName:"li"},"tests")),(0,a.kt)("li",{parentName:"ul"},"Integration tests found in integration-tests/*/",(0,a.kt)("strong",{parentName:"li"},"tests"))),(0,a.kt)("h2",{id:"documentation"},"Documentation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We generally encourage to document your changes through comments in your code."),(0,a.kt)("li",{parentName:"ul"},"If you alter user-facing behavior, you must provide documentation for such changes."),(0,a.kt)("li",{parentName:"ul"},"All methods and endpoints should be documented using ",(0,a.kt)("a",{href:"https://jsdoc.app/",target:"_blank"},"JSDoc")," and ",(0,a.kt)("a",{href:"https://www.npmjs.com/package/swagger-inline",target:"_blank"},"swagger-inline"),".")),(0,a.kt)("h2",{id:"release"},"Release"),(0,a.kt)("p",null,"The erxes team will regularly create releases from the develop branch."))}c.isMDXComponent=!0}}]);