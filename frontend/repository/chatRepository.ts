import {apiUrls, axiosClient} from '../lib/api';

class ChatRepository {
  createChat(name: string) {
    return axiosClient.post(apiUrls.createChat, {name});
  }

  getChatList() {
    return axiosClient.get(apiUrls.getChats);
  }
}

export default new ChatRepository();
