webpackJsonp([6],{omiT:function(e,r){},"ook+":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});t("FJPt");var a={data:function(){return{formData:{username:"",password:""},rules:{username:[{required:!0,message:"Please fill in the username",trigger:"blur"}],password:[{required:!0,message:"Please fill in the password.",trigger:"blur"},{}]}}},methods:{loginClick:function(e){var r=this;this.$refs[e].validate(function(e){e?(r.$Loading.start(),r.$store.dispatch("getUserInfoData",r.formData).then(function(){r.$Loading.finish(),r.$router.push({path:"/dashboard"})}).catch(function(e){r.$Loading.error(),console.log(e),r.$Message.error("Login failed !")})):console.log("Please check your enter format !")})}}},o={render:function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("Form",{ref:"formWrapper",attrs:{model:e.formData,rules:e.rules,inline:""}},[t("FormItem",{attrs:{prop:"username"}},[t("Input",{attrs:{type:"text",placeholder:"Username"},model:{value:e.formData.username,callback:function(r){e.$set(e.formData,"username",r)},expression:"formData.username"}},[t("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),e._v(" "),t("FormItem",{attrs:{prop:"password"}},[t("Input",{attrs:{type:"password",placeholder:"Password"},model:{value:e.formData.password,callback:function(r){e.$set(e.formData,"password",r)},expression:"formData.password"}},[t("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1),e._v(" "),t("FormItem",[t("Button",{attrs:{type:"primary"},on:{click:function(r){e.loginClick("formWrapper")}}},[e._v("Signin")])],1)],1)},staticRenderFns:[]};var s=t("VU/8")(a,o,!1,function(e){t("omiT")},"data-v-018987d1",null);r.default=s.exports}});
//# sourceMappingURL=6.c9f0d038fc58ac44e9ef.js.map