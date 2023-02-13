import { ISaveItems } from './../interface';
import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Repository } from 'typeorm';
import { Items } from '../entity/items';

@Provide()
export class ItemsService {
  @InjectEntityModel(Items)
  items: Repository<Items>;

  async saveItem(options: ISaveItems) {
    const item = new Items();
    item.name = options.name;
    item.count = options.count;
    item.price = options.price;

    const res = await this.items.save(item);

    return res.id;
  }

  async getItemDetail(id: number) {
    const item = await this.items.findOne({
      where: {
        id,
      },
    });

    return item;
  }

  async removeItem(id: number) {
    const item = await this.items.findOne({
      where: {
        id,
      },
    });
    item.status = '0';

    const res = await this.items.save(item);

    return res.id;
  }
}
