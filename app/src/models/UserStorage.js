"use strict";

const fs = require("fs").promises;

class UserStorage{
    static #getUserInfo(data,id){
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); //=>[id,psword,name]
        const userInfo = usersKeys.reduce((newUser,info)=>{
            newUser[info]=users[info][idx];
            return newUser;
        },{});
        return userInfo;
    }

    // 이부분 어렵다 자주 보고 강의 다시 보기 20번째 강의임
    static getUsers(...fields){
        // const users = this.#users;
        const newUsers=fields.reduce((newUsers,field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field]=users[field];
            }
            return newUsers;
        },{});
        return newUsers; 
    }

    // 여기도 어렵다 21번 강의 6분 부근에 나옴 다시 보자
    static getUserInfo(id){
        return fs
        .readFile("./src/databases/users.json")
        .then((data)=>{
            return this.#getUserInfo(data,id);
        })
        .catch(console.error);
    }

    static save(userInfo){
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.name);
        return{success: true};
    }
}

module.exports = UserStorage;