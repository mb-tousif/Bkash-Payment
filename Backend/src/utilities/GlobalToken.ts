let globalToken: string | null = null

export const setGlobalIdToken = (info: string): string => {
  return globalToken = info;
};

export const getGlobalIdToken = ():string | null => globalToken;