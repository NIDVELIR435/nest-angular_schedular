import { NilType } from './nil.type';

export type OptionsFlags<Type> = {
  [Property in keyof Type]?: NilType<Type[Property]>;
};
