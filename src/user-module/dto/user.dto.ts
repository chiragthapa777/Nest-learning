import { IsDefined, IsEmail, IsNotEmpty, IsString, Length, Max, Min } from "class-validator";

export class UserDto{
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @IsDefined()
    email:string
    
    @IsNotEmpty()
    @IsString()
    @Length(1,10)
    username:string

}

export class DeleteParamDto{
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @IsDefined()
    email:string
}