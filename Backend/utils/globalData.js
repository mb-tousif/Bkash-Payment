global.idToken = null;

export const setGlobalIdToken = (info) => {
  global.idToken = info;
};

export const getGlobalIdToken = () => global.idToken;
