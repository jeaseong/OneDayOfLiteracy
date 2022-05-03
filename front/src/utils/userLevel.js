import { LEVEL_MAX_EXP } from "./constants";

export const checkUserExpPercent = (level, exp) => {
  const userLevel = `LEVEL${level}`;
  const maxExp = LEVEL_MAX_EXP[userLevel];
  const expPercent = ((exp / maxExp) * 100).toFixed(2);
  return { maxExp, expPercent };
};
