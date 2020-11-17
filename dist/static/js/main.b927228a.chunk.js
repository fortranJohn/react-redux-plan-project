(this["webpackJsonpnew-project-2"]=this["webpackJsonpnew-project-2"]||[]).push([[0],{213:function(e,t,a){e.exports=a(408)},218:function(e,t,a){},401:function(e,t,a){},408:function(e,t,a){"use strict";a.r(t),a.d(t,"store",(function(){return M}));var n=a(8),r=a(0),c=a.n(r),i=a(86),o=a.n(i),l=(a(218),a(13)),s={authError:null},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(n.a)(Object(n.a)({},e),{},{authError:"Login Failed"});case"LOGIN_SUCCESS":return console.log("Login success"),Object(n.a)(Object(n.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return console.log("Signout Success"),e;case"SIGNUP_SUCCESS":return console.log("User Has been signed up successfully"),Object(n.a)(Object(n.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(n.a)(Object(n.a)({},e),{},{authError:t.err.message});default:return e}},m={projects:[{id:"1",title:"help me cook",content:"give me a very nice African dish"},{id:"2",title:"Design the front page ",content:"create a very nice looking landing page for the ecommerce website"},{id:"3",title:"Walk the old man",content:"Lets do some exercise today and give the lads some nrun for their money"}]},d=a(16),p=a(88),h=Object(l.c)({auth:u,project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("Created Project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("Created Project error",t.err),e;default:return e}},firebase:d.firebaseReducer,firestore:p.firestoreReducer}),f=a(6),E=a(3),g=(a(401),a(5)),b=Object(g.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})}))}))}}}))((function(e){return c.a.createElement("ul",{className:"right"},c.a.createElement("li",null,c.a.createElement(f.c,{to:"/create-project"},"New Project")),c.a.createElement("li",null,c.a.createElement("a",{onClick:e.signOut},"Log Out")),c.a.createElement("li",null,c.a.createElement(f.c,{to:"/",className:"btn btn-floating pink lighten-1"},e.profile.initials)))})),v=function(){return c.a.createElement("ul",{className:"right"},c.a.createElement("li",null,c.a.createElement(f.c,{to:"/signup"},"Sign Up")),c.a.createElement("li",null,c.a.createElement(f.c,{to:"/signin"},"Login")))},j=Object(g.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,a=e.profile,n=t.uid?c.a.createElement(b,{profile:a}):c.a.createElement(v,null);return c.a.createElement("nav",{className:"nav-wrapper grey darken-3"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{style:{display:"flex",verticalAlign:"center"}},c.a.createElement(f.b,{to:"/",className:"brand-logo left "},"TopHub")),t.isLoaded&&n))})),N=a(26),O=a(27),y=a(29),S=a(28),w=a(47),C=a.n(w),R=function(e){var t=e.notifications;return c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"card z-depth-0"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"},"Notifications"),c.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement("span",{className:"pink-text"},e.user),c.a.createElement("span",null,e.content),c.a.createElement("div",{className:"grey-text note-date"},C()(e.time.toDate()).fromNow()))}))))))},k=function(e){var t=e.project;return c.a.createElement("div",{className:"card z-depth-0 project-summary"},c.a.createElement("div",{className:"card-content grey-text text-darken-3"},c.a.createElement("span",{className:"card-title"},t.title),c.a.createElement("p",null,t.content),c.a.createElement("p",{className:"grey-text"},"Posted By ",t.authorFirstName," ",t.authorLastName),c.a.createElement("p",{className:"grey-text"},C()(t.createdAt.toDate()).calendar())))},I=function(e){var t=e.projects;return c.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return c.a.createElement(f.b,{to:"/projects/"+e.id,key:e.id},c.a.createElement(k,{project:e}))})))},P=function(e){Object(y.a)(a,e);var t=Object(S.a)(a);function a(){return Object(N.a)(this,a),t.apply(this,arguments)}return Object(O.a)(a,[{key:"render",value:function(){console.log(this.props);var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?c.a.createElement("div",{className:"dashboard container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col s12 m6"},c.a.createElement(I,{projects:t})),c.a.createElement("div",{className:"col s12 m5 offset-m1"},c.a.createElement(R,{notifications:n})))):c.a.createElement(E.a,{to:"/signin"})}}]),a}(r.Component),U=Object(l.d)(Object(g.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(d.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:5,orderBy:["time","desc"]}]))(P),F=Object(l.d)(Object(g.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})),Object(d.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?c.a.createElement("div",{className:"container section project-details"},c.a.createElement("div",{className:"card z-depth-0"},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title project-title"},t.title," "),c.a.createElement("p",null,t.content)),c.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},c.a.createElement("div",null,"posted by"," ","".concat(t.authorFirstName,"  \n              ").concat(t.authorLastName)),c.a.createElement("div",null,C()(t.createdAt.toDate()).calendar())))):c.a.createElement("div",null,c.a.createElement("p",null,"Loading...")):c.a.createElement(E.a,{to:"/signin"})})),x=a(25),A=function(e){Object(y.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(N.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e.handleSignInChange=function(t){e.setState(Object(x.a)({},t.target.id,t.target.value))},e}return Object(O.a)(a,[{key:"render",value:function(){return this.props.auth.uid?c.a.createElement(E.a,{to:"/"}):c.a.createElement("div",{className:"container"},c.a.createElement("form",{className:"",onSubmit:this.handleSubmit},c.a.createElement("h5",{className:"grey-text text-darken-3 form-title"},"Sign In"),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",id:"email",onChange:this.handleSignInChange,placeholder:"Enter Email"})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"password",id:"password",onChange:this.handleSignInChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"))))}}]),a}(r.Component),L=Object(g.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(A),_=function(e){Object(y.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(N.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",firstname:"",lastname:""},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e.handleSignUpChange=function(t){e.setState(Object(x.a)({},t.target.id,t.target.value))},e}return Object(O.a)(a,[{key:"render",value:function(){return this.props.auth.uid?c.a.createElement(E.a,{to:"/"}):c.a.createElement("div",{className:"container"},c.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},c.a.createElement("h5",{className:"grey-text text-darken-3 form-title"},"Sign Up"),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"email",id:"email",onChange:this.handleSignUpChange,placeholder:"Enter Email"})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{type:"password",id:"password",onChange:this.handleSignUpChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"firstname"},"First Name"),c.a.createElement("input",{type:"text",id:"firstname",onChange:this.handleSignUpChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"lastname"},"Last Name"),c.a.createElement("input",{type:"text",id:"lastname",onChange:this.handleSignUpChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up"))))}}]),a}(r.Component),T=Object(g.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=(n.getFirestore,r()),i=r().firestore();c.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(a){return i.collection("users").doc(a.user.uid).set({firstname:e.firstname,lastname:e.lastname,initials:"".concat(e.firstname[0]).concat(e.lastname[0])}).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}))}}(t))}}}))(_),W=function(e){Object(y.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(N.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",content:""},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e.handleChange=function(t){e.setState(Object(x.a)({},t.target.id,t.target.value))},e}return Object(O.a)(a,[{key:"render",value:function(){return this.props.auth.uid?c.a.createElement("div",{className:"container"},c.a.createElement("form",{className:"",onSubmit:this.handleSubmit},c.a.createElement("h5",{className:"grey-text text-darken-3 form-title"},"Create Project"),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"title"},"Title"),c.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("label",{htmlFor:"content"},"Project Content"),c.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})),c.a.createElement("div",{className:"input-field"},c.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create Project")))):c.a.createElement(E.a,{to:"/signin"})}}]),a}(r.Component),D=Object(g.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,r){var c=r.getFirebase,i=(r.getFirestore,c().firestore()),o=a().firebase.profile,l=a().firebase.auth.uid;i.collection("projects").add(Object(n.a)(Object(n.a)({},e),{},{authorFirstName:o.firstname,authorLastName:o.lastname,authorId:l,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))(W);var G=function(){return c.a.createElement(f.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(j,null),c.a.createElement(E.d,null,c.a.createElement(E.b,{exact:!0,path:"/",component:U}),c.a.createElement(E.b,{path:"/signin",component:L}),c.a.createElement(E.b,{path:"/signup",component:T}),c.a.createElement(E.b,{path:"/create-project",component:D}),c.a.createElement(E.b,{path:"/projects/:id",component:F}))))},z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var H=a(212),J=a(48),K=a.n(J);a(403),a(406);K.a.initializeApp({apiKey:"AIzaSyAH90KgvtrdjIHL0WWxw_FXm9NUI_qpEdw",authDomain:"topplan-5e384.firebaseapp.com",databaseURL:"https://topplan-5e384.firebaseio.com",projectId:"topplan-5e384",storageBucket:"topplan-5e384.appspot.com",messagingSenderId:"574557189202",appId:"1:574557189202:web:9e9f70ddc24f1ddef89b8b",measurementId:"G-H4D0BVPPYD"}),K.a.firestore().settings({timestampsInSnapshots:!0});var q=K.a,M=Object(l.e)(h,Object(l.d)(Object(l.a)(H.a.withExtraArgument({getFirebase:d.getFirebase})))),V={firebase:K.a,config:Object(n.a)(Object(n.a)({},q),{userProfile:"users",useFirestoreForProfile:!0,enableRedirectHandling:!1,resetBeforeLogin:!1}),dispatch:M.dispatch,createFirestoreInstance:p.createFirestoreInstance};function X(e){var t=e.children,a=Object(g.c)((function(e){return e.firebase.auth}));return Object(d.isLoaded)(a)?t:c.a.createElement("div",{className:"center"},c.a.createElement("p",null,"Loading TopPlan..."))}o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g.a,{store:M},c.a.createElement(d.ReactReduxFirebaseProvider,V,c.a.createElement(X,null,c.a.createElement(G,null))))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):B(t,e)}))}}()}},[[213,1,2]]]);
//# sourceMappingURL=main.b927228a.chunk.js.map