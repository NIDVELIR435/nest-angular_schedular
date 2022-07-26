export type ParticularRequired<
  Type extends { [key: string]: unknown },
  ToRequired extends Partial<keyof Type>
> = {
  [Property in keyof Type]: Type[Property] extends ToRequired
    ? Required<Type[Property]>
    : Type[Property];
};
