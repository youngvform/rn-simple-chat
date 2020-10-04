import {observable} from 'mobx';

export const createStore = () => {
  const store = {
    isChat: observable.box(false),
    setIsChat(isChat: boolean) {
      this.isChat.set(isChat);
    },
  };
  return store;
};

export type TStore = ReturnType<typeof createStore>;
