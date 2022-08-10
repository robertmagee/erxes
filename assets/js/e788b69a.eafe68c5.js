(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5632],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return c},kt:function(){return m}});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(o),m=n,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return o?a.createElement(g,s(s({ref:t},c),{},{components:o})):a.createElement(g,s({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<r;l++)s[l]=o[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7391:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p},default:function(){return c}});var a=o(74034),n=o(79973),r=(o(67294),o(3905)),s={id:"facebook",title:"Facebook integration guide"},i={unversionedId:"developer/integrations-overview/facebook",id:"developer/integrations-overview/facebook",isDocsHomePage:!1,title:"Facebook integration guide",description:"Erxes app can be integrated with facebook developer API and that means we can receive our Facebook pages' inbox messages and posts directly to our erxes app's inbox. With the help of Facebook developer API we have many more possibilities, like receiving notifications about page comment, page post feed etc. There is an active development process going on this subject.",source:"@site/docs/developer/integrations-overview/facebook.md",sourceDirName:"developer/integrations-overview",slug:"/developer/integrations-overview/facebook",permalink:"/developer/integrations-overview/facebook",editUrl:"https://github.com/erxes/erxes/edit/erxes-docs-blog/docs/docs/developer/integrations-overview/facebook.md",version:"current",lastUpdatedBy:"enkhtuvshin0513",lastUpdatedAt:1621923369,formattedLastUpdatedAt:"5/25/2021",frontMatter:{id:"facebook",title:"Facebook integration guide"},sidebar:"docs",previous:{title:"Migration",permalink:"/administrator/migration"},next:{title:"Gmail integration guide",permalink:"/developer/integrations-overview/gmail"}},p=[],l={toc:p};function c(e){var t=e.components,o=(0,n.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Erxes app can be integrated with facebook developer API and that means we can receive our Facebook pages' inbox messages and posts directly to our erxes app's inbox. With the help of Facebook developer API we have many more possibilities, like receiving notifications about page comment, page post feed etc. There is an active development process going on this subject."),(0,r.kt)("h4",{id:"creating-a-facebook-app"},"Creating a Facebook App"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The first step is to go to ",(0,r.kt)("a",{parentName:"p",href:"https://developers.facebook.com"},"developers.facebook.com")," to create an App"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://erxes-docs.s3-us-west-2.amazonaws.com/facebook/facebook-1.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the various options that are given, please choose \u201csomething else\u201d."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://erxes-docs.s3-us-west-2.amazonaws.com/facebook/facebook-2.png",alt:null}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After creating the App, please go to Settings and choose the Basic option. On this page everything has to be filled such as the display name, app domains, privacy policy URLS. Moreover, please keep in mind that your business profile has to be connected in order to complete the business verification process as well. By completing this step, you\u2019ll be able to use Facebook Application."))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://erxes-docs.s3-us-west-2.amazonaws.com/facebook/facebook-3.png",alt:null})),(0,r.kt)("h4",{id:"connecting-erxes-with-your-facebook"},"Connecting Erxes with your Facebook"),(0,r.kt)("p",null,"Please go to Settings > System Configuration > Integrations configurations in order to integrate your Facebook on your erxes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'FACEBOOK_APP_ID="your faceboook application\'s app id"Note: Facebook App Id can be found on the basic page on your Facebook App.\nFACEBOOK_APP_SECRET="your faceboook application\'s secret key" Note: Facebook Secret can be found on the basic page on your Facebook App.\nFACEBOOK_VERIFY_TOKEN="insert facebook application verify token" Note: In terms of Facebook App Token, you\u2019ll receive it once you generate the token\nFACEBOOK PERMISSIONS="insert facebook application permissions" Note: You\u2019ll find the Facebook Permissions from your Facebook application review section and it\u2019s specifically called \u201cmy permissions and features\n\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://erxes-docs.s3-us-west-2.amazonaws.com/facebook/facebook-5.png",alt:null})),(0,r.kt)("h4",{id:"the-configurations-that-needs-to-be-done-on-your-facebook-applications-are-"},"The configurations that needs to be done on your Facebook Applications are :"),(0,r.kt)("p",null,"In order to integrate your Facebook application with your erxes there are three products that need to be used which are the Messenger, Facebook Login, and Webhook."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://erxes-docs.s3-us-west-2.amazonaws.com/facebook/facebook-4.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. ",(0,r.kt)("em",{parentName:"strong"},"Facebook login:"))),(0,r.kt)("p",null,"In order to adjust this product in a section called Valid OAuth Redirect URLs, the url of your Facebook login has to be copied following your erxes login. For examplem, it should look like this"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Valid OAuth Redirect URLs="yourerxesintegrationsdomain/fblogin"\n')),(0,r.kt)("p",null,"Moreover, in detail it should look like this : https://exampledomain/integration/fblogin"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://erxes-docs.s3-us-west-2.amazonaws.com/facebook/facebook-7.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. ",(0,r.kt)("em",{parentName:"strong"},"Messenger:"))),(0,r.kt)("p",null,"The Messenger used for receiving messages and responding to messages as well.\nIn order to activate the Messenger the callback url has to be adjusted.\nIn the CallBack URL section : /facebook/receive has to be added following your integration URL.\nIn the token section, the facebook token you\u2019ve generated has to be added which will be found on the System Configuration section of your erxes."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://erxes-docs.s3-us-west-2.amazonaws.com/facebook/facebook-10.png",alt:null})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Callback Url="https://yourintegrationdomain/facebook/recieve"\nVerify Token="your generated token (FACEBOOK APP TOKEN)"\n\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://erxes-docs.s3-us-west-2.amazonaws.com/facebook/facebook-11.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. ",(0,r.kt)("em",{parentName:"strong"},"Webhook"))),(0,r.kt)("p",null,"The role of the Webhook is to receive posts and comments. In order to adjust the Webhook, select the Page and choose to fill the subscription form."),(0,r.kt)("p",null,"In order to fill the edit subscription form there are few steps that need to be made. First of all, in the CallBack Url Box please write /facebook/receive. In the token box, the token should be copied that you\u2019ve added in the system configuration on your erxes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Callback Url="https://yourintegrationdomain/facebook/recieve"\nVerify Token="your generated token (FACEBOOK APP TOKEN)"\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://erxes-docs.s3-us-west-2.amazonaws.com/facebook/facebook-13.png",alt:null})),(0,r.kt)("h4",{id:"the-permissions-that-needs-to-be-done-on-your-facebook-applications-are-"},"The permissions that needs to be done on your Facebook Applications are :"),(0,r.kt)("h5",{id:"here-is-the-example-of-how-to-get-permissions"},(0,r.kt)("a",{parentName:"h5",href:"https://developers.facebook.com/docs/app-review/resources/sample-submissions/messenger-platform/"},"Here is the example of how to get permissions")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"For messenger:"))),(0,r.kt)("p",null,"There are two kinds of Facebook Permissions which are required. For example, the first one is using the Facebook Messenger integration. Please allow these permissions for Facebook Messenger Integration :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"pages_messaging")),(0,r.kt)("p",null,"Enables your app to send and receive messages using a Facebook Page."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"pages_show_list")),(0,r.kt)("p",null,"The pages_show_list permission allows your app to access the list of Pages a person manages."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"For post & comment: "))),(0,r.kt)("p",null,"The second permission is used for receiving posts which is called Facebook Post Integration. If you want to use the Facebook Post Integration, please allow these permissions :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"pages_read_engagement")),(0,r.kt)("p",null,"The pages_read_engagement permission allows your app the ability to read content (posts, photos, videos, events) posted by the Page, read followers data including name, PSID, and profile picture, and read metadata about the Page. You can use this permission if you need it to help the Page Admin administer and manage the Page."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"pages_manage_metadata")),(0,r.kt)("p",null,"The pages_manage_metadata permission allows your app the ability to subscribe and receive web hooks about activity on the Page, and to update settings on the Page. You can use this permission if you need it to help the Page Admin administer and manage the Page."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"pages_read_user_content")),(0,r.kt)("p",null,"The pages_read_user_content permission allows your app the ability to read user generated content on the Page, such as posts, comments and ratings by users or other Pages. It also allows your app to read posts that the Page is tagged in. You can use this permission to read users and other Page's content posted on the Page if you need it to help manage the Page. You can also use pages_read_user_content to delete comments posted by users on the Page."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"pages_manage_engagement")),(0,r.kt)("p",null,"The pages_manage_engagement permission allows your app the ability to create, edit and delete comments posted by the Page. If you have access to pages_read_user_content, you can also use pages_manage_engagement to delete comments posted other Pages. It also allows your app the ability to create, edit, and delete your own Page's likes to Page content. You can use this permission if you need it to help manage and moderate content on the Page."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"pages_show_list")),(0,r.kt)("p",null,"The pages_show_list permission allows your app to access the list of Pages a person manages."))}c.isMDXComponent=!0}}]);