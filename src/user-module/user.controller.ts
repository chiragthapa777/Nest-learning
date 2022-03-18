import { Body, Controller, Get, Post, Delete, Param, UsePipes, ValidationPipe } from "@nestjs/common";
import { DeleteParamDto, UserDto } from "./dto/user.dto";
import { User } from "./interface/uesr";//learing interface
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
    @UsePipes(new ValidationPipe())
    addUser(@Body() user: UserDto){
        return this.userService.addUser(user)
    }
    @Get("getusers")
    getUsers():string{
        return this.userService.getUsers()
    }
    @Delete("deleteuser/:email")
    @UsePipes(new ValidationPipe())
    deleteUsers(@Param() email:DeleteParamDto):string{
        let users= this.userService.deleteUser(email.email)
        return JSON.stringify(users)
    }
}