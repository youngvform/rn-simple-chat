import {observable} from 'mobx';
import {dummy} from './chat';

export const createStore = () => {
  const store = {
    isChat: observable.box(false),
    chatList: observable.array(dummy),
    setIsChat(isChat: boolean) {
      this.isChat.set(isChat);
    },
  };
  return store;
};

export type TStore = ReturnType<typeof createStore>;
