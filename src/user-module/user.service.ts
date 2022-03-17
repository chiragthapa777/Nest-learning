import { Injectable } from "@nestjs/common";
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
}