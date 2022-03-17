import { ConsoleLogger, ForbiddenException, Injectable } from "@nestjs/common";
import { json } from "node:stream/consumers";
import { User } from "./interface/uesr";

@Injectable()
export class UserService{
    public users: User[]=[{email:"csdgsdg",username:"asdgds"}]
    getUser():string{
        return"hello World"
    }
    addUser(user: User): User{
        this.users.push(user)
        return user
    }
    getUsers():string{
        return JSON.stringify(this.users)
    }
    deleteUser(email:string):User[]{
        const exists=this.users.find(i=>i.email===email)
        console.log(exists)
        if(!exists) throw new ForbiddenException("email doesnot exists")
        const newUsers=this.users.filter(item=>item.email!==email)
        this.users=[...newUsers]
        return newUsers
    }
}