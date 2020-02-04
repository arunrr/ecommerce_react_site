(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);var n=a(29),r=a(0),l=a.n(r),o=a(22),i=a.n(o),c=a(21),s=a(13),m=(a(51),a(52),a(7)),d=a.n(m),u=a(8),g=a(9),h=a(11),p=a(10),f=a(12),E=a(17),y=a.n(E),b=a(2);function v(e){var t=e.image,a=e.title,n=e.desc,r=e.url;return l.a.createElement(b.a,{padding:5,margin:1,width:250,shape:"rounded",dangerouslySetInlineStyle:{__style:{backgroundColor:"#e7feff"}}},l.a.createElement(b.c,{image:l.a.createElement(b.a,{width:200,height:200},l.a.createElement(b.g,{fit:"cover",alt:"Brand image",naturalWidth:1,naturalHeight:1,src:t}))},l.a.createElement(b.a,{display:"flex",direction:"column",alignItems:"center",justifyContent:"center"},l.a.createElement(b.a,{marginBottom:2},l.a.createElement(b.l,{size:"xl"},a)),l.a.createElement(b.a,{marginBottom:1},l.a.createElement(b.l,null,n)),l.a.createElement(b.l,null,l.a.createElement(s.b,{to:r},l.a.createElement(b.a,{color:"darkGray",shape:"pill",paddingY:2,paddingX:4,marginTop:2},l.a.createElement(b.l,{color:"white",size:"md"},"See brews")))))))}function C(e){var t=e.onChange,a=e.holder;return l.a.createElement(b.a,{display:"flex",justifyContent:"center",marginTop:4,marginBottom:5},l.a.createElement(b.j,{placeholder:"Search ".concat(a),accessibilityLabel:"".concat(a," Search Field"),id:"brandSearch",onChange:t}))}var w=a(43);function S(e){return e.loading&&l.a.createElement(b.a,{position:"fixed",dangerouslySetInlineStyle:{__style:{bottom:300,left:"50%",transform:"translateX(-50%)"}}},l.a.createElement(w.SyncLoader,{color:"darkorange",size:25,margin:"3px"}))}var x=new y.a("https://strapi-brewlala-server.herokuapp.com"),j=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={brands:[],searchTerm:"",loading:!0},a.handleChange=function(e){a.setState({searchTerm:e.value})},a}return Object(f.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e;return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.awrap(x.request("POST","/graphql",{data:{query:" query{\n              brands{\n                _id\n                name\n                description\n                createdAt\n                image{\n                  name\n                  url\n                }\n              }\n            }\n            \n            \n            "}}));case 3:e=t.sent,this.setState({brands:e.data.brands,loading:!1}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),null,this,[[0,7]])}},{key:"render",value:function(){var e=this.state,t=e.searchTerm,a=e.brands,n=e.loading,r=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return l.a.createElement(b.d,null,l.a.createElement(S,{loading:n}),l.a.createElement(b.a,{display:"flex",justifyContent:"center",marginBottom:2},l.a.createElement(b.e,{color:"midnight",size:"md"},"Brew Brands")),l.a.createElement(C,{onChange:this.handleChange,holder:"Brands"}),l.a.createElement(b.a,{wrap:!0,display:"flex",justifyContent:"around"},r.map((function(e){return l.a.createElement(v,{key:e._id,image:"".concat(e.image.url),title:e.name,desc:e.description,url:"/".concat(e._id)})}))))}}]),t}(r.Component);var I=function(){return l.a.createElement(j,null)},O=function(e){return"".concat(e.reduce((function(e,t){return e+t.price*t.quantity}),0).toFixed(2)," $")},k=function(e){return Number(e.reduce((function(e,t){return e+t.price*t.quantity}),0).toFixed(2))},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cart";localStorage&&localStorage.setItem(t,JSON.stringify(e))},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cart";return localStorage&&localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):[]},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"cart";localStorage&&localStorage.removeItem(e)},z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"jwt";localStorage&&localStorage.setItem(t,JSON.stringify(e))},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"jwt";return localStorage&&localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):null},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"jwt";localStorage&&localStorage.removeItem(e)},M=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleSignOut=function(){B(),P(),a.props.history.push("/")},a}return Object(f.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return null!==L()?l.a.createElement(q,{handleSignOut:this.handleSignOut}):l.a.createElement(A,null)}}]),t}(r.Component),q=function(e){var t=e.handleSignOut;return l.a.createElement(b.a,{display:"flex",alignItems:"center",justifyContent:"around",height:60,color:"midnight",padding:1,shape:"roundedBottom"},l.a.createElement(s.c,{activeClassName:"active",to:"/checkout"},l.a.createElement(b.l,{size:"xl",color:"white"},"Checkout")),l.a.createElement(s.c,{activeClassName:"active",exact:!0,to:"/"},l.a.createElement(b.a,{display:"flex",alignItems:"center"},l.a.createElement(b.a,{margin:2,height:50,width:50},l.a.createElement(b.g,{alt:"BrewLaLa Logo",naturalHeight:1,naturalWidth:1,src:"./icons/logo.svg"})),l.a.createElement("div",{className:"nav-title"},l.a.createElement(b.e,{size:"xs",color:"orange"},"BrewLaLa")))),l.a.createElement(b.b,{color:"transparent",size:"md",text:"Sign Out",inline:!0,onClick:t}))},A=function(){return l.a.createElement(b.a,{display:"flex",alignItems:"center",justifyContent:"around",height:60,color:"midnight",padding:1,shape:"roundedBottom"},l.a.createElement(s.c,{activeClassName:"active",to:"/signin"},l.a.createElement(b.l,{size:"xl",color:"white"},"Sign In")),l.a.createElement(s.c,{activeClassName:"active",exact:!0,to:"/"},l.a.createElement(b.a,{display:"flex",alignItems:"center"},l.a.createElement(b.a,{margin:2,height:50,width:50},l.a.createElement(b.g,{alt:"BrewLaLa Logo",naturalHeight:1,naturalWidth:1,src:"./icons/logo.svg"})),l.a.createElement("div",{className:"nav-title"},l.a.createElement(b.e,{size:"xs",color:"orange"},"BrewLaLa")))),l.a.createElement(s.c,{activeClassName:"active",to:"/signup"},l.a.createElement(b.l,{size:"xl",color:"white"},"Sign up")))},N=Object(c.g)(M),W=a(20);function F(e){var t=e.message;return e.show&&l.a.createElement(b.n,{color:"orange",text:t})}var D=new y.a("https://strapi-brewlala-server.herokuapp.com"),U=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",email:"",password:"",toast:!1,toastMessage:"",loading:!1},a.handleSubmit=function(e){var t,n,r,l,o;return d.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(t=a.state,n=t.username,r=t.email,l=t.password,e.preventDefault(),!a.isFormEmpty(a.state)){i.next=5;break}return a.showToast("Please fill in all fields"),i.abrupt("return");case 5:return i.prev=5,a.setState({loading:!0}),i.next=9,d.a.awrap(D.register(n,r,l));case 9:o=i.sent,a.setState({loading:!1}),z(o.jwt),a.redirectTo("/"),i.next=19;break;case 15:i.prev=15,i.t0=i.catch(5),a.showToast(i.t0.message),a.setState({loading:!1});case 19:case"end":return i.stop()}}),null,null,[[5,15]])},a.handleChange=function(e){var t=e.event,n=e.value;t.persist(),a.setState(Object(W.a)({},t.target.name,n))},a.showToast=function(e){a.setState({toast:!0,toastMessage:e}),setTimeout((function(){return a.setState({toast:!1,toastMessage:""})}),5e3)},a.isFormEmpty=function(e){var t=e.username,a=e.email,n=e.password;return!t||!a||!n},a.redirectTo=function(e){return a.props.history.push(e)},a}return Object(f.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.state,t=e.toast,a=e.toastMessage,n=e.loading;return l.a.createElement(b.d,null,l.a.createElement(b.a,{height:450,margin:4,padding:8,display:"flex",shape:"rounded",justifyContent:"center",position:"fixed",dangerouslySetInlineStyle:{__style:{backgroundColor:"#e7feff",minWidth:"70%",left:"50%",top:"25%",transform:"translate(-50%)"}}},l.a.createElement("form",{style:{display:"inlineBlock",maxWidth:450,textAlign:"center"},onSubmit:this.handleSubmit},l.a.createElement(b.a,{marginBottom:2,display:"flex",direction:"column",alignItems:"center"},l.a.createElement(b.a,{marginBottom:2},l.a.createElement(b.e,{color:"midnight"},"Let's get started")),l.a.createElement(b.l,{italic:!0,color:"orchid",size:"md"},"Sign up to order Brews")),l.a.createElement(b.a,null,l.a.createElement(b.m,{id:"username",name:"username",type:"text",placeholder:"Enter Username",onChange:this.handleChange})),l.a.createElement(b.a,null,l.a.createElement(b.m,{id:"email",name:"email",type:"email",placeholder:"Enter Email",onChange:this.handleChange})),l.a.createElement(b.a,null,l.a.createElement(b.m,{id:"password",name:"password",type:"password",placeholder:"Enter password",onChange:this.handleChange})),l.a.createElement(b.b,{disabled:n,inline:!0,color:"blue",type:"submit",text:"Submit"}))),l.a.createElement(b.a,{position:"fixed",dangerouslySetInlineStyle:{__style:{bottom:500,left:"50%",transform:"translateX(-50%)"}}},l.a.createElement(F,{message:a,show:t})))}}]),t}(r.Component),J=new y.a("https://strapi-brewlala-server.herokuapp.com"),R=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",toast:!1,toastMessage:"",loading:!1},a.handleSubmit=function(e){var t,n,r,l;return d.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(t=a.state,n=t.username,r=t.password,e.preventDefault(),!a.isFormEmpty(a.state)){o.next=5;break}return a.showToast("Please fill in all fields"),o.abrupt("return");case 5:return o.prev=5,a.setState({loading:!0}),o.next=9,d.a.awrap(J.login(n,r));case 9:l=o.sent,a.setState({loading:!1}),z(l.jwt),a.redirectTo("/"),o.next=19;break;case 15:o.prev=15,o.t0=o.catch(5),a.showToast(o.t0.message),a.setState({loading:!1});case 19:case"end":return o.stop()}}),null,null,[[5,15]])},a.handleChange=function(e){var t=e.event,n=e.value;t.persist(),a.setState(Object(W.a)({},t.target.name,n))},a.showToast=function(e){a.setState({toast:!0,toastMessage:e}),setTimeout((function(){return a.setState({toast:!1,toastMessage:""})}),5e3)},a.isFormEmpty=function(e){var t=e.username,a=e.password;return!t||!a},a.redirectTo=function(e){return a.props.history.push(e)},a}return Object(f.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){var e=this.state,t=e.toast,a=e.toastMessage,n=e.loading;return l.a.createElement(b.d,null,l.a.createElement(b.a,{height:450,className:"form-container",margin:4,padding:8,display:"flex",shape:"rounded",justifyContent:"center",alignItems:"center",position:"fixed",dangerouslySetInlineStyle:{__style:{backgroundColor:"#e7feff",minWidth:"70%",left:"50%",top:"25%",transform:"translate(-50%)"}}},l.a.createElement("form",{style:{display:"inlineBlock",maxWidth:450,textAlign:"center"},onSubmit:this.handleSubmit},l.a.createElement(b.a,{marginBottom:2,display:"flex",direction:"column",alignItems:"center"},l.a.createElement(b.a,{marginBottom:2},l.a.createElement(b.e,{color:"midnight"},"Welcome back!"))),l.a.createElement(b.a,null,l.a.createElement(b.m,{id:"username",name:"username",type:"text",placeholder:"Enter Username",onChange:this.handleChange})),l.a.createElement(b.a,null,l.a.createElement(b.m,{id:"password",name:"password",type:"password",placeholder:"Enter password",onChange:this.handleChange})),l.a.createElement(b.b,{disabled:n,inline:!0,color:"blue",type:"submit",text:"Sign In"}))),l.a.createElement(b.a,{position:"fixed",dangerouslySetInlineStyle:{__style:{bottom:500,left:"50%",transform:"translateX(-50%)"}}},l.a.createElement(F,{message:a,show:t})))}}]),t}(r.Component),$=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,"Logout")}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=a(45),Y=a(44);function H(e){var t=e.image,a=e.title,n=e.desc,r=e.price,o=e.onAddToCart;return l.a.createElement(b.a,{padding:5,margin:4,width:250,shape:"rounded",dangerouslySetInlineStyle:{__style:{backgroundColor:"#e7feff"}}},l.a.createElement(b.c,{image:l.a.createElement(b.a,{width:200,height:200,marginBottom:4},l.a.createElement(b.g,{fit:"cover",alt:"Brand image",naturalWidth:1,naturalHeight:1,src:t}))},l.a.createElement(b.a,{display:"flex",direction:"column",alignItems:"center",justifyContent:"center"},l.a.createElement(b.a,{marginBottom:2},l.a.createElement(b.l,{size:"xl"},a)),l.a.createElement(b.l,null,n),l.a.createElement(b.a,{marginBottom:3}),l.a.createElement(b.l,{size:"lg",weight:"bold"},r," $"),l.a.createElement(b.a,{marginTop:3},l.a.createElement(b.b,{onClick:o,color:"blue",text:"Add to Cart"})))))}function G(e){var t=e.cartItems,a=e.deleteCartItem;return l.a.createElement(b.h,{shape:"rounded",wash:!0},l.a.createElement(b.a,{display:"flex",direction:"column",alignItems:"center",padding:2,dangerouslySetInlineStyle:{__style:{backgroundColor:"#e7feff"}}},l.a.createElement(b.e,{align:"center",size:"md"},"Cart"),t.length," items selected",l.a.createElement(b.l,{color:"gray",italic:!0}),t.map((function(e){return l.a.createElement(b.a,{key:e.id,display:"flex",alignItems:"center",marginTop:2,marginBottom:2},l.a.createElement(b.l,null,e.name," x ",e.quantity," -"," ",(e.price*e.quantity).toFixed(2)," $"),l.a.createElement(b.f,{accessibilityLabel:"Delete Item",icon:"cancel",size:"sm",iconColor:"red",onClick:function(){return a(e.id)}}))})),l.a.createElement(b.a,{display:"flex",justifyContent:"center",alignItems:"center",direction:"column"},l.a.createElement(b.a,{margin:2},0===t.length&&l.a.createElement(b.l,{color:"red"},"Please add items to cart")),l.a.createElement(b.l,{size:"lg"},"Total: ",O(t)),l.a.createElement(b.l,null,l.a.createElement(s.b,{to:"/checkout"},l.a.createElement("div",{className:"cart-checkout"},"Checkout"))))))}var K=new y.a("https://strapi-brewlala-server.herokuapp.com"),V=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={brand_name:"",brews:[],searchTerm:"",cartItems:[],loading:!0},a.handleChange=function(e){a.setState({searchTerm:e.value})},a.addToCart=function(e){var t=a.state.cartItems.findIndex((function(t){return t.id===e.id}));if(-1===t){var n=a.state.cartItems.concat(Object(Y.a)({},e,{quantity:1}));a.setState({cartItems:n},(function(){return _(n)}))}else{var r=Object(X.a)(a.state.cartItems);r[t].quantity+=1,a.setState({cartItems:r},(function(){return _(r)}))}},a.handleDeleteCartItem=function(e){var t=a.state.cartItems.filter((function(t){return t.id!==e}));a.setState({cartItems:t},(function(){return _(t)}))},a}return Object(f.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e;return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.awrap(K.request("POST","/graphql",{data:{query:' query{\n              brand(id:"'.concat(this.props.match.params.brandid,'"){\n                name\n                brews{\n                  id\n                  name\n                  description\n                  price\n                  image{\n                    url\n                  }\n                }\n              }\n            }\n            ')}}));case 3:e=t.sent,this.setState({brand_name:e.data.brand.name,brews:e.data.brand.brews,loading:!1,cartItems:T()}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),null,this,[[0,7]])}},{key:"render",value:function(){var e=this,t=this.state,a=t.brand_name,n=t.brews,r=t.loading,o=t.cartItems,i=t.searchTerm,c=n.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return l.a.createElement(b.a,{display:"flex",justifyContent:"center",alignItems:"start",marginTop:4},l.a.createElement(b.a,{display:"flex",direction:"column",alignItems:"center"},l.a.createElement(b.a,{margin:2},l.a.createElement(b.e,{color:"midnight",size:"md"},a)),l.a.createElement(C,{onChange:this.handleChange,holder:"Brews"}),l.a.createElement(S,{loading:r}),l.a.createElement(b.a,{display:"flex",alignItems:"center",justifyContent:"center",dangerouslySetInlineStyle:{__style:{flexWrap:"wrap-reverse"}}},l.a.createElement(b.a,{wrap:!0,display:"flex",justifyContent:"around"},c.map((function(t){return l.a.createElement(H,{key:t.id,image:"".concat(t.image.url),title:t.name,desc:t.description,price:t.price,onAddToCart:function(){return e.addToCart(t)}})}))),l.a.createElement(b.a,{alignSelf:"end",display:"flex",marginTop:4},r?null:l.a.createElement(G,{cartItems:o,deleteCartItem:this.handleDeleteCartItem})))))}}]),t}(r.Component),Q=a(24),Z=Object({NODE_ENV:"production",PUBLIC_URL:"/ecommerce_react_site",REACT_APP_API_URL:"https://strapi-brewlala-server.herokuapp.com"}).API_URL||"http://localhost:1337",ee=new y.a(Z),te=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={cartItems:[],address:"",postalCode:"",confirmEmail:"",city:"",toast:!1,toastMessage:"",orderProcessing:!1,modal:!1},a.closeModal=function(){return a.setState({modal:!1})},a.handleConfirmOrder=function(e){return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),!a.isFormEmpty(a.state)){t.next=4;break}return a.showToast("Please fill in all fields"),t.abrupt("return");case 4:a.setState({modal:!0});case 5:case"end":return t.stop()}}))},a.handleSubmitOrder=function(){var e,t,n,r,l,o,i,c;return d.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return e=a.state,t=e.cartItems,n=e.city,r=e.postalCode,l=e.address,o=k(t),a.setState({orderProcessing:!0}),s.prev=3,s.next=6,d.a.awrap(a.props.stripe.createToken());case 6:return c=s.sent,i=c.token.id,s.next=10,d.a.awrap(ee.createEntry("orders",{amount:o,brews:t,city:n,postalCode:r,address:l,token:i}));case 10:a.setState({orderProcessing:!1,modal:!1}),B(),a.showToast("Your order has been successfully submitted",!0),s.next=19;break;case 15:s.prev=15,s.t0=s.catch(3),a.setState({orderProcessing:!1,modal:!1}),a.showToast(s.t0.message);case 19:case"end":return s.stop()}}),null,null,[[3,15]])},a.handleChange=function(e){var t=e.event,n=e.value;t.persist(),a.setState(Object(W.a)({},t.target.name,n))},a.showToast=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a.setState({toast:!0,toastMessage:e}),setTimeout((function(){return a.setState({toast:!1,toastMessage:""},(function(){return t&&a.props.history.push("/")}))}),5e3)},a.isFormEmpty=function(e){var t=e.address,a=e.confirmEmail,n=e.postalCode,r=e.city;return!t||!a||!n||!r},a}return Object(f.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.setState({cartItems:T()})}},{key:"render",value:function(){var e=this.state,t=e.toast,a=e.toastMessage,n=e.cartItems,o=e.orderProcessing,i=e.modal;return l.a.createElement(b.d,null,l.a.createElement(b.a,{margin:4,padding:8,display:"flex",shape:"rounded",justifyContent:"center",alignItems:"center",direction:"column",dangerouslySetInlineStyle:{__style:{backgroundColor:"#e7feff"}}},l.a.createElement(b.a,null,l.a.createElement(b.e,{color:"midnight"},"Checkout")),0!==n.length?l.a.createElement(r.Fragment,null,l.a.createElement(b.a,{display:"flex",marginBottom:4,direction:"column",justifyContent:"center",alignItems:"center"},l.a.createElement(b.a,{margin:2},l.a.createElement(b.l,{italics:!0,color:"orchid",size:"md"},n.length," items to checkout")),l.a.createElement(b.a,null,n.map((function(e){return l.a.createElement(b.a,{key:e.id,margin:4},l.a.createElement(b.l,null," ".concat(e.name," x ").concat(e.quantity," --\x3e \n                    ").concat(e.price*e.quantity," $")))}))),l.a.createElement(b.l,{size:"lg",color:"watermelon",weight:"bold"},"Total : ",O(n))),l.a.createElement(b.a,{maxWidth:850,dangerouslySetInlineStyle:{__style:{minWidth:"70%"}}},l.a.createElement("form",{styled:{display:"inlineBlock",maxWidth:450,textAlign:"center"},onSubmit:this.handleConfirmOrder},l.a.createElement(b.a,null,l.a.createElement(b.m,{id:"address",name:"address",type:"text",placeholder:"Enter Shipping Address",onChange:this.handleChange})),l.a.createElement(b.a,null,l.a.createElement(b.m,{id:"postalCode",name:"postalCode",type:"number",placeholder:"Enter Postal Code",onChange:this.handleChange})),l.a.createElement(b.a,null,l.a.createElement(b.m,{id:"city",name:"city",type:"text",placeholder:"City of Residence",onChange:this.handleChange})),l.a.createElement(b.a,null,l.a.createElement(b.m,{id:"confirmEmail",name:"confirmEmail",type:"email",placeholder:"Enter registered email address",onChange:this.handleChange})),l.a.createElement(Q.CardElement,{id:"stripe__input",onReady:function(e){return e.focus()}}),l.a.createElement(b.a,{display:"flex",justifyContent:"center",alignItems:"center"},l.a.createElement("button",{id:"stripe__button",type:"submit"},"Checkout"))))):l.a.createElement(b.a,{margin:2},l.a.createElement(b.l,{color:"watermelon",size:"lg"},"Please add items to cart"))),i&&l.a.createElement(ae,{handleSubmitOrder:this.handleSubmitOrder,orderProcessing:o,cartItems:n,closeModal:this.closeModal}),l.a.createElement(b.a,{position:"fixed",dangerouslySetInlineStyle:{__style:{bottom:500,left:"50%",transform:"translateX(-50%)"}}},l.a.createElement(F,{message:a,show:t})))}}]),t}(r.Component),ae=function(e){var t=e.orderProcessing,a=e.handleSubmitOrder,n=e.cartItems,r=e.closeModal;return l.a.createElement(b.i,{accessibilityCloseLabel:"close",accessibilityModalLabel:"Confirm order modal",heading:l.a.createElement(b.a,{justifyContent:"center",alignItems:"center",direction:"column",display:"flex",paddingY:2,MarginTop:2},l.a.createElement(b.e,{size:"sm"},"Confirm Your Order")),onDismiss:r,footer:l.a.createElement(b.a,{display:"flex",justifyContent:"center"},l.a.createElement(b.a,{padding:2},l.a.createElement(b.b,{text:"Checkout",size:"lg",color:"blue",disabled:t,onClick:a})),l.a.createElement(b.a,{padding:2},l.a.createElement(b.b,{text:"Cancel",size:"lg",color:"red",disabled:t,onClick:r}))),size:"md",role:"alertdialog"},!t&&l.a.createElement(b.a,{display:"flex",justifyContent:"center",alignItems:"center",direction:"column",color:"lightWash",padding:2},l.a.createElement(b.a,{display:"flex",justifyContent:"center",alignItems:"center",direction:"column"},n.map((function(e){return l.a.createElement(b.a,{key:e.id,margin:2,alignSelf:"start"},l.a.createElement(b.l,{size:"lg",color:"watermelon"},e.name," x ",e.quantity," - ",e.quantity*e.price," $"))}))),l.a.createElement(b.a,{paddingY:2,MarginTop:2},l.a.createElement(b.l,{size:"lg",weight:"bold"},"Total : ",O(n)))),l.a.createElement(b.a,{display:"flex",justifyContent:"center",alignItems:"center",direction:"column",margin:5,dangerouslySetInlineStyle:{__style:{display:t?"block":"none"}}},l.a.createElement(b.k,{show:t,accessibilityLabel:"Order processing spinner"}),l.a.createElement(b.a,{margin:4,justifyContent:"center",alignItems:"center",display:"flex"},l.a.createElement(b.l,{italics:!0,weight:"bold",size:"sm"},"Processing Order..."))))},ne=Object(c.g)(Object(Q.injectStripe)(te)),re=function(){return l.a.createElement(Q.StripeProvider,{apiKey:"pk_test_v8FridphUyEU5A9GsiT9FNWu003wq0PByO"},l.a.createElement(Q.Elements,null,l.a.createElement(ne,null)))},le=function(e){var t=e.component,a=e.restricted,r=Object(n.a)(e,["component","restricted"]);return(l.a.createElement(c.b,Object.assign({},r,{render:function(e){return L()&&a?l.a.createElement(c.a,{to:"/"}):l.a.createElement(t,e)}})))},oe=function(e){var t=e.component,a=Object(n.a)(e,["component"]);return(l.a.createElement(c.b,Object.assign({},a,{render:function(e){return L()?l.a.createElement(t,e):l.a.createElement(c.a,{to:"/signin"})}})))};i.a.render(l.a.createElement((function(){return l.a.createElement(s.a,{basename:"/ecommerce_react_site"},l.a.createElement(N,null),l.a.createElement(c.d,null,l.a.createElement(le,{restricted:!1,component:I,exact:!0,path:"/"}),l.a.createElement(le,{restricted:!0,component:U,path:"/signup"}),l.a.createElement(le,{restricted:!0,component:R,path:"/signin"}),l.a.createElement(oe,{component:re,path:"/checkout"}),l.a.createElement(c.b,{component:$,path:"/logout"}),l.a.createElement(le,{restricted:!1,component:V,path:"/:brandid"})))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},46:function(e,t,a){e.exports=a(114)},52:function(e,t,a){}},[[46,1,2]]]);
//# sourceMappingURL=main.56c6b1e9.chunk.js.map