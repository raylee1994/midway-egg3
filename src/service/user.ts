import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user';
import { IExpireUser, IGetUserExpired, ISaveUser } from '../interface';

@Provide()
export class UserService {
  @InjectEntityModel(User)
  userModel: Repository<User>;

  async saveUser(options: ISaveUser) {
    const user = new User();
    user.name = options.name;
    user.password = options.password;

    const res = await this.userModel.save(user);

    return res.id;
  }

  async expireUser(options: IExpireUser) {
    const user = await this.userModel.findOne({
      where: {
        id: options.id,
      },
    });

    user.expireJti = options.expireJti;

    const res = await this.userModel.save(user);

    return res.id;
  }

  async getUserExpired(options: IGetUserExpired) {
    const user = await this.userModel.query(
      `select expireJti from user where name = ${options.name}`
    );

    if (user.expireJti === options.expireJti) {
      return 401;
    }
    return 200;
  }
}
