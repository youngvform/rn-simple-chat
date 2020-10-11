import {observable} from 'mobx';

const chat = observable({
  isNameOpen: false,
  setIsChat(isChat: boolean) {
    this.isChat = isChat;
  },
});

const useStore = () => ({chat});

export default useStore;
