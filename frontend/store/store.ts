import {observable} from 'mobx';
import chatRepository from '../repository/chatRepository';

export const createStore = () => {
  const store = {
    chatList: observable.array([]),
    getChatList: async () => {
      try {
        console.log('get list');
        const {data} = await chatRepository.getChatList();
        console.log('get list2');
        console.log({data});
        store.chatList = data;
      } catch (error) {
        alert(error);
      }
    },
  };
  return store;
};

export type TStore = ReturnType<typeof createStore>;
