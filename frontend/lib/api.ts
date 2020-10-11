import axios from 'axios';

export const baseApiUrl =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:4000'
    : 'http://localhost:4000';

export const axiosClient = axios.create({
  timeout: 5000,
  baseURL: baseApiUrl,
});

const chatApi = baseApiUrl + '/chat';

export const apiUrls = {
  createChat: `${chatApi}/create`,
  getChats: `${chatApi}/`,
  getMessages: (chatId: string) => `/message/${chatId}`,
  sendMessage: `/message/`,
};
