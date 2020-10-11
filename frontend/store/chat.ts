import {action, makeAutoObservable} from 'mobx';
import {ChatType} from '../types';

export const dummy: ChatType[] = [
  {id: '1', name: 'test1'},
  {id: '2', name: 'test2'},
  {id: '3', name: 'test3'},
  {id: '4', name: 'test4'},
  {id: '5', name: 'test5'},
];

export class ChatStore {
  isChat: boolean = false;
  chatList: ChatType[] = [];

  constructor() {
    makeAutoObservable(this);
    this.setChatList(dummy);
  }
  @action
  setIsChat = (isChat: boolean) => {
    this.isChat = isChat;
  };

  @action
  setChatList = (list: ChatType[]) => {
    this.chatList = list;
  };

  @action
  addChat = (chat: ChatType) => {
    this.chatList.push(chat);
  };

  get getList() {
    return this.chatList;
  }
}

export default new ChatStore();
