"use strict";

const userid=document.querySelector("#id"),
    username=document.querySelector("#name"),
    userpsword=document.querySelector("#psword"),
    confirmPsword=document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");


registerBtn.addEventListener("click",register);

function register(){
    const req={
        id: userid.value,
        name: username.value,
        psword: userpsword.value,
        confirmPsword: confirmPsword.value,
};
console.log(req);
    // fetch("/register",{
    //     method: "POST",
    //     headers:{
    //         "Content-Type": "application/json",
    //  },
    //     body: JSON.stringify(req),
    // })
    //     .then((res)=> res.json())
    //     .then((res)=>{
    //         if(res.success){
    //             location.href="/login";
    //         }
    //         else{
    //             alert(res.msg);
    //         }
    //     })
    //     .catch((err)=>{
    //         console.error(new Error("회원가입 중 에러 발생"));
    //     });
};