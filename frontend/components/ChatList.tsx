import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useChatData} from '../store/useChatStoreData';
import Chat from './Chat';

function ChatList() {
  const {chatList, getChatList} = useChatData();
  useEffect(() => {
    getChatList();
  }, [getChatList]);
  console.log({chatList});

  return (
    <View>
      <Text>ChatList</Text>
      {chatList.map((chat) => (
        <Chat key={chat.id} name={chat.name} />
      ))}
    </View>
  );
}

export default ChatList;
