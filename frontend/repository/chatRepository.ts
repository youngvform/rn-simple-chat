import {apiUrls, axiosClient} from '../lib/api';

class ChatRepository {
  createChat(name: string) {
    return axiosClient.post(apiUrls.createChat, {name});
  }
}

export default new ChatRepository();
