import {observable} from 'mobx';

export const createStore = () => {
  const store = {
    chatList: observable.array([]),
  };
  return store;
};

export type TStore = ReturnType<typeof createStore>;
