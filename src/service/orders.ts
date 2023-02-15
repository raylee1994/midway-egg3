import { ISaveOrder } from './../interface';
import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from '../entity/orders';
import { Items } from '../entity/items';
import { User } from '../entity/user';

@Provide()
export class OrdersService {
  @InjectEntityModel(Orders)
  orders: Repository<Orders>;

  @InjectEntityModel(Items)
  items: Repository<Items>;

  @InjectEntityModel(User)
  user: Repository<User>;

  async saveOrder(options: ISaveOrder) {
    // 事务开始
    // 查item库存、价格 select for update
    const item = this.items.findOne({
      where: {
        id: options.itemId
      },
    })
    // 计算总价格
    // 查余额 select for update
    // 修改库存
    // 修改余额
    // 生成订单
    // 事务结束
  }

  async endOrder(options: Partial<ISaveOrder>) { }
}
