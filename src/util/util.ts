export const isNull = (...valueList: any) =>
  valueList.every((v: any) => Boolean(v) === true);
