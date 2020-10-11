import React, {useCallback, useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {observer} from 'mobx-react-lite';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import chatStore, {ChatStore} from '../store/chat';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import useStore from '../store/useObservable';

interface Props {
  store: ChatStore;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Header = observer(({store}: Props) => {
  const [isNameOpen, setIsNameOpen] = useState<boolean>(false);
  const [name, setName] = useState('');
  const {createChat} = store;
  const onPress = useCallback(() => {
    if (isNameOpen) {
      if (!name.trim()) {
        alert('insert name!');
      } else {
        createChat(name);
        // setName('');
      }
    }
    setIsNameOpen(!isNameOpen);
  }, [isNameOpen, setIsNameOpen, name, createChat]);
  const onChange = useCallback(
    (text) => {
      setName(text);
    },
    [setName],
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Chat</Text>
      {isNameOpen && (
        <TextInput
          style={styles.name}
          value={name}
          placeholder={'chat name'}
          onChangeText={onChange}
        />
      )}
      <Button
        title={!isNameOpen ? 'Create a Room' : 'Create!'}
        onPress={onPress}
      />
    </View>
  );
});

// useStore
// const Header = observer(({store}: Props) => {
//   // const {isChat, setIsChat} = store;
//   const {chat} = useStore();
//   const {isChat} = chat;
//   // const onPress = useCallback(() => {
//   //   chat.setIsChat(!isChat);
//   // }, [isChat, setIsChat]);
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Simple Chat</Text>
//       <Button title={!isChat ? 'Create a Room' : 'Exit'} onPress={onPress} />
//     </View>
//   );
// });

// useChatData
// const Header = observer(() => {
//   // const {isChat, setIsChat} = store;
//   const {isChat, setIsChat} = useChatData();
//   const onPress = useCallback(() => {
//     setIsChat(!isChat.get());
//   }, [isChat, setIsChat]);
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Simple Chat</Text>
//       <Button
//         title={!isChat.get() ? 'Create a Room' : 'Exit'}
//         onPress={onPress}
//       />
//     </View>
//   );
// });

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'yellow',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 25,
  },
  name: {
    backgroundColor: 'white',
    width: 120,
    height: 30,
    fontSize: 20,
  },
});

export default () => <Header store={chatStore} />;
// export default Header;
