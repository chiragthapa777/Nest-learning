import { Body, Controller, Get, Post, Delete, Param, UsePipes, ValidationPipe, Req, Query, Headers, HttpCode, Redirect, Res } from "@nestjs/common";
import { DeleteParamDto, UserDto } from "./dto/user.dto";
import { User } from "./interface/uesr";//learing interface
import { UserService } from "./user.service";
import { Request, Response } from "express";

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

    @Post("try/:id")
    tryRoute(
        @Body() info:{name:string,email:string},
        @Param() id:string,
        @Query() q:string,
        @Req() res:Request,
        @Headers() headers:{head:string}
        ){
            const {head}=headers
            console.log("body=>", info)
            console.log("params=>", id)
            console.log("query", q)
            console.log("res=>", res.body)
            console.log("headers=>", head)
            return "working good job"
    }

    @Get("re")
    @Redirect("redirected")
    redirectTry(){
        return ""
    }
    @Get("redirected")
    redirectedTry(
        @Res() res: Response 
    ){
        res.status(200).json({msg:"this is good using express res"})
    }
}