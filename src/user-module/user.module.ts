import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { LoggerMiddleware } from "./middleware";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    controllers:[UserController],
    providers:[UserService]
})
export class UserModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(LoggerMiddleware,)//for other middle wares use comman and include in apply()
        // .exclude(
        //     'user/re',
        //      {}
        // )
        // .forRoutes(UserController)
        .forRoutes("user/try","user/data")
    }
}