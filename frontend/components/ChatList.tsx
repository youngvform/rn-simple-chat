import React from 'react';
import {Text, View} from 'react-native';
import {useChatData} from '../store/useChatStoreData';
import Chat from './Chat';

function ChatList() {
  const {chatList} = useChatData();

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
