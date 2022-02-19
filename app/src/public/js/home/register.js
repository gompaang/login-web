"use strict";

const userid=document.querySelector("#id"),
    username=document.querySelector("#name"),
    userpsword=document.querySelector("#psword"),
    confirmPsword=document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");


registerBtn.addEventListener("click",register);

function register(){
    if(!id.value) return alert("아이디를 입력해주세용");
    if(psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않아용");
    

    const req={
        id: userid.value,
        name: username.value,
        psword: userpsword.value,
};
console.log(req);
fetch("/register",{
    method: "POST",
    headers:{
        "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
})
.then((res)=> res.json())
.then((res)=>{
    if(res.success){
        location.href="/login";
    }
    else{
        alert(res.msg);
    }
})
.catch((err)=>{
    console.error(new Error("회원가입 중 에러 발생"));
});
};