import { Body, Controller, Inject, Post } from '@midwayjs/decorator';
import { Context } from 'egg';
import { ISaveUser } from '../interface';
import { UserService } from '../service/user';

@Controller('/user')
export class UserController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Post('/')
  async saveUser(@Body() data: ISaveUser) {
    console.log(data);

    const id = await this.userService.saveUser(data);

    return {
      id,
    };
  }
}
