"use strict";(self["webpackChunkhw3_vue"]=self["webpackChunkhw3_vue"]||[]).push([[235],{1235:function(n,o,e){e.r(o),e.d(o,{default:function(){return L}});var t=e(3396);function l(n,o,e,l,s,i){const a=(0,t.up)("Login");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(a)])}e(7658);var s=e(9242);const i=n=>((0,t.dD)("data-v-87bf8e96"),n=n(),(0,t.Cn)(),n),a={class:"login_content"},r=i((()=>(0,t._)("h2",null,"Please Login",-1))),u=i((()=>(0,t._)("label",{for:"email"},null,-1))),d=i((()=>(0,t._)("br",null,null,-1))),c=i((()=>(0,t._)("label",{for:"password"},null,-1))),p=i((()=>(0,t._)("br",null,null,-1))),m={class:"buttons"},g=i((()=>(0,t._)("p",null,"or",-1)));function b(n,o,e,l,i,b){return(0,t.wg)(),(0,t.iD)("div",a,[r,(0,t._)("form",{class:"login_form",onSubmit:o[4]||(o[4]=(...o)=>n.submit&&n.submit(...o))},[u,(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":o[0]||(o[0]=n=>i.email=n),type:"email",placeholder:"Email",required:""},null,512),[[s.nr,i.email,void 0,{trim:!0}]]),d,c,(0,t.wy)((0,t._)("input",{"onUpdate:modelValue":o[1]||(o[1]=n=>i.password=n),type:"password",placeholder:"Password",required:""},null,512),[[s.nr,i.password]]),p,(0,t._)("div",m,[(0,t._)("button",{onClick:o[2]||(o[2]=n=>this.$router.push("/signup")),id:"signup_button",class:"button",type:"submit"},"Sign Up"),g,(0,t._)("button",{onClick:o[3]||(o[3]=(...n)=>b.LogIn&&b.LogIn(...n)),id:"login_button",class:"button",type:"submit"},"Login")])],32)])}var h={name:"Login",data(){return{email:"",password:"",submitted:!1,isValid:!1}},methods:{LogIn(){var n={email:this.email,password:this.password};fetch("http://localhost:8080/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(n)}).then((n=>n.json())).then((n=>{console.log(n),location.assign("/")})).catch((n=>{console.log(n),console.log("error")}))}}},_=e(89);const w=(0,_.Z)(h,[["render",b],["__scopeId","data-v-87bf8e96"]]);var f=w,v={name:"LoginView",components:{Login:f}};const y=(0,_.Z)(v,[["render",l]]);var L=y}}]);
//# sourceMappingURL=235.7319c65b.js.map