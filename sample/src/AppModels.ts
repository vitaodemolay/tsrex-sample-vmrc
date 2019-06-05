import { ModelStore } from 'exredux';
import { MsgModel } from './msg/MsgModel';

export const appModels = new ModelStore({
  devExtension: process.env.NODE_ENV === 'development',
  models: [MsgModel]
});