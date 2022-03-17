import { Body, Controller, Get, Post } from "@nestjs/common";
import { User } from "./interface/uesr";
import { UserService } from "./user.service";

//route=> /user
@Controller("user")
export class UserController{
    constructor(private userService: UserService){}
    //route=> /user
    
    @Get()
    greetUser():string{
        return this.userService.getUser()
    }
    //route=> /user/data
    @Get("data")
    giveData():{id:number,name:string}{
        return {id:1,name:"chirag thapa"}
    }
    @Post("adduser")
    addUser(@Body() user: User){
        return this.userService.addUser(user)
    }
    @Get("getusers")
    getUsers():string{
        return this.userService.getUsers()
    }
}