export interface ISaveUser {
  name: string;
  password: string;
}

export interface IExpireUser {
  id: number;
  expireJti: string;
}

export interface IGetUserExpired {
  name: string;
  expireJti: string;
}

export interface ISaveItems {
  name: string;
  price: number;
  count: number;
}

export interface ISaveOrder {
  itemId: number;
  count: number;
  uid: number;
  endTime: string;
}
