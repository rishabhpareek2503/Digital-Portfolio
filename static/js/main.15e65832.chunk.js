(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){},102:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),l=t(20),r=t.n(l),o=(t(80),t(30)),c=t(3),s=t(73),m=t(5),d=t(51),u=t(62),p=t(14),g=t(39),h=(t(57),t(33)),f={sidebarData:[{id:"menu-0",title:"Home",path:"/portfolio",icon:i.a.createElement(p.d,{size:35}),className:"nav-text"},{id:"menu-1",title:"Projects",path:"/projects",icon:i.a.createElement(p.e,{size:35}),className:"nav-text"},{id:"menu-2",title:"Blogs",path:"/blogs",icon:i.a.createElement(h.b,{size:35}),className:"nav-text"},{id:"menu-3",title:"Skills",path:"/skills",icon:i.a.createElement(p.a,{size:35}),className:"nav-text"}]},k=t(6),b=t.n(k),E=t(11),y=t(38),v=function(e){var a=e.propsData||{},t=a.isDarkModeActive,n=a.brightness,l=a.contrast,r=a.sepia,o=a.toggleHandler,c=a.handleBrightnessChange,s=a.handleContrastChange,m=a.handleSepiaChange;a.isDropdownOpen,a.toggleDropdown;return i.a.createElement("details",null,i.a.createElement("summary",null,i.a.createElement("h5",{style:{color:t?"white":"#fff",backgroundColor:t?"black":"inherit",fontFamily:"inherit",fontSize:"inherit"}},"Dark Mode")),i.a.createElement("div",{className:"darkmode-wrapper"},i.a.createElement("div",{className:"darkmode"},i.a.createElement("input",{type:"checkbox",className:"dark-checkbox",id:"dark-checkbox",onClick:o}),i.a.createElement("label",{htmlFor:"dark-checkbox",className:"dark-label"},i.a.createElement("i",{className:"fas fa-moon darkmode-moon"}),i.a.createElement("i",{className:"fas fa-sun darkmode-sun"}),i.a.createElement("div",{className:"dark-mode-ball"}))),i.a.createElement("div",{className:"options",style:{marginTop:"1rem"}},i.a.createElement("label",{htmlFor:"brightness",style:{color:t?"white":"#fff",backgroundColor:t?"black":"inherit",fontFamily:"inherit",fontSize:"inherit"}},"Brightness:"),i.a.createElement("input",{type:"range",id:"brightness",name:"brightness",min:"0",max:"200",value:n,onChange:c}),i.a.createElement("label",{htmlFor:"contrast",style:{color:t?"white":"#fff",backgroundColor:t?"black":"inherit",fontFamily:"inherit",fontSize:"inherit"}},"Contrast:"),i.a.createElement("input",{type:"range",id:"contrast",name:"contrast",min:"0",max:"200",value:l,onChange:s}),i.a.createElement("label",{htmlFor:"sepia",style:{color:t?"white":"#fff",backgroundColor:t?"black":"inherit",fontFamily:"inherit",fontSize:"inherit"}},"Sepia:"),i.a.createElement("input",{type:"range",id:"sepia",name:"sepia",min:"0",max:"100",value:r,onChange:m}))))};t(85);var N=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(!1),o=Object(m.a)(r,2),c=(o[0],o[1],Object(n.useState)(100)),s=Object(m.a)(c,2),d=s[0],u=s[1],p=Object(n.useState)(90),g=Object(m.a)(p,2),h=g[0],f=g[1],k=Object(n.useState)(10),N=Object(m.a)(k,2),w=N[0],x=N[1],S={toggleHandler:function(){var e=Object(E.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=6;break}return e.next=4,Object(y.enable)({brightness:d,contrast:h,sepia:w});case 4:e.next=7;break;case 6:Object(y.disable)();case 7:l(!t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error toggling dark mode:",e.t0);case 13:case"end":return e.stop()}},e,null,[[0,10]])}));return function(){return e.apply(this,arguments)}}(),handleBrightnessChange:function(e){u(parseInt(e.target.value,10))},handleContrastChange:function(e){f(parseInt(e.target.value,10))},handleSepiaChange:function(e){x(parseInt(e.target.value,10))},brightness:d,contrast:h,sepia:w};return Object(n.useEffect)(function(){t&&Object(y.enable)({brightness:d,contrast:h,sepia:w})},[d,h,w]),Object(n.useEffect)(function(){!function(){var e=Object(E.a)(b.a.mark(function e(){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(y.isEnabled)();case 3:a=e.sent,l(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error checking dark mode:",e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}}()()},[]),i.a.createElement(v,{propsData:S})},w=function(e){var a=(e||{}).onSelection;return i.a.createElement(g.a,null,f.sidebarData.map(function(e){return i.a.createElement(g.a.Item,{key:e.id},i.a.createElement(g.a.Link,{as:o.b,to:e.path,onClick:a},e.icon,i.a.createElement("span",null,e.title)))}),i.a.createElement(g.a.Item,null,i.a.createElement(N,null)))},x=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],l=a[1];return i.a.createElement(d.a,{className:"navbar",expand:"sm",expanded:t},i.a.createElement(u.a,{fluid:!0},i.a.createElement(d.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return l(!t&&"expanded")}},i.a.createElement(p.f,{className:"toggle-icon"})),i.a.createElement(d.a.Collapse,{id:"responsive-navbar-nav"},i.a.createElement(w,{onSelection:function(){l(!1)}}))))},S=t(104),_=t(105),j=t(63),z=t.n(j),A=function(e){return i.a.createElement(z.a,{options:{strings:e.titles,autoStart:!0,loop:!0,deleteSpeed:80}})},O=function(e){var a=(e||{}).about||{},t=a.start,n=a.exit;return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"about-card",style:{backgroundColor:"#263238"}},i.a.createElement("div",{className:"card-header"},i.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),i.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"150%",backgroundColor:"#F6F6F6",color:"#8e8d8a",padding:"2rem"}},t,i.a.createElement("br",null),n)))},C=t(55),P=(t(93),t(64)),I=(t(94),function(e){var a=e||{},t=a.tags,n=a.id;return i.a.createElement("div",{className:"tags"},t&&t.map(function(e,a){return i.a.createElement(P.a,{pill:!0,className:"tag mr-2 mb-2",key:n+a,bg:"secondary"},e)}))}),L=(t(95),function(e){var a=(e||{}).items;return i.a.createElement(C.VerticalTimeline,null,a.map(function(e){var a=e||{},t=a.id,n=a.date,l=a.icon,r=a.title,o=a.company,c=a.description,s=a.tags;return i.a.createElement(C.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:n,icon:l,key:t},i.a.createElement("h2",{className:"vertical-timeline-element-title"},i.a.createElement("strong",null,r)),i.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},o),i.a.createElement("p",{className:"vertical-timeline-element-description"},c),i.a.createElement(I,{id:t,tags:s}))}))}),D=t(65),B=t(66),M=t(36),F=t(29),T={greeting:i.a.createElement("h1",{className:"heading"},"Hi! I'm ",i.a.createElement("strong",{className:"main-name"}," Rodrigo Arenas")),titles:["A Data Scientist","A Machine Learning Specialist","An Open Source Contributor","A Backend Developer","A Colombian"],about:{start:"I've been working for over seven years on data science projects. I'm excited by learning new things, contributing to the data science community, and spreading the word of data!",exit:"I'm fluent at Python, SQL databases, BI tools, and more, with a deep interest in machine learning."},workTimeline:[{id:"work-4",title:"Sr ML Engineer",company:"EPAM",description:"Working to build scalable ML solutions, LLM's, and RAG architectures.",date:"2023-Present",icon:i.a.createElement(F.b,null),tags:["ml","mlops","python","azure","llm","automl"]},{id:"work-3",title:"Sr Data Scientist",company:"Globant",description:"Build AutoML models and make them available to non-technical users from a graphical interface.",date:"2021-2023",icon:i.a.createElement(D.a,null),tags:["ml","automl","python","docker","redshift","superset"]},{id:"work-2",title:"BI Manager",company:"Rappi",description:"Leading a team of analysts and data scientists to execute different projects, including the construction of ETLs, data lakes, data warehouses, and machine learning models.",date:"2019-2021",icon:i.a.createElement(M.c,null),tags:["ml","airflow","python","docker","snowflake","postgres","azure"]},{id:"work-1",title:"CRM Analytics Coordinator",company:"Avianca",description:"Tech leader of a BI, Data Science and DBA team. Build forecast models, data warehouse and Power BI dashboards.",date:"2018-2019",icon:i.a.createElement(B.a,null),tags:["ml","mssql","python","docker","pbi","azure"]},{id:"work-0",title:"BI Analyst",company:"Onelink BPO",description:"Build interactive dashboards, ETLs and SQL queries to show the company KPIs.",date:"2016-2018",icon:i.a.createElement(h.a,null),tags:["python","mssql","pbi","excel"]}]},G=(t(96),function(){return i.a.createElement("section",null,i.a.createElement(u.a,{fluid:!0,className:"home-content",id:"home"},i.a.createElement(S.a,null,i.a.createElement(_.a,{className:"home-header",style:{textAlign:"center"}},i.a.createElement("div",null,T.greeting),i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement(A,{titles:T.titles})),i.a.createElement("div",null,i.a.createElement(O,{about:T.about}))))),i.a.createElement(u.a,{fluid:!0,className:"resume-content",id:"resume"},i.a.createElement("div",{className:"col-md-8 mx-auto"},i.a.createElement(L,{items:T.workTimeline}))))}),R=(t(40),function(e){return i.a.createElement("ul",{className:"card__footer"},e.item.links.map(function(a){return i.a.createElement("li",{key:e.item.id+a.name,title:a.name},i.a.createElement("a",{className:"card__btn",href:a.url,target:e.item.target,rel:"noopener noreferrer"},a.icon))}))}),K=function(e){return i.a.createElement("div",{className:"card",key:e.item.id},i.a.createElement("a",{style:{display:"flex"},href:e.item.links[0].url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("div",{style:{backgroundImage:"url('"+e.item.image+"')"},className:"card__img",alt:e.item.title})),i.a.createElement("div",{className:"card__body"},i.a.createElement("h2",{className:"card__title"},i.a.createElement("strong",null,e.item.title)),i.a.createElement("p",{className:"card__description"},e.item.description),i.a.createElement("hr",{className:"card__line"}),i.a.createElement(R,{item:e.item})))},U=t(50),H=t(54),V=t.n(H),q=t(67),Q=t.n(q),Y=t(68),Z=t.n(Y),J=t(69),W=t.n(J),X=[{id:"project-5",title:"Sklearn Genetic Opt",links:[{name:"repo",url:"https://github.com/rodrigo-arenas/Sklearn-genetic-opt",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/rodrigo-arenas/Sklearn-genetic-opt/fork",icon:i.a.createElement(F.a,null)},{name:"subscription",url:"https://github.com/rodrigo-arenas/Sklearn-genetic-opt/subscription",icon:i.a.createElement(p.b,null)},{name:"docs",url:"https://sklearn-genetic-opt.readthedocs.io/en/stable/",icon:i.a.createElement(U.a,null)}],image:V.a,description:"scikit-learn models hyperparameters tuning and feature selection, using evolutionary algorithms.",target:"_blank"},{id:"project-4",title:"Graphs Embeddings",links:[{name:"repo",url:"https://github.com/rodrigo-arenas/Graph-Embeddings",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/rodrigo-arenas/Graph-Embeddings/fork",icon:i.a.createElement(F.a,null)},{name:"subscription",url:"https://github.com/rodrigo-arenas/Graph-Embeddings/subscription",icon:i.a.createElement(p.b,null)},{name:"docs",url:"https://graph-embeddings.readthedocs.io/",icon:i.a.createElement(U.a,null)}],image:Q.a,description:"Graph embeddings for downstream tasks.",target:"_blank"},{id:"project-3",title:"Kafkaml Anomalies",links:[{name:"repo",url:"https://github.com/rodrigo-arenas/kafkaml-anomaly-detection",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/fork",icon:i.a.createElement(F.a,null)},{name:"subscription",url:"https://github.com/rodrigo-arenas/kafkaml-anomaly-detection/subscription",icon:i.a.createElement(p.b,null)}],image:Z.a,description:"Project for real-time anomaly detection using kafka and python.",target:"_blank"},{id:"project-2",title:"Pyworkforce",links:[{name:"repo",url:"https://github.com/rodrigo-arenas/pyworkforce",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/rodrigo-arenas/pyworkforce/fork",icon:i.a.createElement(F.a,null)},{name:"subscription",url:"https://github.com/rodrigo-arenas/pyworkforce/subscription",icon:i.a.createElement(p.b,null)},{name:"docs",url:"https://pyworkforce.readthedocs.io/en/stable/",icon:i.a.createElement(U.a,null)}],image:"https://miro.medium.com/max/1400/1*UDnhOFK35IbAPx15wkMgVg.jpeg",description:"Standard tools for workforce management, queuing, scheduling, rostering and optimization problems.",target:"_blank"},{id:"project-1",title:"Portfolio Web",links:[{name:"repo",url:"https://github.com/rodrigo-arenas/portfolio",icon:i.a.createElement(p.c,null)},{name:"fork",url:"https://github.com/rodrigo-arenas/portfolio/fork",icon:i.a.createElement(F.a,null)},{name:"subscription",url:"https://github.com/rodrigo-arenas/portfolio/subscription",icon:i.a.createElement(p.b,null)}],image:W.a,description:"Source code of my current portfolio web page as data scientist.",target:"_blank"}],$=function(){return i.a.createElement("div",{className:"wrapper"},X.map(function(e){return i.a.createElement(K,{item:e})}))},ee=t(56),ae=(t(58),function(e){return i.a.createElement("ul",{className:"skill-icons"},e.config.map(function(e,a){return i.a.createElement("li",{className:e.className,key:e.id},e.icon,i.a.createElement("p",{className:e.className+"-text"},e.text))}))}),te=t(13),ne=t(70),ie={mainSkills:[{id:"skills-0",className:"skill-icon",icon:i.a.createElement(te.l,{size:50}),text:"Python"},{id:"skills-1",className:"skill-icon",icon:i.a.createElement(te.j,{size:50}),text:"Postgres"},{id:"skills-2",className:"skill-icon",icon:i.a.createElement(te.i,{size:50}),text:"MSSQL"},{id:"skills-3",className:"skill-icon",icon:i.a.createElement(te.d,{size:50}),text:"Docker"},{id:"skills-4",className:"skill-icon",icon:i.a.createElement(te.h,{size:50}),text:"Azure"},{id:"skills-5",className:"skill-icon",icon:i.a.createElement(M.a,{size:50}),text:"Git"}],complementarySkills:[{id:"skills-5",className:"skill-icon",icon:i.a.createElement(ne.a,{size:50}),text:"MySQL"},{id:"skills-6",className:"skill-icon",icon:i.a.createElement(te.n,{size:50}),text:"Redis"},{id:"skills-7",className:"skill-icon",icon:i.a.createElement(te.p,{size:50}),text:"Bash"},{id:"skills-8",className:"skill-icon",icon:i.a.createElement(te.o,{size:50}),text:"Snowflake"},{id:"skills-9",className:"skill-icon",icon:i.a.createElement(te.a,{size:50}),text:"Airflow"},{id:"skills-10",className:"skill-icon",icon:i.a.createElement(te.f,{size:50}),text:"JS"},{id:"skills-11",className:"skill-icon",icon:i.a.createElement(te.c,{size:50}),text:"CSS 3"},{id:"skills-12",className:"skill-icon",icon:i.a.createElement(te.e,{size:50}),text:"HTML 5"},{id:"skills-13",className:"skill-icon",icon:i.a.createElement(te.m,{size:50}),text:"React"},{id:"skills-14",className:"skill-icon",icon:i.a.createElement(te.b,{size:50}),text:"Kafka"},{id:"skills-15",className:"skill-icon",icon:i.a.createElement(te.k,{size:50}),text:"Power BI"}]},le=function(){return i.a.createElement("section",{id:"skills"},i.a.createElement("div",null,i.a.createElement("div",{className:"skills-div"},i.a.createElement("h1",{className:"main-skills-h1"},i.a.createElement("span",{className:"main-skills"},i.a.createElement("strong",null,"Main Skills & Tools"))),i.a.createElement(ee.a,{effect:"bounce"},i.a.createElement("div",{className:"main-skills"},i.a.createElement(ae,{config:ie.mainSkills}))),i.a.createElement("h1",{className:"complementary-skills-h1"},i.a.createElement("span",{className:"complementary-skills"},i.a.createElement("strong",null,"Complementary Skills & Tools"))),i.a.createElement(ee.a,{effect:"bounce"},i.a.createElement("div",{className:"complementary-skills"},i.a.createElement(ae,{config:ie.complementarySkills}))))))},re=t(72),oe=t.n(re),ce=[{id:"blog-8",title:"How to Solve Scheduling Problems in Python",links:[{name:"article",url:"https://towardsdatascience.com/how-to-solve-scheduling-problems-in-python-36a9af8de451",icon:i.a.createElement(te.g,null)}],image:"https://miro.medium.com/max/700/1*VKIGzmJrYBzcPlB6USx8OA.jpeg",description:"Use linear programming to minimize the difference between required and scheduled resources.",target:"_blank"},{id:"blog-7",title:"Adaptive Parameters Methods for Machine Learning",links:[{name:"article",url:"https://towardsdatascience.com/adaptive-parameters-methods-for-machine-learning-6f7101a9a71",icon:i.a.createElement(te.g,null)}],image:"https://miro.medium.com/max/700/1*DeZYSLcMdF58BeqemGhUhg.jpeg",description:"Let's explore some methods to adapt your parameters over time.",target:"_blank"},{id:"blog-6",title:"Evolutionary Feature Selection for Machine Learning",links:[{name:"article",url:"https://towardsdatascience.com/evolutionary-feature-selection-for-machine-learning-7f61af2a8c12",icon:i.a.createElement(te.g,null)}],image:"https://miro.medium.com/max/1400/1*hgFe2YFnwzt_K2TfE7aSrQ.jpeg",description:"Learn how to make feature selection for machine learning algorithms using evolutionary models.",target:"_blank"},{id:"blog-5",title:"Real-time anomaly detection with Apache Kafka and Python",links:[{name:"article",url:"https://towardsdatascience.com/real-time-anomaly-detection-with-apache-kafka-and-python-3a40281c01c9",icon:i.a.createElement(te.g,null)},{name:"repo",url:"https://github.com/rodrigo-arenas/kafkaml-anomaly-detection",icon:i.a.createElement(p.c,null)}],image:"https://miro.medium.com/max/1400/1*Xem1rbG0Fa8DAhtez7mvsA.jpeg",description:"Learn how to make predictions over streaming data coming from Kafka using Python.",target:"_blank"},{id:"blog-4",title:"Serve a machine learning model using Sklearn, FastAPI, and Docker",links:[{name:"article",url:"https://medium.com/analytics-vidhya/serve-a-machine-learning-model-using-sklearn-fastapi-and-docker-85aabf96729b",icon:i.a.createElement(te.g,null)},{name:"repo",url:"https://github.com/rodrigo-arenas/fast-ml-deploy",icon:i.a.createElement(p.c,null)}],image:oe.a,description:"Get your model machine learning model to production as a containerized API.",target:"_blank"},{id:"blog-3",title:"Are You Still Using Grid Search for Hyperparameters Optimization?",links:[{name:"article",url:"https://towardsdatascience.com/hyperparameters-tuning-from-grid-search-to-optimization-a09853e4e9b8",icon:i.a.createElement(te.g,null)}],image:"https://miro.medium.com/max/1400/0*ZYC4nQw8g2dv7GCp",description:"Let's discuss the ideas behind how to search in a smart fashion the hyperparameters for your machine learning models.",target:"_blank"},{id:"blog-2",title:"Tune Your Scikit-learn Model Using Evolutionary Algorithms",links:[{name:"article",url:"https://towardsdatascience.com/tune-your-scikit-learn-model-using-evolutionary-algorithms-30538248ac16",icon:i.a.createElement(te.g,null)}],image:"https://miro.medium.com/max/1400/1*gmNunOZ86_URtnzuOA7oNg.jpeg",description:"Scikit-learn hyperparameters tuning with evolutionary algorithms and cross-validation.",target:"_blank"},{id:"blog-1",title:"Manage your machine learning life cycle with MLflow in Python",links:[{name:"article",url:"https://medium.com/analytics-vidhya/manage-your-machine-learning-lifecycle-with-mlflow-in-python-d678d5f3c682",icon:i.a.createElement(te.g,null)},{name:"repo",url:"https://github.com/rodrigo-arenas/mlflow-basics",icon:i.a.createElement(p.c,null)}],image:"https://miro.medium.com/max/1400/1*FhKrMpcUPeZxNsZpKNv4BA.png",description:"Enable collaboration across data scientists; gain control over different models versions, multiple experiments within the same problem, and models management and deployment.",target:"_blank"},{id:"blog-0",title:"Workforce planning optimization using Python",links:[{name:"article",url:"https://towardsdatascience.com/workforce-planning-optimization-using-python-69af0ef9011a",icon:i.a.createElement(te.g,null)}],image:"https://miro.medium.com/max/1400/1*UDnhOFK35IbAPx15wkMgVg.jpeg",description:"Learn how to find the optimal number of positions needed to manage incoming traffic.",target:"_blank"}],se=function(){return i.a.createElement("div",{className:"wrapper"},ce.map(function(e){return i.a.createElement(K,{item:e})}))};var me=function(){var e=Object(c.m)().pathname;return Object(n.useEffect)(function(){window.scrollTo(0,0)},[e]),null},de={icons:[{id:"footer-0",url:"https://github.com/rodrigo-arenas",className:"social-icon",target:"_blank",icon:i.a.createElement(p.c,{size:50})},{id:"footer-1",url:"https://linkedin.com/in/rodrigo-arenas-gomez",className:"social-icon",target:"_blank",icon:i.a.createElement(M.b,{size:50})},{id:"footer-2",url:"https://rodrigo-arenas.medium.com",className:"social-icon",target:"_blank",icon:i.a.createElement(h.b,{size:50})}]},ue=(t(60),function(){return i.a.createElement("div",{className:"social-icons"},de.icons.map(function(e){return i.a.createElement("a",{href:e.url,className:e.className,key:e.id,style:{color:"#f5f5f5"},target:e.target,rel:"noopener noreferrer"},e.icon)}))}),pe=function(){return i.a.createElement(u.a,{fluid:!0,className:"footer"},i.a.createElement(S.a,null,i.a.createElement(_.a,{className:"footer-body"},i.a.createElement(ue,null))))};t(100),t(101);"undefined"!==typeof Object({NODE_ENV:"production",PUBLIC_URL:"https//rishabhpareek2503.github.io/Digital-Portfolio"}).REACT_APP_TRACKING_ID&&s.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"https//rishabhpareek2503.github.io/Digital-Portfolio"}).REACT_APP_TRACKING_ID);var ge=function(){return i.a.createElement(o.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(x,null),i.a.createElement("br",null),i.a.createElement(me,null),i.a.createElement(c.c,null,i.a.createElement(c.a,{path:"/",element:i.a.createElement(G,null)}),i.a.createElement(c.a,{path:"/projects",element:i.a.createElement($,null)}),i.a.createElement(c.a,{path:"/blogs",element:i.a.createElement(se,null)}),i.a.createElement(c.a,{path:"/skills",element:i.a.createElement(le,null)})),i.a.createElement(pe,null)))};r.a.createRoot(document.getElementById("root")).render(i.a.createElement(o.a,{basename:"https//rishabhpareek2503.github.io/Digital-Portfolio"},i.a.createElement(ge,null)))},40:function(e,a,t){},54:function(e,a,t){e.exports=t.p+"static/media/sklearn_genetic_opt.23273bc8.png"},57:function(e,a,t){},58:function(e,a,t){},60:function(e,a,t){},67:function(e,a,t){e.exports=t.p+"static/media/graph_embeddings.fed0850a.png"},68:function(e,a,t){e.exports=t.p+"static/media/kafkaml.9c0f9867.png"},69:function(e,a,t){e.exports=t.p+"static/media/portfolio.4b632d51.png"},72:function(e,a,t){e.exports=t.p+"static/media/fastapi_sklearn.f7d742fc.png"},75:function(e,a,t){e.exports=t(102)},80:function(e,a,t){},85:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){}},[[75,1,2]]]);
//# sourceMappingURL=main.15e65832.chunk.js.map