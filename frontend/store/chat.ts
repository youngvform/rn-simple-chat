import {action, makeAutoObservable} from 'mobx';

export class ChatStore {
  isChat: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }
  @action
  setIsChat = (isChat: boolean) => {
    this.isChat = isChat;
  };
}

export default new ChatStore();
