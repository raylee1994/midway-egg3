import { MidwayConfig, MidwayAppInfo } from '@midwayjs/core';
import { resolve } from 'path';

export default (appInfo: MidwayAppInfo) => {
  return {
    // use for cookie sign key, should change to your own and keep security
    keys: appInfo.name + '_1675493478202_3924',
    egg: {
      port: 7001,
    },
    typeorm: {
      dataSource: {
        default: {
          type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: '101liweifan',
          database: 'test',
          entities: resolve(__dirname, 'src/entity/*.ts'),
        },
      },
    },
    // security: {
    //   csrf: false,
    // },
  } as MidwayConfig;
};
