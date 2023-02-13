import { ISaveOrder } from './../interface';
import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from '../entity/orders';

@Provide()
export class OrdersService {
  @InjectEntityModel(Orders)
  orders: Repository<Orders>;

  async saveOrder(options: ISaveOrder) {}

  async endOrder(options: Partial<ISaveOrder>) {}
}
