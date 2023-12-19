import { Token } from './token';

export type User = {
  email?: string;
  token?: Token;
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};
