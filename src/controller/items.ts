import { ISaveItems } from './../interface';
import { ItemsService } from './../service/items';
import { Body, Controller, Get, Param, Post, Put } from '@midwayjs/decorator';
import { Context } from 'egg';

@Controller('/items')
export class ItemsController {
  ctx: Context;

  itemsService: ItemsService;

  @Post()
  async saveItem(@Body() options: ISaveItems) {
    const r = this.itemsService.saveItem(options);

    return {
      id: r,
    };
  }

  @Get('/:id')
  async getItem(@Param() id: number) {
    const item = this.itemsService.getItemDetail(id);

    return item;
  }

  @Put()
  async removeItem(@Body() options: { id: number }) {
    const r = this.itemsService.removeItem(options.id);

    return {
      id: r,
    };
  }
}
