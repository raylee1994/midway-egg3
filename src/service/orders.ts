import { ISaveOrder } from './../interface';
import { Inject, Provide } from '@midwayjs/decorator';
import { InjectEntityModel, TypeORMDataSourceManager } from '@midwayjs/typeorm';
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

  @Inject()
  dataSource: TypeORMDataSourceManager;

  async saveOrder(options: ISaveOrder) {
    // 事务开始
    const dataSource = this.dataSource.getDataSource('default');
    const queryRunner = dataSource.createQueryRunner();

    await queryRunner.startTransaction();

    try {
      // 查item库存、价格 select for update
      const item = this.items.findOne({
        where: {
          id: options.itemId,
        },
        lock: {
          mode: 'pessimistic_write',
        },
      });
      // 计算总价格
      // 查余额 select for update
      // 修改库存
      // 修改余额
      // 生成订单
      // 事务结束
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      throw new Error('roll back');
    }
  }

  async endOrder(options: Partial<ISaveOrder>) {}
}
