//SINGLE TON

//OBJECT LITERALS
const JsUser={
    name:"Rahul",
    age:20,
    location:"Jaipur",
    email:"ritish@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
//ACCESSING TECHNIQUES
console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["age"]);

JsUser.greetin=function(){
    console.log(`WELCOME ,HOW ARE YOU ${this.name}`);
}
JsUser.greetin();