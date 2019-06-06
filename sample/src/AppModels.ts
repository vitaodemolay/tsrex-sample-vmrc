import { ModelStore } from 'exredux';
import { MsgModel } from './msg/MsgModel';
import { CounterModel } from './counter/CounterModel';

export const appModels = new ModelStore({
  devExtension: process.env.NODE_ENV === 'development',
  models: [MsgModel, CounterModel]
});