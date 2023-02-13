import { Middleware, IMiddleware } from '@midwayjs/core';
import { NextFunction } from '@midwayjs/web';
import { Context } from 'egg';

@Middleware()
export class FormatMiddleware implements IMiddleware<Context, NextFunction> {
  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      const data = await next();
      return {
        code: 200,
        msg: 'OK',
        data,
      };
    };
  }
}
