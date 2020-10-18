import {action, makeAutoObservable} from 'mobx';
import {ChatType} from '../types';
import chatRepository from '../repository/chatRepository';

export const dummy: ChatType[] = [
  {id: '1', name: 'test1'},
  {id: '2', name: 'test2'},
  {id: '3', name: 'test3'},
  {id: '4', name: 'test4'},
  {id: '5', name: 'test5'},
];

export class ChatStore {
  chatList: ChatType[] = [];

  constructor() {
    makeAutoObservable(this);
    // this.setChatList(dummy);
  }

  @action
  setChatList = (list: ChatType[]) => {
    this.chatList = list;
  };

  @action
  addChat = (chat: ChatType) => {
    this.chatList.push(chat);
  };

  createChat = async (chatName: string) => {
    console.log(chatRepository);
    try {
      const {data} = await chatRepository.createChat(chatName);
      console.log({data});
      const {id, name} = data;
      alert(`id : ${id}, name : ${name}`);
      this.addChat({id, name});
    } catch (err) {
      console.error(err);
    }
  };

  getList = async () => {
    try {
      const {data} = await chatRepository.getChatList();
      console.log({data});
      this.setChatList(data);
    } catch (error) {
      console.error(error);
    }
  };
}

export default new ChatStore();
