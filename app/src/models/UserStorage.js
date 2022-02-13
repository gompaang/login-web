"use strict";

class UserStorage{
    static #users={
        id:["hj","hy","yk","sy"],
        psword:["1234","1234","1234","1234"],
        name:["허혜진","허혜윤","이윤경","허수영"],
    };    

    // 이부분 어렵다 자주 보고 강의 다시 보기 20번째 강의임
    static getUsers(...fields){
        const users = this.#users;
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
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); //=>[id,psword]
        const userInfo = usersKeys.reduce((newUser,info)=>{
            newUser[info]=users[info][idx];
            return newUser;
        },{});
        return userInfo;
    }
}

module.exports = UserStorage;