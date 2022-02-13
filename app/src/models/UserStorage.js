"use strict";

class UserStorage{
    static #users={
        id:["hj","hy","yk","sy"],
        psword:["1234","1234","1234","1234"],
        name:["허혜진","허혜윤","이윤경","허수영"],
    };    

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
}

module.exports = UserStorage;